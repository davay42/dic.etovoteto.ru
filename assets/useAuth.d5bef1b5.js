import{d as t}from"./useDb.2d9c0a42.js";import{r}from"./use.39699d53.js";const e=r({ed:!1,invalid:null,me:{}});function u(){const a=r({email:"",password:""});async function s(){await t.auth.login(a).then(async n=>{e.me=await t.users.me.read(),e.token=n.access_token,e.till=Date.now()+n.expires,e.ed=!0,e.invalid=!1}).catch(()=>e.invalid=!0)}async function i(){await t.auth.refresh().then(()=>{e.ed=!0}).catch(()=>console.warn("couldn't refresh"))}return{auth:e,credentials:a,enter:s,refresh:i}}export{u};
//# sourceMappingURL=useAuth.d5bef1b5.js.map