import{e as n,b as r,j as e}from"./index-c661fa22.js";import{n as a}from"./emotion-styled.browser.esm-680ce7da.js";const o=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`,c=a.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,s=a.button`
  border: none;
  background-color: transparent;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,i={testState:!1},f=n({name:"testSlice",initialState:i,reducers:{makeTrueState(t){t.testState=!0},makeFalseState(t){t.testState=!1}}}),{makeFalseState:l,makeTrueState:p}=f.actions;f.reducer;const S=()=>{const t=r();return e.jsxs(o,{children:[e.jsx(c,{children:"404"}),e.jsx(s,{onClick:()=>t(p()),children:"TrueState"}),e.jsx(s,{onClick:()=>t(l()),children:"FalseState"})]})};export{S as default};
