// Importing necessary modules and components
import * as THREE from 'three';
import { GaussianSplatMesh } from '@zappar/three-gaussian-splat';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


const { innerWidth, innerHeight } = window;
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.0001, 100000);
const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

// Handling window resize events
window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 2, 6);

// Loading and adding the Gaussian Splat Mesh
const bonsai = new URL('./bonsai.splat', import.meta.url).href;
const splat = new GaussianSplatMesh(camera, renderer, bonsai, Infinity);
splat.load();

splat.position.y = 2;
splat.scale.setScalar(0.75);
scene.add(splat);

// Grid helper floor
const grid = new THREE.GridHelper(10, 10);
scene.add(grid);

// Animation loop
renderer.setAnimationLoop(animation);
controls.update();

function animation() {
  splat.update();
  renderer.render(scene, camera);
}
