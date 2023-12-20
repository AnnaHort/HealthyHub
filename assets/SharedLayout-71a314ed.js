import{s as e,N as g,j as i,r as t,u as A,a as h,O as m}from"./index-890362b3.js";const w=e(g)`
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
`,f=()=>i.jsx(w,{to:"/welcome",children:"HealthyHub"}),y=e.svg`
  width: 26px;
  height: 26px;
  @media (min-width: 834px) {
    width: 28px;
    height: 28px;
  }
`,B=()=>i.jsxs(y,{id:"icon-profile-circle",viewBox:"0 0 32 32",children:[i.jsx("path",{fill:"none",stroke:"#fff",style:{stroke:"var(--color1, #fff)"},strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.8462",d:"M16.16 17.040c-0.093-0.013-0.213-0.013-0.32 0-2.347-0.080-4.213-2-4.213-4.36 0-2.413 1.947-4.373 4.373-4.373 2.413 0 4.373 1.96 4.373 4.373-0.013 2.36-1.867 4.28-4.213 4.36z"}),i.jsx("path",{fill:"none",stroke:"#fff",style:{stroke:"var(--color1, #fff)"},strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.8462",d:"M24.987 25.84c-2.373 2.173-5.52 3.493-8.987 3.493s-6.613-1.32-8.987-3.493c0.133-1.253 0.933-2.48 2.36-3.44 3.653-2.427 9.627-2.427 13.253 0 1.427 0.96 2.227 2.187 2.36 3.44z"}),i.jsx("path",{fill:"none",stroke:"#fff",style:{stroke:"var(--color1, #fff)"},strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.8462",d:"M16 29.333c7.364 0 13.333-5.969 13.333-13.333s-5.97-13.333-13.333-13.333c-7.364 0-13.333 5.97-13.333 13.333s5.97 13.333 13.333 13.333z"})]}),C=e.nav`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 6px;
`,x=e(g)`
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
`,u=e.span`
  color: var(--color-primary-white);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  @media (min-width: 834px) {
    font-size: 14px;
    line-height: 1.43;
  }
`,Q=()=>i.jsxs(C,{children:[i.jsx(x,{to:"/signin",children:"Sign in"}),i.jsx(u,{children:" / "}),i.jsx(x,{to:"/signup",children:"Sign up"}),i.jsx(B,{})]}),D=()=>i.jsxs(i.Fragment,{children:[i.jsx(f,{}),i.jsx(Q,{})]}),j=e.div`
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
`,M=e.div`
  background-color: var(--color-primary-black-2);
`,k=e.div`
  display: flex;
  gap: 12px;
`,E=e.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #5f5e5c;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;e.img`
  width: 28px;
  height: 28px;
`;const I=e.h3`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  margin-bottom: 2px;
`,v=e.div`
  padding-top: 3px;
  padding-bottom: 3px;
`,Y=e.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  display: flex;
  align-items: center;
`,z=e.button`
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
`;const b=e.svg`
  display: none;
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
  @media (min-width: 834px) {
    display: block;
  }
`,G=e.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
  @media (min-width: 834px) {
    display: none;
  }
`,N=e.div`
  position: absolute;
  z-index: 1;
  padding-top: 74px; //реголює висоту модалки
`,H=e.div`
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
`,T=e.div`
  display: flex;
  justify-content: flex-end;
`,F=e.h3`
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
`,P=e.p`
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
`,L=e.form`
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
`,R=e.ul`
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
`,a=e.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  opacity: 0;
`,p=e.li`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (min-width: 834px) {
    gap: 10px;
  }

  @media (min-width: 1440px) {
    gap: 10px;
  }
`,l=e.label`
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
`,U=e.button`
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
`,S=e.button`
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
`;e.img`
  width: 16px;
  height: 16px;

  &:hover,
  &:focus {
  }
`;const O=e.button`
  display: none;

  @media (min-width: 834px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
  }
`,X=e.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-grey);
  margin-right: 8px;
`,J=({onCloseButtonClick:n})=>i.jsxs(H,{children:[i.jsx(T,{children:i.jsx(O,{onClick:n,children:i.jsx(X,{children:i.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-close-circle"})})})}),i.jsx(F,{children:"Target selection"}),i.jsx(P,{children:"The service will adjust your calorie intake to your goal"}),i.jsx(L,{children:i.jsxs(R,{children:[i.jsxs(p,{children:[i.jsx(a,{type:"radio",id:"loseFat",name:"goal",value:"Lose Fat"}),i.jsxs(l,{htmlFor:"loseFat",children:[i.jsx("img",{src:"/src/Emoji/LoseFatMen.svg",alt:"Lose Fat"}),"Lose Fat"]})]}),i.jsxs(p,{children:[i.jsx(a,{type:"radio",id:"maintain",name:"goal",value:"Maintain"}),i.jsxs(l,{htmlFor:"maintain",children:[i.jsx("img",{src:"/src/Emoji/MaintakeMen.svg",alt:"Lose Fat"}),"Maintain"]})]}),i.jsxs(p,{children:[i.jsx(a,{type:"radio",id:"gainMuscle",name:"goal",value:"Gain Muscle"}),i.jsxs(l,{htmlFor:"gainMuscle",children:[i.jsx("img",{src:"/src/Emoji/GainMuscle.svg",alt:"Lose Fat"}),"Gain Muscle"]})]})]})}),i.jsx(U,{children:"Submit"}),i.jsx(S,{children:"Back"})]}),Z=n=>t.createElement("svg",{width:28,height:28,viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...n},t.createElement("rect",{width:28,height:28,fill:"url(#pattern0)"}),t.createElement("defs",null,t.createElement("pattern",{id:"pattern0",patternContentUnits:"objectBoundingBox",width:1,height:1},t.createElement("use",{xlinkHref:"#image0_35_1306",transform:"scale(0.00625)"})),t.createElement("image",{id:"image0_35_1306",width:160,height:160,xlinkHref:"data:image/png;base64,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"}))),d=()=>{const[n,o]=t.useState(!1),r=()=>{o(!0)},s=()=>{o(!1)};return i.jsxs(k,{children:[i.jsx(E,{children:i.jsx(Z,{})}),i.jsxs(v,{children:[i.jsx(I,{children:"Goal"}),i.jsxs(Y,{children:["Lose fat",i.jsxs(z,{children:[i.jsx(b,{onClick:r,children:i.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-arrow-down"})}),i.jsx(G,{onClick:r,children:i.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-arrow-right-2"})})]})]})]}),n&&i.jsx(N,{children:i.jsx(J,{onCloseButtonClick:s})})]})},K=e.div`
  display: flex;
  gap: 12px;
`,W=e.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #5f5e5c;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;e.img`
  width: 28px;
  height: 28px;
`;const q=e.h3`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  margin-bottom: 2px;
`,V=e.div`
  padding-top: 3px;
  padding-bottom: 3px;
`,$=e.p`
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
`;const _=e.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  margin-left: 7px;
`,ii=e.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
`,ei=e.div`
  position: absolute;
  z-index: 1;
  padding-top: 74px; //реголює висоту модалки
  padding-right: 157px;
  right: 0;

  @media (min-width: 1280px) {
    padding-right: 258px;
  }
`,ni=e.div`
  padding: 24px 10px 40px 10px;

  @media (min-width: 834px) {
    width: 392px;
    height: 200px;
    border-radius: 12px;
    background: var(--color-primary-black-2);
    box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
    padding: 20px 24px 40px 24px;
  }
`,ti=e.h3`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  margin-bottom: 8px;
  margin-right: 80px;
`,oi=e.p`
  color: var(--color-primary-grey);
  /* Body text/1 */
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  margin-bottom: 16px;
`,ri=e.p`
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
`,si=e.span`
  width: 88px;
  color: var(--color-primary-grey);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`,ai=e.div`
  display: block;

  @media (min-width: 834px) {
    display: flex;
    gap: 12px;
  }
`,pi=e.input`
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
`,li=e.button`
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
`,gi=e.button`
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
`,xi=e.div`
  display: flex;
`;e.img`
  width: 16px;
  height: 16px;

  &:hover,
  &:focus {
  }
`;const di=e.button`
  display: none;

  @media (min-width: 834px) {
    display: flex;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
  }
`,ci=e.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-grey);
  margin-right: 8px;
`,Ai=({onCloseButtonClick:n})=>{const o=new Date().toLocaleDateString();return i.jsxs(ni,{children:[i.jsxs(xi,{children:[i.jsx(ti,{children:"Enter your current weight"}),i.jsx(di,{onClick:n,children:i.jsx(ci,{children:i.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-close-circle"})})})]}),i.jsx(oi,{children:"You can record your weight once a day"}),i.jsxs(ri,{children:["Today: ",i.jsx(si,{children:o})]}),i.jsxs(ai,{children:[i.jsx(pi,{type:"text",placeholder:"Enter your weight"}),i.jsx(li,{children:"Confirm"}),i.jsx(gi,{children:"Cancel"})]})]})},hi=n=>t.createElement("svg",{width:28,height:28,viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...n},t.createElement("rect",{width:28,height:28,fill:"url(#pattern0)"}),t.createElement("defs",null,t.createElement("pattern",{id:"pattern0",patternContentUnits:"objectBoundingBox",width:1,height:1},t.createElement("use",{xlinkHref:"#image0_36_1337",transform:"scale(0.00625)"})),t.createElement("image",{id:"image0_36_1337",width:160,height:160,xlinkHref:"data:image/png;base64,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"}))),c=()=>{const[n,o]=t.useState(!1),r=()=>{o(!0)},s=()=>{o(!1)};return i.jsxs(K,{children:[i.jsx(W,{children:i.jsx(hi,{})}),i.jsxs(V,{children:[i.jsx(q,{children:"Weight"}),i.jsxs($,{children:["48 ",i.jsx("span",{children:"kg"}),i.jsx(_,{onClick:r,children:i.jsx(ii,{children:i.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-edit-2"})})})]})]}),n&&i.jsx(ei,{children:i.jsx(Ai,{onCloseButtonClick:s})})]})},mi=e.div`
  width: 130px;
  height: 28px;
  display: flex;
  align-items: center;
`,wi=e.p`
  width: 78px;
  color: var(--color-primary-white);
  text-align: right;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  margin-right: 6px;
`,fi=e.div`
  width: 28px;
  height: 28px;
  border-radius: 28px;
  background: lightgray 50%;
  margin-right: 4px;
`,yi=e.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  padding: 0;
`;e.img`
  display: block;

  @media (min-width: 834px) {
    display: block;
  }
`;const Bi=e.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
`,Ci=e.div`
  position: absolute;
  z-index: 1;
  top: 0;
  padding-top: 80px; //реголює висоту модалки
  padding-right: 27px;
  right: 0;

  @media (min-width: 1280px) {
    padding-right: 34px;
  }
`,ui=e.button`
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
`,Qi=e.div``,Di=e.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-white);
  margin-right: 8px;
`,ji=()=>i.jsx(Qi,{children:i.jsxs(ui,{children:[i.jsx(Di,{children:i.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-setting-2"})}),"Setting"]})}),Mi=e.button`
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
`,ki=e.div``,Ei=e.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-white);
  margin-right: 8px;
`,Ii=()=>i.jsx(ki,{children:i.jsxs(Mi,{children:[i.jsx(Ei,{children:i.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-logout"})}),"Log out"]})}),vi=e.div`
  width: 158px;
  height: 112px;
  padding: 24px;
  border-radius: 12px;
  background: var(--Color-Primary-Black-2, #0f0f0f);
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
`,Yi=e.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`,zi=()=>i.jsx(vi,{children:i.jsxs(Yi,{children:[i.jsx(ji,{}),i.jsx(Ii,{})]})}),bi=()=>{const[n,o]=t.useState(!1),r=()=>{o(!0)},s=()=>{o(!1)};return i.jsxs(mi,{children:[i.jsx(wi,{children:"Konstantin"}),i.jsx(fi,{children:i.jsx("img",{src:"../../components/UserInfoNav/Avatar.svg",alt:"Avatar"})}),i.jsx(yi,{onClick:r,children:i.jsx(Bi,{onClick:s,children:i.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-arrow-down"})})}),n&&i.jsx(Ci,{onClick:s,children:i.jsx(zi,{})})]})},Gi=e.div`
  position: relative;
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
`,Ni=e.div`
  margin-left: auto;
  @media (min-width: 834px) {
    margin-left: 73px;
  }

  @media (min-width: 1280px) {
    margin-left: 124px;
  }
`,Hi=e.div``,Ti=e.button`
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
`,Fi=e.div`
  display: none;

  @media (min-width: 834px) {
    display: flex;
    gap: 40px;
    margin-left: auto;
  }

  @media (min-width: 1280px) {
    gap: 80px;
  }
`,Pi=e.svg`
  width: 16px;
  height: 16px;
  stroke: ${({isModalOpen:n})=>n?"var(--color-primary-grey)":"var(--color-primary-green-lite)"};

  @media (min-width: 834px) {
    display: none;
  }
`,Li=e.div`
  position: absolute;
  z-index: 1;
  padding-top: 250px;
`,Ri=e.div`
  width: 300px;
  height: 184px;
  padding: 16px 16px 24px 24px;
  border-radius: 12px;
  background: var(--color-primary-black-2);
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
  display: flex;
  justify-content: space-between;
`,Ui=e.div`
  width: 16px;
  height: 16px;
`,Si=e.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 8px;
`,Oi=e.img`
  width: 16px;
  height: 16px;

  &:hover,
  &:focus {
  }
`,Xi=e.button`
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
`,Ji=({onCloseButtonClick:n})=>i.jsxs(Ri,{children:[i.jsxs(Si,{children:[i.jsx(d,{}),i.jsx(c,{})]}),i.jsx(Ui,{children:i.jsx(Xi,{onClick:n,children:i.jsx(Oi,{src:"/src/components/TargetSelectionModal/img/close-circle-min.svg",alt:"CloseButton"})})})]}),Zi=e(g)`
  color: var(--color-primary-grey);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;

  @media (min-width: 834px) {
    font-size: 22px;
    line-height: 1.46%;
  }
`,Ki=()=>i.jsx(Zi,{to:"/",children:"HealthyHub"}),Wi=()=>{const[n,o]=t.useState(!1),r=()=>{o(!0)},s=()=>{o(!1)};return i.jsxs(Gi,{children:[i.jsx(Hi,{children:i.jsx(Ki,{})}),i.jsx(Ti,{onClick:r,children:i.jsx(Pi,{isModalOpen:n,children:i.jsx("use",{href:"/src/Sprites/icons/symbol-defs.svg#icon-menu"})})}),i.jsxs(Fi,{children:[i.jsx(d,{}),i.jsx(c,{})]}),i.jsx(Ni,{children:i.jsx(bi,{})}),n&&i.jsx(Li,{isModalOpen:n,children:i.jsx(Ji,{onCloseButtonClick:s})})]})},qi=e.div`

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
`,$i=()=>{const n=A(h);return i.jsxs(i.Fragment,{children:[i.jsx(M,{children:i.jsx(j,{children:n?i.jsx(Wi,{}):i.jsx(D,{})})}),i.jsx(qi,{children:i.jsx(t.Suspense,{fallback:i.jsx("div",{children:"Loading..."}),children:i.jsx(m,{})})})]})};export{$i as default};
