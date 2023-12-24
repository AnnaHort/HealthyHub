import{m as g,n as h,j as i,S as H,I as N,R as L,o as V,p as U,F as u,q as W,t as v,E as S,B as D,v as O,w as Q,x as J,s as e,y as b,z as j,A as P,c as K,r as x,k as X,C as Z,Q as k}from"./index-f9160db9.js";const _={name:"",email:"",password:""},ii=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,ei=g().shape({name:h().required("Name is required"),email:h().matches(ii,"Invalid email").required("Email is required"),password:h().min(6,"Password must be at least 6 characters").required("Password is required")}),ti=({onSubmit:r,onNext:a})=>i.jsxs(H,{children:[i.jsx(N,{src:L,alt:"Responsive Image"}),i.jsxs("div",{children:[i.jsx(V,{children:"Sign up"}),i.jsx(U,{children:"You need to register to use the service"}),i.jsx(u,{initialValues:_,validationSchema:ei,onSubmit:(t,{setSubmitting:n})=>{r(t),a(),n(!1)},children:({errors:t,touched:n})=>i.jsxs(W,{autoComplete:"off",children:[i.jsxs("label",{htmlFor:"name",children:[i.jsx(v,{name:"name",placeholder:"Name"}),t.name&&n.name?i.jsx(S,{children:t.name}):null]}),i.jsxs("label",{htmlFor:"email",children:[i.jsx(v,{name:"email",type:"email",placeholder:"E-mail"}),t.email&&n.email?i.jsx(S,{children:t.email}):null]}),i.jsxs("label",{htmlFor:"password",children:[i.jsx(v,{name:"password",type:"password",placeholder:"Password"}),t.password&&n.password?i.jsx(S,{children:t.password}):null]}),i.jsx(D,{type:"submit",children:"Next"}),i.jsxs(O,{children:[i.jsx(Q,{children:"Do you already have an account?"}),i.jsx(J,{to:"/signin",children:"Sign in"})]})]})})]})]}),ni=e.div`
  background-color: var(--color-primary-black);
  min-width: 320px;
  height: 744px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 834px) {
    min-width: 834px;
    height: 1194px;
  }

  @media (min-width: 1024px) {
    max-width: 1440px;
    height: 800px;
    flex-direction: row;
    gap: 104px;
  }
`,ai=e.img`
  display: flex;
  width: 300px;
  height: 290px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-top: 24px;
  margin-bottom: 24px;

  @media (min-width: 834px) {
    display: flex;
    width: 380px;
    height: 368px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin-top: 40px;
    margin-bottom: 60px;
  }

  @media (min-width: 1024px) {
    display: flex;
    width: 592px;
    height: 574px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin-left: 140px;
  }
`,oi=e(b)`
  display: flex;
  flex-direction: column;

  @media (min-width: 834px) {
    width: 404px;
    align-items: center;
  }

  @media (min-width: 1024px) {
    display: flex;
    align-items: flex-start;
  }
`,ri=e.h2`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  padding-bottom: 16px;
  margin: 0;

  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    margin: 0;
  }
`,li=e.p`
  color: var(--color-primary-grey);
  padding-bottom: 24px;
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;

  @media (min-width: 834px) {
    flex-direction: row;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.45;
  }

  @media (min-width: 1024px) {
    text-align: start;
    flex-direction: row;
    font-size: 22px;
  }
`,si=e.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 24px;

  @media (min-width: 834px) {
    width: 360px;
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    display: flex;
    width: 192px;
    flex-direction: column;
  }
`,di=e.button`
  width: 100%;
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
    width: 360px;
  }

  @media (min-width: 1024px) {
    width: 192px;
  }
`,pi=e.button`
  width: 100%;
  color: var(--color-primary-grey);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  margin: 0;
  display: block;

  @media (min-width: 834px) {
    width: 192px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    width: 192px;
    margin: 0;
    display: flex;
    justify-content: center;
  }
`,B=e.li`
  display: flex;
  gap: 8px;
