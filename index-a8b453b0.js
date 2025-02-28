import{r as c,R as ae,c as ie}from"./axios-98289243.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}var E;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(E||(E={}));const _="popstate";function le(e){e===void 0&&(e={});let{initialEntries:t=["/"],initialIndex:n,v5Compat:r=!1}=e,a;a=t.map((p,m)=>h(p,typeof p=="string"?null:p.state,m===0?"default":void 0));let i=o(n??a.length-1),l=E.Pop,s=null;function o(p){return Math.min(Math.max(p,0),a.length-1)}function f(){return a[i]}function h(p,m,g){m===void 0&&(m=null);let d=B(a?f().pathname:"/",p,m,g);return M(d.pathname.charAt(0)==="/","relative pathnames are not supported in memory history: "+JSON.stringify(p)),d}function u(p){return typeof p=="string"?p:F(p)}return{get index(){return i},get action(){return l},get location(){return f()},createHref:u,createURL(p){return new URL(u(p),"http://localhost")},encodeLocation(p){let m=typeof p=="string"?b(p):p;return{pathname:m.pathname||"",search:m.search||"",hash:m.hash||""}},push(p,m){l=E.Push;let g=h(p,m);i+=1,a.splice(i,a.length,g),r&&s&&s({action:l,location:g,delta:1})},replace(p,m){l=E.Replace;let g=h(p,m);a[i]=g,r&&s&&s({action:l,location:g,delta:0})},go(p){l=E.Pop;let m=o(i+p),g=a[m];i=m,s&&s({action:l,location:g,delta:p})},listen(p){return s=p,()=>{s=null}}}}function Xe(e){e===void 0&&(e={});function t(a,i){let{pathname:l="/",search:s="",hash:o=""}=b(a.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),B("",{pathname:l,search:s,hash:o},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(a,i){let l=a.document.querySelector("base"),s="";if(l&&l.getAttribute("href")){let o=a.location.href,f=o.indexOf("#");s=f===-1?o:o.slice(0,f)}return s+"#"+(typeof i=="string"?i:F(i))}function r(a,i){M(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return se(t,n,r,e)}function y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function M(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function oe(){return Math.random().toString(36).substr(2,8)}function D(e,t){return{usr:e.state,key:e.key,idx:t}}function B(e,t,n,r){return n===void 0&&(n=null),I({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?b(t):t,{state:n,key:t&&t.key||r||oe()})}function F(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function b(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function se(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,l=a.history,s=E.Pop,o=null,f=h();f==null&&(f=0,l.replaceState(I({},l.state,{idx:f}),""));function h(){return(l.state||{idx:null}).idx}function u(){s=E.Pop;let d=h(),x=d==null?null:d-f;f=d,o&&o({action:s,location:g.location,delta:x})}function v(d,x){s=E.Push;let C=B(g.location,d,x);n&&n(C,d),f=h()+1;let P=D(C,f),w=g.createHref(C);try{l.pushState(P,"",w)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;a.location.assign(w)}i&&o&&o({action:s,location:g.location,delta:1})}function p(d,x){s=E.Replace;let C=B(g.location,d,x);n&&n(C,d),f=h();let P=D(C,f),w=g.createHref(C);l.replaceState(P,"",w),i&&o&&o({action:s,location:g.location,delta:0})}function m(d){let x=a.location.origin!=="null"?a.location.origin:a.location.href,C=typeof d=="string"?d:F(d);return C=C.replace(/ $/,"%20"),y(x,"No window.location.(origin|href) available to create URL for href: "+C),new URL(C,x)}let g={get action(){return s},get location(){return e(a,l)},listen(d){if(o)throw new Error("A history only accepts one active listener");return a.addEventListener(_,u),o=d,()=>{a.removeEventListener(_,u),o=null}},createHref(d){return t(a,d)},createURL:m,encodeLocation(d){let x=m(d);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:v,replace:p,go(d){return l.go(d)}};return g}var J;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(J||(J={}));function ue(e,t,n){return n===void 0&&(n="/"),ce(e,t,n,!1)}function ce(e,t,n,r){let a=typeof t=="string"?b(t):t,i=Q(a.pathname||"/",n);if(i==null)return null;let l=K(e);fe(l);let s=null;for(let o=0;s==null&&o<l.length;++o){let f=Pe(i);s=Ce(l[o],f,r)}return s}function K(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,l,s)=>{let o={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};o.relativePath.startsWith("/")&&(y(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let f=R([r,o.relativePath]),h=n.concat(o);i.children&&i.children.length>0&&(y(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),K(i.children,t,h,f)),!(i.path==null&&!i.index)&&t.push({path:f,score:ye(f,i.index),routesMeta:h})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))a(i,l);else for(let o of G(i.path))a(i,l,o)}),t}function G(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let l=G(r.join("/")),s=[];return s.push(...l.map(o=>o===""?i:[i,o].join("/"))),a&&s.push(...l),s.map(o=>e.startsWith("/")&&o===""?"/":o)}function fe(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:xe(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const he=/^:[\w-]+$/,de=3,pe=2,me=1,ge=10,ve=-2,H=e=>e==="*";function ye(e,t){let n=e.split("/"),r=n.length;return n.some(H)&&(r+=ve),t&&(r+=pe),n.filter(a=>!H(a)).reduce((a,i)=>a+(he.test(i)?de:i===""?me:ge),r)}function xe(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function Ce(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,a={},i="/",l=[];for(let s=0;s<r.length;++s){let o=r[s],f=s===r.length-1,h=i==="/"?t:t.slice(i.length)||"/",u=V({path:o.relativePath,caseSensitive:o.caseSensitive,end:f},h),v=o.route;if(!u&&f&&n&&!r[r.length-1].route.index&&(u=V({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},h)),!u)return null;Object.assign(a,u.params),l.push({params:a,pathname:R([i,u.pathname]),pathnameBase:Le(R([i,u.pathnameBase])),route:v}),u.pathnameBase!=="/"&&(i=R([i,u.pathnameBase]))}return l}function V(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ee(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],l=i.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce((f,h,u)=>{let{paramName:v,isOptional:p}=h;if(v==="*"){let g=s[u]||"";l=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}const m=s[u];return p&&!m?f[v]=void 0:f[v]=(m||"").replace(/%2F/g,"/"),f},{}),pathname:i,pathnameBase:l,pattern:e}}function Ee(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),M(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,o)=>(r.push({paramName:s,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function Pe(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return M(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Q(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Re(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?b(e):e;return{pathname:n?n.startsWith("/")?n:be(n,t):t,search:Ie(r),hash:Oe(a)}}function be(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function $(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Se(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function X(e,t){let n=Se(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Y(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=b(e):(a=I({},e),y(!a.pathname||!a.pathname.includes("?"),$("?","pathname","search",a)),y(!a.pathname||!a.pathname.includes("#"),$("#","pathname","hash",a)),y(!a.search||!a.search.includes("#"),$("#","search","hash",a)));let i=e===""||a.pathname==="",l=i?"/":a.pathname,s;if(l==null)s=n;else{let u=t.length-1;if(!r&&l.startsWith("..")){let v=l.split("/");for(;v[0]==="..";)v.shift(),u-=1;a.pathname=v.join("/")}s=u>=0?t[u]:"/"}let o=Re(a,s),f=l&&l!=="/"&&l.endsWith("/"),h=(i||l===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(f||h)&&(o.pathname+="/"),o}const R=e=>e.join("/").replace(/\/\/+/g,"/"),Le=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ie=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Oe=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ne(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Z=["post","put","patch","delete"];new Set(Z);const we=["get",...Z];new Set(we);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}const A=c.createContext(null),Be=c.createContext(null),L=c.createContext(null),T=c.createContext(null),S=c.createContext({outlet:null,matches:[],isDataRoute:!1}),ee=c.createContext(null);function Ye(e,t){let{relative:n}=t===void 0?{}:t;N()||y(!1);let{basename:r,navigator:a}=c.useContext(L),{hash:i,pathname:l,search:s}=Me(e,{relative:n}),o=l;return r!=="/"&&(o=l==="/"?r:R([r,l])),a.createHref({pathname:o,search:s,hash:i})}function N(){return c.useContext(T)!=null}function k(){return N()||y(!1),c.useContext(T).location}function te(e){c.useContext(L).static||c.useLayoutEffect(e)}function Ze(){let{isDataRoute:e}=c.useContext(S);return e?Ve():Ue()}function Ue(){N()||y(!1);let e=c.useContext(A),{basename:t,future:n,navigator:r}=c.useContext(L),{matches:a}=c.useContext(S),{pathname:i}=k(),l=JSON.stringify(X(a,n.v7_relativeSplatPath)),s=c.useRef(!1);return te(()=>{s.current=!0}),c.useCallback(function(f,h){if(h===void 0&&(h={}),!s.current)return;if(typeof f=="number"){r.go(f);return}let u=Y(f,JSON.parse(l),i,h.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:R([t,u.pathname])),(h.replace?r.replace:r.push)(u,h.state,h)},[t,r,l,i,e])}function Me(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=c.useContext(L),{matches:a}=c.useContext(S),{pathname:i}=k(),l=JSON.stringify(X(a,r.v7_relativeSplatPath));return c.useMemo(()=>Y(e,JSON.parse(l),i,n==="path"),[e,l,i,n])}function Te(e,t){return We(e,t)}function We(e,t,n,r){N()||y(!1);let{navigator:a}=c.useContext(L),{matches:i}=c.useContext(S),l=i[i.length-1],s=l?l.params:{};l&&l.pathname;let o=l?l.pathnameBase:"/";l&&l.route;let f=k(),h;if(t){var u;let d=typeof t=="string"?b(t):t;o==="/"||(u=d.pathname)!=null&&u.startsWith(o)||y(!1),h=d}else h=f;let v=h.pathname||"/",p=v;if(o!=="/"){let d=o.replace(/^\//,"").split("/");p="/"+v.replace(/^\//,"").split("/").slice(d.length).join("/")}let m=ue(e,{pathname:p}),g=ke(m&&m.map(d=>Object.assign({},d,{params:Object.assign({},s,d.params),pathname:R([o,a.encodeLocation?a.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?o:R([o,a.encodeLocation?a.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),i,n,r);return t&&g?c.createElement(T.Provider,{value:{location:O({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:E.Pop}},g):g}function $e(){let e=He(),t=Ne(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return c.createElement(c.Fragment,null,c.createElement("h2",null,"Unexpected Application Error!"),c.createElement("h3",{style:{fontStyle:"italic"}},t),n?c.createElement("pre",{style:a},n):null,i)}const je=c.createElement($e,null);class Fe extends c.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?c.createElement(S.Provider,{value:this.props.routeContext},c.createElement(ee.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ae(e){let{routeContext:t,match:n,children:r}=e,a=c.useContext(A);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),c.createElement(S.Provider,{value:t},r)}function ke(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=(a=n)==null?void 0:a.errors;if(s!=null){let h=l.findIndex(u=>u.route.id&&s?.[u.route.id]!==void 0);h>=0||y(!1),l=l.slice(0,Math.min(l.length,h+1))}let o=!1,f=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<l.length;h++){let u=l[h];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(f=h),u.route.id){let{loaderData:v,errors:p}=n,m=u.route.loader&&v[u.route.id]===void 0&&(!p||p[u.route.id]===void 0);if(u.route.lazy||m){o=!0,f>=0?l=l.slice(0,f+1):l=[l[0]];break}}}return l.reduceRight((h,u,v)=>{let p,m=!1,g=null,d=null;n&&(p=s&&u.route.id?s[u.route.id]:void 0,g=u.route.errorElement||je,o&&(f<0&&v===0?(ze("route-fallback",!1),m=!0,d=null):f===v&&(m=!0,d=u.route.hydrateFallbackElement||null)));let x=t.concat(l.slice(0,v+1)),C=()=>{let P;return p?P=g:m?P=d:u.route.Component?P=c.createElement(u.route.Component,null):u.route.element?P=u.route.element:P=h,c.createElement(Ae,{match:u,routeContext:{outlet:h,matches:x,isDataRoute:n!=null},children:P})};return n&&(u.route.ErrorBoundary||u.route.errorElement||v===0)?c.createElement(Fe,{location:n.location,revalidation:n.revalidation,component:g,error:p,children:C(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):C()},null)}var ne=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ne||{}),U=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(U||{});function _e(e){let t=c.useContext(A);return t||y(!1),t}function De(e){let t=c.useContext(Be);return t||y(!1),t}function Je(e){let t=c.useContext(S);return t||y(!1),t}function re(e){let t=Je(),n=t.matches[t.matches.length-1];return n.route.id||y(!1),n.route.id}function He(){var e;let t=c.useContext(ee),n=De(U.UseRouteError),r=re(U.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ve(){let{router:e}=_e(ne.UseNavigateStable),t=re(U.UseNavigateStable),n=c.useRef(!1);return te(()=>{n.current=!0}),c.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,O({fromRouteId:t},i)))},[e,t])}const z={};function ze(e,t,n){!t&&!z[e]&&(z[e]=!0)}const qe="startTransition",q=ae[qe];function et(e){let{basename:t,children:n,initialEntries:r,initialIndex:a,future:i}=e,l=c.useRef();l.current==null&&(l.current=le({initialEntries:r,initialIndex:a,v5Compat:!0}));let s=l.current,[o,f]=c.useState({action:s.action,location:s.location}),{v7_startTransition:h}=i||{},u=c.useCallback(v=>{h&&q?q(()=>f(v)):f(v)},[f,h]);return c.useLayoutEffect(()=>s.listen(u),[s,u]),c.createElement(Ge,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:s,future:i})}function Ke(e){y(!1)}function Ge(e){let{basename:t="/",children:n=null,location:r,navigationType:a=E.Pop,navigator:i,static:l=!1,future:s}=e;N()&&y(!1);let o=t.replace(/^\/*/,"/"),f=c.useMemo(()=>({basename:o,navigator:i,static:l,future:O({v7_relativeSplatPath:!1},s)}),[o,s,i,l]);typeof r=="string"&&(r=b(r));let{pathname:h="/",search:u="",hash:v="",state:p=null,key:m="default"}=r,g=c.useMemo(()=>{let d=Q(h,o);return d==null?null:{location:{pathname:d,search:u,hash:v,state:p,key:m},navigationType:a}},[o,h,u,v,p,m,a]);return g==null?null:c.createElement(L.Provider,{value:f},c.createElement(T.Provider,{children:n,value:g}))}function tt(e){let{children:t,location:n}=e;return Te(j(t),n)}new Promise(()=>{});function j(e,t){t===void 0&&(t=[]);let n=[];return c.Children.forEach(e,(r,a)=>{if(!c.isValidElement(r))return;let i=[...t,a];if(r.type===c.Fragment){n.push.apply(n,j(r.props.children,i));return}r.type!==Ke&&y(!1),!r.props.index||!r.props.children||y(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=j(r.props.children,i)),n.push(l)}),n}const{Axios:nt,AxiosError:rt,CanceledError:at,isCancel:it,CancelToken:lt,VERSION:ot,all:st,Cancel:ut,isAxiosError:ct,spread:ft,toFormData:ht,AxiosHeaders:dt,HttpStatusCode:pt,formToJSON:mt,getAdapter:gt,mergeConfig:vt}=ie;export{rt as A,et as M,L as N,Ge as R,Ze as a,k as b,Xe as c,Me as d,F as e,tt as f,Ke as g,ct as i,Q as s,Ye as u};
