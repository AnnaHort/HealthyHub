import{r as g,t as v,c as ne,a as W,j as t,S as Be,I as Re,R as Le,b as Pe,d as Ne,F as oe,e as _e,f as de,E as ce,B as Fe,Q as ze,g as Me,L as Oe,s as r,h as ae,i as re,k as fe,u as Ae,l as Ge}from"./index-94a03893.js";function Ce(e){var i,o,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(i=0;i<e.length;i++)e[i]&&(o=Ce(e[i]))&&(n&&(n+=" "),n+=o);else for(i in e)e[i]&&(n&&(n+=" "),n+=i);return n}function M(){for(var e,i,o=0,n="";o<arguments.length;)(e=arguments[o++])&&(i=Ce(e))&&(n&&(n+=" "),n+=i);return n}const X=e=>typeof e=="number"&&!isNaN(e),V=e=>typeof e=="string",I=e=>typeof e=="function",te=e=>V(e)||I(e)?e:null,pe=e=>g.isValidElement(e)||V(e)||I(e)||X(e);function $e(e,i,o){o===void 0&&(o=300);const{scrollHeight:n,style:p}=e;requestAnimationFrame(()=>{p.minHeight="initial",p.height=n+"px",p.transition=`all ${o}ms`,requestAnimationFrame(()=>{p.height="0",p.padding="0",p.margin="0",setTimeout(i,o)})})}function se(e){let{enter:i,exit:o,appendPosition:n=!1,collapse:p=!0,collapseDuration:m=300}=e;return function(a){let{children:c,position:T,preventExitTransition:j,done:y,nodeRef:f,isIn:E}=a;const s=n?`${i}--${T}`:i,h=n?`${o}--${T}`:o,u=g.useRef(0);return g.useLayoutEffect(()=>{const l=f.current,d=s.split(" "),k=S=>{S.target===f.current&&(l.dispatchEvent(new Event("d")),l.removeEventListener("animationend",k),l.removeEventListener("animationcancel",k),u.current===0&&S.type!=="animationcancel"&&l.classList.remove(...d))};l.classList.add(...d),l.addEventListener("animationend",k),l.addEventListener("animationcancel",k)},[]),g.useEffect(()=>{const l=f.current,d=()=>{l.removeEventListener("animationend",d),p?$e(l,y,m):y()};E||(j?d():(u.current=1,l.className+=` ${h}`,l.addEventListener("animationend",d)))},[E]),v.createElement(v.Fragment,null,c)}}function we(e,i){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:i}:{}}const P={list:new Map,emitQueue:new Map,on(e,i){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(i),this},off(e,i){if(i){const o=this.list.get(e).filter(n=>n!==i);return this.list.set(e,o),this}return this.list.delete(e),this},cancelEmit(e){const i=this.emitQueue.get(e);return i&&(i.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(i=>{const o=setTimeout(()=>{i(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(o)})}},Z=e=>{let{theme:i,type:o,...n}=e;return v.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:i==="colored"?"currentColor":`var(--toastify-icon-color-${o})`,...n})},me={info:function(e){return v.createElement(Z,{...e},v.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return v.createElement(Z,{...e},v.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return v.createElement(Z,{...e},v.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return v.createElement(Z,{...e},v.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return v.createElement("div",{className:"Toastify__spinner"})}};function De(e){const[,i]=g.useReducer(s=>s+1,0),[o,n]=g.useState([]),p=g.useRef(null),m=g.useRef(new Map).current,a=s=>o.indexOf(s)!==-1,c=g.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:a,getToast:s=>m.get(s)}).current;function T(s){let{containerId:h}=s;const{limit:u}=c.props;!u||h&&c.containerId!==h||(c.count-=c.queue.length,c.queue=[])}function j(s){n(h=>s==null?[]:h.filter(u=>u!==s))}function y(){const{toastContent:s,toastProps:h,staleId:u}=c.queue.shift();E(s,h,u)}function f(s,h){let{delay:u,staleId:l,...d}=h;if(!pe(s)||function(L){return!p.current||c.props.enableMultiContainer&&L.containerId!==c.props.containerId||m.has(L.toastId)&&L.updateId==null}(d))return;const{toastId:k,updateId:S,data:x}=d,{props:b}=c,F=()=>j(k),z=S==null;z&&c.count++;const C={...b,style:b.toastStyle,key:c.toastKey++,...Object.fromEntries(Object.entries(d).filter(L=>{let[N,B]=L;return B!=null})),toastId:k,updateId:S,data:x,closeToast:F,isIn:!1,className:te(d.className||b.toastClassName),bodyClassName:te(d.bodyClassName||b.bodyClassName),progressClassName:te(d.progressClassName||b.progressClassName),autoClose:!d.isLoading&&(O=d.autoClose,Q=b.autoClose,O===!1||X(O)&&O>0?O:Q),deleteToast(){const L=we(m.get(k),"removed");m.delete(k),P.emit(4,L);const N=c.queue.length;if(c.count=k==null?c.count-c.displayedToast:c.count-1,c.count<0&&(c.count=0),N>0){const B=k==null?c.props.limit:1;if(N===1||B===1)c.displayedToast++,y();else{const G=B>N?N:B;c.displayedToast=G;for(let R=0;R<G;R++)y()}}else i()}};var O,Q;C.iconOut=function(L){let{theme:N,type:B,isLoading:G,icon:R}=L,_=null;const $={theme:N,type:B};return R===!1||(I(R)?_=R($):g.isValidElement(R)?_=g.cloneElement(R,$):V(R)||X(R)?_=R:G?_=me.spinner():(J=>J in me)(B)&&(_=me[B]($))),_}(C),I(d.onOpen)&&(C.onOpen=d.onOpen),I(d.onClose)&&(C.onClose=d.onClose),C.closeButton=b.closeButton,d.closeButton===!1||pe(d.closeButton)?C.closeButton=d.closeButton:d.closeButton===!0&&(C.closeButton=!pe(b.closeButton)||b.closeButton);let A=s;g.isValidElement(s)&&!V(s.type)?A=g.cloneElement(s,{closeToast:F,toastProps:C,data:x}):I(s)&&(A=s({closeToast:F,toastProps:C,data:x})),b.limit&&b.limit>0&&c.count>b.limit&&z?c.queue.push({toastContent:A,toastProps:C,staleId:l}):X(u)?setTimeout(()=>{E(A,C,l)},u):E(A,C,l)}function E(s,h,u){const{toastId:l}=h;u&&m.delete(u);const d={content:s,props:h};m.set(l,d),n(k=>[...k,l].filter(S=>S!==u)),P.emit(4,we(d,d.props.updateId==null?"added":"updated"))}return g.useEffect(()=>(c.containerId=e.containerId,P.cancelEmit(3).on(0,f).on(1,s=>p.current&&j(s)).on(5,T).emit(2,c),()=>{m.clear(),P.emit(3,c)}),[]),g.useEffect(()=>{c.props=e,c.isToastActive=a,c.displayedToast=o.length}),{getToastToRender:function(s){const h=new Map,u=Array.from(m.values());return e.newestOnTop&&u.reverse(),u.forEach(l=>{const{position:d}=l.props;h.has(d)||h.set(d,[]),h.get(d).push(l)}),Array.from(h,l=>s(l[0],l[1]))},containerRef:p,isToastActive:a}}function be(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function ve(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function He(e){const[i,o]=g.useState(!1),[n,p]=g.useState(!1),m=g.useRef(null),a=g.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,c=g.useRef(e),{autoClose:T,pauseOnHover:j,closeToast:y,onClick:f,closeOnClick:E}=e;function s(x){if(e.draggable){x.nativeEvent.type==="touchstart"&&x.nativeEvent.preventDefault(),a.didMove=!1,document.addEventListener("mousemove",d),document.addEventListener("mouseup",k),document.addEventListener("touchmove",d),document.addEventListener("touchend",k);const b=m.current;a.canCloseOnClick=!0,a.canDrag=!0,a.boundingRect=b.getBoundingClientRect(),b.style.transition="",a.x=be(x.nativeEvent),a.y=ve(x.nativeEvent),e.draggableDirection==="x"?(a.start=a.x,a.removalDistance=b.offsetWidth*(e.draggablePercent/100)):(a.start=a.y,a.removalDistance=b.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function h(x){if(a.boundingRect){const{top:b,bottom:F,left:z,right:C}=a.boundingRect;x.nativeEvent.type!=="touchend"&&e.pauseOnHover&&a.x>=z&&a.x<=C&&a.y>=b&&a.y<=F?l():u()}}function u(){o(!0)}function l(){o(!1)}function d(x){const b=m.current;a.canDrag&&b&&(a.didMove=!0,i&&l(),a.x=be(x),a.y=ve(x),a.delta=e.draggableDirection==="x"?a.x-a.start:a.y-a.start,a.start!==a.x&&(a.canCloseOnClick=!1),b.style.transform=`translate${e.draggableDirection}(${a.delta}px)`,b.style.opacity=""+(1-Math.abs(a.delta/a.removalDistance)))}function k(){document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",k),document.removeEventListener("touchmove",d),document.removeEventListener("touchend",k);const x=m.current;if(a.canDrag&&a.didMove&&x){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance)return p(!0),void e.closeToast();x.style.transition="transform 0.2s, opacity 0.2s",x.style.transform=`translate${e.draggableDirection}(0)`,x.style.opacity="1"}}g.useEffect(()=>{c.current=e}),g.useEffect(()=>(m.current&&m.current.addEventListener("d",u,{once:!0}),I(e.onOpen)&&e.onOpen(g.isValidElement(e.children)&&e.children.props),()=>{const x=c.current;I(x.onClose)&&x.onClose(g.isValidElement(x.children)&&x.children.props)}),[]),g.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||l(),window.addEventListener("focus",u),window.addEventListener("blur",l)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",u),window.removeEventListener("blur",l))}),[e.pauseOnFocusLoss]);const S={onMouseDown:s,onTouchStart:s,onMouseUp:h,onTouchEnd:h};return T&&j&&(S.onMouseEnter=l,S.onMouseLeave=u),E&&(S.onClick=x=>{f&&f(x),a.canCloseOnClick&&y()}),{playToast:u,pauseToast:l,isRunning:i,preventExitTransition:n,toastRef:m,eventHandlers:S}}function Se(e){let{closeToast:i,theme:o,ariaLabel:n="close"}=e;return v.createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:p=>{p.stopPropagation(),i(p)},"aria-label":n},v.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},v.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function qe(e){let{delay:i,isRunning:o,closeToast:n,type:p="default",hide:m,className:a,style:c,controlledProgress:T,progress:j,rtl:y,isIn:f,theme:E}=e;const s=m||T&&j===0,h={...c,animationDuration:`${i}ms`,animationPlayState:o?"running":"paused",opacity:s?0:1};T&&(h.transform=`scaleX(${j})`);const u=M("Toastify__progress-bar",T?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${E}`,`Toastify__progress-bar--${p}`,{"Toastify__progress-bar--rtl":y}),l=I(a)?a({rtl:y,type:p,defaultClassName:u}):M(u,a);return v.createElement("div",{role:"progressbar","aria-hidden":s?"true":"false","aria-label":"notification timer",className:l,style:h,[T&&j>=1?"onTransitionEnd":"onAnimationEnd"]:T&&j<1?null:()=>{f&&n()}})}const Ye=e=>{const{isRunning:i,preventExitTransition:o,toastRef:n,eventHandlers:p}=He(e),{closeButton:m,children:a,autoClose:c,onClick:T,type:j,hideProgressBar:y,closeToast:f,transition:E,position:s,className:h,style:u,bodyClassName:l,bodyStyle:d,progressClassName:k,progressStyle:S,updateId:x,role:b,progress:F,rtl:z,toastId:C,deleteToast:O,isIn:Q,isLoading:A,iconOut:L,closeOnClick:N,theme:B}=e,G=M("Toastify__toast",`Toastify__toast-theme--${B}`,`Toastify__toast--${j}`,{"Toastify__toast--rtl":z},{"Toastify__toast--close-on-click":N}),R=I(h)?h({rtl:z,position:s,type:j,defaultClassName:G}):M(G,h),_=!!F||!c,$={closeToast:f,type:j,theme:B};let J=null;return m===!1||(J=I(m)?m($):g.isValidElement(m)?g.cloneElement(m,$):Se($)),v.createElement(E,{isIn:Q,done:O,position:s,preventExitTransition:o,nodeRef:n},v.createElement("div",{id:C,onClick:T,className:R,...p,style:u,ref:n},v.createElement("div",{...Q&&{role:b},className:I(l)?l({type:j}):M("Toastify__toast-body",l),style:d},L!=null&&v.createElement("div",{className:M("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!A})},L),v.createElement("div",null,a)),J,v.createElement(qe,{...x&&!_?{key:`pb-${x}`}:{},rtl:z,theme:B,delay:c,isRunning:i,isIn:Q,closeToast:f,hide:y,type:j,style:S,className:k,controlledProgress:_,progress:F||0})))},le=function(e,i){return i===void 0&&(i=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:i}},Ve=se(le("bounce",!0));se(le("slide",!0));se(le("zoom"));se(le("flip"));const ye=g.forwardRef((e,i)=>{const{getToastToRender:o,containerRef:n,isToastActive:p}=De(e),{className:m,style:a,rtl:c,containerId:T}=e;function j(y){const f=M("Toastify__toast-container",`Toastify__toast-container--${y}`,{"Toastify__toast-container--rtl":c});return I(m)?m({position:y,rtl:c,defaultClassName:f}):M(f,te(m))}return g.useEffect(()=>{i&&(i.current=n.current)},[]),v.createElement("div",{ref:n,className:"Toastify",id:T},o((y,f)=>{const E=f.length?{...a}:{...a,pointerEvents:"none"};return v.createElement("div",{className:j(y),style:E,key:`container-${y}`},f.map((s,h)=>{let{content:u,props:l}=s;return v.createElement(Ye,{...l,isIn:p(l.toastId),style:{...l.style,"--nth":h+1,"--len":f.length},key:`toast-${l.key}`},u)}))}))});ye.displayName="ToastContainer",ye.defaultProps={position:"top-right",transition:Ve,autoClose:5e3,closeButton:Se,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let he,D=new Map,U=[],Qe=1;function Ie(){return""+Qe++}function Ue(e){return e&&(V(e.toastId)||X(e.toastId))?e.toastId:Ie()}function K(e,i){return D.size>0?P.emit(0,e,i):U.push({content:e,options:i}),i.toastId}function ie(e,i){return{...i,type:i&&i.type||e,toastId:Ue(i)}}function ee(e){return(i,o)=>K(i,ie(e,o))}function w(e,i){return K(e,ie("default",i))}w.loading=(e,i)=>K(e,ie("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...i})),w.promise=function(e,i,o){let n,{pending:p,error:m,success:a}=i;p&&(n=V(p)?w.loading(p,o):w.loading(p.render,{...o,...p}));const c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},T=(y,f,E)=>{if(f==null)return void w.dismiss(n);const s={type:y,...c,...o,data:E},h=V(f)?{render:f}:f;return n?w.update(n,{...s,...h}):w(h.render,{...s,...h}),E},j=I(e)?e():e;return j.then(y=>T("success",a,y)).catch(y=>T("error",m,y)),j},w.success=ee("success"),w.info=ee("info"),w.error=ee("error"),w.warning=ee("warning"),w.warn=w.warning,w.dark=(e,i)=>K(e,ie("default",{theme:"dark",...i})),w.dismiss=e=>{D.size>0?P.emit(1,e):U=U.filter(i=>e!=null&&i.options.toastId!==e)},w.clearWaitingQueue=function(e){return e===void 0&&(e={}),P.emit(5,e)},w.isActive=e=>{let i=!1;return D.forEach(o=>{o.isToastActive&&o.isToastActive(e)&&(i=!0)}),i},w.update=function(e,i){i===void 0&&(i={}),setTimeout(()=>{const o=function(n,p){let{containerId:m}=p;const a=D.get(m||he);return a&&a.getToast(n)}(e,i);if(o){const{props:n,content:p}=o,m={delay:100,...n,...i,toastId:i.toastId||e,updateId:Ie()};m.toastId!==e&&(m.staleId=e);const a=m.render||p;delete m.render,K(a,m)}},0)},w.done=e=>{w.update(e,{progress:1})},w.onChange=e=>(P.on(4,e),()=>{P.off(4,e)}),w.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},w.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},P.on(2,e=>{he=e.containerId||e,D.set(he,e),U.forEach(i=>{P.emit(0,i.content,i.options)}),U=[]}).on(3,e=>{D.delete(e.containerId||e),D.size===0&&P.off(0).off(1).off(5)});const We={name:"",email:"",password:""},Xe=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,Ke=ne().shape({name:W().required("Name is required"),email:W().matches(Xe,"Invalid email").required("Email is required"),password:W().min(6,"Password must be at least 6 characters").required("Password is required")}),Je=({onSubmit:e,onNext:i})=>t.jsxs(Be,{children:[t.jsx(Re,{src:Le,alt:"Responsive Image"}),t.jsxs("div",{children:[t.jsx(Pe,{children:"Sign up"}),t.jsx(Ne,{children:"You need to register to use the service"}),t.jsx(oe,{initialValues:We,validationSchema:Ke,onSubmit:(o,{setSubmitting:n})=>{e(o),i(),n(!1)},children:({errors:o,touched:n})=>t.jsxs(_e,{autoComplete:"off",children:[t.jsxs("label",{htmlFor:"name",children:[t.jsx(de,{name:"name",placeholder:"Name"}),o.name&&n.name?t.jsx(ce,{children:o.name}):null]}),t.jsxs("label",{htmlFor:"email",children:[t.jsx(de,{name:"email",type:"email",placeholder:"E-mail"}),o.email&&n.email?t.jsx(ce,{children:o.email}):null]}),t.jsxs("label",{htmlFor:"password",children:[t.jsx(de,{name:"password",type:"password",placeholder:"Password"}),o.password&&n.password?t.jsx(ce,{children:o.password}):null]}),t.jsx(Fe,{type:"submit",children:"Next"}),t.jsxs(ze,{children:[t.jsx(Me,{children:"Do you already have an account?"}),t.jsx(Oe,{to:"/signin",children:"Sign in"})]})]})})]})]}),Ze=r.div`
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
`,et=r.img`
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
`,tt=r(ae)`
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
`,it=r.h2`
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
`,nt=r.p`
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
`,ot=r.ul`
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
`,at=r.button`
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
`,rt=r.button`
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
`,st=r.div`
  color: #e74a3b;
  margin-bottom: 20px;
`,lt={goal:""},dt=ne({goal:W().required("Choose one of the options").oneOf(["Lose Fat","Maintain","Gain Muscle"])}),ct=({onNext:e,onBack:i,onSubmit:o})=>t.jsxs(Ze,{children:[t.jsx(et,{alt:"Goal Image",src:"/src/components/YourGoal/img/IllustrationGoals-min.svg"}),t.jsx(oe,{initialValues:lt,validationSchema:dt,onSubmit:(n,{setSubmitting:p})=>{o(n),e(),p(!1)},children:({errors:n})=>t.jsxs(tt,{children:[t.jsx(it,{children:"Your goal"}),t.jsx(nt,{children:"Choose a goal so that we can help you effectively"}),t.jsxs(ot,{children:[t.jsxs(ue,{children:[t.jsx(ge,{type:"radio",id:"loseFat",name:"goal",value:"Lose Fat"}),t.jsx(xe,{htmlFor:"loseFat",children:"Lose Fat"})]}),t.jsxs(ue,{children:[t.jsx(ge,{type:"radio",id:"maintain",name:"goal",value:"Maintain"}),t.jsx(xe,{htmlFor:"maintain",children:"Maintain"})]}),t.jsxs(ue,{children:[t.jsx(ge,{type:"radio",id:"gainMuscle",name:"goal",value:"Gain Muscle"}),t.jsx(xe,{htmlFor:"gainMuscle",children:"Gain Muscle"})]})]}),t.jsx(st,{children:n.goal}),t.jsx(at,{type:"submit",children:"Next"}),t.jsx(rt,{type:"button",onClick:i,children:"Back"})]})})]}),pt=r.div`
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
`,mt=r.img`
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
`,ht=r.h2`
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
`,ut=r.p`
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
`;const gt=r(ae)`
  @media (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1440px) {
    margin-left: 0;
    margin-right: 0;
  }
`,xt=r.div`
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
`,ft=r.div`
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
`,yt=r(re)`
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
`,wt=r.button`
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
`,bt=r.button`
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
`,jt=r.div`
  color: #e74a3b;
  margin-bottom: 20px;
`,Tt="/HealthyHub/assets/gender-and-age-mobile-541c31ba.png",Et="/HealthyHub/assets/gender-and-age-tablet-99eb88e0.png",kt="/HealthyHub/assets/gender-and-age-desktop-cc0787a2.png",Ct=r.div`
  background-color: var(--color-primary-black);
  padding: 24px 10px;
  @media (min-width: 834px) {
    padding-top: 40px;
  }
  @media (min-width: 1024px) {
    display: flex;
  }
`,St=r.img`
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
`,It=r.div`
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
`,Bt=r.h2`
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
`,Rt=r.p`
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
`,Lt=r(ae)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`,Pt=r.ul`
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
`;const Nt=r.button`
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
`,_t=r.button`
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
`,Ft={gender:"",age:""},zt=ne().shape({gender:W().required("Select gender").oneOf(["male","female"]),age:fe().required("Specify age").integer("Age must be an integer").min(1,"Minimum age is 1 year").max(100,"Maximum age is 100 years")}),Mt=({onNext:e,onBack:i,onSubmit:o})=>t.jsxs(pt,{children:[t.jsx(mt,{src:Tt,srcSet:`${Et} 834w, ${kt} 1440w`,sizes:"(max-width: 833px) 100vw, (min-width: 834px) 50vw",alt:"Responsive Image"}),t.jsxs("div",{children:[t.jsx(ht,{children:"Select gender, Age"}),t.jsx(ut,{children:"Choose a goal so that we can help you effectively"}),t.jsx(oe,{initialValues:Ft,validationSchema:zt,onSubmit:(n,{setSubmitting:p})=>{o(n),e(),p(!1)},children:({errors:n})=>t.jsxs(gt,{children:[t.jsx(je,{children:"Gender"}),t.jsxs(xt,{children:[t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"male",name:"gender",value:"male"}),t.jsx(Y,{style:{width:"120px",textAlign:"start"},htmlFor:"male",children:"Male"})]}),t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"female",name:"gender",value:"female"}),t.jsx(Y,{htmlFor:"female",children:"Female"})]})]}),t.jsx(vt,{children:n.gender}),t.jsxs("label",{htmlFor:"age",children:[t.jsx(je,{children:"Your age"}),t.jsx(ft,{children:t.jsx(yt,{type:"number",id:"age",name:"age",placeholder:"Enter your age"})})]}),t.jsx(jt,{children:n.age}),t.jsx(wt,{type:"submit",children:"Next"}),t.jsx(bt,{onClick:i,children:"Back"})]})})]})]}),Ot=({onNext:e,onBack:i,onSubmit:o})=>t.jsx("div",{children:t.jsx(Mt,{onBack:i,onNext:e,onSubmit:o})}),At=r.div`
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
`,Yt={height:"",weight:""},Vt=ne().shape({weight:fe().required("Weight is required").min(1,"Weight should be greater than 0").positive("Weight should be a positive number"),height:fe().required("Height is required").min(1,"Height should be greater than 0").positive("Height should be a positive number")}),Qt=({onBack:e,onNext:i,onSubmit:o})=>t.jsx(At,{children:t.jsx(oe,{initialValues:Yt,validationSchema:Vt,onSubmit:(n,{setSubmitting:p})=>{o(n),i(),p(!1)},children:({errors:n})=>t.jsxs(Gt,{children:[t.jsx(Te,{htmlFor:"height",children:"Height"}),t.jsx(Ee,{name:"height",type:"number",id:"height",placeholder:"Enter your height"}),t.jsx(qt,{children:n.height}),t.jsx(Te,{htmlFor:"weight",children:"Weight"}),t.jsx(Ee,{name:"weight",type:"number",id:"weight",placeholder:"Enter your weight"}),t.jsx(Ht,{children:n.weight}),t.jsxs("div",{children:[t.jsx($t,{type:"submit",children:"Next"}),t.jsx(Dt,{type:"button",onClick:e,children:"Back"})]})]})})}),Ut="/HealthyHub/assets/symbol-defs-2eb7c4d7.svg#icon-body-parameters",Wt=r.svg`
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
`,oi=({onNext:e,onBack:i,onSubmit:o})=>t.jsx(ti,{children:t.jsxs(ii,{children:[t.jsx(Xt,{}),t.jsxs(ni,{children:[t.jsx(ei,{}),t.jsx(Qt,{onBack:i,onNext:e,onSubmit:o})]})]})}),ke=({onBack:e})=>t.jsxs(Ct,{children:[t.jsx(St,{src:"/src/img/YourActivityImg/illustrationActivity-min.svg"}),t.jsxs(It,{children:[t.jsx(Bt,{children:"Your Activity"}),t.jsx(Rt,{children:"To correctly calculate calorie and water intake"}),t.jsxs(Lt,{action:"#",children:[t.jsxs(Pt,{children:[t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"radio1",name:"radiogroup",tabindex:"0"}),t.jsx(Y,{htmlFor:"radio1",children:"1.2 - if you do not have physical activity and sedentary work"})]}),t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"radio2",name:"radiogroup",tabindex:"0"}),t.jsx(Y,{htmlFor:"radio2",children:"1.375 - if you do short runs or light gymnastics 1-3 times a week"})]}),t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"radio3",name:"radiogroup",tabindex:"0"}),t.jsx(Y,{htmlFor:"radio3",children:"1.55 - if you play sports with average loads 3-5 times a week"})]}),t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"radio4",name:"radiogroup",tabindex:"0"}),t.jsx(Y,{htmlFor:"radio4",children:"1.725 - if you train fully 6-7 times a week"})]}),t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"radio5",name:"radiogroup",tabindex:"0"}),t.jsx(Y,{htmlFor:"radio5",children:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]})]}),t.jsx(Nt,{type:"submit",children:"Sign Up"}),t.jsx(_t,{type:"button",onClick:e,children:"Back"})]})]})]}),ai=()=>{const e=Ae(),[i,o]=g.useState(1),[,n]=g.useState({name:"",email:"",password:""}),[,p]=g.useState(""),[m,a]=g.useState(""),[c,T]=g.useState({age:"",gender:""}),[j,y]=g.useState("");console.log(m,"local state dataGoal"),console.log(c,"local state dataAgeGender"),console.log(j,"local state dataBodyParams");const f=async u=>{var l;try{const d=await e(Ge(u));console.log("Response from Redux:",d),d.type==="auth/register/fulfilled"&&(w.success("Successful registration"),n(u))}catch(d){console.error("Registration Error:",d.message),((l=d==null?void 0:d.response)==null?void 0:l.status)===500?w.error("Invalid Email"):w.error("Registration failed. Please try again later."),p(d)}},E=u=>{a(u),T(u),y(u)},s=()=>{o(i+1)},h=()=>{o(i-1)};return t.jsxs("div",{children:[" ",t.jsx(ke,{}),i===1&&t.jsx(Je,{onSubmit:f,onNext:s}),i===2&&t.jsx(ct,{onNext:s,onBack:h,onSubmit:E}),i===3&&t.jsx(Ot,{onNext:s,onBack:h,onSubmit:E}),i===4&&t.jsx(oi,{onNext:s,onBack:h,onSubmit:E}),i===5&&t.jsx(ke,{onNext:s,onBack:h}),t.jsx(ye,{})]})},si=()=>t.jsx("div",{children:t.jsx(ai,{})});export{si as default};
