import{r as g,t as v,c as fe,a as W,j as t,S as Se,I as Re,R as Be,b as Le,d as Fe,F as ne,e as Ne,f as le,E as de,B as Pe,Q as _e,g as ze,L as Me,s as r,h as oe,i as ae,k as Oe,l as ye,u as Ae,m as Ge}from"./index-e89a4bd4.js";function ke(e){var i,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(i=0;i<e.length;i++)e[i]&&(n=ke(e[i]))&&(o&&(o+=" "),o+=n);else for(i in e)e[i]&&(o&&(o+=" "),o+=i);return o}function M(){for(var e,i,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(i=ke(e))&&(o&&(o+=" "),o+=i);return o}const X=e=>typeof e=="number"&&!isNaN(e),V=e=>typeof e=="string",S=e=>typeof e=="function",te=e=>V(e)||S(e)?e:null,ce=e=>g.isValidElement(e)||V(e)||S(e)||X(e);function $e(e,i,n){n===void 0&&(n=300);const{scrollHeight:o,style:c}=e;requestAnimationFrame(()=>{c.minHeight="initial",c.height=o+"px",c.transition=`all ${n}ms`,requestAnimationFrame(()=>{c.height="0",c.padding="0",c.margin="0",setTimeout(i,n)})})}function re(e){let{enter:i,exit:n,appendPosition:o=!1,collapse:c=!0,collapseDuration:p=300}=e;return function(a){let{children:s,position:T,preventExitTransition:j,done:y,nodeRef:x,isIn:E}=a;const l=o?`${i}--${T}`:i,u=o?`${n}--${T}`:n,m=g.useRef(0);return g.useLayoutEffect(()=>{const d=x.current,h=l.split(" "),k=I=>{I.target===x.current&&(d.dispatchEvent(new Event("d")),d.removeEventListener("animationend",k),d.removeEventListener("animationcancel",k),m.current===0&&I.type!=="animationcancel"&&d.classList.remove(...h))};d.classList.add(...h),d.addEventListener("animationend",k),d.addEventListener("animationcancel",k)},[]),g.useEffect(()=>{const d=x.current,h=()=>{d.removeEventListener("animationend",h),c?$e(d,y,p):y()};E||(j?h():(m.current=1,d.className+=` ${u}`,d.addEventListener("animationend",h)))},[E]),v.createElement(v.Fragment,null,s)}}function we(e,i){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:i}:{}}const F={list:new Map,emitQueue:new Map,on(e,i){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(i),this},off(e,i){if(i){const n=this.list.get(e).filter(o=>o!==i);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const i=this.emitQueue.get(e);return i&&(i.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(i=>{const n=setTimeout(()=>{i(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},Z=e=>{let{theme:i,type:n,...o}=e;return v.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:i==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...o})},pe={info:function(e){return v.createElement(Z,{...e},v.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return v.createElement(Z,{...e},v.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return v.createElement(Z,{...e},v.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return v.createElement(Z,{...e},v.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return v.createElement("div",{className:"Toastify__spinner"})}};function De(e){const[,i]=g.useReducer(l=>l+1,0),[n,o]=g.useState([]),c=g.useRef(null),p=g.useRef(new Map).current,a=l=>n.indexOf(l)!==-1,s=g.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:a,getToast:l=>p.get(l)}).current;function T(l){let{containerId:u}=l;const{limit:m}=s.props;!m||u&&s.containerId!==u||(s.count-=s.queue.length,s.queue=[])}function j(l){o(u=>l==null?[]:u.filter(m=>m!==l))}function y(){const{toastContent:l,toastProps:u,staleId:m}=s.queue.shift();E(l,u,m)}function x(l,u){let{delay:m,staleId:d,...h}=u;if(!ce(l)||function(L){return!c.current||s.props.enableMultiContainer&&L.containerId!==s.props.containerId||p.has(L.toastId)&&L.updateId==null}(h))return;const{toastId:k,updateId:I,data:f}=h,{props:b}=s,_=()=>j(k),z=I==null;z&&s.count++;const C={...b,style:b.toastStyle,key:s.toastKey++,...Object.fromEntries(Object.entries(h).filter(L=>{let[N,R]=L;return R!=null})),toastId:k,updateId:I,data:f,closeToast:_,isIn:!1,className:te(h.className||b.toastClassName),bodyClassName:te(h.bodyClassName||b.bodyClassName),progressClassName:te(h.progressClassName||b.progressClassName),autoClose:!h.isLoading&&(O=h.autoClose,Q=b.autoClose,O===!1||X(O)&&O>0?O:Q),deleteToast(){const L=we(p.get(k),"removed");p.delete(k),F.emit(4,L);const N=s.queue.length;if(s.count=k==null?s.count-s.displayedToast:s.count-1,s.count<0&&(s.count=0),N>0){const R=k==null?s.props.limit:1;if(N===1||R===1)s.displayedToast++,y();else{const G=R>N?N:R;s.displayedToast=G;for(let B=0;B<G;B++)y()}}else i()}};var O,Q;C.iconOut=function(L){let{theme:N,type:R,isLoading:G,icon:B}=L,P=null;const $={theme:N,type:R};return B===!1||(S(B)?P=B($):g.isValidElement(B)?P=g.cloneElement(B,$):V(B)||X(B)?P=B:G?P=pe.spinner():(J=>J in pe)(R)&&(P=pe[R]($))),P}(C),S(h.onOpen)&&(C.onOpen=h.onOpen),S(h.onClose)&&(C.onClose=h.onClose),C.closeButton=b.closeButton,h.closeButton===!1||ce(h.closeButton)?C.closeButton=h.closeButton:h.closeButton===!0&&(C.closeButton=!ce(b.closeButton)||b.closeButton);let A=l;g.isValidElement(l)&&!V(l.type)?A=g.cloneElement(l,{closeToast:_,toastProps:C,data:f}):S(l)&&(A=l({closeToast:_,toastProps:C,data:f})),b.limit&&b.limit>0&&s.count>b.limit&&z?s.queue.push({toastContent:A,toastProps:C,staleId:d}):X(m)?setTimeout(()=>{E(A,C,d)},m):E(A,C,d)}function E(l,u,m){const{toastId:d}=u;m&&p.delete(m);const h={content:l,props:u};p.set(d,h),o(k=>[...k,d].filter(I=>I!==m)),F.emit(4,we(h,h.props.updateId==null?"added":"updated"))}return g.useEffect(()=>(s.containerId=e.containerId,F.cancelEmit(3).on(0,x).on(1,l=>c.current&&j(l)).on(5,T).emit(2,s),()=>{p.clear(),F.emit(3,s)}),[]),g.useEffect(()=>{s.props=e,s.isToastActive=a,s.displayedToast=n.length}),{getToastToRender:function(l){const u=new Map,m=Array.from(p.values());return e.newestOnTop&&m.reverse(),m.forEach(d=>{const{position:h}=d.props;u.has(h)||u.set(h,[]),u.get(h).push(d)}),Array.from(u,d=>l(d[0],d[1]))},containerRef:c,isToastActive:a}}function be(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function ve(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function He(e){const[i,n]=g.useState(!1),[o,c]=g.useState(!1),p=g.useRef(null),a=g.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,s=g.useRef(e),{autoClose:T,pauseOnHover:j,closeToast:y,onClick:x,closeOnClick:E}=e;function l(f){if(e.draggable){f.nativeEvent.type==="touchstart"&&f.nativeEvent.preventDefault(),a.didMove=!1,document.addEventListener("mousemove",h),document.addEventListener("mouseup",k),document.addEventListener("touchmove",h),document.addEventListener("touchend",k);const b=p.current;a.canCloseOnClick=!0,a.canDrag=!0,a.boundingRect=b.getBoundingClientRect(),b.style.transition="",a.x=be(f.nativeEvent),a.y=ve(f.nativeEvent),e.draggableDirection==="x"?(a.start=a.x,a.removalDistance=b.offsetWidth*(e.draggablePercent/100)):(a.start=a.y,a.removalDistance=b.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function u(f){if(a.boundingRect){const{top:b,bottom:_,left:z,right:C}=a.boundingRect;f.nativeEvent.type!=="touchend"&&e.pauseOnHover&&a.x>=z&&a.x<=C&&a.y>=b&&a.y<=_?d():m()}}function m(){n(!0)}function d(){n(!1)}function h(f){const b=p.current;a.canDrag&&b&&(a.didMove=!0,i&&d(),a.x=be(f),a.y=ve(f),a.delta=e.draggableDirection==="x"?a.x-a.start:a.y-a.start,a.start!==a.x&&(a.canCloseOnClick=!1),b.style.transform=`translate${e.draggableDirection}(${a.delta}px)`,b.style.opacity=""+(1-Math.abs(a.delta/a.removalDistance)))}function k(){document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",k),document.removeEventListener("touchmove",h),document.removeEventListener("touchend",k);const f=p.current;if(a.canDrag&&a.didMove&&f){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance)return c(!0),void e.closeToast();f.style.transition="transform 0.2s, opacity 0.2s",f.style.transform=`translate${e.draggableDirection}(0)`,f.style.opacity="1"}}g.useEffect(()=>{s.current=e}),g.useEffect(()=>(p.current&&p.current.addEventListener("d",m,{once:!0}),S(e.onOpen)&&e.onOpen(g.isValidElement(e.children)&&e.children.props),()=>{const f=s.current;S(f.onClose)&&f.onClose(g.isValidElement(f.children)&&f.children.props)}),[]),g.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||d(),window.addEventListener("focus",m),window.addEventListener("blur",d)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",m),window.removeEventListener("blur",d))}),[e.pauseOnFocusLoss]);const I={onMouseDown:l,onTouchStart:l,onMouseUp:u,onTouchEnd:u};return T&&j&&(I.onMouseEnter=d,I.onMouseLeave=m),E&&(I.onClick=f=>{x&&x(f),a.canCloseOnClick&&y()}),{playToast:m,pauseToast:d,isRunning:i,preventExitTransition:o,toastRef:p,eventHandlers:I}}function Ce(e){let{closeToast:i,theme:n,ariaLabel:o="close"}=e;return v.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:c=>{c.stopPropagation(),i(c)},"aria-label":o},v.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},v.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function qe(e){let{delay:i,isRunning:n,closeToast:o,type:c="default",hide:p,className:a,style:s,controlledProgress:T,progress:j,rtl:y,isIn:x,theme:E}=e;const l=p||T&&j===0,u={...s,animationDuration:`${i}ms`,animationPlayState:n?"running":"paused",opacity:l?0:1};T&&(u.transform=`scaleX(${j})`);const m=M("Toastify__progress-bar",T?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${E}`,`Toastify__progress-bar--${c}`,{"Toastify__progress-bar--rtl":y}),d=S(a)?a({rtl:y,type:c,defaultClassName:m}):M(m,a);return v.createElement("div",{role:"progressbar","aria-hidden":l?"true":"false","aria-label":"notification timer",className:d,style:u,[T&&j>=1?"onTransitionEnd":"onAnimationEnd"]:T&&j<1?null:()=>{x&&o()}})}const Ye=e=>{const{isRunning:i,preventExitTransition:n,toastRef:o,eventHandlers:c}=He(e),{closeButton:p,children:a,autoClose:s,onClick:T,type:j,hideProgressBar:y,closeToast:x,transition:E,position:l,className:u,style:m,bodyClassName:d,bodyStyle:h,progressClassName:k,progressStyle:I,updateId:f,role:b,progress:_,rtl:z,toastId:C,deleteToast:O,isIn:Q,isLoading:A,iconOut:L,closeOnClick:N,theme:R}=e,G=M("Toastify__toast",`Toastify__toast-theme--${R}`,`Toastify__toast--${j}`,{"Toastify__toast--rtl":z},{"Toastify__toast--close-on-click":N}),B=S(u)?u({rtl:z,position:l,type:j,defaultClassName:G}):M(G,u),P=!!_||!s,$={closeToast:x,type:j,theme:R};let J=null;return p===!1||(J=S(p)?p($):g.isValidElement(p)?g.cloneElement(p,$):Ce($)),v.createElement(E,{isIn:Q,done:O,position:l,preventExitTransition:n,nodeRef:o},v.createElement("div",{id:C,onClick:T,className:B,...c,style:m,ref:o},v.createElement("div",{...Q&&{role:b},className:S(d)?d({type:j}):M("Toastify__toast-body",d),style:h},L!=null&&v.createElement("div",{className:M("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!A})},L),v.createElement("div",null,a)),J,v.createElement(qe,{...f&&!P?{key:`pb-${f}`}:{},rtl:z,theme:R,delay:s,isRunning:i,isIn:Q,closeToast:x,hide:y,type:j,style:I,className:k,controlledProgress:P,progress:_||0})))},se=function(e,i){return i===void 0&&(i=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:i}},Ve=re(se("bounce",!0));re(se("slide",!0));re(se("zoom"));re(se("flip"));const xe=g.forwardRef((e,i)=>{const{getToastToRender:n,containerRef:o,isToastActive:c}=De(e),{className:p,style:a,rtl:s,containerId:T}=e;function j(y){const x=M("Toastify__toast-container",`Toastify__toast-container--${y}`,{"Toastify__toast-container--rtl":s});return S(p)?p({position:y,rtl:s,defaultClassName:x}):M(x,te(p))}return g.useEffect(()=>{i&&(i.current=o.current)},[]),v.createElement("div",{ref:o,className:"Toastify",id:T},n((y,x)=>{const E=x.length?{...a}:{...a,pointerEvents:"none"};return v.createElement("div",{className:j(y),style:E,key:`container-${y}`},x.map((l,u)=>{let{content:m,props:d}=l;return v.createElement(Ye,{...d,isIn:c(d.toastId),style:{...d.style,"--nth":u+1,"--len":x.length},key:`toast-${d.key}`},m)}))}))});xe.displayName="ToastContainer",xe.defaultProps={position:"top-right",transition:Ve,autoClose:5e3,closeButton:Ce,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let me,D=new Map,U=[],Qe=1;function Ie(){return""+Qe++}function Ue(e){return e&&(V(e.toastId)||X(e.toastId))?e.toastId:Ie()}function K(e,i){return D.size>0?F.emit(0,e,i):U.push({content:e,options:i}),i.toastId}function ie(e,i){return{...i,type:i&&i.type||e,toastId:Ue(i)}}function ee(e){return(i,n)=>K(i,ie(e,n))}function w(e,i){return K(e,ie("default",i))}w.loading=(e,i)=>K(e,ie("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...i})),w.promise=function(e,i,n){let o,{pending:c,error:p,success:a}=i;c&&(o=V(c)?w.loading(c,n):w.loading(c.render,{...n,...c}));const s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},T=(y,x,E)=>{if(x==null)return void w.dismiss(o);const l={type:y,...s,...n,data:E},u=V(x)?{render:x}:x;return o?w.update(o,{...l,...u}):w(u.render,{...l,...u}),E},j=S(e)?e():e;return j.then(y=>T("success",a,y)).catch(y=>T("error",p,y)),j},w.success=ee("success"),w.info=ee("info"),w.error=ee("error"),w.warning=ee("warning"),w.warn=w.warning,w.dark=(e,i)=>K(e,ie("default",{theme:"dark",...i})),w.dismiss=e=>{D.size>0?F.emit(1,e):U=U.filter(i=>e!=null&&i.options.toastId!==e)},w.clearWaitingQueue=function(e){return e===void 0&&(e={}),F.emit(5,e)},w.isActive=e=>{let i=!1;return D.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(i=!0)}),i},w.update=function(e,i){i===void 0&&(i={}),setTimeout(()=>{const n=function(o,c){let{containerId:p}=c;const a=D.get(p||me);return a&&a.getToast(o)}(e,i);if(n){const{props:o,content:c}=n,p={delay:100,...o,...i,toastId:i.toastId||e,updateId:Ie()};p.toastId!==e&&(p.staleId=e);const a=p.render||c;delete p.render,K(a,p)}},0)},w.done=e=>{w.update(e,{progress:1})},w.onChange=e=>(F.on(4,e),()=>{F.off(4,e)}),w.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},w.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},F.on(2,e=>{me=e.containerId||e,D.set(me,e),U.forEach(i=>{F.emit(0,i.content,i.options)}),U=[]}).on(3,e=>{D.delete(e.containerId||e),D.size===0&&F.off(0).off(1).off(5)});const We={name:"",email:"",password:""},Xe=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,Ke=fe().shape({name:W().required("Name is required"),email:W().matches(Xe,"Invalid email").required("Email is required"),password:W().min(6,"Password must be at least 6 characters").required("Password is required")}),Je=({onSubmit:e,onNext:i})=>t.jsxs(Se,{children:[t.jsx(Re,{src:Be,alt:"Responsive Image"}),t.jsxs("div",{children:[t.jsx(Le,{children:"Sign up"}),t.jsx(Fe,{children:"You need to register to use the service"}),t.jsx(ne,{initialValues:We,validationSchema:Ke,onSubmit:(n,{setSubmitting:o})=>{e(n),i(),o(!1)},children:({errors:n,touched:o})=>t.jsxs(Ne,{autoComplete:"off",children:[t.jsxs("label",{htmlFor:"name",children:[t.jsx(le,{name:"name",placeholder:"Name"}),n.name&&o.name?t.jsx(de,{children:n.name}):null]}),t.jsxs("label",{htmlFor:"email",children:[t.jsx(le,{name:"email",type:"email",placeholder:"E-mail"}),n.email&&o.email?t.jsx(de,{children:n.email}):null]}),t.jsxs("label",{htmlFor:"password",children:[t.jsx(le,{name:"password",type:"password",placeholder:"Password"}),n.password&&o.password?t.jsx(de,{children:n.password}):null]}),t.jsx(Pe,{type:"submit",children:"Next"}),t.jsxs(_e,{children:[t.jsx(ze,{children:"Do you already have an account?"}),t.jsx(Me,{to:"/signin",children:"Sign in"})]})]})})]})]}),Ze=r.div`
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
`,tt=r(oe)`
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
`,he=r.li`
  display: flex;
  gap: 8px;
`,ue=r(ae)`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  opacity: 0;
`,ge=r.label`
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
`,lt={goal:""},dt=fe({goal:W().required("Choose one of the options").oneOf(["Lose Fat","Maintain","Gain Muscle"])}),ct=({onNext:e,onBack:i,onSubmit:n})=>t.jsxs(Ze,{children:[t.jsx(et,{alt:"Goal Image",src:"/src/components/YourGoal/img/IllustrationGoals-min.svg"}),t.jsx(ne,{initialValues:lt,validationSchema:dt,onSubmit:(o,{setSubmitting:c})=>{n(o),e(),c(!1)},children:({errors:o})=>t.jsxs(tt,{children:[t.jsx(it,{children:"Your goal"}),t.jsx(nt,{children:"Choose a goal so that we can help you effectively"}),t.jsxs(ot,{children:[t.jsxs(he,{children:[t.jsx(ue,{type:"radio",id:"loseFat",name:"goal",value:"Lose Fat"}),t.jsx(ge,{htmlFor:"loseFat",children:"Lose Fat"})]}),t.jsxs(he,{children:[t.jsx(ue,{type:"radio",id:"maintain",name:"goal",value:"Maintain"}),t.jsx(ge,{htmlFor:"maintain",children:"Maintain"})]}),t.jsxs(he,{children:[t.jsx(ue,{type:"radio",id:"gainMuscle",name:"goal",value:"Gain Muscle"}),t.jsx(ge,{htmlFor:"gainMuscle",children:"Gain Muscle"})]})]}),t.jsx(st,{children:o.goal}),t.jsx(at,{type:"submit",children:"Next"}),t.jsx(rt,{type:"button",onClick:i,children:"Back"})]})})]}),pt=r.div`
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
`;const gt=r(oe)`
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
`,yt=r(ae)`
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
`,It=r.img`
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
`,Rt=r.h2`
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
`,Lt=r(oe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`,Ft=r.ul`
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
`,q=r(ae)`
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
`,Pt=r.button`
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
`,_t={gender:"",age:""},zt=fe().shape({gender:W().required("Select gender").oneOf(["male","female"]),age:Oe().required("Specify age").integer("Age must be an integer").min(1,"Minimum age is 1 year").max(100,"Maximum age is 100 years")}),Mt=({onNext:e,onBack:i,onSubmit:n})=>t.jsxs(pt,{children:[t.jsx(mt,{src:Tt,srcSet:`${Et} 834w, ${kt} 1440w`,sizes:"(max-width: 833px) 100vw, (min-width: 834px) 50vw",alt:"Responsive Image"}),t.jsxs("div",{children:[t.jsx(ht,{children:"Select gender, Age"}),t.jsx(ut,{children:"Choose a goal so that we can help you effectively"}),t.jsx(ne,{initialValues:_t,validationSchema:zt,onSubmit:(o,{setSubmitting:c})=>{n(o),e(),c(!1)},children:({errors:o,values:c})=>(console.log("Form Values:",c),console.log("Form Errors:",o),t.jsxs(gt,{children:[t.jsx(je,{children:"Gender"}),t.jsxs(xt,{children:[t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"male",name:"gender",value:"male"}),t.jsx(Y,{style:{width:"120px",textAlign:"start"},htmlFor:"male",children:"Male"})]}),t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"female",name:"gender",value:"female"}),t.jsx(Y,{htmlFor:"female",children:"Female"})]})]}),t.jsx(vt,{children:o.gender}),t.jsxs("label",{htmlFor:"age",children:[t.jsx(je,{children:"Your age"}),t.jsx(ft,{children:t.jsx(yt,{type:"text",id:"age",name:"age",placeholder:"Enter your age"})})]}),t.jsx(jt,{children:o.age}),t.jsx(wt,{type:"submit",children:"Next"}),t.jsx(bt,{onClick:i,children:"Back"})]}))})]})]}),Ot=({onNext:e,onBack:i,onSubmit:n})=>t.jsx("div",{children:t.jsx(Mt,{onBack:i,onNext:e,onSubmit:n})}),At=r.div`
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
`,Gt=r(oe)`
  display: flex;
  flex-direction: column;
`,Ee=r(ae)`
  width: 100%;
  height: 36px;
  padding-left: 10px;
  border-radius: 12px;
  background-color: inherit;
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
`,Ht=({onBack:e,onNext:i})=>t.jsx(At,{children:t.jsx(ne,{initialValues:{height:"",weight:""},onSubmit:n=>{console.log(n),i()},children:t.jsxs(Gt,{children:[t.jsx(Te,{htmlFor:"height",children:"Height"}),t.jsx(Ee,{name:"height",type:"number",required:!0,placeholder:"Enter your height"}),t.jsx(ye,{name:"height",component:"div"}),t.jsx(Te,{htmlFor:"weight",children:"Weight"}),t.jsx(Ee,{name:"weight",type:"number",required:!0,placeholder:"Enter your weight"}),t.jsx(ye,{name:"weight",component:"div"}),t.jsxs("div",{children:[t.jsx($t,{type:"submit",children:"Next"}),t.jsx(Dt,{type:"button",onClick:e,children:"Back"})]})]})})}),qt="/HealthyHub/assets/symbol-defs-2eb7c4d7.svg#icon-body-parameters",Yt=r.svg`
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
`,Vt=()=>t.jsx("div",{children:t.jsx(Yt,{width:"300",height:"300",children:t.jsx("use",{xlinkHref:`${qt}#icon-body-parameters`,width:"100%",height:"100%"})})}),Qt=r.div`
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
`,Ut=r.h2`
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
`,Wt=r.h3`
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
`,Xt=()=>t.jsxs(Qt,{children:[t.jsx(Ut,{children:"Body parameters"}),t.jsx(Wt,{children:"Enter your parameters for correct performance tracking"})]}),Kt=r.div`
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
`,Jt=r.div`
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
`,Zt=r.div`
  @media (min-width: 1024px) {
  margin-left: 104px;
  }
`,ei=({onNext:e,onBack:i})=>t.jsx(Kt,{children:t.jsxs(Jt,{children:[t.jsx(Vt,{}),t.jsxs(Zt,{children:[t.jsx(Xt,{}),t.jsx(Ht,{onBack:i,onNext:e})]})]})}),ti=({onBack:e})=>t.jsxs(Ct,{children:[t.jsx(It,{src:"/src/img/YourActivityImg/illustrationActivity-min.svg"}),t.jsxs(St,{children:[t.jsx(Rt,{children:"Your Activity"}),t.jsx(Bt,{children:"To correctly calculate calorie and water intake"}),t.jsxs(Lt,{action:"#",children:[t.jsxs(Ft,{children:[t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"radio1",name:"radiogroup",tabindex:"0"}),t.jsx(Y,{htmlFor:"radio1",children:"1.2 - if you do not have physical activity and sedentary work"})]}),t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"radio2",name:"radiogroup",tabindex:"0"}),t.jsx(Y,{htmlFor:"radio2",children:"1.375 - if you do short runs or light gymnastics 1-3 times a week"})]}),t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"radio3",name:"radiogroup",tabindex:"0"}),t.jsx(Y,{htmlFor:"radio3",children:"1.55 - if you play sports with average loads 3-5 times a week"})]}),t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"radio4",name:"radiogroup",tabindex:"0"}),t.jsx(Y,{htmlFor:"radio4",children:"1.725 - if you train fully 6-7 times a week"})]}),t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"radio5",name:"radiogroup",tabindex:"0"}),t.jsx(Y,{htmlFor:"radio5",children:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]})]}),t.jsx(Nt,{type:"submit",children:"Sign Up"}),t.jsx(Pt,{type:"button",onClick:e,children:"Back"})]})]})]}),ii=()=>{const e=Ae(),[,i]=g.useState({name:"",email:"",password:""}),[,n]=g.useState(""),[o,c]=g.useState(""),[p,a]=g.useState({age:"",gender:""});console.log(o,"local state dataGoal"),console.log(p,"local state dataAgeGender");const[s,T]=g.useState(1),j=async l=>{var u;try{const m=await e(Ge(l));console.log("Response from Redux:",m),m.type==="auth/register/fulfilled"&&(w.success("Successful registration"),i(l))}catch(m){console.error("Registration Error:",m.message),((u=m==null?void 0:m.response)==null?void 0:u.status)===500?w.error("Invalid Email"):w.error("Registration failed. Please try again later."),n(m)}},y=l=>{c(l),a(l)},x=()=>{T(s+1)},E=()=>{T(s-1)};return t.jsxs("div",{children:[s===1&&t.jsx(Je,{onSubmit:j,onNext:x}),s===2&&t.jsx(ct,{onNext:x,onBack:E,onSubmit:y}),s===3&&t.jsx(Ot,{onNext:x,onBack:E,onSubmit:y}),s===4&&t.jsx(ei,{onNext:x,onBack:E}),s===5&&t.jsx(ti,{onNext:x,onBack:E}),t.jsx(xe,{})]})},oi=()=>t.jsx("div",{children:t.jsx(ii,{})});export{oi as default};
