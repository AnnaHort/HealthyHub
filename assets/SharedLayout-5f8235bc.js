import{s as i,N as t,j as e,u as s,a as l,r as a,O as d}from"./index-ef5783ca.js";const c=i(t)`
  color: var(--color-primary-grey);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;
  &.active {
    color: var(--color-primary-green-lite);
  }

  @media (min-width: 834px) {
    font-size: 22px;
    line-height: 1.46%;
  }
`,o=()=>e.jsx(c,{to:"/welcome",children:"HealthyHub"}),p=i.svg`
  width: 26px;
  height: 26px;
  @media (min-width: 834px) {
    width: 28px;
    height: 28px;
  }
`,x=()=>e.jsxs(p,{id:"icon-profile-circle",viewBox:"0 0 32 32",children:[e.jsx("path",{fill:"none",stroke:"#fff",style:{stroke:"var(--color1, #fff)"},strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.8462",d:"M16.16 17.040c-0.093-0.013-0.213-0.013-0.32 0-2.347-0.080-4.213-2-4.213-4.36 0-2.413 1.947-4.373 4.373-4.373 2.413 0 4.373 1.96 4.373 4.373-0.013 2.36-1.867 4.28-4.213 4.36z"}),e.jsx("path",{fill:"none",stroke:"#fff",style:{stroke:"var(--color1, #fff)"},strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.8462",d:"M24.987 25.84c-2.373 2.173-5.52 3.493-8.987 3.493s-6.613-1.32-8.987-3.493c0.133-1.253 0.933-2.48 2.36-3.44 3.653-2.427 9.627-2.427 13.253 0 1.427 0.96 2.227 2.187 2.36 3.44z"}),e.jsx("path",{fill:"none",stroke:"#fff",style:{stroke:"var(--color1, #fff)"},strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.8462",d:"M16 29.333c7.364 0 13.333-5.969 13.333-13.333s-5.97-13.333-13.333-13.333c-7.364 0-13.333 5.97-13.333 13.333s5.97 13.333 13.333 13.333z"})]}),h=i.nav`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 6px;
`,n=i(t)`
  color: var(--color-primary-white);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  &.active {
    color: var(--color-primary-green-lite);
  }
  @media (min-width: 834px) {
    font-size: 14px;
    line-height: 1.43;
  }
`,g=i.span`
  color: var(--color-primary-white);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  @media (min-width: 834px) {
    font-size: 14px;
    line-height: 1.43;
  }
`,m=()=>e.jsxs(h,{children:[e.jsx(n,{to:"/signin",children:"Sign in"}),e.jsx(g,{children:" / "}),e.jsx(n,{to:"/signup",children:"Sign up"}),e.jsx(x,{})]}),f=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{}),e.jsx(m,{})]}),y=i.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-primary-black-2);
  padding: 19px 10px;
  align-items: center;


 @media (min-width: 834px) {
  padding: 36px 27px;
 }


 @media (min-width: 1024px) {
  padding: 34px 34px;
 }
`,j=i.div`
  display: flex;
  gap: 12px;
`,u=i.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #5f5e5c;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`,w=i.img`
  width: 28px;
  height: 28px;
`,v=i.h3`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  margin-bottom: 2px;
`,b=i.div`
  padding-top: 3px;
  padding-bottom: 3px;
`,k=i.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  display: flex;
  align-items: center;
`,S=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 14px;
  height: 14px; */
  margin-left: 7px;
  border: none;
  background: none;
`;i.img`
  display: none;

  @media (min-width: 834px) {
    display: block;
  }
`;i.img`
  @media (min-width: 834px) {
    display: none;
  }
`;const I=i.svg`
  display: none;
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
  @media (min-width: 834px) {
    display: block;
  }
`,z=i.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
  @media (min-width: 834px) {
    display: none;
  }
`,L=()=>e.jsxs(j,{children:[e.jsx(u,{children:e.jsx(w,{src:"/src/Emoji/LoseFatMen.svg",alt:"Arrow right"})}),e.jsxs(b,{children:[e.jsx(v,{children:"Goal"}),e.jsxs(k,{children:["Lose fat",e.jsxs(S,{children:[e.jsx(I,{children:e.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-arrow-down"})}),e.jsx(z,{children:e.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-arrow-right-2"})})]})]})]})]}),C=i.div`
  display: flex;
  gap: 12px;
`,$=i.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #5f5e5c;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`,P=i.img`
  width: 28px;
  height: 28px;
`,B=i.h3`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  margin-bottom: 2px;
`,M=i.div`
  padding-top: 3px;
  padding-bottom: 3px;
`,U=i.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  display: flex;
  align-items: center;
`;i.span`
  color: var(--color-primary-grey);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;const W=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  margin-left: 7px;
`,A=i.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
`,N=()=>e.jsxs(C,{children:[e.jsx($,{children:e.jsx(P,{src:"/src/Emoji/WaightImage.svg",alt:"Waiting image"})}),e.jsxs(M,{children:[e.jsx(B,{children:"Weight"}),e.jsxs(U,{children:["48 ",e.jsx("span",{children:"kg"}),e.jsx(W,{children:e.jsx(A,{children:e.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-edit-2"})})})]})]})]}),H=i.div`
  width: 130px;
  height: 28px;
  display: flex;
  align-items: center;
`,E=i.p`
  width: 78px;
  color: var(--color-primary-white);
  text-align: right;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  margin-right: 6px;
`,T=i.div`
  width: 28px;
  height: 28px;
  border-radius: 28px;
  background: lightgray 50%;
`,D=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
`;i.img`
  display: block;

  @media (min-width: 834px) {
    display: block;
  }
`;const F=i.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
`,G=()=>e.jsxs(H,{children:[e.jsx(E,{children:"Konstantin"}),e.jsx(T,{children:e.jsx("img",{src:"/src/components/UserInfoNav/Avatar.svg",alt:"Avatar"})}),e.jsx(D,{children:e.jsx(F,{children:e.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-arrow-down"})})})]}),O=i.div`
  height: 60px;
  background: var(--color-primary-black-2);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px 0 10px;

  @media (min-width: 834px) {
    height: 100px;
    padding: 0 27px 0 27px;
  }

  @media (min-width: 1280px) {
    padding: 0 36px 0 34px;
  }
`,R=i.div`
  margin-left: auto;
  @media (min-width: 834px) {
    margin-left: 73px;
  }

  @media (min-width: 1280px) {
    margin-left: 124px;
  }
`,K=i.div``,q=i.button`
  background: none;
  border: none;
  padding: 0;
  margin-left: 8px;

  @media (min-width: 834px) {
    display: flex;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-left: 8px;
  }
`,J=i.div`
  display: none;

  @media (min-width: 834px) {
    display: flex;
    gap: 40px;
    margin-left: auto;
  }

  @media (min-width: 1280px) {
    gap: 80px;
  }
`,Q=i.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);

  @media (min-width: 834px) {
    display: none;
  }
`,V=()=>e.jsxs(O,{children:[e.jsx(K,{children:e.jsx(o,{})}),e.jsx(q,{children:e.jsx(Q,{children:e.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-menu"})})}),e.jsxs(J,{children:[e.jsx(L,{}),e.jsx(N,{})]}),e.jsx(R,{children:e.jsx(G,{})})]}),Y=()=>{const r=s(l);return e.jsxs("div",{children:[e.jsx("header",{children:e.jsx(y,{children:r?e.jsx(V,{}):e.jsx(f,{})})}),e.jsx(a.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(d,{})})]})};export{Y as default};
