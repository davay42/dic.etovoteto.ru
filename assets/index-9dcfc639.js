import{e as S,r as h,i as g,H as T,I as E,J as N,c as b,K as k}from"./index-312f53ac.js";function x(e){return E()?(N(e),!0):!1}function F(e){return typeof e=="function"?e():S(e)}const A=typeof window<"u"&&typeof document<"u";function M(e,t=1e3,c={}){const{immediate:r=!0,immediateCallback:n=!1}=c;let o=null;const u=h(!1);function f(){o&&(clearInterval(o),o=null)}function i(){u.value=!1,f()}function l(){const m=F(t);m<=0||(u.value=!0,n&&e(),f(),o=setInterval(e,m))}if(r&&A&&l(),g(t)||typeof t=="function"){const m=T(t,()=>{u.value&&A&&l()});x(m)}return x(i),{isActive:u,pause:i,resume:l}}const q=A?window:void 0;function C(e,t={}){const{immediate:c=!0,fpsLimit:r=void 0,window:n=q}=t,o=h(!1),u=r?1e3/r:null;let f=0,i=null;function l(d){if(!o.value||!n)return;const w=d-(f||d);if(u&&w<u){i=n.requestAnimationFrame(l);return}e({delta:w,timestamp:d}),f=d,i=n.requestAnimationFrame(l)}function m(){!o.value&&n&&(o.value=!0,i=n.requestAnimationFrame(l))}function v(){o.value=!1,i!=null&&n&&(n.cancelAnimationFrame(i),i=null)}return c&&m(),x(v),{isActive:k(o),pause:v,resume:m}}function L(e={}){const{controls:t=!1,interval:c="requestAnimationFrame"}=e,r=h(new Date),n=()=>r.value=new Date,o=c==="requestAnimationFrame"?C(n,{immediate:!0}):M(n,c,{immediate:!0});return t?{now:r,...o}:r}const _=[{max:6e4,value:1e3,name:"second"},{max:276e4,value:6e4,name:"minute"},{max:72e6,value:36e5,name:"hour"},{max:5184e5,value:864e5,name:"day"},{max:24192e5,value:6048e5,name:"week"},{max:28512e6,value:2592e6,name:"month"},{max:Number.POSITIVE_INFINITY,value:31536e6,name:"year"}],O={justNow:"just now",past:e=>e.match(/\d/)?`${e} ago`:e,future:e=>e.match(/\d/)?`in ${e}`:e,month:(e,t)=>e===1?t?"last month":"next month":`${e} month${e>1?"s":""}`,year:(e,t)=>e===1?t?"last year":"next year":`${e} year${e>1?"s":""}`,day:(e,t)=>e===1?t?"yesterday":"tomorrow":`${e} day${e>1?"s":""}`,week:(e,t)=>e===1?t?"last week":"next week":`${e} week${e>1?"s":""}`,hour:e=>`${e} hour${e>1?"s":""}`,minute:e=>`${e} minute${e>1?"s":""}`,second:e=>`${e} second${e>1?"s":""}`,invalid:""};function R(e){return e.toISOString().slice(0,10)}function j(e,t={}){const{controls:c=!1,updateInterval:r=3e4}=t,{now:n,...o}=L({interval:r,controls:!0}),u=b(()=>U(new Date(F(e)),t,F(n)));return c?{timeAgo:u,...o}:u}function U(e,t={},c=Date.now()){var r;const{max:n,messages:o=O,fullDateFormatter:u=R,units:f=_,showSecond:i=!1,rounding:l="round"}=t,m=typeof l=="number"?a=>+a.toFixed(l):Math[l],v=+c-+e,d=Math.abs(v);function w(a,s){return m(Math.abs(a)/s.value)}function $(a,s){const y=w(a,s),p=a>0,I=D(s.name,y,p);return D(p?"past":"future",I,p)}function D(a,s,y){const p=o[a];return typeof p=="function"?p(s,y):p.replace("{0}",s.toString())}if(d<6e4&&!i)return o.justNow;if(typeof n=="number"&&d>n)return u(new Date(e));if(typeof n=="string"){const a=(r=f.find(s=>s.name===n))==null?void 0:r.max;if(a&&d>a)return u(new Date(e))}for(const[a,s]of f.entries()){if(w(v,s)<=0&&f[a-1])return $(v,f[a-1]);if(d<s.max)return $(v,s)}return o.invalid}export{j as u};
//# sourceMappingURL=index-9dcfc639.js.map
