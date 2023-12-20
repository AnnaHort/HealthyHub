import{s as t,N as d,j as i,r as s,u as g,a as m,O as f}from"./index-a58cf062.js";const y=t(d)`
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
`,u=()=>i.jsx(y,{to:"/welcome",children:"HealthyHub"}),w=t.svg`
  width: 26px;
  height: 26px;
  @media (min-width: 834px) {
    width: 28px;
    height: 28px;
  }
`,b=()=>i.jsxs(w,{id:"icon-profile-circle",viewBox:"0 0 32 32",children:[i.jsx("path",{fill:"none",stroke:"#fff",style:{stroke:"var(--color1, #fff)"},strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.8462",d:"M16.16 17.040c-0.093-0.013-0.213-0.013-0.32 0-2.347-0.080-4.213-2-4.213-4.36 0-2.413 1.947-4.373 4.373-4.373 2.413 0 4.373 1.96 4.373 4.373-0.013 2.36-1.867 4.28-4.213 4.36z"}),i.jsx("path",{fill:"none",stroke:"#fff",style:{stroke:"var(--color1, #fff)"},strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.8462",d:"M24.987 25.84c-2.373 2.173-5.52 3.493-8.987 3.493s-6.613-1.32-8.987-3.493c0.133-1.253 0.933-2.48 2.36-3.44 3.653-2.427 9.627-2.427 13.253 0 1.427 0.96 2.227 2.187 2.36 3.44z"}),i.jsx("path",{fill:"none",stroke:"#fff",style:{stroke:"var(--color1, #fff)"},strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.8462",d:"M16 29.333c7.364 0 13.333-5.969 13.333-13.333s-5.97-13.333-13.333-13.333c-7.364 0-13.333 5.97-13.333 13.333s5.97 13.333 13.333 13.333z"})]}),j=t.nav`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 6px;
`,x=t(d)`
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
`,v=t.span`
  color: var(--color-primary-white);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  @media (min-width: 834px) {
    font-size: 14px;
    line-height: 1.43;
  }
`,k=()=>i.jsxs(j,{children:[i.jsx(x,{to:"/signin",children:"Sign in"}),i.jsx(v,{children:" / "}),i.jsx(x,{to:"/signup",children:"Sign up"}),i.jsx(b,{})]}),C=t.div`
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
`;t.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (min-width: 834px) {
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;const S=()=>i.jsxs(C,{children:[i.jsx(u,{}),i.jsx(k,{})]}),M=t.div`
  display: flex;
  gap: 12px;
`,$=t.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #5f5e5c;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;t.img`
  width: 28px;
  height: 28px;
`;const z=t.h3`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  margin-bottom: 2px;
`,B=t.div`
  padding-top: 3px;
  padding-bottom: 3px;
`,I=t.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  display: flex;
  align-items: center;
`,L=t.button`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 14px;
  height: 14px; */
  margin-left: 7px;
  border: none;
  background: none;
`;t.img`
  display: none;

  @media (min-width: 834px) {
    display: block;
  }
`;t.img`
  @media (min-width: 834px) {
    display: none;
  }
`;const P=t.svg`
  display: none;
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
  @media (min-width: 834px) {
    display: block;
  }
`,D=t.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
  @media (min-width: 834px) {
    display: none;
  }
`,F=t.div`
  position: absolute;
  z-index: 1;
  padding-top: 74px; //реголює висоту модалки
`,H=t.div`
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
`,T=t.div`
  display: flex;
  justify-content: flex-end;
`,G=t.h3`
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
`,O=t.p`
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
`,U=t.form`
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
`,E=t.ul`
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
`,a=t.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  opacity: 0;
`,l=t.li`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (min-width: 834px) {
    gap: 10px;
  }

  @media (min-width: 1440px) {
    gap: 10px;
  }
`,p=t.label`
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
`,W=t.button`
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
`,A=t.button`
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
`;t.img`
  width: 16px;
  height: 16px;

  &:hover,
  &:focus {
  }
`;const N=t.button`
  display: none;

  @media (min-width: 834px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
  }
`,R=t.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-grey);
  margin-right: 8px;
`,V=({onCloseButtonClick:e})=>i.jsxs(H,{children:[i.jsx(T,{children:i.jsx(N,{onClick:e,children:i.jsx(R,{children:i.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-close-circle"})})})}),i.jsx(G,{children:"Target selection"}),i.jsx(O,{children:"The service will adjust your calorie intake to your goal"}),i.jsx(U,{children:i.jsxs(E,{children:[i.jsxs(l,{children:[i.jsx(a,{type:"radio",id:"loseFat",name:"goal",value:"Lose Fat"}),i.jsxs(p,{htmlFor:"loseFat",children:[i.jsx("img",{src:"/src/Emoji/LoseFatMen.svg",alt:"Lose Fat"}),"Lose Fat"]})]}),i.jsxs(l,{children:[i.jsx(a,{type:"radio",id:"maintain",name:"goal",value:"Maintain"}),i.jsxs(p,{htmlFor:"maintain",children:[i.jsx("img",{src:"/src/Emoji/MaintakeMen.svg",alt:"Lose Fat"}),"Maintain"]})]}),i.jsxs(l,{children:[i.jsx(a,{type:"radio",id:"gainMuscle",name:"goal",value:"Gain Muscle"}),i.jsxs(p,{htmlFor:"gainMuscle",children:[i.jsx("img",{src:"/src/Emoji/GainMuscle.svg",alt:"Lose Fat"}),"Gain Muscle"]})]})]})}),i.jsx(W,{children:"Submit"}),i.jsx(A,{children:"Back"})]}),K="/HealthyHub/assets/symbol-defs-2ae3e6ff.svg",Y="/HealthyHub/assets/GainMuscle-be81eda0.svg",c=()=>{const[e,n]=s.useState(!1),o=()=>{n(!0)},r=()=>{n(!1)};return i.jsxs(M,{children:[i.jsx($,{children:i.jsx("img",{src:Y,alt:"GainMuscle"})}),i.jsxs(B,{children:[i.jsx(z,{children:"Goal"}),i.jsxs(I,{children:["Lose fat",i.jsxs(L,{children:[i.jsx(P,{onClick:o,children:i.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-arrow-down"})}),i.jsx(D,{onClick:o,children:i.jsx("use",{href:`${K}#icon-arrow-right-2`})})]})]})]}),e&&i.jsx(F,{children:i.jsx(V,{onCloseButtonClick:r})})]})},q=t.div`
  display: flex;
  gap: 12px;
`,J=t.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #5f5e5c;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;t.img`
  width: 28px;
  height: 28px;
`;const Q=t.h3`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  margin-bottom: 2px;
`,X=t.div`
  padding-top: 3px;
  padding-bottom: 3px;
`,Z=t.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  display: flex;
  align-items: center;
`;t.span`
  color: var(--color-primary-grey);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;const _=t.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  margin-left: 7px;
`,ii=t.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
`,ti=t.div`
  position: absolute;
  z-index: 1;
  padding-top: 74px; //реголює висоту модалки
  padding-right: 157px;
  right: 0;

  @media (min-width: 1280px) {
    padding-right: 258px;
  }
`,ei=t.div`
  padding: 24px 10px 40px 10px;

  @media (min-width: 834px) {
    width: 392px;
    height: 200px;
    border-radius: 12px;
    background: var(--color-primary-black-2);
    box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
    padding: 20px 24px 40px 24px;
  }
`,ni=t.h3`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  margin-bottom: 8px;
  margin-right: 80px;
`,oi=t.p`
  color: var(--color-primary-grey);
  /* Body text/1 */
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  margin-bottom: 16px;
`,ri=t.p`
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
`,si=t.span`
  width: 88px;
  color: var(--color-primary-grey);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`,ai=t.div`
  display: block;

  @media (min-width: 834px) {
    display: flex;
    gap: 12px;
  }
`,li=t.input`
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
`,pi=t.button`
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
`,di=t.button`
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
`,xi=t.div`
  display: flex;
`;t.img`
  width: 16px;
  height: 16px;

  &:hover,
  &:focus {
  }
`;const ci=t.button`
  display: none;

  @media (min-width: 834px) {
    display: flex;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
  }
`,hi=t.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-grey);
  margin-right: 8px;
`,gi=({onCloseButtonClick:e})=>{const n=new Date().toLocaleDateString();return i.jsxs(ei,{children:[i.jsxs(xi,{children:[i.jsx(ni,{children:"Enter your current weight"}),i.jsx(ci,{onClick:e,children:i.jsx(hi,{children:i.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-close-circle"})})})]}),i.jsx(oi,{children:"You can record your weight once a day"}),i.jsxs(ri,{children:["Today: ",i.jsx(si,{children:n})]}),i.jsxs(ai,{children:[i.jsx(li,{type:"text",placeholder:"Enter your weight"}),i.jsx(pi,{children:"Confirm"}),i.jsx(di,{children:"Cancel"})]})]})},mi="/HealthyHub/assets/WaightImage-833d9f56.svg",h=()=>{const[e,n]=s.useState(!1),o=()=>{n(!0)},r=()=>{n(!1)};return i.jsxs(q,{children:[i.jsx(J,{children:i.jsx("img",{src:mi,alt:"MaintakeMen"})}),i.jsxs(X,{children:[i.jsx(Q,{children:"Weight"}),i.jsxs(Z,{children:["48 ",i.jsx("span",{children:"kg"}),i.jsx(_,{onClick:o,children:i.jsx(ii,{children:i.jsx("use",{href:"../../../src/Sprites/icons/symbol-defs.svg#icon-edit-2"})})})]})]}),e&&i.jsx(ti,{children:i.jsx(gi,{onCloseButtonClick:r})})]})},fi=t.div`
  width: 130px;
  height: 28px;
  display: flex;
  align-items: center;
`,yi=t.p`
  width: 78px;
  color: var(--color-primary-white);
  text-align: right;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  margin-right: 6px;
`,ui=t.div`
  width: 28px;
  height: 28px;
  border-radius: 28px;
  background: lightgray 50%;
  margin-right: 4px;
`,wi=t.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  padding: 0;
`;t.img`
  display: block;

  @media (min-width: 834px) {
    display: block;
  }
`;const bi=t.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
`,ji=t.div`
  position: absolute;
  z-index: 1;
  top: 0;
  padding-top: 80px; //реголює висоту модалки
  padding-right: 27px;
  right: 0;

  @media (min-width: 1280px) {
    padding-right: 34px;
  }
`,vi=t.button`
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
`,ki=t.div``,Ci=t.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-white);
  margin-right: 8px;
`,Si=()=>i.jsx(ki,{children:i.jsxs(vi,{children:[i.jsx(Ci,{children:i.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-setting-2"})}),"Setting"]})}),Mi=t.button`
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
`,$i=t.div``,zi=t.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-white);
  margin-right: 8px;
`,Bi=()=>i.jsx($i,{children:i.jsxs(Mi,{children:[i.jsx(zi,{children:i.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-logout"})}),"Log out"]})}),Ii=t.div`
  width: 158px;
  height: 112px;
  padding: 24px;
  border-radius: 12px;
  background: var(--Color-Primary-Black-2, #0f0f0f);
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
`,Li=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`,Pi=()=>i.jsx(Ii,{children:i.jsxs(Li,{children:[i.jsx(Si,{}),i.jsx(Bi,{})]})}),Di=()=>{const[e,n]=s.useState(!1),o=()=>{n(!0)},r=()=>{n(!1)};return i.jsxs(fi,{children:[i.jsx(yi,{children:"Konstantin"}),i.jsx(ui,{children:i.jsx("img",{src:"../../components/UserInfoNav/Avatar.svg",alt:"Avatar"})}),i.jsx(wi,{onClick:o,children:i.jsx(bi,{onClick:r,children:i.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-arrow-down"})})}),e&&i.jsx(ji,{onClick:r,children:i.jsx(Pi,{})})]})},Fi=t.div`
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
`,Hi=t.div`
  margin-left: auto;
  @media (min-width: 834px) {
    margin-left: 73px;
  }

  @media (min-width: 1280px) {
    margin-left: 124px;
  }
`,Ti=t.div``,Gi=t.button`
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
`,Oi=t.div`
  display: none;

  @media (min-width: 834px) {
    display: flex;
    gap: 40px;
    margin-left: auto;
  }

  @media (min-width: 1280px) {
    gap: 80px;
  }
`,Ui=t.svg`
  width: 16px;
  height: 16px;
  stroke: ${({isModalOpen:e})=>e?"var(--color-primary-grey)":"var(--color-primary-green-lite)"};

  @media (min-width: 834px) {
    display: none;
  }
`,Ei=t.div`
  position: absolute;
  z-index: 1;
  padding-top: 250px;
`,Wi=t.div`
  width: 300px;
  height: 184px;
  padding: 16px 16px 24px 24px;
  border-radius: 12px;
  background: var(--color-primary-black-2);
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
  display: flex;
  justify-content: space-between;
`,Ai=t.div`
  width: 16px;
  height: 16px;
`,Ni=t.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 8px;
`,Ri=t.img`
  width: 16px;
  height: 16px;

  &:hover,
  &:focus {
  }
`,Vi=t.button`
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
`,Ki=({onCloseButtonClick:e})=>i.jsxs(Wi,{children:[i.jsxs(Ni,{children:[i.jsx(c,{}),i.jsx(h,{})]}),i.jsx(Ai,{children:i.jsx(Vi,{onClick:e,children:i.jsx(Ri,{src:"/src/components/TargetSelectionModal/img/close-circle-min.svg",alt:"CloseButton"})})})]}),Yi=t(d)`
  color: var(--color-primary-grey);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;

  @media (min-width: 834px) {
    font-size: 22px;
    line-height: 1.46%;
  }
`,qi=()=>i.jsx(Yi,{to:"/",children:"HealthyHub"}),Ji=()=>{const[e,n]=s.useState(!1),o=()=>{n(!0)},r=()=>{n(!1)};return i.jsxs(Fi,{children:[i.jsx(Ti,{children:i.jsx(qi,{})}),i.jsx(Gi,{onClick:o,children:i.jsx(Ui,{isModalOpen:e,children:i.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-menu"})})}),i.jsxs(Oi,{children:[i.jsx(c,{}),i.jsx(h,{})]}),i.jsx(Hi,{children:i.jsx(Di,{})}),e&&i.jsx(Ei,{isModalOpen:e,children:i.jsx(Ki,{onCloseButtonClick:r})})]})},Qi=t.div`
  background: var(--color-primary-black-2);
`,Xi=t.div`
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
`,_i=()=>{const e=g(m);return i.jsxs(i.Fragment,{children:[i.jsx(Qi,{children:e?i.jsx(Ji,{}):i.jsx(S,{})}),i.jsx(Xi,{children:i.jsx(s.Suspense,{fallback:i.jsx("div",{children:"Loading..."}),children:i.jsx(f,{})})})]})};export{_i as default};
