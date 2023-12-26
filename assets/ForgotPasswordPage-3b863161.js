import{u as t,L as l,d as a,j as i}from"./index-0ae709f2.js";import{S as m,R as p,F as d,e as g}from"./SignInPages.styled-dfe0b924.js";import{S as h}from"./SignUpRegister.styled-dcad675d.js";import{c,a as x}from"./index.esm-239069da.js";import{u}from"./formik.esm-c23c3043.js";import{k as f,Q as r}from"./react-toastify.esm-48fe208c.js";const w=t.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  @media (min-width: 834px) {
    margin-right: auto;
    margin-left: auto;
    width: 380px;
    gap: 286px;
  }
  @media (min-width: 1440px) {
      margin-right: 0;
      margin-left: 0;
    }
`,y=t.h2`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;
  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 16px;
    @media (min-width: 1440px) {
      text-align: start;
    }
  }
`,v=t.p`
  color: var(--color-primary-grey);
  font-family: Poppins;
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 24px;
  @media (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
  @media (min-width: 1440px) {
      text-align: start;
    }
`,b=t.form`
  @media (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1440px) {
    margin-left: 0;
    margin-right: 0;
    text-align: start;
  }
`,j=t.input`
  color: var(--color-primary-grey);
  font-family: Poppins;
  line-height: 1.429;
  outline: none;
  padding: 8px 10px;
  width: 100%;
  background: transparent;
  position: relative;
  border: 1px solid var(--color-primary-green-lite);
  border-radius: 12px;
  max-width: 380px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;

  :hover {
    color: var(--color-primary-white);
  }
  @media (min-width: 1440px) {
    display: block;
    max-width: 212px;
    margin-left: 0;
    margin-right: 0;
  }
`,F=t.button`
  border-radius: 12px;
  border: none;
  outline: none;
  background: var(--color-primary-green-lite);
  padding: 8px 10px;
  margin-top: 20px;
  color: var(--bg-primary);
  text-align: center;
  font-weight: 500;
  line-height: 1.43;
  width: 100%;
`,P=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 834px) {
    flex-direction: row;
  }
`,S=t.p`
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`,k=t(l)`
  color: var(--color-primary-white);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;a.defaults.baseURL="https://healthhub-backend.onrender.com";const C=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,z=c().shape({email:x().matches(C,"Invalid email").required("Email is required")}),$=()=>{const e=u({initialValues:{email:""},validationSchema:z,onSubmit:async(n,{resetForm:s})=>{try{const o=await a.post("/api/auth/forgot-password",n);r.success(o.data.message,{autoClose:3e3}),s()}catch(o){r.error(o.response.data.message,{autoClose:2e3})}}});return i.jsxs(m,{children:[i.jsx(h,{viewBox:"0 0 300 296"}),i.jsxs(p,{children:[i.jsx(y,{children:"Forgot your password"}),i.jsx(v,{children:"We will send you an email with recovery instructions"}),i.jsxs(b,{autoComplete:"off",onSubmit:e.handleSubmit,children:[i.jsxs("div",{style:{position:"relative"},children:[i.jsx("label",{htmlFor:"email",children:i.jsx(j,{type:"email",id:"email",name:"email",placeholder:"E-mail",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.email})}),e.touched.email&&e.errors.email&&i.jsx(d,{children:e.errors.email})]}),i.jsxs(w,{children:[i.jsx(g,{children:i.jsx(F,{type:"submit",children:"Send"})}),i.jsxs(P,{children:[i.jsx(S,{children:"If you don't have an account yet"}),i.jsx(k,{to:"/signup",children:"Sign up"})]})]})]})]}),i.jsx(f,{position:"top-right"})]})};export{$ as default};
