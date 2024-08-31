import{b as ut,u as dt,p as ft}from"./links.w575jfOL.js";import"./default-i18n.DXRQgkn2.js";import{r as ue,aP as pt,w as X,O as Ae,aZ as Ie,i as vt,N as de,f as $,z as De,n as ae,aX as xe,p as ht,u as mt,b3 as bt,aS as yt,o as v,c as _,a as S,m as W,G as M,j as q,e as fe,g as w,X as gt,Q as Fe,k as V,l as x,B as wt,q as je,T as _t,v as k,R as $t,C as D,F as K,J as re,t as R,b as C,x as ie,E as _e}from"./runtime-dom.esm-bundler.CWn9hmRK.js";import{u as St,T as Ct}from"./TruSeoScore.DmC22Awy.js";import{_ as Tt}from"./_plugin-vue_export-helper.BN1snXvA.js";import{S as Pt,a as kt}from"./Ellipse.Br8hAdqt.js";import{_ as Mt,a as Et,c as Ot}from"./Caret.B8YmKvEY.js";import{C as Lt}from"./ProBadge.CeTQI5Mm.js";import{S as Nt}from"./Information.DOYCSlH5.js";import{T as zt}from"./Slide.DwUOEoDg.js";const Ve={locks:{},zIndex:2e3,enableRipple:!0};ue(Ve);var He=ue(Ve),Bt=Object.defineProperty,Rt=Object.defineProperties,Wt=Object.getOwnPropertyDescriptors,$e=Object.getOwnPropertySymbols,At=Object.prototype.hasOwnProperty,It=Object.prototype.propertyIsEnumerable,Se=(e,t,n)=>t in e?Bt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Dt=(e,t)=>{for(var n in t||(t={}))At.call(t,n)&&Se(e,n,t[n]);if($e)for(var n of $e(t))It.call(t,n)&&Se(e,n,t[n]);return e},xt=(e,t)=>Rt(e,Wt(t)),E=e=>typeof e=="string",Ft=e=>typeof e=="boolean",pe=e=>typeof e=="number",Ue=e=>pe(e)||E(e)&&/^[-+]?\d+$/.test(e),jt=e=>Object.prototype.toString.call(e)==="[object Object]",Vt=e=>typeof e=="function",Xe=e=>Array.isArray(e),Ht=e=>e===window,Ut=()=>te()&&"ontouchstart"in window,te=()=>typeof window<"u",Ce=(e,t)=>{if(e.length){const n=e.indexOf(t);if(n>-1)return e.splice(n,1)}},Xt=(...e)=>e.map(t=>{if(Xe(t)){const[n,o,r=null]=t;return n?o:r}return t}),qt=()=>typeof globalThis<"u"?globalThis:te()?window:typeof global<"u"?global:self,le=e=>{const t=qt();return t.requestAnimationFrame?t.requestAnimationFrame(e):t.setTimeout(e)},Yt=()=>new Promise(e=>{le(e)}),qe=()=>new Promise(e=>{le(()=>{le(e)})}),ve=e=>window.getComputedStyle(e),G=e=>{if(Ht(e)){const t=e.innerWidth,n=e.innerHeight,o={x:0,y:0,top:0,left:0,right:t,bottom:n,width:t,height:n};return xt(Dt({},o),{toJSON:()=>o})}return e.getBoundingClientRect()},Kt=e=>{const t="scrollTop"in e?e.scrollTop:e.scrollY;return Math.max(t,0)},Zt=e=>{const t="scrollLeft"in e?e.scrollLeft:e.scrollX;return Math.max(t,0)};function F(e,...t){if(Xe(e))return e.map(n=>n(...t));if(e)return e(...t)}var Ye=e=>e==null?0:E(e)?(e=parseFloat(e),e=Number.isNaN(e)?0:e,e):Ft(e)?Number(e):e,Gt=(e,t,n)=>Math.min(n,Math.max(t,e)),Jt=e=>Qt(e).replace(e.charAt(0),e.charAt(0).toUpperCase()),Qt=e=>e.replace(/-(\w)/g,(t,n)=>n.toUpperCase());function en(e){return t=>{const n=`${e}-${t}`,o=r=>r?r[0]==="$"?r.replace("$",e):r.startsWith("--")?`${n}${r}`:`${n}__${r}`:n;return{name:Jt(n),n:o,classes:Xt}}}var tn=Object.defineProperty,J=Object.getOwnPropertySymbols,Ke=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable,Te=(e,t,n)=>t in e?tn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,nn=(e,t)=>{for(var n in t||(t={}))Ke.call(t,n)&&Te(e,n,t[n]);if(J)for(var n of J(t))Ze.call(t,n)&&Te(e,n,t[n]);return e},on=(e,t)=>{var n={};for(var o in e)Ke.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&J)for(var o of J(e))t.indexOf(o)<0&&Ze.call(e,o)&&(n[o]=e[o]);return n};function Ge(e){let t=!1;De(()=>{e(),ae(()=>{t=!0})}),xe(()=>{t&&e()})}function ce(e,t,n,o={}){if(!te())return;const{passive:r=!1,capture:i=!1}=o;let a=!1,l=!1;const s=f=>Vt(f)?f():mt(f),c=f=>{if(a||l)return;const b=s(f);b&&(b.addEventListener(t,n,{passive:r,capture:i}),a=!0)},u=f=>{if(!a||l)return;const b=s(f);b&&(b.removeEventListener(t,n,{capture:i}),a=!1)};let h;pt(e)&&(h=X(()=>e.value,(f,b)=>{u(b),c(f)}));const m=()=>{h==null||h(),u(e),l=!0};return Ge(()=>{c(e)}),Ae(()=>{u(e)}),Ie(()=>{u(e)}),m}function rn(e){let t=!1;Ie(()=>{t=!0,e()}),bt(()=>{t||e()})}function sn(e){const t=de();return e in t.provides}function an(e){if(!sn(e))return{index:null,parentProvider:null,bindParent:null};const n=vt(e),{childInstances:o,collect:r,clear:i}=n,a=on(n,["childInstances","collect","clear"]),l=de();return{index:$(()=>o.indexOf(l)),parentProvider:a,bindParent:u=>{De(()=>{ae().then(()=>{r(l,u)})}),Ae(()=>{ae().then(()=>{i(l,u)})})}}}function ln(e){const t=[],n=o=>{if(o!=null&&o.component){n(o==null?void 0:o.component.subTree);return}Array.isArray(o==null?void 0:o.children)&&o.children.forEach(r=>{yt(r)&&(t.push(r),n(r))})};return n(e),t}function cn(e){const t=de(),n=ue([]),o=[],r=$(()=>n.length),i=()=>{const c=ln(t.subTree);n.sort((u,h)=>c.indexOf(u.vnode)-c.indexOf(h.vnode))},a=(c,u)=>{n.push(c),o.push(u),i()},l=(c,u)=>{Ce(n,c),Ce(o,u)};return{length:r,childProviders:o,bindChildren:c=>{ht(e,nn({childInstances:n,collect:a,clear:l},c))}}}function Je(e){ce(()=>window,"resize",e,{passive:!0}),ce(()=>window,"orientationchange",e,{passive:!0})}var un=Object.defineProperty,dn=Object.defineProperties,fn=Object.getOwnPropertyDescriptors,Pe=Object.getOwnPropertySymbols,pn=Object.prototype.hasOwnProperty,vn=Object.prototype.propertyIsEnumerable,ke=(e,t,n)=>t in e?un(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,hn=(e,t)=>{for(var n in t||(t={}))pn.call(t,n)&&ke(e,n,t[n]);if(Pe)for(var n of Pe(t))vn.call(t,n)&&ke(e,n,t[n]);return e},mn=(e,t)=>dn(e,fn(t));function se(e,t){return Array.isArray(t)?t.reduce((n,o)=>(n[o]=e[o],n),{}):e[t]}function he(e,t){const n=e;return n.install=function(o){const{name:r}=e;r&&o.component(r,e)},n}function me(e,t){e.setPropsDefaults=function(n){Object.entries(n).forEach(([o,r])=>{const i=t[o];if(i!=null){if(jt(i)){t[o]=mn(hn({},i),{default:r});return}t[o]={type:i,default:r}}})}}const ne=en("var");function H(e){return{type:[Function,Array],default:e}}function bn(e,t){return e===!1?null:(e===!0&&t&&(e=t),`var-elevation--${e}`)}var yn=Object.defineProperty,gn=Object.defineProperties,wn=Object.getOwnPropertyDescriptors,Me=Object.getOwnPropertySymbols,_n=Object.prototype.hasOwnProperty,$n=Object.prototype.propertyIsEnumerable,Ee=(e,t,n)=>t in e?yn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qe=(e,t)=>{for(var n in t||(t={}))_n.call(t,n)&&Ee(e,n,t[n]);if(Me)for(var n of Me(t))$n.call(t,n)&&Ee(e,n,t[n]);return e},Sn=(e,t)=>gn(e,wn(t));const{n:et}=ne("ripple"),Oe=250;function Cn(e){const{zIndex:t,position:n}=ve(e);e.style.overflow="hidden",e.style.overflowX="hidden",e.style.overflowY="hidden",n==="static"&&(e.style.position="relative"),t==="auto"&&(e.style.zIndex="1")}function Le(e){return"touches"in e}function Tn(e,t){const{top:n,left:o}=G(e),{clientWidth:r,clientHeight:i}=e,a=Math.sqrt(r**2+i**2)/2,l=a*2,s=Le(t)?t.touches[0].clientX-o:r/2,c=Le(t)?t.touches[0].clientY-n:i/2,u=(r-a*2)/2,h=(i-a*2)/2,m=s-a,f=c-a;return{x:m,y:f,centerX:u,centerY:h,size:l}}function be(e){const t=this._ripple;if(t.removeRipple(),t.disabled||t.tasker||!He.enableRipple)return;const n=()=>{t.tasker=null;const{x:o,y:r,centerX:i,centerY:a,size:l}=Tn(this,e),s=document.createElement("div");s.classList.add(et()),s.style.opacity="0",s.style.transform=`translate(${o}px, ${r}px) scale3d(.3, .3, .3)`,s.style.width=`${l}px`,s.style.height=`${l}px`,t.color&&(s.style.backgroundColor=t.color),s.dataset.createdAt=String(performance.now()),Cn(this),this.appendChild(s),window.setTimeout(()=>{s.style.transform=`translate(${i}px, ${a}px) scale3d(1, 1, 1)`,s.style.opacity=".25"},20)};t.tasker=window.setTimeout(n,30)}function Q(){const e=this._ripple,t=()=>{const n=this.querySelectorAll(`.${et()}`);if(!n.length)return;const o=n[n.length-1],r=Oe-performance.now()+Number(o.dataset.createdAt);window.setTimeout(()=>{o.style.opacity="0",window.setTimeout(()=>{var i;return(i=o.parentNode)==null?void 0:i.removeChild(o)},Oe)},r)};e.tasker?window.setTimeout(t,30):t()}function tt(){if(!Ut()||!He.enableRipple)return;const e=this._ripple;e.tasker&&window.clearTimeout(e.tasker),e.tasker=null}let ee=!1;function Pn(e){ee||!(e.key===" "||e.key==="Enter")||(be.call(this,e),ee=!0)}function Ne(){ee&&(Q.call(this),ee=!1)}function kn(e,t){var n;e._ripple=Sn(Qe({tasker:null},(n=t.value)!=null?n:{}),{removeRipple:Q.bind(e)}),e.addEventListener("touchstart",be,{passive:!0}),e.addEventListener("touchmove",tt,{passive:!0}),e.addEventListener("dragstart",Q,{passive:!0}),e.addEventListener("keydown",Pn),e.addEventListener("keyup",Ne),e.addEventListener("blur",Ne),document.addEventListener("touchend",e._ripple.removeRipple,{passive:!0}),document.addEventListener("touchcancel",e._ripple.removeRipple,{passive:!0}),document.addEventListener("dragend",e._ripple.removeRipple,{passive:!0})}function Mn(e){e.removeEventListener("touchstart",be),e.removeEventListener("touchmove",tt),e.removeEventListener("dragstart",Q),!(!e._ripple||!e._ripple.removeRipple)&&(document.removeEventListener("touchend",e._ripple.removeRipple),document.removeEventListener("touchcancel",e._ripple.removeRipple),document.removeEventListener("dragend",e._ripple.removeRipple))}function En(e,t){var n,o,r,i,a,l;const s={color:(n=t.value)==null?void 0:n.color,disabled:(o=t.value)==null?void 0:o.disabled};(s.color!==((r=e._ripple)==null?void 0:r.color)||s.disabled!==((i=e._ripple)==null?void 0:i.disabled))&&(e._ripple=Qe({tasker:s.disabled?null:(a=e._ripple)==null?void 0:a.tasker,removeRipple:(l=e._ripple)==null?void 0:l.removeRipple},s))}const On={mounted:kn,unmounted:Mn,updated:En,install(e){e.directive("ripple",this)}};var Ln=On;function Nn(e,t){throw Error(`Varlet [${e}]: ${t}`)}function zn(e){let t=e;for(;t&&!(!t.parentNode||(t=t.parentNode,t===document.body||t===document.documentElement));){const n=/(scroll|auto)/,{overflowY:o,overflow:r}=ve(t);if(n.test(o)||n.test(r))return t}return window}function Bn(){const{width:e,height:t}=G(window);return{vw:e,vh:t,vMin:Math.min(e,t),vMax:Math.max(e,t)}}const Rn=e=>E(e)&&e.endsWith("rem"),Wn=e=>E(e)&&e.endsWith("px")||pe(e),An=e=>E(e)&&e.endsWith("vw"),In=e=>E(e)&&e.endsWith("vh"),Dn=e=>E(e)&&e.endsWith("vmin"),xn=e=>E(e)&&e.endsWith("vmax"),Fn=e=>{if(Ue(e))return Number(e);if(Wn(e))return+e.replace("px","");if(!te())return 0;const{vw:t,vh:n,vMin:o,vMax:r}=Bn();if(An(e))return+e.replace("vw","")*t/100;if(In(e))return+e.replace("vh","")*n/100;if(Dn(e))return+e.replace("vmin","")*o/100;if(xn(e))return+e.replace("vmax","")*r/100;if(Rn(e)){const i=+e.replace("rem",""),a=ve(document.documentElement).fontSize;return i*parseFloat(a)}return E(e)?Ye(e):0},jn=e=>{if(e!=null)return Ue(e)?`${e}px`:String(e)};function ze(e,{top:t=0,left:n=0,duration:o=300,animation:r}){const i=Date.now(),a=Kt(e),l=Zt(e);return new Promise(s=>{const c=()=>{const u=(Date.now()-i)/o;if(u<1){const h=a+(t-a)*r(u),m=l+(n-l)*r(u);e.scrollTo(m,h),requestAnimationFrame(c)}else e.scrollTo(n,t),s()};requestAnimationFrame(c)})}const Be=e=>e,U={offsetTop:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:10},cssMode:Boolean,disabled:Boolean,onScroll:H()};var Re=(e,t,n)=>new Promise((o,r)=>{var i=s=>{try{l(n.next(s))}catch(c){r(c)}},a=s=>{try{l(n.throw(s))}catch(c){r(c)}},l=s=>s.done?o(s.value):Promise.resolve(s.value).then(i,a);l((n=n.apply(e,t)).next())});const{name:Vn,n:Hn,classes:Un}=ne("sticky");function Xn(e,t){return v(),_("div",{class:M(e.classes(e.n(),[e.enableCSSMode,e.n("--css-mode")])),ref:"stickyEl",style:q({zIndex:e.toNumber(e.zIndex),top:e.enableCSSMode?`${e.offsetTop}px`:void 0,width:e.enableFixedMode?e.fixedWidth:void 0,height:e.enableFixedMode?e.fixedHeight:void 0})},[S("div",{class:M(e.n("wrapper")),ref:"wrapperEl",style:q({zIndex:e.toNumber(e.zIndex),position:e.enableFixedMode?"fixed":void 0,width:e.enableFixedMode?e.fixedWrapperWidth:void 0,height:e.enableFixedMode?e.fixedWrapperHeight:void 0,left:e.enableFixedMode?e.fixedLeft:void 0,top:e.enableFixedMode?e.fixedTop:void 0})},[W(e.$slots,"default")],6)],6)}const nt=fe({name:Vn,props:U,setup(e){const t=w(null),n=w(null),o=w(!1),r=w("0px"),i=w("0px"),a=w("auto"),l=w("auto"),s=w("auto"),c=w("auto"),u=$(()=>!e.disabled&&e.cssMode),h=$(()=>!e.disabled&&!e.cssMode&&o.value),m=$(()=>Fn(e.offsetTop));let f;X(()=>e.disabled,L),Ge(()=>Re(this,null,function*(){yield qe(),d(),g()})),rn(A),Je(L),ce(()=>window,"scroll",g);function b(){const{cssMode:T,disabled:I}=e;if(I)return;let N=0;if(f&&f!==window){const{top:p}=G(f);N=p}const z=n.value,B=t.value,{top:oe,left:O}=G(B),Y=oe-N;return Y<=m.value?(T||(a.value=`${B.offsetWidth}px`,l.value=`${B.offsetHeight}px`,r.value=`${N+m.value}px`,i.value=`${O}px`,s.value=`${z.offsetWidth}px`,c.value=`${z.offsetHeight}px`,o.value=!0),{offsetTop:m.value,isFixed:!0}):(o.value=!1,{offsetTop:Y,isFixed:!1})}function d(){f=zn(t.value),f!==window&&f.addEventListener("scroll",g)}function g(){const T=b();T&&F(e.onScroll,T.offsetTop,T.isFixed)}function A(){!f||f===window||f.removeEventListener("scroll",g)}function L(){return Re(this,null,function*(){o.value=!1,yield Yt(),b()})}return{stickyEl:t,wrapperEl:n,isFixed:o,offsetTop:m,fixedTop:r,fixedLeft:i,fixedWidth:a,fixedHeight:l,fixedWrapperWidth:s,fixedWrapperHeight:c,enableCSSMode:u,enableFixedMode:h,n:Hn,classes:Un,resize:L,toNumber:Ye}}});nt.render=Xn;var ye=nt;he(ye);me(ye,U);var qn=ye;const ot={name:[String,Number],disabled:Boolean,ripple:{type:Boolean,default:!0},onClick:H()},rt=Symbol("TABS_BIND_TAB_KEY");function Yn(){const{childProviders:e,bindChildren:t,length:n}=cn(rt);return{length:n,tabList:e,bindTabList:t}}function Kn(){const{parentProvider:e,bindParent:t,index:n}=an(rt);return t||Nn("Tab","<var-tab/> must in <var-tabs/>"),{index:n,tabs:e,bindTabs:t}}const{name:Zn,n:Z,classes:Gn}=ne("tab");function Jn(e,t){const n=gt("ripple");return Fe((v(),_("div",{class:M(e.classes(e.n(),e.n("$--box"),e.computeColorClass(),e.n(`--${e.itemDirection}`))),ref:"tabEl",style:q({color:e.computeColorStyle()}),onClick:t[0]||(t[0]=(...o)=>e.handleClick&&e.handleClick(...o))},[W(e.$slots,"default")],6)),[[n,{disabled:e.disabled||!e.ripple}]])}const it=fe({name:Zn,directives:{Ripple:Ln},props:ot,setup(e){const t=w(null),n=$(()=>t.value),o=$(()=>e.name),r=$(()=>e.disabled),{index:i,tabs:a,bindTabs:l}=Kn(),{onTabClick:s,active:c,activeColor:u,inactiveColor:h,disabledColor:m,itemDirection:f,resize:b}=a,d={name:o,index:i,disabled:r,element:n};l(d),X(()=>[e.name,e.disabled],b);function g(){return e.name!=null?c.value===e.name:c.value===(i==null?void 0:i.value)}function A(){return e.disabled?m.value:g()?u.value:h.value}function L(){return e.disabled?Z("$-tab--disabled"):g()?Z("$-tab--active"):Z("$-tab--inactive")}function T(I){const{disabled:N,name:z,onClick:B}=e;N||(F(B,z??i.value,I),s(d))}return{tabEl:t,active:c,activeColor:u,inactiveColor:h,itemDirection:f,n:Z,classes:Gn,computeColorStyle:A,computeColorClass:L,handleClick:T}}});it.render=Jn;var ge=it;he(ge);me(ge,ot);var Qn=ge;const st={active:{type:[String,Number],default:0},layoutDirection:{type:String,default:"horizontal"},itemDirection:{type:String,default:"horizontal"},fixedBottom:Boolean,activeColor:String,inactiveColor:String,disabledColor:String,color:String,indicatorColor:String,indicatorSize:[String,Number],elevation:{type:[Boolean,String,Number],default:!1},scrollable:{type:String,default:"auto"},indicatorPosition:{type:String,default:"normal"},safeArea:Boolean,sticky:Boolean,stickyCssMode:se(U,"cssMode"),stickyZIndex:se(U,"zIndex"),offsetTop:se(U,"offsetTop"),onClick:H(),onChange:H(),"onUpdate:active":H()};var We=(e,t,n)=>new Promise((o,r)=>{var i=s=>{try{l(n.next(s))}catch(c){r(c)}},a=s=>{try{l(n.throw(s))}catch(c){r(c)}},l=s=>s.done?o(s.value):Promise.resolve(s.value).then(i,a);l((n=n.apply(e,t)).next())});const{name:eo,n:to,classes:no}=ne("tabs");function oo(e,t){return v(),V(je(e.sticky?e.n("$-sticky"):e.Transition),{ref:e.sticky?"stickyComponent":void 0,"css-mode":e.sticky?e.stickyCssMode:void 0,"offset-top":e.sticky?e.offsetTop:void 0,"z-index":e.sticky?e.stickyZIndex:void 0},{default:x(()=>[S("div",wt({class:e.classes(e.n(),e.n("$--box"),e.n(`--item-${e.itemDirection}`),e.n(`--layout-${e.layoutDirection}-padding`),e.formatElevation(e.elevation,4),[e.fixedBottom,e.n("--fixed-bottom")],[e.safeArea,e.n("--safe-area")]),style:{background:e.color}},e.$attrs),[S("div",{ref:"scrollerEl",class:M(e.classes(e.n("tab-wrap"),[e.localScrollable,e.n(`--layout-${e.layoutDirection}-scrollable`)],e.n(`--layout-${e.layoutDirection}`)))},[W(e.$slots,"default"),S("div",{class:M(e.classes(e.n("indicator"),e.n(`--layout-${e.layoutDirection}${e.indicatorPosition}-indicator`))),style:q({width:e.layoutDirection==="horizontal"?e.indicatorWidth:e.toSizeUnit(e.indicatorSize),height:e.layoutDirection==="horizontal"?e.toSizeUnit(e.indicatorSize):e.indicatorHeight,transform:e.layoutDirection==="horizontal"?`translateX(${e.indicatorX})`:`translateY(${e.indicatorY})`})},[S("div",{class:M(e.classes(e.n("indicator-inner"),e.n(`--layout-${e.layoutDirection}-indicator-inner`))),style:q({background:e.indicatorColor||e.activeColor})},null,6)],6)],2)],16)]),_:3},8,["css-mode","offset-top","z-index"])}const at=fe({name:eo,components:{VarSticky:qn},inheritAttrs:!1,props:st,setup(e){const t=w("0px"),n=w("0px"),o=w("0px"),r=w("0px"),i=w(!1),a=w(null),l=$(()=>e.active),s=$(()=>e.activeColor),c=$(()=>e.inactiveColor),u=$(()=>e.disabledColor),h=$(()=>e.itemDirection),m=w(null),f=$(()=>e.indicatorPosition==="reverse"?"-reverse":""),{tabList:b,bindTabList:d,length:g}=Yn();d({active:l,activeColor:s,inactiveColor:c,disabledColor:u,itemDirection:h,resize:O,onTabClick:L}),X(()=>g.value,()=>We(this,null,function*(){yield qe(),O()})),X(()=>[e.active,e.scrollable],O),xe(O),Je(O);function L(p){var y;const P=(y=p.name.value)!=null?y:p.index.value,{active:j,onChange:lt,onClick:ct}=e;F(e["onUpdate:active"],P),F(ct,P),P!==j&&F(lt,P)}function T(){return b.find(({name:p})=>e.active===p.value)}function I(p){return b.find(({index:y})=>(p??e.active)===y.value)}function N(){if(g.value===0)return;const{active:p}=e;if(pe(p)){const y=Gt(p,0,g.value-1);return F(e["onUpdate:active"],y),I(y)}}function z(){i.value=e.scrollable==="always"||b.length>=5}function B({element:p}){const y=p.value;y&&(e.layoutDirection==="horizontal"?(t.value=`${y.offsetWidth}px`,o.value=`${y.offsetLeft}px`):(n.value=`${y.offsetHeight}px`,r.value=`${y.offsetTop}px`))}function oe({element:p}){if(!i.value)return;const y=a.value,P=p.value;if(e.layoutDirection==="horizontal"){const j=P.offsetLeft+P.offsetWidth/2-y.offsetWidth/2;ze(y,{left:j,animation:Be})}else{const j=P.offsetTop+P.offsetHeight/2-y.offsetHeight/2;ze(y,{top:j,animation:Be})}}function O(){const p=T()||I()||N();!p||p.disabled.value||(z(),B(p),oe(p))}function Y(){return We(this,null,function*(){e.sticky&&m.value&&(yield m.value.resize())})}return{stickyComponent:m,indicatorWidth:t,indicatorHeight:n,indicatorX:o,indicatorY:r,indicatorPosition:f,localScrollable:i,scrollerEl:a,Transition:_t,toSizeUnit:jn,n:to,classes:no,resize:O,resizeSticky:Y,formatElevation:bn}}});at.render=oo;var we=at;he(we);me(we,st);var ro=we;const io={setup(){const{strings:e}=St();return{postEditorStore:ut(),rootStore:dt(),composableStrings:e}},emits:["changed"],components:{BaseButton:Mt,CoreProBadge:Lt,SvgCaret:Et,SvgCircleCheck:Ot,SvgCircleInformation:Nt,SvgEllipse:Pt,TransitionSlide:zt,VarTab:Qn,VarTabs:ro},mixins:[kt,Ct],props:{tabs:{type:Array,required:!0},skinnyTabs:Boolean,active:String,showSaveButton:{type:Boolean,default(){return!0}},internal:Boolean,disableMobile:Boolean},data(){return{buttonLoading:!1,showMobileMenu:!0,calculateWidth:!1,showMobileTabs:!1,strings:ft(this.composableStrings,{saveChanges:this.$t.__("Save Changes",this.$td),new:this.$t.__("NEW!",this.$td)})}},computed:{activeTab(){var e;return this.active?this.active:this.$route&&this.$route.name?this.$route.name:(e=this.tabs[0])==null?void 0:e.slug},filteredTabs(){return this.tabs.filter(e=>e.slug!==(this.active?this.active:this.$route&&this.$route.name?this.$route.name:""))}},methods:{clickMobileTabs(e){this.$emit("changed",e),this.showMobileTabs=!1},maybeChangeTab(e){if(this.active){this.$emit("changed",e);return}const t=this.tabs.find(n=>n.slug===e);t&&this.$router.push(t.url)},getActiveTabName(){const e=this.tabs.find(t=>t.slug===(this.active?this.active:this.$route&&this.$route.name?this.$route.name:""));return e?e.name:""},maybeShowMobileMenu(){if(window.matchMedia("(max-width: 782px)").matches&&!this.disableMobile){this.showMobileMenu=!0;return}let e=0;this.calculateWidth=!0,this.$nextTick(()=>{e=this.$refs["tabs-scroller"].offsetWidth,this.calculateWidth=!1;let t=0;const n=this.$refs["tabs-button"];if(n){const o=n.querySelector(".aioseo-button");t=o?o.scrollWidth:0}if(e+t>this.$refs["aioseo-tabs"].offsetWidth){this.showMobileMenu=!0;return}this.showMobileMenu=!1})},createRipple(e){const t=e.currentTarget,n=document.createElement("span"),o=Math.max(t.clientWidth,t.clientHeight),r=o/2,i=t.getBoundingClientRect();n.style.width=n.style.height=`${o}px`,n.style.left=`${e.clientX-(i.left+r)}px`,n.style.top=`${e.clientY-(i.top+r)}px`,n.classList.add("ripple");const a=t.getElementsByClassName("ripple")[0];a&&a.remove(),t.appendChild(n)}},beforeMount(){window.addEventListener("resize",this.maybeShowMobileMenu)},async mounted(){this.$nextTick(()=>{this.maybeShowMobileMenu();const e=this.$refs["aioseo-tabs"],t=e.querySelector(".var-tab--active"),n=e.querySelector(".var-tabs__indicator");if(!t||!n)return;setTimeout(()=>{n.style.width==="0px"&&(n.style.width=`${t.offsetWidth}px`,n.style.transform=`translateX(${t.offsetLeft}px)`)},300),new MutationObserver(()=>{n.style.width==="0px"&&(n.style.width=`${t.offsetWidth}px`,n.style.transform=`translateX(${t.offsetLeft}px)`)}).observe(n,{attributes:!0});const r=e.querySelectorAll(".var-tab");r.length&&r.forEach(i=>{i.addEventListener("click",this.createRipple)})})},beforeUnmount(){window.removeEventListener("resize",this.maybeShowMobileMenu)}},so={class:"tabs-scroller",ref:"tabs-scroller"},ao={class:"tab-label"},lo=["textContent"],co={key:1,class:"warning"},uo={key:0,class:"label pro-badge"},fo={key:1,class:"label new"},po={key:0,class:"aioseo-mobile-tabs"},vo=S("span",{class:"tab-indicator"},null,-1),ho={class:"tab-links"},mo=["onClick"],bo={key:1,class:"button-right",ref:"tabs-button"},yo={class:"tabs-extra"};function go(e,t,n,o,r,i){const a=k("svg-ellipse"),l=k("svg-circle-check"),s=k("svg-circle-information"),c=k("core-pro-badge"),u=k("var-tab"),h=k("var-tabs"),m=k("svg-caret"),f=k("transition-slide"),b=k("base-button");return v(),_("div",{class:M(["aioseo-tabs",{internal:n.internal,skinny:n.skinnyTabs}]),ref:"aioseo-tabs"},[Fe(S("div",so,[D(h,{active:i.activeTab,onClick:i.maybeChangeTab,ref:"var-tabs"},{default:x(()=>[(v(!0),_(K,null,re(n.tabs,(d,g)=>(v(),V(u,{name:d.slug,key:g},{default:x(()=>[W(e.$slots,"var-tab",{tab:d},()=>[W(e.$slots,"var-tab-icon",{tab:d}),S("span",ao,R(d.name),1),d.errorCount>=0?(v(),_("span",{key:0,class:M(["tab-score",e.getErrorClass(o.postEditorStore.currentPost.page_analysis.analysis[d.slug].errors)])},[0<o.postEditorStore.currentPost.page_analysis.analysis[d.slug].errors?(v(),V(a,{key:0,width:"8"})):C("",!0),o.postEditorStore.currentPost.page_analysis.analysis[d.slug].errors===0?(v(),V(l,{key:1,width:"12"})):C("",!0),S("span",{textContent:R(e.getErrorDisplay(o.postEditorStore.currentPost.page_analysis.analysis[d.slug].errors))},null,8,lo)],2)):C("",!0),d.warning&&e.$root.$data.screenContext!=="sidebar"?(v(),_("span",co,[D(s,{width:"15",height:"15"})])):C("",!0),d.label?(v(),_(K,{key:2},[d.label==="pro"?(v(),_("span",uo,[D(c)])):C("",!0),d.label==="new"?(v(),_("span",fo,R(r.strings.new),1)):C("",!0)],64)):C("",!0)])]),_:2},1032,["name"]))),128))]),_:3},8,["active","onClick"])],512),[[$t,!r.showMobileMenu||r.calculateWidth]]),r.showMobileMenu?(v(),_("div",po,[S("div",{class:"active-tab",onClick:t[1]||(t[1]=d=>r.showMobileTabs=!r.showMobileTabs)},[S("div",null,[ie(R(i.getActiveTabName())+" ",1),D(m,{onClick:t[0]||(t[0]=_e(d=>r.showMobileTabs=!r.showMobileTabs,["stop"])),class:M({rotated:!r.showMobileTabs})},null,8,["class"]),vo])]),D(f,{active:r.showMobileTabs,class:"tab-dropdown"},{default:x(()=>[S("div",ho,[n.active?C("",!0):(v(!0),_(K,{key:0},re(i.filteredTabs,(d,g)=>(v(),V(je(n.active?"a":"router-link"),{key:g,to:d.url,onClick:t[2]||(t[2]=A=>r.showMobileTabs=!1)},{default:x(()=>[ie(R(d.name),1)]),_:2},1032,["to"]))),128)),n.active?(v(!0),_(K,{key:1},re(i.filteredTabs,(d,g)=>(v(),_("a",{href:"#",key:g,onClick:_e(A=>i.clickMobileTabs(d.slug),["prevent"])},R(d.name),9,mo))),128)):C("",!0)])]),_:1},8,["active"])])):C("",!0),n.showSaveButton?(v(),_("div",bo,[W(e.$slots,"button",{},()=>[D(b,{type:"blue",size:"medium",loading:o.rootStore.loading,onClick:e.processSaveChanges},{default:x(()=>[ie(R(r.strings.saveChanges),1)]),_:1},8,["loading","onClick"])])],512)):C("",!0),S("div",yo,[W(e.$slots,"extra")])],2)}const Oo=Tt(io,[["render",go]]);export{Oo as C};
