import{_ as t,s as e,n as r,a as n,b as o,c as a,d as s,i,e as c,S as u,f as l,t as f,g as h,h as p,j as v,k as d,l as m,m as g,o as y,p as b,q as $,r as w,u as _,v as E,w as x,x as k,y as S,z as L,A,B as P,C as j,D as R,E as O,F as C,G as N,H as I,I as G,J as q,K as D,L as U}from"./index.fdfc8b3f.js";import{c as H}from"./_commonjsHelpers.24e35f0d.js";import{r as T}from"./resume.0cdb3b28.js";function F(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var s,i=t[Symbol.iterator]();!(n=(s=i.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var J=H(function(e){var r=function(e){var r,n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),s=new A(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var s=r.delegate;if(s){var i=k(s,r);if(i){if(i===d)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?v:h,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=v,r.method="throw",r.arg=c.arg)}}}(t,r,s),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",v="completed",d={};function m(){}function g(){}function y(){}var b={};b[s]=function(){return this};var $=Object.getPrototypeOf,w=$&&$($(P([])));w&&w!==n&&o.call(w,s)&&(b=w);var _=y.prototype=m.prototype=Object.create(b);function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function x(e){var r;this._invoke=function(n,a){function s(){return new Promise(function(r,s){!function r(n,a,s,i){var c=l(e[n],e,a);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"===t(f)&&o.call(f,"__await")?Promise.resolve(f.__await).then(function(t){r("next",t,s,i)},function(t){r("throw",t,s,i)}):Promise.resolve(f).then(function(t){u.value=t,s(u)},function(t){return r("throw",t,s,i)})}i(c.arg)}(n,a,r,s)})}return r=r?r.then(s,s):s()}}function k(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,k(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function P(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:r,done:!0}}return g.prototype=_.constructor=y,y.constructor=g,y[c]=g.displayName="GeneratorFunction",e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},E(x.prototype),x.prototype[i]=function(){return this},e.AsyncIterator=x,e.async=function(t,r,n,o){var a=new x(u(t,r,n,o));return e.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(_),_[c]="Generator",_[s]=function(){return this},_.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=P,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return i.type="throw",i.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a],i=s.completion;if("root"===s.tryLoc)return n("end");if(s.tryLoc<=this.prev){var c=o.call(s,"catchLoc"),u=o.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return n(s.catchLoc,!0);if(this.prev<s.finallyLoc)return n(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return n(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=t,s.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}},e}(e.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}});function V(t,e,r,n,o,a,s){try{var i=t[a](s),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(n,o)}function B(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var a=t.apply(e,r);function s(t){V(a,n,o,s,i,"next",t)}function i(t){V(a,n,o,s,i,"throw",t)}s(void 0)})}}var M=[];function K(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,a=[];function s(r){if(e(t,r)&&(t=r,n)){for(var o=!M.length,s=0;s<a.length;s+=1){var i=a[s];i[1](),M.push(i,t)}if(o){for(var c=0;c<M.length;c+=2)M[c][0](M[c+1]);M.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(e){var i=[e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:r];return a.push(i),1===a.length&&(n=o(s)||r),e(t),function(){var t=a.indexOf(i);-1!==t&&a.splice(t,1),0===a.length&&(n(),n=null)}}}}var W={},Y=function(){return{}};function z(t){var e,n,o,a,s,i;return{c:function(){e=l("footer"),n=l("p"),o=f("© 2019 Jacob Ebey"),a=h(),s=l("a"),i=l("amp-img"),this.h()},l:function(t){e=p(t,"FOOTER",{class:!0},!1);var r=v(e);n=p(r,"P",{class:!0},!1);var c=v(n);o=d(c,"© 2019 Jacob Ebey"),c.forEach(m),a=g(r),s=p(r,"A",{href:!0,"aria-label":!0},!1);var u=v(s);i=p(u,"AMP-IMG",{src:!0,width:!0,height:!0,alt:!0},!1),v(i).forEach(m),u.forEach(m),r.forEach(m),this.h()},h:function(){y(n,"class","svelte-10kjou9"),b(i,"src","images/github.png"),b(i,"width","50"),b(i,"height","50"),b(i,"alt","Github logo"),y(s,"href","https://github.com/jacob-ebey"),y(s,"aria-label","Github"),y(e,"class","svelte-10kjou9")},m:function(t,r){$(t,e,r),w(e,n),w(n,o),w(e,a),w(e,s),w(s,i)},p:r,i:r,o:r,d:function(t){t&&m(e)}}}var X=function(t){function r(t){var n;return o(this,r),n=a(this,s(r).call(this)),i(c(n),t,null,z,e,[]),n}return n(r,u),r}();function Q(t){var e,n,o,a,s,i,c,u,b,k,S,L,A,P,j,R,O,C,N,I,G,q,D,U,H,F,J,V,B=T.basics.name+"";return{c:function(){e=h(),n=l("div"),o=h(),a=l("header"),s=l("img"),i=h(),c=l("div"),u=l("a"),b=f(B),k=h(),S=l("div"),L=h(),A=l("nav"),P=l("a"),j=f("Home"),R=h(),O=l("a"),C=f("About"),N=h(),I=l("a"),G=f("Blog"),q=h(),D=l("a"),U=f("Resume"),H=h(),F=l("a"),J=f("Contact"),this.h()},l:function(t){e=g(t),n=p(t,"DIV",{class:!0},!1),v(n).forEach(m),o=g(t),a=p(t,"HEADER",{class:!0},!1);var r=v(a);s=p(r,"IMG",{class:!0,role:!0,tabindex:!0,src:!0,alt:!0},!1),v(s).forEach(m),i=g(r),c=p(r,"DIV",{class:!0},!1);var l=v(c);u=p(l,"A",{href:!0,class:!0},!1);var f=v(u);b=d(f,B),f.forEach(m),l.forEach(m),r.forEach(m),k=g(t),S=p(t,"DIV",{class:!0},!1),v(S).forEach(m),L=g(t),A=p(t,"NAV",{class:!0},!1);var h=v(A);P=p(h,"A",{href:!0,class:!0},!1);var y=v(P);j=d(y,"Home"),y.forEach(m),R=g(h),O=p(h,"A",{href:!0,class:!0},!1);var $=v(O);C=d($,"About"),$.forEach(m),N=g(h),I=p(h,"A",{href:!0,class:!0},!1);var w=v(I);G=d(w,"Blog"),w.forEach(m),q=g(h),D=p(h,"A",{href:!0,class:!0},!1);var _=v(D);U=d(_,"Resume"),_.forEach(m),H=g(h),F=p(h,"A",{href:!0,class:!0},!1);var E=v(F);J=d(E,"Contact"),E.forEach(m),h.forEach(m),this.h()},h:function(){y(n,"class","sidenav-overlay svelte-1k0tcv8"),_(n,"sidenav-overlay-open",t.open),y(s,"class","header-button svelte-1k0tcv8"),y(s,"role","button"),y(s,"tabindex","0"),y(s,"src","images/hamburger.svg"),y(s,"alt","Menu"),y(u,"href","/"),y(u,"class","svelte-1k0tcv8"),y(c,"class","header-title svelte-1k0tcv8"),y(a,"class","svelte-1k0tcv8"),y(S,"class","header-spacer svelte-1k0tcv8"),y(P,"href","/"),y(P,"class","svelte-1k0tcv8"),y(O,"href","/about"),y(O,"class","svelte-1k0tcv8"),y(I,"href","/blog"),y(I,"class","svelte-1k0tcv8"),y(D,"href","/resume"),y(D,"class","svelte-1k0tcv8"),y(F,"href","/contact"),y(F,"class","svelte-1k0tcv8"),y(A,"class","sidenav svelte-1k0tcv8"),_(A,"sidenav-open",t.open),V=[E(n,"click",t.click_handler),E(s,"click",t.click_handler_1),E(P,"click",t.click_handler_2),E(O,"click",t.click_handler_3),E(I,"click",t.click_handler_4),E(D,"click",t.click_handler_5),E(F,"click",t.click_handler_6)]},m:function(t,r){$(t,e,r),$(t,n,r),$(t,o,r),$(t,a,r),w(a,s),w(a,i),w(a,c),w(c,u),w(u,b),$(t,k,r),$(t,S,r),$(t,L,r),$(t,A,r),w(A,P),w(P,j),w(A,R),w(A,O),w(O,C),w(A,N),w(A,I),w(I,G),w(A,q),w(A,D),w(D,U),w(A,H),w(A,F),w(F,J)},p:function(t,e){t.open&&(_(n,"sidenav-overlay-open",e.open),_(A,"sidenav-open",e.open))},i:r,o:r,d:function(t){t&&(m(e),m(n),m(o),m(a),m(k),m(S),m(L),m(A)),x(V)}}}function Z(t,e,r){var n,o,a=e.segment,s=!1,i=(n=Math.random().toString(36).substr(2,9),o="data-scroll-disabled-".concat(n),{disable:function(){if("undefined"!=typeof document){var t=document.body.classList.contains("noscroll");"true"===document.body.getAttribute(o)&&t||(t||document.body.classList.add("noscroll"),document.body.setAttribute(o,"true"))}},enable:function(){if("undefined"!=typeof document){document.body.setAttribute(o,"false");var t=!0,e=!1,r=void 0;try{for(var n,a=document.body.attributes[Symbol.iterator]();!(t=(n=a.next()).done);t=!0){var s=n.value;if(s.name.startsWith("data-scroll-disabled-")&&"true"===s.value)return}}catch(t){e=!0,r=t}finally{try{t||null==a.return||a.return()}finally{if(e)throw r}}document.body.classList.remove("noscroll")}}});return t.$set=function(t){"segment"in t&&r("segment",a=t.segment)},t.$$.update=function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{open:1}).open&&(s?i.disable():i.enable())},{segment:a,open:s,click_handler:function(){return r("open",s=!1)},click_handler_1:function(){return r("open",s=!0)},click_handler_2:function(){return r("open",s=!1)},click_handler_3:function(){return r("open",s=!1)},click_handler_4:function(){return r("open",s=!1)},click_handler_5:function(){return r("open",s=!1)},click_handler_6:function(){return r("open",s=!1)}}}var tt=function(t){function r(t){var n;return o(this,r),n=a(this,s(r).call(this)),i(c(n),t,Z,Q,e,["segment"]),n}return n(r,u),r}();function et(t){var e,r,n,o,a=new tt({props:{segment:t.segment}}),s=t.$$slots.default,i=k(s,t,null),c=new X({});return{c:function(){a.$$.fragment.c(),e=h(),r=l("main"),i&&i.c(),n=h(),c.$$.fragment.c(),this.h()},l:function(t){a.$$.fragment.l(t),e=g(t),r=p(t,"MAIN",{class:!0},!1);var o=v(r);i&&i.l(o),o.forEach(m),n=g(t),c.$$.fragment.l(t),this.h()},h:function(){y(r,"class","svelte-1072fkp")},m:function(t,s){S(a,t,s),$(t,e,s),$(t,r,s),i&&i.m(r,null),$(t,n,s),S(c,t,s),o=!0},p:function(t,e){var r={};t.segment&&(r.segment=e.segment),a.$set(r),i&&i.p&&t.$$scope&&i.p(L(s,e,t,null),A(s,e,null))},i:function(t){o||(P(a.$$.fragment,t),P(i,t),P(c.$$.fragment,t),o=!0)},o:function(t){j(a.$$.fragment,t),j(i,t),j(c.$$.fragment,t),o=!1},d:function(t){R(a,t),t&&(m(e),m(r)),i&&i.d(t),t&&m(n),R(c,t)}}}function rt(t,e,r){var n=e.segment,o=e.$$slots,a=void 0===o?{}:o,s=e.$$scope;return t.$set=function(t){"segment"in t&&r("segment",n=t.segment),"$$scope"in t&&r("$$scope",s=t.$$scope)},{segment:n,$$slots:a,$$scope:s}}var nt=function(t){function r(t){var n;return o(this,r),n=a(this,s(r).call(this)),i(c(n),t,rt,et,e,["segment"]),n}return n(r,u),r}();function ot(t){var e,r,n=t.error.stack+"";return{c:function(){e=l("pre"),r=f(n)},l:function(t){e=p(t,"PRE",{},!1);var o=v(e);r=d(o,n),o.forEach(m)},m:function(t,n){$(t,e,n),w(e,r)},p:function(t,e){t.error&&n!==(n=e.error.stack+"")&&O(r,n)},d:function(t){t&&m(e)}}}function at(t){var e,n,o,a,s,i,c,u,b,_=t.error.message+"";document.title=e=t.status;var E=t.dev&&t.error.stack&&ot(t);return{c:function(){n=h(),o=l("h1"),a=f(t.status),s=h(),i=l("p"),c=f(_),u=h(),E&&E.c(),b=C(),this.h()},l:function(e){n=g(e),o=p(e,"H1",{class:!0},!1);var r=v(o);a=d(r,t.status),r.forEach(m),s=g(e),i=p(e,"P",{class:!0},!1);var l=v(i);c=d(l,_),l.forEach(m),u=g(e),E&&E.l(e),b=C(),this.h()},h:function(){y(o,"class","svelte-17w3omn"),y(i,"class","svelte-17w3omn")},m:function(t,e){$(t,n,e),$(t,o,e),w(o,a),$(t,s,e),$(t,i,e),w(i,c),$(t,u,e),E&&E.m(t,e),$(t,b,e)},p:function(t,r){t.status&&e!==(e=r.status)&&(document.title=e),t.status&&O(a,r.status),t.error&&_!==(_=r.error.message+"")&&O(c,_),r.dev&&r.error.stack?E?E.p(t,r):((E=ot(r)).c(),E.m(b.parentNode,b)):E&&(E.d(1),E=null)},i:r,o:r,d:function(t){t&&(m(n),m(o),m(s),m(i),m(u)),E&&E.d(t),t&&m(b)}}}function st(t,e,r){var n=e.status,o=e.error;return t.$set=function(t){"status"in t&&r("status",n=t.status),"error"in t&&r("error",o=t.error)},{status:n,error:o,dev:!1}}var it=function(t){function r(t){var n;return o(this,r),n=a(this,s(r).call(this)),i(c(n),t,st,at,e,["status","error"]),n}return n(r,u),r}();function ct(t){var e,r,n=[t.level1.props],o=t.level1.component;function a(t){for(var e={},r=0;r<n.length;r+=1)e=N(e,n[r]);return{props:e}}if(o)var s=new o(a());return{c:function(){s&&s.$$.fragment.c(),e=C()},l:function(t){s&&s.$$.fragment.l(t),e=C()},m:function(t,n){s&&S(s,t,n),$(t,e,n),r=!0},p:function(t,r){var i=t.level1?I(n,[G(r.level1.props)]):{};if(o!==(o=r.level1.component)){if(s){D();var c=s;j(c.$$.fragment,1,0,function(){R(c,1)}),U()}o?((s=new o(a())).$$.fragment.c(),P(s.$$.fragment,1),S(s,e.parentNode,e)):s=null}else o&&s.$set(i)},i:function(t){r||(s&&P(s.$$.fragment,t),r=!0)},o:function(t){s&&j(s.$$.fragment,t),r=!1},d:function(t){t&&m(e),s&&R(s,t)}}}function ut(t){var e,r=new it({props:{error:t.error,status:t.status}});return{c:function(){r.$$.fragment.c()},l:function(t){r.$$.fragment.l(t)},m:function(t,n){S(r,t,n),e=!0},p:function(t,e){var n={};t.error&&(n.error=e.error),t.status&&(n.status=e.status),r.$set(n)},i:function(t){e||(P(r.$$.fragment,t),e=!0)},o:function(t){j(r.$$.fragment,t),e=!1},d:function(t){R(r,t)}}}function lt(t){var e,r,n,o,a=[ut,ct],s=[];function i(t,e){return e.error?0:1}return e=i(0,t),r=s[e]=a[e](t),{c:function(){r.c(),n=C()},l:function(t){r.l(t),n=C()},m:function(t,r){s[e].m(t,r),$(t,n,r),o=!0},p:function(t,o){var c=e;(e=i(0,o))===c?s[e].p(t,o):(D(),j(s[c],1,1,function(){s[c]=null}),U(),(r=s[e])||(r=s[e]=a[e](o)).c(),P(r,1),r.m(n.parentNode,n))},i:function(t){o||(P(r),o=!0)},o:function(t){j(r),o=!1},d:function(t){s[e].d(t),t&&m(n)}}}function ft(t){for(var e,r=[{segment:t.segments[0]},t.level0.props],n={$$slots:{default:[lt]},$$scope:{ctx:t}},o=0;o<r.length;o+=1)n=N(n,r[o]);var a=new nt({props:n});return{c:function(){a.$$.fragment.c()},l:function(t){a.$$.fragment.l(t)},m:function(t,r){S(a,t,r),e=!0},p:function(t,e){var n=t.segments||t.level0?I(r,[t.segments&&{segment:e.segments[0]},t.level0&&G(e.level0.props)]):{};(t.$$scope||t.error||t.status||t.level1)&&(n.$$scope={changed:t,ctx:e}),a.$set(n)},i:function(t){e||(P(a.$$.fragment,t),e=!0)},o:function(t){j(a.$$.fragment,t),e=!1},d:function(t){R(a,t)}}}function ht(t,e,r){var n=e.stores,o=e.error,a=e.status,s=e.segments,i=e.level0,c=e.level1,u=void 0===c?null:c;return q(W,n),t.$set=function(t){"stores"in t&&r("stores",n=t.stores),"error"in t&&r("error",o=t.error),"status"in t&&r("status",a=t.status),"segments"in t&&r("segments",s=t.segments),"level0"in t&&r("level0",i=t.level0),"level1"in t&&r("level1",u=t.level1)},{stores:n,error:o,status:a,segments:s,level0:i,level1:u}}var pt,vt=function(t){function r(t){var n;return o(this,r),n=a(this,s(r).call(this)),i(c(n),t,ht,ft,e,["stores","error","status","segments","level0","level1"]),n}return n(r,u),r}(),dt=[],mt=[{js:function(){return import("./index.85a78699.js")},css:["legacy/index.85a78699.css"]},{js:function(){return import("./contact.1079ca0e.js")},css:["legacy/contact.1079ca0e.css"]},{js:function(){return import("./resume.4ac941b8.js")},css:["legacy/resume.4ac941b8.css"]},{js:function(){return import("./about.64627a3c.js")},css:["legacy/about.64627a3c.css"]},{js:function(){return import("./index.993e711e.js")},css:["legacy/index.993e711e.css"]},{js:function(){return import("./[slug].fac54408.js")},css:["legacy/[slug].fac54408.css"]}],gt=(pt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/contact\/?$/,parts:[{i:1}]},{pattern:/^\/resume\/?$/,parts:[{i:2}]},{pattern:/^\/about\/?$/,parts:[{i:3}]},{pattern:/^\/blog\/?$/,parts:[{i:4}]},{pattern:/^\/blog\/post\/([^\/]+?)\/?$/,parts:[null,null,{i:5,params:function(t){return{slug:pt(t[1])}}}]}]);function yt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},r=qt(new URL(t,document.baseURI));return r?(Nt[e.replaceState?"replaceState":"pushState"]({id:Rt},"",t),Ut(r,null).then(function(){})):(location.href=t,new Promise(function(t){}))}var bt,$t,wt,_t,Et,xt="undefined"!=typeof __SAPPER__&&__SAPPER__,kt=!1,St=[],Lt="{}",At={page:K({}),preloading:K(null),session:K(xt&&xt.session)};At.session.subscribe(function(){var t=B(J.mark(function t(e){var r,n,o,a,s,i;return J.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(_t=e,kt){t.next=3;break}return t.abrupt("return");case 3:return Et=!0,r=qt(new URL(location.href)),n=$t={},t.next=8,Vt(r);case 8:if(o=t.sent,a=o.redirect,s=o.props,i=o.branch,n===$t){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,Tt(a,i,s,r.page);case 16:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());var Pt,jt=null;var Rt,Ot=1;var Ct,Nt="undefined"!=typeof history?history:{pushState:function(t,e,r){},replaceState:function(t,e,r){},scrollRestoration:""},It={};function Gt(e){var r=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(function(e){var n=F(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),o=n[1],a=n[2],s=void 0===a?"":a;"string"==typeof r[o]&&(r[o]=[r[o]]),"object"===t(r[o])?r[o].push(s):r[o]=s}),r}function qt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(xt.baseUrl))return null;var e=t.pathname.slice(xt.baseUrl.length);if(""===e&&(e="/"),!dt.some(function(t){return t.test(e)}))for(var r=0;r<gt.length;r+=1){var n=gt[r],o=n.pattern.exec(e);if(o){var a=Gt(t.search),s=n.parts[n.parts.length-1],i=s.params?s.params(o):{},c={host:location.host,path:e,query:a,params:i};return{href:t.href,route:n,match:o,page:c}}}}function Dt(){return{x:pageXOffset,y:pageYOffset}}function Ut(t,e,r,n){return Ht.apply(this,arguments)}function Ht(){return(Ht=B(J.mark(function t(e,r,n,o){var a,s,i,c,u,l,f,h,p;return J.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r?Rt=r:(a=Dt(),It[Rt]=a,r=Rt=++Ot,It[Rt]=n?a:{x:0,y:0}),Rt=r,bt&&At.preloading.set(!0),s=jt&&jt.href===e.href?jt.promise:Vt(e),jt=null,i=$t={},t.next=8,s;case 8:if(c=t.sent,u=c.redirect,l=c.props,f=c.branch,i===$t){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,Tt(u,f,l,e.page);case 16:document.activeElement&&document.activeElement.blur(),n||(h=It[r],o&&(p=document.getElementById(o.slice(1)))&&(h={x:0,y:p.getBoundingClientRect().top}),It[Rt]=h,h&&scrollTo(h.x,h.y));case 18:case"end":return t.stop()}},t)}))).apply(this,arguments)}function Tt(t,e,r,n){return Ft.apply(this,arguments)}function Ft(){return(Ft=B(J.mark(function t(e,r,n,o){var a,s;return J.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",yt(e.location,{replaceState:!0}));case 2:if(At.page.set(o),At.preloading.set(!1),!bt){t.next=8;break}bt.$set(n),t.next=17;break;case 8:return n.stores={page:{subscribe:At.page.subscribe},preloading:{subscribe:At.preloading.subscribe},session:At.session},t.next=11,wt;case 11:if(t.t0=t.sent,n.level0={props:t.t0},a=document.querySelector("#sapper-head-start"),s=document.querySelector("#sapper-head-end"),a&&s){for(;a.nextSibling!==s;)Wt(a.nextSibling);Wt(a),Wt(s)}bt=new vt({target:Pt,props:n,hydrate:!0});case 17:St=r,Lt=JSON.stringify(o.query),kt=!0,Et=!1;case 21:case"end":return t.stop()}},t)}))).apply(this,arguments)}function Jt(t,e,r,n){if(n!==Lt)return!0;var o=St[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(r.slice(1,t+2)))||void 0))}function Vt(t){return Bt.apply(this,arguments)}function Bt(){return(Bt=B(J.mark(function t(e){var r,n,o,a,s,i,c,u,l,f,h;return J.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.route,n=e.page,o=n.path.split("/").filter(Boolean),a=null,s={error:null,status:200,segments:[o[0]]},i={fetch:function(t){function e(e,r){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t,e){return fetch(t,e)}),redirect:function(t,e){if(a&&(a.statusCode!==t||a.location!==e))throw new Error("Conflicting redirects");a={statusCode:t,location:e}},error:function(t,e){s.error="string"==typeof e?new Error(e):e,s.status=t}},wt||(wt=xt.preloaded[0]||Y.call(i,{host:n.host,path:n.path,query:n.query,params:{}},_t)),u=1,t.prev=7,l=JSON.stringify(n.query),f=r.pattern.exec(n.path),h=!1,t.next=13,Promise.all(r.parts.map(function(){var t=B(J.mark(function t(r,a){var c,p,v,d,m,g;return J.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(c=o[a],Jt(a,c,f,l)&&(h=!0),s.segments[u]=o[a+1],r){t.next=5;break}return t.abrupt("return",{segment:c});case 5:if(p=u++,Et||h||!St[a]||St[a].part!==r.i){t.next=8;break}return t.abrupt("return",St[a]);case 8:return h=!1,t.next=11,Kt(mt[r.i]);case 11:if(v=t.sent,d=v.default,m=v.preload,!kt&&xt.preloaded[a+1]){t.next=25;break}if(!m){t.next=21;break}return t.next=18,m.call(i,{host:n.host,path:n.path,query:n.query,params:r.params?r.params(e.match):{}},_t);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:g=t.t0,t.next=26;break;case 25:g=xt.preloaded[a+1];case 26:return t.abrupt("return",s["level".concat(p)]={component:d,props:g,segment:c,match:f,part:r.i});case 27:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()));case 13:c=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),s.error=t.t0,s.status=500,c=[];case 21:return t.abrupt("return",{redirect:a,props:s,branch:c});case 22:case"end":return t.stop()}},t,null,[[7,16]])}))).apply(this,arguments)}function Mt(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise(function(t,r){var n=document.createElement("link");n.rel="stylesheet",n.href=e,n.onload=function(){return t()},n.onerror=r,document.head.appendChild(n)})}function Kt(t){var e="string"==typeof t.css?[]:t.css.map(Mt);return e.unshift(t.js()),Promise.all(e).then(function(t){return t[0]})}function Wt(t){t.parentNode.removeChild(t)}function Yt(t){var e=qt(new URL(t,document.baseURI));if(e)return jt&&t===jt.href||function(t,e){jt={href:t,promise:e}}(t,Vt(e)),jt.promise}function zt(t){clearTimeout(Ct),Ct=setTimeout(function(){Xt(t)},20)}function Xt(t){var e=Zt(t.target);e&&"prefetch"===e.rel&&Yt(e.href)}function Qt(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var r=Zt(e.target);if(r&&r.href){var n="object"===t(r.href)&&"SVGAnimatedString"===r.href.constructor.name,o=String(n?r.href.baseVal:r.href);if(o!==location.href){if(!r.hasAttribute("download")&&"external"!==r.getAttribute("rel")&&(n?!r.target.baseVal:!r.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var s=qt(a);if(s)Ut(s,null,r.hasAttribute("sapper-noscroll"),a.hash),e.preventDefault(),Nt.pushState({id:Rt},"",a.href)}}}else location.hash||e.preventDefault()}}}function Zt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function te(t){if(It[Rt]=Dt(),t.state){var e=qt(new URL(location.href));e?Ut(e,t.state.id):location.href=location.href}else(function(t){Rt=t})(Ot=Ot+1),Nt.replaceState({id:Rt},"",location.href)}!function(t){var e;"scrollRestoration"in Nt&&(Nt.scrollRestoration="manual"),e=t.target,Pt=e,addEventListener("click",Qt),addEventListener("popstate",te),addEventListener("touchstart",Xt),addEventListener("mousemove",zt),Promise.resolve().then(function(){var t=location,e=t.hash,r=t.href;Nt.replaceState({id:Ot},"",r);var n,o,a,s,i,c,u,l,f=new URL(location.href);if(xt.error)return n=location,o=n.host,a=n.pathname,s=n.search,i=xt.session,c=xt.preloaded,u=xt.status,l=xt.error,wt||(wt=c&&c[0]),void Tt(null,[],{error:l,status:u,session:i,level0:{props:wt},level1:{props:{status:u,error:l},component:it},segments:c},{host:o,path:a,query:Gt(s),params:{}});var h=qt(f);return h?Ut(h,Ot,!0,e):void 0})}({target:document.querySelector("#sapper")}),window.navigator&&navigator.serviceWorker&&navigator.serviceWorker.getRegistrations().then(function(t){var e=!0,r=!1,n=void 0;try{for(var o,a=t[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){o.value.unregister()}}catch(t){r=!0,n=t}finally{try{e||null==a.return||a.return()}finally{if(r)throw n}}});