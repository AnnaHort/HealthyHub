import{s as i,N as c,j as e,r as o,u as A,a as h,O as m}from"./index-bc49931b.js";const f=i(c)`
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
`,w=()=>e.jsx(f,{to:"/welcome",children:"HealthyHub"}),y=i.svg`
  width: 26px;
  height: 26px;
  @media (min-width: 834px) {
    width: 28px;
    height: 28px;
  }
`,v=()=>e.jsxs(y,{id:"icon-profile-circle",viewBox:"0 0 32 32",children:[e.jsx("path",{fill:"none",stroke:"#fff",style:{stroke:"var(--color1, #fff)"},strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.8462",d:"M16.16 17.040c-0.093-0.013-0.213-0.013-0.32 0-2.347-0.080-4.213-2-4.213-4.36 0-2.413 1.947-4.373 4.373-4.373 2.413 0 4.373 1.96 4.373 4.373-0.013 2.36-1.867 4.28-4.213 4.36z"}),e.jsx("path",{fill:"none",stroke:"#fff",style:{stroke:"var(--color1, #fff)"},strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.8462",d:"M24.987 25.84c-2.373 2.173-5.52 3.493-8.987 3.493s-6.613-1.32-8.987-3.493c0.133-1.253 0.933-2.48 2.36-3.44 3.653-2.427 9.627-2.427 13.253 0 1.427 0.96 2.227 2.187 2.36 3.44z"}),e.jsx("path",{fill:"none",stroke:"#fff",style:{stroke:"var(--color1, #fff)"},strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.8462",d:"M16 29.333c7.364 0 13.333-5.969 13.333-13.333s-5.97-13.333-13.333-13.333c-7.364 0-13.333 5.97-13.333 13.333s5.97 13.333 13.333 13.333z"})]}),j=i.nav`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 6px;
`,d=i(c)`
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
`,u=i.span`
  color: var(--color-primary-white);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  @media (min-width: 834px) {
    font-size: 14px;
    line-height: 1.43;
  }
`,B=()=>e.jsxs(j,{children:[e.jsx(d,{to:"/signin",children:"Sign in"}),e.jsx(u,{children:" / "}),e.jsx(d,{to:"/signup",children:"Sign up"}),e.jsx(v,{})]}),C=i.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 0 10px 0 10px;
  margin: 0 auto;

  @media (min-width: 834px) {
    height: 100px;
    padding: 0 27px 0 27px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 36px 0 34px;
  }
`;i.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (min-width: 834px) {
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;const b=()=>e.jsxs(C,{children:[e.jsx(w,{}),e.jsx(B,{})]}),P=i.div`
  display: flex;
  gap: 12px;
`,D=i.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #5f5e5c;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;i.img`
  width: 28px;
  height: 28px;
`;const M=i.h3`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  margin-bottom: 2px;
`,I=i.div`
  padding-top: 3px;
  padding-bottom: 3px;
`,z=i.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  display: flex;
  align-items: center;
`,k=i.button`
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
`;const Y=i.svg`
  display: none;
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
  @media (min-width: 834px) {
    display: block;
  }
`,Q=i.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
  @media (min-width: 834px) {
    display: none;
  }
`,G=i.div`
  position: absolute;
  z-index: 1;
  padding-top: 74px; //реголює висоту модалки
`,N=i.div`
  padding: 24px 10px 40px 10px;

  @media (min-width: 834px) {
    max-width: 392px;
    mah-height: 352px;
    flex-shrink: 0;
    padding: 20px 32px 40px 24px;
    border-radius: 12px;
    background: var(--Color-Primary-Black-2, #0f0f0f);
    box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
  }
`,E=i.div`
  display: flex;
  justify-content: flex-end;
`,X=i.h3`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding-bottom: 16px;
  margin: 0;

  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
    margin: 0 auto;
  }

  @media (min-width: 1440px) {
    margin: 0;
  }
`,U=i.p`
  color: var(--color-primary-grey);
  padding-bottom: 24px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  width: 284px;

  @media (min-width: 834px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) {
    text-align: start;
  }
`,L=i.form`
  display: flex;
  flex-direction: column;
  width: 300px;

  @media (min-width: 834px) {
    width: 166px;
  }

  @media (min-width: 1440px) {
    display: flex;
    align-items: flex-start;
  }
`,F=i.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;
  margin-bottom: 26px;

  @media (min-width: 834px) {
    width: 380px;
    justify-content: center;
  }

  @media (min-width: 1440px) {
    display: flex;
    width: 192px;
    flex-direction: column;
  }
`,a=i.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  opacity: 0;
`,l=i.li`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (min-width: 834px) {
    gap: 10px;
  }

  @media (min-width: 1440px) {
    gap: 10px;
  }
`,p=i.label`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  display: flex;
  gap: 32px; //відстань між svg і текстом

  position: relative;
  cursor: pointer;

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 0;
    width: 40px;
    height: 40px;
    border: 1px solid #b6b6b6;
    background: transparent;
    border-radius: 12px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    background: transparent;
    border: 1px solid #b6c3ff;
    border-radius: 12px;
    opacity: 0;
    transition: 0.2s ease-in;
  }

  @media (min-width: 834px) {
    &::after {
      left: 10px;
    }
  }

  @media (min-width: 1440px) {
    &::after {
      left: 10px;
    }
  }

  input[type='radio']:checked + &::after {
    opacity: 1;
  }

  input[type='radio'] + &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
  }

  @media (min-width: 834px) {
    input[type='radio'] + &::before {
      left: 10px; //***
    }
  }

  @media (min-width: 1440px) {
    input[type='radio'] + &::before {
      left: 10px;
    }
  }

  input[type='radio']:checked + & {
    color: #b6c3ff; /* Change this to your desired text color */
  }

  img {
    width: 20px; /* Set the width of your SVG */
    height: 20px; /* Set the height of your SVG */
  }
`,W=i.button`
  width: 300px;
  height: 36px;
  color: var(--color-primary-black-2);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  border-radius: 12px;
  background: var(--color-primary-green-lite);
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: none;
  margin-bottom: 20px;

  @media (min-width: 834px) {
    width: 166px;
    margin-bottom: 0px;
  }

  @media (min-width: 1440px) {
  }
`,T=i.button`
  width: 300px;
  margin: 0;
  color: var(--color-primary-grey);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  display: block;

  @media (min-width: 834px) {
    display: none;
  }
`;i.img`
  width: 16px;
  height: 16px;

  &:hover,
  &:focus {
  }
`;const H=i.button`
  display: none;

  @media (min-width: 834px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
  }
`,S=i.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-grey);
  margin-right: 8px;
`,O=({onCloseButtonClick:n})=>e.jsxs(N,{children:[e.jsx(E,{children:e.jsx(H,{onClick:n,children:e.jsx(S,{children:e.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-close-circle"})})})}),e.jsx(X,{children:"Target selection"}),e.jsx(U,{children:"The service will adjust your calorie intake to your goal"}),e.jsx(L,{children:e.jsxs(F,{children:[e.jsxs(l,{children:[e.jsx(a,{type:"radio",id:"loseFat",name:"goal",value:"Lose Fat"}),e.jsxs(p,{htmlFor:"loseFat",children:[e.jsx("img",{src:"/src/Emoji/LoseFatMen.svg",alt:"Lose Fat"}),"Lose Fat"]})]}),e.jsxs(l,{children:[e.jsx(a,{type:"radio",id:"maintain",name:"goal",value:"Maintain"}),e.jsxs(p,{htmlFor:"maintain",children:[e.jsx("img",{src:"/src/Emoji/MaintakeMen.svg",alt:"Lose Fat"}),"Maintain"]})]}),e.jsxs(l,{children:[e.jsx(a,{type:"radio",id:"gainMuscle",name:"goal",value:"Gain Muscle"}),e.jsxs(p,{htmlFor:"gainMuscle",children:[e.jsx("img",{src:"/src/Emoji/GainMuscle.svg",alt:"Lose Fat"}),"Gain Muscle"]})]})]})}),e.jsx(W,{children:"Submit"}),e.jsx(T,{children:"Back"})]}),K=n=>o.createElement("svg",{width:28,height:28,viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...n},o.createElement("rect",{width:28,height:28,fill:"url(#pattern0)"}),o.createElement("defs",null,o.createElement("pattern",{id:"pattern0",patternContentUnits:"objectBoundingBox",width:1,height:1},o.createElement("use",{xlinkHref:"#image0_35_1308",transform:"scale(0.00625)"})),o.createElement("image",{id:"image0_35_1308",width:160,height:160,xlinkHref:"data:image/png;base64,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"}))),x=()=>{const[n,t]=o.useState(!1),r=()=>{t(!0)},s=()=>{t(!1)};return e.jsxs(P,{children:[e.jsx(D,{children:e.jsx(K,{})}),e.jsxs(I,{children:[e.jsx(M,{children:"Goal"}),e.jsxs(z,{children:["Lose fat",e.jsxs(k,{children:[e.jsx(Y,{onClick:r,children:e.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-arrow-down"})}),e.jsx(Q,{onClick:r,children:e.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-arrow-right-2"})})]})]})]}),n&&e.jsx(G,{children:e.jsx(O,{onCloseButtonClick:s})})]})},R=i.div`
  display: flex;
  gap: 12px;
`,J=i.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #5f5e5c;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;i.img`
  width: 28px;
  height: 28px;
`;const Z=i.h3`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  margin-bottom: 2px;
`,q=i.div`
  padding-top: 3px;
  padding-bottom: 3px;
`,V=i.p`
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
`;const $=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  margin-left: 7px;
`,_=i.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
`,ee=i.div`
  position: absolute;
  z-index: 1;
  padding-top: 74px; //реголює висоту модалки
  padding-right: 157px;
  right: 0;

  @media (min-width: 1280px) {
    padding-right: 258px;
  }
`,ie=i.div`
  padding: 24px 10px 40px 10px;

  @media (min-width: 834px) {
    width: 392px;
    height: 200px;
    border-radius: 12px;
    background: var(--color-primary-black-2);
    box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
    padding: 20px 24px 40px 24px;
  }
`,ne=i.h3`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  margin-bottom: 8px;
  margin-right: 80px;
`,te=i.p`
  color: var(--color-primary-grey);
  /* Body text/1 */
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  margin-bottom: 16px;
`,oe=i.p`
  display: flex;
  gap: 6px;
  width: 44px;
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  margin-bottom: 20px;

  @media (min-width: 834px) {
    margin-bottom: 16px;
  }
`,re=i.span`
  width: 88px;
  color: var(--color-primary-grey);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`,se=i.div`
  display: block;

  @media (min-width: 834px) {
    display: flex;
    gap: 12px;
  }
`,ae=i.input`
  width: 300px;
  height: 36px;
  padding: 8px 10px;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  border: 1px solid var(--color-primary-green-lite);
  border-radius: 12px;
  background: transparent;
  color: var(--color-primary-grey);
  margin-bottom: 12px;
  outline: none;

  @media (min-width: 834px) {
    width: 166px;
    margin-bottom: 0px;
  }
`,le=i.button`
  width: 300px;
  height: 36px;
  color: var(--color-primary-black-2);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  border-radius: 12px;
  background: var(--color-primary-green-lite);
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: none;
  margin-bottom: 24px;

  @media (min-width: 834px) {
    width: 166px;
    margin-bottom: 0px;
  }

  @media (min-width: 1440px) {
  }
`,pe=i.button`
  width: 300px;
  margin: 0;
  color: var(--color-primary-grey);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  display: block;

  @media (min-width: 834px) {
    display: none;
  }
`,ce=i.div`
  display: flex;
`;i.img`
  width: 16px;
  height: 16px;

  &:hover,
  &:focus {
  }
`;const de=i.button`
  display: none;

  @media (min-width: 834px) {
    display: flex;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
  }
`,xe=i.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-grey);
  margin-right: 8px;
`,ge=({onCloseButtonClick:n})=>{const t=new Date().toLocaleDateString();return e.jsxs(ie,{children:[e.jsxs(ce,{children:[e.jsx(ne,{children:"Enter your current weight"}),e.jsx(de,{onClick:n,children:e.jsx(xe,{children:e.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-close-circle"})})})]}),e.jsx(te,{children:"You can record your weight once a day"}),e.jsxs(oe,{children:["Today: ",e.jsx(re,{children:t})]}),e.jsxs(se,{children:[e.jsx(ae,{type:"text",placeholder:"Enter your weight"}),e.jsx(le,{children:"Confirm"}),e.jsx(pe,{children:"Cancel"})]})]})},Ae="/HealthyHub/assets/WaightImage-833d9f56.svg",g=()=>{const[n,t]=o.useState(!1),r=()=>{t(!0)},s=()=>{t(!1)};return e.jsxs(R,{children:[e.jsx(J,{children:e.jsx("img",{src:Ae,alt:"MaintakeMen"})}),e.jsxs(q,{children:[e.jsx(Z,{children:"Weight"}),e.jsxs(V,{children:["48 ",e.jsx("span",{children:"kg"}),e.jsx($,{onClick:r,children:e.jsx(_,{children:e.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-edit-2"})})})]})]}),n&&e.jsx(ee,{children:e.jsx(ge,{onCloseButtonClick:s})})]})},he=i.div`
  width: 130px;
  height: 28px;
  display: flex;
  align-items: center;
`,me=i.p`
  width: 78px;
  color: var(--color-primary-white);
  text-align: right;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  margin-right: 6px;
`,fe=i.div`
  width: 28px;
  height: 28px;
  border-radius: 28px;
  background: lightgray 50%;
  margin-right: 4px;
`,we=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  padding: 0;
`;i.img`
  display: block;

  @media (min-width: 834px) {
    display: block;
  }
`;const ye=i.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
`,ve=i.div`
  position: absolute;
  z-index: 1;
  top: 0;
  padding-top: 80px; //реголює висоту модалки
  padding-right: 27px;
  right: 0;

  @media (min-width: 1280px) {
    padding-right: 34px;
  }
`,je=i.button`
  border: none;
  background: none;
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  display: flex;
  align-items: center;
`,ue=i.div``,Be=i.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-white);
  margin-right: 8px;
`,Ce=()=>e.jsx(ue,{children:e.jsxs(je,{children:[e.jsx(Be,{children:e.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-setting-2"})}),"Setting"]})}),be=i.button`
  border: none;
  background: none;
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  display: flex;
  align-items: center;
`,Pe=i.div``,De=i.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-white);
  margin-right: 8px;
`,Me=()=>e.jsx(Pe,{children:e.jsxs(be,{children:[e.jsx(De,{children:e.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-logout"})}),"Log out"]})}),Ie=i.div`
  width: 158px;
  height: 112px;
  padding: 24px;
  border-radius: 12px;
  background: var(--Color-Primary-Black-2, #0f0f0f);
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
`,ze=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`,ke=()=>e.jsx(Ie,{children:e.jsxs(ze,{children:[e.jsx(Ce,{}),e.jsx(Me,{})]})}),Ye=()=>{const[n,t]=o.useState(!1),r=()=>{t(!0)},s=()=>{t(!1)};return e.jsxs(he,{children:[e.jsx(me,{children:"Konstantin"}),e.jsx(fe,{children:e.jsx("img",{src:"../../components/UserInfoNav/Avatar.svg",alt:"Avatar"})}),e.jsx(we,{onClick:r,children:e.jsx(ye,{onClick:s,children:e.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-arrow-down"})})}),n&&e.jsx(ve,{onClick:s,children:e.jsx(ke,{})})]})},Qe=i.div`
  position: relative;
  height: 60px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px 0 10px;

  @media (min-width: 834px) {
    height: 100px;
    padding: 0 27px 0 27px;
  }

  @media (min-width: 1440px) {
    padding: 0 36px 0 34px;
    max-width: 1440px;
  }
`,Ge=i.div`
  margin-left: auto;
  @media (min-width: 834px) {
    margin-left: 73px;
  }

  @media (min-width: 1280px) {
    margin-left: 124px;
  }
`,Ne=i.div``,Ee=i.button`
  background: none;
  border: none;
  padding: 0;
  margin-left: 8px;
  display: flex;

  @media (min-width: 834px) {
    display: flex;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-left: 8px;
  }
`,Xe=i.div`
  display: none;

  @media (min-width: 834px) {
    display: flex;
    gap: 40px;
    margin-left: auto;
  }

  @media (min-width: 1280px) {
    gap: 80px;
  }
`,Ue=i.svg`
  width: 16px;
  height: 16px;
  stroke: ${({isModalOpen:n})=>n?"var(--color-primary-grey)":"var(--color-primary-green-lite)"};

  @media (min-width: 834px) {
    display: none;
  }
`,Le=i.div`
  position: absolute;
  z-index: 1;
  padding-top: 250px;
`,Fe=i.div`
  width: 300px;
  height: 184px;
  padding: 16px 16px 24px 24px;
  border-radius: 12px;
  background: var(--color-primary-black-2);
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
  display: flex;
  justify-content: space-between;
`,We=i.div`
  width: 16px;
  height: 16px;
`,Te=i.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 8px;
`,He=i.img`
  width: 16px;
  height: 16px;

  &:hover,
  &:focus {
  }
`,Se=i.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  background: none;
  border: none;
  cursor: pointer;

  @media (min-width: 834px) {
    display: none;
  }
`,Oe=({onCloseButtonClick:n})=>e.jsxs(Fe,{children:[e.jsxs(Te,{children:[e.jsx(x,{}),e.jsx(g,{})]}),e.jsx(We,{children:e.jsx(Se,{onClick:n,children:e.jsx(He,{src:"/src/components/TargetSelectionModal/img/close-circle-min.svg",alt:"CloseButton"})})})]}),Ke=i(c)`
  color: var(--color-primary-grey);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;

  @media (min-width: 834px) {
    font-size: 22px;
    line-height: 1.46%;
  }
`,Re=()=>e.jsx(Ke,{to:"/",children:"HealthyHub"}),Je=()=>{const[n,t]=o.useState(!1),r=()=>{t(!0)},s=()=>{t(!1)};return e.jsxs(Qe,{children:[e.jsx(Ne,{children:e.jsx(Re,{})}),e.jsx(Ee,{onClick:r,children:e.jsx(Ue,{isModalOpen:n,children:e.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-menu"})})}),e.jsxs(Xe,{children:[e.jsx(x,{}),e.jsx(g,{})]}),e.jsx(Ge,{children:e.jsx(Ye,{})}),n&&e.jsx(Le,{isModalOpen:n,children:e.jsx(Oe,{onCloseButtonClick:s})})]})},Ze=i.div`
  background: var(--color-primary-black-2);
`,qe=i.div`
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
`,$e=()=>{const n=A(h);return e.jsxs(e.Fragment,{children:[e.jsx(Ze,{children:n?e.jsx(Je,{}):e.jsx(b,{})}),e.jsx(qe,{children:e.jsx(o.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(m,{})})})]})};export{$e as default};
