import{_ as i}from"./AuthorCard.a4bb1f8f.js";import{d}from"./useDb.2d9c0a42.js";import{a as r,f as n,k as m,F as p,M as f,o as t,m as x,j as k,g as v,N as g,O as h,b as y}from"./use.39699d53.js";const B={class:"flex flex-col gap-4 py-4"},C={class:"flex flex-col gap-4"},V={__name:"index",setup(N){const a=r(),c=r(0);async function l(){const{data:o,meta:{total_count:s}}=await d.items("directus_users").readByQuery({meta:"total_count"});a.value=o,c.value=s}return l(),(o,s)=>{const u=i,_=y("router-link");return t(),n("div",B,[m("div",C,[(t(!0),n(p,null,f(a.value,e=>(t(),x(_,{key:e.id,to:`/authors/${e.id}`},{default:k(()=>[v(u,g(h(e)),null,16)]),_:2},1032,["to"]))),128))])])}}};export{V as default};
//# sourceMappingURL=index.e12e0952.js.map