`,F=e(j)`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  opacity: 0;
`,G=e.label`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  position: relative;
  padding-left: 16px;
  cursor: pointer;
  color: var(--color-primary-white);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 0;
    width: 16px;
    height: 16px;
    border: 1px solid #b6b6b6;
    background: #0f0f0f;
    border-radius: 50%;
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: #e3ffa8;
    border-radius: 50%;
    opacity: 0;
    transition: 0.2s ease-in;
  }

  input[type='radio']:checked + &::after {
    opacity: 1;
  }
`,mi=e.div`
  color: #e74a3b;
  margin-bottom: 20px;
`,xi={goal:""},hi=g({goal:h().required("Choose one of the options").oneOf(["Lose fat","Maintain","Gain Muscle"])}),ci=({onNext:r,onBack:a,onSubmit:t})=>i.jsxs(ni,{children:[i.jsx(ai,{alt:"Goal Image",src:"/src/components/YourGoal/img/IllustrationGoals-min.svg"}),i.jsx(u,{initialValues:xi,validationSchema:hi,onSubmit:(n,{setSubmitting:s})=>{t(n),r(),s(!1)},children:({errors:n})=>i.jsxs(oi,{children:[i.jsx(ri,{children:"Your goal"}),i.jsx(li,{children:"Choose a goal so that we can help you effectively"}),i.jsxs(si,{children:[i.jsxs(B,{children:[i.jsx(F,{type:"radio",id:"loseFat",name:"goal",value:"Lose fat"}),i.jsx(G,{htmlFor:"loseFat",children:"Lose Fat"})]}),i.jsxs(B,{children:[i.jsx(F,{type:"radio",id:"maintain",name:"goal",value:"Maintain"}),i.jsx(G,{htmlFor:"maintain",children:"Maintain"})]}),i.jsxs(B,{children:[i.jsx(F,{type:"radio",id:"gainMuscle",name:"goal",value:"Gain Muscle"}),i.jsx(G,{htmlFor:"gainMuscle",children:"Gain Muscle"})]})]}),i.jsx(mi,{children:n.goal}),i.jsx(di,{type:"submit",children:"Next"}),i.jsx(pi,{type:"button",onClick:a,children:"Back"})]})})]}),gi=e.div`
  background-color: var(--color-primary-black);
  width: 320px;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 10px;
  padding-right: 10px;
  @media (min-width: 834px) {
    width: 492px;
    padding-top: 40px;
    padding-bottom: 228px;
    padding-left: 24px;
    padding-right: 24px;
    text-align: center;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    display: flex;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 90px;
    padding-left: 150px;
    padding-right: 150px;
    gap: 104px;
    text-align: start;
  }
`,ui=e.img`
  width: 300px;
  height: 296px;
  margin-bottom: 10px;
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
`,fi=e.h2`
  color: var(--color-primary-white);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;
  padding-left: 10px;
  padding-right: 10px;
  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 16px;
  }
  @media (min-width: 1440px) {
    text-align: left;
    margin-top: 80px;
  }
`,yi=e.p`
  color: var(--color-primary-grey);
  font-size: 18px;
  line-height: 1.33;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 24px;
  font-weight: 400;
  line-height: 1.33;
  @media (min-width: 834px) {
    text-align: center;
    font-size: 22px;
    line-height: 1.45;
    padding-left: 0;
    padding-right: 0;

    @media (min-width: 1440px) {
      text-align: left;
      padding-left: 0;
      padding-right: 72px;
    }
  }
`;e.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 12px;
  @media (min-width: 834px) {
    width: 444px;
    text-align: left;
    margin-left: 32px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 12px;
    margin-left: 0;
  }
`;const wi=e(b)`
  @media (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1440px) {
    margin-left: 0;
    margin-right: 0;
  }
`,bi=e.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  @media (min-width: 834px) {
    width: 380px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1440px) {
    display: flex;
    width: 380px;
    flex-direction: column;
    margin-right: 0;
    margin-left: 0;
  }
