import{m as p}from"./useDictionary.9632ffca.js";import{a as g}from"./useDb.869b2a34.js";import{I as x,o as h,f as y,k as o,g as l,j as u,q as _,H as t,u as e,z as b,b as k}from"./use.7750d99d.js";const v={class:"card relative"},S={class:"flex items-center"},A=o("div",{class:"flex-auto"},null,-1),N={class:"absolute bottom-2 right-2 text-xs opacity-30"},w={__name:"DefCard",props:{id:{type:Number,default:0},text:{type:String,default:""},words:{type:Array,default:[]},user_created:{type:String,default:""},date_created:{type:String,default:""}},setup(s){const r=s,{user:a}=g(r.user_created),m=x(r.date_created,{messages:p});return(f,B)=>{var i;const d=k("router-link");return h(),y("div",v,[o("div",S,[l(d,{class:"text-lg font-bold",to:`/defs/${s.id}`},{default:u(()=>[_(t(s.text),1)]),_:1},8,["to"]),A,l(d,{class:"px-2 pb-1 rounded-xl text-sm py-0 bg-light-800 dark_bg-dark-800 opacity-20 hover-opacity-90 transition",to:`/authors/${(i=e(a))==null?void 0:i.id}`},{default:u(()=>{var n,c;return[_(t((n=e(a))==null?void 0:n.first_name)+" "+t((c=e(a))==null?void 0:c.last_name),1)]}),_:1},8,["to"])]),o("div",N,t(e(m)),1),b(f.$slots,"default")])}}};export{w as _};
//# sourceMappingURL=DefCard.a547dd7b.js.map
