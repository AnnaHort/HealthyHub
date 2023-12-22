import{s as e,N as p,j as t,r as n,L as u,U as w,T as y,I as k,a as j,S as v,M as b,u as C,b as L,O as M}from"./index-d258cd40.js";const B=e(p)`
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
`,S=()=>t.jsx(B,{to:"/welcome",children:"HealthyHub"}),$=e.svg`
  width: 26px;
  height: 26px;
  @media (min-width: 834px) {
    width: 28px;
    height: 28px;
  }
`,z=()=>t.jsxs($,{id:"icon-profile-circle",viewBox:"0 0 32 32",children:[t.jsx("path",{fill:"none",stroke:"#fff",style:{stroke:"var(--color1, #fff)"},strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.8462",d:"M16.16 17.040c-0.093-0.013-0.213-0.013-0.32 0-2.347-0.080-4.213-2-4.213-4.36 0-2.413 1.947-4.373 4.373-4.373 2.413 0 4.373 1.96 4.373 4.373-0.013 2.36-1.867 4.28-4.213 4.36z"}),t.jsx("path",{fill:"none",stroke:"#fff",style:{stroke:"var(--color1, #fff)"},strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.8462",d:"M24.987 25.84c-2.373 2.173-5.52 3.493-8.987 3.493s-6.613-1.32-8.987-3.493c0.133-1.253 0.933-2.48 2.36-3.44 3.653-2.427 9.627-2.427 13.253 0 1.427 0.96 2.227 2.187 2.36 3.44z"}),t.jsx("path",{fill:"none",stroke:"#fff",style:{stroke:"var(--color1, #fff)"},strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.8462",d:"M16 29.333c7.364 0 13.333-5.969 13.333-13.333s-5.97-13.333-13.333-13.333c-7.364 0-13.333 5.97-13.333 13.333s5.97 13.333 13.333 13.333z"})]}),I=e.nav`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 6px;
`,x=e(p)`
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
`,E=e.span`
  color: var(--color-primary-white);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  @media (min-width: 834px) {
    font-size: 14px;
    line-height: 1.43;
  }
`,P=()=>t.jsxs(I,{children:[t.jsx(x,{to:"/signin",children:"Sign in"}),t.jsx(E,{children:" / "}),t.jsx(x,{to:"/signup",children:"Sign up"}),t.jsx(z,{})]}),W=e.div`
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
`;e.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (min-width: 834px) {
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;const H=()=>t.jsxs(W,{children:[t.jsx(S,{}),t.jsx(P,{})]}),F=e.div`
  display: flex;
  gap: 12px;
`,D=e.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #5f5e5c;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`,A=e.h3`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  margin-bottom: 2px;
`,G=e.div`
  padding-top: 3px;
  padding-bottom: 3px;
`,T=e.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  display: flex;
  align-items: center;
`,O=e.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 7px;
  border: none;
  background: none;
`,U=e.svg`
  display: none;
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
  @media (min-width: 834px) {
    display: block;
  }
`,Z=e.svg`
  display: block;
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
  @media (min-width: 834px) {
    display: none;
  }
`,N=e.div`
  position: absolute;
  z-index: 1;
  padding-top: 247px; //реголює висоту модалки
  display: flex;
  left: -8px;
  top: 0;

  @media (min-width: 834px) {
    padding-top: 101px;
    left: auto;
  }
`,R=e.div`
  padding: 24px 10px 40px 10px;
  background-color: var(--color-primary-black);
  height: 100vh;

  @media (min-width: 834px) {
    width: 392px;
    height: 352px;
    /* flex-shrink: 0; */
    padding: 20px 32px 40px 24px;
    border-radius: 12px;
    background: var(--Color-Primary-Black-2, #0f0f0f);
    box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
  }
`,V=e.div`
  display: flex;
  justify-content: space-between;
`,K=e.h3`
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
  }

  @media (min-width: 1440px) {
    margin: 0;
  }
`,Y=e.p`
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
`,q=e.form`
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
`,J=e.ul`
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
`,l=e.li`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (min-width: 834px) {
    gap: 10px;
  }

  @media (min-width: 1440px) {
    gap: 10px;
  }
`,d=e.label`
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
`,Q=e.button`
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
`,X=e.button`
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
`;const _=e.button`
  display: none;
  padding: 0;
  width: 16px;
  height: 16px;
  margin-right: 8px;

  @media (min-width: 834px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
  }
`,tt=e.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-grey);
`,c=i=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:22,height:22,stroke:"#B6B6B6",viewBox:"0 0 32 32",fill:"none",...i},n.createElement("path",{d:"M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M9.16992 14.83L14.8299 9.17004",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M14.8299 14.83L9.16992 9.17004",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),et="/HealthyHub/assets/LoseFatMen-7b8fee89.svg",it="/HealthyHub/assets/MaintakeGirl-28454b53.svg",h="/HealthyHub/assets/GainMuscle-be81eda0.svg",nt=({onCloseButtonClick:i})=>t.jsxs(R,{children:[t.jsxs(V,{children:[t.jsx(K,{children:"Target selection"}),t.jsx(_,{onClick:i,children:t.jsx(tt,{children:t.jsx(c,{})})})]}),t.jsx(Y,{children:"The service will adjust your calorie intake to your goal"}),t.jsx(q,{children:t.jsxs(J,{children:[t.jsxs(l,{children:[t.jsx(a,{type:"radio",id:"loseFat",name:"goal",value:"Lose Fat"}),t.jsxs(d,{htmlFor:"loseFat",children:[t.jsx("img",{src:et,alt:"LooseFatMen"}),"Lose Fat"]})]}),t.jsxs(l,{children:[t.jsx(a,{type:"radio",id:"maintain",name:"goal",value:"Maintain"}),t.jsxs(d,{htmlFor:"maintain",children:[t.jsx("img",{src:it,alt:"MaintakeGirl"}),"Maintain"]})]}),t.jsxs(l,{children:[t.jsx(a,{type:"radio",id:"gainMuscle",name:"goal",value:"Gain Muscle"}),t.jsxs(d,{htmlFor:"gainMuscle",children:[t.jsx("img",{src:h,alt:"GainMuscle"}),"Gain Muscle"]})]})]})}),t.jsx(Q,{children:"Submit"}),t.jsx(X,{onClick:i,children:"Back"})]}),ot=i=>n.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},n.createElement("path",{d:"M9.62012 3.95312L13.6668 7.99979L9.62012 12.0465",stroke:"#E3FFA8",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M2.33301 8H13.553",stroke:"#E3FFA8",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"})),g=i=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 32 32",fill:"none",...i},n.createElement("path",{d:"M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995",stroke:"#E3FFA8",strokeWidth:1.5,strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"})),m=()=>{const[i,o]=n.useState(!1),r=()=>{o(!0)},s=()=>{o(!1)};return t.jsxs(F,{children:[t.jsx(D,{children:t.jsx("img",{src:h,alt:"GainMuscle"})}),t.jsxs(G,{children:[t.jsx(A,{children:"Goal"}),t.jsxs(T,{children:["Lose fat",t.jsxs(O,{children:[t.jsx(U,{onClick:r,children:t.jsx(g,{})}),t.jsx(Z,{onClick:r,children:t.jsx(ot,{})})]})]})]}),i&&t.jsx(N,{children:t.jsx(nt,{onCloseButtonClick:s})})]})},rt=e.div`
  display: flex;
  gap: 12px;
`,st=e.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #5f5e5c;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`,at=e.h3`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  margin-bottom: 2px;
`,lt=e.div`
  padding-top: 3px;
  padding-bottom: 3px;
`,dt=e.p`
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
`;const pt=e.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  margin-left: 7px;
  padding: 0;
`,ct=e.div`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
`,xt=e.div`
  position: absolute;
  z-index: 1;
  padding-top: 247px; //реголює висоту модалки
  display: flex;
  left: -8px;
  top: 0;

  @media (min-width: 834px) {
    padding-top: 101px;
    left: auto;
  }
`,ht=e.div`
  padding: 24px 10px 40px 10px;
  background: var(--color-primary-black);
  height: 100vh;

  @media (min-width: 834px) {
    width: 392px;
    height: 200px;
    border-radius: 12px;
    background: var(--color-primary-black-2);
    box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
    padding: 20px 24px 40px 24px;
  }
`,gt=e.h3`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  margin-bottom: 8px;
  margin-right: 80px;
`,mt=e.p`
  color: var(--color-primary-grey);
  /* Body text/1 */
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  margin-bottom: 16px;
`,ft=e.p`
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
`,ut=e.span`
  width: 88px;
  color: var(--color-primary-grey);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`,wt=e.div`
  display: block;

  @media (min-width: 834px) {
    display: flex;
    gap: 12px;
  }
`,yt=e.input`
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
`,kt=e.button`
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
`,jt=e.button`
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
`,vt=e.div`
  display: flex;
`,bt=e.button`
  display: none;

  @media (min-width: 834px) {
    display: flex;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
  }
`,Ct=e.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-grey);
  margin-right: 8px;
`,Lt=({onCloseButtonClick:i})=>{const o=new Date().toLocaleDateString();return t.jsxs(ht,{children:[t.jsxs(vt,{children:[t.jsx(gt,{children:"Enter your current weight"}),t.jsx(bt,{onClick:i,children:t.jsx(Ct,{children:t.jsx(c,{})})})]}),t.jsx(mt,{children:"You can record your weight once a day"}),t.jsxs(ft,{children:["Today: ",t.jsx(ut,{children:o})]}),t.jsxs(wt,{children:[t.jsx(yt,{type:"text",placeholder:"Enter your weight"}),t.jsx(kt,{children:"Confirm"}),t.jsx(jt,{onClick:i,children:"Cancel"})]})]})},Mt="/HealthyHub/assets/WaightImage-833d9f56.svg",Bt=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 32 32",fill:"none",children:[t.jsx("path",{d:"M13.2599 3.59997L5.04985 12.29C4.73985 12.62 4.43985 13.27 4.37985 13.72L4.00985 16.96C3.87985 18.13 4.71985 18.93 5.87985 18.73L9.09985 18.18C9.54985 18.1 10.1799 17.77 10.4899 17.43L18.6999 8.73997C20.1199 7.23997 20.7599 5.52997 18.5499 3.43997C16.3499 1.36997 14.6799 2.09997 13.2599 3.59997Z",stroke:"",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M11.8901 5.05005C12.3201 7.81005 14.5601 9.92005 17.3401 10.2",stroke:"",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M3 22H21",stroke:"",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})]}),f=()=>{const[i,o]=n.useState(!1),r=()=>{o(!0)},s=()=>{o(!1)};return t.jsxs(rt,{children:[t.jsx(st,{children:t.jsx("img",{src:Mt,alt:"MaintakeMen"})}),t.jsxs(lt,{children:[t.jsx(at,{children:"Weight"}),t.jsxs(dt,{children:["48 ",t.jsx("span",{children:"kg"}),t.jsx(pt,{onClick:r,children:t.jsx(ct,{children:t.jsx(Bt,{})})})]})]}),i&&t.jsx(xt,{children:t.jsx(Lt,{onCloseButtonClick:s})})]})},St=e.button`
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
  padding: 0;
`,$t=e.div``,zt=e.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-white);
  margin-right: 8px;
`,It=i=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:22,height:22,stroke:"",viewBox:"0 0 32 32",fill:"none",...i},n.createElement("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",strokeWidth:1.5,strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M2 12.8801V11.1201C2 10.0801 2.85 9.22006 3.9 9.22006C5.71 9.22006 6.45 7.94006 5.54 6.37006C5.02 5.47006 5.33 4.30006 6.24 3.78006L7.97 2.79006C8.76 2.32006 9.78 2.60006 10.25 3.39006L10.36 3.58006C11.26 5.15006 12.74 5.15006 13.65 3.58006L13.76 3.39006C14.23 2.60006 15.25 2.32006 16.04 2.79006L17.77 3.78006C18.68 4.30006 18.99 5.47006 18.47 6.37006C17.56 7.94006 18.3 9.22006 20.11 9.22006C21.15 9.22006 22.01 10.0701 22.01 11.1201V12.8801C22.01 13.9201 21.16 14.7801 20.11 14.7801C18.3 14.7801 17.56 16.0601 18.47 17.6301C18.99 18.5401 18.68 19.7001 17.77 20.2201L16.04 21.2101C15.25 21.6801 14.23 21.4001 13.76 20.6101L13.65 20.4201C12.75 18.8501 11.27 18.8501 10.36 20.4201L10.25 20.6101C9.78 21.4001 8.76 21.6801 7.97 21.2101L6.24 20.2201C5.33 19.7001 5.02 18.5301 5.54 17.6301C6.45 16.0601 5.71 14.7801 3.9 14.7801C2.85 14.7801 2 13.9201 2 12.8801Z",strokeWidth:1.5,strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"})),Et=()=>t.jsx($t,{children:t.jsx(u,{to:"/settings",children:t.jsxs(St,{children:[t.jsx(zt,{children:t.jsx(It,{})}),"Setting"]})})}),Pt=e.button`
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
  padding: 0;
`,Wt=e.div``,Ht=e.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-white);
  margin-right: 8px;
