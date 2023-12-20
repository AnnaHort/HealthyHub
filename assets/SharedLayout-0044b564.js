import{s as e,N as t,j as i,u as s,a,r as d,O as l}from"./index-ff3b6ca2.js";const p=e(t)`
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
`,o=()=>i.jsx(p,{to:"/welcome",children:"HealthyHub"}),c=e.svg`
  width: 26px;
  height: 26px;
  @media (min-width: 834px) {
    width: 28px;
    height: 28px;
  }
`,x=()=>i.jsxs(c,{id:"icon-profile-circle",viewBox:"0 0 32 32",children:[i.jsx("path",{fill:"none",stroke:"#fff",style:{stroke:"var(--color1, #fff)"},strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.8462",d:"M16.16 17.040c-0.093-0.013-0.213-0.013-0.32 0-2.347-0.080-4.213-2-4.213-4.36 0-2.413 1.947-4.373 4.373-4.373 2.413 0 4.373 1.96 4.373 4.373-0.013 2.36-1.867 4.28-4.213 4.36z"}),i.jsx("path",{fill:"none",stroke:"#fff",style:{stroke:"var(--color1, #fff)"},strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.8462",d:"M24.987 25.84c-2.373 2.173-5.52 3.493-8.987 3.493s-6.613-1.32-8.987-3.493c0.133-1.253 0.933-2.48 2.36-3.44 3.653-2.427 9.627-2.427 13.253 0 1.427 0.96 2.227 2.187 2.36 3.44z"}),i.jsx("path",{fill:"none",stroke:"#fff",style:{stroke:"var(--color1, #fff)"},strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.8462",d:"M16 29.333c7.364 0 13.333-5.969 13.333-13.333s-5.97-13.333-13.333-13.333c-7.364 0-13.333 5.97-13.333 13.333s5.97 13.333 13.333 13.333z"})]}),h=e.nav`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 6px;
`,n=e(t)`
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
`,g=e.span`
  color: var(--color-primary-white);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  @media (min-width: 834px) {
    font-size: 14px;
    line-height: 1.43;
  }
`,m=()=>i.jsxs(h,{children:[i.jsx(n,{to:"/signin",children:"Sign in"}),i.jsx(g,{children:" / "}),i.jsx(n,{to:"/signup",children:"Sign up"}),i.jsx(x,{})]}),f=()=>i.jsxs(i.Fragment,{children:[i.jsx(o,{}),i.jsx(m,{})]}),y=e.div`
  display: flex;
  justify-content: space-between;
  padding: 19px 10px;
  align-items: center;

  width: 320px;
  margin: 0 auto;


 @media (min-width: 834px) {
  width: 834px;

  padding: 36px 27px;
 }


 @media (min-width: 1440px) {
  width: 1440px;

  padding: 34px 34px;
 }
`,j=e.div`
  background-color: var(--color-primary-black-2);
`,w=e.div`
  display: flex;
  gap: 12px;
`,u=e.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #5f5e5c;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`,v=e.img`
  width: 28px;
  height: 28px;
`,b=e.h3`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  margin-bottom: 2px;
`,k=e.div`
  padding-top: 3px;
  padding-bottom: 3px;
`,S=e.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  display: flex;
  align-items: center;
`,I=e.button`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 14px;
  height: 14px; */
  margin-left: 7px;
  border: none;
  background: none;
`;e.img`
  display: none;

  @media (min-width: 834px) {
    display: block;
  }
`;e.img`
  @media (min-width: 834px) {
    display: none;
  }
`;const z=e.svg`
  display: none;
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
  @media (min-width: 834px) {
    display: block;
  }
`,L=e.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
  @media (min-width: 834px) {
    display: none;
  }
`,C=()=>i.jsxs(w,{children:[i.jsx(u,{children:i.jsx(v,{src:"../../Emoji/LoseFatMen.svg",alt:"Arrow right"})}),i.jsxs(k,{children:[i.jsx(b,{children:"Goal"}),i.jsxs(S,{children:["Lose fat",i.jsxs(I,{children:[i.jsx(z,{children:i.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-arrow-down"})}),i.jsx(L,{children:i.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-arrow-right-2"})})]})]})]})]}),$=e.div`
  display: flex;
  gap: 12px;
`,P=e.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #5f5e5c;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`,B=e.img`
  width: 28px;
  height: 28px;
`,M=e.h3`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  margin-bottom: 2px;
`,U=e.div`
  padding-top: 3px;
  padding-bottom: 3px;
`,W=e.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  display: flex;
  align-items: center;
`;e.span`
  color: var(--color-primary-grey);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;const A=e.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  margin-left: 7px;
`,H=e.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
`,N=()=>i.jsxs($,{children:[i.jsx(P,{children:i.jsx(B,{src:"../../Emoji/WaightImage.svg",alt:"Waiting image"})}),i.jsxs(U,{children:[i.jsx(M,{children:"Weight"}),i.jsxs(W,{children:["48 ",i.jsx("span",{children:"kg"}),i.jsx(A,{children:i.jsx(H,{children:i.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-edit-2"})})})]})]})]}),E=e.div`
  width: 130px;
  height: 28px;
  display: flex;
  align-items: center;
`,T=e.p`
  width: 78px;
  color: var(--color-primary-white);
  text-align: right;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  margin-right: 6px;
`,D=e.div`
  width: 28px;
  height: 28px;
  border-radius: 28px;
  background: lightgray 50%;
`,F=e.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
`;e.img`
  display: block;

  @media (min-width: 834px) {
    display: block;
  }
`;const G=e.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
`,O=()=>i.jsxs(E,{children:[i.jsx(T,{children:"Konstantin"}),i.jsx(D,{children:i.jsx("img",{src:"../../components/UserInfoNav/Avatar.svg",alt:"Avatar"})}),i.jsx(F,{children:i.jsx(G,{children:i.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-arrow-down"})})})]}),R=e.div`
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
`,K=e.div`
  margin-left: auto;
  @media (min-width: 834px) {
    margin-left: 73px;
  }

  @media (min-width: 1280px) {
    margin-left: 124px;
  }
`,q=e.div``,J=e.button`
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
`,Q=e.div`
  display: none;

  @media (min-width: 834px) {
    display: flex;
    gap: 40px;
    margin-left: auto;
  }

  @media (min-width: 1280px) {
    gap: 80px;
  }
`,V=e.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);

  @media (min-width: 834px) {
    display: none;
  }
`,X=()=>i.jsxs(R,{children:[i.jsx(q,{children:i.jsx(o,{})}),i.jsx(J,{children:i.jsx(V,{children:i.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-menu"})})}),i.jsxs(Q,{children:[i.jsx(C,{}),i.jsx(N,{})]}),i.jsx(K,{children:i.jsx(O,{})})]}),Y=e.div`

  width: 320px;
  padding-left: 10px;
  padding-right: 10px;

  margin: 0 auto;

  @media screen and (min-width: 834px) {
    width: 834px;
    padding-left: 27px;
    padding-right: 27px;
}

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 34px;
    padding-right: 34px;
  }
`,_=()=>{const r=s(a);return i.jsxs(i.Fragment,{children:[i.jsx(j,{children:i.jsx(y,{children:r?i.jsx(X,{}):i.jsx(f,{})})}),i.jsx(Y,{children:i.jsx(d.Suspense,{fallback:i.jsx("div",{children:"Loading..."}),children:i.jsx(l,{})})})]})};export{_ as default};
