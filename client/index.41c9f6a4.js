function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n,e){if(t){const o=u(t,n,e);return t[0](o)}}function u(t,e,o){return t[1]?n({},n(e.$$scope.ctx,t[1](o?o(e):{}))):e.$$scope.ctx}function i(t,e,o,r){return t[1]?n({},n(e.$$scope.changed||{},t[1](r?r(o):{}))):e.$$scope.changed||{}}function f(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function $(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function p(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function g(){return h(" ")}function m(){return h("")}function y(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function b(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function x(t,n,e){n in t?t[n]=e:b(t,n,e)}function w(t){return Array.from(t.childNodes)}function _(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){for(let t=0;t<r.attributes.length;t+=1){const n=r.attributes[t];e[n.name]||r.removeAttribute(n.name)}return t.splice(o,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):p(n)}function v(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return h(n)}function k(t){return v(t," ")}function E(t,n){n=""+n,t.data!==n&&(t.data=n)}function S(t,n,e){t.classList[e?"add":"remove"](n)}let A;function N(t){A=t}function j(){if(!A)throw new Error("Function called outside component initialization");return A}function M(t){j().$$.on_mount.push(t)}function C(t,n){j().$$.context.set(t,n)}const L=[],q=[],z=[],B=[],F=Promise.resolve();let O=!1;function T(t){z.push(t)}function D(){const t=new Set;do{for(;L.length;){const t=L.shift();N(t),G(t.$$)}for(;q.length;)q.pop()();for(let n=0;n<z.length;n+=1){const e=z[n];t.has(e)||(e(),t.add(e))}z.length=0}while(L.length);for(;B.length;)B.pop()();O=!1}function G(t){t.fragment&&(t.update(t.dirty),r(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(T))}const H=new Set;let I;function J(){I={r:0,c:[],p:I}}function K(){I.r||r(I.c),I=I.p}function P(t,n){t&&t.i&&(H.delete(t),t.i(n))}function Q(t,n,e,o){if(t&&t.o){if(H.has(t))return;H.add(t),I.c.push(()=>{H.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function R(t,n){t.d(1),n.delete(t.key)}function U(t,n,e,o,r,c,s,a,u,i,f,l){let d=t.length,$=c.length,p=d;const h={};for(;p--;)h[t[p].key]=p;const g=[],m=new Map,y=new Map;for(p=$;p--;){const t=l(r,c,p),a=e(t);let u=s.get(a);u?o&&u.p(n,t):(u=i(a,t)).c(),m.set(a,g[p]=u),a in h&&y.set(a,Math.abs(p-h[a]))}const b=new Set,x=new Set;function w(t){P(t,1),t.m(a,f),s.set(t.key,t),f=t.first,$--}for(;d&&$;){const n=g[$-1],e=t[d-1],o=n.key,r=e.key;n===e?(f=n.first,d--,$--):m.has(r)?!s.has(o)||b.has(o)?w(n):x.has(r)?d--:y.get(o)>y.get(r)?(x.add(o),w(n)):(b.add(r),d--):(u(e,s),d--)}for(;d--;){const n=t[d];m.has(n.key)||u(n,s)}for(;$;)w(g[$-1]);return g}function V(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],a=n[c];if(a){for(const t in s)t in a||(o[t]=1);for(const t in a)r[t]||(e[t]=a[t],r[t]=1);t[c]=a}else for(const t in s)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function W(t){return"object"==typeof t&&null!==t?t:{}}function X(t,n,o){const{fragment:s,on_mount:a,on_destroy:u,after_update:i}=t.$$;s.m(n,o),T(()=>{const n=a.map(e).filter(c);u?u.push(...n):r(n),t.$$.on_mount=[]}),i.forEach(T)}function Y(t,n){t.$$.fragment&&(r(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function Z(t,n){t.$$.dirty||(L.push(t),O||(O=!0,F.then(D)),t.$$.dirty=o()),t.$$.dirty[n]=!0}function tt(n,e,c,s,a,u){const i=A;N(n);const f=e.props||{},l=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:o(),dirty:null};let d=!1;l.ctx=c?c(n,f,(t,e,o=e)=>(l.ctx&&a(l.ctx[t],l.ctx[t]=o)&&(l.bound[t]&&l.bound[t](o),d&&Z(n,t)),e)):f,l.update(),d=!0,r(l.before_update),l.fragment=s(l.ctx),e.target&&(e.hydrate?l.fragment.l(w(e.target)):l.fragment.c(),e.intro&&P(n.$$.fragment),X(n,e.target,e.anchor),D()),N(i)}class nt{$destroy(){Y(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}export{m as A,n as B,V as C,W as D,C as E,J as F,K as G,$ as H,U as I,R as J,M as K,nt as S,g as a,w as b,_ as c,v as d,p as e,d as f,k as g,b as h,tt as i,x as j,l as k,f as l,S as m,t as n,y as o,a as p,X as q,r,s,h as t,i as u,u as v,P as w,Q as x,Y as y,E as z};