import{G as I}from"./constants.dnzd2kuo.js";import{j as V,_ as x,$ as D,l as W}from"./index.lqcu3hi3.js";import{C as P}from"./Card.nubn9etl.js";import{C}from"./SettingsRow.d9u0swi1.js";import"./translations.e22mvhfh.js";import{B as U}from"./Checkbox.cv4w58s0.js";import{S as z,_ as S}from"./Caret.g6s6s7gs.js";import{b as h}from"./index.cw7tfyil.js";import{C as M}from"./PostTypeOptions.oeuoxlz8.js";import{_ as N}from"./Seoboost.fdjejgrj.js";import{v as R,o as p,k as f,l,a as c,E as Y,C as u,u as t,t as r,x as _,g as k,c as v,b as y}from"./runtime-dom.esm-bundler.h3clfjuw.js";import{C as H}from"./Index.gtlvh3ar.js";import{_ as n,s as G}from"./default-i18n.bz7purh4.js";import"./cleanForSlug.etvx808q.js";import"./Tooltip.i4md1nj9.js";import"./_plugin-vue_export-helper.oebm7xum.js";import"./Slide.dop8j51m.js";import"./Row.h4gujlzc.js";import"./Checkmark.d5kkjaf5.js";import"./PostTypes.k189gg5t.js";import"./HighlightToggle.dpi9oeof.js";import"./Radio.n2kbmrhz.js";const F={class:"aioseo-modal-body"},j={class:"reset-description"},q={__name:"DisconnectModal",props:{showModal:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},emits:["continue","cancel"],setup(A){const o="all-in-one-seo-pack",g={areYouSureReset:n("Are you sure you want to disconnect from SEOBoost?",o),actionCannotBeUndone:G(n("This action will disconnect %1$s from SEOBoost. By disconnecting from SEOBoost, you will no longer be able to get actionable insights for your target keywords to help your content rank better in SERPs.",o),"AIOSEO"),yesContinue:n("Yes, I want to disconnect",o),noCancel:n("No, I changed my mind",o)},w=A;return(e,i)=>{const m=R("base-button");return p(),f(t(H),{show:w.showModal,"no-header":"",onClose:i[4]||(i[4]=s=>e.$emit("cancel")),classes:["aioseo-writing-assistant-settings__disconnect-modal"]},{body:l(()=>[c("div",F,[c("button",{class:"close",onClick:i[1]||(i[1]=Y(s=>e.$emit("cancel"),["stop"]))},[u(t(z),{onClick:i[0]||(i[0]=s=>e.$emit("cancel"))})]),c("h3",null,r(g.areYouSureReset),1),c("div",j,r(g.actionCannotBeUndone),1),u(m,{type:"blue",size:"medium",onClick:i[2]||(i[2]=s=>e.$emit("continue")),loading:w.loading},{default:l(()=>[_(r(g.yesContinue),1)]),_:1},8,["loading"]),u(m,{type:"gray",size:"medium",onClick:i[3]||(i[3]=s=>e.$emit("cancel"))},{default:l(()=>[_(r(g.noCancel),1)]),_:1})])]),_:1},8,["show"])}}},J={class:"aioseo-writing-assistant-settings"},K={class:"aioseo-settings-row aioseo-section-description"},Q=["innerHTML"],X={key:0},Z={class:"aioseo-writing-assistant-settings__connect-buttons"},tt={key:1},ot={class:"aioseo-description"},et={key:1,class:"aioseo-writing-assistant-settings__connect-logout"},nt={class:"aioseo-description"},Ot={__name:"WritingAssistant",setup(A){const o="all-in-one-seo-pack",g=V(),w=x(),e=D();e.hookSaveUserOptions();const i=k(!1),m=k(!1),s={tooltip:n("Integrate seamlessly with SEOBoost via AIOSEO to supercharge your WordPress content.",o),description:n("Integrate seamlessly with SEOBoost via AIOSEO to supercharge your WordPress content.",o),writingAssistant:n("Writing Assistant",o),seoBoost:n("SEOBoost CTA",o),postType:n("Post Types",o),includeAllPostTypes:n("Include all post types",o),selectPostTypes:n("Select the post types you want the Writing Assistant to be available.",o),connect:n("Connect to SEOBoost",o),connectExisting:n("Connect to an Existing Account",o),connectDescription:n("Connect to SEOBoost to get access to the Writing Assistant.",o),loggedIn:n("You're connected to SEOBoost!",o),logoutButton:n("Disconnect",o),reportDefaults:n("Report Defaults",o),defaultCountry:n("Default Region",o),defaultLanguage:n("Default Language",o),or:n("OR",o),createAccount:n("Create a Free Account",o),connectNow:n("Now Connect to Your SEOBoost Account",o)},O=()=>{i.value=!1,e.disconnect()},$=()=>{const b=w.seoBoost.createAccountUrl||e.seoBoost.createAccountUrl,a=650,d=800,E=window.innerWidth/2-a/2,L=window.innerHeight/2-d/2,T=`width=${a},height=${d},resizable=no,scrollbars=no,status=no,location=no,toolbar=no,menubar=no`;window.open(b,"_blank",T).moveBy(E,L),window.addEventListener("message",B=>{B.origin===window.location.origin&&B.data==="seoboost-ms-logged-in"&&(m.value=!0)})};return(b,a)=>(p(),v("div",J,[u(t(P),{slug:"writingAssistantSettings","header-text":s.writingAssistant},{tooltip:l(()=>[c("div",null,r(s.tooltip),1)]),default:l(()=>[c("div",K,[_(r(s.description)+" ",1),c("span",{innerHTML:t(W).getDocLink(t(I).learnMore,"writingAssistantHowToUse",!0)},null,8,Q)]),u(t(C),{name:s.connect,class:"aioseo-writing-assistant-settings__connect"},{content:l(()=>[t(e).seoBoost.isLoggedIn?y("",!0):(p(),v("div",X,[c("div",Z,[m.value?y("",!0):(p(),f(t(S),{key:0,type:"green",size:"medium",onClick:$},{default:l(()=>[_(r(s.createAccount),1)]),_:1})),m.value?y("",!0):(p(),v("div",tt,r(s.or),1)),u(t(N),{"button-only":!0,"button-text":m.value?s.connectNow:s.connectExisting,"button-type":m.value?"green":"gray","button-icons":!1,"button-size":"medium"},null,8,["button-text","button-type"])]),c("div",ot,r(s.connectDescription),1)])),t(e).seoBoost.isLoggedIn?(p(),v("div",et,[c("div",null,[u(t(S),{type:"blue",size:"medium",onClick:a[0]||(a[0]=d=>i.value=!0)},{default:l(()=>[_(r(s.logoutButton),1)]),_:1})]),c("div",null,r(s.loggedIn),1)])):y("",!0)]),_:1},8,["name"]),t(e).seoBoost.isLoggedIn?(p(),f(t(C),{key:0,name:s.defaultCountry},{content:l(()=>[u(t(h),{class:"select-auto",size:"medium",options:t(e).getCountriesOptions,modelValue:t(e).userCountryOption,"onUpdate:modelValue":a[1]||(a[1]=d=>t(e).seoBoost.userOptions.country=d.value),disabled:t(e).loading},null,8,["options","modelValue","disabled"])]),_:1},8,["name"])):y("",!0),t(e).seoBoost.isLoggedIn?(p(),f(t(C),{key:1,name:s.defaultLanguage},{content:l(()=>[u(t(h),{class:"select-auto",size:"medium",options:t(e).getLanguagesOptions,modelValue:t(e).userLanguageOption,"onUpdate:modelValue":a[2]||(a[2]=d=>t(e).seoBoost.userOptions.language=d.value),disabled:t(e).loading},null,8,["options","modelValue","disabled"])]),_:1},8,["name"])):y("",!0),u(t(C),{name:s.postType},{content:l(()=>[u(t(U),{size:"medium",modelValue:t(g).options.writingAssistant.postTypes.all,"onUpdate:modelValue":a[3]||(a[3]=d=>t(g).options.writingAssistant.postTypes.all=d)},{default:l(()=>[_(r(s.includeAllPostTypes),1)]),_:1},8,["modelValue"]),t(g).options.writingAssistant.postTypes.all?y("",!0):(p(),f(t(M),{key:0,options:t(g).options.writingAssistant,type:"postTypes",supports:["editor"]},null,8,["options"])),c("div",nt,r(s.selectPostTypes),1)]),_:1},8,["name"])]),_:1},8,["header-text"]),t(e).seoBoost.isLoggedIn?(p(),f(t(q),{key:0,"show-modal":i.value,onContinue:O,onCancel:a[4]||(a[4]=d=>i.value=!1)},null,8,["show-modal"])):y("",!0)]))}};export{Ot as default};
