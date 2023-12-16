import{s as t,j as i}from"./index-54b807a4.js";const r=t.div`
  background-color: var(--color-primary-black);
  width: 320px;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 40px;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 834px) {
    width: 492px;
    padding-top: 40px;
    padding-bottom: 60px;
    padding-left: 24px;
    padding-right: 24px;
    text-align: center;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 104px;
    text-align: start;
  }
`,o=t.img`
  width: 300px;
  height: 296px;
  margin-bottom: 24px;
  @media (min-width: 834px) {
    width: 380px;
    height: 376px;
    margin-bottom: 60px;
  }
  @media (min-width: 1440px) {
    width: 592px;
    height: 588px;
    margin-bottom: 0;
  }
`,a=t.h2`
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
      text-align: left;
    }
  }
`,p=t.p`
  color: var(--color-primary-grey);
  font-family: Poppins;
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 24px;
  @media (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`,m=t.form`
  @media (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1440px) {
    margin-left: 0;
    margin-right: 0;
  }
`,e=t.div`
  background: transparent;
  position: relative;
  border: 1px solid var(--color-primary-green-lite);
  border-radius: 12px;
  width: 100%;
  max-width: 380px;
  margin-bottom: 20px;
  margin-left:auto;
  margin-right:auto;

  @media (min-width: 1440px) {
    max-width: 212px;
    margin-left:0;
  margin-right:0;
  }
`,n=t.input`
  color: var(--color-primary-grey);
  font-family: Poppins;
  line-height: 1.429;
  background: transparent;
  border-color: transparent;
  outline: none;
  padding: 8px 10px;
  width: 100%;
  :hover {
    color: var(--color-primary-white);
  }
  @media (min-width: 1440px) {
    width: 50%;
  }
`,s=t.button`
  border-radius: 12px;
  border: none;
  outline: none;
  background: var(--color-primary-green-lite);
  padding: 8px 10px;
  margin-bottom: 48px;
  margin-top: 20px;
  color: var(--bg-primary);
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  line-height: 1.43;
  width: 100%;
  @media (min-width: 834px) {
    max-width: 380px;
    margin-bottom: 238px;
    margin-bottom: 206px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 168px;
    width: 50%;
  }
`,d=t.div`
  @media (min-width: 834px) {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1440px) {
    align-items: flex-start;
  }
`,l=t.p`
  color: var(--color-primary-grey);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 16px;
  @media (min-width: 834px) {
    margin-right: 16px;
    margin-bottom: 0px;
  }
`,x=t.a`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.43;
`,g="/HealthyHub/assets/register-img-mobile-f8335d44.png",h="/HealthyHub/assets/register-img-tablet-21d4dec3.png",c="/HealthyHub/assets/register-img-desktop-c76fe179.png",w=()=>i.jsxs(r,{children:[i.jsx(o,{src:g,srcSet:`${h} 834w, ${c} 1440w`,sizes:"(max-width: 833px) 100vw, (min-width: 834px) 50vw",alt:"Responsive Image"}),i.jsxs("div",{children:[i.jsx(a,{children:"Sign up"}),i.jsx(p,{children:"You need to register to use the service"}),i.jsxs(m,{autoComplete:"off",children:[i.jsx("label",{htmlFor:"name",children:i.jsx(e,{children:i.jsx(n,{type:"text",id:"name",name:"name",placeholder:"Name"})})}),i.jsx("label",{htmlFor:"email",children:i.jsx(e,{children:i.jsx(n,{type:"email",id:"email",name:"email",placeholder:"E-mail"})})}),i.jsx("label",{htmlFor:"password",children:i.jsx(e,{children:i.jsx(n,{type:"password",id:"password",name:"password",placeholder:"Password"})})}),i.jsx(s,{type:"submit",children:"Next"}),i.jsxs(d,{children:[i.jsx(l,{children:"Do you already have an account?"}),i.jsx(x,{to:"/signin",children:"Sign in"})]})]})]})]}),f=()=>i.jsx("div",{children:i.jsx(w,{})}),u=()=>i.jsx("div",{children:i.jsx(f,{})});export{u as default};
