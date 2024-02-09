import"./js/vue2.45bb6cb6.js";import{o as i,l as b,m as n,a as l,t as c,D as r,u,y as a,E as C,c as v,d as y,F as E,L as A,I as $,H as B,x as L,Y as U}from"./js/vue.esm-bundler.f425fb9b.js";import{l as O}from"./js/index.c0e25724.js";import{e as D,B as S,l as F}from"./js/index.c4983756.js";import{l as R}from"./js/index.0b123ab1.js";import{f as N,F as V,u as z,e as q,l as H}from"./js/links.6fea55de.js";import{C as x}from"./js/Card.79833296.js";import{C as J}from"./js/SocialProfiles.dde04908.js";import{A as I}from"./js/AddonConditions.c185d06e.js";import{J as j}from"./js/JsonValues.870a4901.js";import{u as G}from"./js/EeatCta.6e5e5b3c.js";import{C as M}from"./js/ProBadge.08f04af1.js";import{C as W}from"./js/Index.af8a043b.js";import{C as Y}from"./js/Blur.77607e56.js";import{C as k}from"./js/SettingsRow.aef25413.js";import{_ as d}from"./js/default-i18n.3881921e.js";import{R as K}from"./js/RequiredPlans.c86ac4fb.js";import{_ as T}from"./js/_plugin-vue_export-helper.c114f5e4.js";import{S as Q}from"./js/LogoGear.4492dfce.js";import{e as X}from"./js/elemLoaded.9a6eb745.js";import"./js/translations.6e7b2383.js";import"./js/constants.2883a7a9.js";import"./js/Caret.660dc2fe.js";import"./js/isArrayLikeObject.a77a8422.js";import"./js/Tooltip.7040733e.js";import"./js/Slide.ab12a8fa.js";import"./js/Checkbox.092c2ef0.js";import"./js/Checkmark.600c9af3.js";import"./js/Textarea.0ead8bde.js";import"./js/Row.c43f487a.js";import"./js/Twitter.a42dcc2d.js";import"./js/addons.393743a4.js";import"./js/upperFirst.62b3e825.js";import"./js/_stringToArray.4de3b1f3.js";import"./js/toString.eb8a9d40.js";import"./js/license.fb6d0c45.js";const Z={class:"aioseo-settings-row aioseo-section-description"},ee={class:"aioseo-description"},te=l("br",null,null,-1),oe={class:"aioseo-description"},se={class:"aioseo-description"},re={__name:"EeatBlur",setup(e){const o="all-in-one-seo-pack",t={description:d("The fields below provide structured information for search engines about the current author. By filling out these fields, you will enhance your online presence and improve search engine visibility. This increases the chances of your author details appearing prominently in search results, making it easier for readers, publishers, and media representatives to discover and connect with you.",o),enable:d("Enable Author Info",o),alumniOf:d("Alumni Of",o),alumniOfDescription:d("The school, college, or university where the author studied.",o),alumniOfUrl:d("School, college, or university URL",o),alumniOfUrlDescription:d("The URL of the school, college, or university where the author studied.",o),worksFor:d("Employer",o),worksForDescription:d("The organization the author works for.",o)};return(s,m)=>(i(),b(u(Y),{id:"aioseo-author-seo-meta-data"},{default:n(()=>[l("div",Z,c(t.description),1),r(u(k),{name:t.enable},{content:n(()=>[r(u(D))]),_:1},8,["name"]),r(u(k),{name:t.alumniOf},{content:n(()=>[r(u(S),{size:"medium",placeholder:t.alumniOf},null,8,["placeholder"]),l("div",ee,c(t.alumniOfDescription),1),te,r(u(S),{size:"medium",placeholder:t.alumniOfUrl},null,8,["placeholder"]),l("div",oe,c(t.alumniOfUrlDescription),1)]),_:1},8,["name"]),r(u(k),{name:t.worksFor},{content:n(()=>[r(u(S),{size:"medium",placeholder:t.worksFor},null,8,["placeholder"]),l("div",se,c(t.worksForDescription),1)]),_:1},8,["name"])]),_:1}))}},ie={setup(){const{addonSlug:e,features:o,strings:t}=G();return{addonSlug:e,features:o,licenseStore:N(),links:V,strings:t}},components:{CoreCard:x,CoreProBadge:M,Cta:W,EeatBlur:re,RequiredPlans:K},mixins:[I,j]};function ae(e,o,t,s,m,_){const h=a("core-pro-badge"),f=a("eeat-blur"),w=a("required-plans"),p=a("cta"),g=a("core-card");return i(),b(g,{noSlide:""},{header:n(()=>[l("span",null,c(s.strings.authorInfo),1),r(h)]),default:n(()=>[r(f),r(p,{"cta-link":s.links.getPricingUrl("eeat","eeat-upsell"),"button-text":s.strings.ctaButtonText,"learn-more-link":s.links.getUpsellUrl("eeat",null,e.$isPro?"pricing":"liteUpgrade"),"feature-list":s.features},{"header-text":n(()=>[C(c(s.strings.headerText),1)]),description:n(()=>[r(w,{addon:"aioseo-eeat"}),C(" "+c(s.strings.description),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list"])]),_:1})}const P=T(ie,[["render",ae]]),ne={components:{EeatCta:P,EeatCtaLite:P},mixins:[I],data(){return{addonSlug:"aioseo-eeat"}}};function le(e,o,t,s,m,_){const h=a("eeat-cta",!0),f=a("eeat-cta-lite");return i(),v("div",null,[e.shouldShowUpdate||e.shouldShowActivate?(i(),b(h,{key:0})):y("",!0),e.shouldShowLite?(i(),b(f,{key:1})):y("",!0)])}const ce=T(ne,[["render",le]]);const ue={setup(){return{rootStore:z(),settingsStore:q()}},components:{CoreCard:x,CoreSocialProfiles:J,EeatCta:ce,SvgLogoGear:Q},data(){return{activeTabIndex:0,strings:{socialProfiles:this.$t.__("Social Profiles",this.$td),description:this.$t.__("To let search engines know which profiles are associated with this user, enter them below:",this.$td)}}},methods:{setActiveTab(e){var t;const o=this.activeTabIndex;switch(this.activeTabIndex=e,this.activeTabObject.slug){case"personal-options":document.getElementById("your-profile").childNodes.forEach(s=>{s.style&&(s.style.display="block")});break;case"author-seo":document.getElementById("your-profile").childNodes.forEach(s=>{s.id==="aioseo-user-profile-tab-wrapper"||s.className==="submit"||!s.style||(s.style.display="none")});break;case"customer-data":this.activeTabIndex=o,window.location.href=this.rootStore.aioseo.urls.home+"/wp-admin/admin.php?page=followup-emails-reports&tab=reportuser_view&email="+encodeURIComponent(this.settingsStore.userProfile.userData.user_email)+"&user_id="+this.settingsStore.userProfile.userData.ID;break}location.hash=(t=this.activeTabObject)==null?void 0:t.slug},updateHiddenInputField(e){document.getElementById("aioseo-user-social-profiles").value=JSON.stringify(e)}},computed:{tabs(){const e=[{label:this.$t.__("Personal Options",this.$td),slug:"personal-options"},{label:this.$t.__("Author SEO",this.$td),slug:"author-seo",svg:"svg-logo-gear"}];return this.settingsStore.userProfile.isWooCommerceFollowupEmailsActive&&e.push({label:this.$t.__("Customer Data",this.$td),slug:"customer-data"}),e},activeTabObject(){return this.tabs[this.activeTabIndex]}},async created(){this.updateHiddenInputField(this.settingsStore.userProfile.profiles)},beforeMount(){new URLSearchParams(window.location.search).has("authorInfo")&&this.setActiveTab(1)},mounted(){const e=new URLSearchParams(window.location.search)||null;(e!=null&&e.get("author-seo")||location!=null&&location.hash.includes("author-seo"))&&this.setActiveTab(1)}},de={id:"aioseo-user-profile-tab"},pe={class:"navigation-bar"},me=["onClick"],_e={class:"aioseo-user-profile-fields"},he={class:"aioseo-settings-row aioseo-section-description"};function fe(e,o,t,s,m,_){const h=a("eeat-cta"),f=a("core-social-profiles"),w=a("core-card");return i(),v("div",de,[l("div",pe,[(i(!0),v(E,null,A(_.tabs,(p,g)=>(i(),v("a",{key:g,class:$({active:g===m.activeTabIndex}),href:"#",onClick:B(ye=>_.setActiveTab(g),["prevent"])},[p.svg?(i(),b(L(p.svg),{key:0})):y("",!0),C(" "+c(p.label),1)],10,me))),128))]),_.activeTabObject.slug==="author-seo"?(i(),v(E,{key:0},[r(h),l("div",_e,[r(w,{slug:"userProfiles","header-text":m.strings.socialProfiles},{default:n(()=>[l("div",he,c(m.strings.description),1),r(f,{userProfiles:s.settingsStore.userProfile.profiles,onUpdated:o[0]||(o[0]=p=>_.updateHiddenInputField(p))},null,8,["userProfiles"])]),_:1},8,["header-text"])])],64)):y("",!0)])}const ge=T(ue,[["render",fe]]),ve=()=>{const e=document.getElementById("your-profile");if(!e)return;const o=document.createElement("div");o.id="aioseo-user-profile-tab-wrapper";const t=document.createElement("input");t.id="aioseo-user-social-profiles",t.name="aioseo-user-social-profiles",t.type="hidden",e.prepend(t),e.prepend(o)},be=()=>{let e=U({...ge,name:"Standalone/UserProfileTab"});e=O(e),e=F(e),e=R(e),H(e),e.mount("#aioseo-user-profile-tab-wrapper")};X("#your-profile","profilePageLoaded");document.addEventListener("animationstart",function(e){e.animationName==="profilePageLoaded"&&(ve(),be())});
