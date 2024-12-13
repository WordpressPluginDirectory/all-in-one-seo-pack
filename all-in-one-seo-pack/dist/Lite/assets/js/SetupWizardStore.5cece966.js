import{d as l,u as o,h as i,l as u,a as c,b as g}from"./index.ae2b6956.js";const d=l("SetupWizardStore",{state:()=>({currentStage:"welcome",stages:["import","category","additional-information","features","search-appearance","smart-recommendations","search-console","license-key"],importers:[],category:{category:"blog",categoryOther:null,siteTitle:"",metaDescription:""},additionalInformation:{siteRepresents:"organization",person:null,organizationName:null,orgnaizationDescription:null,organizationLogo:null,personName:null,personLogo:null,phone:null,socialShareImage:null,social:{profiles:{sameUsername:{enable:!0,username:null,included:["facebookPageUrl","twitterUrl","pinterestUrl","instagramUrl","youtubeUrl","linkedinUrl"]},urls:{facebookPageUrl:null,twitterUrl:null,instagramUrl:null,pinterestUrl:null,youtubeUrl:null,linkedinUrl:null,tumblrUrl:null,yelpPageUrl:null,soundCloudUrl:null,wikipediaUrl:null,myspaceUrl:null,googlePlacesUrl:null,wordPressUrl:null}}}},features:[],searchAppearance:{underConstruction:!1,postTypes:{postTypes:{all:!0,included:["post","page","attachment","product"]}},multipleAuthors:!0,redirectAttachmentPages:!0,emailReports:!0},smartRecommendations:{accountInfo:null,usageTracking:!0},licenseKey:null,showUsageTrackingModal:!1}),getters:{shouldShowImportStep:()=>o().aioseo.importers.filter(t=>t.canImport).length,getNextLink:e=>{const t={name:e.stages[0]},n=e.stages.findIndex(r=>r===e.currentStage);return n===-1||(t.name=e.stages[n+1]?e.stages[n+1]:"success"),t},getPrevLink:e=>{const t={name:e.stages[0]},n=e.stages.findIndex(r=>r===e.currentStage);return n===-1||(t.name=e.stages[n-1]?e.stages[n-1]:"welcome"),t},getCurrentStageCount:e=>{const t=e.stages.findIndex(n=>n===e.currentStage);return t===-1?e.currentStage==="success"?e.getTotalStageCount:0:t+1},getTotalStageCount:e=>e.stages.length},actions:{saveWizard(e){const t=o(),n={...this.$state};return n.showUsageTrackingModal=!1,i.post(u.restUrl("wizard")).send({section:e,wizard:n,network:t.aioseo.data.isNetworkAdmin}).then(r=>{if(r.body.options){const s=c(),a=g();a.options=r.body.options,s.updateOriginalOptions("options",r.body.options)}})},loadState(e){Object.keys(e).forEach(t=>{this[t]=e[t]})}}});export{d as u};
