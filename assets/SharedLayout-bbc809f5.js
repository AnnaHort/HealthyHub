import{N as r,j as e,r as n,O as o}from"./index-373a52db.js";import{s as t}from"./styled-components.browser.esm-91222cf9.js";const s=t(r)`
  color: var(--color-primary-grey);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;
  &.active {
    color: var(--color-primary-green-lite);
  }

  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 1.46%;
  }
`,l=()=>e.jsx(s,{to:"/welcome",children:"HealthyHub"}),a=t.svg`
  width: 26px;
  height: 26px;
  @media (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`,c=()=>e.jsxs(a,{id:"icon-profile-circle",viewBox:"0 0 32 32",children:[e.jsx("path",{fill:"none",stroke:"#fff",style:{stroke:"var(--color1, #fff)"},strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.8462",d:"M16.16 17.040c-0.093-0.013-0.213-0.013-0.32 0-2.347-0.080-4.213-2-4.213-4.36 0-2.413 1.947-4.373 4.373-4.373 2.413 0 4.373 1.96 4.373 4.373-0.013 2.36-1.867 4.28-4.213 4.36z"}),e.jsx("path",{fill:"none",stroke:"#fff",style:{stroke:"var(--color1, #fff)"},strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.8462",d:"M24.987 25.84c-2.373 2.173-5.52 3.493-8.987 3.493s-6.613-1.32-8.987-3.493c0.133-1.253 0.933-2.48 2.36-3.44 3.653-2.427 9.627-2.427 13.253 0 1.427 0.96 2.227 2.187 2.36 3.44z"}),e.jsx("path",{fill:"none",stroke:"#fff",style:{stroke:"var(--color1, #fff)"},strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.8462",d:"M16 29.333c7.364 0 13.333-5.969 13.333-13.333s-5.97-13.333-13.333-13.333c-7.364 0-13.333 5.97-13.333 13.333s5.97 13.333 13.333 13.333z"})]}),d=t.nav`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 6px;
`,i=t(r)`
  color: var(--color-primary-white);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  &.active {
    color: var(--color-primary-green-lite);
  }
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.43;
  }
`,p=t.span`
  color: var(--color-primary-white);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.43;
  }
`,h=()=>e.jsxs(d,{children:[e.jsx(i,{to:"/signin",children:"Sign in"}),e.jsx(p,{children:" / "}),e.jsx(i,{to:"/signup",children:"Sign up"}),e.jsx(c,{})]}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{}),e.jsx(h,{})]}),f=t.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-primary-black-2);
  padding: 19px 10px;
  align-items: center;


 @media (min-width: 768px) {
  padding: 36px 27px;
 }


 @media (min-width: 1024px) {
  padding: 34px 34px;
 }
`,j=()=>e.jsxs(e.Fragment,{children:[e.jsx("header",{children:e.jsx(f,{children:e.jsx(x,{})})}),e.jsx(n.Suspense,{children:e.jsx(o,{})})]});export{j as default};