`,M=e.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  margin-bottom: 12px;
  @media (min-width: 834px) {
    width: 380px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1440px) {
    width: auto;
    margin-bottom: 12px;
  }
`,ji=e.div`
  background: transparent;
  position: relative;
  border: 1px solid var(--color-primary-green-lite);
  border-radius: 12px;
  margin-bottom: 40px;
  @media (min-width: 834px) {
    width: 380px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1440px) {
    max-width: 212px;
    margin-left: 0;
    margin-right: 0;
  }
`,vi=e(j)`
  color: var(--color-primary-grey);
  font-family: Poppins;
  line-height: 1.429;
  background: transparent;
  border-color: transparent;
  outline: none;
  padding: 8px 10px;
  width: 300px;
  :hover {
    color: var(--color-primary-white);
  }
  @media (min-width: 834px) {
    width: 380px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1440px) {
    width: 212px;
    background: transparent;
    border-color: transparent;
  }
`,Si=e.button`
  border-radius: 12px;
  border: none;
  outline: none;
  background: var(--color-primary-green-lite);
  padding: 8px 10px;
  margin-bottom: 20px;
  color: var(--bg-primary);
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  line-height: 1.43;
  width: 300px;
  @media (min-width: 834px) {
    width: 380px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 22px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 20px;
    width: 212px;
  }
`,ki=e.button`
  color: var(--color-primary-grey);
  background-color: var(--color-primary-black);
  width: 192px;
  margin: 0 auto;
  display: block;
  border: none;
  @media (min-width: 834px) {
    max-width: 380px;
  }
  @media (min-width: 1440px) {
    margin: 0;
    width: 212px;
  }
`,Bi=e.div`
  color: #e74a3b;
  margin-bottom: 20px;
`,Fi=e.div`
  color: #e74a3b;
  margin-bottom: 20px;
`,Gi="/HealthyHub/assets/gender-and-age-mobile-541c31ba.png",Pi="/HealthyHub/assets/gender-and-age-tablet-99eb88e0.png",zi="/HealthyHub/assets/gender-and-age-desktop-cc0787a2.png",Ri=e.div`
  background-color: var(--color-primary-black);
  padding: 24px 10px;
  @media (min-width: 834px) {
    padding-top: 40px;
  }
  @media (min-width: 1024px) {
    display: flex;
  }
`,Ci=e.img`
  margin-bottom: 24px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 834px) {
    width: 380px;
    height: 384px;
    margin-bottom: 60px;
  }
  @media (min-width: 1024px) {
    width: 592px;
    height: 598px;
    margin-right: 35px;
  }
  @media (min-width: 1440px) {
    margin-right: 104px;
  }
`,Ai=e.div`
  max-width: 458px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1024px) {
    max-width: 308px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 80px;
  }
`,Mi=e.h2`
  color: var(--color-primary-white);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;
  @media (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    line-height: 1.2;
  }
`,Ii=e.p`
  color: var(--color-primary-grey);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 24px;
  @media (min-width: 834px) {
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    max-width: 300px;
    font-size: 22px;
    font-weight: 400;
    line-height: 1.46;
  }
  @media (min-width: 1024px) {
    text-align: start;
  }
`,Ei=e(b)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`,Yi=e.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;e.li`
  gap: 8px;
  display: flex;
  align-items: center;
`;const d=e.div`
  display: flex;
  position: relative;
`,p=e(j)`
  opacity: 0;
`,m=e.label`
  position: relative;
  padding-left: 16px;
  cursor: pointer;
  color: var(--color-primary-white);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 0;
    width: 16px;
    height: 16px;
    border: 1px solid #b6b6b6;
    background: #0f0f0f;
    border-radius: 50%;
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: #e3ffa8;
    border-radius: 50%;
    opacity: 0;
    transition: 0.2s ease-in;
  }

  input[type='radio']:checked + &::after {
    opacity: 1;
  }
