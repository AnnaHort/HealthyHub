import{u as e,L as l,d as a,j as i,k as m,Q as r}from"./index-c49791f3.js";import{S as p,R as d,F as g,e as h}from"./SignInPages.styled-a1341c05.js";import{S as c}from"./SignUpRegister.styled-ce967f58.js";import{c as x,a as u,u as f}from"./index.esm-dbc6b671.js";const w=e.div`
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
`,y=e.h2`
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
`,v=e.p`
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
`,b=e.form`
  @media (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1440px) {
    margin-left: 0;
    margin-right: 0;
    text-align: start;
  }
`,j=e.input`
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
`,F=e.button`
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
`,P=e.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 834px) {
    flex-direction: row;
  }
`,S=e.p`
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`,k=e(l)`
  color: var(--color-primary-white);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;a.defaults.baseURL="https://healthhub-backend.onrender.com";const C=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,z=x().shape({email:u().matches(C,"Invalid email").required("Email is required")}),T=()=>{const t=f({initialValues:{email:""},validationSchema:z,onSubmit:async(n,{resetForm:s})=>{try{const o=await a.post("/api/auth/forgot-password",n);r.success(o.data.message,{autoClose:3e3}),s()}catch(o){r.error(o.response.data.message,{autoClose:2e3})}}});return i.jsxs(p,{children:[i.jsx(c,{viewBox:"0 0 300 296"}),i.jsxs(d,{children:[i.jsx(y,{children:"Forgot your password"}),i.jsx(v,{children:"We will send you an email with recovery instructions"}),i.jsxs(b,{autoComplete:"off",onSubmit:t.handleSubmit,children:[i.jsxs("div",{style:{position:"relative"},children:[i.jsx("label",{htmlFor:"email",children:i.jsx(j,{type:"email",id:"email",name:"email",placeholder:"E-mail",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.email})}),t.touched.email&&t.errors.email&&i.jsx(g,{children:t.errors.email})]}),i.jsxs(w,{children:[i.jsx(h,{children:i.jsx(F,{type:"submit",children:"Send"})}),i.jsxs(P,{children:[i.jsx(S,{children:"If you don't have an account yet"}),i.jsx(k,{to:"/signup",children:"Sign up"})]})]})]})]}),i.jsx(m,{position:"top-right"})]})};export{T as default};
