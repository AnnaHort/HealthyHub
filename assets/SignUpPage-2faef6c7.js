import{r as g,t as b,c as J,d as U,j as t,e as Ie,f as Be,R as Re,g as Le,h as Pe,F as Z,i as Ne,k as de,E as ce,B as _e,Q as Fe,l as ze,m as Me,s as r,n as ae,o as re,p as fe,q as Ae,v as Oe}from"./index-19326ae5.js";function ke(e){var i,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(i=0;i<e.length;i++)e[i]&&(n=ke(e[i]))&&(o&&(o+=" "),o+=n);else for(i in e)e[i]&&(o&&(o+=" "),o+=i);return o}function M(){for(var e,i,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(i=ke(e))&&(o&&(o+=" "),o+=i);return o}const X=e=>typeof e=="number"&&!isNaN(e),V=e=>typeof e=="string",I=e=>typeof e=="function",ne=e=>V(e)||I(e)?e:null,pe=e=>g.isValidElement(e)||V(e)||I(e)||X(e);function Ge(e,i,n){n===void 0&&(n=300);const{scrollHeight:o,style:p}=e;requestAnimationFrame(()=>{p.minHeight="initial",p.height=o+"px",p.transition=`all ${n}ms`,requestAnimationFrame(()=>{p.height="0",p.padding="0",p.margin="0",setTimeout(i,n)})})}function se(e){let{enter:i,exit:n,appendPosition:o=!1,collapse:p=!0,collapseDuration:m=300}=e;return function(a){let{children:l,position:k,preventExitTransition:j,done:y,nodeRef:f,isIn:C}=a;const c=o?`${i}--${k}`:i,h=o?`${n}--${k}`:n,u=g.useRef(0);return g.useLayoutEffect(()=>{const s=f.current,d=c.split(" "),T=E=>{E.target===f.current&&(s.dispatchEvent(new Event("d")),s.removeEventListener("animationend",T),s.removeEventListener("animationcancel",T),u.current===0&&E.type!=="animationcancel"&&s.classList.remove(...d))};s.classList.add(...d),s.addEventListener("animationend",T),s.addEventListener("animationcancel",T)},[]),g.useEffect(()=>{const s=f.current,d=()=>{s.removeEventListener("animationend",d),p?Ge(s,y,m):y()};C||(j?d():(u.current=1,s.className+=` ${h}`,s.addEventListener("animationend",d)))},[C]),b.createElement(b.Fragment,null,l)}}function we(e,i){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:i}:{}}const P={list:new Map,emitQueue:new Map,on(e,i){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(i),this},off(e,i){if(i){const n=this.list.get(e).filter(o=>o!==i);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const i=this.emitQueue.get(e);return i&&(i.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(i=>{const n=setTimeout(()=>{i(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},te=e=>{let{theme:i,type:n,...o}=e;return b.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:i==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...o})},me={info:function(e){return b.createElement(te,{...e},b.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return b.createElement(te,{...e},b.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return b.createElement(te,{...e},b.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return b.createElement(te,{...e},b.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return b.createElement("div",{className:"Toastify__spinner"})}};function $e(e){const[,i]=g.useReducer(c=>c+1,0),[n,o]=g.useState([]),p=g.useRef(null),m=g.useRef(new Map).current,a=c=>n.indexOf(c)!==-1,l=g.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:a,getToast:c=>m.get(c)}).current;function k(c){let{containerId:h}=c;const{limit:u}=l.props;!u||h&&l.containerId!==h||(l.count-=l.queue.length,l.queue=[])}function j(c){o(h=>c==null?[]:h.filter(u=>u!==c))}function y(){const{toastContent:c,toastProps:h,staleId:u}=l.queue.shift();C(c,h,u)}function f(c,h){let{delay:u,staleId:s,...d}=h;if(!pe(c)||function(L){return!p.current||l.props.enableMultiContainer&&L.containerId!==l.props.containerId||m.has(L.toastId)&&L.updateId==null}(d))return;const{toastId:T,updateId:E,data:x}=d,{props:v}=l,F=()=>j(T),z=E==null;z&&l.count++;const S={...v,style:v.toastStyle,key:l.toastKey++,...Object.fromEntries(Object.entries(d).filter(L=>{let[N,B]=L;return B!=null})),toastId:T,updateId:E,data:x,closeToast:F,isIn:!1,className:ne(d.className||v.toastClassName),bodyClassName:ne(d.bodyClassName||v.bodyClassName),progressClassName:ne(d.progressClassName||v.progressClassName),autoClose:!d.isLoading&&(A=d.autoClose,Q=v.autoClose,A===!1||X(A)&&A>0?A:Q),deleteToast(){const L=we(m.get(T),"removed");m.delete(T),P.emit(4,L);const N=l.queue.length;if(l.count=T==null?l.count-l.displayedToast:l.count-1,l.count<0&&(l.count=0),N>0){const B=T==null?l.props.limit:1;if(N===1||B===1)l.displayedToast++,y();else{const G=B>N?N:B;l.displayedToast=G;for(let R=0;R<G;R++)y()}}else i()}};var A,Q;S.iconOut=function(L){let{theme:N,type:B,isLoading:G,icon:R}=L,_=null;const $={theme:N,type:B};return R===!1||(I(R)?_=R($):g.isValidElement(R)?_=g.cloneElement(R,$):V(R)||X(R)?_=R:G?_=me.spinner():(ee=>ee in me)(B)&&(_=me[B]($))),_}(S),I(d.onOpen)&&(S.onOpen=d.onOpen),I(d.onClose)&&(S.onClose=d.onClose),S.closeButton=v.closeButton,d.closeButton===!1||pe(d.closeButton)?S.closeButton=d.closeButton:d.closeButton===!0&&(S.closeButton=!pe(v.closeButton)||v.closeButton);let O=c;g.isValidElement(c)&&!V(c.type)?O=g.cloneElement(c,{closeToast:F,toastProps:S,data:x}):I(c)&&(O=c({closeToast:F,toastProps:S,data:x})),v.limit&&v.limit>0&&l.count>v.limit&&z?l.queue.push({toastContent:O,toastProps:S,staleId:s}):X(u)?setTimeout(()=>{C(O,S,s)},u):C(O,S,s)}function C(c,h,u){const{toastId:s}=h;u&&m.delete(u);const d={content:c,props:h};m.set(s,d),o(T=>[...T,s].filter(E=>E!==u)),P.emit(4,we(d,d.props.updateId==null?"added":"updated"))}return g.useEffect(()=>(l.containerId=e.containerId,P.cancelEmit(3).on(0,f).on(1,c=>p.current&&j(c)).on(5,k).emit(2,l),()=>{m.clear(),P.emit(3,l)}),[]),g.useEffect(()=>{l.props=e,l.isToastActive=a,l.displayedToast=n.length}),{getToastToRender:function(c){const h=new Map,u=Array.from(m.values());return e.newestOnTop&&u.reverse(),u.forEach(s=>{const{position:d}=s.props;h.has(d)||h.set(d,[]),h.get(d).push(s)}),Array.from(h,s=>c(s[0],s[1]))},containerRef:p,isToastActive:a}}function ve(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function be(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function De(e){const[i,n]=g.useState(!1),[o,p]=g.useState(!1),m=g.useRef(null),a=g.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=g.useRef(e),{autoClose:k,pauseOnHover:j,closeToast:y,onClick:f,closeOnClick:C}=e;function c(x){if(e.draggable){x.nativeEvent.type==="touchstart"&&x.nativeEvent.preventDefault(),a.didMove=!1,document.addEventListener("mousemove",d),document.addEventListener("mouseup",T),document.addEventListener("touchmove",d),document.addEventListener("touchend",T);const v=m.current;a.canCloseOnClick=!0,a.canDrag=!0,a.boundingRect=v.getBoundingClientRect(),v.style.transition="",a.x=ve(x.nativeEvent),a.y=be(x.nativeEvent),e.draggableDirection==="x"?(a.start=a.x,a.removalDistance=v.offsetWidth*(e.draggablePercent/100)):(a.start=a.y,a.removalDistance=v.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function h(x){if(a.boundingRect){const{top:v,bottom:F,left:z,right:S}=a.boundingRect;x.nativeEvent.type!=="touchend"&&e.pauseOnHover&&a.x>=z&&a.x<=S&&a.y>=v&&a.y<=F?s():u()}}function u(){n(!0)}function s(){n(!1)}function d(x){const v=m.current;a.canDrag&&v&&(a.didMove=!0,i&&s(),a.x=ve(x),a.y=be(x),a.delta=e.draggableDirection==="x"?a.x-a.start:a.y-a.start,a.start!==a.x&&(a.canCloseOnClick=!1),v.style.transform=`translate${e.draggableDirection}(${a.delta}px)`,v.style.opacity=""+(1-Math.abs(a.delta/a.removalDistance)))}function T(){document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",T),document.removeEventListener("touchmove",d),document.removeEventListener("touchend",T);const x=m.current;if(a.canDrag&&a.didMove&&x){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance)return p(!0),void e.closeToast();x.style.transition="transform 0.2s, opacity 0.2s",x.style.transform=`translate${e.draggableDirection}(0)`,x.style.opacity="1"}}g.useEffect(()=>{l.current=e}),g.useEffect(()=>(m.current&&m.current.addEventListener("d",u,{once:!0}),I(e.onOpen)&&e.onOpen(g.isValidElement(e.children)&&e.children.props),()=>{const x=l.current;I(x.onClose)&&x.onClose(g.isValidElement(x.children)&&x.children.props)}),[]),g.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||s(),window.addEventListener("focus",u),window.addEventListener("blur",s)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",u),window.removeEventListener("blur",s))}),[e.pauseOnFocusLoss]);const E={onMouseDown:c,onTouchStart:c,onMouseUp:h,onTouchEnd:h};return k&&j&&(E.onMouseEnter=s,E.onMouseLeave=u),C&&(E.onClick=x=>{f&&f(x),a.canCloseOnClick&&y()}),{playToast:u,pauseToast:s,isRunning:i,preventExitTransition:o,toastRef:m,eventHandlers:E}}function Ce(e){let{closeToast:i,theme:n,ariaLabel:o="close"}=e;return b.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:p=>{p.stopPropagation(),i(p)},"aria-label":o},b.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},b.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function He(e){let{delay:i,isRunning:n,closeToast:o,type:p="default",hide:m,className:a,style:l,controlledProgress:k,progress:j,rtl:y,isIn:f,theme:C}=e;const c=m||k&&j===0,h={...l,animationDuration:`${i}ms`,animationPlayState:n?"running":"paused",opacity:c?0:1};k&&(h.transform=`scaleX(${j})`);const u=M("Toastify__progress-bar",k?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${C}`,`Toastify__progress-bar--${p}`,{"Toastify__progress-bar--rtl":y}),s=I(a)?a({rtl:y,type:p,defaultClassName:u}):M(u,a);return b.createElement("div",{role:"progressbar","aria-hidden":c?"true":"false","aria-label":"notification timer",className:s,style:h,[k&&j>=1?"onTransitionEnd":"onAnimationEnd"]:k&&j<1?null:()=>{f&&o()}})}const qe=e=>{const{isRunning:i,preventExitTransition:n,toastRef:o,eventHandlers:p}=De(e),{closeButton:m,children:a,autoClose:l,onClick:k,type:j,hideProgressBar:y,closeToast:f,transition:C,position:c,className:h,style:u,bodyClassName:s,bodyStyle:d,progressClassName:T,progressStyle:E,updateId:x,role:v,progress:F,rtl:z,toastId:S,deleteToast:A,isIn:Q,isLoading:O,iconOut:L,closeOnClick:N,theme:B}=e,G=M("Toastify__toast",`Toastify__toast-theme--${B}`,`Toastify__toast--${j}`,{"Toastify__toast--rtl":z},{"Toastify__toast--close-on-click":N}),R=I(h)?h({rtl:z,position:c,type:j,defaultClassName:G}):M(G,h),_=!!F||!l,$={closeToast:f,type:j,theme:B};let ee=null;return m===!1||(ee=I(m)?m($):g.isValidElement(m)?g.cloneElement(m,$):Ce($)),b.createElement(C,{isIn:Q,done:A,position:c,preventExitTransition:n,nodeRef:o},b.createElement("div",{id:S,onClick:k,className:R,...p,style:u,ref:o},b.createElement("div",{...Q&&{role:v},className:I(s)?s({type:j}):M("Toastify__toast-body",s),style:d},L!=null&&b.createElement("div",{className:M("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},L),b.createElement("div",null,a)),ee,b.createElement(He,{...x&&!_?{key:`pb-${x}`}:{},rtl:z,theme:B,delay:l,isRunning:i,isIn:Q,closeToast:f,hide:y,type:j,style:E,className:T,controlledProgress:_,progress:F||0})))},le=function(e,i){return i===void 0&&(i=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:i}},Ye=se(le("bounce",!0));se(le("slide",!0));se(le("zoom"));se(le("flip"));const ye=g.forwardRef((e,i)=>{const{getToastToRender:n,containerRef:o,isToastActive:p}=$e(e),{className:m,style:a,rtl:l,containerId:k}=e;function j(y){const f=M("Toastify__toast-container",`Toastify__toast-container--${y}`,{"Toastify__toast-container--rtl":l});return I(m)?m({position:y,rtl:l,defaultClassName:f}):M(f,ne(m))}return g.useEffect(()=>{i&&(i.current=o.current)},[]),b.createElement("div",{ref:o,className:"Toastify",id:k},n((y,f)=>{const C=f.length?{...a}:{...a,pointerEvents:"none"};return b.createElement("div",{className:j(y),style:C,key:`container-${y}`},f.map((c,h)=>{let{content:u,props:s}=c;return b.createElement(qe,{...s,isIn:p(s.toastId),style:{...s.style,"--nth":h+1,"--len":f.length},key:`toast-${s.key}`},u)}))}))});ye.displayName="ToastContainer",ye.defaultProps={position:"top-right",transition:Ye,autoClose:5e3,closeButton:Ce,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let he,D=new Map,W=[],Ve=1;function Se(){return""+Ve++}function Qe(e){return e&&(V(e.toastId)||X(e.toastId))?e.toastId:Se()}function K(e,i){return D.size>0?P.emit(0,e,i):W.push({content:e,options:i}),i.toastId}function oe(e,i){return{...i,type:i&&i.type||e,toastId:Qe(i)}}function ie(e){return(i,n)=>K(i,oe(e,n))}function w(e,i){return K(e,oe("default",i))}w.loading=(e,i)=>K(e,oe("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...i})),w.promise=function(e,i,n){let o,{pending:p,error:m,success:a}=i;p&&(o=V(p)?w.loading(p,n):w.loading(p.render,{...n,...p}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},k=(y,f,C)=>{if(f==null)return void w.dismiss(o);const c={type:y,...l,...n,data:C},h=V(f)?{render:f}:f;return o?w.update(o,{...c,...h}):w(h.render,{...c,...h}),C},j=I(e)?e():e;return j.then(y=>k("success",a,y)).catch(y=>k("error",m,y)),j},w.success=ie("success"),w.info=ie("info"),w.error=ie("error"),w.warning=ie("warning"),w.warn=w.warning,w.dark=(e,i)=>K(e,oe("default",{theme:"dark",...i})),w.dismiss=e=>{D.size>0?P.emit(1,e):W=W.filter(i=>e!=null&&i.options.toastId!==e)},w.clearWaitingQueue=function(e){return e===void 0&&(e={}),P.emit(5,e)},w.isActive=e=>{let i=!1;return D.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(i=!0)}),i},w.update=function(e,i){i===void 0&&(i={}),setTimeout(()=>{const n=function(o,p){let{containerId:m}=p;const a=D.get(m||he);return a&&a.getToast(o)}(e,i);if(n){const{props:o,content:p}=n,m={delay:100,...o,...i,toastId:i.toastId||e,updateId:Se()};m.toastId!==e&&(m.staleId=e);const a=m.render||p;delete m.render,K(a,m)}},0)},w.done=e=>{w.update(e,{progress:1})},w.onChange=e=>(P.on(4,e),()=>{P.off(4,e)}),w.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},w.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},P.on(2,e=>{he=e.containerId||e,D.set(he,e),W.forEach(i=>{P.emit(0,i.content,i.options)}),W=[]}).on(3,e=>{D.delete(e.containerId||e),D.size===0&&P.off(0).off(1).off(5)});const Ue={name:"",email:"",password:""},We=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,Xe=J().shape({name:U().required("Name is required"),email:U().matches(We,"Invalid email").required("Email is required"),password:U().min(6,"Password must be at least 6 characters").required("Password is required")}),Ke=({onSubmit:e,onNext:i})=>t.jsxs(Ie,{children:[t.jsx(Be,{src:Re,alt:"Responsive Image"}),t.jsxs("div",{children:[t.jsx(Le,{children:"Sign up"}),t.jsx(Pe,{children:"You need to register to use the service"}),t.jsx(Z,{initialValues:Ue,validationSchema:Xe,onSubmit:(n,{setSubmitting:o})=>{e(n),i(),o(!1)},children:({errors:n,touched:o})=>t.jsxs(Ne,{autoComplete:"off",children:[t.jsxs("label",{htmlFor:"name",children:[t.jsx(de,{name:"name",placeholder:"Name"}),n.name&&o.name?t.jsx(ce,{children:n.name}):null]}),t.jsxs("label",{htmlFor:"email",children:[t.jsx(de,{name:"email",type:"email",placeholder:"E-mail"}),n.email&&o.email?t.jsx(ce,{children:n.email}):null]}),t.jsxs("label",{htmlFor:"password",children:[t.jsx(de,{name:"password",type:"password",placeholder:"Password"}),n.password&&o.password?t.jsx(ce,{children:n.password}):null]}),t.jsx(_e,{type:"submit",children:"Next"}),t.jsxs(Fe,{children:[t.jsx(ze,{children:"Do you already have an account?"}),t.jsx(Me,{to:"/signin",children:"Sign in"})]})]})})]})]}),Je=r.div`
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
`,Ze=r.img`
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
`,et=r(ae)`
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
`,tt=r.h2`
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
`,it=r.p`
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
`,nt=r.ul`
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
`,ot=r.button`
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
`,at=r.button`
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
`,ue=r.li`
  display: flex;
  gap: 8px;
`,ge=r(re)`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  opacity: 0;
`,xe=r.label`
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
`,rt=r.div`
  color: #e74a3b;
  margin-bottom: 20px;
`,st={goal:""},lt=J({goal:U().required("Choose one of the options").oneOf(["Lose Fat","Maintain","Gain Muscle"])}),dt=({onNext:e,onBack:i,onSubmit:n})=>t.jsxs(Je,{children:[t.jsx(Ze,{alt:"Goal Image",src:"/src/components/YourGoal/img/IllustrationGoals-min.svg"}),t.jsx(Z,{initialValues:st,validationSchema:lt,onSubmit:(o,{setSubmitting:p})=>{n(o),e(),p(!1)},children:({errors:o})=>t.jsxs(et,{children:[t.jsx(tt,{children:"Your goal"}),t.jsx(it,{children:"Choose a goal so that we can help you effectively"}),t.jsxs(nt,{children:[t.jsxs(ue,{children:[t.jsx(ge,{type:"radio",id:"loseFat",name:"goal",value:"Lose Fat"}),t.jsx(xe,{htmlFor:"loseFat",children:"Lose Fat"})]}),t.jsxs(ue,{children:[t.jsx(ge,{type:"radio",id:"maintain",name:"goal",value:"Maintain"}),t.jsx(xe,{htmlFor:"maintain",children:"Maintain"})]}),t.jsxs(ue,{children:[t.jsx(ge,{type:"radio",id:"gainMuscle",name:"goal",value:"Gain Muscle"}),t.jsx(xe,{htmlFor:"gainMuscle",children:"Gain Muscle"})]})]}),t.jsx(rt,{children:o.goal}),t.jsx(ot,{type:"submit",children:"Next"}),t.jsx(at,{type:"button",onClick:i,children:"Back"})]})})]}),ct=r.div`
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
`,pt=r.img`
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
`,mt=r.h2`
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
`,ht=r.p`
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
`;r.p`
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
`;const ut=r(ae)`
  @media (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1440px) {
    margin-left: 0;
    margin-right: 0;
  }
`,gt=r.div`
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
`,je=r.p`
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
`,xt=r.div`
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
`,ft=r(re)`
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
`,yt=r.button`
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
`,wt=r.button`
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
`,vt=r.div`
  color: #e74a3b;
  margin-bottom: 20px;
`,bt=r.div`
  color: #e74a3b;
  margin-bottom: 20px;
`,jt="/HealthyHub/assets/gender-and-age-mobile-541c31ba.png",Tt="/HealthyHub/assets/gender-and-age-tablet-99eb88e0.png",Et="/HealthyHub/assets/gender-and-age-desktop-cc0787a2.png",kt=r.div`
  background-color: var(--color-primary-black);
  padding: 24px 10px;
  @media (min-width: 834px) {
    padding-top: 40px;
  }
  @media (min-width: 1024px) {
    display: flex;
  }
`,Ct=r.img`
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
`,St=r.div`
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
`,It=r.h2`
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
`,Bt=r.p`
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
`,Rt=r(ae)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`,Lt=r.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;r.li`
  gap: 8px;
  display: flex;
  align-items: center;
`;const H=r.div`
  display: flex;
  position: relative;
`,q=r(re)`
  opacity: 0;
`,Y=r.label`
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
`;r.label`
  color: var(--color-primary-white);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;const Pt=r.button`
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
`,Nt=r.button`
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
`,_t=r.div`
  color: #e74a3b;
  margin-bottom: 20px;
`,Ft={gender:"",age:""},zt=J().shape({gender:U().required("Select gender").oneOf(["male","female"]),age:fe().required("Specify age").integer("Age must be an integer").min(1,"Minimum age is 1 year").max(100,"Maximum age is 100 years")}),Mt=({onNext:e,onBack:i,onSubmit:n})=>t.jsxs(ct,{children:[t.jsx(pt,{src:jt,srcSet:`${Tt} 834w, ${Et} 1440w`,sizes:"(max-width: 833px) 100vw, (min-width: 834px) 50vw",alt:"Responsive Image"}),t.jsxs("div",{children:[t.jsx(mt,{children:"Select gender, Age"}),t.jsx(ht,{children:"Choose a goal so that we can help you effectively"}),t.jsx(Z,{initialValues:Ft,validationSchema:zt,onSubmit:(o,{setSubmitting:p})=>{n(o),e(),p(!1)},children:({errors:o})=>t.jsxs(ut,{children:[t.jsx(je,{children:"Gender"}),t.jsxs(gt,{children:[t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"male",name:"gender",value:"male"}),t.jsx(Y,{style:{width:"120px",textAlign:"start"},htmlFor:"male",children:"Male"})]}),t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"female",name:"gender",value:"female"}),t.jsx(Y,{htmlFor:"female",children:"Female"})]})]}),t.jsx(vt,{children:o.gender}),t.jsxs("label",{htmlFor:"age",children:[t.jsx(je,{children:"Your age"}),t.jsx(xt,{children:t.jsx(ft,{type:"number",id:"age",name:"age",placeholder:"Enter your age"})})]}),t.jsx(bt,{children:o.age}),t.jsx(yt,{type:"submit",children:"Next"}),t.jsx(wt,{onClick:i,children:"Back"})]})})]})]}),At=({onNext:e,onBack:i,onSubmit:n})=>t.jsx("div",{children:t.jsx(Mt,{onBack:i,onNext:e,onSubmit:n})}),Ot=r.div`
display: flex;
flex-direction: column;
`,Te=r.label`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: var(--color-primary-white);
  margin-top: 24px;
  margin-bottom: 12px;
`,Gt=r(ae)`
  display: flex;
  flex-direction: column;
`,Ee=r(re)`
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
`,$t=r.button`
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
`,Dt=r.button`
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
`,Ht=r.div`
  color: #e74a3b;
  margin-bottom: 20px;
  margin-top: 20px;
`,qt=r.div`
  color: #e74a3b;
  margin-bottom: 20px;
  margin-top: 20px;
`,Yt={height:"",weight:""},Vt=J().shape({weight:fe().required("Weight is required").min(1,"Weight should be greater than 0").positive("Weight should be a positive number"),height:fe().required("Height is required").min(1,"Height should be greater than 0").positive("Height should be a positive number")}),Qt=({onBack:e,onNext:i,onSubmit:n})=>t.jsx(Ot,{children:t.jsx(Z,{initialValues:Yt,validationSchema:Vt,onSubmit:(o,{setSubmitting:p})=>{n(o),i(),p(!1)},children:({errors:o})=>t.jsxs(Gt,{children:[t.jsx(Te,{htmlFor:"height",children:"Height"}),t.jsx(Ee,{name:"height",type:"number",id:"height",placeholder:"Enter your height"}),t.jsx(qt,{children:o.height}),t.jsx(Te,{htmlFor:"weight",children:"Weight"}),t.jsx(Ee,{name:"weight",type:"number",id:"weight",placeholder:"Enter your weight"}),t.jsx(Ht,{children:o.weight}),t.jsxs("div",{children:[t.jsx($t,{type:"submit",children:"Next"}),t.jsx(Dt,{type:"button",onClick:e,children:"Back"})]})]})})}),Ut="/HealthyHub/assets/symbol-defs-2eb7c4d7.svg#icon-body-parameters",Wt=r.svg`
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
`,Xt=()=>t.jsx("div",{children:t.jsx(Wt,{width:"300",height:"300",children:t.jsx("use",{xlinkHref:`${Ut}#icon-body-parameters`,width:"100%",height:"100%"})})}),Kt=r.div`
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
`,Jt=r.h2`
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
`,Zt=r.h3`
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
`,ei=()=>t.jsxs(Kt,{children:[t.jsx(Jt,{children:"Body parameters"}),t.jsx(Zt,{children:"Enter your parameters for correct performance tracking"})]}),ti=r.div`
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
`,ii=r.div`
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
`,ni=r.div`
  @media (min-width: 1024px) {
  margin-left: 104px;
  }
`,oi=({onNext:e,onBack:i,onSubmit:n})=>t.jsx(ti,{children:t.jsxs(ii,{children:[t.jsx(Xt,{}),t.jsxs(ni,{children:[t.jsx(ei,{}),t.jsx(Qt,{onBack:i,onNext:e,onSubmit:n})]})]})}),ai={activity:""},ri=J({activity:U().required("Сhoose your activity level").oneOf(["low 1.2-1.3","light 1.4-1.5","average 1.6-1.7","high 1.8-1.9","hard 2.0"])}),si=({onBack:e,onSubmit:i})=>t.jsxs(kt,{children:[t.jsx(Ct,{src:"/src/img/YourActivityImg/illustrationActivity-min.svg"}),t.jsxs(St,{children:[t.jsx(It,{children:"Your Activity"}),t.jsx(Bt,{children:"To correctly calculate calorie and water intake"}),t.jsx(Z,{initialValues:ai,validationSchema:ri,onSubmit:(n,{setSubmitting:o})=>{i(n),o(!1)},children:({errors:n})=>t.jsxs(Rt,{action:"#",children:[t.jsxs(Lt,{children:[t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"low 1.2-1.3",value:"low 1.2-1.3",name:"activity"}),t.jsx(Y,{htmlFor:"low 1.2-1.3",children:"1.2-1.3 - if you do not have physical activity and sedentary work"})]}),t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"light 1.4-1.5",value:"light 1.4-1.5",name:"activity"}),t.jsx(Y,{htmlFor:"light 1.4-1.5",children:"1.4-1.5 - if you do short runs or light gymnastics 1-3 times a week"})]}),t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"average 1.6-1.7",value:"average 1.6-1.7",name:"activity"}),t.jsx(Y,{htmlFor:"average 1.6-1.7",children:"1.6-1.7 - if you play sports with average loads 3-5 times a week"})]}),t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"high 1.8-1.9",value:"high 1.8-1.9",name:"activity"}),t.jsx(Y,{htmlFor:"high 1.8-1.9",children:"1.8-1.9 - if you train fully 6-7 times a week"})]}),t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"hard 2.0",value:"hard 2.0",name:"activity"}),t.jsx(Y,{htmlFor:"hard 2.0",children:"2.0 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]})]}),t.jsx(_t,{children:n.activity}),t.jsx(Pt,{type:"submit",children:"Sign Up"}),t.jsx(Nt,{type:"button",onClick:e,children:"Back"})]})})]})]}),li=()=>{const e=Ae(),[i,n]=g.useState(1),[,o]=g.useState({name:"",email:"",password:""}),[,p]=g.useState(""),[m,a]=g.useState(""),[l,k]=g.useState({age:"",gender:""}),[j,y]=g.useState({height:"",weight:""}),[f,C]=g.useState("");console.log(m,"local state dataGoal"),console.log(l,"local state dataAgeGender"),console.log(j,"local state dataBodyParams"),console.log(f,"local state dataActivity");const c=async d=>{var T;try{const E=await e(Oe(d));console.log("Response from Redux:",E),E.type==="auth/register/fulfilled"&&(w.success("Successful registration"),o(d))}catch(E){console.error("Registration Error:",E.message),((T=E==null?void 0:E.response)==null?void 0:T.status)===500?w.error("Invalid Email"):w.error("Registration failed. Please try again later."),p(E)}},h=d=>{a(d),k(d),y(d),C(d)},u=()=>{n(i+1)},s=()=>{n(i-1)};return t.jsxs("div",{children:[i===1&&t.jsx(Ke,{onSubmit:c,onNext:u}),i===2&&t.jsx(dt,{onNext:u,onBack:s,onSubmit:h}),i===3&&t.jsx(At,{onNext:u,onBack:s,onSubmit:h}),i===4&&t.jsx(oi,{onNext:u,onBack:s,onSubmit:h}),i===5&&t.jsx(si,{onNext:u,onBack:s,onSubmit:h}),t.jsx(ye,{})]})},ci=()=>t.jsx("div",{children:t.jsx(li,{})});export{ci as default};
