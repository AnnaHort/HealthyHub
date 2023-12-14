import{o as nt,r as Gt,u as Le,N as fe,j as f,O as Me}from"./index-85c447af.js";var _=function(){return _=Object.assign||function(e){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},_.apply(this,arguments)};function mt(t,e,r){if(r||arguments.length===2)for(var n=0,i=e.length,o;n<i;n++)(o||!(n in e))&&(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))}var b="-ms-",rt="-moz-",g="-webkit-",ue="comm",wt="rule",Yt="decl",Fe="@import",le="@keyframes",Be="@layer",Ge=Math.abs,Wt=String.fromCharCode,zt=Object.assign;function Ye(t,e){return P(t,0)^45?(((e<<2^P(t,0))<<2^P(t,1))<<2^P(t,2))<<2^P(t,3):0}function de(t){return t.trim()}function z(t,e){return(t=e.exec(t))?t[0]:t}function p(t,e,r){return t.replace(e,r)}function lt(t,e){return t.indexOf(e)}function P(t,e){return t.charCodeAt(e)|0}function K(t,e,r){return t.slice(e,r)}function O(t){return t.length}function he(t){return t.length}function et(t,e){return e.push(t),t}function We(t,e){return t.map(e).join("")}function Vt(t,e){return t.filter(function(r){return!z(r,e)})}var vt=1,q=1,ge=0,R=0,A=0,Q="";function bt(t,e,r,n,i,o,s,a){return{value:t,root:e,parent:r,type:n,props:i,children:o,line:vt,column:q,length:s,return:"",siblings:a}}function M(t,e){return zt(bt("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function W(t){for(;t.root;)t=M(t.root,{children:[t]});et(t,t.siblings)}function He(){return A}function Ke(){return A=R>0?P(Q,--R):0,q--,A===10&&(q=1,vt--),A}function N(){return A=R<ge?P(Q,R++):0,q++,A===10&&(q=1,vt++),A}function G(){return P(Q,R)}function dt(){return R}function St(t,e){return K(Q,t,e)}function Tt(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qe(t){return vt=q=1,ge=O(Q=t),R=0,[]}function Ue(t){return Q="",t}function Ct(t){return de(St(R-1,Dt(t===91?t+2:t===40?t+1:t)))}function Ve(t){for(;(A=G())&&A<33;)N();return Tt(t)>2||Tt(A)>3?"":" "}function Ze(t,e){for(;--e&&N()&&!(A<48||A>102||A>57&&A<65||A>70&&A<97););return St(t,dt()+(e<6&&G()==32&&N()==32))}function Dt(t){for(;N();)switch(A){case t:return R;case 34:case 39:t!==34&&t!==39&&Dt(A);break;case 40:t===41&&Dt(t);break;case 92:N();break}return R}function Qe(t,e){for(;N()&&t+A!==47+10;)if(t+A===42+42&&G()===47)break;return"/*"+St(e,R-1)+"*"+Wt(t===47?t:N())}function Je(t){for(;!Tt(G());)N();return St(t,R)}function Xe(t){return Ue(ht("",null,null,null,[""],t=qe(t),0,[0],t))}function ht(t,e,r,n,i,o,s,a,c){for(var u=0,m=0,y=s,x=0,d=0,S=0,j=1,$=1,I=1,l=0,w="",C=i,v=o,k=n,h=w;$;)switch(S=l,l=N()){case 40:if(S!=108&&P(h,y-1)==58){lt(h+=p(Ct(l),"&","&\f"),"&\f")!=-1&&(I=-1);break}case 34:case 39:case 91:h+=Ct(l);break;case 9:case 10:case 13:case 32:h+=Ve(S);break;case 92:h+=Ze(dt()-1,7);continue;case 47:switch(G()){case 42:case 47:et(tr(Qe(N(),dt()),e,r,c),c);break;default:h+="/"}break;case 123*j:a[u++]=O(h)*I;case 125*j:case 59:case 0:switch(l){case 0:case 125:$=0;case 59+m:I==-1&&(h=p(h,/\f/g,"")),d>0&&O(h)-y&&et(d>32?Qt(h+";",n,r,y-1,c):Qt(p(h," ","")+";",n,r,y-2,c),c);break;case 59:h+=";";default:if(et(k=Zt(h,e,r,u,m,i,a,w,C=[],v=[],y,o),o),l===123)if(m===0)ht(h,e,k,k,C,o,y,a,v);else switch(x===99&&P(h,3)===110?100:x){case 100:case 108:case 109:case 115:ht(t,k,k,n&&et(Zt(t,k,k,0,0,i,a,w,i,C=[],y,v),v),i,v,y,a,n?C:v);break;default:ht(h,k,k,k,[""],v,0,a,v)}}u=m=d=0,j=I=1,w=h="",y=s;break;case 58:y=1+O(h),d=S;default:if(j<1){if(l==123)--j;else if(l==125&&j++==0&&Ke()==125)continue}switch(h+=Wt(l),l*j){case 38:I=m>0?1:(h+="\f",-1);break;case 44:a[u++]=(O(h)-1)*I,I=1;break;case 64:G()===45&&(h+=Ct(N())),x=G(),m=y=O(w=h+=Je(dt())),l++;break;case 45:S===45&&O(h)==2&&(j=0)}}return o}function Zt(t,e,r,n,i,o,s,a,c,u,m,y){for(var x=i-1,d=i===0?o:[""],S=he(d),j=0,$=0,I=0;j<n;++j)for(var l=0,w=K(t,x+1,x=Ge($=s[j])),C=t;l<S;++l)(C=de($>0?d[l]+" "+w:p(w,/&\f/g,d[l])))&&(c[I++]=C);return bt(t,e,r,i===0?wt:a,c,u,m,y)}function tr(t,e,r,n){return bt(t,e,r,ue,Wt(He()),K(t,2,-2),0,n)}function Qt(t,e,r,n,i){return bt(t,e,r,Yt,K(t,0,n),K(t,n+1,-1),n,i)}function me(t,e,r){switch(Ye(t,e)){case 5103:return g+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return g+t+t;case 4789:return rt+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return g+t+rt+t+b+t+t;case 5936:switch(P(t,e+11)){case 114:return g+t+b+p(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return g+t+b+p(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return g+t+b+p(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return g+t+b+t+t;case 6165:return g+t+b+"flex-"+t+t;case 5187:return g+t+p(t,/(\w+).+(:[^]+)/,g+"box-$1$2"+b+"flex-$1$2")+t;case 5443:return g+t+b+"flex-item-"+p(t,/flex-|-self/g,"")+(z(t,/flex-|baseline/)?"":b+"grid-row-"+p(t,/flex-|-self/g,""))+t;case 4675:return g+t+b+"flex-line-pack"+p(t,/align-content|flex-|-self/g,"")+t;case 5548:return g+t+b+p(t,"shrink","negative")+t;case 5292:return g+t+b+p(t,"basis","preferred-size")+t;case 6060:return g+"box-"+p(t,"-grow","")+g+t+b+p(t,"grow","positive")+t;case 4554:return g+p(t,/([^-])(transform)/g,"$1"+g+"$2")+t;case 6187:return p(p(p(t,/(zoom-|grab)/,g+"$1"),/(image-set)/,g+"$1"),t,"")+t;case 5495:case 3959:return p(t,/(image-set\([^]*)/,g+"$1$`$1");case 4968:return p(p(t,/(.+:)(flex-)?(.*)/,g+"box-pack:$3"+b+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+g+t+t;case 4200:if(!z(t,/flex-|baseline/))return b+"grid-column-align"+K(t,e)+t;break;case 2592:case 3360:return b+p(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(n,i){return e=i,z(n.props,/grid-\w+-end/)})?~lt(t+(r=r[e].value),"span")?t:b+p(t,"-start","")+t+b+"grid-row-span:"+(~lt(r,"span")?z(r,/\d+/):+z(r,/\d+/)-+z(t,/\d+/))+";":b+p(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(n){return z(n.props,/grid-\w+-start/)})?t:b+p(p(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return p(t,/(.+)-inline(.+)/,g+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(t)-1-e>6)switch(P(t,e+1)){case 109:if(P(t,e+4)!==45)break;case 102:return p(t,/(.+:)(.+)-([^]+)/,"$1"+g+"$2-$3$1"+rt+(P(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~lt(t,"stretch")?me(p(t,"stretch","fill-available"),e,r)+t:t}break;case 5152:case 5920:return p(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,i,o,s,a,c,u){return b+i+":"+o+u+(s?b+i+"-span:"+(a?c:+c-+o)+u:"")+t});case 4949:if(P(t,e+6)===121)return p(t,":",":"+g)+t;break;case 6444:switch(P(t,P(t,14)===45?18:11)){case 120:return p(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+g+(P(t,14)===45?"inline-":"")+"box$3$1"+g+"$2$3$1"+b+"$2box$3")+t;case 100:return p(t,":",":"+b)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return p(t,"scroll-","scroll-snap-")+t}return t}function yt(t,e){for(var r="",n=0;n<t.length;n++)r+=e(t[n],n,t,e)||"";return r}function er(t,e,r,n){switch(t.type){case Be:if(t.children.length)break;case Fe:case Yt:return t.return=t.return||t.value;case ue:return"";case le:return t.return=t.value+"{"+yt(t.children,n)+"}";case wt:if(!O(t.value=t.props.join(",")))return""}return O(r=yt(t.children,n))?t.return=t.value+"{"+r+"}":""}function rr(t){var e=he(t);return function(r,n,i,o){for(var s="",a=0;a<e;a++)s+=t[a](r,n,i,o)||"";return s}}function nr(t){return function(e){e.root||(e=e.return)&&t(e)}}function ir(t,e,r,n){if(t.length>-1&&!t.return)switch(t.type){case Yt:t.return=me(t.value,t.length,r);return;case le:return yt([M(t,{value:p(t.value,"@","@"+g)})],n);case wt:if(t.length)return We(r=t.props,function(i){switch(z(i,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":W(M(t,{props:[p(i,/:(read-\w+)/,":"+rt+"$1")]})),W(M(t,{props:[i]})),zt(t,{props:Vt(r,n)});break;case"::placeholder":W(M(t,{props:[p(i,/:(plac\w+)/,":"+g+"input-$1")]})),W(M(t,{props:[p(i,/:(plac\w+)/,":"+rt+"$1")]})),W(M(t,{props:[p(i,/:(plac\w+)/,b+"input-$1")]})),W(M(t,{props:[i]})),zt(t,{props:Vt(r,n)});break}return""})}}var U=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ht=typeof window<"u"&&"HTMLElement"in window,or=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),kt=Object.freeze([]),V=Object.freeze({});function sr(t,e,r){return r===void 0&&(r=V),t.theme!==r.theme&&t.theme||e||r.theme}var ye=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ar=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,cr=/(^-|-$)/g;function Jt(t){return t.replace(ar,"-").replace(cr,"")}var pr=/(a)(d)/gi,Xt=function(t){return String.fromCharCode(t+(t>25?39:97))};function Lt(t){var e,r="";for(e=Math.abs(t);e>52;e=e/52|0)r=Xt(e%52)+r;return(Xt(e%52)+r).replace(pr,"$1-$2")}var Pt,H=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},xe=function(t){return H(5381,t)};function fr(t){return Lt(xe(t)>>>0)}function ur(t){return t.displayName||t.name||"Component"}function Et(t){return typeof t=="string"&&!0}var we=typeof Symbol=="function"&&Symbol.for,ve=we?Symbol.for("react.memo"):60115,lr=we?Symbol.for("react.forward_ref"):60112,dr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},hr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},be={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gr=((Pt={})[lr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Pt[ve]=be,Pt);function te(t){return("type"in(e=t)&&e.type.$$typeof)===ve?be:"$$typeof"in t?gr[t.$$typeof]:dr;var e}var mr=Object.defineProperty,yr=Object.getOwnPropertyNames,ee=Object.getOwnPropertySymbols,xr=Object.getOwnPropertyDescriptor,wr=Object.getPrototypeOf,re=Object.prototype;function Se(t,e,r){if(typeof e!="string"){if(re){var n=wr(e);n&&n!==re&&Se(t,n,r)}var i=yr(e);ee&&(i=i.concat(ee(e)));for(var o=te(t),s=te(e),a=0;a<i.length;++a){var c=i[a];if(!(c in hr||r&&r[c]||s&&c in s||o&&c in o)){var u=xr(e,c);try{mr(t,c,u)}catch{}}}}return t}function Z(t){return typeof t=="function"}function Kt(t){return typeof t=="object"&&"styledComponentId"in t}function B(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function ne(t,e){if(t.length===0)return"";for(var r=t[0],n=1;n<t.length;n++)r+=e?e+t[n]:t[n];return r}function it(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Mt(t,e,r){if(r===void 0&&(r=!1),!r&&!it(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=Mt(t[n],e[n]);else if(it(e))for(var n in e)t[n]=Mt(t[n],e[n]);return t}function qt(t,e){Object.defineProperty(t,"toString",{value:e})}function ot(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var vr=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var r=0,n=0;n<e;n++)r+=this.groupSizes[n];return r},t.prototype.insertRules=function(e,r){if(e>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,o=i;e>=o;)if((o<<=1)<0)throw ot(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),c=(s=0,r.length);s<c;s++)this.tag.insertRule(a,r[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r;this.groupSizes[e]=0;for(var o=n;o<i;o++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(e){var r="";if(e>=this.length||this.groupSizes[e]===0)return r;for(var n=this.groupSizes[e],i=this.indexOfGroup(e),o=i+n,s=i;s<o;s++)r+="".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);return r},t}(),gt=new Map,xt=new Map,_t=1,ut=function(t){if(gt.has(t))return gt.get(t);for(;xt.has(_t);)_t++;var e=_t++;return gt.set(t,e),xt.set(e,t),e},br=function(t,e){gt.set(t,e),xt.set(e,t)},Sr="style[".concat(U,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),kr=new RegExp("^".concat(U,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),jr=function(t,e,r){for(var n,i=r.split(","),o=0,s=i.length;o<s;o++)(n=i[o])&&t.registerName(e,n)},Ir=function(t,e){for(var r,n=((r=e.textContent)!==null&&r!==void 0?r:"").split(`/*!sc*/
`),i=[],o=0,s=n.length;o<s;o++){var a=n[o].trim();if(a){var c=a.match(kr);if(c){var u=0|parseInt(c[1],10),m=c[2];u!==0&&(br(m,u),jr(t,m,c[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function Ar(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ke=function(t){var e=document.head,r=t||e,n=document.createElement("style"),i=function(a){var c=Array.from(a.querySelectorAll("style[".concat(U,"]")));return c[c.length-1]}(r),o=i!==void 0?i.nextSibling:null;n.setAttribute(U,"active"),n.setAttribute("data-styled-version","6.0.7");var s=Ar();return s&&n.setAttribute("nonce",s),r.insertBefore(n,o),n},Cr=function(){function t(e){this.element=ke(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,i=0,o=n.length;i<o;i++){var s=n[i];if(s.ownerNode===r)return s}throw ot(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""},t}(),Pr=function(){function t(e){this.element=ke(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,r){if(e<=this.length&&e>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Er=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,r){return e<=this.length&&(this.rules.splice(e,0,r),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),ie=Ht,_r={isServer:!Ht,useCSSOMInjection:!or},je=function(){function t(e,r,n){e===void 0&&(e=V),r===void 0&&(r={});var i=this;this.options=_(_({},_r),e),this.gs=r,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Ht&&ie&&(ie=!1,function(o){for(var s=document.querySelectorAll(Sr),a=0,c=s.length;a<c;a++){var u=s[a];u&&u.getAttribute(U)!=="active"&&(Ir(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),qt(this,function(){return function(o){for(var s=o.getTag(),a=s.length,c="",u=function(y){var x=function(I){return xt.get(I)}(y);if(x===void 0)return"continue";var d=o.names.get(x),S=s.getGroup(y);if(d===void 0||S.length===0)return"continue";var j="".concat(U,".g").concat(y,'[id="').concat(x,'"]'),$="";d!==void 0&&d.forEach(function(I){I.length>0&&($+="".concat(I,","))}),c+="".concat(S).concat(j,'{content:"').concat($,'"}').concat(`/*!sc*/
`)},m=0;m<a;m++)u(m);return c}(i)})}return t.registerId=function(e){return ut(e)},t.prototype.reconstructWithOptions=function(e,r){return r===void 0&&(r=!0),new t(_(_({},this.options),e),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(r){var n=r.useCSSOMInjection,i=r.target;return r.isServer?new Er(i):n?new Cr(i):new Pr(i)}(this.options),new vr(e)));var e},t.prototype.hasNameForId=function(e,r){return this.names.has(e)&&this.names.get(e).has(r)},t.prototype.registerName=function(e,r){if(ut(e),this.names.has(e))this.names.get(e).add(r);else{var n=new Set;n.add(r),this.names.set(e,n)}},t.prototype.insertRules=function(e,r,n){this.registerName(e,r),this.getTag().insertRules(ut(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(ut(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),$r=/&/g,Rr=/^\s*\/\/.*$/gm;function Ie(t,e){return t.map(function(r){return r.type==="rule"&&(r.value="".concat(e," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(e," ")),r.props=r.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Ie(r.children,e)),r})}function Nr(t){var e,r,n,i=t===void 0?V:t,o=i.options,s=o===void 0?V:o,a=i.plugins,c=a===void 0?kt:a,u=function(x,d,S){return S===r||S.startsWith(r)&&S.endsWith(r)&&S.replaceAll(r,"").length>0?".".concat(e):x},m=c.slice();m.push(function(x){x.type===wt&&x.value.includes("&")&&(x.props[0]=x.props[0].replace($r,r).replace(n,u))}),s.prefix&&m.push(ir),m.push(er);var y=function(x,d,S,j){d===void 0&&(d=""),S===void 0&&(S=""),j===void 0&&(j="&"),e=j,r=d,n=new RegExp("\\".concat(r,"\\b"),"g");var $=x.replace(Rr,""),I=Xe(S||d?"".concat(S," ").concat(d," { ").concat($," }"):$);s.namespace&&(I=Ie(I,s.namespace));var l=[];return yt(I,rr(m.concat(nr(function(w){return l.push(w)})))),l};return y.hash=c.length?c.reduce(function(x,d){return d.name||ot(15),H(x,d.name)},5381).toString():"",y}var Or=new je,Ft=Nr(),Ae=nt.createContext({shouldForwardProp:void 0,styleSheet:Or,stylis:Ft});Ae.Consumer;nt.createContext(void 0);function oe(){return Gt.useContext(Ae)}var zr=function(){function t(e,r){var n=this;this.inject=function(i,o){o===void 0&&(o=Ft);var s=n.name+o.hash;i.hasNameForId(n.id,s)||i.insertRules(n.id,s,o(n.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=r,qt(this,function(){throw ot(12,String(n.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Ft),this.name+e.hash},t}(),Tr=function(t){return t>="A"&&t<="Z"};function se(t){for(var e="",r=0;r<t.length;r++){var n=t[r];if(r===1&&n==="-"&&t[0]==="-")return t;Tr(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var Ce=function(t){return t==null||t===!1||t===""},Pe=function(t){var e,r,n=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!Ce(o)&&(Array.isArray(o)&&o.isCss||Z(o)?n.push("".concat(se(i),":"),o,";"):it(o)?n.push.apply(n,mt(mt(["".concat(i," {")],Pe(o),!1),["}"],!1)):n.push("".concat(se(i),": ").concat((e=i,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in Le||e.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Y(t,e,r,n){if(Ce(t))return[];if(Kt(t))return[".".concat(t.styledComponentId)];if(Z(t)){if(!Z(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return Y(i,e,r,n)}var o;return t instanceof zr?r?(t.inject(r,n),[t.getName(n)]):[t]:it(t)?Pe(t):Array.isArray(t)?Array.prototype.concat.apply(kt,t.map(function(s){return Y(s,e,r,n)})):[t.toString()]}function Dr(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(Z(r)&&!Kt(r))return!1}return!0}var Lr=xe("6.0.7"),Mr=function(){function t(e,r,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Dr(e),this.componentId=r,this.baseHash=H(Lr,r),this.baseStyle=n,je.registerId(r)}return t.prototype.generateAndInjectStyles=function(e,r,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))i=B(i,this.staticRulesId);else{var o=ne(Y(this.rules,e,r,n)),s=Lt(H(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,s)){var a=n(o,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,a)}i=B(i,s),this.staticRulesId=s}else{for(var c=H(this.baseHash,n.hash),u="",m=0;m<this.rules.length;m++){var y=this.rules[m];if(typeof y=="string")u+=y;else if(y){var x=ne(Y(y,e,r,n));c=H(c,x),u+=x}}if(u){var d=Lt(c>>>0);r.hasNameForId(this.componentId,d)||r.insertRules(this.componentId,d,n(u,".".concat(d),void 0,this.componentId)),i=B(i,d)}}return i},t}(),Ee=nt.createContext(void 0);Ee.Consumer;var $t={};function Fr(t,e,r){var n=Kt(t),i=t,o=!Et(t),s=e.attrs,a=s===void 0?kt:s,c=e.componentId,u=c===void 0?function(w,C){var v=typeof w!="string"?"sc":Jt(w);$t[v]=($t[v]||0)+1;var k="".concat(v,"-").concat(fr("6.0.7"+v+$t[v]));return C?"".concat(C,"-").concat(k):k}(e.displayName,e.parentComponentId):c,m=e.displayName;m===void 0&&function(w){return Et(w)?"styled.".concat(w):"Styled(".concat(ur(w),")")}(t);var y=e.displayName&&e.componentId?"".concat(Jt(e.displayName),"-").concat(e.componentId):e.componentId||u,x=n&&i.attrs?i.attrs.concat(a).filter(Boolean):a,d=e.shouldForwardProp;if(n&&i.shouldForwardProp){var S=i.shouldForwardProp;if(e.shouldForwardProp){var j=e.shouldForwardProp;d=function(w,C){return S(w,C)&&j(w,C)}}else d=S}var $=new Mr(r,y,n?i.componentStyle:void 0);function I(w,C){return function(v,k,h){var st=v.attrs,$e=v.componentStyle,Re=v.defaultProps,Ne=v.foldedComponentIds,Oe=v.styledComponentId,ze=v.target,Te=nt.useContext(Ee),De=oe(),jt=v.shouldForwardProp||De.shouldForwardProp,T=function(ct,X,pt){for(var tt,F=_(_({},X),{className:void 0,theme:pt}),At=0;At<ct.length;At+=1){var ft=Z(tt=ct[At])?tt(F):tt;for(var L in ft)F[L]=L==="className"?B(F[L],ft[L]):L==="style"?_(_({},F[L]),ft[L]):ft[L]}return X.className&&(F.className=B(F.className,X.className)),F}(st,k,sr(k,Te,Re)||V),at=T.as||ze,J={};for(var D in T)T[D]===void 0||D[0]==="$"||D==="as"||D==="theme"||(D==="forwardedAs"?J.as=T.forwardedAs:jt&&!jt(D,at)||(J[D]=T[D]));var Ut=function(ct,X){var pt=oe(),tt=ct.generateAndInjectStyles(X,pt.styleSheet,pt.stylis);return tt}($e,T),It=B(Ne,Oe);return Ut&&(It+=" "+Ut),T.className&&(It+=" "+T.className),J[Et(at)&&!ye.has(at)?"class":"className"]=It,J.ref=h,Gt.createElement(at,J)}(l,w,C)}var l=nt.forwardRef(I);return l.attrs=x,l.componentStyle=$,l.shouldForwardProp=d,l.foldedComponentIds=n?B(i.foldedComponentIds,i.styledComponentId):"",l.styledComponentId=y,l.target=n?i.target:t,Object.defineProperty(l,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=n?function(C){for(var v=[],k=1;k<arguments.length;k++)v[k-1]=arguments[k];for(var h=0,st=v;h<st.length;h++)Mt(C,st[h],!0);return C}({},i.defaultProps,w):w}}),qt(l,function(){return".".concat(l.styledComponentId)}),o&&Se(l,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),l}function ae(t,e){for(var r=[t[0]],n=0,i=e.length;n<i;n+=1)r.push(e[n],t[n+1]);return r}var ce=function(t){return Object.assign(t,{isCss:!0})};function Br(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(Z(t)||it(t)){var n=t;return ce(Y(ae(kt,mt([n],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?Y(i):ce(Y(ae(i,e)))}function Bt(t,e,r){if(r===void 0&&(r=V),!e)throw ot(1,e);var n=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,r,Br.apply(void 0,mt([i],o,!1)))};return n.attrs=function(i){return Bt(t,e,_(_({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},n.withConfig=function(i){return Bt(t,e,_(_({},r),i))},n}var _e=function(t){return Bt(Fr,t)},E=_e;ye.forEach(function(t){E[t]=_e(t)});const Gr=E(fe)`
  color: var(--color-primary-grey);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;
  &.active {
    color: var(--color-primary-green-lite);
  }

  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 1.46%;
  }
`,Yr=()=>f.jsx(Gr,{to:"/welcome",children:"HealthyHub"}),Wr=E.svg`
  width: 26px;
  height: 26px;
  @media (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`,Hr=()=>f.jsxs(Wr,{id:"icon-profile-circle",viewBox:"0 0 32 32",children:[f.jsx("path",{fill:"none",stroke:"#fff",style:{stroke:"var(--color1, #fff)"},strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.8462",d:"M16.16 17.040c-0.093-0.013-0.213-0.013-0.32 0-2.347-0.080-4.213-2-4.213-4.36 0-2.413 1.947-4.373 4.373-4.373 2.413 0 4.373 1.96 4.373 4.373-0.013 2.36-1.867 4.28-4.213 4.36z"}),f.jsx("path",{fill:"none",stroke:"#fff",style:{stroke:"var(--color1, #fff)"},strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.8462",d:"M24.987 25.84c-2.373 2.173-5.52 3.493-8.987 3.493s-6.613-1.32-8.987-3.493c0.133-1.253 0.933-2.48 2.36-3.44 3.653-2.427 9.627-2.427 13.253 0 1.427 0.96 2.227 2.187 2.36 3.44z"}),f.jsx("path",{fill:"none",stroke:"#fff",style:{stroke:"var(--color1, #fff)"},strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"1.8462",d:"M16 29.333c7.364 0 13.333-5.969 13.333-13.333s-5.97-13.333-13.333-13.333c-7.364 0-13.333 5.97-13.333 13.333s5.97 13.333 13.333 13.333z"})]}),Kr=E.nav`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 6px;
`,pe=E(fe)`
  color: var(--color-primary-white);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  &.active {
    color: var(--color-primary-green-lite);
  }
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.43;
  }
`,qr=E.span`
  color: var(--color-primary-white);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.43;
  }
`,Ur=()=>f.jsxs(Kr,{children:[f.jsx(pe,{to:"/signin",children:"Sign in"}),f.jsx(qr,{children:" / "}),f.jsx(pe,{to:"/signup",children:"Sign up"}),f.jsx(Hr,{})]}),Vr=()=>f.jsxs(f.Fragment,{children:[f.jsx(Yr,{}),f.jsx(Ur,{})]}),Zr=E.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-primary-black-2);
  padding: 19px 10px;
  align-items: center;


 @media (min-width: 768px) {
  padding: 36px 27px;
 }


 @media (min-width: 1024px) {
  padding: 34px 34px;
 }
`,Qr=E.div`
  background-color: var(--color-primary-black-2);
  min-width: 320px;
  height: 744px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    min-width: 834px;
    height: 1194px;
  }

  @media (min-width: 1024px) {
    min-width: 1440px;
    height: 800px;
    flex-direction: row;
    gap: 104px;
  }
`,Jr=E.img`
  display: flex;
  width: 300px;
  height: 290px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-top: 24px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
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
`,Xr=E.form`
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  @media (min-width: 768px) {
    width: 404px;
    align-items: center;
  }

  @media (min-width: 1024px) {
    display: flex;
    align-items: flex-start;
  }
`,tn=E.h2`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  padding-bottom: 16px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 36px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    margin: 0;
  }
`,en=E.p`
  color: var(--color-primary-grey);
  padding-bottom: 24px;
  margin: 0;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: center;
    font-family: Poppins;
    font-size: 20px; //22 має бути
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 145.455% */
  }

  @media (min-width: 1024px) {
    text-align: start;
    flex-direction: row;
    font-size: 22px;
  }
`,rn=E.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    width: 360px;
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    display: flex;
    width: 192px;
    flex-direction: column;
  }
