import{u as o,a as d,j as e,S as m,I as c,R as p,b as g,c as x,d as h,e as u,f as j,g as t,B as v,Q as w,h as R,L as S,i as f}from"./index-1b3f89e3.js";const b=()=>{const i=o(),n=d(),r=s=>{s.preventDefault();const l=s.currentTarget,a={name:s.target.elements.name.value,email:s.target.elements.email.value,password:s.target.elements.password.value};console.log(a),a.name!==""&&a.email!==""&&a.password!==""?(n(f(a)),l.reset(),i("/signin")):alert("please fill in all input fields")};return e.jsxs(m,{children:[e.jsx(c,{src:p,srcSet:`${g} 834w, ${x} 1440w`,sizes:"(max-width: 833px) 100vw, (min-width: 834px) 50vw",alt:"Responsive Image"}),e.jsxs("div",{children:[e.jsx(h,{children:"Sign up"}),e.jsx(u,{children:"You need to register to use the service"}),e.jsxs(j,{autoComplete:"off",onSubmit:r,children:[e.jsx("label",{htmlFor:"name",children:e.jsx(t,{type:"text",id:"name",name:"name",placeholder:"Name"})}),e.jsx("label",{htmlFor:"email",children:e.jsx(t,{type:"email",id:"email",name:"email",placeholder:"E-mail"})}),e.jsx("label",{htmlFor:"password",children:e.jsx(t,{type:"password",id:"password",name:"password",placeholder:"Password"})}),e.jsx(v,{type:"submit",children:"Next"}),e.jsxs(w,{children:[e.jsx(R,{children:"Do you already have an account?"}),e.jsx(S,{to:"/signin",children:"Sign in"})]})]})]})]})},y=()=>e.jsx("div",{children:e.jsx(b,{})}),D=()=>e.jsx("div",{children:e.jsx(y,{})});export{D as default};
