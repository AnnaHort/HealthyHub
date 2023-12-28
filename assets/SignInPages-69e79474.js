import{r as c,a as H,b as M,c as _,s as U,j as u,l as D}from"./index-0be86d89.js";import{S as Y,R as V,L as Z}from"./SignUpRegister.styled-fa05c4a5.js";import{S as G,R as J,a as Q,b as W,I as T,F as X,c as K,d as ee,e as te,B as ae,f as re,g as se,H as oe}from"./SignInPages.styled-83c0c395.js";import{u as ie}from"./formik.esm-dfafe326.js";import{c as ne,a as N}from"./index.esm-39132250.js";let le={data:""},de=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||le,ce=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ue=/\/\*[^]*?\*\/|  +/g,L=/\n+/g,x=(e,t)=>{let a="",s="",i="";for(let r in e){let n=e[r];r[0]=="@"?r[1]=="i"?a=r+" "+n+";":s+=r[1]=="f"?x(n,r):r+"{"+x(n,r[1]=="k"?"":t)+"}":typeof n=="object"?s+=x(n,t?t.replace(/([^,])+/g,o=>r.replace(/(^:.*)|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,o):o?o+" "+d:d)):r):n!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=x.p?x.p(r,n):r+":"+n+";")}return a+(t&&i?t+"{"+i+"}":i)+s},y={},z=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+z(e[a]);return t}return e},pe=(e,t,a,s,i)=>{let r=z(e),n=y[r]||(y[r]=(d=>{let l=0,p=11;for(;l<d.length;)p=101*p+d.charCodeAt(l++)>>>0;return"go"+p})(r));if(!y[n]){let d=r!==e?e:(l=>{let p,g,f=[{}];for(;p=ce.exec(l.replace(ue,""));)p[4]?f.shift():p[3]?(g=p[3].replace(L," ").trim(),f.unshift(f[0][g]=f[0][g]||{})):f[0][p[1]]=p[2].replace(L," ").trim();return f[0]})(e);y[n]=x(i?{["@keyframes "+n]:d}:d,a?"":"."+n)}let o=a&&y.g?y.g:null;return a&&(y.g=y[n]),((d,l,p,g)=>{g?l.data=l.data.replace(g,d):l.data.indexOf(d)===-1&&(l.data=p?d+l.data:l.data+d)})(y[n],t,s,o),n},me=(e,t,a)=>e.reduce((s,i,r)=>{let n=t[r];if(n&&n.call){let o=n(a),d=o&&o.props&&o.props.className||/^go/.test(o)&&o;n=d?"."+d:o&&typeof o=="object"?o.props?"":x(o,""):o===!1?"":o}return s+i+(n??"")},"");function k(e){let t=this||{},a=e.call?e(t.p):e;return pe(a.unshift?a.raw?me(a,[].slice.call(arguments,1),t.p):a.reduce((s,i)=>Object.assign(s,i&&i.call?i(t.p):i),{}):a,de(t.target),t.g,t.o,t.k)}let B,P,O;k.bind({g:1});let b=k.bind({k:1});function fe(e,t,a,s){x.p=t,B=e,P=a,O=s}function v(e,t){let a=this||{};return function(){let s=arguments;function i(r,n){let o=Object.assign({},r),d=o.className||i.className;a.p=Object.assign({theme:P&&P()},o),a.o=/ *go\d+/.test(d),o.className=k.apply(a,s)+(d?" "+d:""),t&&(o.ref=n);let l=e;return e[0]&&(l=o.as||e,delete o.as),O&&l[0]&&O(o),B(l,o)}return t?t(i):i}}var ge=e=>typeof e=="function",C=(e,t)=>ge(e)?e(t):e,he=(()=>{let e=0;return()=>(++e).toString()})(),q=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ye=20,I=new Map,be=1e3,R=e=>{if(I.has(e))return;let t=setTimeout(()=>{I.delete(e),w({type:4,toastId:e})},be);I.set(e,t)},xe=e=>{let t=I.get(e);t&&clearTimeout(t)},A=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,ye)};case 1:return t.toast.id&&xe(t.toast.id),{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:a}=t;return e.toasts.find(r=>r.id===a.id)?A(e,{type:1,toast:a}):A(e,{type:0,toast:a});case 3:let{toastId:s}=t;return s?R(s):e.toasts.forEach(r=>{R(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===s||s===void 0?{...r,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+i}))}}},S=[],$={toasts:[],pausedAt:void 0},w=e=>{$=A($,e),S.forEach(t=>{t($)})},ve={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},we=(e={})=>{let[t,a]=c.useState($);c.useEffect(()=>(S.push(a),()=>{let i=S.indexOf(a);i>-1&&S.splice(i,1)}),[t]);let s=t.toasts.map(i=>{var r,n;return{...e,...e[i.type],...i,duration:i.duration||((r=e[i.type])==null?void 0:r.duration)||(e==null?void 0:e.duration)||ve[i.type],style:{...e.style,...(n=e[i.type])==null?void 0:n.style,...i.style}}});return{...t,toasts:s}},je=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(a==null?void 0:a.id)||he()}),j=e=>(t,a)=>{let s=je(t,e,a);return w({type:2,toast:s}),s.id},m=(e,t)=>j("blank")(e,t);m.error=j("error");m.success=j("success");m.loading=j("loading");m.custom=j("custom");m.dismiss=e=>{w({type:3,toastId:e})};m.remove=e=>w({type:4,toastId:e});m.promise=(e,t,a)=>{let s=m.loading(t.loading,{...a,...a==null?void 0:a.loading});return e.then(i=>(m.success(C(t.success,i),{id:s,...a,...a==null?void 0:a.success}),i)).catch(i=>{m.error(C(t.error,i),{id:s,...a,...a==null?void 0:a.error})}),e};var Ee=(e,t)=>{w({type:1,toast:{id:e,height:t}})},Ie=()=>{w({type:5,time:Date.now()})},Se=e=>{let{toasts:t,pausedAt:a}=we(e);c.useEffect(()=>{if(a)return;let r=Date.now(),n=t.map(o=>{if(o.duration===1/0)return;let d=(o.duration||0)+o.pauseDuration-(r-o.createdAt);if(d<0){o.visible&&m.dismiss(o.id);return}return setTimeout(()=>m.dismiss(o.id),d)});return()=>{n.forEach(o=>o&&clearTimeout(o))}},[t,a]);let s=c.useCallback(()=>{a&&w({type:6,time:Date.now()})},[a]),i=c.useCallback((r,n)=>{let{reverseOrder:o=!1,gutter:d=8,defaultPosition:l}=n||{},p=t.filter(h=>(h.position||l)===(r.position||l)&&h.height),g=p.findIndex(h=>h.id===r.id),f=p.filter((h,F)=>F<g&&h.visible).length;return p.filter(h=>h.visible).slice(...o?[f+1]:[0,f]).reduce((h,F)=>h+(F.height||0)+d,0)},[t]);return{toasts:t,handlers:{updateHeight:Ee,startPause:Ie,endPause:s,calculateOffset:i}}},$e=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Ce=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ke=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Fe=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${$e} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Ce} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ke} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Pe=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Oe=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Pe} 1s linear infinite;
`,Ae=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,De=b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Te=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ae} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${De} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Ne=v("div")`
  position: absolute;