`,nn=E.button`
  width: 280px;
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

  @media (min-width: 768px) {
    width: 360px;
  }

  @media (min-width: 1024px) {
    width: 192px;
  }
`,on=E.button`
  width: 192px;
  color: var(--color-primary-grey);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  margin: 0; /* Вирівнює по центру */
  margin-left: 44px;
  display: block;

  @media (min-width: 768px) {
    width: 192px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    width: 192px;
    margin: 0; /* Вирівнюйте по центру */
    display: flex;
    justify-content: center;
  }
`,Rt=E.li`
  display: flex;
  gap: 8px;
`,Nt=E.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  position: relative;
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: transparent;
  border: 1px solid #b6b6b6;
  border-radius: 50%;
  vertical-align: middle;
  margin-top: 4px;
  margin-left: 4px;

  /* Стилі для внутрішнього кружка (позначки) */
  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #e3ffa8;

    /* вирівняти по центру */
    position: absolute;
    top: 12%;
    left: 12%;
    transform: translate(12% 12%);
    width: 8px;
    height: 8px;
    opacity: 0;

    transition: 0.2s ease-in;
  }

  /* Змінюємо стиль позначки при виборі */
  &:checked {
    background-color: transparent;
    &::before {
      opacity: 1;
    }
  }
`,Ot=E.label`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`,sn=()=>f.jsxs(Qr,{children:[f.jsx(Jr,{alt:"Goal Image",src:"/src/components/YourGoal/img/IllustrationGoals-min.svg"}),f.jsxs(Xr,{children:[f.jsx(tn,{children:"Your goal"}),f.jsx(en,{children:"Choose a goal so that we can help you effectively"}),f.jsxs(rn,{children:[f.jsxs(Rt,{children:[f.jsx(Nt,{type:"radio",id:"loseFat",name:"goal",value:"Lose Fat",tabIndex:0}),f.jsx(Ot,{for:"loseFat",children:"Lose Fat"})]}),f.jsxs(Rt,{children:[f.jsx(Nt,{type:"radio",id:"maintain",name:"goal",value:"Maintain",tabIndex:0}),f.jsx(Ot,{for:"maintain",children:"Maintain"})]}),f.jsxs(Rt,{children:[f.jsx(Nt,{type:"radio",id:"gainMuscle",name:"goal",value:"Gain Muscle",tabIndex:0}),f.jsx(Ot,{for:"gainMuscle",children:"Gain Muscle"})]})]}),f.jsx(nn,{children:"Next"}),f.jsx(on,{type:"button",children:"Back"})]})]}),pn=()=>f.jsxs(f.Fragment,{children:[f.jsx("header",{children:f.jsx(Zr,{children:f.jsx(Vr,{})})}),f.jsx(sn,{}),f.jsx(Gt.Suspense,{children:f.jsx(Me,{})})]});export{pn as default};
