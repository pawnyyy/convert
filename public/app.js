(()=>{var E=(o,i)=>()=>(i||o((i={exports:{}}).exports,i),i.exports);var ie=E((tt,H)=>{var V=function(o){"use strict";var i=Object.prototype,a=i.hasOwnProperty,f,u=typeof Symbol=="function"?Symbol:{},l=u.iterator||"@@iterator",p=u.asyncIterator||"@@asyncIterator",L=u.toStringTag||"@@toStringTag";function d(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch{d=function(e,r,s){return e[r]=s}}function U(t,e,r,s){var n=e&&e.prototype instanceof _?e:_,h=Object.create(n.prototype),v=new D(s||[]);return h._invoke=Ae(t,r,v),h}o.wrap=U;function R(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(s){return{type:"throw",arg:s}}}var T="suspendedStart",W="suspendedYield",x="executing",A="completed",b={};function _(){}function q(){}function k(){}var c={};d(c,l,function(){return this});var m=Object.getPrototypeOf,g=m&&m(m(Y([])));g&&g!==i&&a.call(g,l)&&(c=g);var F=k.prototype=_.prototype=Object.create(c);q.prototype=k,d(F,"constructor",k),d(k,"constructor",q),q.displayName=d(k,L,"GeneratorFunction");function S(t){["next","throw","return"].forEach(function(e){d(t,e,function(r){return this._invoke(e,r)})})}o.isGeneratorFunction=function(t){var e=typeof t=="function"&&t.constructor;return e?e===q||(e.displayName||e.name)==="GeneratorFunction":!1},o.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,d(t,L,"GeneratorFunction")),t.prototype=Object.create(F),t},o.awrap=function(t){return{__await:t}};function C(t,e){function r(h,v,w,j){var y=R(t[h],t,v);if(y.type==="throw")j(y.arg);else{var z=y.arg,G=z.value;return G&&typeof G=="object"&&a.call(G,"__await")?e.resolve(G.__await).then(function(O){r("next",O,w,j)},function(O){r("throw",O,w,j)}):e.resolve(G).then(function(O){z.value=O,w(z)},function(O){return r("throw",O,w,j)})}}var s;function n(h,v){function w(){return new e(function(j,y){r(h,v,j,y)})}return s=s?s.then(w,w):w()}this._invoke=n}S(C.prototype),d(C.prototype,p,function(){return this}),o.AsyncIterator=C,o.async=function(t,e,r,s,n){n===void 0&&(n=Promise);var h=new C(U(t,e,r,s),n);return o.isGeneratorFunction(e)?h:h.next().then(function(v){return v.done?v.value:h.next()})};function Ae(t,e,r){var s=T;return function(h,v){if(s===x)throw new Error("Generator is already running");if(s===A){if(h==="throw")throw v;return ne()}for(r.method=h,r.arg=v;;){var w=r.delegate;if(w){var j=oe(w,r);if(j){if(j===b)continue;return j}}if(r.method==="next")r.sent=r._sent=r.arg;else if(r.method==="throw"){if(s===T)throw s=A,r.arg;r.dispatchException(r.arg)}else r.method==="return"&&r.abrupt("return",r.arg);s=x;var y=R(t,e,r);if(y.type==="normal"){if(s=r.done?A:W,y.arg===b)continue;return{value:y.arg,done:r.done}}else y.type==="throw"&&(s=A,r.method="throw",r.arg=y.arg)}}}function oe(t,e){var r=t.iterator[e.method];if(r===f){if(e.delegate=null,e.method==="throw"){if(t.iterator.return&&(e.method="return",e.arg=f,oe(t,e),e.method==="throw"))return b;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return b}var s=R(r,t.iterator,e.arg);if(s.type==="throw")return e.method="throw",e.arg=s.arg,e.delegate=null,b;var n=s.arg;if(!n)return e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,b;if(n.done)e[t.resultName]=n.value,e.next=t.nextLoc,e.method!=="return"&&(e.method="next",e.arg=f);else return n;return e.delegate=null,b}S(F),d(F,L,"Generator"),d(F,l,function(){return this}),d(F,"toString",function(){return"[object Generator]"});function qe(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(qe,this),this.reset(!0)}o.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function s(){for(;e.length;){var n=e.pop();if(n in t)return s.value=n,s.done=!1,s}return s.done=!0,s}};function Y(t){if(t){var e=t[l];if(e)return e.call(t);if(typeof t.next=="function")return t;if(!isNaN(t.length)){var r=-1,s=function n(){for(;++r<t.length;)if(a.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=f,n.done=!0,n};return s.next=s}}return{next:ne}}o.values=Y;function ne(){return{value:f,done:!0}}return D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=f,this.done=!1,this.delegate=null,this.method="next",this.arg=f,this.tryEntries.forEach(M),!t)for(var e in this)e.charAt(0)==="t"&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=f)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if(e.type==="throw")throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(j,y){return h.type="throw",h.arg=t,e.next=j,y&&(e.method="next",e.arg=f),!!y}for(var s=this.tryEntries.length-1;s>=0;--s){var n=this.tryEntries[s],h=n.completion;if(n.tryLoc==="root")return r("end");if(n.tryLoc<=this.prev){var v=a.call(n,"catchLoc"),w=a.call(n,"finallyLoc");if(v&&w){if(this.prev<n.catchLoc)return r(n.catchLoc,!0);if(this.prev<n.finallyLoc)return r(n.finallyLoc)}else if(v){if(this.prev<n.catchLoc)return r(n.catchLoc,!0)}else if(w){if(this.prev<n.finallyLoc)return r(n.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var s=this.tryEntries[r];if(s.tryLoc<=this.prev&&a.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var n=s;break}}n&&(t==="break"||t==="continue")&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var h=n?n.completion:{};return h.type=t,h.arg=e,n?(this.method="next",this.next=n.finallyLoc,b):this.complete(h)},complete:function(t,e){if(t.type==="throw")throw t.arg;return t.type==="break"||t.type==="continue"?this.next=t.arg:t.type==="return"?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):t.type==="normal"&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),M(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var s=r.completion;if(s.type==="throw"){var n=s.arg;M(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:Y(t),resultName:e,nextLoc:r},this.method==="next"&&(this.arg=f),b}},o}(typeof H=="object"?H.exports:{});try{regeneratorRuntime=V}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=V:Function("r","regeneratorRuntime = r")(V)}});var se=E((rt,ae)=>{ae.exports={defaultArgs:["./ffmpeg","-nostdin","-y"],baseOptions:{log:!1,logger:()=>{},progress:()=>{},corePath:""}}});var Z=E((ot,le)=>{var J=!1,fe=()=>{},Ce=o=>{J=o},Ue=o=>{fe=o},Re=(o,i)=>{fe({type:o,message:i}),J&&console.log(`[${o}] ${i}`)};le.exports={logging:J,setLogging:Ce,setCustomLogger:Ue,log:Re}});var pe=E((nt,ue)=>{var B=0,K=0,ce=o=>{let[i,a,f]=o.split(":");return parseFloat(i)*60*60+parseFloat(a)*60+parseFloat(f)};ue.exports=(o,i)=>{if(typeof o=="string")if(o.startsWith("  Duration")){let a=o.split(", ")[0].split(": ")[1],f=ce(a);i({duration:f,ratio:K}),(B===0||B>f)&&(B=f)}else if(o.startsWith("frame")||o.startsWith("size")){let a=o.split("time=")[1].split(" ")[0],f=ce(a);K=f/B,i({ratio:K,time:f})}else o.startsWith("video:")&&(i({ratio:1}),B=0)}});var de=E((it,he)=>{he.exports=(o,i)=>{let a=o._malloc(i.length*Uint32Array.BYTES_PER_ELEMENT);return i.forEach((f,u)=>{let l=o._malloc(f.length+1);o.writeAsciiToMemory(f,l),o.setValue(a+Uint32Array.BYTES_PER_ELEMENT*u,l,"i32")}),[i.length,a]}});var I=E((Q,me)=>{(function(o,i){typeof define=="function"&&define.amd?define(i):typeof Q=="object"?me.exports=i():o.resolveUrl=i()})(Q,function(){function o(){var i=arguments.length;if(i===0)throw new Error("resolveUrl requires at least one argument; got none.");var a=document.createElement("base");if(a.href=arguments[0],i===1)return a.href;var f=document.getElementsByTagName("head")[0];f.insertBefore(a,f.firstChild);for(var u=document.createElement("a"),l,p=1;p<i;p++)u.href=arguments[p],l=u.href,a.href=l;return f.removeChild(a),l}return o})});var X=E((at,Te)=>{Te.exports={name:"@ffmpeg/ffmpeg",version:"0.10.1",description:"FFmpeg WebAssembly version",main:"src/index.js",types:"src/index.d.ts",directories:{example:"examples"},scripts:{start:"node scripts/server.js",build:"rimraf dist && webpack --config scripts/webpack.config.prod.js",prepublishOnly:"npm run build",lint:"eslint src",wait:"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js",test:"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:ffmpeg test:node:all","test:node":"node --experimental-wasm-threads --experimental-wasm-bulk-memory node_modules/.bin/_mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser":"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:ffmpeg":"npm run test:browser -- -f ./tests/ffmpeg.test.html"},browser:{"./src/node/index.js":"./src/browser/index.js"},repository:{type:"git",url:"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git"},keywords:["ffmpeg","WebAssembly","video"],author:"Jerome Wu <jeromewus@gmail.com>",license:"MIT",bugs:{url:"https://github.com/ffmpegwasm/ffmpeg.wasm/issues"},engines:{node:">=12.16.1"},homepage:"https://github.com/ffmpegwasm/ffmpeg.wasm#readme",dependencies:{"is-url":"^1.2.4","node-fetch":"^2.6.1","regenerator-runtime":"^0.13.7","resolve-url":"^0.2.1"},devDependencies:{"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@ffmpeg/core":"^0.10.0","@types/emscripten":"^1.39.4","babel-loader":"^8.1.0",chai:"^4.2.0",cors:"^2.8.5",eslint:"^7.12.1","eslint-config-airbnb-base":"^14.1.0","eslint-plugin-import":"^2.22.1",express:"^4.17.1",mocha:"^8.2.1","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","wait-on":"^5.3.0",webpack:"^5.3.2","webpack-cli":"^4.1.0","webpack-dev-middleware":"^4.0.0"}}});var ve=E((ft,ge)=>{var st=I(),{devDependencies:_e}=X();ge.exports={corePath:`https://unpkg.com/@ffmpeg/core@${_e["@ffmpeg/core"].substring(1)}/dist/ffmpeg-core.js`}});var ye=E((lt,we)=>{var Ge=I(),{log:N}=Z(),ee=async(o,i)=>{N("info",`fetch ${o}`);let a=await(await fetch(o)).arrayBuffer();N("info",`${o} file size = ${a.byteLength} bytes`);let f=new Blob([a],{type:i}),u=URL.createObjectURL(f);return N("info",`${o} blob URL = ${u}`),u};we.exports=async({corePath:o})=>{if(typeof o!="string")throw Error("corePath should be a string!");let i=Ge(o),a=await ee(i,"application/javascript"),f=await ee(i.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm"),u=await ee(i.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");return typeof createFFmpegCore>"u"?new Promise(l=>{let p=document.createElement("script"),L=()=>{p.removeEventListener("load",L),N("info","ffmpeg-core.js script loaded"),l({createFFmpegCore,corePath:a,wasmPath:f,workerPath:u})};p.src=a,p.type="text/javascript",p.addEventListener("load",L),document.getElementsByTagName("head")[0].appendChild(p)}):(N("info","ffmpeg-core.js script is loaded already"),Promise.resolve({createFFmpegCore,corePath:a,wasmPath:f,workerPath:u}))}});var Ee=E((ct,be)=>{var Be=I(),Ne=o=>new Promise((i,a)=>{let f=new FileReader;f.onload=()=>{i(f.result)},f.onerror=({target:{error:{code:u}}})=>{a(Error(`File could not be read! Code=${u}`))},f.readAsArrayBuffer(o)});be.exports=async o=>{let i=o;return typeof o>"u"?new Uint8Array:(typeof o=="string"?/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(o)?i=atob(o.split(",")[1]).split("").map(a=>a.charCodeAt(0)):i=await(await fetch(Be(o))).arrayBuffer():(o instanceof File||o instanceof Blob)&&(i=await Ne(o)),new Uint8Array(i))}});var te=E((ut,Le)=>{var $e=ve(),xe=ye(),Ie=Ee();Le.exports={defaultOptions:$e,getCreateFFmpegCore:xe,fetchFile:Ie}});var ke=E((pt,Se)=>{var{defaultArgs:We,baseOptions:Me}=se(),{setLogging:Fe,setCustomLogger:je,log:P}=Z(),De=pe(),Ye=de(),{defaultOptions:ze,getCreateFFmpegCore:Ve}=te(),{version:He}=X(),re=Error("ffmpeg.wasm is not ready, make sure you have completed load().");Se.exports=(o={})=>{let{log:i,logger:a,progress:f,...u}={...Me,...ze,...o},l=null,p=null,L=null,d=!1,U=f,R=c=>{c==="FFMPEG_END"&&L!==null&&(L(),L=null,d=!1)},T=({type:c,message:m})=>{P(c,m),De(m,U),R(m)},W=async()=>{if(P("info","load ffmpeg-core"),l===null){P("info","loading ffmpeg-core");let{createFFmpegCore:c,corePath:m,workerPath:g,wasmPath:F}=await Ve(u);l=await c({mainScriptUrlOrBlob:m,printErr:S=>T({type:"fferr",message:S}),print:S=>T({type:"ffout",message:S}),locateFile:(S,C)=>{if(typeof window<"u"){if(typeof F<"u"&&S.endsWith("ffmpeg-core.wasm"))return F;if(typeof g<"u"&&S.endsWith("ffmpeg-core.worker.js"))return g}return C+S}}),p=l.cwrap("proxy_main","number",["number","number"]),P("info","ffmpeg-core loaded")}else throw Error("ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time.")},x=()=>l!==null,A=(...c)=>{if(P("info",`run ffmpeg command: ${c.join(" ")}`),l===null)throw re;if(d)throw Error("ffmpeg.wasm can only run one command at a time");return d=!0,new Promise(m=>{let g=[...We,...c].filter(F=>F.length!==0);L=m,p(...Ye(l,g))})},b=(c,...m)=>{if(P("info",`run FS.${c} ${m.map(g=>typeof g=="string"?g:`<${g.length} bytes binary file>`).join(" ")}`),l===null)throw re;{let g=null;try{g=l.FS[c](...m)}catch{throw Error(c==="readdir"?`ffmpeg.FS('readdir', '${m[0]}') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')`:c==="readFile"?`ffmpeg.FS('readFile', '${m[0]}') error. Check if the path exists`:"Oops, something went wrong in FS operation.")}return g}},_=()=>{if(l===null)throw re;d=!1,l.exit(1),l=null,p=null,L=null},q=c=>{U=c},k=c=>{je(c)};return Fe(i),je(a),P("info",`use ffmpeg.wasm v${He}`),{setProgress:q,setLogger:k,setLogging:Fe,load:W,isLoaded:x,run:A,exit:_,FS:b}}});var Pe=E((ht,Oe)=>{ie();var Je=ke(),{fetchFile:Ze}=te();Oe.exports={createFFmpeg:Je,fetchFile:Ze}});var{createFFmpeg:Ke}=Pe(),$=Ke({log:!0}),Qe=async({target:{files:o}})=>{console.log(o),$.isLoaded()||await $.load();for(let i of o){let a=i.name,f=await i.arrayBuffer(),u=new Uint8Array(f);$.FS("writeFile",a,u),await $.run("-i",a,"test.mp3");let l=$.FS("readFile","test.mp3"),p=document.createElement("a");p.href=URL.createObjectURL(new Blob([l.buffer],{type:"audio/mpeg"})),p.download=a.replace(a.substr(a.lastIndexOf(".")),"")+".mp3",p.innerText=a.replace(a.substr(a.lastIndexOf(".")),"")+".mp3",document.body.appendChild(p),document.body.appendChild(document.createElement("br"))}},Xe=document.getElementById("uploader");Xe.addEventListener("change",Qe);})();