`,Le=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Re=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ze=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Re} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Be=({toast:e})=>{let{icon:t,type:a,iconTheme:s}=e;return t!==void 0?typeof t=="string"?c.createElement(ze,null,t):t:a==="blank"?null:c.createElement(Le,null,c.createElement(Oe,{...s}),a!=="loading"&&c.createElement(Ne,null,a==="error"?c.createElement(Fe,{...s}):c.createElement(Te,{...s})))},qe=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,He=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Me="0%{opacity:0;} 100%{opacity:1;}",_e="0%{opacity:1;} 100%{opacity:0;}",Ue=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ye=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ve=(e,t)=>{let a=e.includes("top")?1:-1,[s,i]=q()?[Me,_e]:[qe(a),He(a)];return{animation:t?`${b(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ze=c.memo(({toast:e,position:t,style:a,children:s})=>{let i=e.height?Ve(e.position||t||"top-center",e.visible):{opacity:0},r=c.createElement(Be,{toast:e}),n=c.createElement(Ye,{...e.ariaProps},C(e.message,e));return c.createElement(Ue,{className:e.className,style:{...i,...a,...e.style}},typeof s=="function"?s({icon:r,message:n}):c.createElement(c.Fragment,null,r,n))});fe(c.createElement);var Ge=({id:e,className:t,style:a,onHeightUpdate:s,children:i})=>{let r=c.useCallback(n=>{if(n){let o=()=>{let d=n.getBoundingClientRect().height;s(e,d)};o(),new MutationObserver(o).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return c.createElement("div",{ref:r,className:t,style:a},i)},Je=(e,t)=>{let a=e.includes("top"),s=a?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:q()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...s,...i}},Qe=k`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,E=16,We=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:s,children:i,containerStyle:r,containerClassName:n})=>{let{toasts:o,handlers:d}=Se(a);return c.createElement("div",{style:{position:"fixed",zIndex:9999,top:E,left:E,right:E,bottom:E,pointerEvents:"none",...r},className:n,onMouseEnter:d.startPause,onMouseLeave:d.endPause},o.map(l=>{let p=l.position||t,g=d.calculateOffset(l,{reverseOrder:e,gutter:s,defaultPosition:t}),f=Je(p,g);return c.createElement(Ge,{id:l.id,key:l.id,onHeightUpdate:d.updateHeight,className:l.visible?Qe:"",style:f},l.type==="custom"?C(l.message,l):i?i(l):c.createElement(Ze,{toast:l,position:p}))}))};const Xe=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,Ke=ne().shape({email:N().matches(Xe,"Invalid email").required("Email is required"),password:N().min(6,"Password must be at least 6 characters").required("Password is required")}),ot=()=>{const e=H(),t=M(),a=_(U),s=ie({initialValues:{email:"",password:""},validationSchema:Ke,onSubmit:async r=>{var n;try{const o=await t(D(r));(o.type==="auth/login/fulfilled"||a)&&(m.success("Successful login",{autoClose:2e3}),e("/main")),o.payload&&o.payload==="Request failed with status code 500"&&m.error("Email or password is wrong")}catch(o){console.error("Login Error:",o.message),((n=o==null?void 0:o.response)==null?void 0:n.status)===401&&m.error("Invalid email or password")}}}),i=async r=>{var d;r.preventDefault();const n=r.currentTarget,o={email:n.elements.email.value,password:n.elements.password.value};try{const l=await t(D(o));(l.type==="auth/login/fulfilled"||a)&&e("/main"),l.payload&&l.payload==="Request failed with status code 500"&&m.error("Email or password is wrong")}catch(l){console.error("Login Error:",l.message),((d=l==null?void 0:l.response)==null?void 0:d.status)===401&&m.error("Invalid email or password")}};return u.jsxs(G,{children:[u.jsx(Y,{viewBox:"0 0 300 296"}),u.jsxs(J,{children:[u.jsx(V,{children:"Sign in"}),u.jsx(Q,{children:"You need to login to use the service"}),u.jsxs(W,{autoComplete:"off",onSubmit:s.handleSubmit,children:[u.jsxs("div",{style:{position:"relative"},children:[u.jsx("label",{htmlFor:"email",children:u.jsx(T,{style:{position:"relative"},type:"email",id:"email",name:"email",placeholder:"E-mail",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.email})}),s.touched.email&&s.errors.email&&u.jsx(X,{children:s.errors.email})]}),u.jsxs("div",{style:{position:"relative"},children:[u.jsx("label",{htmlFor:"password",children:u.jsx(T,{type:"password",id:"password",name:"password",placeholder:"Password",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.password})}),s.touched.password&&s.errors.password&&u.jsx(K,{style:{color:"red"},children:s.errors.password})]}),u.jsxs(ee,{children:[u.jsxs(te,{children:[u.jsx(ae,{type:"submit",onSubmit:i,children:"Sign In"}),u.jsx(re,{to:"/forgot-password",children:"Forgot your password?"})]}),u.jsxs(se,{children:[u.jsx(oe,{children:"If you don't have an account yet"}),u.jsx(Z,{to:"/signup",children:"Sign up"})]}),u.jsx(We,{position:"top-right"})]})]})]})]})};export{ot as default};