`;e.label`
  color: var(--color-primary-white);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;const qi=e.button`
  color: var(--color-primary-black-2);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  border-radius: 12px;
  background: var(--color-primary-green-lite);
  outline: none;
  border: none;
  width: 100%;
  padding: 8px 10px;
  margin-bottom: 16px;
  @media (min-width: 834px) {
    max-width: 360px;
    margin-bottom: 20px;
  }
  @media (min-width: 1024px) {
    max-width: 212px;
  }
`,Ti=e.button`
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 500;
  outline: none;
  border: none;
  width: 100%;
  padding: 8px 10px;
  background-color: transparent;
  @media (min-width: 1024px) {
    max-width: 212px;
  }
`,$i=e.div`
  color: #e74a3b;
  margin-bottom: 20px;
`,Hi={gender:"",age:""},Ni=g().shape({gender:h().required("Select gender").oneOf(["Male","Female"]),age:P().required("Specify age").integer("Age must be an integer").min(1,"Minimum age is 1 year").max(100,"Maximum age is 100 years")}),Li=({onNext:r,onBack:a,onSubmit:t})=>i.jsxs(gi,{children:[i.jsx(ui,{src:Gi,srcSet:`${Pi} 834w, ${zi} 1440w`,sizes:"(max-width: 833px) 100vw, (min-width: 834px) 50vw",alt:"Responsive Image"}),i.jsxs("div",{children:[i.jsx(fi,{children:"Select gender, Age"}),i.jsx(yi,{children:"Choose a goal so that we can help you effectively"}),i.jsx(u,{initialValues:Hi,validationSchema:Ni,onSubmit:(n,{setSubmitting:s})=>{t(n),r(),s(!1)},children:({errors:n})=>i.jsxs(wi,{children:[i.jsx(M,{children:"Gender"}),i.jsxs(bi,{children:[i.jsxs(d,{children:[i.jsx(p,{type:"radio",id:"Male",name:"gender",value:"Male"}),i.jsx(m,{style:{width:"120px",textAlign:"start"},htmlFor:"Male",children:"Male"})]}),i.jsxs(d,{children:[i.jsx(p,{type:"radio",id:"Female",name:"gender",value:"Female"}),i.jsx(m,{htmlFor:"Female",children:"Female"})]})]}),i.jsx(Bi,{children:n.gender}),i.jsxs("label",{htmlFor:"age",children:[i.jsx(M,{children:"Your age"}),i.jsx(ji,{children:i.jsx(vi,{type:"number",id:"age",name:"age",placeholder:"Enter your age"})})]}),i.jsx(Fi,{children:n.age}),i.jsx(Si,{type:"submit",children:"Next"}),i.jsx(ki,{onClick:a,children:"Back"})]})})]})]}),Vi=({onNext:r,onBack:a,onSubmit:t})=>i.jsx("div",{children:i.jsx(Li,{onBack:a,onNext:r,onSubmit:t})}),Ui=e.div`
display: flex;
flex-direction: column;
`,I=e.label`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: var(--color-primary-white);
  margin-top: 24px;
  margin-bottom: 12px;
`,Wi=e(b)`
  display: flex;
  flex-direction: column;
`,E=e(j)`
  width: 100%;
  height: 36px;
  padding-left: 10px;
  border-radius: 12px;
  background-color: inherit;
  color: var(--color-primary-grey);
  border: 1px solid var(--color-primary-green-lite);

  @media (min-width: 1440px) {
    max-width: 212px;
  }
`,Di=e.button`
  width: 100%;
  height: 36px;
  background-color: var(--color-primary-green-lite);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: var(--color-primary-black-2);
  border-radius: 12px;
  margin-top: 40px;

  @media (min-width: 1440px) {
    max-width: 212px;
  }
`,Oi=e.button`
  width: 100%;
  height: 36px;
  background-color: inherit;
  border: none;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--color-primary-grey);
  border-radius: 12px;
  margin-top: 12px;

  @media (min-width: 1440px) {
    max-width: 212px;
  }
`,Qi=e.div`
  color: #e74a3b;
  margin-bottom: 20px;
  margin-top: 20px;
`,Ji=e.div`
  color: #e74a3b;
  margin-bottom: 20px;
  margin-top: 20px;
`,Ki={height:"",weight:""},Xi=g().shape({weight:P().required("Weight is required").min(1,"Weight should be greater than 0").positive("Weight should be a positive number"),height:P().required("Height is required").min(1,"Height should be greater than 0").positive("Height should be a positive number")}),Zi=({onBack:r,onNext:a,onSubmit:t})=>i.jsx(Ui,{children:i.jsx(u,{initialValues:Ki,validationSchema:Xi,onSubmit:(n,{setSubmitting:s})=>{t(n),a(),s(!1)},children:({errors:n})=>i.jsxs(Wi,{children:[i.jsx(I,{htmlFor:"height",children:"Height"}),i.jsx(E,{name:"height",type:"number",id:"height",placeholder:"Enter your height"}),i.jsx(Ji,{children:n.height}),i.jsx(I,{htmlFor:"weight",children:"Weight"}),i.jsx(E,{name:"weight",type:"number",id:"weight",placeholder:"Enter your weight"}),i.jsx(Qi,{children:n.weight}),i.jsxs("div",{children:[i.jsx(Di,{type:"submit",children:"Next"}),i.jsx(Oi,{type:"button",onClick:r,children:"Back"})]})]})})}),_i="/HealthyHub/assets/symbol-defs-2eb7c4d7.svg#icon-body-parameters",ie=e.svg`
  @media (min-width: 834px) {
    width: 380px;
    height: 376px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1024px){
   margin-top: 90px;
  }

  @media (min-width: 1440px) {
    width: 590px;
    height: 588px;
  }
`,ee=()=>i.jsx("div",{children:i.jsx(ie,{width:"300",height:"300",children:i.jsx("use",{xlinkHref:`${_i}#icon-body-parameters`,width:"100%",height:"100%"})})}),te=e.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 834px) {
    max-width: 444px;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1440px) {
   
  }
