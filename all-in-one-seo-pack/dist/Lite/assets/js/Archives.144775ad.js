import{b as A,u as v,j as S}from"./index.20192476.js";import{u as y}from"./PostTypes.d6c1987b.js";import{A as C,T}from"./TitleDescription.d7520ef7.js";import{C as D}from"./Card.46af096e.js";import{C as k}from"./Tabs.2fd33524.js";import"./translations.12335a6a.js";import{c as i,F as x,J as P,v as c,o as s,k as p,l as r,a as l,G as B,t as w,C as m,q as O,T as j}from"./runtime-dom.esm-bundler.6789c400.js";import{_ as L}from"./_plugin-vue_export-helper.249dac1d.js";import{_ as u}from"./default-i18n.54b5d8cd.js";import"./helpers.f95d5840.js";import"./constants.2019bcb3.js";import"./JsonValues.892a7505.js";import"./RadioToggle.64619d6b.js";import"./RobotsMeta.923dd147.js";import"./Checkbox.e983780b.js";import"./Checkmark.32f79576.js";import"./Row.f01f32cd.js";import"./SettingsRow.1934f141.js";import"./Editor.5a453aa4.js";import"./isEqual.51bf23f5.js";import"./_baseIsEqual.6bc92395.js";import"./_getTag.8dc22eac.js";import"./_baseClone.e959332d.js";import"./_arrayEach.f4f00336.js";import"./index.ee8124c6.js";import"./Caret.662da1f3.js";import"./Tags.45075d79.js";import"./postTitle.d67eb903.js";import"./metabox.dc73facf.js";import"./cleanForSlug.f9ffe7db.js";import"./toString.1401d490.js";import"./_baseTrim.940c51cf.js";import"./_stringToArray.08127ca9.js";import"./_baseSet.32e7a763.js";import"./regex.f8017116.js";import"./GoogleSearchPreview.2f81905c.js";import"./HtmlTagsEditor.4c8f78eb.js";import"./UnfilteredHtml.4ebe3c5f.js";import"./Tooltip.b6b45c85.js";import"./Slide.d0517fb0.js";import"./vue-router.fc4966b9.js";import"./ProBadge.7733ac87.js";import"./Information.82968754.js";const h="all-in-one-seo-pack",F={setup(){const{getPostIconClass:e}=y();return{getPostIconClass:e,optionsStore:A(),rootStore:v(),settingsStore:S()}},components:{Advanced:C,CoreCard:D,CoreMainTabs:k,TitleDescription:T},data(){return{internalDebounce:null,tabs:[{slug:"title-description",name:u("Title & Description",h),access:"aioseo_search_appearance_settings",pro:!1},{slug:"advanced",name:u("Advanced",h),access:"aioseo_search_appearance_settings",pro:!1}],archives:[{label:"Author Archives",name:"author",singular:"Author",icon:"dashicons-admin-users"},{label:"Date Archives",name:"date",singular:"Date",icon:"dashicons-calendar-alt"},{label:"Search Page",name:"search",singular:"Search Page",icon:"dashicons-search"}]}},computed:{getArchives(){return this.archives.concat(this.rootStore.aioseo.postData.archives.map(e=>({label:`${e.label} Archives`,name:`${e.name}Archive`,icon:"dashicons-category",singular:e.singular,dynamic:!0})))}},methods:{processChangeTab(e,n){this.internalDebounce||(this.internalDebounce=!0,this.settingsStore.changeTab({slug:`${e}Archives`,value:n}),setTimeout(()=>{this.internalDebounce=!1},50))},getOptions(e){return e.dynamic?this.optionsStore.dynamicOptions.searchAppearance.archives[e.name.replace("Archive","")]:this.optionsStore.options.searchAppearance.archives[e.name]}}},I={class:"aioseo-search-appearance-archives"};function N(e,n,R,o,d,a){const _=c("core-main-tabs"),g=c("core-card");return s(),i("div",I,[(s(!0),i(x,null,P(a.getArchives,(t,f)=>(s(),p(g,{key:f,slug:`${t.name}Archives`},{header:r(()=>[l("div",{class:B(["icon dashicons",o.getPostIconClass(t.icon)])},null,2),l("div",null,w(t.label),1)]),tabs:r(()=>[m(_,{tabs:d.tabs,showSaveButton:!1,active:o.settingsStore.settings.internalTabs[`${t.name}Archives`],internal:"",onChanged:b=>a.processChangeTab(t.name,b)},null,8,["tabs","active","onChanged"])]),default:r(()=>[m(j,{name:"route-fade",mode:"out-in"},{default:r(()=>[(s(),p(O(o.settingsStore.settings.internalTabs[`${t.name}Archives`]),{object:t,separator:o.optionsStore.options.searchAppearance.global.separator,options:a.getOptions(t),type:"archives","show-bulk":!1,"no-meta-box":"","include-keywords":""},null,8,["object","separator","options"]))]),_:2},1024)]),_:2},1032,["slug"]))),128))])}const xe=L(F,[["render",N]]);export{xe as default};
