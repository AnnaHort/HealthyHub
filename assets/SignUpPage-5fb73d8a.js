import{h as g,i as h,j as i,S as T,I as D,R as L,m as V,n as U,F as u,o as W,p as v,E as j,B as O,q as Q,t as J,v as K,s as e,w,x as b,y as G,b as X,r as s,k as Z,z as _,Q as S}from"./index-fd07ddf2.js";const ii={name:"",email:"",password:""},ei=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,ti=g().shape({name:h().required("Name is required"),email:h().matches(ei,"Invalid email").required("Email is required"),password:h().min(6,"Password must be at least 6 characters").required("Password is required")}),ni=({onSubmit:o,onNext:a})=>i.jsxs(T,{children:[i.jsx(D,{src:L,alt:"Responsive Image"}),i.jsxs("div",{children:[i.jsx(V,{children:"Sign up"}),i.jsx(U,{children:"You need to register to use the service"}),i.jsx(u,{initialValues:ii,validationSchema:ti,onSubmit:(t,{setSubmitting:n})=>{o(t),a(),n(!1)},children:({errors:t,touched:n})=>i.jsxs(W,{autoComplete:"off",children:[i.jsxs("label",{htmlFor:"name",children:[i.jsx(v,{name:"name",placeholder:"Name"}),t.name&&n.name?i.jsx(j,{children:t.name}):null]}),i.jsxs("label",{htmlFor:"email",children:[i.jsx(v,{name:"email",type:"email",placeholder:"E-mail"}),t.email&&n.email?i.jsx(j,{children:t.email}):null]}),i.jsxs("label",{htmlFor:"password",children:[i.jsx(v,{name:"password",type:"password",placeholder:"Password"}),t.password&&n.password?i.jsx(j,{children:t.password}):null]}),i.jsx(O,{type:"submit",children:"Next"}),i.jsxs(Q,{children:[i.jsx(J,{children:"Do you already have an account?"}),i.jsx(K,{to:"/signin",children:"Sign in"})]})]})})]})]}),ai=e.div`
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
`,oi=e.img`
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
`,ri=e(w)`
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
`,li=e.h2`
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
`,di=e.p`
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
`,pi=e.button`
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
`,mi=e.button`
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
`,k=e.li`
  display: flex;
  gap: 8px;
`,B=e(b)`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  opacity: 0;
`,F=e.label`
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
`,xi=e.div`
  color: #e74a3b;
  margin-bottom: 20px;
`,hi={goal:""},ci=g({goal:h().required("Choose one of the options").oneOf(["Lose Fat","Maintain","Gain Muscle"])}),gi=({onNext:o,onBack:a,onSubmit:t})=>i.jsxs(ai,{children:[i.jsx(oi,{alt:"Goal Image",src:"/src/components/YourGoal/img/IllustrationGoals-min.svg"}),i.jsx(u,{initialValues:hi,validationSchema:ci,onSubmit:(n,{setSubmitting:l})=>{t(n),o(),l(!1)},children:({errors:n})=>i.jsxs(ri,{children:[i.jsx(li,{children:"Your goal"}),i.jsx(di,{children:"Choose a goal so that we can help you effectively"}),i.jsxs(si,{children:[i.jsxs(k,{children:[i.jsx(B,{type:"radio",id:"loseFat",name:"goal",value:"Lose Fat"}),i.jsx(F,{htmlFor:"loseFat",children:"Lose Fat"})]}),i.jsxs(k,{children:[i.jsx(B,{type:"radio",id:"maintain",name:"goal",value:"Maintain"}),i.jsx(F,{htmlFor:"maintain",children:"Maintain"})]}),i.jsxs(k,{children:[i.jsx(B,{type:"radio",id:"gainMuscle",name:"goal",value:"Gain Muscle"}),i.jsx(F,{htmlFor:"gainMuscle",children:"Gain Muscle"})]})]}),i.jsx(xi,{children:n.goal}),i.jsx(pi,{type:"submit",children:"Next"}),i.jsx(mi,{type:"button",onClick:a,children:"Back"})]})})]}),ui=e.div`
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
`,fi=e.img`
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
`,yi=e.h2`
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
`,wi=e.p`
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
`;const bi=e(w)`
  @media (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1440px) {
    margin-left: 0;
    margin-right: 0;
  }
`,vi=e.div`
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
`,P=e.p`
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
`,Si=e(b)`
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
`,ki=e.button`
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
`,Bi=e.button`
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
`,Fi=e.div`
  color: #e74a3b;
  margin-bottom: 20px;
`,Gi=e.div`
  color: #e74a3b;
  margin-bottom: 20px;
`,zi="/HealthyHub/assets/gender-and-age-mobile-541c31ba.png",Pi="/HealthyHub/assets/gender-and-age-tablet-99eb88e0.png",Ai="/HealthyHub/assets/gender-and-age-desktop-cc0787a2.png",Ci=e.div`
  background-color: var(--color-primary-black);
  padding: 24px 10px;
  @media (min-width: 834px) {
    padding-top: 40px;
  }
  @media (min-width: 1024px) {
    display: flex;
  }
`,Ri=e.img`
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
`,Ii=e.div`
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
`,Ei=e.h2`
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
`,Mi=e.p`
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
`,Yi=e(w)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`,qi=e.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;e.li`
  gap: 8px;
  display: flex;
  align-items: center;
