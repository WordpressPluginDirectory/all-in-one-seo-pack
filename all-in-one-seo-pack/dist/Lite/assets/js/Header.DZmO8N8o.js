import{v as k,o as t,c as n,C as i,l as $,a as c,T as P,x as V,t as y,m as Z,G as q,g as Q,f as x,y as z,u as e,k as f,b as a,E as B}from"./runtime-dom.esm-bundler.DKw-RQqs.js";import{u as I}from"./vue-router.CGjDmB5N.js";import{g as M,e as E,Q as K,i as J,N as X,j as ee,u as se}from"./index.ByF2aI-G.js";import{a as A}from"./addons.C_QAj7aO.js";import{u as te,C as oe,a as ne}from"./LicenseKeyBar.twKxq9OX.js";import{U as re}from"./AnimatedNumber.BQ6DH9FO.js";import{_ as v}from"./_plugin-vue_export-helper.BN1snXvA.js";import{S as F}from"./Caret.DMa7g0j7.js";import{S as ae}from"./LogoGear.Cp4EitBg.js";import"./translations.Ur07Kmot.js";import{a as b,_ as m}from"./default-i18n.DvLqo3S3.js";import{S as T}from"./Logo.C2KPC9qS.js";import{a as ie}from"./index.Olu2afa7.js";const ce={components:{UtilAnimatedNumber:re},props:{percentage:Number},data(){return{fromNumber:0,number:0}},watch:{percentage:{deep:!0,handler(s){s!==this.number&&(this.fromNumber=this.number,this.number=s)}}},mounted(){this.number=this.percentage}},le={class:"aioseo-percent-circle"},ue={class:"aioseo-seo-site-score-svg",viewBox:"0 0 33.83098862 33.83098862",xmlns:"http://www.w3.org/2000/svg"},de=c("circle",{class:"aioseo-percent-circle-score__background",stroke:"#BFD6F7","stroke-width":"2",fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"},null,-1),pe=["stroke-dasharray"],ge={class:"aioseo-percent-circle-percent"};function me(s,l,d,p,u,o){const r=k("util-animated-number");return t(),n("div",le,[i(P,{name:"fill-percent-circle"},{default:$(()=>[(t(),n("svg",ue,[de,c("circle",{class:"aioseo-percent-circle-score__circle",stroke:"#005AE0","stroke-width":"2","stroke-dasharray":`${d.percentage},100`,fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"},null,8,pe)]))]),_:1}),c("div",ge,[c("div",null,[i(r,{number:u.number,"from-number":u.fromNumber},null,8,["number","from-number"]),V("% ")])])])}const D=v(ce,[["render",me]]),_e={emits:["close"],components:{CorePercentCircle:D,SvgClose:F},props:{strings:Object,percentage:Number}},fe={class:"aioseo-processing-popup"},he=c("br",null,null,-1);function ke(s,l,d,p,u,o){const r=k("core-percent-circle"),h=k("svg-close");return t(),n("div",fe,[i(r,{percentage:d.percentage},null,8,["percentage"]),c("div",null,[c("strong",null,y(d.strings.header),1),he,V(y(d.strings.description),1)]),i(h,{onClick:l[0]||(l[0]=g=>s.$emit("close"))})])}const ve=v(_e,[["render",ke]]),N="all-in-one-seo-pack",be={setup(){return{settingsStore:M()}},components:{SvgAioseoLogoGear:ae,SvgClose:F},data(){return{strings:{boldText:b("<strong>%1$s %2$s</strong>","All in One SEO",m("Free",N)),url:E.utmUrl("lite-upgrade-bar"),linkText:b(m("upgrading to %1$s",N),"Pro")}}},computed:{link(){return b('<strong><a href="%1$s" target="_blank" class="text-white">%2$s</a> <a href="%1$s" target="_blank" class="text-white upgrade-arrow">&rarr;</a></strong>',this.strings.url,this.strings.linkText)},upgradeText(){return b(m("You're using %1$s. To unlock more features, consider %2$s",N),this.strings.boldText,this.link)}},methods:{processHideUpgradeBar(){document.body.classList.remove("aioseo-has-bar"),this.settingsStore.hideUpgradeBar()}},mounted(){document.body.classList.add("aioseo-has-bar")}},$e={class:"aioseo-upgrade-bar"},ye={class:"upgrade-text"},Ce=["innerHTML"];function Se(s,l,d,p,u,o){const r=k("svg-aioseo-logo-gear"),h=k("svg-close");return t(),n("div",$e,[c("div",ye,[i(r),c("div",{innerHTML:o.upgradeText},null,8,Ce)]),i(h,{onClick:o.processHideUpgradeBar},null,8,["onClick"])])}const we=v(be,[["render",Se]]),xe={props:{hero:{type:Boolean,default:!1},fluid:{type:Boolean,default:!1},fullWidth:Boolean,small:Boolean},computed:{classes(){let s=this.fluid?"aioseo-container-fluid ":"aioseo-container ";return s+=this.hero?"aioseo-hero ":"",s+=this.fullWidth?"full-width ":"",s+=this.small?"small ":"",s}}};function Be(s,l,d,p,u,o){return t(),n("div",{class:q(o.classes)},[Z(s.$slots,"default")],2)}const Ae=v(xe,[["render",Be]]),Ne={},Pe={viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-notifications"},He=c("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.8333 2.5H4.16667C3.25 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V4.16667C17.5 3.25 16.75 2.5 15.8333 2.5ZM15.8333 15.8333H4.16667V13.3333H7.13333C7.70833 14.325 8.775 15 10.0083 15C11.2417 15 12.3 14.325 12.8833 13.3333H15.8333V15.8333ZM11.675 11.6667H15.8333V4.16667H4.16667V11.6667H8.34167C8.34167 12.5833 9.09167 13.3333 10.0083 13.3333C10.925 13.3333 11.675 12.5833 11.675 11.6667Z",fill:"currentColor"},null,-1),Le=[He];function Ue(s,l){return t(),n("svg",Pe,Le)}const Te=v(Ne,[["render",Ue]]),Ve={class:"aioseo-header"},Me={class:"aioseo-header-content"},Ee=["href"],Fe={key:2,class:"spacer"},De={key:3,class:"page-name"},Ge={key:4,class:"header-actions"},Oe={key:0,class:"round number"},ss={__name:"Header",props:{fullWidth:Boolean,small:Boolean,pageName:String,actions:{type:Boolean,default(){return!0}},upgradeBar:{type:Boolean,default(){return!0}}},setup(s){const l="all-in-one-seo-pack";te();const d=K(),p=J(),u=X(),o=ee(),r=se(),h=M(),g=Q(null),G={linkAssistantPopup:{header:m("Link suggestions are being processed.",l),description:m("Depending on the number of posts being scanned, this process can take some time. You can safely leave this page and check back later.",l)},searchStatisticsPopup:{header:m("Search statistics are being fetched.",l),description:m("Depending on the amount of content on your site, this process can take some time. You can safely leave this page and check back later.",l)}},C=x(()=>{switch(g.value){case"linkAssistant":return u.suggestionsScan.percent;default:return null}}),O=x(()=>{switch(g.value){case"linkAssistant":return u.suggestionsScan.showProcessingPopup&&u.suggestionsScan.percent!==100;default:return null}}),W=x(()=>{switch(g.value){case"linkAssistant":return G.linkAssistantPopup;default:return null}}),Y=S=>{let _;return(...w)=>{_&&cancelAnimationFrame(_),_=requestAnimationFrame(()=>{S(...w)})}},H=()=>{document.documentElement.dataset.scroll=window.scrollY},j=()=>{document.getElementById("aioseo-help-modal").classList.toggle("visible"),document.body.classList.toggle("modal-open")},L=I(),R=()=>{r.aioseo.page==="link-assistant"&&A.isActive("aioseo-link-assistant")&&!A.requiresUpgrade("aioseo-link-assistant")&&A.hasMinimumVersion("aioseo-link-assistant")&&(L.name==="links-report"||L.name==="overview")&&u.suggestionsScan.percent!==100&&(g.value="linkAssistant")},U=()=>{switch(g.value){case"linkAssistant":return u.toggleProcessingPopup();default:return null}};return z(()=>{H(),document.addEventListener("scroll",Y(H),{passive:!0}),R()}),(S,_)=>(t(),n("div",Ve,[!e(r).isPro&&e(h).settings.showUpgradeBar&&s.upgradeBar&&e(r).pong?(t(),f(e(we),{key:0})):a("",!0),e(r).isPro&&e(p).isUnlicensed&&e(r).pong?(t(),f(e(oe),{key:1})):a("",!0),e(r).pong?a("",!0):(t(),f(e(ne),{key:2})),i(e(Ae),{"full-width":s.fullWidth,small:s.small},{default:$(()=>[c("div",Me,[e(p).isUnlicensed?(t(),n("a",{key:0,href:e(E).utmUrl("header-logo"),target:"_blank"},[i(e(T))],8,Ee)):a("",!0),e(p).isUnlicensed?a("",!0):(t(),f(e(T),{key:1})),s.pageName?(t(),n("span",Fe)):a("",!0),s.pageName?(t(),n("span",De,y(s.pageName),1)):a("",!0),s.actions?(t(),n("div",Ge,[i(P,{name:"fade-percent-circle"},{default:$(()=>[g.value&&C.value!==100?(t(),f(e(D),{key:0,percentage:C.value,onClick:U},null,8,["percentage"])):a("",!0)]),_:1}),i(P,{name:"fade-processing-popup"},{default:$(()=>[O.value?(t(),f(e(ve),{key:0,strings:W.value,percentage:C.value,onClose:U},null,8,["strings","percentage"])):a("",!0)]),_:1}),c("span",{class:"round",onClick:_[0]||(_[0]=B((...w)=>e(o).toggleNotifications&&e(o).toggleNotifications(...w),["stop"]))},[e(o).activeNotificationsCount?(t(),n("span",Oe,y(e(o).activeNotificationsCount>9?"!":e(o).activeNotificationsCount),1)):a("",!0),i(e(Te),{onClick:B(e(o).toggleNotifications,["stop"])},null,8,["onClick"])]),e(d).docs&&Object.keys(e(d).docs).length?(t(),n("span",{key:0,class:"round",onClick:B(j,["stop"])},[i(e(ie))])):a("",!0)])):a("",!0)])]),_:1},8,["full-width","small"])]))}};export{we as C,Ae as G,ss as _};
