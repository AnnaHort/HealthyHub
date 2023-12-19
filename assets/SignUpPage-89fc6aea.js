import{r as u,t as j,c as je,a as ee,j as t,S as Se,I as Re,R as Be,b as Le,d as Ne,F as ue,e as Pe,f as ae,E as re,B as _e,Q as Fe,g as ze,L as Oe,s,h as Te,i as Ee,k as xe,u as Me,l as Ae}from"./index-53e26548.js";function ke(e){var i,o,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e))for(i=0;i<e.length;i++)e[i]&&(o=ke(e[i]))&&(a&&(a+=" "),a+=o);else for(i in e)e[i]&&(a&&(a+=" "),a+=i);return a}function O(){for(var e,i,o=0,a="";o<arguments.length;)(e=arguments[o++])&&(i=ke(e))&&(a&&(a+=" "),a+=i);return a}const W=e=>typeof e=="number"&&!isNaN(e),Q=e=>typeof e=="string",S=e=>typeof e=="function",te=e=>Q(e)||S(e)?e:null,se=e=>u.isValidElement(e)||Q(e)||S(e)||W(e);function Ge(e,i,o){o===void 0&&(o=300);const{scrollHeight:a,style:p}=e;requestAnimationFrame(()=>{p.minHeight="initial",p.height=a+"px",p.transition=`all ${o}ms`,requestAnimationFrame(()=>{p.height="0",p.padding="0",p.margin="0",setTimeout(i,o)})})}function ne(e){let{enter:i,exit:o,appendPosition:a=!1,collapse:p=!0,collapseDuration:l=300}=e;return function(n){let{children:d,position:T,preventExitTransition:y,done:f,nodeRef:g,isIn:E}=n;const r=a?`${i}--${T}`:i,h=a?`${o}--${T}`:o,x=u.useRef(0);return u.useLayoutEffect(()=>{const c=g.current,m=r.split(" "),k=I=>{I.target===g.current&&(c.dispatchEvent(new Event("d")),c.removeEventListener("animationend",k),c.removeEventListener("animationcancel",k),x.current===0&&I.type!=="animationcancel"&&c.classList.remove(...m))};c.classList.add(...m),c.addEventListener("animationend",k),c.addEventListener("animationcancel",k)},[]),u.useEffect(()=>{const c=g.current,m=()=>{c.removeEventListener("animationend",m),p?Ge(c,f,l):f()};E||(y?m():(x.current=1,c.className+=` ${h}`,c.addEventListener("animationend",m)))},[E]),j.createElement(j.Fragment,null,d)}}function ge(e,i){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:i}:{}}const N={list:new Map,emitQueue:new Map,on(e,i){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(i),this},off(e,i){if(i){const o=this.list.get(e).filter(a=>a!==i);return this.list.set(e,o),this}return this.list.delete(e),this},cancelEmit(e){const i=this.emitQueue.get(e);return i&&(i.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(i=>{const o=setTimeout(()=>{i(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(o)})}},J=e=>{let{theme:i,type:o,...a}=e;return j.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:i==="colored"?"currentColor":`var(--toastify-icon-color-${o})`,...a})},le={info:function(e){return j.createElement(J,{...e},j.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return j.createElement(J,{...e},j.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return j.createElement(J,{...e},j.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return j.createElement(J,{...e},j.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return j.createElement("div",{className:"Toastify__spinner"})}};function $e(e){const[,i]=u.useReducer(r=>r+1,0),[o,a]=u.useState([]),p=u.useRef(null),l=u.useRef(new Map).current,n=r=>o.indexOf(r)!==-1,d=u.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:n,getToast:r=>l.get(r)}).current;function T(r){let{containerId:h}=r;const{limit:x}=d.props;!x||h&&d.containerId!==h||(d.count-=d.queue.length,d.queue=[])}function y(r){a(h=>r==null?[]:h.filter(x=>x!==r))}function f(){const{toastContent:r,toastProps:h,staleId:x}=d.queue.shift();E(r,h,x)}function g(r,h){let{delay:x,staleId:c,...m}=h;if(!se(r)||function(L){return!p.current||d.props.enableMultiContainer&&L.containerId!==d.props.containerId||l.has(L.toastId)&&L.updateId==null}(m))return;const{toastId:k,updateId:I,data:w}=m,{props:v}=d,F=()=>y(k),z=I==null;z&&d.count++;const C={...v,style:v.toastStyle,key:d.toastKey++,...Object.fromEntries(Object.entries(m).filter(L=>{let[P,R]=L;return R!=null})),toastId:k,updateId:I,data:w,closeToast:F,isIn:!1,className:te(m.className||v.toastClassName),bodyClassName:te(m.bodyClassName||v.bodyClassName),progressClassName:te(m.progressClassName||v.progressClassName),autoClose:!m.isLoading&&(M=m.autoClose,V=v.autoClose,M===!1||W(M)&&M>0?M:V),deleteToast(){const L=ge(l.get(k),"removed");l.delete(k),N.emit(4,L);const P=d.queue.length;if(d.count=k==null?d.count-d.displayedToast:d.count-1,d.count<0&&(d.count=0),P>0){const R=k==null?d.props.limit:1;if(P===1||R===1)d.displayedToast++,f();else{const G=R>P?P:R;d.displayedToast=G;for(let B=0;B<G;B++)f()}}else i()}};var M,V;C.iconOut=function(L){let{theme:P,type:R,isLoading:G,icon:B}=L,_=null;const $={theme:P,type:R};return B===!1||(S(B)?_=B($):u.isValidElement(B)?_=u.cloneElement(B,$):Q(B)||W(B)?_=B:G?_=le.spinner():(K=>K in le)(R)&&(_=le[R]($))),_}(C),S(m.onOpen)&&(C.onOpen=m.onOpen),S(m.onClose)&&(C.onClose=m.onClose),C.closeButton=v.closeButton,m.closeButton===!1||se(m.closeButton)?C.closeButton=m.closeButton:m.closeButton===!0&&(C.closeButton=!se(v.closeButton)||v.closeButton);let A=r;u.isValidElement(r)&&!Q(r.type)?A=u.cloneElement(r,{closeToast:F,toastProps:C,data:w}):S(r)&&(A=r({closeToast:F,toastProps:C,data:w})),v.limit&&v.limit>0&&d.count>v.limit&&z?d.queue.push({toastContent:A,toastProps:C,staleId:c}):W(x)?setTimeout(()=>{E(A,C,c)},x):E(A,C,c)}function E(r,h,x){const{toastId:c}=h;x&&l.delete(x);const m={content:r,props:h};l.set(c,m),a(k=>[...k,c].filter(I=>I!==x)),N.emit(4,ge(m,m.props.updateId==null?"added":"updated"))}return u.useEffect(()=>(d.containerId=e.containerId,N.cancelEmit(3).on(0,g).on(1,r=>p.current&&y(r)).on(5,T).emit(2,d),()=>{l.clear(),N.emit(3,d)}),[]),u.useEffect(()=>{d.props=e,d.isToastActive=n,d.displayedToast=o.length}),{getToastToRender:function(r){const h=new Map,x=Array.from(l.values());return e.newestOnTop&&x.reverse(),x.forEach(c=>{const{position:m}=c.props;h.has(m)||h.set(m,[]),h.get(m).push(c)}),Array.from(h,c=>r(c[0],c[1]))},containerRef:p,isToastActive:n}}function fe(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function ye(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function De(e){const[i,o]=u.useState(!1),[a,p]=u.useState(!1),l=u.useRef(null),n=u.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,d=u.useRef(e),{autoClose:T,pauseOnHover:y,closeToast:f,onClick:g,closeOnClick:E}=e;function r(w){if(e.draggable){w.nativeEvent.type==="touchstart"&&w.nativeEvent.preventDefault(),n.didMove=!1,document.addEventListener("mousemove",m),document.addEventListener("mouseup",k),document.addEventListener("touchmove",m),document.addEventListener("touchend",k);const v=l.current;n.canCloseOnClick=!0,n.canDrag=!0,n.boundingRect=v.getBoundingClientRect(),v.style.transition="",n.x=fe(w.nativeEvent),n.y=ye(w.nativeEvent),e.draggableDirection==="x"?(n.start=n.x,n.removalDistance=v.offsetWidth*(e.draggablePercent/100)):(n.start=n.y,n.removalDistance=v.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function h(w){if(n.boundingRect){const{top:v,bottom:F,left:z,right:C}=n.boundingRect;w.nativeEvent.type!=="touchend"&&e.pauseOnHover&&n.x>=z&&n.x<=C&&n.y>=v&&n.y<=F?c():x()}}function x(){o(!0)}function c(){o(!1)}function m(w){const v=l.current;n.canDrag&&v&&(n.didMove=!0,i&&c(),n.x=fe(w),n.y=ye(w),n.delta=e.draggableDirection==="x"?n.x-n.start:n.y-n.start,n.start!==n.x&&(n.canCloseOnClick=!1),v.style.transform=`translate${e.draggableDirection}(${n.delta}px)`,v.style.opacity=""+(1-Math.abs(n.delta/n.removalDistance)))}function k(){document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",k),document.removeEventListener("touchmove",m),document.removeEventListener("touchend",k);const w=l.current;if(n.canDrag&&n.didMove&&w){if(n.canDrag=!1,Math.abs(n.delta)>n.removalDistance)return p(!0),void e.closeToast();w.style.transition="transform 0.2s, opacity 0.2s",w.style.transform=`translate${e.draggableDirection}(0)`,w.style.opacity="1"}}u.useEffect(()=>{d.current=e}),u.useEffect(()=>(l.current&&l.current.addEventListener("d",x,{once:!0}),S(e.onOpen)&&e.onOpen(u.isValidElement(e.children)&&e.children.props),()=>{const w=d.current;S(w.onClose)&&w.onClose(u.isValidElement(w.children)&&w.children.props)}),[]),u.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||c(),window.addEventListener("focus",x),window.addEventListener("blur",c)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",x),window.removeEventListener("blur",c))}),[e.pauseOnFocusLoss]);const I={onMouseDown:r,onTouchStart:r,onMouseUp:h,onTouchEnd:h};return T&&y&&(I.onMouseEnter=c,I.onMouseLeave=x),E&&(I.onClick=w=>{g&&g(w),n.canCloseOnClick&&f()}),{playToast:x,pauseToast:c,isRunning:i,preventExitTransition:a,toastRef:l,eventHandlers:I}}function Ce(e){let{closeToast:i,theme:o,ariaLabel:a="close"}=e;return j.createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:p=>{p.stopPropagation(),i(p)},"aria-label":a},j.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},j.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function He(e){let{delay:i,isRunning:o,closeToast:a,type:p="default",hide:l,className:n,style:d,controlledProgress:T,progress:y,rtl:f,isIn:g,theme:E}=e;const r=l||T&&y===0,h={...d,animationDuration:`${i}ms`,animationPlayState:o?"running":"paused",opacity:r?0:1};T&&(h.transform=`scaleX(${y})`);const x=O("Toastify__progress-bar",T?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${E}`,`Toastify__progress-bar--${p}`,{"Toastify__progress-bar--rtl":f}),c=S(n)?n({rtl:f,type:p,defaultClassName:x}):O(x,n);return j.createElement("div",{role:"progressbar","aria-hidden":r?"true":"false","aria-label":"notification timer",className:c,style:h,[T&&y>=1?"onTransitionEnd":"onAnimationEnd"]:T&&y<1?null:()=>{g&&a()}})}const qe=e=>{const{isRunning:i,preventExitTransition:o,toastRef:a,eventHandlers:p}=De(e),{closeButton:l,children:n,autoClose:d,onClick:T,type:y,hideProgressBar:f,closeToast:g,transition:E,position:r,className:h,style:x,bodyClassName:c,bodyStyle:m,progressClassName:k,progressStyle:I,updateId:w,role:v,progress:F,rtl:z,toastId:C,deleteToast:M,isIn:V,isLoading:A,iconOut:L,closeOnClick:P,theme:R}=e,G=O("Toastify__toast",`Toastify__toast-theme--${R}`,`Toastify__toast--${y}`,{"Toastify__toast--rtl":z},{"Toastify__toast--close-on-click":P}),B=S(h)?h({rtl:z,position:r,type:y,defaultClassName:G}):O(G,h),_=!!F||!d,$={closeToast:g,type:y,theme:R};let K=null;return l===!1||(K=S(l)?l($):u.isValidElement(l)?u.cloneElement(l,$):Ce($)),j.createElement(E,{isIn:V,done:M,position:r,preventExitTransition:o,nodeRef:a},j.createElement("div",{id:C,onClick:T,className:B,...p,style:x,ref:a},j.createElement("div",{...V&&{role:v},className:S(c)?c({type:y}):O("Toastify__toast-body",c),style:m},L!=null&&j.createElement("div",{className:O("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!A})},L),j.createElement("div",null,n)),K,j.createElement(He,{...w&&!_?{key:`pb-${w}`}:{},rtl:z,theme:R,delay:d,isRunning:i,isIn:V,closeToast:g,hide:f,type:y,style:I,className:k,controlledProgress:_,progress:F||0})))},oe=function(e,i){return i===void 0&&(i=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:i}},Ye=ne(oe("bounce",!0));ne(oe("slide",!0));ne(oe("zoom"));ne(oe("flip"));const he=u.forwardRef((e,i)=>{const{getToastToRender:o,containerRef:a,isToastActive:p}=$e(e),{className:l,style:n,rtl:d,containerId:T}=e;function y(f){const g=O("Toastify__toast-container",`Toastify__toast-container--${f}`,{"Toastify__toast-container--rtl":d});return S(l)?l({position:f,rtl:d,defaultClassName:g}):O(g,te(l))}return u.useEffect(()=>{i&&(i.current=a.current)},[]),j.createElement("div",{ref:a,className:"Toastify",id:T},o((f,g)=>{const E=g.length?{...n}:{...n,pointerEvents:"none"};return j.createElement("div",{className:y(f),style:E,key:`container-${f}`},g.map((r,h)=>{let{content:x,props:c}=r;return j.createElement(qe,{...c,isIn:p(c.toastId),style:{...c.style,"--nth":h+1,"--len":g.length},key:`toast-${c.key}`},x)}))}))});he.displayName="ToastContainer",he.defaultProps={position:"top-right",transition:Ye,autoClose:5e3,closeButton:Ce,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let de,D=new Map,U=[],Qe=1;function Ie(){return""+Qe++}function Ve(e){return e&&(Q(e.toastId)||W(e.toastId))?e.toastId:Ie()}function X(e,i){return D.size>0?N.emit(0,e,i):U.push({content:e,options:i}),i.toastId}function ie(e,i){return{...i,type:i&&i.type||e,toastId:Ve(i)}}function Z(e){return(i,o)=>X(i,ie(e,o))}function b(e,i){return X(e,ie("default",i))}b.loading=(e,i)=>X(e,ie("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...i})),b.promise=function(e,i,o){let a,{pending:p,error:l,success:n}=i;p&&(a=Q(p)?b.loading(p,o):b.loading(p.render,{...o,...p}));const d={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},T=(f,g,E)=>{if(g==null)return void b.dismiss(a);const r={type:f,...d,...o,data:E},h=Q(g)?{render:g}:g;return a?b.update(a,{...r,...h}):b(h.render,{...r,...h}),E},y=S(e)?e():e;return y.then(f=>T("success",n,f)).catch(f=>T("error",l,f)),y},b.success=Z("success"),b.info=Z("info"),b.error=Z("error"),b.warning=Z("warning"),b.warn=b.warning,b.dark=(e,i)=>X(e,ie("default",{theme:"dark",...i})),b.dismiss=e=>{D.size>0?N.emit(1,e):U=U.filter(i=>e!=null&&i.options.toastId!==e)},b.clearWaitingQueue=function(e){return e===void 0&&(e={}),N.emit(5,e)},b.isActive=e=>{let i=!1;return D.forEach(o=>{o.isToastActive&&o.isToastActive(e)&&(i=!0)}),i},b.update=function(e,i){i===void 0&&(i={}),setTimeout(()=>{const o=function(a,p){let{containerId:l}=p;const n=D.get(l||de);return n&&n.getToast(a)}(e,i);if(o){const{props:a,content:p}=o,l={delay:100,...a,...i,toastId:i.toastId||e,updateId:Ie()};l.toastId!==e&&(l.staleId=e);const n=l.render||p;delete l.render,X(n,l)}},0)},b.done=e=>{b.update(e,{progress:1})},b.onChange=e=>(N.on(4,e),()=>{N.off(4,e)}),b.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},b.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},N.on(2,e=>{de=e.containerId||e,D.set(de,e),U.forEach(i=>{N.emit(0,i.content,i.options)}),U=[]}).on(3,e=>{D.delete(e.containerId||e),D.size===0&&N.off(0).off(1).off(5)});const Ue={name:"",email:"",password:""},We=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,Xe=je().shape({name:ee().required("Name is required"),email:ee().matches(We,"Invalid email").required("Email is required"),password:ee().min(6,"Password must be at least 8 characters").required("Password is required")}),Ke=({onSubmit:e,onNext:i})=>t.jsxs(Se,{children:[t.jsx(Re,{src:Be,alt:"Responsive Image"}),t.jsxs("div",{children:[t.jsx(Le,{children:"Sign up"}),t.jsx(Ne,{children:"You need to register to use the service"}),t.jsx(ue,{initialValues:Ue,validationSchema:Xe,onSubmit:(o,{setSubmitting:a})=>{e(o),i(),a(!1)},children:({errors:o,touched:a})=>t.jsxs(Pe,{autoComplete:"off",children:[t.jsxs("label",{htmlFor:"name",children:[t.jsx(ae,{name:"name",placeholder:"Name"}),o.name&&a.name?t.jsx(re,{children:o.name}):null]}),t.jsxs("label",{htmlFor:"email",children:[t.jsx(ae,{name:"email",type:"email",placeholder:"E-mail"}),o.email&&a.email?t.jsx(re,{children:o.email}):null]}),t.jsxs("label",{htmlFor:"password",children:[t.jsx(ae,{name:"password",type:"password",placeholder:"Password"}),o.password&&a.password?t.jsx(re,{children:o.password}):null]}),t.jsx(_e,{type:"submit",children:"Next"}),t.jsxs(Fe,{children:[t.jsx(ze,{children:"Do you already have an account?"}),t.jsx(Oe,{to:"/signin",children:"Sign in"})]})]})})]})]}),Je=s.div`
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
`,Ze=s.img`
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
`,et=s(Te)`
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
`,tt=s.h2`
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
`,it=s.p`
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
`,nt=s.ul`
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
`,ot=s.button`
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
`,at=s.button`
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
`,ce=s.li`
  display: flex;
  gap: 8px;
`,pe=s(Ee)`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  opacity: 0;
`,me=s.label`
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
`,rt=s.div`
  color: #e74a3b;
  margin-bottom: 20px;
`,st={goal:""},lt=je({goal:ee().required("Choose one of the options").oneOf(["Lose Fat","Maintain","Gain Muscle"])}),dt=({onNext:e,onBack:i,onSubmit:o})=>t.jsxs(Je,{children:[t.jsx(Ze,{alt:"Goal Image",src:"/src/components/YourGoal/img/IllustrationGoals-min.svg"}),t.jsx(ue,{initialValues:st,validationSchema:lt,onSubmit:(a,{setSubmitting:p})=>{o(a),e(),p(!1)},children:({errors:a})=>t.jsxs(et,{children:[t.jsx(tt,{children:"Your goal"}),t.jsx(it,{children:"Choose a goal so that we can help you effectively"}),t.jsxs(nt,{children:[t.jsxs(ce,{children:[t.jsx(pe,{type:"radio",id:"loseFat",name:"goal",value:"Lose Fat"}),t.jsx(me,{htmlFor:"loseFat",children:"Lose Fat"})]}),t.jsxs(ce,{children:[t.jsx(pe,{type:"radio",id:"maintain",name:"goal",value:"Maintain"}),t.jsx(me,{htmlFor:"maintain",children:"Maintain"})]}),t.jsxs(ce,{children:[t.jsx(pe,{type:"radio",id:"gainMuscle",name:"goal",value:"Gain Muscle"}),t.jsx(me,{htmlFor:"gainMuscle",children:"Gain Muscle"})]})]}),t.jsx(rt,{children:a.goal}),t.jsx(ot,{type:"submit",children:"Next"}),t.jsx(at,{type:"button",onClick:i,children:"Back"})]})})]}),ct=s.div`
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
`,pt=s.img`
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
`,mt=s.h2`
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
`,ht=s.p`
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
`;s.p`
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
`;const ut=s.form`
  @media (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1440px) {
    margin-left: 0;
    margin-right: 0;
  }
`,xt=s.div`
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
`,we=s.p`
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
`,gt=s.div`
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
`,ft=s.input`
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
`,yt=s.button`
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
`,wt=s.button`
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
`,bt="/HealthyHub/assets/gender-and-age-mobile-541c31ba.png",vt="/HealthyHub/assets/gender-and-age-tablet-99eb88e0.png",jt="/HealthyHub/assets/gender-and-age-desktop-cc0787a2.png",Tt=s.div`
  background-color: var(--color-primary-black);
  padding: 24px 10px;
  @media (min-width: 834px) {
    padding-top: 40px;
  }
  @media (min-width: 1024px) {
    display: flex;
  }
`,Et=s.img`
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
`,kt=s.div`
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
`,Ct=s.h2`
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
`,It=s.p`
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
`,St=s.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`,Rt=s.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;s.li`
  gap: 8px;
  display: flex;
  align-items: center;
`;const H=s.div`
  display: flex;
  position: relative;
`,q=s.input`
  opacity: 0;
`,Y=s.label`
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
`;s.label`
  color: var(--color-primary-white);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;const Bt=s.button`
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
`,Lt=s.button`
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
`,Nt=({onNext:e,onBack:i})=>{const o=()=>{e()};return t.jsxs(ct,{children:[t.jsx(pt,{src:bt,srcSet:`${vt} 834w, ${jt} 1440w`,sizes:"(max-width: 833px) 100vw, (min-width: 834px) 50vw",alt:"Responsive Image"}),t.jsxs("div",{children:[t.jsx(mt,{children:"Select gender, Age"}),t.jsx(ht,{children:"Choose a goal so that we can help you effectively"}),t.jsxs(ut,{onSubmit:o,children:[t.jsx(we,{children:"Gender"}),t.jsxs(xt,{children:[t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"male",name:"radiogroup"}),t.jsx(Y,{style:{width:"120px",textAlign:"start"},htmlFor:"male",children:"Male"})]}),t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"female",name:"radiogroup"}),t.jsx(Y,{htmlFor:"female",children:"Female"})]})]}),t.jsxs("label",{htmlFor:"age",children:[t.jsx(we,{children:"Your age"}),t.jsx(gt,{children:t.jsx(ft,{type:"text",id:"age",name:"age",placeholder:"Enter your age"})})]}),t.jsx(yt,{type:"submit",children:"Next"}),t.jsx(wt,{onClick:i,children:"Back"})]})]})]})},Pt=({onNext:e,onBack:i})=>t.jsx("div",{children:t.jsx(Nt,{onBack:i,onNext:e})}),_t=s.div`
display: flex;
flex-direction: column;
`,be=s.label`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: var(--color-primary-white);
  margin-top: 24px;
  margin-bottom: 12px;
`,Ft=s(Te)`
  display: flex;
  flex-direction: column;
`,ve=s(Ee)`
  width: 100%;
  height: 36px;
  padding-left: 10px;
  border-radius: 12px;
  background-color: inherit;
  border: 1px solid var(--color-primary-green-lite);

  @media (min-width: 1440px) {
    max-width: 212px;
  }
`,zt=s.button`
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
`,Ot=s.button`
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
`,Mt=({onBack:e,onNext:i})=>t.jsx(_t,{children:t.jsx(ue,{initialValues:{height:"",weight:""},onSubmit:o=>{console.log(o),i()},children:t.jsxs(Ft,{children:[t.jsx(be,{htmlFor:"height",children:"Height"}),t.jsx(ve,{name:"height",type:"number",required:!0,placeholder:"Enter your height"}),t.jsx(xe,{name:"height",component:"div"}),t.jsx(be,{htmlFor:"weight",children:"Weight"}),t.jsx(ve,{name:"weight",type:"number",required:!0,placeholder:"Enter your weight"}),t.jsx(xe,{name:"weight",component:"div"}),t.jsxs("div",{children:[t.jsx(zt,{type:"submit",children:"Next"}),t.jsx(Ot,{type:"button",onClick:e,children:"Back"})]})]})})}),At="/HealthyHub/assets/symbol-defs-2eb7c4d7.svg#icon-body-parameters",Gt=s.svg`
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
`,$t=()=>t.jsx("div",{children:t.jsx(Gt,{width:"300",height:"300",children:t.jsx("use",{xlinkHref:`${At}#icon-body-parameters`,width:"100%",height:"100%"})})}),Dt=s.div`
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
`,Ht=s.h2`
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
`,qt=s.h3`
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
`,Yt=()=>t.jsxs(Dt,{children:[t.jsx(Ht,{children:"Body parameters"}),t.jsx(qt,{children:"Enter your parameters for correct performance tracking"})]}),Qt=s.div`
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
`,Vt=s.div`
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
`,Ut=s.div`
  @media (min-width: 1024px) {
  margin-left: 104px;
  }
`,Wt=({onNext:e,onBack:i})=>t.jsx(Qt,{children:t.jsxs(Vt,{children:[t.jsx($t,{}),t.jsxs(Ut,{children:[t.jsx(Yt,{}),t.jsx(Mt,{onBack:i,onNext:e})]})]})}),Xt=({onBack:e})=>t.jsxs(Tt,{children:[t.jsx(Et,{src:"/src/img/YourActivityImg/illustrationActivity-min.svg"}),t.jsxs(kt,{children:[t.jsx(Ct,{children:"Your Activity"}),t.jsx(It,{children:"To correctly calculate calorie and water intake"}),t.jsxs(St,{action:"#",children:[t.jsxs(Rt,{children:[t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"radio1",name:"radiogroup",tabindex:"0"}),t.jsx(Y,{htmlFor:"radio1",children:"1.2 - if you do not have physical activity and sedentary work"})]}),t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"radio2",name:"radiogroup",tabindex:"0"}),t.jsx(Y,{htmlFor:"radio2",children:"1.375 - if you do short runs or light gymnastics 1-3 times a week"})]}),t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"radio3",name:"radiogroup",tabindex:"0"}),t.jsx(Y,{htmlFor:"radio3",children:"1.55 - if you play sports with average loads 3-5 times a week"})]}),t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"radio4",name:"radiogroup",tabindex:"0"}),t.jsx(Y,{htmlFor:"radio4",children:"1.725 - if you train fully 6-7 times a week"})]}),t.jsxs(H,{children:[t.jsx(q,{type:"radio",id:"radio5",name:"radiogroup",tabindex:"0"}),t.jsx(Y,{htmlFor:"radio5",children:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]})]}),t.jsx(Bt,{type:"submit",children:"Sign Up"}),t.jsx(Lt,{type:"button",onClick:e,children:"Back"})]})]})]}),Kt=()=>{const e=Me(),[,i]=u.useState({name:"",email:"",password:""}),[,o]=u.useState(""),[a,p]=u.useState("");console.log(a,"local state dataGoal");const[l,n]=u.useState(1),d=async g=>{var E;try{const r=await e(Ae(g));console.log("Response from Redux:",r),r.type==="auth/register/fulfilled"&&(b.success("Successful registration"),i(g))}catch(r){console.error("Registration Error:",r.message),((E=r==null?void 0:r.response)==null?void 0:E.status)===500?b.error("Invalid Email"):b.error("Registration failed. Please try again later."),o(r)}},T=g=>{p(g)},y=()=>{n(l+1)},f=()=>{n(l-1)};return t.jsxs("div",{children:[l===1&&t.jsx(Ke,{onSubmit:d,onNext:y}),l===2&&t.jsx(dt,{onNext:y,onBack:f,onSubmit:T}),l===3&&t.jsx(Pt,{onNext:y,onBack:f}),l===4&&t.jsx(Wt,{onNext:y,onBack:f}),l===5&&t.jsx(Xt,{onNext:y,onBack:f}),t.jsx(he,{})]})},Zt=()=>t.jsx("div",{children:t.jsx(Kt,{})});export{Zt as default};