`;const p=e.div`
  display: flex;
  position: relative;
`,m=e(b)`
  opacity: 0;
`,x=e.label`
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
`;const $i=e.button`
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
`,Hi=e.button`
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
`,Ni=e.div`
  color: #e74a3b;
  margin-bottom: 20px;
`,Ti={gender:"",age:""},Di=g().shape({gender:h().required("Select gender").oneOf(["male","female"]),age:G().required("Specify age").integer("Age must be an integer").min(1,"Minimum age is 1 year").max(100,"Maximum age is 100 years")}),Li=({onNext:o,onBack:a,onSubmit:t})=>i.jsxs(ui,{children:[i.jsx(fi,{src:zi,srcSet:`${Pi} 834w, ${Ai} 1440w`,sizes:"(max-width: 833px) 100vw, (min-width: 834px) 50vw",alt:"Responsive Image"}),i.jsxs("div",{children:[i.jsx(yi,{children:"Select gender, Age"}),i.jsx(wi,{children:"Choose a goal so that we can help you effectively"}),i.jsx(u,{initialValues:Ti,validationSchema:Di,onSubmit:(n,{setSubmitting:l})=>{t(n),o(),l(!1)},children:({errors:n})=>i.jsxs(bi,{children:[i.jsx(P,{children:"Gender"}),i.jsxs(vi,{children:[i.jsxs(p,{children:[i.jsx(m,{type:"radio",id:"male",name:"gender",value:"male"}),i.jsx(x,{style:{width:"120px",textAlign:"start"},htmlFor:"male",children:"Male"})]}),i.jsxs(p,{children:[i.jsx(m,{type:"radio",id:"female",name:"gender",value:"female"}),i.jsx(x,{htmlFor:"female",children:"Female"})]})]}),i.jsx(Fi,{children:n.gender}),i.jsxs("label",{htmlFor:"age",children:[i.jsx(P,{children:"Your age"}),i.jsx(ji,{children:i.jsx(Si,{type:"number",id:"age",name:"age",placeholder:"Enter your age"})})]}),i.jsx(Gi,{children:n.age}),i.jsx(ki,{type:"submit",children:"Next"}),i.jsx(Bi,{onClick:a,children:"Back"})]})})]})]}),Vi=({onNext:o,onBack:a,onSubmit:t})=>i.jsx("div",{children:i.jsx(Li,{onBack:a,onNext:o,onSubmit:t})}),Ui=e.div`
display: flex;
flex-direction: column;
`,A=e.label`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: var(--color-primary-white);
  margin-top: 24px;
  margin-bottom: 12px;
`,Wi=e(w)`
  display: flex;
  flex-direction: column;
`,C=e(b)`
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
`,Oi=e.button`
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
`,Qi=e.button`
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
`,Ji=e.div`
  color: #e74a3b;
  margin-bottom: 20px;
  margin-top: 20px;
`,Ki=e.div`
  color: #e74a3b;
  margin-bottom: 20px;
  margin-top: 20px;
