import{u as d,a as m,j as e,S as c,I as p,R as g,b as x,c as h,d as u,e as j,f as v,g as t,h as i,B as w,Q as R,i as S,L as f,k as b}from"./index-945bc30b.js";const I=()=>{const n=d(),r=m(),l=s=>{s.preventDefault();const o=s.currentTarget,a={name:s.target.elements.name.value,email:s.target.elements.email.value,password:s.target.elements.password.value};console.log(a),a.name!==""&&a.email!==""&&a.password!==""?(r(b(a)),o.reset(),n("/signin")):alert("please fill in all input fields")};return e.jsxs(c,{children:[e.jsx(p,{src:g,srcSet:`${x} 834w, ${h} 1440w`,sizes:"(max-width: 833px) 100vw, (min-width: 834px) 50vw",alt:"Responsive Image"}),e.jsxs("div",{children:[e.jsx(u,{children:"Sign up"}),e.jsx(j,{children:"You need to register to use the service"}),e.jsxs(v,{autoComplete:"off",onSubmit:l,children:[e.jsx("label",{htmlFor:"name",children:e.jsx(t,{children:e.jsx(i,{type:"text",id:"name",name:"name",placeholder:"Name"})})}),e.jsx("label",{htmlFor:"email",children:e.jsx(t,{children:e.jsx(i,{type:"email",id:"email",name:"email",placeholder:"E-mail"})})}),e.jsx("label",{htmlFor:"password",children:e.jsx(t,{children:e.jsx(i,{type:"password",id:"password",name:"password",placeholder:"Password"})})}),e.jsx(w,{type:"submit",children:"Next"}),e.jsxs(R,{children:[e.jsx(S,{children:"Do you already have an account?"}),e.jsx(f,{to:"/signin",children:"Sign in"})]})]})]})]})},y=()=>e.jsx("div",{children:e.jsx(I,{})}),F=()=>e.jsx("div",{children:e.jsx(y,{})});export{F as default};
