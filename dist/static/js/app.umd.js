!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="./",e(e.s=60)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(30)("wks"),o=n(23),i=n(0).Symbol,s="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=s&&i[t]||(s?i:o)("Symbol."+t))}).store=r},function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(9);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(12)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(3),o=n(38),i=n(32),s=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(0),o=n(2),i=n(18),s=n(8),u=n(7),a=function(t,e,n){var c,f,l,p=t&a.F,h=t&a.G,v=t&a.S,d=t&a.P,y=t&a.B,m=t&a.W,g=h?o:o[e]||(o[e]={}),b=g.prototype,w=h?r:v?r[e]:(r[e]||{}).prototype;h&&(n=e);for(c in n)(f=!p&&w&&void 0!==w[c])&&u(g,c)||(l=f?w[c]:n[c],g[c]=h&&"function"!=typeof w[c]?n[c]:y&&f?i(l,r):m&&w[c]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):d&&"function"==typeof l?i(Function.call,l):l,d&&((g.virtual||(g.virtual={}))[c]=l,t&a.R&&b&&!b[c]&&s(b,c,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(5),o=n(21);t.exports=n(4)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(39),o=n(24);t.exports=function(t){return r(o(t))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports={}},function(t,e){t.exports=!0},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(63),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(17);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(43),o=n(26);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(5).f,o=n(7),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(9),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){"use strict";function r(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=o(e),this.reject=o(n)}var o=n(17);t.exports.f=function(t){return new r(t)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(30)("keys"),o=n(23);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(2),o=n(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(14)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(9);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(0),o=n(2),i=n(14),s=n(34),u=n(5).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:s.f(t)})}},function(t,e,n){e.f=n(1)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(66),i=r(o),s=n(65),u=r(s),a="function"==typeof u.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof u.default&&t.constructor===u.default&&t!==u.default.prototype?"symbol":typeof t};e.default="function"==typeof u.default&&"symbol"===a(i.default)?function(t){return void 0===t?"undefined":a(t)}:function(t){return t&&"function"==typeof u.default&&t.constructor===u.default&&t!==u.default.prototype?"symbol":void 0===t?"undefined":a(t)}},function(t,e,n){var r=n(11),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),o))?n:i?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){var r=n(0).document;t.exports=r&&r.documentElement},function(t,e,n){t.exports=!n(4)&&!n(12)(function(){return 7!=Object.defineProperty(n(25)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(11);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){"use strict";var r=n(14),o=n(6),i=n(46),s=n(8),u=n(13),a=n(81),c=n(22),f=n(90),l=n(1)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,v,d,y,m){a(n,e,v);var g,b,w,x=function(t){if(!p&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",_="values"==d,P=!1,O=t.prototype,T=O[l]||O["@@iterator"]||d&&O[d],k=T||x(d),j=d?_?x("entries"):k:void 0,E="Array"==e?O.entries||T:T;if(E&&(w=f(E.call(new t)))!==Object.prototype&&w.next&&(c(w,S,!0),r||"function"==typeof w[l]||s(w,l,h)),_&&T&&"values"!==T.name&&(P=!0,k=function(){return T.call(this)}),r&&!m||!p&&!P&&O[l]||s(O,l,k),u[e]=k,u[S]=h,d)if(g={values:_?k:x("values"),keys:y?k:x("keys"),entries:j},m)for(b in g)b in O||i(O,b,g[b]);else o(o.P+o.F*(p||P),e,g);return g}},function(t,e,n){var r=n(3),o=n(87),i=n(26),s=n(29)("IE_PROTO"),u=function(){},a=function(){var t,e=n(25)("iframe"),r=i.length;for(e.style.display="none",n(37).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=r(t),n=new u,u.prototype=null,n[s]=t):n=a(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(43),o=n(26).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(7),o=n(10),i=n(74)(!1),s=n(29)("IE_PROTO");t.exports=function(t,e){var n,u=o(t),a=0,c=[];for(n in u)n!=s&&r(u,n)&&c.push(n);for(;e.length>a;)r(u,n=e[a++])&&(~i(c,n)||c.push(n));return c}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var r=n(3),o=n(9),i=n(27);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){t.exports=n(8)},function(t,e,n){var r=n(3),o=n(17),i=n(1)("species");t.exports=function(t,e){var n,s=r(t).constructor;return void 0===s||void 0==(n=r(s)[i])?e:o(n)}},function(t,e,n){var r,o,i,s=n(18),u=n(77),a=n(37),c=n(25),f=n(0),l=f.process,p=f.setImmediate,h=f.clearImmediate,v=f.MessageChannel,d=f.Dispatch,y=0,m={},g=function(){var t=+this;if(m.hasOwnProperty(t)){var e=m[t];delete m[t],e()}},b=function(t){g.call(t.data)};p&&h||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return m[++y]=function(){u("function"==typeof t?t:Function(t),e)},r(y),y},h=function(t){delete m[t]},"process"==n(11)(l)?r=function(t){l.nextTick(s(g,t,1))}:d&&d.now?r=function(t){d.now(s(g,t,1))}:v?(o=new v,i=o.port2,o.port1.onmessage=b,r=s(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",b,!1)):r="onreadystatechange"in c("script")?function(t){a.appendChild(c("script")).onreadystatechange=function(){a.removeChild(this),g.call(t)}}:function(t){setTimeout(s(g,t,1),0)}),t.exports={set:p,clear:h}},function(t,e,n){var r=n(31),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(24);t.exports=function(t){return Object(r(t))}},function(t,e){},function(t,e,n){"use strict";var r=n(93)(!0);n(40)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){n(97);for(var r=n(0),o=n(8),i=n(13),s=n(1)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<u.length;a++){var c=u[a],f=r[c],l=f&&f.prototype;l&&!l[s]&&o(l,s,c),i[c]=i.Array}},function(t,e,n){n(106);var r=n(107)(n(61),n(108),"data-v-054a8745",null);t.exports=r.exports},function(t,e,n){"use strict";var r=n(15),o=n.n(r),i=n(16),s=n.n(i),u=function(){function t(e){o()(this,t),this.WIDTH=e.WIDTH,this.init(),this.pixelRatio=1}return s()(t,[{key:"init",value:function(){this.setLength(0)}},{key:"setLength",value:function(t){if(!this.mergedPeaks||t!==2*this.mergedPeaks.length-1+2){this.splitPeaks=[],this.mergedPeaks=[];var e=void 0;for(e=0;e<1;e++)this.splitPeaks[e]=[],this.splitPeaks[e][2*(t-1)]=0,this.splitPeaks[e][2*(t-1)+1]=0;this.mergedPeaks[2*(t-1)]=0,this.mergedPeaks[2*(t-1)+1]=0}}},{key:"getWidth",value:function(){return Math.round(this.WIDTH*this.pixelRatio)}},{key:"getPeaks",value:function(t){this.setLength(this.WIDTH);var e=this.getWidth(),n=t.length/e,r=~~(n/10)||1,o=e,i=void 0;for(i=0;i<1;i++){var s=this.splitPeaks[i],u=t.getChannelData(i),a=void 0;for(a=0;a<=o;a++){var c=~~(a*n),f=~~(c+n),l=0,p=0,h=void 0;for(h=c;h<f;h+=r){var v=u[h];v>p&&(p=v),v<l&&(l=v)}s[2*a]=p,s[2*a+1]=l,(0===i||p>this.mergedPeaks[2*a])&&(this.mergedPeaks[2*a]=p),(0===i||l<this.mergedPeaks[2*a+1])&&(this.mergedPeaks[2*a+1]=l)}}return this.len=this.splitChannels?this.splitPeaks.length:this.mergedPeaks.length,this.splitChannels?this.splitPeaks:this.mergedPeaks}}]),t}();e.a=u},function(t,e,n){"use strict";var r=n(62),o=n.n(r),i=n(15),s=n.n(i),u=n(16),a=n.n(u),c=n(55),f=n(58),l={WIDTH:500,HEIGHT:300},p=window.AudioContext||window.webkitAudioContext,h=new p,v=h.createAnalyser(),d=function(){function t(e){s()(this,t),this.opts=o()({},l),n.i(f.a)(this.opts,e||{}),v.fftSize=this.opts.fftSize,this.analysisLine=new c.a({WIDTH:this.opts.WIDTH}),this.receive=this.warpperReceive(this.opts.type)}return a()(t,[{key:"warpperReceive",value:function(t){var e=this;return"bar"===t?function(t){h.decodeAudioData(t,function(t){e.analysisBar(t)})}:"line"===t?function(t){h.decodeAudioData(t,function(t){e.analysisLine.getPeaks(t),e.drawLine2()})}:void 0}},{key:"analysisBar",value:function(t){this.audioBufferSourceNode=h.createBufferSource(),this.audioBufferSourceNode.connect(v),this.audioBufferSourceNode.buffer=t,this.audioBufferSourceNode.start(0),this.bufferLength=v.frequencyBinCount,this.dataArray=new Uint8Array(this.bufferLength),this.drawBar()}},{key:"drawBar",value:function(){if(null!==this.dataArray){v.getByteFrequencyData(this.dataArray),this.opts.canvasCtx.fillStyle="rgb(0, 0, 0)",this.opts.canvasCtx.fillRect(0,0,this.opts.WIDTH,this.opts.HEIGHT);var t=this.opts.WIDTH/this.bufferLength*1.2,e=void 0,n=0,r=this.opts.canvasCtx.createLinearGradient(0,0,0,this.opts.HEIGHT);r.addColorStop(0,"#0f0"),r.addColorStop(.5,"#ff0"),r.addColorStop(1,"#f00");for(var o=0;o<this.bufferLength;o++)e=this.dataArray[o]*this.opts.range,this.opts.canvasCtx.fillStyle=r,this.opts.canvasCtx.fillRect(n,this.opts.HEIGHT-e,t,e),n+=t+1;window.requestAnimationFrame(this.drawBar.bind(this))}}},{key:"drawLine",value:function(){if(null!==this.dataArray){v.getByteTimeDomainData(this.dataArray),this.opts.canvasCtx.fillStyle="rgb(0, 0, 0)",this.opts.canvasCtx.fillRect(0,0,this.opts.WIDTH,this.opts.HEIGHT),this.opts.canvasCtx.lineWidth=1,this.opts.canvasCtx.strokeStyle="rgb(59, 234, 46)",this.opts.canvasCtx.beginPath();for(var t=1*this.opts.WIDTH/this.bufferLength,e=0,n=0;n<this.bufferLength;n++){var r=this.dataArray[n]/128,o=r*this.opts.HEIGHT/2;0===n?this.opts.canvasCtx.moveTo(e,o):this.opts.canvasCtx.lineTo(e,o),e+=t}this.opts.canvasCtx.lineTo(this.opts.WIDTH,this.opts.HEIGHT/2),this.opts.canvasCtx.stroke(),window.requestAnimationFrame(this.drawLine.bind(this))}}},{key:"drawLine2",value:function(){var t=this.analysisLine.mergedPeaks.map(function(t,e){return 1e3*t});this.opts.canvasCtx.fillStyle="rgb(0, 0, 0)",this.opts.canvasCtx.fillRect(0,0,this.opts.WIDTH,this.opts.HEIGHT),this.opts.canvasCtx.lineWidth=1,this.opts.canvasCtx.strokeStyle="rgb(59, 234, 46)",this.opts.canvasCtx.beginPath();for(var e=1*this.opts.WIDTH/t.length,n=0,r=t.length,o=0;o<r;o++){var i=t[o]+this.opts.HEIGHT/2;0===o?this.opts.canvasCtx.moveTo(n,i):this.opts.canvasCtx.lineTo(n,i),n+=e}this.opts.canvasCtx.lineTo(this.opts.WIDTH,this.opts.HEIGHT/2),this.opts.canvasCtx.stroke()}}]),t}();e.a=d},function(t,e,n){"use strict";var r=n(15),o=n.n(r),i=n(16),s=n.n(i),u=function(){function t(){o()(this,t),this.initMediaSource()}return s()(t,[{key:"initMediaSource",value:function(){var t=new Audio;this.dom=t,this.mediaSource=new MediaSource,t.src=window.URL.createObjectURL(this.mediaSource),this.mediaSource.addEventListener("sourceopen",this.onSourceOpen.bind(this)),this.count=0}},{key:"onSourceOpen",value:function(){0===this.count&&(this.count++,URL.revokeObjectURL(this.dom.src),this.sourceBuffer=this.mediaSource.addSourceBuffer("audio/aac"))}},{key:"play",value:function(){this.dom&&this.dom.play()}},{key:"pause",value:function(){this.dom&&this.dom.pause()}},{key:"event",value:function(){var t=this;t.sourceBuffer.addEventListener("updateend",function(){t.dom.play()})}},{key:"appendBuffer",value:function(t){this.sourceBuffer.appendBuffer(t)}},{key:"stop",value:function(){this.count=0,this.dom=null,this.mediaSource=null,this.initMediaSource()}}]),t}();e.a=u},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])}},function(t,e,n){"use strict";var r=n(64),o=n.n(r),i=n(35),s=n.n(i),u=n(15),a=n.n(u),c=n(16),f=n.n(c),l=function(){function t(e){a()(this,t),"object"!==s()(e.Mse)&&console.log("MSE is not a object"),"object"!==s()(e.Drawer)&&console.log("drawer is not a object"),this.mse=e.Mse,this.drawer=e.Drawer,this.frames=0,this.buffer=[]}return f()(t,[{key:"openWs",value:function(t,e,n){var r=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"/ws/websocket/socketServer.do";return new o.a(function(n,o){t.startsWith("ws://")||(t="ws://"+t+i);var s=r,u=new WebSocket(t);s.ws=u,s.id=e,u.binaryType="arraybuffer",u.onopen=function(){console.log("-- WebSocket is opened! --"),console.log("-- LISTEN id : "+e),n()},u.onerror=function(t){o(t)},u.onmessage=function(t){if("[object ArrayBuffer]"===Object.prototype.toString.call(t.data)){s.mse.appendBuffer(t.data);var e=Array.prototype.slice.call(new Uint8Array(t.data));if(s.buffer.push.apply(s.buffer,e),++s.frames>3){var n=new Uint8Array(s.buffer).buffer;s.drawer.receive(n),s.frames=0,s.buffer.length=0}}}})}},{key:"play",value:function(){this.ws&&this.ws.send("LISTEN:"+this.id),this.mse.play()}},{key:"pause",value:function(){this.mse.pause(),this.ws&&this.ws.send("STOP_LISTEN")}},{key:"stop",value:function(){this.ws&&this.ws.send("STOP_LISTEN"),this.ws&&this.ws.close(),this.pause()}}]),t}();e.a=l},function(t,e,n){"use strict";function r(t){r.installed&&s===t||(r.installed=!0,s=t,t.component("vue-waveform",i.a))}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"_Vue",function(){return s}),e.waveform=r;var o=n(54),i=n.n(o),s=void 0},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(35),o=n.n(r),i=n(56),s=n(59),u=n(57);e.default={name:"",mounted:function(){this.init()},props:{range:{type:Number,default:1},type:{type:String,default:"bar"},WIDTH:{type:Number,default:500},HEIGHT:{type:Number,default:300},arraybuffer:{type:ArrayBuffer},websocketURL:{type:String},id:{type:Number},fftSize:{type:Number,default:256}},watch:{arraybuffer:function(t,e){"object"===(void 0===t?"undefined":o()(t))&&this.drawer.receive(t)},type:function(t,e){t!==e&&this.drawer.warpperReceive(t)}},methods:{openWS:function(){this.wsPlayer.openWs(this.websocketURL,this.id)},play:function(){this.wsPlayer.play()},pause:function(){this.wsPlayer.pause()},stop:function(){this.wsPlayer.stop()},init:function(){var t=this.$refs.canvas.getContext("2d"),e=this.WIDTH,n=this.HEIGHT,r=this.range,o=this.fftSize,a=this.type;this.drawer=new i.a({canvasCtx:t,WIDTH:e,HEIGHT:n,range:r,fftSize:o,type:a}),this.wsPlayer=new s.a({Mse:new u.a,Drawer:this.drawer})}}}},function(t,e,n){t.exports={default:n(67),__esModule:!0}},function(t,e,n){t.exports={default:n(68),__esModule:!0}},function(t,e,n){t.exports={default:n(69),__esModule:!0}},function(t,e,n){t.exports={default:n(70),__esModule:!0}},function(t,e,n){t.exports={default:n(71),__esModule:!0}},function(t,e,n){n(98),t.exports=n(2).Object.assign},function(t,e,n){n(99);var r=n(2).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){n(51),n(52),n(53),n(100),n(102),n(103),t.exports=n(2).Promise},function(t,e,n){n(101),n(51),n(104),n(105),t.exports=n(2).Symbol},function(t,e,n){n(52),n(53),t.exports=n(34).f("iterator")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(10),o=n(49),i=n(94);t.exports=function(t){return function(e,n,s){var u,a=r(e),c=o(a.length),f=i(s,c);if(t&&n!=n){for(;c>f;)if((u=a[f++])!=u)return!0}else for(;c>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(19),o=n(28),i=n(20);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var s,u=n(t),a=i.f,c=0;u.length>c;)a.call(t,s=u[c++])&&e.push(s);return e}},function(t,e,n){var r=n(18),o=n(80),i=n(78),s=n(3),u=n(49),a=n(96),c={},f={},e=t.exports=function(t,e,n,l,p){var h,v,d,y,m=p?function(){return t}:a(t),g=r(n,l,e?2:1),b=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(h=u(t.length);h>b;b++)if((y=e?g(s(v=t[b])[0],v[1]):g(t[b]))===c||y===f)return y}else for(d=m.call(t);!(v=d.next()).done;)if((y=o(d,g,v.value,e))===c||y===f)return y};e.BREAK=c,e.RETURN=f},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var r=n(13),o=n(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){var r=n(11);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(3);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){"use strict";var r=n(41),o=n(21),i=n(22),s={};n(8)(s,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(s,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],s=i[r]();s.next=function(){return{done:n=!0}},i[r]=function(){return s},t(i)}catch(t){}return n}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(23)("meta"),o=n(9),i=n(7),s=n(5).f,u=0,a=Object.isExtensible||function(){return!0},c=!n(12)(function(){return a(Object.preventExtensions({}))}),f=function(t){s(t,r,{value:{i:"O"+ ++u,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!a(t))return"F";if(!e)return"E";f(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!a(t))return!0;if(!e)return!1;f(t)}return t[r].w},h=function(t){return c&&v.NEED&&a(t)&&!i(t,r)&&f(t),t},v=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:h}},function(t,e,n){var r=n(0),o=n(48).set,i=r.MutationObserver||r.WebKitMutationObserver,s=r.process,u=r.Promise,a="process"==n(11)(s);t.exports=function(){var t,e,n,c=function(){var r,o;for(a&&(r=s.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(a)n=function(){s.nextTick(c)};else if(!i||r.navigator&&r.navigator.standalone)if(u&&u.resolve){var f=u.resolve(void 0);n=function(){f.then(c)}}else n=function(){o.call(r,c)};else{var l=!0,p=document.createTextNode("");new i(c).observe(p,{characterData:!0}),n=function(){p.data=l=!l}}return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}},function(t,e,n){"use strict";var r=n(19),o=n(28),i=n(20),s=n(50),u=n(39),a=Object.assign;t.exports=!a||n(12)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=a({},t)[n]||Object.keys(a({},e)).join("")!=r})?function(t,e){for(var n=s(t),a=arguments.length,c=1,f=o.f,l=i.f;a>c;)for(var p,h=u(arguments[c++]),v=f?r(h).concat(f(h)):r(h),d=v.length,y=0;d>y;)l.call(h,p=v[y++])&&(n[p]=h[p]);return n}:a},function(t,e,n){var r=n(5),o=n(3),i=n(19);t.exports=n(4)?Object.defineProperties:function(t,e){o(t);for(var n,s=i(e),u=s.length,a=0;u>a;)r.f(t,n=s[a++],e[n]);return t}},function(t,e,n){var r=n(20),o=n(21),i=n(10),s=n(32),u=n(7),a=n(38),c=Object.getOwnPropertyDescriptor;e.f=n(4)?c:function(t,e){if(t=i(t),e=s(e,!0),a)try{return c(t,e)}catch(t){}if(u(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(10),o=n(42).f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return o(t)}catch(t){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==i.call(t)?u(t):o(r(t))}},function(t,e,n){var r=n(7),o=n(50),i=n(29)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,n){var r=n(8);t.exports=function(t,e,n){for(var o in e)n&&t[o]?t[o]=e[o]:r(t,o,e[o]);return t}},function(t,e,n){"use strict";var r=n(0),o=n(2),i=n(5),s=n(4),u=n(1)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:r[t];s&&e&&!e[u]&&i.f(e,u,{configurable:!0,get:function(){return this}})}},function(t,e,n){var r=n(31),o=n(24);t.exports=function(t){return function(e,n){var i,s,u=String(o(e)),a=r(n),c=u.length;return a<0||a>=c?t?"":void 0:(i=u.charCodeAt(a),i<55296||i>56319||a+1===c||(s=u.charCodeAt(a+1))<56320||s>57343?t?u.charAt(a):i:t?u.slice(a,a+2):s-56320+(i-55296<<10)+65536)}}},function(t,e,n){var r=n(31),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(0),o=r.navigator;t.exports=o&&o.userAgent||""},function(t,e,n){var r=n(36),o=n(1)("iterator"),i=n(13);t.exports=n(2).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){"use strict";var r=n(72),o=n(83),i=n(13),s=n(10);t.exports=n(40)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(6);r(r.S+r.F,"Object",{assign:n(86)})},function(t,e,n){var r=n(6);r(r.S+r.F*!n(4),"Object",{defineProperty:n(5).f})},function(t,e,n){"use strict";var r,o,i,s,u=n(14),a=n(0),c=n(18),f=n(36),l=n(6),p=n(9),h=n(17),v=n(73),d=n(76),y=n(47),m=n(48).set,g=n(85)(),b=n(27),w=n(44),x=n(95),S=n(45),_=a.TypeError,P=a.process,O=P&&P.versions,T=O&&O.v8||"",k=a.Promise,j="process"==f(P),E=function(){},L=o=b.f,I=!!function(){try{var t=k.resolve(1),e=(t.constructor={})[n(1)("species")]=function(t){t(E,E)};return(j||"function"==typeof PromiseRejectionEvent)&&t.then(E)instanceof e&&0!==T.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),C=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},H=function(t,e){if(!t._n){t._n=!0;var n=t._c;g(function(){for(var r=t._v,o=1==t._s,i=0;n.length>i;)!function(e){var n,i,s,u=o?e.ok:e.fail,a=e.resolve,c=e.reject,f=e.domain;try{u?(o||(2==t._h&&D(t),t._h=1),!0===u?n=r:(f&&f.enter(),n=u(r),f&&(f.exit(),s=!0)),n===e.promise?c(_("Promise-chain cycle")):(i=C(n))?i.call(n,a,c):a(n)):c(r)}catch(t){f&&!s&&f.exit(),c(t)}}(n[i++]);t._c=[],t._n=!1,e&&!t._h&&M(t)})}},M=function(t){m.call(a,function(){var e,n,r,o=t._v,i=A(t);if(i&&(e=w(function(){j?P.emit("unhandledRejection",o,t):(n=a.onunhandledrejection)?n({promise:t,reason:o}):(r=a.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=j||A(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},A=function(t){return 1!==t._h&&0===(t._a||t._c).length},D=function(t){m.call(a,function(){var e;j?P.emit("rejectionHandled",t):(e=a.onrejectionhandled)&&e({promise:t,reason:t._v})})},W=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),H(e,!0))},R=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw _("Promise can't be resolved itself");(e=C(t))?g(function(){var r={_w:n,_d:!1};try{e.call(t,c(R,r,1),c(W,r,1))}catch(t){W.call(r,t)}}):(n._v=t,n._s=1,H(n,!1))}catch(t){W.call({_w:n,_d:!1},t)}}};I||(k=function(t){v(this,k,"Promise","_h"),h(t),r.call(this);try{t(c(R,this,1),c(W,this,1))}catch(t){W.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n(91)(k.prototype,{then:function(t,e){var n=L(y(this,k));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=j?P.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&H(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=c(R,t,1),this.reject=c(W,t,1)},b.f=L=function(t){return t===k||t===s?new i(t):o(t)}),l(l.G+l.W+l.F*!I,{Promise:k}),n(22)(k,"Promise"),n(92)("Promise"),s=n(2).Promise,l(l.S+l.F*!I,"Promise",{reject:function(t){var e=L(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(u||!I),"Promise",{resolve:function(t){return S(u&&this===s?k:this,t)}}),l(l.S+l.F*!(I&&n(82)(function(t){k.all(t).catch(E)})),"Promise",{all:function(t){var e=this,n=L(e),r=n.resolve,o=n.reject,i=w(function(){var n=[],i=0,s=1;d(t,!1,function(t){var u=i++,a=!1;n.push(void 0),s++,e.resolve(t).then(function(t){a||(a=!0,n[u]=t,--s||r(n))},o)}),--s||r(n)});return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=L(e),r=n.reject,o=w(function(){d(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},function(t,e,n){"use strict";var r=n(0),o=n(7),i=n(4),s=n(6),u=n(46),a=n(84).KEY,c=n(12),f=n(30),l=n(22),p=n(23),h=n(1),v=n(34),d=n(33),y=n(75),m=n(79),g=n(3),b=n(9),w=n(10),x=n(32),S=n(21),_=n(41),P=n(89),O=n(88),T=n(5),k=n(19),j=O.f,E=T.f,L=P.f,I=r.Symbol,C=r.JSON,H=C&&C.stringify,M=h("_hidden"),A=h("toPrimitive"),D={}.propertyIsEnumerable,W=f("symbol-registry"),R=f("symbols"),N=f("op-symbols"),F=Object.prototype,B="function"==typeof I,G=r.QObject,U=!G||!G.prototype||!G.prototype.findChild,z=i&&c(function(){return 7!=_(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=j(F,e);r&&delete F[e],E(t,e,n),r&&t!==F&&E(F,e,r)}:E,V=function(t){var e=R[t]=_(I.prototype);return e._k=t,e},q=B&&"symbol"==typeof I.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof I},K=function(t,e,n){return t===F&&K(N,e,n),g(t),e=x(e,!0),g(n),o(R,e)?(n.enumerable?(o(t,M)&&t[M][e]&&(t[M][e]=!1),n=_(n,{enumerable:S(0,!1)})):(o(t,M)||E(t,M,S(1,{})),t[M][e]=!0),z(t,e,n)):E(t,e,n)},J=function(t,e){g(t);for(var n,r=y(e=w(e)),o=0,i=r.length;i>o;)K(t,n=r[o++],e[n]);return t},Y=function(t,e){return void 0===e?_(t):J(_(t),e)},$=function(t){var e=D.call(this,t=x(t,!0));return!(this===F&&o(R,t)&&!o(N,t))&&(!(e||!o(this,t)||!o(R,t)||o(this,M)&&this[M][t])||e)},Q=function(t,e){if(t=w(t),e=x(e,!0),t!==F||!o(R,e)||o(N,e)){var n=j(t,e);return!n||!o(R,e)||o(t,M)&&t[M][e]||(n.enumerable=!0),n}},X=function(t){for(var e,n=L(w(t)),r=[],i=0;n.length>i;)o(R,e=n[i++])||e==M||e==a||r.push(e);return r},Z=function(t){for(var e,n=t===F,r=L(n?N:w(t)),i=[],s=0;r.length>s;)!o(R,e=r[s++])||n&&!o(F,e)||i.push(R[e]);return i};B||(I=function(){if(this instanceof I)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===F&&e.call(N,n),o(this,M)&&o(this[M],t)&&(this[M][t]=!1),z(this,t,S(1,n))};return i&&U&&z(F,t,{configurable:!0,set:e}),V(t)},u(I.prototype,"toString",function(){return this._k}),O.f=Q,T.f=K,n(42).f=P.f=X,n(20).f=$,n(28).f=Z,i&&!n(14)&&u(F,"propertyIsEnumerable",$,!0),v.f=function(t){return V(h(t))}),s(s.G+s.W+s.F*!B,{Symbol:I});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)h(tt[et++]);for(var nt=k(h.store),rt=0;nt.length>rt;)d(nt[rt++]);s(s.S+s.F*!B,"Symbol",{for:function(t){return o(W,t+="")?W[t]:W[t]=I(t)},keyFor:function(t){if(!q(t))throw TypeError(t+" is not a symbol!");for(var e in W)if(W[e]===t)return e},useSetter:function(){U=!0},useSimple:function(){U=!1}}),s(s.S+s.F*!B,"Object",{create:Y,defineProperty:K,defineProperties:J,getOwnPropertyDescriptor:Q,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),C&&s(s.S+s.F*(!B||c(function(){var t=I();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(b(e)||void 0!==t)&&!q(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!q(e))return e}),r[1]=e,H.apply(C,r)}}),I.prototype[A]||n(8)(I.prototype,A,I.prototype.valueOf),l(I,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){"use strict";var r=n(6),o=n(2),i=n(0),s=n(47),u=n(45);r(r.P+r.R,"Promise",{finally:function(t){var e=s(this,o.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return u(e,t()).then(function(){return n})}:t,n?function(n){return u(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict";var r=n(6),o=n(27),i=n(44);r(r.S,"Promise",{try:function(t){var e=o.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},function(t,e,n){n(33)("asyncIterator")},function(t,e,n){n(33)("observable")},function(t,e){},function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,i=t.default);var u="function"==typeof i?i.options:i;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),r){var a=Object.create(u.computed||null);Object.keys(r).forEach(function(t){var e=r[t];a[t]=function(){return e}}),u.computed=a}return{esModule:o,exports:i,options:u}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("canvas",{ref:"canvas",attrs:{id:"canvas",width:t.WIDTH,height:t.HEIGHT}})])},staticRenderFns:[]}}])});
//# sourceMappingURL=app.umd.js.map