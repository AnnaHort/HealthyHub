import{u as T,a as jt,r as v,j as f,b as Ot,c as He,B as At,C as Pt,D as We}from"./index-c49791f3.js";import{_ as g,n as Mt,T as Dt}from"./emotion-styled.browser.esm-cbc5e95f.js";import{C as at,a as it,L as st,P as lt,d as ct,e as dt,p as ut,c as ft,f as pt}from"./index-417bb539.js";function O(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}const Bt=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 23px;
`,_t=T.div`
  display: flex;
  align-items: center;
`,zt=T.svg`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`,Et=T.use``,Ht=T.div`
  position: relative;
`,Wt=T.button`
  position: relative;
  color: var(--color-primary-white);
  background-color: inherit;
  text-align: start;
  padding: 0;
  width: 120px;
  border: none;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media (min-width: 834px) {
    font-size: 30px;
  }
  @media (min-width: 1440px) {
  }
`,Ft=T.svg`
  position: absolute;
  top: 15%;
  width: 24px;
  height: 24px;
  margin-left: 10px;
  margin-right: 10px;
  fill: ${({$isDropdownOpen:e})=>e?"red":"blue"};
  transform-origin: center center;
  transform: ${({$isDropdownOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
`,It=T.use`
  fill: ${({$isDropdownOpen:e})=>e?"red":"blue"};
`,Lt=T.ul`
  position: absolute;
  top: 40px;
  z-index: 200;
  display: flex;
  width: 212px;
  max-height: 144px;
  flex-direction: column;
  background-color: #0f0f0f;
  padding-top: 8px;
  padding-bottom: 8px;
  overflow-y: scroll;
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
  border-radius: 12px;
  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  scrollbar-color: #333 transparent;
  scrollbar-width: thin;
`,Kt=T.li`
  color: var(--color-primary-grey);
  display: flex;
  justify-content: start;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  padding-left: 16px;
  padding-top: 4px;
  padding-bottom: 4px;

  &:hover {
    color: #e3ffa8;
    background-color: rgba(255, 255, 255, 0.03);
  }
`,Nt=T.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;

  @media (min-width: 834px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media (min-width: 1440px) {
  }
`,Fe="/HealthyHub/assets/symbol-defs-968d137a.svg",Ut=({selectedMonth:e,setMonth:t})=>{const n=["January","February","March","April","May","June","July","August","September","October","November","December"],r=jt(),[o,a]=v.useState(!1),i=()=>{a(!o)},s=l=>{t(l+1),a(!1)};return f.jsxs(Bt,{children:[f.jsxs(_t,{children:[f.jsx(zt,{onClick:()=>r("/main"),children:f.jsx(Et,{xlinkHref:`${Fe}#icon-arrow-right`})}),f.jsxs(Ht,{children:[f.jsxs(Wt,{onClick:i,children:["Months",f.jsx(Ft,{$isDropdownOpen:o,children:f.jsx(It,{xlinkHref:`${Fe}#icon-arrow-down`})})]}),o&&f.jsx(Lt,{children:n.map((l,d)=>f.jsx(Kt,{onClick:()=>s(d),children:l},l))})]})]}),f.jsx(Nt,{children:n[e-1]})]})};function gt(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=gt(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function N(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=gt(e))&&(r&&(r+=" "),r+=t);return r}function F(e){return e!==null&&typeof e=="object"&&e.constructor===Object}function mt(e){if(!F(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=mt(e[n])}),t}function z(e,t,n={clone:!0}){const r=n.clone?g({},e):e;return F(e)&&F(t)&&Object.keys(t).forEach(o=>{o!=="__proto__"&&(F(t[o])&&o in e&&F(e[o])?r[o]=z(e[o],t[o],n):n.clone?r[o]=F(t[o])?mt(t[o]):t[o]:r[o]=t[o])}),r}function ne(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}function E(e){if(typeof e!="string")throw new Error(ne(7));return e.charAt(0).toUpperCase()+e.slice(1)}function ht(e,t){const n=g({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=g({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const o=e[r]||{},a=t[r];n[r]={},!a||!Object.keys(a)?n[r]=o:!o||!Object.keys(o)?n[r]=a:(n[r]=g({},a),Object.keys(o).forEach(i=>{n[r][i]=ht(o[i],a[i])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function U(e,t,n=void 0){const r={};return Object.keys(e).forEach(o=>{r[o]=e[o].reduce((a,i)=>{if(i){const s=t(i);s!==""&&a.push(s),n&&n[i]&&a.push(n[i])}return a},[]).join(" ")}),r}const Ie=e=>e,Gt=()=>{let e=Ie;return{configure(t){e=t},generate(t){return e(t)},reset(){e=Ie}}},Jt=Gt(),Yt=Jt,Xt={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function I(e,t,n="Mui"){const r=Xt[t];return r?`${n}-${r}`:`${Yt.generate(e)}-${t}`}function G(e,t,n="Mui"){const r={};return t.forEach(o=>{r[o]=I(e,o,n)}),r}const qt=v.createContext(),yt=qt;/**
 * @mui/styled-engine v5.15.1
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Vt(e,t){return Mt(e,t)}const Zt=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},Qt=["values","unit","step"],en=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>g({},n,{[r.key]:r.val}),{})};function tn(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,o=O(e,Qt),a=en(t),i=Object.keys(a);function s(c){return`@media (min-width:${typeof t[c]=="number"?t[c]:c}${n})`}function l(c){return`@media (max-width:${(typeof t[c]=="number"?t[c]:c)-r/100}${n})`}function d(c,p){const m=i.indexOf(p);return`@media (min-width:${typeof t[c]=="number"?t[c]:c}${n}) and (max-width:${(m!==-1&&typeof t[i[m]]=="number"?t[i[m]]:p)-r/100}${n})`}function h(c){return i.indexOf(c)+1<i.length?d(c,i[i.indexOf(c)+1]):s(c)}function y(c){const p=i.indexOf(c);return p===0?s(i[1]):p===i.length-1?l(i[p]):d(c,i[i.indexOf(c)+1]).replace("@media","@media not all and")}return g({keys:i,values:a,up:s,down:l,between:d,only:h,not:y,unit:n},o)}const nn={borderRadius:4},rn=nn;function se(e,t){return t?z(e,t,{clone:!1}):e}const je={xs:0,sm:600,md:900,lg:1200,xl:1536},Le={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${je[e]}px)`};function W(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const a=r.breakpoints||Le;return t.reduce((i,s,l)=>(i[a.up(a.keys[l])]=n(t[l]),i),{})}if(typeof t=="object"){const a=r.breakpoints||Le;return Object.keys(t).reduce((i,s)=>{if(Object.keys(a.values||je).indexOf(s)!==-1){const l=a.up(s);i[l]=n(t[s],s)}else{const l=s;i[l]=t[l]}return i},{})}return n(t)}function on(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,o)=>{const a=e.up(o);return r[a]={},r},{}))||{}}function an(e,t){return e.reduce((n,r)=>{const o=n[r];return(!o||Object.keys(o).length===0)&&delete n[r],n},t)}function be(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((o,a)=>o&&o[a]?o[a]:null,e);if(r!=null)return r}return t.split(".").reduce((r,o)=>r&&r[o]!=null?r[o]:null,e)}function me(e,t,n,r=n){let o;return typeof e=="function"?o=e(n):Array.isArray(e)?o=e[n]||r:o=be(e,n)||r,t&&(o=t(o,r,e)),o}function R(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:o}=e,a=i=>{if(i[t]==null)return null;const s=i[t],l=i.theme,d=be(l,r)||{};return W(i,s,y=>{let c=me(d,o,y);return y===c&&typeof y=="string"&&(c=me(d,o,`${t}${y==="default"?"":E(y)}`,y)),n===!1?c:{[n]:c}})};return a.propTypes={},a.filterProps=[t],a}function sn(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const ln={m:"margin",p:"padding"},cn={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Ke={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},dn=sn(e=>{if(e.length>2)if(Ke[e])e=Ke[e];else return[e];const[t,n]=e.split(""),r=ln[t],o=cn[n]||"";return Array.isArray(o)?o.map(a=>r+a):[r+o]}),Oe=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],Ae=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Oe,...Ae];function ce(e,t,n,r){var o;const a=(o=be(e,t,!1))!=null?o:n;return typeof a=="number"?i=>typeof i=="string"?i:a*i:Array.isArray(a)?i=>typeof i=="string"?i:a[i]:typeof a=="function"?a:()=>{}}function bt(e){return ce(e,"spacing",8)}function de(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function un(e,t){return n=>e.reduce((r,o)=>(r[o]=de(t,n),r),{})}function fn(e,t,n,r){if(t.indexOf(n)===-1)return null;const o=dn(n),a=un(o,r),i=e[n];return W(e,i,a)}function xt(e,t){const n=bt(e.theme);return Object.keys(e).map(r=>fn(e,t,r,n)).reduce(se,{})}function k(e){return xt(e,Oe)}k.propTypes={};k.filterProps=Oe;function S(e){return xt(e,Ae)}S.propTypes={};S.filterProps=Ae;function pn(e=8){if(e.mui)return e;const t=bt({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(a=>{const i=t(a);return typeof i=="number"?`${i}px`:i}).join(" ");return n.mui=!0,n}function xe(...e){const t=e.reduce((r,o)=>(o.filterProps.forEach(a=>{r[a]=o}),r),{}),n=r=>Object.keys(r).reduce((o,a)=>t[a]?se(o,t[a](r)):o,{});return n.propTypes={},n.filterProps=e.reduce((r,o)=>r.concat(o.filterProps),[]),n}function M(e){return typeof e!="number"?e:`${e}px solid`}function D(e,t){return R({prop:e,themeKey:"borders",transform:t})}const gn=D("border",M),mn=D("borderTop",M),hn=D("borderRight",M),yn=D("borderBottom",M),bn=D("borderLeft",M),xn=D("borderColor"),vn=D("borderTopColor"),wn=D("borderRightColor"),Cn=D("borderBottomColor"),$n=D("borderLeftColor"),Tn=D("outline",M),kn=D("outlineColor"),ve=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=ce(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:de(t,r)});return W(e,e.borderRadius,n)}return null};ve.propTypes={};ve.filterProps=["borderRadius"];xe(gn,mn,hn,yn,bn,xn,vn,wn,Cn,$n,ve,Tn,kn);const we=e=>{if(e.gap!==void 0&&e.gap!==null){const t=ce(e.theme,"spacing",8),n=r=>({gap:de(t,r)});return W(e,e.gap,n)}return null};we.propTypes={};we.filterProps=["gap"];const Ce=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=ce(e.theme,"spacing",8),n=r=>({columnGap:de(t,r)});return W(e,e.columnGap,n)}return null};Ce.propTypes={};Ce.filterProps=["columnGap"];const $e=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=ce(e.theme,"spacing",8),n=r=>({rowGap:de(t,r)});return W(e,e.rowGap,n)}return null};$e.propTypes={};$e.filterProps=["rowGap"];const Sn=R({prop:"gridColumn"}),Rn=R({prop:"gridRow"}),jn=R({prop:"gridAutoFlow"}),On=R({prop:"gridAutoColumns"}),An=R({prop:"gridAutoRows"}),Pn=R({prop:"gridTemplateColumns"}),Mn=R({prop:"gridTemplateRows"}),Dn=R({prop:"gridTemplateAreas"}),Bn=R({prop:"gridArea"});xe(we,Ce,$e,Sn,Rn,jn,On,An,Pn,Mn,Dn,Bn);function te(e,t){return t==="grey"?t:e}const _n=R({prop:"color",themeKey:"palette",transform:te}),zn=R({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:te}),En=R({prop:"backgroundColor",themeKey:"palette",transform:te});xe(_n,zn,En);function P(e){return e<=1&&e!==0?`${e*100}%`:e}const Hn=R({prop:"width",transform:P}),Pe=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,o;const a=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||je[n];return a?((o=e.theme)==null||(o=o.breakpoints)==null?void 0:o.unit)!=="px"?{maxWidth:`${a}${e.theme.breakpoints.unit}`}:{maxWidth:a}:{maxWidth:P(n)}};return W(e,e.maxWidth,t)}return null};Pe.filterProps=["maxWidth"];const Wn=R({prop:"minWidth",transform:P}),Fn=R({prop:"height",transform:P}),In=R({prop:"maxHeight",transform:P}),Ln=R({prop:"minHeight",transform:P});R({prop:"size",cssProperty:"width",transform:P});R({prop:"size",cssProperty:"height",transform:P});const Kn=R({prop:"boxSizing"});xe(Hn,Pe,Wn,Fn,In,Ln,Kn);const Nn={border:{themeKey:"borders",transform:M},borderTop:{themeKey:"borders",transform:M},borderRight:{themeKey:"borders",transform:M},borderBottom:{themeKey:"borders",transform:M},borderLeft:{themeKey:"borders",transform:M},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:M},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:ve},color:{themeKey:"palette",transform:te},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:te},backgroundColor:{themeKey:"palette",transform:te},p:{style:S},pt:{style:S},pr:{style:S},pb:{style:S},pl:{style:S},px:{style:S},py:{style:S},padding:{style:S},paddingTop:{style:S},paddingRight:{style:S},paddingBottom:{style:S},paddingLeft:{style:S},paddingX:{style:S},paddingY:{style:S},paddingInline:{style:S},paddingInlineStart:{style:S},paddingInlineEnd:{style:S},paddingBlock:{style:S},paddingBlockStart:{style:S},paddingBlockEnd:{style:S},m:{style:k},mt:{style:k},mr:{style:k},mb:{style:k},ml:{style:k},mx:{style:k},my:{style:k},margin:{style:k},marginTop:{style:k},marginRight:{style:k},marginBottom:{style:k},marginLeft:{style:k},marginX:{style:k},marginY:{style:k},marginInline:{style:k},marginInlineStart:{style:k},marginInlineEnd:{style:k},marginBlock:{style:k},marginBlockStart:{style:k},marginBlockEnd:{style:k},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:we},rowGap:{style:$e},columnGap:{style:Ce},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:P},maxWidth:{style:Pe},minWidth:{transform:P},height:{transform:P},maxHeight:{transform:P},minHeight:{transform:P},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},Me=Nn;function Un(...e){const t=e.reduce((r,o)=>r.concat(Object.keys(o)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function Gn(e,t){return typeof e=="function"?e(t):e}function Jn(){function e(n,r,o,a){const i={[n]:r,theme:o},s=a[n];if(!s)return{[n]:r};const{cssProperty:l=n,themeKey:d,transform:h,style:y}=s;if(r==null)return null;if(d==="typography"&&r==="inherit")return{[n]:r};const c=be(o,d)||{};return y?y(i):W(i,r,m=>{let u=me(c,h,m);return m===u&&typeof m=="string"&&(u=me(c,h,`${n}${m==="default"?"":E(m)}`,m)),l===!1?u:{[l]:u}})}function t(n){var r;const{sx:o,theme:a={}}=n||{};if(!o)return null;const i=(r=a.unstable_sxConfig)!=null?r:Me;function s(l){let d=l;if(typeof l=="function")d=l(a);else if(typeof l!="object")return l;if(!d)return null;const h=on(a.breakpoints),y=Object.keys(h);let c=h;return Object.keys(d).forEach(p=>{const m=Gn(d[p],a);if(m!=null)if(typeof m=="object")if(i[p])c=se(c,e(p,m,a,i));else{const u=W({theme:a},m,x=>({[p]:x}));Un(u,m)?c[p]=t({sx:m,theme:a}):c=se(c,u)}else c=se(c,e(p,m,a,i))}),an(y,c)}return Array.isArray(o)?o.map(s):s(o)}return t}const vt=Jn();vt.filterProps=["sx"];const De=vt,Yn=["breakpoints","palette","spacing","shape"];function Be(e={},...t){const{breakpoints:n={},palette:r={},spacing:o,shape:a={}}=e,i=O(e,Yn),s=tn(n),l=pn(o);let d=z({breakpoints:s,direction:"ltr",components:{},palette:g({mode:"light"},r),spacing:l,shape:g({},rn,a)},i);return d=t.reduce((h,y)=>z(h,y),d),d.unstable_sxConfig=g({},Me,i==null?void 0:i.unstable_sxConfig),d.unstable_sx=function(y){return De({sx:y,theme:this})},d}function Xn(e){return Object.keys(e).length===0}function qn(e=null){const t=v.useContext(Dt);return!t||Xn(t)?e:t}const Vn=Be();function Zn(e=Vn){return qn(e)}const Qn=["variant"];function Ne(e){return e.length===0}function wt(e){const{variant:t}=e,n=O(e,Qn);let r=t||"";return Object.keys(n).sort().forEach(o=>{o==="color"?r+=Ne(r)?e[o]:E(e[o]):r+=`${Ne(r)?o:E(o)}${E(e[o].toString())}`}),r}const er=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function tr(e){return Object.keys(e).length===0}function nr(e){return typeof e=="string"&&e.charCodeAt(0)>96}const rr=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,he=e=>{const t={};return e&&e.forEach(n=>{const r=wt(n.props);t[r]=n.style}),t},or=(e,t)=>{let n=[];return t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants),he(n)},ye=(e,t,n)=>{const{ownerState:r={}}=e,o=[];return n&&n.forEach(a=>{let i=!0;Object.keys(a.props).forEach(s=>{r[s]!==a.props[s]&&e[s]!==a.props[s]&&(i=!1)}),i&&o.push(t[wt(a.props)])}),o},ar=(e,t,n,r)=>{var o;const a=n==null||(o=n.components)==null||(o=o[r])==null?void 0:o.variants;return ye(e,t,a)};function pe(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const ir=Be(),sr=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function ge({defaultTheme:e,theme:t,themeId:n}){return tr(t)?e:t[n]||t}function lr(e){return e?(t,n)=>n[e]:null}const Ue=({styledArg:e,props:t,defaultTheme:n,themeId:r})=>{const o=e(g({},t,{theme:ge(g({},t,{defaultTheme:n,themeId:r}))}));let a;if(o&&o.variants&&(a=o.variants,delete o.variants),a){const i=ye(t,he(a),a);return[o,...i]}return o};function Ct(e={}){const{themeId:t,defaultTheme:n=ir,rootShouldForwardProp:r=pe,slotShouldForwardProp:o=pe}=e,a=i=>De(g({},i,{theme:ge(g({},i,{defaultTheme:n,themeId:t}))}));return a.__mui_systemSx=!0,(i,s={})=>{Zt(i,j=>j.filter(_=>!(_!=null&&_.__mui_systemSx)));const{name:l,slot:d,skipVariantsResolver:h,skipSx:y,overridesResolver:c=lr(sr(d))}=s,p=O(s,er),m=h!==void 0?h:d&&d!=="Root"&&d!=="root"||!1,u=y||!1;let x,b=pe;d==="Root"||d==="root"?b=r:d?b=o:nr(i)&&(b=void 0);const C=Vt(i,g({shouldForwardProp:b,label:x},p)),B=(j,..._)=>{const oe=_?_.map(w=>{if(typeof w=="function"&&w.__emotion_real!==w)return A=>Ue({styledArg:w,props:A,defaultTheme:n,themeId:t});if(F(w)){let A=w,H;return w&&w.variants&&(H=w.variants,delete A.variants,A=ae=>{let L=w;return ye(ae,he(H),H).forEach(Rt=>{L=z(L,Rt)}),L}),A}return w}):[];let X=j;if(F(j)){let w;j&&j.variants&&(w=j.variants,delete X.variants,X=A=>{let H=j;return ye(A,he(w),w).forEach(L=>{H=z(H,L)}),H})}else typeof j=="function"&&j.__emotion_real!==j&&(X=w=>Ue({styledArg:j,props:w,defaultTheme:n,themeId:t}));l&&c&&oe.push(w=>{const A=ge(g({},w,{defaultTheme:n,themeId:t})),H=rr(l,A);if(H){const ae={};return Object.entries(H).forEach(([L,fe])=>{ae[L]=typeof fe=="function"?fe(g({},w,{theme:A})):fe}),c(w,ae)}return null}),l&&!m&&oe.push(w=>{const A=ge(g({},w,{defaultTheme:n,themeId:t}));return ar(w,or(l,A),A,l)}),u||oe.push(a);const ze=oe.length-_.length;if(Array.isArray(j)&&ze>0){const w=new Array(ze).fill("");X=[...j,...w],X.raw=[...j.raw,...w]}const Ee=C(X,...oe);return i.muiName&&(Ee.muiName=i.muiName),Ee};return C.withConfig&&(B.withConfig=C.withConfig),B}}const cr=Ct(),ue=cr;function dr(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:ht(t.components[n].defaultProps,r)}function ur({props:e,name:t,defaultTheme:n,themeId:r}){let o=Zn(n);return r&&(o=o[r]||o),dr({theme:o,name:t,props:e})}function _e(e,t=0,n=1){return Math.min(Math.max(t,e),n)}function fr(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function K(e){if(e.type)return e;if(e.charAt(0)==="#")return K(fr(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(ne(9,e));let r=e.substring(t+1,e.length-1),o;if(n==="color"){if(r=r.split(" "),o=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o)===-1)throw new Error(ne(10,o))}else r=r.split(",");return r=r.map(a=>parseFloat(a)),{type:n,values:r,colorSpace:o}}function Te(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((o,a)=>a<3?parseInt(o,10):o):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function pr(e){e=K(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,a=r*Math.min(o,1-o),i=(d,h=(d+n/30)%12)=>o-a*Math.max(Math.min(h-3,9-h,1),-1);let s="rgb";const l=[Math.round(i(0)*255),Math.round(i(8)*255),Math.round(i(4)*255)];return e.type==="hsla"&&(s+="a",l.push(t[3])),Te({type:s,values:l})}function Ge(e){e=K(e);let t=e.type==="hsl"||e.type==="hsla"?K(pr(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function gr(e,t){const n=Ge(e),r=Ge(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function re(e,t){return e=K(e),t=_e(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,Te(e)}function $t(e,t){if(e=K(e),t=_e(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return Te(e)}function Tt(e,t){if(e=K(e),t=_e(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return Te(e)}function mr(e,t){return g({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}const hr={black:"#000",white:"#fff"},le=hr,yr={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},br=yr,xr={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},q=xr,vr={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},V=vr,wr={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},ie=wr,Cr={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Z=Cr,$r={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Q=$r,Tr={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},ee=Tr,kr=["mode","contrastThreshold","tonalOffset"],Je={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:le.white,default:le.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Se={text:{primary:le.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:le.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Ye(e,t,n,r){const o=r.light||r,a=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=Tt(e.main,o):t==="dark"&&(e.dark=$t(e.main,a)))}function Sr(e="light"){return e==="dark"?{main:Z[200],light:Z[50],dark:Z[400]}:{main:Z[700],light:Z[400],dark:Z[800]}}function Rr(e="light"){return e==="dark"?{main:q[200],light:q[50],dark:q[400]}:{main:q[500],light:q[300],dark:q[700]}}function jr(e="light"){return e==="dark"?{main:V[500],light:V[300],dark:V[700]}:{main:V[700],light:V[400],dark:V[800]}}function Or(e="light"){return e==="dark"?{main:Q[400],light:Q[300],dark:Q[700]}:{main:Q[700],light:Q[500],dark:Q[900]}}function Ar(e="light"){return e==="dark"?{main:ee[400],light:ee[300],dark:ee[700]}:{main:ee[800],light:ee[500],dark:ee[900]}}function Pr(e="light"){return e==="dark"?{main:ie[400],light:ie[300],dark:ie[700]}:{main:"#ed6c02",light:ie[500],dark:ie[900]}}function Mr(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,o=O(e,kr),a=e.primary||Sr(t),i=e.secondary||Rr(t),s=e.error||jr(t),l=e.info||Or(t),d=e.success||Ar(t),h=e.warning||Pr(t);function y(u){return gr(u,Se.text.primary)>=n?Se.text.primary:Je.text.primary}const c=({color:u,name:x,mainShade:b=500,lightShade:C=300,darkShade:B=700})=>{if(u=g({},u),!u.main&&u[b]&&(u.main=u[b]),!u.hasOwnProperty("main"))throw new Error(ne(11,x?` (${x})`:"",b));if(typeof u.main!="string")throw new Error(ne(12,x?` (${x})`:"",JSON.stringify(u.main)));return Ye(u,"light",C,r),Ye(u,"dark",B,r),u.contrastText||(u.contrastText=y(u.main)),u},p={dark:Se,light:Je};return z(g({common:g({},le),mode:t,primary:c({color:a,name:"primary"}),secondary:c({color:i,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:c({color:s,name:"error"}),warning:c({color:h,name:"warning"}),info:c({color:l,name:"info"}),success:c({color:d,name:"success"}),grey:br,contrastThreshold:n,getContrastText:y,augmentColor:c,tonalOffset:r},p[t]),o)}const Dr=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function Br(e){return Math.round(e*1e5)/1e5}const Xe={textTransform:"uppercase"},qe='"Roboto", "Helvetica", "Arial", sans-serif';function _r(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=qe,fontSize:o=14,fontWeightLight:a=300,fontWeightRegular:i=400,fontWeightMedium:s=500,fontWeightBold:l=700,htmlFontSize:d=16,allVariants:h,pxToRem:y}=n,c=O(n,Dr),p=o/14,m=y||(b=>`${b/d*p}rem`),u=(b,C,B,j,_)=>g({fontFamily:r,fontWeight:b,fontSize:m(C),lineHeight:B},r===qe?{letterSpacing:`${Br(j/C)}em`}:{},_,h),x={h1:u(a,96,1.167,-1.5),h2:u(a,60,1.2,-.5),h3:u(i,48,1.167,0),h4:u(i,34,1.235,.25),h5:u(i,24,1.334,0),h6:u(s,20,1.6,.15),subtitle1:u(i,16,1.75,.15),subtitle2:u(s,14,1.57,.1),body1:u(i,16,1.5,.15),body2:u(i,14,1.43,.15),button:u(s,14,1.75,.4,Xe),caption:u(i,12,1.66,.4),overline:u(i,12,2.66,1,Xe),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return z(g({htmlFontSize:d,pxToRem:m,fontFamily:r,fontSize:o,fontWeightLight:a,fontWeightRegular:i,fontWeightMedium:s,fontWeightBold:l},x),c,{clone:!1})}const zr=.2,Er=.14,Hr=.12;function $(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${zr})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Er})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Hr})`].join(",")}const Wr=["none",$(0,2,1,-1,0,1,1,0,0,1,3,0),$(0,3,1,-2,0,2,2,0,0,1,5,0),$(0,3,3,-2,0,3,4,0,0,1,8,0),$(0,2,4,-1,0,4,5,0,0,1,10,0),$(0,3,5,-1,0,5,8,0,0,1,14,0),$(0,3,5,-1,0,6,10,0,0,1,18,0),$(0,4,5,-2,0,7,10,1,0,2,16,1),$(0,5,5,-3,0,8,10,1,0,3,14,2),$(0,5,6,-3,0,9,12,1,0,3,16,2),$(0,6,6,-3,0,10,14,1,0,4,18,3),$(0,6,7,-4,0,11,15,1,0,4,20,3),$(0,7,8,-4,0,12,17,2,0,5,22,4),$(0,7,8,-4,0,13,19,2,0,5,24,4),$(0,7,9,-4,0,14,21,2,0,5,26,4),$(0,8,9,-5,0,15,22,2,0,6,28,5),$(0,8,10,-5,0,16,24,2,0,6,30,5),$(0,8,11,-5,0,17,26,2,0,6,32,5),$(0,9,11,-5,0,18,28,2,0,7,34,6),$(0,9,12,-6,0,19,29,2,0,7,36,6),$(0,10,13,-6,0,20,31,3,0,8,38,7),$(0,10,13,-6,0,21,33,3,0,8,40,7),$(0,10,14,-6,0,22,35,3,0,8,42,7),$(0,11,14,-7,0,23,36,3,0,9,44,8),$(0,11,15,-7,0,24,38,3,0,9,46,8)],Fr=Wr,Ir=["duration","easing","delay"],Lr={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Kr={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Ve(e){return`${Math.round(e)}ms`}function Nr(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function Ur(e){const t=g({},Lr,e.easing),n=g({},Kr,e.duration);return g({getAutoHeightDuration:Nr,create:(o=["all"],a={})=>{const{duration:i=n.standard,easing:s=t.easeInOut,delay:l=0}=a;return O(a,Ir),(Array.isArray(o)?o:[o]).map(d=>`${d} ${typeof i=="string"?i:Ve(i)} ${s} ${typeof l=="string"?l:Ve(l)}`).join(",")}},e,{easing:t,duration:n})}const Gr={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},Jr=Gr,Yr=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function Xr(e={},...t){const{mixins:n={},palette:r={},transitions:o={},typography:a={}}=e,i=O(e,Yr);if(e.vars)throw new Error(ne(18));const s=Mr(r),l=Be(e);let d=z(l,{mixins:mr(l.breakpoints,n),palette:s,shadows:Fr.slice(),typography:_r(s,a),transitions:Ur(o),zIndex:g({},Jr)});return d=z(d,i),d=t.reduce((h,y)=>z(h,y),d),d.unstable_sxConfig=g({},Me,i==null?void 0:i.unstable_sxConfig),d.unstable_sx=function(y){return De({sx:y,theme:this})},d}const qr=Xr(),kt=qr,St="$$material";function J({props:e,name:t}){return ur({props:e,name:t,defaultTheme:kt,themeId:St})}const Vr=e=>pe(e)&&e!=="classes",Zr=Ct({themeId:St,defaultTheme:kt,rootShouldForwardProp:Vr}),Y=Zr;function Qr(e){return I("MuiTable",e)}G("MuiTable",["root","stickyHeader"]);const eo=["className","component","padding","size","stickyHeader"],to=e=>{const{classes:t,stickyHeader:n}=e;return U({root:["root",n&&"stickyHeader"]},Qr,t)},no=Y("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>g({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":g({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})),Ze="table",ro=v.forwardRef(function(t,n){const r=J({props:t,name:"MuiTable"}),{className:o,component:a=Ze,padding:i="normal",size:s="medium",stickyHeader:l=!1}=r,d=O(r,eo),h=g({},r,{component:a,padding:i,size:s,stickyHeader:l}),y=to(h),c=v.useMemo(()=>({padding:i,size:s,stickyHeader:l}),[i,s,l]);return f.jsx(yt.Provider,{value:c,children:f.jsx(no,g({as:a,role:a===Ze?null:"table",ref:n,className:N(y.root,o),ownerState:h},d))})}),oo=ro,ao=v.createContext(),ke=ao;function io(e){return I("MuiTableBody",e)}G("MuiTableBody",["root"]);const so=["className","component"],lo=e=>{const{classes:t}=e;return U({root:["root"]},io,t)},co=Y("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),uo={variant:"body"},Qe="tbody",fo=v.forwardRef(function(t,n){const r=J({props:t,name:"MuiTableBody"}),{className:o,component:a=Qe}=r,i=O(r,so),s=g({},r,{component:a}),l=lo(s);return f.jsx(ke.Provider,{value:uo,children:f.jsx(co,g({className:N(l.root,o),as:a,ref:n,role:a===Qe?null:"rowgroup",ownerState:s},i))})}),po=fo;function go(e){return I("MuiTableCell",e)}const mo=G("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),ho=mo,yo=["align","className","component","padding","scope","size","sortDirection","variant"],bo=e=>{const{classes:t,variant:n,align:r,padding:o,size:a,stickyHeader:i}=e,s={root:["root",n,i&&"stickyHeader",r!=="inherit"&&`align${E(r)}`,o!=="normal"&&`padding${E(o)}`,`size${E(a)}`]};return U(s,go,t)},xo=Y("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`size${E(n.size)}`],n.padding!=="normal"&&t[`padding${E(n.padding)}`],n.align!=="inherit"&&t[`align${E(n.align)}`],n.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>g({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?Tt(re(e.palette.divider,1),.88):$t(re(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},t.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},t.variant==="body"&&{color:(e.vars||e).palette.text.primary},t.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},t.size==="small"&&{padding:"6px 16px",[`&.${ho.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},t.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},t.padding==="none"&&{padding:0},t.align==="left"&&{textAlign:"left"},t.align==="center"&&{textAlign:"center"},t.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},t.align==="justify"&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),vo=v.forwardRef(function(t,n){const r=J({props:t,name:"MuiTableCell"}),{align:o="inherit",className:a,component:i,padding:s,scope:l,size:d,sortDirection:h,variant:y}=r,c=O(r,yo),p=v.useContext(yt),m=v.useContext(ke),u=m&&m.variant==="head";let x;i?x=i:x=u?"th":"td";let b=l;x==="td"?b=void 0:!b&&u&&(b="col");const C=y||m&&m.variant,B=g({},r,{align:o,component:x,padding:s||(p&&p.padding?p.padding:"normal"),size:d||(p&&p.size?p.size:"medium"),sortDirection:h,stickyHeader:C==="head"&&p&&p.stickyHeader,variant:C}),j=bo(B);let _=null;return h&&(_=h==="asc"?"ascending":"descending"),f.jsx(xo,g({as:x,ref:n,className:N(j.root,a),"aria-sort":_,scope:b,ownerState:B},c))}),Re=vo;function wo(e){return I("MuiTableContainer",e)}G("MuiTableContainer",["root"]);const Co=["className","component"],$o=e=>{const{classes:t}=e;return U({root:["root"]},wo,t)},To=Y("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),ko=v.forwardRef(function(t,n){const r=J({props:t,name:"MuiTableContainer"}),{className:o,component:a="div"}=r,i=O(r,Co),s=g({},r,{component:a}),l=$o(s);return f.jsx(To,g({ref:n,as:a,className:N(l.root,o),ownerState:s},i))}),So=ko;function Ro(e){return I("MuiTableHead",e)}G("MuiTableHead",["root"]);const jo=["className","component"],Oo=e=>{const{classes:t}=e;return U({root:["root"]},Ro,t)},Ao=Y("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),Po={variant:"head"},et="thead",Mo=v.forwardRef(function(t,n){const r=J({props:t,name:"MuiTableHead"}),{className:o,component:a=et}=r,i=O(r,jo),s=g({},r,{component:a}),l=Oo(s);return f.jsx(ke.Provider,{value:Po,children:f.jsx(Ao,g({as:a,className:N(l.root,o),ref:n,role:a===et?null:"rowgroup",ownerState:s},i))})}),Do=Mo;function Bo(e){return I("MuiTableRow",e)}const _o=G("MuiTableRow",["root","selected","hover","head","footer"]),tt=_o,zo=["className","component","hover","selected"],Eo=e=>{const{classes:t,selected:n,hover:r,head:o,footer:a}=e;return U({root:["root",n&&"selected",r&&"hover",o&&"head",a&&"footer"]},Bo,t)},Ho=Y("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.head&&t.head,n.footer&&t.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${tt.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${tt.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:re(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:re(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),nt="tr",Wo=v.forwardRef(function(t,n){const r=J({props:t,name:"MuiTableRow"}),{className:o,component:a=nt,hover:i=!1,selected:s=!1}=r,l=O(r,zo),d=v.useContext(ke),h=g({},r,{component:a,hover:i,selected:s,head:d&&d.variant==="head",footer:d&&d.variant==="footer"}),y=Eo(h);return f.jsx(Ho,g({as:a,ref:n,className:N(y.root,o),role:a===nt?null:"row",ownerState:h},l))}),rt=Wo,Fo=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},ot=Fo;function Io(e){return I("MuiPaper",e)}G("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Lo=["className","component","elevation","square","variant"],Ko=e=>{const{square:t,elevation:n,variant:r,classes:o}=e,a={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${n}`]};return U(a,Io,o)},No=Y("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return g({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&g({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${re("#fff",ot(t.elevation))}, ${re("#fff",ot(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),Uo=v.forwardRef(function(t,n){const r=J({props:t,name:"MuiPaper"}),{className:o,component:a="div",elevation:i=1,square:s=!1,variant:l="elevation"}=r,d=O(r,Lo),h=g({},r,{component:a,elevation:i,square:s,variant:l}),y=Ko(h);return f.jsx(No,g({as:a,ownerState:h,className:N(y.root,o),ref:n},d))}),Go=Uo,Jo=ue(So)({marginBottom:"68px",overflowX:"auto","@media (min-width: 834px)":{minWidth:780,marginLeft:"unset"},"@media (min-width: 1440px)":{minWidth:1372}}),Yo=ue(oo)({backgroundColor:"var(--color-primary-black-2)",minWidth:780,"@media (min-width: 834px)":{minWidth:780},"& th, & td":{position:"relative",backgroundClip:"padding-box",color:"var(--color-primary-white)",borderBottom:"1px solid var(--color-primary-black-2)"},"& th":{padding:"0",margin:"0"},"& td":{padding:"0",margin:"0"},"& thead th":{fontFamily:"Poppins",fontSize:"14px",fontWeight:"400",lineHeight:"20px",paddingTop:"24px",paddingLeft:"22px",paddingRight:"20px","@media (min-width: 834px)":{fontSize:"10px",lineHeight:"16px","&:not(:first-of-type)":{paddingLeft:"6px"},"&:not(:last-of-type)":{paddingRight:"0"}},"@media (min-width: 1440px)":{paddingLeft:"21px"},"&:not(:first-of-type)":{paddingLeft:"23px",paddingRight:"41px"},"&:not(:last-of-type)":{paddingRight:"0"}},"& tbody tr:first-of-type td":{fontFamily:"Poppins",fontSize:"10px",fontWeight:"400",lineHeight:"14px",paddingTop:"16px",paddingBottom:"36px",paddingLeft:"24px","@media (min-width: 834px)":{paddingRight:"20px",paddingTop:"10px",paddingBottom:"44px","&:not(:first-of-type)":{paddingLeft:"10px"},"&:not(:last-of-type)":{paddingRight:"0"}},"@media (min-width: 1440px)":{paddingTop:"16px",paddingBottom:"36px",paddingLeft:"44px",paddingRight:"24px"},"&:not(:first-of-type)":{paddingLeft:"29px"},"&:not(:last-of-type)":{paddingRight:"0"}}}),Xo=ue("div")({display:"flex",marginLeft:"10px",marginBottom:"9px",justifyContent:"space-between",alignItems:"center","@media (min-width: 1440px)":{justifyContent:"start"}}),qo=ue("h2")({fontFamily:"Poppins",fontSize:"18px",fontStyle:"normal",fontWeight:"400",lineHeight:"26px",color:"var(--color-primary-white)","@media (min-width: 1440px)":{fontSize:"22px",marginRight:"40px",lineHeight:"32px"}}),Vo=ue("p")({fontFamily:"Poppins",fontSize:"14px",fontStyle:"normal",fontWeight:"400",lineHeight:"20px",color:"var(--color-primary-white)",marginRight:"10px","@media (min-width: 1440px)":{}}),Zo=({data:e,selectedMonths:t})=>f.jsxs("div",{children:[f.jsxs(Xo,{children:[f.jsx(qo,{children:"Weight"}),f.jsx(Vo,{})]}),f.jsx(Jo,{component:Go,children:f.jsxs(Yo,{children:[f.jsx(Do,{children:f.jsx(rt,{children:f.jsx(Re,{align:"center"})})}),f.jsx(po,{children:f.jsxs(rt,{children:[f.jsx(Re,{align:"center"}),f.jsx(Re,{align:"center"})]})})]})})]});at.register(it,st,lt,ct,dt,ut,ft);const Qo=T.div`
  overflow-y: auto;

  @media (min-width: 834px) {
    margin-left: unset;
    overflow-y: unset;
  }

  @media (min-width: 1440px) {
  }
`,ea=T.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 9px;

  @media (min-width: 1440px) {
    margin-top: 0;
  }
`,ta=T.h2`
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  color: var(--color-primary-white);
  margin-right: 40px;
`,na=T.p`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--color-primary-white);
`,ra=T.div`
  display: flex;
  min-width: 676px;
  width: 100%;
  margin: 0 auto;
  border-radius: 12px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  @media (min-width: 834px) {
    min-width: 780px;
    overflow-x: unset;
    overflow-y: unset;
  }

  @media (min-width: 1440px) {
    min-width: 676px;
  }
`,oa=({data:e,selectedMonth:t})=>{const[n,r]=v.useState([]),[o,a]=v.useState(0),[i,s]=v.useState(!0);v.useEffect(()=>{if(!e||!Array.isArray(e)||e.length===0){console.error("Invalid or missing 'data' array"),s(!1),r([]);return}(()=>{const u=new Date(2023,t,0).getDate(),x=Array.from({length:u},(b,C)=>0);try{e.forEach(b=>{if(b.data){const C=Number(b.data.split(",")[0])-1;C>=0&&C<u?x[C]=b.food||0:console.error(`Invalid day index: ${C}`)}else console.error("Missing 'data' property in day object")}),r(x),s(!0)}catch(b){console.error(`Error during rendering days: ${b}`),s(!1),r([])}})()},[e,t]);const l=new Date(2023,t,0).getDate(),d=Array.from({length:l},(p,m)=>m+1);v.useEffect(()=>{if(!e||e.length===0||n.length===0){s(!1),a(0);return}const p=new Date,m=e.filter(u=>{if(!u.data)return console.error("Missing 'data' property in day object"),!1;const[x,b]=u.data.split(", "),C=new Date(2023,h(b),x);return C.getMonth()===p.getMonth()&&C.getFullYear()===p.getFullYear()});if(n.length>0){const u=n.filter(x=>!isNaN(x));if(u.length>0){const b=u.reduce((C,B)=>C+B,0)/u.length;a(Math.floor(b))}else a(0)}s(m.length>0)},[e,n,t]);function h(p){return["January","February","March","April","May","June","July","August","September","October","November","December"].indexOf(p)}const y={responsive:!0,plugins:{legend:{position:!1,display:!1}},scales:{x:{beginAtZero:!0,grid:{display:!0,color:"#292928",borderColor:"#292928"}},y:{position:"left",ticks:{beginAtZero:!0,stepSize:1e3,callback:function(p){return p>=1e3?(p/1e3).toLocaleString()+"K":p}},grid:{display:!0,color:"#292928",borderColor:"#292928"}}},layout:{padding:{left:14,right:31,top:25,bottom:40}}},c={labels:d,datasets:[{label:"Calories",data:n,borderColor:"#e3ffa8",backgroundColor:"#0F0F0F",pointBackgroundColor:"#e3ffa8",borderWidth:1}]};return f.jsxs(Qo,{children:[f.jsxs(ea,{children:[f.jsx(ta,{children:"Calories"}),f.jsx(na,{children:i?`Average value: ${o}`:"No data available"})]}),f.jsx(ra,{children:f.jsx(pt,{options:y,data:c,style:{backgroundColor:"#0F0F0F",borderRadius:"12px"}})})]})};at.register(it,st,lt,ct,dt,ut,ft);const aa=T.div`
  margin-bottom: 40px;
  overflow-x: auto;

  @media (min-width: 834px) {
    margin-left: unset;
    overflow-y: unset;
  }

  @media (min-width: 1440px) {
    margin-bottom: 0;
  }
`,ia=T.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 9px;

  @media (min-width: 834px) {
    margin-top: 40px;
  }

  @media (min-width: 1440px) {
    margin-top: 0;
  }
`,sa=T.h2`
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  color: var(--color-primary-white);
  margin-right: 40px;
`,la=T.p`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--color-primary-white);
`,ca=T.div`
  display: flex;
  min-width: 676px;
  width: 100%;
  margin: 0 auto;
  border-radius: 12px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  @media (min-width: 834px) {
    min-width: 780px;
    overflow-x: unset;
    overflow-y: unset;
  }

  @media (min-width: 1440px) {
    min-width: 676px;
  }
`,da=({data:e,selectedMonth:t})=>{const[n,r]=v.useState([]),[o,a]=v.useState(0),[i,s]=v.useState(!0);v.useEffect(()=>{if(console.log("Entering useEffect for rendering days..."),!e||!Array.isArray(e)||e.length===0){console.error("Invalid or missing 'data' array"),s(!1),r([]);return}(async()=>{const m=new Date(2023,t,0).getDate(),u=Array.from({length:m},(x,b)=>0);try{e.forEach(x=>{if(x.data){const b=Number(x.data.split(",")[0])-1;b>=0&&b<m?u[b]=x.water||0:console.error(`Invalid day index: ${b}`)}else console.error("Missing 'data' property in day object")}),r(u),s(!0)}catch(x){console.error(`Error during rendering days: ${x}`),s(!1),r([])}})()},[e,t]);const l=new Date(2023,t,0).getDate(),d=Array.from({length:l},(c,p)=>p+1);v.useEffect(()=>{if(console.log("Entering useEffect for calculating average water..."),!e||e.length===0||n.length===0){console.error("No data available for the current month"),s(!1),a(0);return}const c=new Date,p=e.filter(m=>{if(!m.data)return console.error("Missing 'data' property in day object"),!1;const[u,x]=m.data.split(", "),b=new Date(2023,h(x),u);return b.getMonth()===c.getMonth()&&b.getFullYear()===c.getFullYear()});if(n.length>0){const m=n.filter(u=>!isNaN(u));if(m.length>0){const x=m.reduce((b,C)=>b+C,0)/m.length;a(Math.floor(x))}else a(0)}s(p.length>0)},[e,n,t]);function h(c){return["January","February","March","April","May","June","July","August","September","October","November","December"].indexOf(c)}const y={responsive:!0,plugins:{legend:{position:!1,display:!1}},scales:{x:{beginAtZero:!0,grid:{display:!0,color:"#292928",borderColor:"#292928"}},y:{position:"left",ticks:{beginAtZero:!0,stepSize:1e3,callback:function(c){return c>=1e3?(c/1e3).toLocaleString()+"K":c}},grid:{display:!0,color:"#292928",borderColor:"#292928"}}},layout:{padding:{left:14,right:31,top:25,bottom:40}}};return f.jsxs(aa,{children:[f.jsxs(ia,{children:[f.jsx(sa,{children:"Water"}),f.jsx(la,{children:i?`Average value: ${o}`:"No data available"})]}),f.jsx(ca,{children:f.jsx(pt,{options:y,data:{labels:d,datasets:[{label:"Water",data:n,borderColor:"#e3ffa8",backgroundColor:"#0F0F0F",pointBackgroundColor:"#e3ffa8",borderWidth:1}]},style:{backgroundColor:"#0F0F0F",borderRadius:"12px"}})})]})},ua=T.div`
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1440px) {
    min-width: 1440px;
    margin-left: unset;
    margin-right: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 20px;
    margin-top: 16px;
    margin-bottom: 20px;
  }
`,fa=T.div`
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1440px) {
    min-width: 1440px;
    margin-left: unset;
    margin-right: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 20px;
    margin-top: 16px;
    margin-bottom: 20px;
  }
`,pa=()=>{const e=Ot(),t=He(At),n=He(Pt),r=new Date().getMonth()+1,[o,a]=v.useState(r);return v.useEffect(()=>{e(We(o))},[]),v.useEffect(()=>{e(We(o))},[o]),f.jsxs("div",{children:[f.jsx(Ut,{selectedMonth:o,setMonth:a}),f.jsxs(ua,{children:[f.jsx(oa,{data:t,selectedMonth:o}),f.jsx(da,{data:n,selectedMonth:o})]}),f.jsx(fa,{children:f.jsx(Zo,{})})]})},ya=()=>f.jsx(f.Fragment,{children:f.jsx(pa,{})});export{ya as default};
