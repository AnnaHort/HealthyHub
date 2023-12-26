import{u as i,L as o}from"./index-0ae709f2.js";const n=i.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 40px 60px;
    max-width: 491px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 1440px) {
    margin-top: 52px;
    margin-bottom: 52px;
  }
`,r=i.div`
  display: flex;
  flex-direction: column;
`,e=i.label`
  color: var(--color-primary-white);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-bottom: 12px;
  font-family: Poppins;
`,a=i.input`
  max-width: 300px;
  border-radius: 12px;
  border: 1px solid var(--color-primary-grey);
  background: var(--color-primary-black-2);
  padding: 8px 10px;
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  &::placeholder {
    color: var(--color-primary-white);
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.43%;
  }
  @media (min-width: 834px) {
    min-width: 212px;
  }
`,p=i.div`
  display: flex;
  align-items: center;
`,s=i.div`
  margin-right: 12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
`,l=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,f=i.svg`
  margin-right: 6px;
  width: 16px;
  height: 16px;
`,m=i.label`
  color: var(--color-primary-white);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  font-family: Poppins;
`,d=i.h3`
  color: var(--color-primary-white);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-bottom: 12px;
  font-family: Poppins;
`,c=i.div`
  display: flex;
  gap: 16px;
`,x=i.input`
  opacity: 0;
  position: absolute;
`,h=i.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,g=i.label`
  padding-left: 14px;
  font-family: Poppins;
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
    width: 12px;
    height: 12px;
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
    width: 6px;
    height: 6px;
    background: #e3ffa8;
    border-radius: 50%;
    opacity: 0;
    transition: 0.2s ease-in;
  }
  input[type='radio']:checked + &::after {
    opacity: 1;
  }
`,w=i.div`
  position: relative;
  display: flex;
`,b=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (min-width: 834px) {
    flex-direction: row;
    gap: 22px;
    align-items: center;
  }
`,y=i.button`
  border-radius: 12px;
  background: var(--color-primary-green-lite);
  border: none;
  padding: 8px 10px;
  color: var(--color-primary-black-2);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  font-family: Poppins;
  @media (min-width: 834px) {
    width: 212px;
  }
`,u=i(o)`
  text-align: center;
  color: var(--color-primary-grey);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  @media (min-width: 834px) {
    width: 212px;
  }
`;export{n as U,r as a,e as b,a as c,p as d,s as e,l as f,f as g,m as h,d as i,c as j,w as k,x as l,g as m,h as n,b as o,y as p,u as q};
