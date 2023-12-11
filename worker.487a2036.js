function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t,r,n,o,i=globalThis,a={},s={},u=i.parcelRequire423e;null==u&&((u=function(e){if(e in a)return a[e].exports;if(e in s){var t=s[e];delete s[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){s[e]=t},i.parcelRequire423e=u),(0,u.register)("dLq9J",function(t,r){e(t.exports,"expose",()=>c),e(t.exports,"wrap",()=>h),e(t.exports,"transfer",()=>b);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let n=Symbol("Comlink.proxy"),o=Symbol("Comlink.endpoint"),i=Symbol("Comlink.releaseProxy"),a=Symbol("Comlink.finalizer"),s=Symbol("Comlink.thrown"),u=e=>"object"==typeof e&&null!==e||"function"==typeof e,l=new Map([["proxy",{canHandle:e=>u(e)&&e[n],serialize(e){let{port1:t,port2:r}=new MessageChannel;return c(e,t),[r,[r]]},deserialize:e=>(e.start(),h(e))}],["throw",{canHandle:e=>u(e)&&s in e,serialize:({value:e})=>[e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[]],deserialize(e){if(e.isError)throw Object.assign(Error(e.value.message),e.value);throw e.value}}]]);function c(e,t=globalThis,r=["*"]){t.addEventListener("message",function o(i){let u;if(!i||!i.data)return;if(!function(e,t){for(let r of e)if(t===r||"*"===r||r instanceof RegExp&&r.test(t))return!0;return!1}(r,i.origin)){console.warn(`Invalid origin '${i.origin}' for comlink proxy`);return}let{id:l,type:h,path:p}=Object.assign({path:[]},i.data),d=(i.data.argumentList||[]).map(T);try{let t=p.slice(0,-1).reduce((e,t)=>e[t],e),r=p.reduce((e,t)=>e[t],e);switch(h){case"GET":u=r;break;case"SET":t[p.slice(-1)[0]]=T(i.data.value),u=!0;break;case"APPLY":u=r.apply(t,d);break;case"CONSTRUCT":var v;v=new r(...d),u=Object.assign(v,{[n]:!0});break;case"ENDPOINT":{let{port1:t,port2:r}=new MessageChannel;c(e,r),u=b(t,[t])}break;case"RELEASE":u=void 0;break;default:return}}catch(e){u={value:e,[s]:0}}Promise.resolve(u).catch(e=>({value:e,[s]:0})).then(r=>{let[n,i]=w(r);t.postMessage(Object.assign(Object.assign({},n),{id:l}),i),"RELEASE"===h&&(t.removeEventListener("message",o),f(t),a in e&&"function"==typeof e[a]&&e[a]())}).catch(e=>{let[r,n]=w({value:TypeError("Unserializable return value"),[s]:0});t.postMessage(Object.assign(Object.assign({},r),{id:l}),n)})}),t.start&&t.start()}function f(e){"MessagePort"===e.constructor.name&&e.close()}function h(e,t){return function e(t,r=[],n=function(){}){let a=!1,s=new Proxy(n,{get(n,o){if(p(a),o===i)return()=>{m&&m.unregister(s),d(t),a=!0};if("then"===o){if(0===r.length)return{then:()=>s};let e=E(t,{type:"GET",path:r.map(e=>e.toString())}).then(T);return e.then.bind(e)}return e(t,[...r,o])},set(e,n,o){p(a);let[i,s]=w(o);return E(t,{type:"SET",path:[...r,n].map(e=>e.toString()),value:i},s).then(T)},apply(n,i,s){p(a);let u=r[r.length-1];if(u===o)return E(t,{type:"ENDPOINT"}).then(T);if("bind"===u)return e(t,r.slice(0,-1));let[l,c]=g(s);return E(t,{type:"APPLY",path:r.map(e=>e.toString()),argumentList:l},c).then(T)},construct(e,n){p(a);let[o,i]=g(n);return E(t,{type:"CONSTRUCT",path:r.map(e=>e.toString()),argumentList:o},i).then(T)}});return function(e,t){let r=(v.get(t)||0)+1;v.set(t,r),m&&m.register(e,t,e)}(s,t),s}(e,[],t)}function p(e){if(e)throw Error("Proxy has been released and is not useable")}function d(e){return E(e,{type:"RELEASE"}).then(()=>{f(e)})}let v=new WeakMap,m="FinalizationRegistry"in globalThis&&new FinalizationRegistry(e=>{let t=(v.get(e)||0)-1;v.set(e,t),0===t&&d(e)});function g(e){var t;let r=e.map(w);return[r.map(e=>e[0]),(t=r.map(e=>e[1]),Array.prototype.concat.apply([],t))]}let y=new WeakMap;function b(e,t){return y.set(e,t),e}function w(e){for(let[t,r]of l)if(r.canHandle(e)){let[n,o]=r.serialize(e);return[{type:"HANDLER",name:t,value:n},o]}return[{type:"RAW",value:e},y.get(e)||[]]}function T(e){switch(e.type){case"HANDLER":return l.get(e.name).deserialize(e.value);case"RAW":return e.value}}function E(e,t,r){return new Promise(n=>{let o=[,,,,].fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-");e.addEventListener("message",function t(r){r.data&&r.data.id&&r.data.id===o&&(e.removeEventListener("message",t),n(r.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:o},t),r)})}}),e({},"WasmSorter",()=>C);var l=u("dLq9J"),c={},f=c={};function h(){throw Error("setTimeout has not been defined")}function p(){throw Error("clearTimeout has not been defined")}function d(e){if(r===setTimeout)return setTimeout(e,0);if((r===h||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:h}catch(e){r=h}try{n="function"==typeof clearTimeout?clearTimeout:p}catch(e){n=p}}();var v=[],m=!1,g=-1;function y(){m&&o&&(m=!1,o.length?v=o.concat(v):g=-1,v.length&&b())}function b(){if(!m){var e=d(y);m=!0;for(var t=v.length;t;){for(o=v,v=[];++g<t;)o&&o[g].run();g=-1,t=v.length}o=null,m=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===p||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function w(e,t){this.fun=e,this.array=t}function T(){}f.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];v.push(new w(e,t)),1!==v.length||m||d(b)},w.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=T,f.addListener=T,f.once=T,f.off=T,f.removeListener=T,f.removeAllListeners=T,f.emit=T,f.prependListener=T,f.prependOnceListener=T,f.listeners=function(e){return[]},f.binding=function(e){throw Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw Error("process.chdir is not supported")},f.umask=function(){return 0};var E={};E=new URL("sort.594a65d3.wasm",import.meta.url).toString();var A=(t="file:///node_modules/@zappar/three-gaussian-splat/lib/cpp-sorter/sort.js",function(e={}){e.ready=new Promise((e,t)=>{r=e,n=t});var r,n,o,i,a,s,u,l,f,h,p,d,v,m,g,y,b,w,T,A,P,C,S,_,R=Object.assign({},e),k="object"==typeof window,x="function"==typeof importScripts;"object"==typeof c&&"object"==typeof c.versions&&c.versions.node;var W="";(k||x)&&(x?W=self.location.href:"undefined"!=typeof document&&document.currentScript&&(W=document.currentScript.src),t&&(W=t),W=0!==W.indexOf("blob:")?W.substr(0,W.replace(/[?#].*/,"").lastIndexOf("/")+1):"",x&&(o=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)})),e.print||console.log.bind(console);var F=e.printErr||console.error.bind(console);Object.assign(e,R),R=null,e.arguments&&e.arguments,e.thisProgram&&e.thisProgram,e.quit&&e.quit,e.wasmBinary&&(i=e.wasmBinary),"object"!=typeof WebAssembly&&H("no native wasm support detected");var j=!1;function O(){var t=a.buffer;e.HEAP8=s=new Int8Array(t),e.HEAP16=l=new Int16Array(t),e.HEAPU8=u=new Uint8Array(t),e.HEAPU16=f=new Uint16Array(t),e.HEAP32=h=new Int32Array(t),e.HEAPU32=p=new Uint32Array(t),e.HEAPF32=d=new Float32Array(t),e.HEAPF64=v=new Float64Array(t)}var L=[],U=[],$=[],B=0,I=null,M=null;function H(t){e.onAbort&&e.onAbort(t),F(t="Aborted("+t+")"),j=!0,t+=". Build with -sASSERTIONS for more info.";var r=new WebAssembly.RuntimeError(t);throw n(r),r}var z=e=>e.startsWith("data:application/octet-stream;base64,");function D(e){if(e==m&&i)return new Uint8Array(i);if(o)return o(e);throw"both async and sync fetching of the wasm failed"}function N(e,t,r){return(!i&&(k||x)&&"function"==typeof fetch?fetch(e,{credentials:"same-origin"}).then(t=>{if(!t.ok)throw"failed to load wasm binary file at '"+e+"'";return t.arrayBuffer()}).catch(()=>D(e)):Promise.resolve().then(()=>D(e))).then(e=>WebAssembly.instantiate(e,t)).then(e=>e).then(r,e=>{F(`failed to asynchronously prepare wasm: ${e}`),H(e)})}e.locateFile?z(m="sort.wasm")||(P=m,m=e.locateFile?e.locateFile(P,W):W+P):m=new URL(E).href;var V=t=>{for(;t.length>0;)t.shift()(e)};function q(e){this.excPtr=e,this.ptr=e-24,this.set_type=function(e){p[this.ptr+4>>2]=e},this.get_type=function(){return p[this.ptr+4>>2]},this.set_destructor=function(e){p[this.ptr+8>>2]=e},this.get_destructor=function(){return p[this.ptr+8>>2]},this.set_caught=function(e){e=e?1:0,s[this.ptr+12>>0]=e},this.get_caught=function(){return 0!=s[this.ptr+12>>0]},this.set_rethrown=function(e){e=e?1:0,s[this.ptr+13>>0]=e},this.get_rethrown=function(){return 0!=s[this.ptr+13>>0]},this.init=function(e,t){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(t)},this.set_adjusted_ptr=function(e){p[this.ptr+16>>2]=e},this.get_adjusted_ptr=function(){return p[this.ptr+16>>2]},this.get_exception_ptr=function(){if(eq(this.get_type()))return p[this.excPtr>>2];var e=this.get_adjusted_ptr();return 0!==e?e:this.excPtr}}e.noExitRuntime;var Y=0,G=0,J=e=>{for(var t="",r=e;u[r];)t+=g[u[r++]];return t},X={},K={},Q={},Z=e=>{throw new y(e)},ee=e=>{throw new b(e)},et=(e,t,r)=>{function n(t){var n=r(t);n.length!==e.length&&ee("Mismatched type converter count");for(var o=0;o<e.length;++o)er(e[o],n[o])}e.forEach(function(e){Q[e]=t});var o=Array(t.length),i=[],a=0;t.forEach((e,t)=>{K.hasOwnProperty(e)?o[t]=K[e]:(i.push(e),X.hasOwnProperty(e)||(X[e]=[]),X[e].push(()=>{o[t]=K[e],++a===i.length&&n(o)}))}),0===i.length&&n(o)};function er(e,t,r={}){if(!("argPackAdvance"in t))throw TypeError("registerType registeredInstance requires argPackAdvance");return function(e,t,r={}){var n=t.name;if(e||Z(`type "${n}" must have a positive integer typeid pointer`),K.hasOwnProperty(e)){if(r.ignoreDuplicateRegistrations)return;Z(`Cannot register type '${n}' twice`)}if(K[e]=t,delete Q[e],X.hasOwnProperty(e)){var o=X[e];delete X[e],o.forEach(e=>e())}}(e,t,r)}function en(){this.allocated=[void 0],this.freelist=[]}var eo=new en,ei=e=>{e>=eo.reserved&&0==--eo.get(e).refcount&&eo.free(e)},ea={toValue:e=>(e||Z("Cannot use deleted val. handle = "+e),eo.get(e).value),toHandle:e=>{switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return eo.allocate({refcount:1,value:e})}}};function es(e){return this.fromWireType(h[e>>2])}var eu=(e,t)=>{switch(t){case 4:return function(e){return this.fromWireType(d[e>>2])};case 8:return function(e){return this.fromWireType(v[e>>3])};default:throw TypeError(`invalid float width (${t}): ${e}`)}},el=(e,t)=>Object.defineProperty(t,"name",{value:e}),ec=e=>{for(;e.length;){var t=e.pop();e.pop()(t)}},ef=(e,t,r)=>{if(void 0===e[t].overloadTable){var n=e[t];e[t]=function(){return e[t].overloadTable.hasOwnProperty(arguments.length)||Z(`Function '${r}' called with an invalid number of arguments (${arguments.length}) - expects one of (${e[t].overloadTable})!`),e[t].overloadTable[arguments.length].apply(this,arguments)},e[t].overloadTable=[],e[t].overloadTable[n.argCount]=n}},eh=(t,r,n)=>{e.hasOwnProperty(t)?((void 0===n||void 0!==e[t].overloadTable&&void 0!==e[t].overloadTable[n])&&Z(`Cannot register public name '${t}' twice`),ef(e,t,t),e.hasOwnProperty(n)&&Z(`Cannot register multiple overloads of a function with the same number of arguments (${n})!`),e[t].overloadTable[n]=r):(e[t]=r,void 0!==n&&(e[t].numArguments=n))},ep=(e,t)=>{for(var r=[],n=0;n<e;n++)r.push(p[t+4*n>>2]);return r},ed=(t,r,n)=>{e.hasOwnProperty(t)||ee("Replacing nonexistant public symbol"),void 0!==e[t].overloadTable&&void 0!==n?e[t].overloadTable[n]=r:(e[t]=r,e[t].argCount=n)},ev=(t,r,n)=>{var o=e["dynCall_"+t];return n&&n.length?o.apply(null,[r].concat(n)):o.call(null,r)},em=[],eg=e=>{var t=em[e];return t||(e>=em.length&&(em.length=e+1),em[e]=t=w.get(e)),t},ey=(e,t,r)=>e.includes("j")?ev(e,t,r):eg(t).apply(null,r),eb=(e,t)=>{var r=[];return function(){return r.length=0,Object.assign(r,arguments),ey(e,t,r)}},ew=(e,t)=>{var r=(e=J(e)).includes("j")?eb(e,t):eg(t);return"function"!=typeof r&&Z(`unknown function pointer with signature ${e}: ${t}`),r},eT=e=>{var t=eD(e),r=J(t);return eV(t),r},eE=(e,t)=>{var r=[],n={};throw t.forEach(function e(t){if(!n[t]&&!K[t]){if(Q[t]){Q[t].forEach(e);return}r.push(t),n[t]=!0}}),new T(`${e}: `+r.map(eT).join([", "]))},eA=e=>{let t=(e=e.trim()).indexOf("(");return -1!==t?e.substr(0,t):e},eP=(e,t,r)=>{switch(t){case 1:return r?e=>s[e>>0]:e=>u[e>>0];case 2:return r?e=>l[e>>1]:e=>f[e>>1];case 4:return r?e=>h[e>>2]:e=>p[e>>2];default:throw TypeError(`invalid integer width (${t}): ${e}`)}};function eC(e){return this.fromWireType(p[e>>2])}var eS=(e,t,r,n)=>{if(!(n>0))return 0;for(var o=r,i=r+n-1,a=0;a<e.length;++a){var s=e.charCodeAt(a);if(s>=55296&&s<=57343&&(s=65536+((1023&s)<<10)|1023&e.charCodeAt(++a)),s<=127){if(r>=i)break;t[r++]=s}else if(s<=2047){if(r+1>=i)break;t[r++]=192|s>>6,t[r++]=128|63&s}else if(s<=65535){if(r+2>=i)break;t[r++]=224|s>>12,t[r++]=128|s>>6&63,t[r++]=128|63&s}else{if(r+3>=i)break;t[r++]=240|s>>18,t[r++]=128|s>>12&63,t[r++]=128|s>>6&63,t[r++]=128|63&s}}return t[r]=0,r-o},e_=(e,t,r)=>eS(e,u,t,r),eR=e=>{for(var t=0,r=0;r<e.length;++r){var n=e.charCodeAt(r);n<=127?t++:n<=2047?t+=2:n>=55296&&n<=57343?(t+=4,++r):t+=3}return t},ek="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,ex=(e,t,r)=>{for(var n=t+r,o=t;e[o]&&!(o>=n);)++o;if(o-t>16&&e.buffer&&ek)return ek.decode(e.subarray(t,o));for(var i="";t<o;){var a=e[t++];if(!(128&a)){i+=String.fromCharCode(a);continue}var s=63&e[t++];if((224&a)==192){i+=String.fromCharCode((31&a)<<6|s);continue}var u=63&e[t++];if((a=(240&a)==224?(15&a)<<12|s<<6|u:(7&a)<<18|s<<12|u<<6|63&e[t++])<65536)i+=String.fromCharCode(a);else{var l=a-65536;i+=String.fromCharCode(55296|l>>10,56320|1023&l)}}return i},eW=(e,t)=>e?ex(u,e,t):"",eF="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0,ej=(e,t)=>{for(var r=e,n=r>>1,o=n+t/2;!(n>=o)&&f[n];)++n;if((r=n<<1)-e>32&&eF)return eF.decode(u.subarray(e,r));for(var i="",a=0;!(a>=t/2);++a){var s=l[e+2*a>>1];if(0==s)break;i+=String.fromCharCode(s)}return i},eO=(e,t,r)=>{if(void 0===r&&(r=2147483647),r<2)return 0;for(var n=t,o=(r-=2)<2*e.length?r/2:e.length,i=0;i<o;++i){var a=e.charCodeAt(i);l[t>>1]=a,t+=2}return l[t>>1]=0,t-n},eL=e=>2*e.length,eU=(e,t)=>{for(var r=0,n="";!(r>=t/4);){var o=h[e+4*r>>2];if(0==o)break;if(++r,o>=65536){var i=o-65536;n+=String.fromCharCode(55296|i>>10,56320|1023&i)}else n+=String.fromCharCode(o)}return n},e$=(e,t,r)=>{if(void 0===r&&(r=2147483647),r<4)return 0;for(var n=t,o=n+r-4,i=0;i<e.length;++i){var a=e.charCodeAt(i);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&e.charCodeAt(++i)),h[t>>2]=a,(t+=4)+4>o)break}return h[t>>2]=0,t-n},eB=e=>{for(var t=0,r=0;r<e.length;++r){var n=e.charCodeAt(r);n>=55296&&n<=57343&&++r,t+=4}return t},eI=()=>2147483648,eM=e=>{var t=(e-a.buffer.byteLength+65535)/65536;try{return a.grow(t),O(),1}catch(e){}};(()=>{for(var e=Array(256),t=0;t<256;++t)e[t]=String.fromCharCode(t);g=e})(),y=e.BindingError=class extends Error{constructor(e){super(e),this.name="BindingError"}},b=e.InternalError=class extends Error{constructor(e){super(e),this.name="InternalError"}},Object.assign(en.prototype,{get(e){return this.allocated[e]},has(e){return void 0!==this.allocated[e]},allocate(e){var t=this.freelist.pop()||this.allocated.length;return this.allocated[t]=e,t},free(e){this.allocated[e]=void 0,this.freelist.push(e)}}),eo.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),eo.reserved=eo.allocated.length,e.count_emval_handles=()=>{for(var e=0,t=eo.reserved;t<eo.allocated.length;++t)void 0!==eo.allocated[t]&&++e;return e},T=e.UnboundTypeError=(C=Error,(_=el(S="UnboundTypeError",function(e){this.name=S,this.message=e;var t=Error(e).stack;void 0!==t&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))})).prototype=Object.create(C.prototype),_.prototype.constructor=_,_.prototype.toString=function(){return void 0===this.message?this.name:`${this.name}: ${this.message}`},_);var eH={n:(e,t,r)=>{throw new q(e).init(t,r),Y=e,G++,Y},k:(e,t,r,n,o)=>{},i:(e,t,r,n)=>{er(e,{name:t=J(t),fromWireType:function(e){return!!e},toWireType:function(e,t){return t?r:n},argPackAdvance:8,readValueFromPointer:function(e){return this.fromWireType(u[e])},destructorFunction:null})},h:(e,t)=>{er(e,{name:t=J(t),fromWireType:e=>{var t=ea.toValue(e);return ei(e),t},toWireType:(e,t)=>ea.toHandle(t),argPackAdvance:8,readValueFromPointer:es,destructorFunction:null})},d:(e,t,r)=>{er(e,{name:t=J(t),fromWireType:e=>e,toWireType:(e,t)=>t,argPackAdvance:8,readValueFromPointer:eu(t,r),destructorFunction:null})},g:(e,t,r,n,o,i,a)=>{var s=ep(t,r);e=eA(e=J(e)),o=ew(n,o),eh(e,function(){eE(`Cannot call ${e} due to unbound types`,s)},t-1),et([],s,function(r){var n=[r[0],null].concat(r.slice(1));return ed(e,function(e,t,r,n,o,i){var a=t.length;a<2&&Z("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var s=null!==t[1]&&!1,u=!1,l=1;l<t.length;++l)if(null!==t[l]&&void 0===t[l].destructorFunction){u=!0;break}for(var c="void"!==t[0].name,f="",h="",l=0;l<a-2;++l)f+=(0!==l?", ":"")+"arg"+l,h+=(0!==l?", ":"")+"arg"+l+"Wired";var p=`
        return function (${f}) {
        if (arguments.length !== ${a-2}) {
          throwBindingError('function ${e} called with ' + arguments.length + ' arguments, expected ${a-2}');
        }`;u&&(p+="var destructors = [];\n");var d=u?"destructors":"null",v=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],m=[Z,n,o,ec,t[0],t[1]];s&&(p+="var thisWired = classParam.toWireType("+d+", this);\n");for(var l=0;l<a-2;++l)p+="var arg"+l+"Wired = argType"+l+".toWireType("+d+", arg"+l+"); // "+t[l+2].name+"\n",v.push("argType"+l),m.push(t[l+2]);if(s&&(h="thisWired"+(h.length>0?", ":"")+h),p+=(c||i?"var rv = ":"")+"invoker(fn"+(h.length>0?", ":"")+h+");\n",u)p+="runDestructors(destructors);\n";else for(var l=s?1:2;l<t.length;++l){var g=1===l?"thisWired":"arg"+(l-2)+"Wired";null!==t[l].destructorFunction&&(p+=g+"_dtor("+g+"); // "+t[l].name+"\n",v.push(g+"_dtor"),m.push(t[l].destructorFunction))}c&&(p+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),p+="}\n",v.push(p);var y=(function(e,t){if(!(e instanceof Function))throw TypeError(`new_ called with constructor type ${typeof e} which is not a function`);var r=el(e.name||"unknownFunctionName",function(){});r.prototype=e.prototype;var n=new r,o=e.apply(n,t);return o instanceof Object?o:n})(Function,v).apply(null,m);return el(e,y)}(e,n,0,o,i,a),t-1),[]})},b:(e,t,r,n,o)=>{t=J(t),-1===o&&(o=4294967295);var i=e=>e;if(0===n){var a=32-8*r;i=e=>e<<a>>>a}var s=t.includes("unsigned"),u=(e,t)=>{};er(e,{name:t,fromWireType:i,toWireType:s?function(e,t){return u(t,this.name),t>>>0}:function(e,t){return u(t,this.name),t},argPackAdvance:8,readValueFromPointer:eP(t,r,0!==n),destructorFunction:null})},a:(e,t,r)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][t];function o(e){var t=p[e>>2],r=p[e+4>>2];return new n(s.buffer,r,t)}er(e,{name:r=J(r),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})},e:(e,t)=>{var r="std::string"===(t=J(t));er(e,{name:t,fromWireType(e){var t,n=p[e>>2],o=e+4;if(r)for(var i=o,a=0;a<=n;++a){var s=o+a;if(a==n||0==u[s]){var l=s-i,c=eW(i,l);void 0===t?t=c:t+="\x00"+c,i=s+1}}else{for(var f=Array(n),a=0;a<n;++a)f[a]=String.fromCharCode(u[o+a]);t=f.join("")}return eV(e),t},toWireType(e,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var n,o="string"==typeof t;o||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array||Z("Cannot pass non-string to std::string"),n=r&&o?eR(t):t.length;var i=eN(4+n+1),a=i+4;if(p[i>>2]=n,r&&o)e_(t,a,n+1);else if(o)for(var s=0;s<n;++s){var l=t.charCodeAt(s);l>255&&(eV(a),Z("String has UTF-16 code units that do not fit in 8 bits")),u[a+s]=l}else for(var s=0;s<n;++s)u[a+s]=t[s];return null!==e&&e.push(eV,i),i},argPackAdvance:8,readValueFromPointer:eC,destructorFunction(e){eV(e)}})},c:(e,t,r)=>{var n,o,i,a,s;r=J(r),2===t?(n=ej,o=eO,a=eL,i=()=>f,s=1):4===t&&(n=eU,o=e$,a=eB,i=()=>p,s=2),er(e,{name:r,fromWireType:e=>{for(var r,o=p[e>>2],a=i(),u=e+4,l=0;l<=o;++l){var c=e+4+l*t;if(l==o||0==a[c>>s]){var f=c-u,h=n(u,f);void 0===r?r=h:r+="\x00"+h,u=c+t}}return eV(e),r},toWireType:(e,n)=>{"string"!=typeof n&&Z(`Cannot pass non-string to C++ string type ${r}`);var i=a(n),u=eN(4+i+t);return p[u>>2]=i>>s,o(n,u+4,i+t),null!==e&&e.push(eV,u),u},argPackAdvance:8,readValueFromPointer:es,destructorFunction(e){eV(e)}})},j:(e,t)=>{er(e,{isVoid:!0,name:t=J(t),argPackAdvance:0,fromWireType:()=>void 0,toWireType:(e,t)=>void 0})},f:()=>{H("")},m:(e,t,r)=>u.copyWithin(e,t,t+r),l:e=>{var t=u.length;e>>>=0;var r=eI();if(e>r)return!1;for(var n=(e,t)=>e+(t-e%t)%t,o=1;o<=4;o*=2){var i=t*(1+.2/o);if(i=Math.min(i,e+100663296),eM(Math.min(r,n(Math.max(e,i),65536))))return!0}return!1}},ez=function(){var t,r,o,s={a:eH};function u(t,r){var n;return a=(ez=t.exports).o,O(),w=ez.s,n=ez.p,U.unshift(n),function(t){if(B--,e.monitorRunDependencies&&e.monitorRunDependencies(B),0==B&&(null!==I&&(clearInterval(I),I=null),M)){var r=M;M=null,r()}}(0),ez}if(B++,e.monitorRunDependencies&&e.monitorRunDependencies(B),e.instantiateWasm)try{return e.instantiateWasm(s,u)}catch(e){F(`Module.instantiateWasm callback failed with error: ${e}`),n(e)}return(t=i,r=m,o=function(e){u(e.instance)},t||"function"!=typeof WebAssembly.instantiateStreaming||z(r)||"function"!=typeof fetch?N(r,s,o):fetch(r,{credentials:"same-origin"}).then(e=>WebAssembly.instantiateStreaming(e,s).then(o,function(e){return F(`wasm streaming compile failed: ${e}`),F("falling back to ArrayBuffer instantiation"),N(r,s,o)}))).catch(n),{}}(),eD=e=>(eD=ez.q)(e),eN=e._malloc=t=>(eN=e._malloc=ez.r)(t),eV=e._free=t=>(eV=e._free=ez.t)(t),eq=e=>(eq=ez.u)(e);function eY(){!(B>0)&&(function(){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;){var t;t=e.preRun.shift(),L.unshift(t)}V(L)}(),B>0||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1),t()},1)):t()));function t(){!A&&(A=!0,e.calledRun=!0,j||(V(U),r(e),e.onRuntimeInitialized&&e.onRuntimeInitialized(),function(){if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var t;t=e.postRun.shift(),$.unshift(t)}V($)}()))}}if(M=function e(){A||eY(),A||(M=e)},e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.pop()();return eY(),e.ready});class P{constructor(e,t=0){this.bufferSize=e,this.pool=[],this.initPool(t)}initPool(e){for(let t=0;t<e;t++)this.pool.push(new ArrayBuffer(this.bufferSize))}getBuffer(){return this.pool.length>0?this.pool.pop():new ArrayBuffer(this.bufferSize)}returnBuffer(e){e.byteLength===this.bufferSize&&this.pool.push(e)}}class C{constructor(e,t){this.vertexCount=e,this.globalBuffer=t;let r=this.calculateCombinedLength();this.bufferPool=new P(r,2)}async load(){this.module=await A(),this.viewProjPtr=this.module._malloc(16*Float32Array.BYTES_PER_ELEMENT),this.globalBufferPtr=this.module._malloc(32*this.vertexCount),this.combinedPtr=this.module._malloc(this.calculateCombinedLength()),this.module.HEAPU8.set(this.globalBuffer,this.globalBufferPtr)}runSort(e){this.module.HEAPF32.set(e,this.viewProjPtr/Float32Array.BYTES_PER_ELEMENT),this.module.runSort(this.viewProjPtr,this.globalBufferPtr,this.vertexCount,this.combinedPtr);let t=this.combinedPtr,r=this.calculateCombinedLength(),n=this.bufferPool.getBuffer();return new Uint8Array(n).set(new Uint8Array(this.module.HEAPU8.buffer,t,r)),(0,l.transfer)(n,[n])}returnBuffer(e){this.bufferPool.returnBuffer(e)}calculateCombinedLength(){return 16*this.vertexCount+12*this.vertexCount+12*this.vertexCount+16*this.vertexCount*Float32Array.BYTES_PER_ELEMENT}dispose(){this.module&&(this.module._free(this.viewProjPtr),this.module._free(this.globalBufferPtr),this.module._free(this.combinedPtr))}}(0,l.expose)(C);
//# sourceMappingURL=worker.487a2036.js.map