import{G as L}from"./constants.2019bcb3.js";import{b as P,r as B}from"./index.20192476.js";import{u as D}from"./MaxCounts.d28a6cb7.js";import{u as G}from"./Tags.45075d79.js";import{u as R}from"./Wizard.f85f1601.js";import{B as M}from"./Checkbox.e983780b.js";import{B as N}from"./RadioToggle.64619d6b.js";import{C as U}from"./GoogleSearchPreview.2f81905c.js";import{C as O}from"./HtmlTagsEditor.4c8f78eb.js";import{C as E}from"./PostTypeOptions.c8d435f9.js";import{W as I,a as Y,b as j}from"./Header.ba01229c.js";import{W as q}from"./CloseAndExit.d66755fe.js";import{_ as F}from"./Steps.006d7c0b.js";import"./translations.12335a6a.js";import{c as u,C as i,l as d,v as c,o as m,a as s,x as p,t as n,G as A,b as _,k as J,E as K}from"./runtime-dom.esm-bundler.6789c400.js";import{_ as Q}from"./_plugin-vue_export-helper.249dac1d.js";import{u as X}from"./SetupWizardStore.f902c357.js";import{_ as a}from"./default-i18n.54b5d8cd.js";import"./helpers.f95d5840.js";import"./postTitle.d67eb903.js";import"./Caret.662da1f3.js";import"./metabox.dc73facf.js";import"./cleanForSlug.f9ffe7db.js";import"./toString.1401d490.js";import"./_baseTrim.940c51cf.js";import"./_stringToArray.08127ca9.js";import"./_baseSet.32e7a763.js";import"./regex.f8017116.js";import"./addons.9d0af6ad.js";import"./upperFirst.96c04516.js";import"./Checkmark.32f79576.js";import"./Editor.5a453aa4.js";import"./isEqual.51bf23f5.js";import"./_baseIsEqual.6bc92395.js";import"./_getTag.8dc22eac.js";import"./_baseClone.e959332d.js";import"./_arrayEach.f4f00336.js";import"./index.ee8124c6.js";import"./UnfilteredHtml.4ebe3c5f.js";import"./PostTypes.d6c1987b.js";import"./HighlightToggle.6ee9eb70.js";import"./Radio.e92f8160.js";import"./Tooltip.b6b45c85.js";import"./Row.f01f32cd.js";import"./Logo.f6ea28bf.js";import"./Index.de83b4aa.js";const l="all-in-one-seo-pack",Z={setup(){const{parseTags:S}=G({separator:void 0}),{maxRecommendedCount:o}=D(),{strings:C}=R({stage:"search-appearance"});return{GLOBAL_STRINGS:L,composableStrings:C,maxRecommendedCount:o,optionsStore:P(),parseTags:S,setupWizardStore:X()}},components:{BaseCheckbox:M,BaseRadioToggle:N,CoreGoogleSearchPreview:U,CoreHtmlTagsEditor:O,CorePostTypeOptions:E,WizardBody:I,WizardCloseAndExit:q,WizardContainer:Y,WizardHeader:j,WizardSteps:F},data(){return{loaded:!1,titleCount:0,descriptionCount:0,showHoverClass:!1,editing:!1,loading:!1,strings:B(this.composableStrings,{searchAppearance:a("Search Appearance",l),description:a("The way your site is displayed in search results is very important. Take some time to look over these settings and tweak as needed.",l),serpPreview:a("SERP Preview",l),editTitleAndDescription:a("Edit Title and Description",l),clickToAddSiteTitle:a("Click on the tags below to insert variables into your site title.",l),clickToAddSiteDescription:a("Click on the tags below to insert variables into your meta description.",l),siteTitle:a("Home Page Title",l),metaDescription:a("Meta Description",l),isSiteUnderConstruction:a("Is the site under construction or live (ready to be indexed)?",l),underConstruction:a("Under Construction",l),liveSite:a("Live Site",l),includeAllPostTypes:a("Include All Post Types",l),enableSitemap:a("Enable Sitemap",l),doYouHaveMultipleAuthors:a("Do you have multiple authors?",l),redirectAttachmentPages:a("Redirect attachment pages?",l)})}},methods:{addHoverClass(){this.showHoverClass=!0},removeHoverClass(){this.showHoverClass=!1},saveAndContinue(){this.loading=!0,this.setupWizardStore.saveWizard("searchAppearance").then(()=>{this.$router.push(this.setupWizardStore.getNextLink)})},skipStep(){this.setupWizardStore.saveWizard(),this.$router.push(this.setupWizardStore.getNextLink)}},mounted(){this.$nextTick(()=>{this.setupWizardStore.searchAppearance.redirectAttachmentPages=this.optionsStore.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls==="attachment",this.loaded=!0})}},$={class:"aioseo-wizard-search-appearance"},ee={class:"header"},te={class:"description"},oe={class:"aioseo-settings-row no-border"},se={class:"settings-name"},re={class:"name small-margin"},ie={key:1,class:"action"},ne={key:0,class:"site-info"},ae={class:"site-title aioseo-settings-row no-border"},le={class:"settings-name"},ce={class:"name small-margin"},de=["innerHTML"],pe={class:"site-description aioseo-settings-row no-border"},me={class:"settings-name"},ue={class:"name small-margin"},_e=["innerHTML"],ge={class:"settings-name"},he={class:"name small-margin"},ve={key:1,class:"aioseo-settings-row no-border post-types"},Se={key:2,class:"aioseo-settings-row no-border enable-sitemaps"},Ce={key:3,class:"aioseo-settings-row no-border"},ye={class:"settings-name"},fe={class:"name small-margin"},Ae={key:4,class:"aioseo-settings-row no-border no-margin small-padding"},ze={class:"settings-name"},ke={class:"name small-margin"},be={class:"go-back"},Te=s("div",{class:"spacer"},null,-1);function We(S,o,C,e,t,g){const z=c("wizard-header"),k=c("wizard-steps"),b=c("core-google-search-preview"),h=c("base-button"),y=c("core-html-tags-editor"),v=c("base-radio-toggle"),T=c("base-toggle"),W=c("core-post-type-options"),w=c("base-checkbox"),f=c("router-link"),x=c("wizard-body"),V=c("wizard-close-and-exit"),H=c("wizard-container");return m(),u("div",$,[i(z),i(H,null,{default:d(()=>[i(x,null,{footer:d(()=>[s("div",be,[i(f,{to:e.setupWizardStore.getPrevLink,class:"no-underline"},{default:d(()=>[p("←")]),_:1},8,["to"]),p("   "),i(f,{to:e.setupWizardStore.getPrevLink},{default:d(()=>[p(n(t.strings.goBack),1)]),_:1},8,["to"])]),Te,i(h,{type:"gray",onClick:g.skipStep},{default:d(()=>[p(n(t.strings.skipThisStep),1)]),_:1},8,["onClick"]),i(h,{type:"blue",loading:t.loading,onClick:g.saveAndContinue},{default:d(()=>[p(n(t.strings.saveAndContinue)+" →",1)]),_:1},8,["loading","onClick"])]),default:d(()=>[i(k),s("div",ee,n(t.strings.searchAppearance),1),s("div",te,n(t.strings.description),1),s("div",oe,[s("div",se,[s("div",re,n(t.strings.serpPreview),1)]),s("div",{class:A(["edit-site-info-activator",{hover:t.showHoverClass}]),onMouseenter:o[2]||(o[2]=(...r)=>g.addHoverClass&&g.addHoverClass(...r)),onMouseleave:o[3]||(o[3]=(...r)=>g.removeHoverClass&&g.removeHoverClass(...r))},[i(b,{title:e.parseTags(e.setupWizardStore.category.siteTitle),description:e.parseTags(e.setupWizardStore.category.metaDescription)},null,8,["title","description"]),t.showHoverClass&&!t.editing?(m(),u("div",{key:0,class:"background-fade",onClick:o[0]||(o[0]=r=>t.editing=!0)})):_("",!0),t.showHoverClass&&!t.editing?(m(),u("div",ie,[i(h,{size:"small",type:"black",onClick:o[1]||(o[1]=r=>t.editing=!0)},{default:d(()=>[p(n(t.strings.editTitleAndDescription),1)]),_:1})])):_("",!0)],34)]),t.editing?(m(),u("div",ne,[s("div",ae,[s("div",le,[s("div",ce,n(t.strings.siteTitle),1)]),i(y,{modelValue:e.setupWizardStore.category.siteTitle,"onUpdate:modelValue":o[4]||(o[4]=r=>e.setupWizardStore.category.siteTitle=r),"line-numbers":!1,single:"",onCounter:o[5]||(o[5]=r=>t.titleCount=r.length),"tags-context":"homePage","default-tags":["site_title","separator_sa","tagline"]},{"tags-description":d(()=>[p(n(t.strings.clickToAddSiteTitle),1)]),_:1},8,["modelValue"]),s("div",{class:"max-recommended-count",innerHTML:e.maxRecommendedCount(t.titleCount,60)},null,8,de)]),s("div",pe,[s("div",me,[s("div",ue,n(t.strings.metaDescription),1)]),i(y,{modelValue:e.setupWizardStore.category.metaDescription,"onUpdate:modelValue":o[6]||(o[6]=r=>e.setupWizardStore.category.metaDescription=r),"line-numbers":!1,onCounter:o[7]||(o[7]=r=>t.descriptionCount=r.length),"tags-context":"homePage","default-tags":["site_title","separator_sa","tagline"]},{"tags-description":d(()=>[p(n(t.strings.clickToAddSiteDescription),1)]),_:1},8,["modelValue"]),s("div",{class:"max-recommended-count",innerHTML:e.maxRecommendedCount(t.descriptionCount,160)},null,8,_e)])])):_("",!0),s("div",{class:A(["aioseo-settings-row no-border",[{"no-margin":e.setupWizardStore.searchAppearance.underConstruction},{"small-padding":e.setupWizardStore.searchAppearance.underConstruction}]])},[s("div",ge,[s("div",he,n(t.strings.isSiteUnderConstruction),1)]),i(v,{modelValue:e.setupWizardStore.searchAppearance.underConstruction,"onUpdate:modelValue":o[8]||(o[8]=r=>e.setupWizardStore.searchAppearance.underConstruction=r),name:"underConstruction",options:[{label:t.strings.underConstruction,value:!0,activeClass:"dark"},{label:t.strings.liveSite,value:!1}]},null,8,["modelValue","options"])],2),e.setupWizardStore.searchAppearance.underConstruction?_("",!0):(m(),u("div",ve,[i(T,{size:"medium",modelValue:e.setupWizardStore.searchAppearance.postTypes.postTypes.all,"onUpdate:modelValue":o[9]||(o[9]=r=>e.setupWizardStore.searchAppearance.postTypes.postTypes.all=r)},{default:d(()=>[p(n(t.strings.includeAllPostTypes),1)]),_:1},8,["modelValue"]),e.setupWizardStore.searchAppearance.postTypes.postTypes.all?_("",!0):(m(),J(W,{key:0,options:e.setupWizardStore.searchAppearance.postTypes,type:"postTypes"},null,8,["options"]))])),e.setupWizardStore.searchAppearance.underConstruction?_("",!0):(m(),u("div",Se,[i(w,{round:"",class:"no-clicks",type:"green",modelValue:!0,onClick:K(()=>{},["stop","prevent"])},{default:d(()=>[p(n(t.strings.enableSitemap),1)]),_:1})])),e.setupWizardStore.searchAppearance.underConstruction?_("",!0):(m(),u("div",Ce,[s("div",ye,[s("div",fe,n(t.strings.doYouHaveMultipleAuthors),1)]),i(v,{modelValue:e.setupWizardStore.searchAppearance.multipleAuthors,"onUpdate:modelValue":o[10]||(o[10]=r=>e.setupWizardStore.searchAppearance.multipleAuthors=r),name:"multipleAuthors",class:"small",options:[{label:e.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"])])),e.setupWizardStore.searchAppearance.underConstruction?_("",!0):(m(),u("div",Ae,[s("div",ze,[s("div",ke,n(t.strings.redirectAttachmentPages),1)]),i(v,{modelValue:e.setupWizardStore.searchAppearance.redirectAttachmentPages,"onUpdate:modelValue":o[11]||(o[11]=r=>e.setupWizardStore.searchAppearance.redirectAttachmentPages=r),name:"redirectAttachmentPages",class:"small",options:[{label:e.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"])]))]),_:1}),i(V)]),_:1})])}const yt=Q(Z,[["render",We]]);export{yt as default};
