import{o as a,d as l,f as e,g as o,t as s,A as d}from"./index-dbf58cde.js";const n={class:"card flex flex-wrap gap-4 items-start"},c={key:0,class:"flex",style:{flex:"1 1 100px"}},r=["src"],f={class:"flex flex-col gap-2",style:{flex:"1 1 200px"}},u={class:"text-2xl font-bold"},m={key:0,class:"flex"},_=e("div",{class:"i-la-map-marker"},null,-1),x={class:"text-sm"},h={class:"text-md"},p={__name:"AuthorCard",props:{id:{type:String,default:""},avatar:{type:String,default:""},first_name:{type:String,default:""},last_name:{type:String,default:""},location:{type:String,default:""},description:{type:String,default:""}},setup(t){return(i,v)=>(a(),l("div",n,[t.avatar?(a(),l("div",c,[e("img",{class:"rounded-full",src:`https://api.etovoteto.ru/assets/${t.avatar}?width=100`},null,8,r)])):o("",!0),e("div",f,[e("div",u,s(t.first_name)+" "+s(t.last_name),1),t.location?(a(),l("div",m,[_,e("div",x,s(t.location),1)])):o("",!0),e("div",h,s(t.description),1)]),d(i.$slots,"default")]))}};export{p as _};
//# sourceMappingURL=AuthorCard-3fcfc989.js.map