`,Ft=i=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:23,height:23,stroke:"",viewBox:"0 0 32 32",fill:"none",...i},n.createElement("path",{d:"M8.8999 7.55999C9.2099 3.95999 11.0599 2.48999 15.1099 2.48999H15.2399C19.7099 2.48999 21.4999 4.27999 21.4999 8.74999V15.27C21.4999 19.74 19.7099 21.53 15.2399 21.53H15.1099C11.0899 21.53 9.2399 20.08 8.9099 16.54",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M15.0001 12H3.62012",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M5.85 8.65002L2.5 12L5.85 15.35",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Dt=()=>t.jsx(Wt,{children:t.jsxs(Pt,{children:[t.jsx(Ht,{children:t.jsx(Ft,{})}),"Log out"]})}),At=e.div`
  width: 158px;
  height: 112px;
  padding: 24px;
  border-radius: 12px;
  background: var(--Color-Primary-Black-2, #0f0f0f);
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
`,Gt=e.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`,Tt=()=>t.jsx(At,{children:t.jsxs(Gt,{children:[t.jsx(Et,{}),t.jsx(Dt,{})]})}),Ot="/HealthyHub/assets/Avatar-4908aace.svg",Ut=()=>{const[i,o]=n.useState(!1),r=()=>{o(!0)},s=()=>{o(!1)};return t.jsxs(w,{children:[t.jsx(y,{children:"Konstantin"}),t.jsx(k,{children:t.jsx("img",{src:Ot,alt:"Avatar"})}),t.jsx(j,{onClick:r,children:t.jsx(v,{children:t.jsx(g,{})})}),i&&t.jsx(b,{onClick:s,children:t.jsx(Tt,{})})]})},Zt=e.div`
  width: 320px;
  position: relative;
  height: 60px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px 0 10px;

  @media (min-width: 834px) {
    width: 834px;
    height: 100px;
    padding: 0 27px 0 27px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding: 0 36px 0 34px;
    max-width: 1440px;
  }
`,Nt=e.div`
  margin-left: auto;
  @media (min-width: 834px) {
    margin-left: 73px;
  }

  @media (min-width: 1440px) {
    margin-left: 124px;
  }
`,Rt=e.div``,Vt=e.button`
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
`,Kt=e.div`
  display: none;

  @media (min-width: 834px) {
    display: flex;
    gap: 40px;
    margin-left: auto;
  }

  @media (min-width: 1440px) {
    gap: 80px;
  }
`,Yt=e.svg`
  width: 16px;
  height: 16px;
  @media (min-width: 834px) {
    display: none;
  }
`,qt=e.div`
  position: absolute;
  z-index: 1;
  padding-top: 250px;
`,Jt=e.div`
  width: 300px;
  height: 184px;
  padding: 16px 16px 24px 24px;
  border-radius: 12px;
  background: var(--color-primary-black-2);
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
  display: flex;
  justify-content: space-between;
`,Qt=e.div`
  width: 16px;
  height: 16px;
`,Xt=e.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 8px;
`;e.img`
  width: 16px;
  height: 16px;

  &:hover,
  &:focus {
  }
`;const _t=e.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0px;

  @media (min-width: 834px) {
    display: none;
  }
`,te=e.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-grey);
`,ee=({onCloseButtonClick:i})=>t.jsxs(Jt,{children:[t.jsxs(Xt,{children:[t.jsx(m,{}),t.jsx(f,{})]}),t.jsx(Qt,{children:t.jsx(_t,{onClick:i,children:t.jsx(te,{children:t.jsx(c,{})})})})]}),ie=e(p)`
  color: var(--color-primary-grey);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;

  @media (min-width: 834px) {
    font-size: 22px;
    line-height: 1.46%;
  }
