import{G as V}from"./constants.hcfrsngk.js";import{m as x,l as k,b as O,u as G}from"./index.ba51ghj9.js";import{u as U}from"./Image.j9h9tyqk.js";import{u as A}from"./MaxCounts.h4dewttr.js";import{u as N}from"./Tags.mkuonlme.js";import{B}from"./RadioToggle.cler7vn3.js";import{C as M}from"./Caret.dwp6xpza.js";import{C as F}from"./Card.0q0mr1wq.js";import{C as R}from"./HtmlTagsEditor.irue4ytl.js";import{C as z}from"./ImageUploader.l2gqgn6z.js";import{C as E}from"./SettingsRow.d9u0swi1.js";import{C as W}from"./TwitterPreview.liy9u0my.js";import"./translations.b896ab1m.js";import{_ as X}from"./_plugin-vue_export-helper.oebm7xum.js";import{_ as a,a as L}from"./default-i18n.hohxoesu.js";import{c as y,C as m,l as n,k as g,b as l,v as c,o as s,a as u,x as f,t as w}from"./runtime-dom.esm-bundler.h3clfjuw.js";import"./helpers.lwqbledo.js";import"./postSlug.ms4f44w2.js";import"./metabox.y83zoorm.js";import"./cleanForSlug.dzbbaoug.js";import"./toString.oppn28a8.js";import"./_baseTrim.ohbpllmu.js";import"./_stringToArray.mpukyt2g.js";import"./_baseSet.ipousrvi.js";import"./regex.bekpgw04.js";import"./Tooltip.i4md1nj9.js";import"./index.kaabvvzj.js";import"./Slide.dop8j51m.js";import"./Editor.ipgvvrs0.js";import"./isEqual.dwjbg1yu.js";import"./_baseIsEqual.j7gru8tk.js";import"./_getTag.fx9iqlmr.js";import"./_baseClone.n1l9l19s.js";import"./_arrayEach.n8ou32wp.js";import"./UnfilteredHtml.o4azp64h.js";import"./Img.cncschi2.js";import"./Plus.e1tf1dpc.js";import"./Row.h4gujlzc.js";import"./Book.f6lktglp.js";import"./Profile.t9aiulue.js";const r="all-in-one-seo-pack",J={setup(){const{getImageSourceOption:T,getTermImageSourceOptions:t,imageSourceOptions:P}=U(),{maxRecommendedCount:e}=A(),{parseTags:o}=N({separator:void 0});return{GLOBAL_STRINGS:V,getImageSourceOption:T,getTermImageSourceOptions:t,imageSourceOptions:P,licenseStore:x(),links:k,maxRecommendedCount:e,optionsStore:O(),parseTags:o,rootStore:G()}},components:{BaseRadioToggle:B,CoreAlert:M,CoreCard:F,CoreHtmlTagsEditor:R,CoreImageUploader:z,CoreSettingsRow:E,CoreTwitterPreview:W},data(){return{titleCount:0,descriptionCount:0,option:null,pagePostOptions:[],strings:{twitterCardSettings:a("X (Twitter) Card Settings",r),description:a("Enable this feature if you want X to display a preview card with images and a text excerpt when a link to your site is shared.",r),enableTwitterCard:a("Enable X Card",r),useDataFromFacebook:a("Use Data from Facebook Tab",r),useOgDataDescription:a("Choose whether you want to use the OG data from the Facebook tab in your individual pages/posts by default.",r),defaultCardType:a("Default Card Type",r),summary:a("Summary",r),summaryLarge:a("Summary with Large Image",r),defaultImageSourcePosts:a("Default Post Image Source",r),defaultImageSourceTerms:a("Default Term Image Source",r),width:a("Width",r),height:a("Height",r),postCustomFieldName:a("Post Custom Field Name",r),termsCustomFieldName:a("Term Custom Field Name",r),defaultTwitterImagePosts:a("Default Post X Image",r),defaultTwitterImageTerms:a("Default Term X Image",r),minimumSizeSummary:a("Minimum size: 144px x 144px, ideal ratio 1:1, 5MB max. JPG, PNG, WEBP and GIF formats only.",r),minimumSizeSummaryWithLarge:a("Minimum size: 300px x 157px, ideal ratio 2:1, 5MB max. JPG, PNG, WEBP and GIF formats only.",r),homePageSettings:a("Home Page Settings",r),homePageImage:a("Home Page Image",r),homePageTitle:a("Home Page Title",r),useHomePageTitle:a("Use the home page title",r),clickToAddHomePageTitle:a("Click on the tags below to insert variables into your home page title.",r),homePageDescription:a("Description",r),useHomePageDescription:a("Use the home page description",r),clickToAddHomePageDescription:a("Click on the tags below to insert variables into your description.",r),showTwitterAuthor:a("Show X Author",r),homePageDisabledDescription:L(a("You are using a static home page which is found under Pages. You can %1$sedit your home page settings%2$s directly to change the title, meta description and image.",r),`<a href="${this.rootStore.aioseo.urls.staticHomePage}&aioseo-tab=social&social-tab=twitter&aioseo-scroll=aioseo-post-settings-twitter&aioseo-highlight=aioseo-post-settings-twitter">`,"</a>"),cardType:a("Card Type",r),additionalData:a("Additional Data",r),additionalDataDescription:a("Enable this option to show additional X data on your posts and pages (i.e., who the post was written by and how long it might take to read the article).",r),defaultTermImageSourceUpsell:L(a("Default Term Image Source is a %1$s feature. %2$s",r),"PRO",k.getUpsellLink("general-facebook-settings",V.learnMore,"default-term-image-source",!0))}}},computed:{twitterCards(){return[{label:this.strings.summary,value:"summary"},{label:this.strings.summaryLarge,value:"summary_large_image"}]},previewTitle(){return this.rootStore.aioseo.data.staticHomePage?this.parseTags(this.rootStore.aioseo.data.staticHomePageTwitterTitle||"#site_title"):this.parseTags(this.optionsStore.options.social.twitter.homePage.title||"#site_title")},previewDescription(){return this.rootStore.aioseo.data.staticHomePage?this.parseTags(this.rootStore.aioseo.data.staticHomePageTwitterDescription||"#tagline"):this.parseTags(this.optionsStore.options.social.twitter.homePage.description||"#tagline")}},methods:{getCardOptions(T){return this.twitterCards.find(t=>t.value===T)}}},Y={class:"aioseo-twitter"},j={class:"aioseo-settings-row aioseo-section-description"},q=["innerHTML"],K=["innerHTML"],Q={class:"aioseo-description"},Z={class:"aioseo-description"},$={key:0,class:"aioseo-settings-row aioseo-section-description"},ee=["innerHTML"],te=["innerHTML"],oe={key:1},ie=["innerHTML"],ae=["innerHTML"];function re(T,t,P,e,o,p){const D=c("base-toggle"),d=c("core-settings-row"),S=c("base-select"),C=c("base-input"),_=c("core-image-uploader"),v=c("core-alert"),h=c("base-radio-toggle"),b=c("core-card"),H=c("core-twitter-preview"),I=c("core-html-tags-editor");return s(),y("div",Y,[m(b,{slug:"twitter","header-text":o.strings.twitterCardSettings},{default:n(()=>[u("div",j,[f(w(o.strings.description)+" ",1),u("span",{innerHTML:e.links.getDocLink(e.GLOBAL_STRINGS.learnMore,"twitter",!0)},null,8,q)]),m(d,{name:o.strings.enableTwitterCard},{content:n(()=>[m(D,{modelValue:e.optionsStore.options.social.twitter.general.enable,"onUpdate:modelValue":t[0]||(t[0]=i=>e.optionsStore.options.social.twitter.general.enable=i)},null,8,["modelValue"])]),_:1},8,["name"]),e.optionsStore.options.social.twitter.general.enable?(s(),g(d,{key:0,class:"default-card-type",name:o.strings.defaultCardType,align:""},{content:n(()=>[m(S,{size:"medium",options:p.twitterCards,modelValue:p.getCardOptions(e.optionsStore.options.social.twitter.general.defaultCardType),"onUpdate:modelValue":t[1]||(t[1]=i=>e.optionsStore.options.social.twitter.general.defaultCardType=i.value)},null,8,["options","modelValue"])]),_:1},8,["name"])):l("",!0),e.optionsStore.options.social.twitter.general.enable?(s(),g(d,{key:1,class:"twitter-default-image-source",name:o.strings.defaultImageSourcePosts,align:""},{content:n(()=>[m(S,{size:"medium",options:e.imageSourceOptions,modelValue:e.getImageSourceOption(e.optionsStore.options.social.twitter.general.defaultImageSourcePosts),"onUpdate:modelValue":t[2]||(t[2]=i=>e.optionsStore.options.social.twitter.general.defaultImageSourcePosts=i.value)},null,8,["options","modelValue"])]),_:1},8,["name"])):l("",!0),e.optionsStore.options.social.twitter.general.enable&&e.optionsStore.options.social.twitter.general.defaultImageSourcePosts==="custom"?(s(),g(d,{key:2,name:o.strings.postCustomFieldName,align:""},{content:n(()=>[m(C,{size:"medium",modelValue:e.optionsStore.options.social.twitter.general.customFieldImagePosts,"onUpdate:modelValue":t[3]||(t[3]=i=>e.optionsStore.options.social.twitter.general.customFieldImagePosts=i)},null,8,["modelValue"])]),_:1},8,["name"])):l("",!0),e.optionsStore.options.social.twitter.general.enable?(s(),g(d,{key:3,class:"twitter-image",name:o.strings.defaultTwitterImagePosts,align:""},{content:n(()=>[m(_,{description:e.optionsStore.options.social.twitter.general.defaultCardType==="summary"?o.strings.minimumSizeSummary:o.strings.minimumSizeSummaryWithLarge,modelValue:e.optionsStore.options.social.twitter.general.defaultImagePosts,"onUpdate:modelValue":t[4]||(t[4]=i=>e.optionsStore.options.social.twitter.general.defaultImagePosts=i)},null,8,["description","modelValue"])]),_:1},8,["name"])):l("",!0),e.optionsStore.options.social.twitter.general.enable?(s(),g(d,{key:4,class:"twitter-default-image-source",name:o.strings.defaultImageSourceTerms,align:""},{content:n(()=>[e.licenseStore.isUnlicensed?l("",!0):(s(),g(S,{key:0,size:"medium",options:e.getTermImageSourceOptions(),modelValue:e.getImageSourceOption(e.optionsStore.options.social.twitter.general.defaultImageSourceTerms),"onUpdate:modelValue":t[5]||(t[5]=i=>e.optionsStore.options.social.twitter.general.defaultImageSourceTerms=i.value)},null,8,["options","modelValue"])),e.licenseStore.isUnlicensed?(s(),g(S,{key:1,size:"medium",options:e.getTermImageSourceOptions(),modelValue:e.getImageSourceOption("default"),disabled:""},null,8,["options","modelValue"])):l("",!0),e.licenseStore.isUnlicensed?(s(),g(v,{key:2,class:"inline-upsell",type:"blue"},{default:n(()=>[u("div",{innerHTML:o.strings.defaultTermImageSourceUpsell},null,8,K)]),_:1})):l("",!0)]),_:1},8,["name"])):l("",!0),e.optionsStore.options.social.twitter.general.enable&&e.optionsStore.options.social.twitter.general.defaultImageSourceTerms==="custom"&&!e.licenseStore.isUnlicensed?(s(),g(d,{key:5,name:o.strings.termsCustomFieldName,align:""},{content:n(()=>[m(C,{size:"medium",modelValue:e.optionsStore.options.social.twitter.general.customFieldImageTerms,"onUpdate:modelValue":t[6]||(t[6]=i=>e.optionsStore.options.social.twitter.general.customFieldImageTerms=i)},null,8,["modelValue"])]),_:1},8,["name"])):l("",!0),e.optionsStore.options.social.twitter.general.enable&&!e.licenseStore.isUnlicensed?(s(),g(d,{key:6,class:"twitter-image",name:o.strings.defaultTwitterImageTerms,align:""},{content:n(()=>[m(_,{description:e.optionsStore.options.social.twitter.general.defaultCardType==="summary"?o.strings.minimumSizeSummary:o.strings.minimumSizeSummaryWithLarge,modelValue:e.optionsStore.options.social.twitter.general.defaultImageTerms,"onUpdate:modelValue":t[7]||(t[7]=i=>e.optionsStore.options.social.twitter.general.defaultImageTerms=i)},null,8,["description","modelValue"])]),_:1},8,["name"])):l("",!0),e.optionsStore.options.social.twitter.general.enable?(s(),g(d,{key:7,name:o.strings.showTwitterAuthor,align:""},{content:n(()=>[m(h,{modelValue:e.optionsStore.options.social.twitter.general.showAuthor,"onUpdate:modelValue":t[8]||(t[8]=i=>e.optionsStore.options.social.twitter.general.showAuthor=i),name:"showTwitterAuthor",options:[{label:e.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"])]),_:1},8,["name"])):l("",!0),e.optionsStore.options.social.twitter.general.enable?(s(),g(d,{key:8,name:o.strings.additionalData,align:""},{content:n(()=>[m(h,{modelValue:e.optionsStore.options.social.twitter.general.additionalData,"onUpdate:modelValue":t[9]||(t[9]=i=>e.optionsStore.options.social.twitter.general.additionalData=i),name:"additionalData",options:[{label:e.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),u("div",Q,w(o.strings.additionalDataDescription),1)]),_:1},8,["name"])):l("",!0),e.optionsStore.options.social.twitter.general.enable?(s(),g(d,{key:9,name:o.strings.useDataFromFacebook,align:""},{content:n(()=>[m(h,{modelValue:e.optionsStore.options.social.twitter.general.useOgData,"onUpdate:modelValue":t[10]||(t[10]=i=>e.optionsStore.options.social.twitter.general.useOgData=i),name:"useOgData",options:[{label:e.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"]),u("div",Z,w(o.strings.useOgDataDescription),1)]),_:1},8,["name"])):l("",!0)]),_:1},8,["header-text"]),e.optionsStore.options.social.twitter.general.enable?(s(),g(b,{key:0,slug:"twitterHomePageSettings","header-text":o.strings.homePageSettings},{default:n(()=>[e.rootStore.aioseo.data.staticHomePage?(s(),y("div",$,[u("span",{innerHTML:o.strings.homePageDisabledDescription},null,8,ee),f("   "),u("span",{innerHTML:e.links.getDocLink(e.GLOBAL_STRINGS.learnMore,"staticHomePageTwitter",!0)},null,8,te)])):l("",!0),e.rootStore.aioseo.data.staticHomePage?(s(),y("br",oe)):l("",!0),m(d,{name:e.GLOBAL_STRINGS.preview},{content:n(()=>[m(H,{card:e.optionsStore.options.social.twitter.homePage.cardType,description:p.previewDescription,image:e.optionsStore.options.social.twitter.homePage.image,title:p.previewTitle},null,8,["card","description","image","title"])]),_:1},8,["name"]),e.rootStore.aioseo.data.staticHomePage?l("",!0):(s(),g(d,{key:2,class:"default-card-type",name:o.strings.cardType,align:""},{content:n(()=>[m(S,{size:"medium",options:p.twitterCards,modelValue:p.getCardOptions(e.optionsStore.options.social.twitter.homePage.cardType),"onUpdate:modelValue":t[11]||(t[11]=i=>e.optionsStore.options.social.twitter.homePage.cardType=i.value)},null,8,["options","modelValue"])]),_:1},8,["name"])),e.rootStore.aioseo.data.staticHomePage?l("",!0):(s(),g(d,{key:3,class:"twitter-image",name:o.strings.homePageImage,align:""},{content:n(()=>[m(_,{description:e.optionsStore.options.social.twitter.homePage.cardType==="summary"?o.strings.minimumSizeSummary:o.strings.minimumSizeSummaryWithLarge,modelValue:e.optionsStore.options.social.twitter.homePage.image,"onUpdate:modelValue":t[12]||(t[12]=i=>e.optionsStore.options.social.twitter.homePage.image=i)},null,8,["description","modelValue"])]),_:1},8,["name"])),e.rootStore.aioseo.data.staticHomePage?l("",!0):(s(),g(d,{key:4,name:o.strings.homePageTitle},{content:n(()=>[m(I,{class:"twitter-meta-input",modelValue:e.optionsStore.options.social.twitter.homePage.title,"onUpdate:modelValue":t[13]||(t[13]=i=>e.optionsStore.options.social.twitter.homePage.title=i),"line-numbers":!1,single:"",onCounter:t[14]||(t[14]=i=>o.titleCount=i.length),"tags-context":"homePage","default-tags":["site_title","tagline","separator_sa"]},{"tags-description":n(()=>[f(w(o.strings.clickToAddHomePageTitle),1)]),_:1},8,["modelValue"]),u("div",{class:"max-recommended-count",innerHTML:e.maxRecommendedCount(o.titleCount,70)},null,8,ie)]),_:1},8,["name"])),e.rootStore.aioseo.data.staticHomePage?l("",!0):(s(),g(d,{key:5,name:o.strings.homePageDescription},{content:n(()=>[m(I,{class:"twitter-meta-input",modelValue:e.optionsStore.options.social.twitter.homePage.description,"onUpdate:modelValue":t[15]||(t[15]=i=>e.optionsStore.options.social.twitter.homePage.description=i),"line-numbers":!1,onCounter:t[16]||(t[16]=i=>o.descriptionCount=i.length),"tags-context":"homePage","default-tags":["site_title","tagline","separator_sa"]},{"tags-description":n(()=>[f(w(o.strings.clickToAddHomePageDescription),1)]),_:1},8,["modelValue"]),u("div",{class:"max-recommended-count",innerHTML:e.maxRecommendedCount(o.descriptionCount,200)},null,8,ae)]),_:1},8,["name"]))]),_:1},8,["header-text"])):l("",!0)])}const Je=X(J,[["render",re]]);export{Je as default};