`,Xi={height:"",weight:""},Zi=g().shape({weight:G().required("Weight is required").min(1,"Weight should be greater than 0").positive("Weight should be a positive number"),height:G().required("Height is required").min(1,"Height should be greater than 0").positive("Height should be a positive number")}),_i=({onBack:o,onNext:a,onSubmit:t})=>i.jsx(Ui,{children:i.jsx(u,{initialValues:Xi,validationSchema:Zi,onSubmit:(n,{setSubmitting:l})=>{t(n),a(),l(!1)},children:({errors:n})=>i.jsxs(Wi,{children:[i.jsx(A,{htmlFor:"height",children:"Height"}),i.jsx(C,{name:"height",type:"number",id:"height",placeholder:"Enter your height"}),i.jsx(Ki,{children:n.height}),i.jsx(A,{htmlFor:"weight",children:"Weight"}),i.jsx(C,{name:"weight",type:"number",id:"weight",placeholder:"Enter your weight"}),i.jsx(Ji,{children:n.weight}),i.jsxs("div",{children:[i.jsx(Oi,{type:"submit",children:"Next"}),i.jsx(Qi,{type:"button",onClick:o,children:"Back"})]})]})})}),ie="/HealthyHub/assets/symbol-defs-2eb7c4d7.svg#icon-body-parameters",ee=e.svg`
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
`,te=()=>i.jsx("div",{children:i.jsx(ee,{width:"300",height:"300",children:i.jsx("use",{xlinkHref:`${ie}#icon-body-parameters`,width:"100%",height:"100%"})})}),ne=e.div`
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
`,ae=e.h2`
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
`,oe=e.h3`
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
`,re=()=>i.jsxs(ne,{children:[i.jsx(ae,{children:"Body parameters"}),i.jsx(oe,{children:"Enter your parameters for correct performance tracking"})]}),le=e.div`
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
`,de=e.div`
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
`,pe=({onNext:o,onBack:a,onSubmit:t})=>i.jsx(le,{children:i.jsxs(de,{children:[i.jsx(te,{}),i.jsxs(se,{children:[i.jsx(re,{}),i.jsx(_i,{onBack:a,onNext:o,onSubmit:t})]})]})}),me={activity:""},xe=g({activity:h().required("Сhoose your activity level").oneOf(["low 1.2-1.3","light 1.4-1.5","average 1.6-1.7","high 1.8-1.9","hard 2.0"])}),he=({onBack:o,onSubmit:a})=>i.jsxs(Ci,{children:[i.jsx(Ri,{src:"/src/img/YourActivityImg/illustrationActivity-min.svg"}),i.jsxs(Ii,{children:[i.jsx(Ei,{children:"Your Activity"}),i.jsx(Mi,{children:"To correctly calculate calorie and water intake"}),i.jsx(u,{initialValues:me,validationSchema:xe,onSubmit:(t,{setSubmitting:n})=>{a(t),n(!1)},children:({errors:t})=>i.jsxs(Yi,{action:"#",children:[i.jsxs(qi,{children:[i.jsxs(p,{children:[i.jsx(m,{type:"radio",id:"low 1.2-1.3",value:"low 1.2-1.3",name:"activity"}),i.jsx(x,{htmlFor:"low 1.2-1.3",children:"1.2-1.3 - if you do not have physical activity and sedentary work"})]}),i.jsxs(p,{children:[i.jsx(m,{type:"radio",id:"light 1.4-1.5",value:"light 1.4-1.5",name:"activity"}),i.jsx(x,{htmlFor:"light 1.4-1.5",children:"1.4-1.5 - if you do short runs or light gymnastics 1-3 times a week"})]}),i.jsxs(p,{children:[i.jsx(m,{type:"radio",id:"average 1.6-1.7",value:"average 1.6-1.7",name:"activity"}),i.jsx(x,{htmlFor:"average 1.6-1.7",children:"1.6-1.7 - if you play sports with average loads 3-5 times a week"})]}),i.jsxs(p,{children:[i.jsx(m,{type:"radio",id:"high 1.8-1.9",value:"high 1.8-1.9",name:"activity"}),i.jsx(x,{htmlFor:"high 1.8-1.9",children:"1.8-1.9 - if you train fully 6-7 times a week"})]}),i.jsxs(p,{children:[i.jsx(m,{type:"radio",id:"hard 2.0",value:"hard 2.0",name:"activity"}),i.jsx(x,{htmlFor:"hard 2.0",children:"2.0 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]})]}),i.jsx(Ni,{children:t.activity}),i.jsx($i,{type:"submit",children:"Sign Up"}),i.jsx(Hi,{type:"button",onClick:o,children:"Back"})]})})]})]}),ce=()=>{const o=X(),[a,t]=s.useState(1),[,n]=s.useState({name:"",email:"",password:""}),[,l]=s.useState(""),[R,I]=s.useState(""),[E,M]=s.useState({age:"",gender:""}),[Y,q]=s.useState({height:"",weight:""}),[$,H]=s.useState("");console.log(R,"local state dataGoal"),console.log(E,"local state dataAgeGender"),console.log(Y,"local state dataBodyParams"),console.log($,"local state dataActivity");const N=async d=>{var z;try{const r=await o(_(d));console.log("Response from Redux:",r),r.type==="auth/register/fulfilled"&&(S.success("Successful registration"),n(d))}catch(r){console.error("Registration Error:",r.message),((z=r==null?void 0:r.response)==null?void 0:z.status)===500?S.error("Invalid Email"):S.error("Registration failed. Please try again later."),l(r)}},f=d=>{I(d),M(d),q(d),H(d)},c=()=>{t(a+1)},y=()=>{t(a-1)};return i.jsxs("div",{children:[a===1&&i.jsx(ni,{onSubmit:N,onNext:c}),a===2&&i.jsx(gi,{onNext:c,onBack:y,onSubmit:f}),a===3&&i.jsx(Vi,{onNext:c,onBack:y,onSubmit:f}),a===4&&i.jsx(pe,{onNext:c,onBack:y,onSubmit:f}),a===5&&i.jsx(he,{onNext:c,onBack:y,onSubmit:f}),i.jsx(Z,{})]})},ue=()=>i.jsx("div",{children:i.jsx(ce,{})});export{ue as default};