`,ne=()=>t.jsx(ie,{to:"/main",children:"HealthyHub"}),oe=i=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:23,height:23,stroke:"#B6B6B6",viewBox:"0 0 32 32",fill:"",...i},n.createElement("path",{d:"M17.5401 8.31001C18.8987 8.31001 20.0001 7.20863 20.0001 5.85001C20.0001 4.49139 18.8987 3.39001 17.5401 3.39001C16.1814 3.39001 15.0801 4.49139 15.0801 5.85001C15.0801 7.20863 16.1814 8.31001 17.5401 8.31001Z",strokeWidth:1.5,strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M6.46001 8.31001C7.81863 8.31001 8.92 7.20863 8.92 5.85001C8.92 4.49139 7.81863 3.39001 6.46001 3.39001C5.10139 3.39001 4 4.49139 4 5.85001C4 7.20863 5.10139 8.31001 6.46001 8.31001Z",strokeWidth:1.5,strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M17.5401 20.6101C18.8987 20.6101 20.0001 19.5087 20.0001 18.1501C20.0001 16.7914 18.8987 15.6901 17.5401 15.6901C16.1814 15.6901 15.0801 16.7914 15.0801 18.1501C15.0801 19.5087 16.1814 20.6101 17.5401 20.6101Z",strokeWidth:1.5,strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M6.46001 20.6101C7.81863 20.6101 8.92 19.5087 8.92 18.1501C8.92 16.7914 7.81863 15.6901 6.46001 15.6901C5.10139 15.6901 4 16.7914 4 18.1501C4 19.5087 5.10139 20.6101 6.46001 20.6101Z",strokeWidth:1.5,strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"})),re=()=>{const[i,o]=n.useState(!1),r=()=>{o(!0)},s=()=>{o(!1)};return t.jsxs(Zt,{children:[t.jsx(Rt,{children:t.jsx(ne,{})}),t.jsx(Vt,{onClick:r,children:t.jsx(Yt,{children:t.jsx(oe,{style:{stroke:i?"#E3FFA8":"#B6B6B6"}})})}),t.jsxs(Kt,{children:[t.jsx(m,{}),t.jsx(f,{})]}),t.jsx(Nt,{children:t.jsx(Ut,{})}),i&&t.jsx(qt,{isModalOpen:i,children:t.jsx(ee,{onCloseButtonClick:s})})]})},se=e.div`
  background: var(--color-primary-black-2);
`,ae=e.div`
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
`,de=()=>{const i=C(L);return t.jsxs(t.Fragment,{children:[t.jsx(se,{children:i?t.jsx(re,{}):t.jsx(H,{})}),t.jsx(ae,{children:t.jsx(n.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:t.jsx(M,{})})})]})};export{de as default};
