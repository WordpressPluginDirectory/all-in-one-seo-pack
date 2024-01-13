import{_ as P}from"./js/_plugin-vue_export-helper.abeb2ae0.js";import{o as i,k as b,l as n,a as l,t as c,C as s,u,x as a,D as C,c as v,b as y,F as T,L as A,I as B,H as $,q as L,Y as U}from"./js/vue.runtime.esm-bundler.4a881941.js";import{l as O}from"./js/index.683fda17.js";import{e as D,B as S,l as F}from"./js/index.e978df4e.js";import{l as R}from"./js/index.0b123ab1.js";import{f as N,B as V,u as q,e as z,l as H}from"./js/links.125d59c9.js";import{C as x}from"./js/Card.24b534de.js";import{C as J}from"./js/SocialProfiles.41ab18c0.js";import{A as I}from"./js/AddonConditions.a980b8ca.js";import{J as G}from"./js/JsonValues.870a4901.js";import{u as M}from"./js/EeatCta.6e5e5b3c.js";import{C as j}from"./js/ProBadge.07a48e27.js";import{C as W}from"./js/Index.18716c31.js";import{C as Y}from"./js/Blur.647f62cf.js";import{C as k}from"./js/SettingsRow.f729cdc5.js";import{_ as p}from"./js/default-i18n.3881921e.js";import{R as K}from"./js/RequiredPlans.6170096f.js";import{S as Q}from"./js/LogoGear.49550bdb.js";import{e as X}from"./js/elemLoaded.9a6eb745.js";import"./js/translations.6e7b2383.js";import"./js/constants.238e5b7b.js";import"./js/Caret.02d7c74a.js";import"./js/isArrayLikeObject.ab8f4241.js";import"./js/Tooltip.bcf420d9.js";import"./js/Slide.7ee1d0f1.js";import"./js/Checkbox.257a03d8.js";import"./js/Checkmark.aaedf5f6.js";import"./js/Textarea.2ff0171c.js";import"./js/Row.dbbe567c.js";import"./js/Twitter.6810a2f7.js";import"./js/addons.dca3a5e7.js";import"./js/upperFirst.7faab9f8.js";import"./js/_stringToArray.4de3b1f3.js";import"./js/toString.7b877a36.js";import"./js/license.7b516004.js";const Z={class:"aioseo-settings-row aioseo-section-description"},ee={class:"aioseo-description"},te=l("br",null,null,-1),oe={class:"aioseo-description"},se={class:"aioseo-description"},re={__name:"EeatBlur",setup(e){const o="all-in-one-seo-pack",t={description:p("The fields below provide structured information for search engines about the current author. By filling out these fields, you will enhance your online presence and improve search engine visibility. This increases the chances of your author details appearing prominently in search results, making it easier for readers, publishers, and media representatives to discover and connect with you.",o),enable:p("Enable Author Info",o),alumniOf:p("Alumni Of",o),alumniOfDescription:p("The school, college, or university where the author studied.",o),alumniOfUrl:p("School, college, or university URL",o),alumniOfUrlDescription:p("The URL of the school, college, or university where the author studied.",o),worksFor:p("Employer",o),worksForDescription:p("The organization the author works for.",o)};return(r,m)=>(i(),b(u(Y),{id:"aioseo-author-seo-meta-data"},{default:n(()=>[l("div",Z,c(t.description),1),s(u(k),{name:t.enable},{content:n(()=>[s(u(D))]),_:1},8,["name"]),s(u(k),{name:t.alumniOf},{content:n(()=>[s(u(S),{size:"medium",placeholder:t.alumniOf},null,8,["placeholder"]),l("div",ee,c(t.alumniOfDescription),1),te,s(u(S),{size:"medium",placeholder:t.alumniOfUrl},null,8,["placeholder"]),l("div",oe,c(t.alumniOfUrlDescription),1)]),_:1},8,["name"]),s(u(k),{name:t.worksFor},{content:n(()=>[s(u(S),{size:"medium",placeholder:t.worksFor},null,8,["placeholder"]),l("div",se,c(t.worksForDescription),1)]),_:1},8,["name"])]),_:1}))}},ie={setup(){const{addonSlug:e,features:o,strings:t}=M();return{addonSlug:e,features:o,licenseStore:N(),links:V,strings:t}},components:{CoreCard:x,CoreProBadge:j,Cta:W,EeatBlur:re,RequiredPlans:K},mixins:[I,G]};function ae(e,o,t,r,m,_){const f=a("core-pro-badge"),h=a("eeat-blur"),w=a("required-plans"),d=a("cta"),g=a("core-card");return i(),b(g,{noSlide:""},{header:n(()=>[l("span",null,c(r.strings.authorInfo),1),s(f)]),default:n(()=>[s(h),s(d,{"cta-link":r.links.getPricingUrl("eeat","eeat-upsell"),"button-text":r.strings.ctaButtonText,"learn-more-link":r.links.getUpsellUrl("eeat",null,e.$isPro?"pricing":"liteUpgrade"),"feature-list":r.features},{"header-text":n(()=>[C(c(r.strings.headerText),1)]),description:n(()=>[s(w,{addon:"aioseo-eeat"}),C(" "+c(r.strings.description),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list"])]),_:1})}const E=P(ie,[["render",ae]]),ne={components:{EeatCta:E,EeatCtaLite:E},mixins:[I],data(){return{addonSlug:"aioseo-eeat"}}};function le(e,o,t,r,m,_){const f=a("eeat-cta",!0),h=a("eeat-cta-lite");return i(),v("div",null,[e.shouldShowUpdate||e.shouldShowActivate?(i(),b(f,{key:0})):y("",!0),e.shouldShowLite?(i(),b(h,{key:1})):y("",!0)])}const ce=P(ne,[["render",le]]);const ue={setup(){return{rootStore:q(),settingsStore:z()}},components:{CoreCard:x,CoreSocialProfiles:J,EeatCta:ce,SvgLogoGear:Q},data(){return{activeTabIndex:0,strings:{socialProfiles:this.$t.__("Social Profiles",this.$td),description:this.$t.__("To let search engines know which profiles are associated with this user, enter them below:",this.$td)}}},methods:{setActiveTab(e){const o=this.activeTabIndex;switch(this.activeTabIndex=e,this.activeTabObject.slug){case"personal-options":document.getElementById("your-profile").childNodes.forEach(t=>{t.style&&(t.style.display="block")});break;case"social-profiles":document.getElementById("your-profile").childNodes.forEach(t=>{t.id==="aioseo-user-profile-tab-wrapper"||t.className==="submit"||!t.style||(t.style.display="none")});break;case"customer-data":this.activeTabIndex=o,window.location.href=this.rootStore.aioseo.urls.home+"/wp-admin/admin.php?page=followup-emails-reports&tab=reportuser_view&email="+encodeURIComponent(this.settingsStore.userProfile.userData.user_email)+"&user_id="+this.settingsStore.userProfile.userData.ID;break}},updateHiddenInputField(e){document.getElementById("aioseo-user-social-profiles").value=JSON.stringify(e)}},computed:{tabs(){const e=[{label:this.$t.__("Personal Options",this.$td),slug:"personal-options"},{label:this.$t.__("Author SEO",this.$td),slug:"social-profiles",svg:"svg-logo-gear"}];return this.settingsStore.userProfile.isWooCommerceFollowupEmailsActive&&e.push({label:this.$t.__("Customer Data",this.$td),slug:"customer-data"}),e},activeTabObject(){return this.tabs[this.activeTabIndex]}},async created(){this.updateHiddenInputField(this.settingsStore.userProfile.profiles)},beforeMount(){new URLSearchParams(window.location.search).has("authorInfo")&&this.setActiveTab(1)},mounted(){const e=new URLSearchParams(window.location.search);e&&e.get("social-profiles")&&this.setActiveTab(1)}},pe={id:"aioseo-user-profile-tab"},de={class:"navigation-bar"},me=["onClick"],_e={class:"aioseo-user-profile-fields"},fe={class:"aioseo-settings-row aioseo-section-description"};function he(e,o,t,r,m,_){const f=a("eeat-cta"),h=a("core-social-profiles"),w=a("core-card");return i(),v("div",pe,[l("div",de,[(i(!0),v(T,null,A(_.tabs,(d,g)=>(i(),v("a",{key:g,class:B({active:g===m.activeTabIndex}),href:"#",onClick:$(ye=>_.setActiveTab(g),["prevent"])},[d.svg?(i(),b(L(d.svg),{key:0})):y("",!0),C(" "+c(d.label),1)],10,me))),128))]),_.activeTabObject.slug==="social-profiles"?(i(),v(T,{key:0},[s(f),l("div",_e,[s(w,{slug:"userProfiles","header-text":m.strings.socialProfiles},{default:n(()=>[l("div",fe,c(m.strings.description),1),s(h,{userProfiles:r.settingsStore.userProfile.profiles,onUpdated:o[0]||(o[0]=d=>_.updateHiddenInputField(d))},null,8,["userProfiles"])]),_:1},8,["header-text"])])],64)):y("",!0)])}const ge=P(ue,[["render",he]]),ve=()=>{const e=document.getElementById("your-profile");if(!e)return;const o=document.createElement("div");o.id="aioseo-user-profile-tab-wrapper";const t=document.createElement("input");t.id="aioseo-user-social-profiles",t.name="aioseo-user-social-profiles",t.type="hidden",e.prepend(t),e.prepend(o)},be=()=>{let e=U({...ge,name:"Standalone/UserProfileTab"});e=O(e),e=F(e),e=R(e),H(e),e.mount("#aioseo-user-profile-tab-wrapper")};X("#your-profile","profilePageLoaded");document.addEventListener("animationstart",function(e){e.animationName==="profilePageLoaded"&&(ve(),be())});
