import{u as T,a as jt,r as v,j as p,b as At,c as ke,B as Ot,C as Dt,D as Mt,E as Fe}from"./index-cd977fdc.js";import{_ as h,n as Pt,T as Bt}from"./emotion-styled.browser.esm-ef64c0c9.js";import{C as at,a as it,L as st,P as lt,d as ct,e as dt,p as ut,c as ft,f as pt}from"./index-812147ab.js";function A(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}const _t=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 23px;
`,Et=T.div`
  display: flex;
  align-items: center;
`,zt=T.svg`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`,Wt=T.use``,Ft=T.div`
  position: relative;
`,Ht=T.button`
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
`,It=T.svg`
  position: absolute;
  top: 15%;
  width: 24px;
  height: 24px;
  margin-left: 10px;
  margin-right: 10px;
  fill: ${({$isDropdownOpen:e})=>e?"red":"blue"};
  transform-origin: center center;
  transform: ${({$isDropdownOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
`,Lt=T.use`
  fill: ${({$isDropdownOpen:e})=>e?"red":"blue"};
`,Kt=T.ul`
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
`,Nt=T.li`
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
`,Ut=T.p`
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
`,He="/HealthyHub/assets/symbol-defs-968d137a.svg",Gt=({selectedMonth:e,setMonth:t})=>{const n=["January","February","March","April","May","June","July","August","September","October","November","December"],r=jt(),[o,a]=v.useState(!1),i=()=>{a(!o)},s=d=>{t(d+1),a(!1)};return p.jsxs(_t,{children:[p.jsxs(Et,{children:[p.jsx(zt,{onClick:()=>r("/main"),children:p.jsx(Wt,{xlinkHref:`${He}#icon-arrow-right`})}),p.jsxs(Ft,{children:[p.jsxs(Ht,{onClick:i,children:["Months",p.jsx(It,{$isDropdownOpen:o,children:p.jsx(Lt,{xlinkHref:`${He}#icon-arrow-down`})})]}),o&&p.jsx(Kt,{children:n.map((d,c)=>p.jsx(Nt,{onClick:()=>s(c),children:d},d))})]})]}),p.jsx(Ut,{children:n[e-1]})]})};function gt(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=gt(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function N(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=gt(e))&&(r&&(r+=" "),r+=t);return r}function H(e){return e!==null&&typeof e=="object"&&e.constructor===Object}function mt(e){if(!H(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=mt(e[n])}),t}function E(e,t,n={clone:!0}){const r=n.clone?h({},e):e;return H(e)&&H(t)&&Object.keys(t).forEach(o=>{o!=="__proto__"&&(H(t[o])&&o in e&&H(e[o])?r[o]=E(e[o],t[o],n):n.clone?r[o]=H(t[o])?mt(t[o]):t[o]:r[o]=t[o])}),r}function ne(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}function z(e){if(typeof e!="string")throw new Error(ne(7));return e.charAt(0).toUpperCase()+e.slice(1)}function ht(e,t){const n=h({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=h({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const o=e[r]||{},a=t[r];n[r]={},!a||!Object.keys(a)?n[r]=o:!o||!Object.keys(o)?n[r]=a:(n[r]=h({},a),Object.keys(o).forEach(i=>{n[r][i]=ht(o[i],a[i])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function U(e,t,n=void 0){const r={};return Object.keys(e).forEach(o=>{r[o]=e[o].reduce((a,i)=>{if(i){const s=t(i);s!==""&&a.push(s),n&&n[i]&&a.push(n[i])}return a},[]).join(" ")}),r}const Ie=e=>e,Jt=()=>{let e=Ie;return{configure(t){e=t},generate(t){return e(t)},reset(){e=Ie}}},Yt=Jt(),Xt=Yt,qt={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function I(e,t,n="Mui"){const r=qt[t];return r?`${n}-${r}`:`${Xt.generate(e)}-${t}`}function G(e,t,n="Mui"){const r={};return t.forEach(o=>{r[o]=I(e,o,n)}),r}const Vt=v.createContext(),yt=Vt;/**
 * @mui/styled-engine v5.15.1
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Zt(e,t){return Pt(e,t)}const Qt=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},en=["values","unit","step"],tn=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>h({},n,{[r.key]:r.val}),{})};function nn(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,o=A(e,en),a=tn(t),i=Object.keys(a);function s(l){return`@media (min-width:${typeof t[l]=="number"?t[l]:l}${n})`}function d(l){return`@media (max-width:${(typeof t[l]=="number"?t[l]:l)-r/100}${n})`}function c(l,f){const m=i.indexOf(f);return`@media (min-width:${typeof t[l]=="number"?t[l]:l}${n}) and (max-width:${(m!==-1&&typeof t[i[m]]=="number"?t[i[m]]:f)-r/100}${n})`}function g(l){return i.indexOf(l)+1<i.length?c(l,i[i.indexOf(l)+1]):s(l)}function y(l){const f=i.indexOf(l);return f===0?s(i[1]):f===i.length-1?d(i[f]):c(l,i[i.indexOf(l)+1]).replace("@media","@media not all and")}return h({keys:i,values:a,up:s,down:d,between:c,only:g,not:y,unit:n},o)}const rn={borderRadius:4},on=rn;function se(e,t){return t?E(e,t,{clone:!1}):e}const Ae={xs:0,sm:600,md:900,lg:1200,xl:1536},Le={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${Ae[e]}px)`};function F(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const a=r.breakpoints||Le;return t.reduce((i,s,d)=>(i[a.up(a.keys[d])]=n(t[d]),i),{})}if(typeof t=="object"){const a=r.breakpoints||Le;return Object.keys(t).reduce((i,s)=>{if(Object.keys(a.values||Ae).indexOf(s)!==-1){const d=a.up(s);i[d]=n(t[s],s)}else{const d=s;i[d]=t[d]}return i},{})}return n(t)}function an(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,o)=>{const a=e.up(o);return r[a]={},r},{}))||{}}function sn(e,t){return e.reduce((n,r)=>{const o=n[r];return(!o||Object.keys(o).length===0)&&delete n[r],n},t)}function be(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((o,a)=>o&&o[a]?o[a]:null,e);if(r!=null)return r}return t.split(".").reduce((r,o)=>r&&r[o]!=null?r[o]:null,e)}function me(e,t,n,r=n){let o;return typeof e=="function"?o=e(n):Array.isArray(e)?o=e[n]||r:o=be(e,n)||r,t&&(o=t(o,r,e)),o}function R(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:o}=e,a=i=>{if(i[t]==null)return null;const s=i[t],d=i.theme,c=be(d,r)||{};return F(i,s,y=>{let l=me(c,o,y);return y===l&&typeof y=="string"&&(l=me(c,o,`${t}${y==="default"?"":z(y)}`,y)),n===!1?l:{[n]:l}})};return a.propTypes={},a.filterProps=[t],a}function ln(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const cn={m:"margin",p:"padding"},dn={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Ke={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},un=ln(e=>{if(e.length>2)if(Ke[e])e=Ke[e];else return[e];const[t,n]=e.split(""),r=cn[t],o=dn[n]||"";return Array.isArray(o)?o.map(a=>r+a):[r+o]}),Oe=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],De=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Oe,...De];function ce(e,t,n,r){var o;const a=(o=be(e,t,!1))!=null?o:n;return typeof a=="number"?i=>typeof i=="string"?i:a*i:Array.isArray(a)?i=>typeof i=="string"?i:a[i]:typeof a=="function"?a:()=>{}}function bt(e){return ce(e,"spacing",8)}function de(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function fn(e,t){return n=>e.reduce((r,o)=>(r[o]=de(t,n),r),{})}function pn(e,t,n,r){if(t.indexOf(n)===-1)return null;const o=un(n),a=fn(o,r),i=e[n];return F(e,i,a)}function xt(e,t){const n=bt(e.theme);return Object.keys(e).map(r=>pn(e,t,r,n)).reduce(se,{})}function S(e){return xt(e,Oe)}S.propTypes={};S.filterProps=Oe;function k(e){return xt(e,De)}k.propTypes={};k.filterProps=De;function gn(e=8){if(e.mui)return e;const t=bt({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(a=>{const i=t(a);return typeof i=="number"?`${i}px`:i}).join(" ");return n.mui=!0,n}function xe(...e){const t=e.reduce((r,o)=>(o.filterProps.forEach(a=>{r[a]=o}),r),{}),n=r=>Object.keys(r).reduce((o,a)=>t[a]?se(o,t[a](r)):o,{});return n.propTypes={},n.filterProps=e.reduce((r,o)=>r.concat(o.filterProps),[]),n}function M(e){return typeof e!="number"?e:`${e}px solid`}function P(e,t){return R({prop:e,themeKey:"borders",transform:t})}const mn=P("border",M),hn=P("borderTop",M),yn=P("borderRight",M),bn=P("borderBottom",M),xn=P("borderLeft",M),vn=P("borderColor"),wn=P("borderTopColor"),Cn=P("borderRightColor"),$n=P("borderBottomColor"),Tn=P("borderLeftColor"),Sn=P("outline",M),kn=P("outlineColor"),ve=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=ce(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:de(t,r)});return F(e,e.borderRadius,n)}return null};ve.propTypes={};ve.filterProps=["borderRadius"];xe(mn,hn,yn,bn,xn,vn,wn,Cn,$n,Tn,ve,Sn,kn);const we=e=>{if(e.gap!==void 0&&e.gap!==null){const t=ce(e.theme,"spacing",8),n=r=>({gap:de(t,r)});return F(e,e.gap,n)}return null};we.propTypes={};we.filterProps=["gap"];const Ce=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=ce(e.theme,"spacing",8),n=r=>({columnGap:de(t,r)});return F(e,e.columnGap,n)}return null};Ce.propTypes={};Ce.filterProps=["columnGap"];const $e=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=ce(e.theme,"spacing",8),n=r=>({rowGap:de(t,r)});return F(e,e.rowGap,n)}return null};$e.propTypes={};$e.filterProps=["rowGap"];const Rn=R({prop:"gridColumn"}),jn=R({prop:"gridRow"}),An=R({prop:"gridAutoFlow"}),On=R({prop:"gridAutoColumns"}),Dn=R({prop:"gridAutoRows"}),Mn=R({prop:"gridTemplateColumns"}),Pn=R({prop:"gridTemplateRows"}),Bn=R({prop:"gridTemplateAreas"}),_n=R({prop:"gridArea"});xe(we,Ce,$e,Rn,jn,An,On,Dn,Mn,Pn,Bn,_n);function te(e,t){return t==="grey"?t:e}const En=R({prop:"color",themeKey:"palette",transform:te}),zn=R({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:te}),Wn=R({prop:"backgroundColor",themeKey:"palette",transform:te});xe(En,zn,Wn);function D(e){return e<=1&&e!==0?`${e*100}%`:e}const Fn=R({prop:"width",transform:D}),Me=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,o;const a=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||Ae[n];return a?((o=e.theme)==null||(o=o.breakpoints)==null?void 0:o.unit)!=="px"?{maxWidth:`${a}${e.theme.breakpoints.unit}`}:{maxWidth:a}:{maxWidth:D(n)}};return F(e,e.maxWidth,t)}return null};Me.filterProps=["maxWidth"];const Hn=R({prop:"minWidth",transform:D}),In=R({prop:"height",transform:D}),Ln=R({prop:"maxHeight",transform:D}),Kn=R({prop:"minHeight",transform:D});R({prop:"size",cssProperty:"width",transform:D});R({prop:"size",cssProperty:"height",transform:D});const Nn=R({prop:"boxSizing"});xe(Fn,Me,Hn,In,Ln,Kn,Nn);const Un={border:{themeKey:"borders",transform:M},borderTop:{themeKey:"borders",transform:M},borderRight:{themeKey:"borders",transform:M},borderBottom:{themeKey:"borders",transform:M},borderLeft:{themeKey:"borders",transform:M},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:M},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:ve},color:{themeKey:"palette",transform:te},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:te},backgroundColor:{themeKey:"palette",transform:te},p:{style:k},pt:{style:k},pr:{style:k},pb:{style:k},pl:{style:k},px:{style:k},py:{style:k},padding:{style:k},paddingTop:{style:k},paddingRight:{style:k},paddingBottom:{style:k},paddingLeft:{style:k},paddingX:{style:k},paddingY:{style:k},paddingInline:{style:k},paddingInlineStart:{style:k},paddingInlineEnd:{style:k},paddingBlock:{style:k},paddingBlockStart:{style:k},paddingBlockEnd:{style:k},m:{style:S},mt:{style:S},mr:{style:S},mb:{style:S},ml:{style:S},mx:{style:S},my:{style:S},margin:{style:S},marginTop:{style:S},marginRight:{style:S},marginBottom:{style:S},marginLeft:{style:S},marginX:{style:S},marginY:{style:S},marginInline:{style:S},marginInlineStart:{style:S},marginInlineEnd:{style:S},marginBlock:{style:S},marginBlockStart:{style:S},marginBlockEnd:{style:S},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:we},rowGap:{style:$e},columnGap:{style:Ce},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:D},maxWidth:{style:Me},minWidth:{transform:D},height:{transform:D},maxHeight:{transform:D},minHeight:{transform:D},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},Pe=Un;function Gn(...e){const t=e.reduce((r,o)=>r.concat(Object.keys(o)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function Jn(e,t){return typeof e=="function"?e(t):e}function Yn(){function e(n,r,o,a){const i={[n]:r,theme:o},s=a[n];if(!s)return{[n]:r};const{cssProperty:d=n,themeKey:c,transform:g,style:y}=s;if(r==null)return null;if(c==="typography"&&r==="inherit")return{[n]:r};const l=be(o,c)||{};return y?y(i):F(i,r,m=>{let u=me(l,g,m);return m===u&&typeof m=="string"&&(u=me(l,g,`${n}${m==="default"?"":z(m)}`,m)),d===!1?u:{[d]:u}})}function t(n){var r;const{sx:o,theme:a={}}=n||{};if(!o)return null;const i=(r=a.unstable_sxConfig)!=null?r:Pe;function s(d){let c=d;if(typeof d=="function")c=d(a);else if(typeof d!="object")return d;if(!c)return null;const g=an(a.breakpoints),y=Object.keys(g);let l=g;return Object.keys(c).forEach(f=>{const m=Jn(c[f],a);if(m!=null)if(typeof m=="object")if(i[f])l=se(l,e(f,m,a,i));else{const u=F({theme:a},m,x=>({[f]:x}));Gn(u,m)?l[f]=t({sx:m,theme:a}):l=se(l,u)}else l=se(l,e(f,m,a,i))}),sn(y,l)}return Array.isArray(o)?o.map(s):s(o)}return t}const vt=Yn();vt.filterProps=["sx"];const Be=vt,Xn=["breakpoints","palette","spacing","shape"];function _e(e={},...t){const{breakpoints:n={},palette:r={},spacing:o,shape:a={}}=e,i=A(e,Xn),s=nn(n),d=gn(o);let c=E({breakpoints:s,direction:"ltr",components:{},palette:h({mode:"light"},r),spacing:d,shape:h({},on,a)},i);return c=t.reduce((g,y)=>E(g,y),c),c.unstable_sxConfig=h({},Pe,i==null?void 0:i.unstable_sxConfig),c.unstable_sx=function(y){return Be({sx:y,theme:this})},c}function qn(e){return Object.keys(e).length===0}function Vn(e=null){const t=v.useContext(Bt);return!t||qn(t)?e:t}const Zn=_e();function Qn(e=Zn){return Vn(e)}const er=["variant"];function Ne(e){return e.length===0}function wt(e){const{variant:t}=e,n=A(e,er);let r=t||"";return Object.keys(n).sort().forEach(o=>{o==="color"?r+=Ne(r)?e[o]:z(e[o]):r+=`${Ne(r)?o:z(o)}${z(e[o].toString())}`}),r}const tr=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function nr(e){return Object.keys(e).length===0}function rr(e){return typeof e=="string"&&e.charCodeAt(0)>96}const or=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,he=e=>{const t={};return e&&e.forEach(n=>{const r=wt(n.props);t[r]=n.style}),t},ar=(e,t)=>{let n=[];return t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants),he(n)},ye=(e,t,n)=>{const{ownerState:r={}}=e,o=[];return n&&n.forEach(a=>{let i=!0;Object.keys(a.props).forEach(s=>{r[s]!==a.props[s]&&e[s]!==a.props[s]&&(i=!1)}),i&&o.push(t[wt(a.props)])}),o},ir=(e,t,n,r)=>{var o;const a=n==null||(o=n.components)==null||(o=o[r])==null?void 0:o.variants;return ye(e,t,a)};function pe(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const sr=_e(),lr=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function ge({defaultTheme:e,theme:t,themeId:n}){return nr(t)?e:t[n]||t}function cr(e){return e?(t,n)=>n[e]:null}const Ue=({styledArg:e,props:t,defaultTheme:n,themeId:r})=>{const o=e(h({},t,{theme:ge(h({},t,{defaultTheme:n,themeId:r}))}));let a;if(o&&o.variants&&(a=o.variants,delete o.variants),a){const i=ye(t,he(a),a);return[o,...i]}return o};function Ct(e={}){const{themeId:t,defaultTheme:n=sr,rootShouldForwardProp:r=pe,slotShouldForwardProp:o=pe}=e,a=i=>Be(h({},i,{theme:ge(h({},i,{defaultTheme:n,themeId:t}))}));return a.__mui_systemSx=!0,(i,s={})=>{Qt(i,j=>j.filter(_=>!(_!=null&&_.__mui_systemSx)));const{name:d,slot:c,skipVariantsResolver:g,skipSx:y,overridesResolver:l=cr(lr(c))}=s,f=A(s,tr),m=g!==void 0?g:c&&c!=="Root"&&c!=="root"||!1,u=y||!1;let x,b=pe;c==="Root"||c==="root"?b=r:c?b=o:rr(i)&&(b=void 0);const C=Zt(i,h({shouldForwardProp:b,label:x},f)),B=(j,..._)=>{const oe=_?_.map(w=>{if(typeof w=="function"&&w.__emotion_real!==w)return O=>Ue({styledArg:w,props:O,defaultTheme:n,themeId:t});if(H(w)){let O=w,W;return w&&w.variants&&(W=w.variants,delete O.variants,O=ae=>{let L=w;return ye(ae,he(W),W).forEach(Rt=>{L=E(L,Rt)}),L}),O}return w}):[];let X=j;if(H(j)){let w;j&&j.variants&&(w=j.variants,delete X.variants,X=O=>{let W=j;return ye(O,he(w),w).forEach(L=>{W=E(W,L)}),W})}else typeof j=="function"&&j.__emotion_real!==j&&(X=w=>Ue({styledArg:j,props:w,defaultTheme:n,themeId:t}));d&&l&&oe.push(w=>{const O=ge(h({},w,{defaultTheme:n,themeId:t})),W=or(d,O);if(W){const ae={};return Object.entries(W).forEach(([L,fe])=>{ae[L]=typeof fe=="function"?fe(h({},w,{theme:O})):fe}),l(w,ae)}return null}),d&&!m&&oe.push(w=>{const O=ge(h({},w,{defaultTheme:n,themeId:t}));return ir(w,ar(d,O),O,d)}),u||oe.push(a);const ze=oe.length-_.length;if(Array.isArray(j)&&ze>0){const w=new Array(ze).fill("");X=[...j,...w],X.raw=[...j.raw,...w]}const We=C(X,...oe);return i.muiName&&(We.muiName=i.muiName),We};return C.withConfig&&(B.withConfig=C.withConfig),B}}const dr=Ct(),ue=dr;function ur(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:ht(t.components[n].defaultProps,r)}function fr({props:e,name:t,defaultTheme:n,themeId:r}){let o=Qn(n);return r&&(o=o[r]||o),ur({theme:o,name:t,props:e})}function Ee(e,t=0,n=1){return Math.min(Math.max(t,e),n)}function pr(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function K(e){if(e.type)return e;if(e.charAt(0)==="#")return K(pr(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(ne(9,e));let r=e.substring(t+1,e.length-1),o;if(n==="color"){if(r=r.split(" "),o=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o)===-1)throw new Error(ne(10,o))}else r=r.split(",");return r=r.map(a=>parseFloat(a)),{type:n,values:r,colorSpace:o}}function Te(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((o,a)=>a<3?parseInt(o,10):o):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function gr(e){e=K(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,a=r*Math.min(o,1-o),i=(c,g=(c+n/30)%12)=>o-a*Math.max(Math.min(g-3,9-g,1),-1);let s="rgb";const d=[Math.round(i(0)*255),Math.round(i(8)*255),Math.round(i(4)*255)];return e.type==="hsla"&&(s+="a",d.push(t[3])),Te({type:s,values:d})}function Ge(e){e=K(e);let t=e.type==="hsl"||e.type==="hsla"?K(gr(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function mr(e,t){const n=Ge(e),r=Ge(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function re(e,t){return e=K(e),t=Ee(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,Te(e)}function $t(e,t){if(e=K(e),t=Ee(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return Te(e)}function Tt(e,t){if(e=K(e),t=Ee(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return Te(e)}function hr(e,t){return h({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}const yr={black:"#000",white:"#fff"},le=yr,br={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},xr=br,vr={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},q=vr,wr={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},V=wr,Cr={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},ie=Cr,$r={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Z=$r,Tr={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Q=Tr,Sr={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},ee=Sr,kr=["mode","contrastThreshold","tonalOffset"],Je={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:le.white,default:le.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Re={text:{primary:le.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:le.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Ye(e,t,n,r){const o=r.light||r,a=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=Tt(e.main,o):t==="dark"&&(e.dark=$t(e.main,a)))}function Rr(e="light"){return e==="dark"?{main:Z[200],light:Z[50],dark:Z[400]}:{main:Z[700],light:Z[400],dark:Z[800]}}function jr(e="light"){return e==="dark"?{main:q[200],light:q[50],dark:q[400]}:{main:q[500],light:q[300],dark:q[700]}}function Ar(e="light"){return e==="dark"?{main:V[500],light:V[300],dark:V[700]}:{main:V[700],light:V[400],dark:V[800]}}function Or(e="light"){return e==="dark"?{main:Q[400],light:Q[300],dark:Q[700]}:{main:Q[700],light:Q[500],dark:Q[900]}}function Dr(e="light"){return e==="dark"?{main:ee[400],light:ee[300],dark:ee[700]}:{main:ee[800],light:ee[500],dark:ee[900]}}function Mr(e="light"){return e==="dark"?{main:ie[400],light:ie[300],dark:ie[700]}:{main:"#ed6c02",light:ie[500],dark:ie[900]}}function Pr(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,o=A(e,kr),a=e.primary||Rr(t),i=e.secondary||jr(t),s=e.error||Ar(t),d=e.info||Or(t),c=e.success||Dr(t),g=e.warning||Mr(t);function y(u){return mr(u,Re.text.primary)>=n?Re.text.primary:Je.text.primary}const l=({color:u,name:x,mainShade:b=500,lightShade:C=300,darkShade:B=700})=>{if(u=h({},u),!u.main&&u[b]&&(u.main=u[b]),!u.hasOwnProperty("main"))throw new Error(ne(11,x?` (${x})`:"",b));if(typeof u.main!="string")throw new Error(ne(12,x?` (${x})`:"",JSON.stringify(u.main)));return Ye(u,"light",C,r),Ye(u,"dark",B,r),u.contrastText||(u.contrastText=y(u.main)),u},f={dark:Re,light:Je};return E(h({common:h({},le),mode:t,primary:l({color:a,name:"primary"}),secondary:l({color:i,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:l({color:s,name:"error"}),warning:l({color:g,name:"warning"}),info:l({color:d,name:"info"}),success:l({color:c,name:"success"}),grey:xr,contrastThreshold:n,getContrastText:y,augmentColor:l,tonalOffset:r},f[t]),o)}const Br=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function _r(e){return Math.round(e*1e5)/1e5}const Xe={textTransform:"uppercase"},qe='"Roboto", "Helvetica", "Arial", sans-serif';function Er(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=qe,fontSize:o=14,fontWeightLight:a=300,fontWeightRegular:i=400,fontWeightMedium:s=500,fontWeightBold:d=700,htmlFontSize:c=16,allVariants:g,pxToRem:y}=n,l=A(n,Br),f=o/14,m=y||(b=>`${b/c*f}rem`),u=(b,C,B,j,_)=>h({fontFamily:r,fontWeight:b,fontSize:m(C),lineHeight:B},r===qe?{letterSpacing:`${_r(j/C)}em`}:{},_,g),x={h1:u(a,96,1.167,-1.5),h2:u(a,60,1.2,-.5),h3:u(i,48,1.167,0),h4:u(i,34,1.235,.25),h5:u(i,24,1.334,0),h6:u(s,20,1.6,.15),subtitle1:u(i,16,1.75,.15),subtitle2:u(s,14,1.57,.1),body1:u(i,16,1.5,.15),body2:u(i,14,1.43,.15),button:u(s,14,1.75,.4,Xe),caption:u(i,12,1.66,.4),overline:u(i,12,2.66,1,Xe),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return E(h({htmlFontSize:c,pxToRem:m,fontFamily:r,fontSize:o,fontWeightLight:a,fontWeightRegular:i,fontWeightMedium:s,fontWeightBold:d},x),l,{clone:!1})}const zr=.2,Wr=.14,Fr=.12;function $(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${zr})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Wr})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Fr})`].join(",")}const Hr=["none",$(0,2,1,-1,0,1,1,0,0,1,3,0),$(0,3,1,-2,0,2,2,0,0,1,5,0),$(0,3,3,-2,0,3,4,0,0,1,8,0),$(0,2,4,-1,0,4,5,0,0,1,10,0),$(0,3,5,-1,0,5,8,0,0,1,14,0),$(0,3,5,-1,0,6,10,0,0,1,18,0),$(0,4,5,-2,0,7,10,1,0,2,16,1),$(0,5,5,-3,0,8,10,1,0,3,14,2),$(0,5,6,-3,0,9,12,1,0,3,16,2),$(0,6,6,-3,0,10,14,1,0,4,18,3),$(0,6,7,-4,0,11,15,1,0,4,20,3),$(0,7,8,-4,0,12,17,2,0,5,22,4),$(0,7,8,-4,0,13,19,2,0,5,24,4),$(0,7,9,-4,0,14,21,2,0,5,26,4),$(0,8,9,-5,0,15,22,2,0,6,28,5),$(0,8,10,-5,0,16,24,2,0,6,30,5),$(0,8,11,-5,0,17,26,2,0,6,32,5),$(0,9,11,-5,0,18,28,2,0,7,34,6),$(0,9,12,-6,0,19,29,2,0,7,36,6),$(0,10,13,-6,0,20,31,3,0,8,38,7),$(0,10,13,-6,0,21,33,3,0,8,40,7),$(0,10,14,-6,0,22,35,3,0,8,42,7),$(0,11,14,-7,0,23,36,3,0,9,44,8),$(0,11,15,-7,0,24,38,3,0,9,46,8)],Ir=Hr,Lr=["duration","easing","delay"],Kr={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Nr={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Ve(e){return`${Math.round(e)}ms`}function Ur(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function Gr(e){const t=h({},Kr,e.easing),n=h({},Nr,e.duration);return h({getAutoHeightDuration:Ur,create:(o=["all"],a={})=>{const{duration:i=n.standard,easing:s=t.easeInOut,delay:d=0}=a;return A(a,Lr),(Array.isArray(o)?o:[o]).map(c=>`${c} ${typeof i=="string"?i:Ve(i)} ${s} ${typeof d=="string"?d:Ve(d)}`).join(",")}},e,{easing:t,duration:n})}const Jr={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},Yr=Jr,Xr=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function qr(e={},...t){const{mixins:n={},palette:r={},transitions:o={},typography:a={}}=e,i=A(e,Xr);if(e.vars)throw new Error(ne(18));const s=Pr(r),d=_e(e);let c=E(d,{mixins:hr(d.breakpoints,n),palette:s,shadows:Ir.slice(),typography:Er(s,a),transitions:Gr(o),zIndex:h({},Yr)});return c=E(c,i),c=t.reduce((g,y)=>E(g,y),c),c.unstable_sxConfig=h({},Pe,i==null?void 0:i.unstable_sxConfig),c.unstable_sx=function(y){return Be({sx:y,theme:this})},c}const Vr=qr(),St=Vr,kt="$$material";function J({props:e,name:t}){return fr({props:e,name:t,defaultTheme:St,themeId:kt})}const Zr=e=>pe(e)&&e!=="classes",Qr=Ct({themeId:kt,defaultTheme:St,rootShouldForwardProp:Zr}),Y=Qr;function eo(e){return I("MuiTable",e)}G("MuiTable",["root","stickyHeader"]);const to=["className","component","padding","size","stickyHeader"],no=e=>{const{classes:t,stickyHeader:n}=e;return U({root:["root",n&&"stickyHeader"]},eo,t)},ro=Y("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>h({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":h({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})),Ze="table",oo=v.forwardRef(function(t,n){const r=J({props:t,name:"MuiTable"}),{className:o,component:a=Ze,padding:i="normal",size:s="medium",stickyHeader:d=!1}=r,c=A(r,to),g=h({},r,{component:a,padding:i,size:s,stickyHeader:d}),y=no(g),l=v.useMemo(()=>({padding:i,size:s,stickyHeader:d}),[i,s,d]);return p.jsx(yt.Provider,{value:l,children:p.jsx(ro,h({as:a,role:a===Ze?null:"table",ref:n,className:N(y.root,o),ownerState:g},c))})}),ao=oo,io=v.createContext(),Se=io;function so(e){return I("MuiTableBody",e)}G("MuiTableBody",["root"]);const lo=["className","component"],co=e=>{const{classes:t}=e;return U({root:["root"]},so,t)},uo=Y("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),fo={variant:"body"},Qe="tbody",po=v.forwardRef(function(t,n){const r=J({props:t,name:"MuiTableBody"}),{className:o,component:a=Qe}=r,i=A(r,lo),s=h({},r,{component:a}),d=co(s);return p.jsx(Se.Provider,{value:fo,children:p.jsx(uo,h({className:N(d.root,o),as:a,ref:n,role:a===Qe?null:"rowgroup",ownerState:s},i))})}),go=po;function mo(e){return I("MuiTableCell",e)}const ho=G("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),yo=ho,bo=["align","className","component","padding","scope","size","sortDirection","variant"],xo=e=>{const{classes:t,variant:n,align:r,padding:o,size:a,stickyHeader:i}=e,s={root:["root",n,i&&"stickyHeader",r!=="inherit"&&`align${z(r)}`,o!=="normal"&&`padding${z(o)}`,`size${z(a)}`]};return U(s,mo,t)},vo=Y("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`size${z(n.size)}`],n.padding!=="normal"&&t[`padding${z(n.padding)}`],n.align!=="inherit"&&t[`align${z(n.align)}`],n.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>h({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?Tt(re(e.palette.divider,1),.88):$t(re(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},t.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},t.variant==="body"&&{color:(e.vars||e).palette.text.primary},t.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},t.size==="small"&&{padding:"6px 16px",[`&.${yo.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},t.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},t.padding==="none"&&{padding:0},t.align==="left"&&{textAlign:"left"},t.align==="center"&&{textAlign:"center"},t.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},t.align==="justify"&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),wo=v.forwardRef(function(t,n){const r=J({props:t,name:"MuiTableCell"}),{align:o="inherit",className:a,component:i,padding:s,scope:d,size:c,sortDirection:g,variant:y}=r,l=A(r,bo),f=v.useContext(yt),m=v.useContext(Se),u=m&&m.variant==="head";let x;i?x=i:x=u?"th":"td";let b=d;x==="td"?b=void 0:!b&&u&&(b="col");const C=y||m&&m.variant,B=h({},r,{align:o,component:x,padding:s||(f&&f.padding?f.padding:"normal"),size:c||(f&&f.size?f.size:"medium"),sortDirection:g,stickyHeader:C==="head"&&f&&f.stickyHeader,variant:C}),j=xo(B);let _=null;return g&&(_=g==="asc"?"ascending":"descending"),p.jsx(vo,h({as:x,ref:n,className:N(j.root,a),"aria-sort":_,scope:b,ownerState:B},l))}),je=wo;function Co(e){return I("MuiTableContainer",e)}G("MuiTableContainer",["root"]);const $o=["className","component"],To=e=>{const{classes:t}=e;return U({root:["root"]},Co,t)},So=Y("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),ko=v.forwardRef(function(t,n){const r=J({props:t,name:"MuiTableContainer"}),{className:o,component:a="div"}=r,i=A(r,$o),s=h({},r,{component:a}),d=To(s);return p.jsx(So,h({ref:n,as:a,className:N(d.root,o),ownerState:s},i))}),Ro=ko;function jo(e){return I("MuiTableHead",e)}G("MuiTableHead",["root"]);const Ao=["className","component"],Oo=e=>{const{classes:t}=e;return U({root:["root"]},jo,t)},Do=Y("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),Mo={variant:"head"},et="thead",Po=v.forwardRef(function(t,n){const r=J({props:t,name:"MuiTableHead"}),{className:o,component:a=et}=r,i=A(r,Ao),s=h({},r,{component:a}),d=Oo(s);return p.jsx(Se.Provider,{value:Mo,children:p.jsx(Do,h({as:a,className:N(d.root,o),ref:n,role:a===et?null:"rowgroup",ownerState:s},i))})}),Bo=Po;function _o(e){return I("MuiTableRow",e)}const Eo=G("MuiTableRow",["root","selected","hover","head","footer"]),tt=Eo,zo=["className","component","hover","selected"],Wo=e=>{const{classes:t,selected:n,hover:r,head:o,footer:a}=e;return U({root:["root",n&&"selected",r&&"hover",o&&"head",a&&"footer"]},_o,t)},Fo=Y("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.head&&t.head,n.footer&&t.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${tt.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${tt.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:re(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:re(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),nt="tr",Ho=v.forwardRef(function(t,n){const r=J({props:t,name:"MuiTableRow"}),{className:o,component:a=nt,hover:i=!1,selected:s=!1}=r,d=A(r,zo),c=v.useContext(Se),g=h({},r,{component:a,hover:i,selected:s,head:c&&c.variant==="head",footer:c&&c.variant==="footer"}),y=Wo(g);return p.jsx(Fo,h({as:a,ref:n,className:N(y.root,o),role:a===nt?null:"row",ownerState:g},d))}),rt=Ho,Io=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},ot=Io;function Lo(e){return I("MuiPaper",e)}G("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Ko=["className","component","elevation","square","variant"],No=e=>{const{square:t,elevation:n,variant:r,classes:o}=e,a={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${n}`]};return U(a,Lo,o)},Uo=Y("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return h({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&h({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${re("#fff",ot(t.elevation))}, ${re("#fff",ot(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),Go=v.forwardRef(function(t,n){const r=J({props:t,name:"MuiPaper"}),{className:o,component:a="div",elevation:i=1,square:s=!1,variant:d="elevation"}=r,c=A(r,Ko),g=h({},r,{component:a,elevation:i,square:s,variant:d}),y=No(g);return p.jsx(Uo,h({as:a,ownerState:g,className:N(y.root,o),ref:n},c))}),Jo=Go,Yo=ue(Ro)({marginBottom:"68px",overflowX:"auto","@media (min-width: 834px)":{minWidth:780,marginLeft:"unset"},"@media (min-width: 1440px)":{minWidth:1372}}),Xo=ue(ao)({backgroundColor:"var(--color-primary-black-2)",minWidth:780,"@media (min-width: 834px)":{minWidth:780},"& th, & td":{position:"relative",backgroundClip:"padding-box",color:"var(--color-primary-white)",borderBottom:"1px solid var(--color-primary-black-2)"},"& th":{padding:"0",margin:"0"},"& td":{padding:"0",margin:"0"},"& thead th":{fontFamily:"Poppins",fontSize:"14px",fontWeight:"400",lineHeight:"20px",paddingTop:"24px",paddingLeft:"22px",paddingRight:"20px","@media (min-width: 834px)":{fontSize:"10px",lineHeight:"16px","&:not(:first-of-type)":{paddingLeft:"6px"},"&:not(:last-of-type)":{paddingRight:"0"}},"@media (min-width: 1440px)":{paddingLeft:"21px"},"&:not(:first-of-type)":{paddingLeft:"23px",paddingRight:"41px"},"&:not(:last-of-type)":{paddingRight:"0"}},"& tbody tr:first-of-type td":{fontFamily:"Poppins",fontSize:"10px",fontWeight:"400",lineHeight:"14px",paddingTop:"16px",paddingBottom:"36px",paddingLeft:"24px","@media (min-width: 834px)":{paddingRight:"20px",paddingTop:"10px",paddingBottom:"44px","&:not(:first-of-type)":{paddingLeft:"10px"},"&:not(:last-of-type)":{paddingRight:"0"}},"@media (min-width: 1440px)":{paddingTop:"16px",paddingBottom:"36px",paddingLeft:"44px",paddingRight:"24px"},"&:not(:first-of-type)":{paddingLeft:"29px"},"&:not(:last-of-type)":{paddingRight:"0"}}}),qo=ue("div")({display:"flex",marginLeft:"10px",marginBottom:"9px",justifyContent:"space-between",alignItems:"center","@media (min-width: 1440px)":{justifyContent:"start"}}),Vo=ue("h2")({fontFamily:"Poppins",fontSize:"18px",fontStyle:"normal",fontWeight:"400",lineHeight:"26px",color:"var(--color-primary-white)","@media (min-width: 1440px)":{fontSize:"22px",marginRight:"40px",lineHeight:"32px"}}),Zo=ue("p")({fontFamily:"Poppins",fontSize:"14px",fontStyle:"normal",fontWeight:"400",lineHeight:"20px",color:"var(--color-primary-white)",marginRight:"10px","@media (min-width: 1440px)":{}}),Qo=({data:e,selectedMonth:t})=>{const[n,r]=v.useState([]),[o,a]=v.useState(0),[i,s]=v.useState(!0);v.useEffect(()=>{if(!e||!Array.isArray(e)||e.length===0){console.error("Data is not an array"),r([]);return}const c=new Date(2024,t-1,1),g=new Date(c.getFullYear(),c.getMonth()+1,0).getDate(),y=Array.from({length:g},(l,f)=>f+1);r(y)},[t,e]),v.useEffect(()=>{if(!e||e.length===0||!Array.isArray(e)){console.error("Data is not an array"),a(0);return}const c=new Date,g=e.filter(l=>{if(!l.data)return console.error("Missing 'data' property in day object"),!1;const[f,m]=l.data.split(", "),u=new Date(2024,d(m),f);return u.getMonth()===c.getMonth()&&u.getFullYear()===c.getFullYear()}),y=n.map(l=>g.filter(f=>f.data&&new Date(2024,d(f.data.split(", ")[1]),f.data.split(", ")[0]).getDate()===l).map(f=>f.weight||0).reduce((f,m)=>f+m,0));a(Math.floor(y.reduce((l,f)=>l+f,0)/y.length)),s(g.length>0)},[e,t]);function d(c){return["January","February","March","April","May","June","July","August","September","October","November","December"].indexOf(c)}return p.jsxs("div",{children:[p.jsxs(qo,{children:[p.jsx(Vo,{children:"Weight"}),p.jsx(Zo,{children:i?`Average value: ${isNaN(o)?0:o}`:"No data available"})]}),p.jsx(Yo,{component:Jo,children:p.jsxs(Xo,{children:[p.jsx(Bo,{children:p.jsxs(rt,{children:[p.jsx(je,{align:"center",children:"Weight"}),n.map((c,g)=>p.jsx(je,{align:"center",children:c[g]},g))]})}),p.jsx(go,{children:p.jsx(rt,{children:n.map((c,g)=>p.jsx(je,{align:"center",children:c},g))})})]})})]})};at.register(it,st,lt,ct,dt,ut,ft);const ea=T.div`
  overflow-y: auto;

  @media (min-width: 834px) {
    margin-left: unset;
    overflow-y: unset;
  }

  @media (min-width: 1440px) {
  }
`,ta=T.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 9px;

  @media (min-width: 1440px) {
    margin-top: 0;
  }
`,na=T.h2`
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  color: var(--color-primary-white);
  margin-right: 40px;
`,ra=T.p`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--color-primary-white);
`,oa=T.div`
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
`,aa=({data:e,selectedMonth:t})=>{const[n,r]=v.useState([]),[o,a]=v.useState(0),[i,s]=v.useState(!0);v.useEffect(()=>{if(!e||!Array.isArray(e)||e.length===0){console.error("Invalid or missing 'data' array"),s(!1),r([]);return}(()=>{const u=new Date(2024,t,0).getDate(),x=Array.from({length:u},(b,C)=>0);try{e.forEach(b=>{if(b.data){const C=Number(b.data.split(",")[0])-1;C>=0&&C<u?x[C]=b.food||0:console.error(`Invalid day index: ${C}`)}else console.error("Missing 'data' property in day object")}),r(x),s(!0)}catch(b){console.error(`Error during rendering days: ${b}`),s(!1),r([])}})()},[e,t]);const d=new Date(2024,t,0).getDate(),c=Array.from({length:d},(f,m)=>m+1);v.useEffect(()=>{if(!e||e.length===0||n.length===0){s(!1),a(0);return}const f=new Date,m=e.filter(u=>{if(!u.data)return console.error("Missing 'data' property in day object"),!1;const[x,b]=u.data.split(", "),C=new Date(2024,g(b),x);return C.getMonth()===f.getMonth()&&C.getFullYear()===f.getFullYear()});if(n.length>0){const u=n.filter(x=>!isNaN(x));if(u.length>0){const b=u.reduce((C,B)=>C+B,0)/u.length;a(Math.floor(b))}else a(0)}s(m.length>0)},[e,n,t]);function g(f){return["January","February","March","April","May","June","July","August","September","October","November","December"].indexOf(f)}const y={responsive:!0,plugins:{legend:{position:!1,display:!1}},scales:{x:{beginAtZero:!0,grid:{display:!0,color:"#292928",borderColor:"#292928"}},y:{position:"left",ticks:{beginAtZero:!0,stepSize:1e3,callback:function(f){return f>=1e3?(f/1e3).toLocaleString()+"K":f}},grid:{display:!0,color:"#292928",borderColor:"#292928"}}},layout:{padding:{left:14,right:31,top:25,bottom:40}}},l={labels:c,datasets:[{label:"Calories",data:n,borderColor:"#e3ffa8",backgroundColor:"#0F0F0F",pointBackgroundColor:"#e3ffa8",borderWidth:1}]};return p.jsxs(ea,{children:[p.jsxs(ta,{children:[p.jsx(na,{children:"Calories"}),p.jsx(ra,{children:i?`Average value: ${o}`:"No data available"})]}),p.jsx(oa,{children:p.jsx(pt,{options:y,data:l,style:{backgroundColor:"#0F0F0F",borderRadius:"12px"}})})]})};at.register(it,st,lt,ct,dt,ut,ft);const ia=T.div`
  margin-bottom: 40px;
  overflow-x: auto;

  @media (min-width: 834px) {
    margin-left: unset;
    overflow-y: unset;
  }

  @media (min-width: 1440px) {
    margin-bottom: 0;
  }
`,sa=T.div`
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
`,la=T.h2`
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  color: var(--color-primary-white);
  margin-right: 40px;
`,ca=T.p`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--color-primary-white);
`,da=T.div`
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
`,ua=({data:e,selectedMonth:t})=>{const[n,r]=v.useState([]),[o,a]=v.useState(0),[i,s]=v.useState(!0);v.useEffect(()=>{if(console.log("Entering useEffect for rendering days..."),!e||!Array.isArray(e)||e.length===0){console.error("Invalid or missing 'data' array"),s(!1),r([]);return}(async()=>{const m=new Date(2023,t,0).getDate(),u=Array.from({length:m},(x,b)=>0);try{e.forEach(x=>{if(x.data){const b=Number(x.data.split(",")[0])-1;b>=0&&b<m?u[b]=x.water||0:console.error(`Invalid day index: ${b}`)}else console.error("Missing 'data' property in day object")}),r(u),s(!0)}catch(x){console.error(`Error during rendering days: ${x}`),s(!1),r([])}})()},[e,t]);const d=new Date(2023,t,0).getDate(),c=Array.from({length:d},(l,f)=>f+1);v.useEffect(()=>{if(console.log("Entering useEffect for calculating average water..."),!e||e.length===0||n.length===0){console.error("No data available for the current month"),s(!1),a(0);return}const l=new Date,f=e.filter(m=>{if(!m.data)return console.error("Missing 'data' property in day object"),!1;const[u,x]=m.data.split(", "),b=new Date(2023,g(x),u);return b.getMonth()===l.getMonth()&&b.getFullYear()===l.getFullYear()});if(n.length>0){const m=n.filter(u=>!isNaN(u));if(m.length>0){const x=m.reduce((b,C)=>b+C,0)/m.length;a(Math.floor(x))}else a(0)}s(f.length>0)},[e,n,t]);function g(l){return["January","February","March","April","May","June","July","August","September","October","November","December"].indexOf(l)}const y={responsive:!0,plugins:{legend:{position:!1,display:!1}},scales:{x:{beginAtZero:!0,grid:{display:!0,color:"#292928",borderColor:"#292928"}},y:{position:"left",ticks:{beginAtZero:!0,stepSize:1e3,callback:function(l){return l>=1e3?(l/1e3).toLocaleString()+"K":l}},grid:{display:!0,color:"#292928",borderColor:"#292928"}}},layout:{padding:{left:14,right:31,top:25,bottom:40}}};return p.jsxs(ia,{children:[p.jsxs(sa,{children:[p.jsx(la,{children:"Water"}),p.jsx(ca,{children:i?`Average value: ${o}`:"No data available"})]}),p.jsx(da,{children:p.jsx(pt,{options:y,data:{labels:c,datasets:[{label:"Water",data:n,borderColor:"#e3ffa8",backgroundColor:"#0F0F0F",pointBackgroundColor:"#e3ffa8",borderWidth:1}]},style:{backgroundColor:"#0F0F0F",borderRadius:"12px"}})})]})},fa=T.div`
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
`,pa=T.div`
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
`,ga=()=>{const e=At(),t=ke(Ot),n=ke(Dt),r=ke(Mt),o=new Date().getMonth()+1,[a,i]=v.useState(o);return v.useEffect(()=>{e(Fe(a))},[]),v.useEffect(()=>{e(Fe(a))},[a]),p.jsxs("div",{children:[p.jsx(Gt,{selectedMonth:a,setMonth:i}),p.jsxs(fa,{children:[p.jsx(aa,{data:t,selectedMonth:a}),p.jsx(ua,{data:n,selectedMonth:a})]}),p.jsx(pa,{children:p.jsx(Qo,{data:r,selectedMonth:a})})]})},ba=()=>p.jsx(p.Fragment,{children:p.jsx(ga,{})});export{ba as default};