`,ne=e.h2`
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  color: var(--color-primary-white);

  margin-top: 24px;

  @media (min-width: 834px) and (max-width: 1439px) {
    display: flex;
    justify-content: center;
    font-size: 30px;
    line-height: 36px;
    margin-top: 60px;
  }

  @media (min-width: 1440px) {
    margin-top: 80px;
  }
`,ae=e.h3`
  max-width: 290px;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: var(--color-primary-grey);

  margin-top: 16px;

  @media (min-width: 834px) and (max-width: 1439px) {
    max-width: unset;
    text-align: center;
    font-size: 22px;
    line-height: 32px;
  }

  @media (min-width: 1440px) {
    max-width: 444px;
    display: flex;
    flex-wrap: wrap;
  }
`,oe=()=>i.jsxs(te,{children:[i.jsx(ne,{children:"Body parameters"}),i.jsx(ae,{children:"Enter your parameters for correct performance tracking"})]}),re=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 10px 40px 10px;
  background-color: var(--color-primary-black);

  @media (min-width: 834px) {
    padding-top: 40px;
  }

  @media (min-width: 1440px) {
    padding: 40px 150px;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
`,le=e.div`
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
`,se=e.div`
  @media (min-width: 1024px) {
  margin-left: 104px;
  }
`,de=({onNext:r,onBack:a,onSubmit:t})=>i.jsx(re,{children:i.jsxs(le,{children:[i.jsx(ee,{}),i.jsxs(se,{children:[i.jsx(oe,{}),i.jsx(Zi,{onBack:a,onNext:r,onSubmit:t})]})]})}),pe={activity:""},me=g({activity:h().required("Сhoose your activity level").oneOf(["1.25","1.45","1.65","1.85","2"])}),xe=({onBack:r,onSubmit:a})=>i.jsxs(Ri,{children:[i.jsx(Ci,{src:"/src/img/YourActivityImg/illustrationActivity-min.svg"}),i.jsxs(Ai,{children:[i.jsx(Mi,{children:"Your Activity"}),i.jsx(Ii,{children:"To correctly calculate calorie and water intake"}),i.jsx(u,{initialValues:pe,validationSchema:me,onSubmit:(t,{setSubmitting:n})=>{a(t),n(!1)},children:({errors:t})=>i.jsxs(Ei,{action:"#",children:[i.jsxs(Yi,{children:[i.jsxs(d,{children:[i.jsx(p,{type:"radio",id:"low 1.2-1.3",value:"1.25",name:"activity"}),i.jsx(m,{htmlFor:"low 1.2-1.3",children:"1.2-1.3 - if you do not have physical activity and sedentary work"})]}),i.jsxs(d,{children:[i.jsx(p,{type:"radio",id:"light 1.4-1.5",value:"1.45",name:"activity"}),i.jsx(m,{htmlFor:"light 1.4-1.5",children:"1.4-1.5 - if you do short runs or light gymnastics 1-3 times a week"})]}),i.jsxs(d,{children:[i.jsx(p,{type:"radio",id:"average 1.6-1.7",value:"1.65",name:"activity"}),i.jsx(m,{htmlFor:"average 1.6-1.7",children:"1.6-1.7 - if you play sports with average loads 3-5 times a week"})]}),i.jsxs(d,{children:[i.jsx(p,{type:"radio",id:"high 1.8-1.9",value:"1.85",name:"activity"}),i.jsx(m,{htmlFor:"high 1.8-1.9",children:"1.8-1.9 - if you train fully 6-7 times a week"})]}),i.jsxs(d,{children:[i.jsx(p,{type:"radio",id:"hard 2.0",value:"2",name:"activity"}),i.jsx(m,{htmlFor:"hard 2.0",children:"2.0 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]})]}),i.jsx($i,{children:t.activity}),i.jsx(qi,{type:"submit",children:"Sign Up"}),i.jsx(Ti,{type:"button",onClick:r,children:"Back"})]})})]})]}),he=()=>{const r=K(),[a,t]=x.useState(1),[n,s]=x.useState({name:"",email:"",password:""}),[,z]=x.useState(""),[R,Y]=x.useState(""),[C,q]=x.useState({age:"",gender:""}),[A,T]=x.useState({height:"",weight:""}),$=async l=>{try{const o={name:n.name,password:n.password,email:n.email,goal:R,gender:C.gender,age:C.age,height:A.height,weight:A.weight,userActivity:l.activity},c=await r(Z(o));console.log("Response from Redux:",c),c.type==="auth/register/fulfilled"&&k.success("Successful registration"),c.type==="auth/register/rejected"&&(c.payload==="Request failed with status code 500"?(z("Invalid Email"),k.error("Invalid Email")):(z(c.payload||"Registration failed. Please try again later."),k.error("Registration failed. Please try again later.")))}catch(o){console.error("Registration Error:",o.message)}},f=l=>{s(o=>({...o,name:l.name||o.name,email:l.email||o.email,password:l.password||o.password})),Y(l.goal||R),q(o=>({...o,age:l.age||o.age,gender:l.gender||o.gender})),T(o=>({...o,height:l.height||o.height,weight:l.weight||o.weight}))},y=()=>{t(a+1)},w=()=>{t(a-1)};return i.jsxs("div",{children:[a===1&&i.jsx(ti,{onSubmit:f,onNext:y}),a===2&&i.jsx(ci,{onNext:y,onBack:w,onSubmit:f}),a===3&&i.jsx(Vi,{onNext:y,onBack:w,onSubmit:f}),a===4&&i.jsx(de,{onNext:y,onBack:w,onSubmit:f}),a===5&&i.jsx(xe,{onBack:w,onSubmit:$}),i.jsx(X,{})]})},ge=()=>i.jsx("div",{children:i.jsx(he,{})});export{ge as default};
