!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}([function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),s=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[n].concat(s).concat([o]).join("\n")}var i;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];null!=s&&(r[s]=!0)}for(o=0;o<t.length;o++){var i=t[o];null!=i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},o=0;o<e.length;o++){var s=e[o],i=s[0],a={id:t+":"+o,css:s[1],media:s[2],sourceMap:s[3]};r[i]?r[i].parts.push(a):n.push(r[i]={id:i,parts:[a]})}return n}n.r(e),n.d(e,"default",(function(){return d}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},i=o&&(document.head||document.getElementsByTagName("head")[0]),a=null,u=0,l=!1,c=function(){},f=null,p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function d(t,e,n,o){l=n,f=o||{};var i=r(t,e);return v(i),function(e){for(var n=[],o=0;o<i.length;o++){var a=i[o];(u=s[a.id]).refs--,n.push(u)}e?v(i=r(t,e)):i=[];for(o=0;o<n.length;o++){var u;if(0===(u=n[o]).refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete s[u.id]}}}}function v(t){for(var e=0;e<t.length;e++){var n=t[e],r=s[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(_(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(o=0;o<n.parts.length;o++)i.push(_(n.parts[o]));s[n.id]={id:n.id,refs:1,parts:i}}}}function h(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function _(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(l)return c;r.parentNode.removeChild(r)}if(p){var o=u++;r=a||(a=h()),e=b.bind(null,r,o,!1),n=b.bind(null,r,o,!0)}else r=h(),e=y.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var m,g=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function b(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var s=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(s,i[e]):t.appendChild(s)}}function y(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),f.ssrId&&t.setAttribute("data-vue-ssr-id",e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},function(t,e,n){var r=n(9);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(1).default)("6252c1c8",r,!1,{})},function(t,e,n){var r=n(11);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(1).default)("16396990",r,!1,{})},function(t,e,n){var r=n(13);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(1).default)("04749478",r,!1,{})},function(t,e,n){var r=n(15);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(1).default)("2bc3b1b8",r,!1,{})},function(t,e,n){var r=n(17);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(1).default)("02de6590",r,!1,{})},function(t,e,n){t.exports=n(18)},function(t,e,n){"use strict";var r=n(2);n.n(r).a},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"\nh1 {\n    background-color:#FF0000;\n    color:#FFF;\n}\n",""])},function(t,e,n){"use strict";var r=n(3);n.n(r).a},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"\nspan {\n    background-color: yellow;\n    color: grey;\n}\n",""])},function(t,e,n){"use strict";var r=n(4);n.n(r).a},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"\nspan {\n    background-color: yellow;\n    color: brown;\n}\n",""])},function(t,e,n){"use strict";var r=n(5);n.n(r).a},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"\nspan {\n    background-color: yellow;\n    color: blueviolet;\n}\n",""])},function(t,e,n){"use strict";var r=n(6);n.n(r).a},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"\nspan {\n    background-color: yellow;\n    color: brown;\n}\n",""])},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("hr"),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("router-link",{attrs:{to:"/sobre"}},[t._v("Sobre")]),t._v(" "),n("router-link",{attrs:{to:"/contato"}},[t._v("Contato")]),t._v(" "),n("hr"),t._v(" "),n("router-view")],1)};r._withStripped=!0;var o={data:()=>({msg:"Olá, mundo!"})};n(8);function s(t,e,n,r,o,s,i,a){var u,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),i?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=u):o&&(u=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(t,e){return u.call(e),c(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:l}}var i=s(o,r,[],!1,null,null,null);i.options.__file="src/js/App.vue";var a=i.exports,u=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",[this._v("Página Home: "+this._s(this.t))]),this._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"user/1"}},[this._v("Usuário 1")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"user/2"}},[this._v("Usuário 2")])],1)])])};u._withStripped=!0;var l={data:()=>({t:"Cissa"})},c=(n(10),s(l,u,[],!1,null,null,null));c.options.__file="src/js/Home.vue";var f=c.exports,p=function(){var t=this.$createElement;this._self._c;return this._m(0)};p._withStripped=!0;var d={data:()=>({})},v=(n(12),s(d,p,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",[this._v("Página Sobre")])])}],!1,null,null,null));v.options.__file="src/js/Sobre.vue";var h=v.exports,_=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",[this._v("Página User")]),this._v(" "),e("p",[this._v("Id do Usuário: "+this._s(this.$route.params.id))])])};_._withStripped=!0;var m={data:()=>({})},g=(n(14),s(m,_,[],!1,null,null,null));g.options.__file="src/js/User.vue";var b=g.exports,y=function(){var t=this.$createElement;this._self._c;return this._m(0)};y._withStripped=!0;var x={data:()=>({})},S=(n(16),s(x,y,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",[this._v("Esta página não foi encontrada!")])])}],!1,null,null,null));S.options.__file="src/js/NotFound.vue";var C=S.exports;const w=new VueRouter({routes:[{path:"/",component:f},{path:"/sobre",component:h},{path:"/user/:id",component:b},{path:"*",component:C}]});new Vue({el:"#app",router:w,render:t=>t(a)})}]);