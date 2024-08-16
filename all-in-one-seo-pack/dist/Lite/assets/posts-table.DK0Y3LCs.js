import{o,c as h,a as n,v as g,k as u,b as r,l as a,C as c,t as i,B as p,E as m,m as $,G as N,V as M,h as R}from"./js/runtime-dom.esm-bundler.tPRhSV4q.js";import{l as tt}from"./js/index.CkBeLh4y.js";import{l as et}from"./js/index.B6JTtDta.js";import{l as st}from"./js/index.3BJ3ZnWB.js";import{a as z,g as it,o as B,A as E,t as U,l as O,r as H}from"./js/links.Ce9S4kjc.js";import{k as ot,t as nt,T as lt}from"./js/postSlug.gaB5T-wi.js";import{a as rt}from"./js/allowed.CMMScaL-.js";import"./js/default-i18n.DXRQgkn2.js";import{u as Z,T as j}from"./js/TruSeoScore.DmC22Awy.js";import{_ as I}from"./js/_plugin-vue_export-helper.BN1snXvA.js";import{l as V}from"./js/license.4lyTI3li.js";import{_ as F,b as G,f as Q}from"./js/Caret.BthVBOwE.js";import{C as X}from"./js/HtmlTagsEditor.D4eMyBCg.js";import{_ as at}from"./js/ScoreButton.BV7psxHV.js";import{C as q}from"./js/Tooltip.DhkkBQWW.js";import{_ as ct}from"./js/IndexStatus.BjMK9kJ5.js";import{S as dt}from"./js/LogoGear.BbumEdXr.js";/* empty css                */import"./js/constants.CPpKID74.js";import"./js/helpers.CXsRrhc8.js";import"./js/metabox.CnmedXkm.js";import"./js/cleanForSlug.BVGRQ_59.js";import"./js/toString.zLSwYOtv.js";import"./js/_baseTrim.BYZhh0MR.js";import"./js/_stringToArray.DnK4tKcY.js";import"./js/_baseSet.rYV3oc6X.js";import"./js/upperFirst.yVnsg4QL.js";import"./js/Editor.CWmTV9I5.js";import"./js/isEqual.DkU1ezAe.js";import"./js/_baseIsEqual.MNbeg0L2.js";import"./js/_getTag.BWQxgJie.js";import"./js/_baseClone.DejpcsWN.js";import"./js/_arrayEach.Fgt6pfHj.js";import"./js/UnfilteredHtml.BcJiQf8S.js";import"./js/CheckSolid.CDvG9IOI.js";const pt={},ut={viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-headline-analyzer"},mt=n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.5448 1.76771H14.6665V1.79272L10.5448 4.61008V1.76771ZM5.46515 8.08232V1.76779H1.34351V4.8899L1.34378 4.71192L5.42731 8.10819L5.46515 8.08232ZM1.34351 11.4568L5.46515 14.2652V15.0999H1.34351V11.4568ZM10.5448 10.8851L14.6665 8.14027V15.0982H10.5448V10.8851Z",fill:"currentColor"},null,-1),ht=n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.46515 8.05739L5.42731 8.08325L1.34378 4.68698L1.34351 4.86412V1.76779H5.46515V8.05739ZM5.46515 14.2083L1.34351 11.3998V15.0999H5.46515V14.2083ZM10.5448 10.8281L14.6665 8.08332V15.0982H10.5448V10.8281ZM14.6665 1.76778L10.5448 4.58515V1.76771H14.6665V1.76778Z",fill:"currentColor"},null,-1),gt=n("path",{d:"M5.42725 9.45857L14.6665 3.14303V6.76487L5.46703 12.8912L1.33325 10.0745L1.34372 6.06231L5.42725 9.45857Z",fill:"currentColor"},null,-1),_t=[mt,ht,gt];function ft(e,s){return o(),h("svg",ut,_t)}const wt=I(pt,[["render",ft]]),vt={setup(){const{strings:e}=Z();return{composableStrings:e,optionsStore:z(),searchStatisticsStore:it()}},components:{BaseButton:F,CoreHtmlTagsEditor:X,CoreLoader:G,CoreScoreButton:at,CoreTooltip:q,IndexStatus:ct,SvgAioseoLogoGear:dt,SvgHeadlineAnalyzer:wt,SvgPencil:Q},mixins:[j],props:{post:Object,posts:Array},data(){return{allowed:rt,postId:null,columnName:null,value:null,title:null,titleParsed:null,postDescription:null,descriptionParsed:null,imageTitle:null,imageAltTag:null,showEditTitle:!1,showEditDescription:!1,showEditImageTitle:!1,showEditImageAltTag:!1,showTruSeo:!1,isSpecialPage:!1,inspectionResult:!1,inspectionResultLoading:!0,postLoading:!1,strings:B(this.composableStrings,{title:this.$t.__("Title",this.$td),description:this.$t.__("Description",this.$td),imageTitle:this.$t.__("Image Title",this.$td),imageAltTag:this.$t.__("Image Alt Tag",this.$td),saveChanges:this.$t.__("Save Changes",this.$td),discardChanges:this.$t.__("Discard Changes",this.$td),truSeoScore:this.$t.__("TruSEO Score",this.$td),headlineScore:this.$t.__("Headline Score",this.$td)}),license:V}},computed:{showIndexStatus(){var f,t,l;if(!this.$isPro||!V.hasCoreFeature("search-statistics","index-status"))return!1;const e=!this.searchStatisticsStore.unverifiedSite,s=typeof((l=(t=(f=this.optionsStore.internalOptions.internal)==null?void 0:f.searchStatistics)==null?void 0:t.profile)==null?void 0:l.key)=="string",d=this.allowed("aioseo_search_statistics_settings");return e&&s&&d}},methods:{save(){this.showEditTitle=!1,this.showEditDescription=!1,this.post.title=this.title,this.post.description=this.postDescription,this.postLoading=!0,E.post(this.$links.restUrl("posts-list/update-details-column")).send({postId:this.post.id,title:this.post.title,description:this.post.description}).then(e=>{this.titleParsed=e.body.title,this.descriptionParsed=e.body.description,this.post.titleParsed=e.body.title,this.post.descriptionParsed=e.body.description,this.$root.$data.screen.base!=="upload"&&this.runAnalysis(this.post.id)}).catch(e=>{console.error(`Unable to update post with ID ${this.post.id}: ${e}`)}).finally(()=>{this.postLoading=!1})},saveImage(){this.showEditImageTitle=!1,this.showEditImageAltTag=!1,this.post.title=this.title,this.post.description=this.postDescription,this.post.imageTitle=this.imageTitle,this.post.imageAltTag=this.imageAltTag,E.post(this.$links.restUrl("posts-list/update-details-column")).send({postId:this.post.id,isMedia:!0,title:this.post.title,description:this.post.description,imageTitle:this.post.imageTitle,imageAltTag:this.post.imageAltTag}).then(()=>{}).catch(e=>{console.error(`Unable to update attachment with ID ${this.post.id}: ${e}`)})},cancel(){this.value=this.post.value,this.showEditTitle=!1,this.showEditDescription=!1,this.showEditImageTitle=!1,this.showEditImageAltTag=!1},editTitle(){this.showEditTitle=!0},editDescription(){this.showEditDescription=!0},editImageTitle(){this.showEditImageTitle=!0},editImageAlt(){this.showEditImageAltTag=!0},truncate:U,updatePostTitle(e,s){const d=document.getElementById(`post-${e}`);if(!d)return;const f=d.getElementsByClassName("title")[0].getElementsByTagName("a")[0];if(!f)return;const t=f.getElementsByTagName("span")[0];f.innerText=s,f.prepend(t)},updateInspectionResult(e){const{inspectionResult:s,inspectionResultLoading:d}=e;this.inspectionResult=s,this.inspectionResultLoading=d}},mounted(){this.postId=this.post.id,this.columnName=this.post.columnName,this.value=this.post.value,this.imageTitle=this.post.imageTitle,this.imageAltTag=this.post.imageAltTag,this.isSpecialPage=this.post.isSpecialPage,this.title=this.post.title||this.post.defaultTitle,this.titleParsed=this.post.titleParsed,this.postDescription=this.post.description||this.post.defaultDescription,this.descriptionParsed=this.post.descriptionParsed,this.inspectionResult=this.post.inspectionResult,this.inspectionResultLoading=this.post.inspectionResultLoading,this.post.reload&&this.save(),window.aioseoBus.$on("updateInspectionResult"+this.postId,this.updateInspectionResult)},beforeUnmount(){window.aioseoBus.$off("updateInspectionResult"+this.postId,this.updateInspectionResult)},async created(){this.showTruSeo=ot()}},yt={key:0,class:"edit-row scores"},Tt={class:"edit-row edit-title"},kt={key:0},Ct=n("strong",null,":",-1),bt={key:1,class:"edit-row"},Et={class:"edit-row edit-description"},It=["id"],St=n("strong",null,":",-1),Dt={key:2,class:"edit-row"},Pt={class:"edit-row edit-image-title"},At=["id"],Lt=n("strong",null,":",-1),Vt={key:3,class:"edit-row"},xt={class:"edit-row edit-image-alt"},Nt=["id"],Mt=n("strong",null,":",-1),Rt={key:4,class:"edit-row"};function zt(e,s,d,f,t,l){var A,L;const v=g("index-status"),T=g("svg-headline-analyzer"),y=g("core-score-button"),_=g("core-tooltip"),w=g("svg-aioseo-logo-gear"),b=g("core-loader"),S=g("svg-pencil"),D=g("core-html-tags-editor"),k=g("base-button");return o(),h("div",{class:N(["aioseo-details-column",{editing:t.showEditTitle||t.showEditDescription||t.showEditImageTitle||t.showEditImageAltTag}])},[n("div",null,[e.$root.$data.screen.base==="edit"&&!t.isSpecialPage?(o(),h("div",yt,[l.showIndexStatus?(o(),u(v,{key:0,result:(A=t.inspectionResult)==null?void 0:A.indexStatusResult,"result-link":(L=t.inspectionResult)==null?void 0:L.inspectionResultLink,loading:t.inspectionResultLoading,viewable:d.post.isPostVisible,"tooltip-offset":"-150px,0"},null,8,["result","result-link","loading","viewable"])):r("",!0),f.optionsStore.options.advanced.headlineAnalyzer?(o(),u(_,{key:1,type:"action"},{tooltip:a(()=>[c(i(t.strings.headlineScore),1)]),default:a(()=>[p(y,{score:d.post.headlineScore,postId:t.postId},{icon:a(()=>[p(T)]),_:1},8,["score","postId"])]),_:1})):r("",!0),t.showTruSeo&&t.allowed("aioseo_page_analysis")?(o(),u(_,{key:2,type:"action"},{tooltip:a(()=>[c(i(t.strings.truSeoScore),1)]),default:a(()=>[p(y,{score:d.post.value,postId:t.postId},{icon:a(()=>[p(w)]),_:1},8,["score","postId"])]),_:1})):r("",!0)])):r("",!0),n("div",null,[t.allowed("aioseo_page_general_settings")?(o(),u(_,{key:0,class:"aioseo-details-column__tooltip",disabled:t.showEditTitle},{tooltip:a(()=>[n("strong",null,i(t.strings.title)+":",1),c(" "+i(t.titleParsed),1)]),default:a(()=>[n("div",Tt,[n("strong",null,i(t.strings.title),1),t.showEditTitle?r("",!0):(o(),h("span",kt,[Ct,c(" "+i(l.truncate(t.titleParsed,100)),1)])),t.postLoading?(o(),u(b,{key:1,dark:""})):r("",!0),t.showEditTitle?r("",!0):(o(),u(S,{key:2,class:"pencil-icon",onClick:m(l.editTitle,["prevent"])},null,8,["onClick"]))])]),_:1},8,["disabled"])):r("",!0)]),t.showEditTitle?(o(),h("div",bt,[p(D,{modelValue:t.title,"onUpdate:modelValue":s[0]||(s[0]=C=>t.title=C),"line-numbers":!1,single:"","tags-context":"postTitle",defaultMenuOrientation:"bottom",tagsDescription:"","default-tags":["post_title"]},null,8,["modelValue"]),p(k,{type:"gray",size:"small",onClick:m(l.cancel,["prevent"])},{default:a(()=>[c(i(t.strings.discardChanges),1)]),_:1},8,["onClick"]),p(k,{type:"blue",size:"small",onClick:m(l.save,["prevent"])},{default:a(()=>[c(i(t.strings.saveChanges),1)]),_:1},8,["onClick"])])):r("",!0),n("div",null,[t.allowed("aioseo_page_general_settings")?(o(),u(_,{key:0,class:"aioseo-details-column__tooltip",disabled:t.showEditDescription},{tooltip:a(()=>[n("strong",null,i(t.strings.description)+":",1),c(" "+i(l.truncate(t.descriptionParsed)),1)]),default:a(()=>[n("div",Et,[n("strong",null,i(t.strings.description),1),t.showEditDescription?r("",!0):(o(),h("span",{key:0,id:`aioseo-${t.columnName}-${t.postId}-value`},[St,c(" "+i(l.truncate(t.descriptionParsed)),1)],8,It)),t.postLoading?(o(),u(b,{key:1,dark:""})):r("",!0),t.showEditDescription?r("",!0):(o(),u(S,{key:2,class:"pencil-icon",onClick:m(l.editDescription,["prevent"])},null,8,["onClick"]))])]),_:1},8,["disabled"])):r("",!0)]),t.showEditDescription?(o(),h("div",Dt,[p(D,{modelValue:t.postDescription,"onUpdate:modelValue":s[1]||(s[1]=C=>t.postDescription=C),"line-numbers":!1,"tags-context":"postDescription",defaultMenuOrientation:"bottom",tagsDescription:"","default-tags":["post_excerpt"]},null,8,["modelValue"]),p(k,{type:"gray",size:"small",onClick:m(l.cancel,["prevent"])},{default:a(()=>[c(i(t.strings.discardChanges),1)]),_:1},8,["onClick"]),p(k,{type:"blue",size:"small",onClick:m(l.save,["prevent"])},{default:a(()=>[c(i(t.strings.saveChanges),1)]),_:1},8,["onClick"])])):r("",!0),$(e.$slots,"default"),n("div",null,[e.$root.$data.screen.base==="upload"&&d.post.showMedia?(o(),u(_,{key:0,class:"aioseo-details-column__tooltip",disabled:t.showEditImageTitle},{tooltip:a(()=>[n("strong",null,i(t.strings.imageTitle)+":",1),c(" "+i(t.imageTitle),1)]),default:a(()=>[n("div",Pt,[n("strong",null,i(t.strings.imageTitle),1),t.showEditImageTitle?r("",!0):(o(),h("span",{key:0,id:`aioseo-${t.columnName}-${t.postId}-value`},[Lt,c(" "+i(t.imageTitle),1)],8,At)),t.showEditImageTitle?r("",!0):(o(),u(S,{key:1,class:"pencil-icon",onClick:m(l.editImageTitle,["prevent"])},null,8,["onClick"]))])]),_:1},8,["disabled"])):r("",!0)]),t.showEditImageTitle?(o(),h("div",Vt,[p(D,{modelValue:t.imageTitle,"onUpdate:modelValue":s[2]||(s[2]=C=>t.imageTitle=C),"line-numbers":!1,single:"","tags-context":"attachmentTitle",defaultMenuOrientation:"bottom",tagsDescription:"","default-tags":["image_title"]},null,8,["modelValue"]),p(k,{type:"gray",size:"small",onClick:m(l.cancel,["prevent"])},{default:a(()=>[c(i(t.strings.discardChanges),1)]),_:1},8,["onClick"]),p(k,{type:"blue",size:"small",onClick:m(l.saveImage,["prevent"])},{default:a(()=>[c(i(t.strings.saveChanges),1)]),_:1},8,["onClick"])])):r("",!0),n("div",null,[e.$root.$data.screen.base==="upload"&&d.post.showMedia?(o(),u(_,{key:0,class:"aioseo-details-column__tooltip",disabled:t.showEditImageAltTag},{tooltip:a(()=>[n("strong",null,i(t.strings.imageAltTag)+":",1),c(" "+i(t.imageAltTag),1)]),default:a(()=>[n("div",xt,[n("strong",null,i(t.strings.imageAltTag),1),t.showEditImageAltTag?r("",!0):(o(),h("span",{key:0,id:`aioseo-${t.columnName}-${t.postId}-value`},[Mt,c(" "+i(t.imageAltTag),1)],8,Nt)),t.showEditImageAltTag?r("",!0):(o(),u(S,{key:1,class:"pencil-icon",onClick:m(l.editImageAlt,["prevent"])},null,8,["onClick"]))])]),_:1},8,["disabled"])):r("",!0)]),t.showEditImageAltTag?(o(),h("div",Rt,[p(D,{modelValue:t.imageAltTag,"onUpdate:modelValue":s[3]||(s[3]=C=>t.imageAltTag=C),"line-numbers":!1,single:"","tags-context":"attachmentDescription",defaultMenuOrientation:"bottom",tagsDescription:"","default-tags":["alt_tag"]},null,8,["modelValue"]),p(k,{type:"gray",size:"small",onClick:m(l.cancel,["prevent"])},{default:a(()=>[c(i(t.strings.discardChanges),1)]),_:1},8,["onClick"]),p(k,{type:"blue",size:"small",onClick:m(l.saveImage,["prevent"])},{default:a(()=>[c(i(t.strings.saveChanges),1)]),_:1},8,["onClick"])])):r("",!0)])],2)}const Bt=I(vt,[["render",zt]]),Ut={components:{CorePostColumn:Bt},props:{post:Object}};function Ot(e,s,d,f,t,l){const v=g("core-post-column");return o(),u(v,{post:d.post},null,8,["post"])}const x=I(Ut,[["render",Ot]]),Ht={components:{PostColumn:x,PostColumnLite:x},props:{post:Object}},Zt={class:"aioseo-app"};function jt(e,s,d,f,t,l){const v=g("PostColumn"),T=g("PostColumnLite");return o(),h("div",Zt,[e.$isPro?(o(),u(v,{key:0,post:d.post},null,8,["post"])):r("",!0),e.$isPro?r("",!0):(o(),u(T,{key:1,post:d.post},null,8,["post"]))])}const Ft=I(Ht,[["render",jt]]),Gt={setup(){const{strings:e}=Z();return{composableStrings:e}},components:{BaseButton:F,CoreHtmlTagsEditor:X,CoreLoader:G,CoreTooltip:q,SvgPencil:Q},mixins:[j],props:{term:Object,terms:Array,index:Number},data(){return{termId:null,columnName:null,title:null,titleParsed:null,termDescription:null,descriptionParsed:null,showEditTitle:!1,showEditDescription:!1,showTruSeo:!1,termLoading:!1,strings:B(this.composableStrings,{title:this.$t.__("Title",this.$td),description:this.$t.__("Description",this.$td),saveChanges:this.$t.__("Save Changes",this.$td),discardChanges:this.$t.__("Discard Changes",this.$td)})}},methods:{save(){this.showEditTitle=!1,this.showEditDescription=!1,this.term.title=this.title,this.term.description=this.termDescription,this.termLoading=!0,E.post(this.$links.restUrl("terms-list/update-details-column")).send({termId:this.term.id,title:this.term.title,description:this.term.description}).then(e=>{this.titleParsed=e.body.title,this.descriptionParsed=e.body.description,this.term.titleParsed=e.body.title,this.term.descriptionParsed=e.body.description}).catch(e=>{console.error(`Unable to update term with ID ${this.term.id}: ${e}`)}).finally(()=>{this.termLoading=!1})},cancel(){this.showEditTitle=!1,this.showEditDescription=!1},editTitle(){this.showEditTitle=!0},editDescription(){this.showEditDescription=!0},truncate:U},mounted(){this.termId=this.term.id,this.columnName=this.term.columnName,this.title=this.term.title,this.titleParsed=this.term.titleParsed,this.termDescription=this.term.description,this.descriptionParsed=this.term.descriptionParsed,this.term.reload&&this.save()},async created(){this.showTruSeo=nt()}},Qt={class:"aioseo-app"},Xt={class:"edit-row edit-title"},qt={key:0},Jt=n("strong",null,":",-1),Kt={key:0,class:"edit-row"},Wt={class:"edit-row edit-description"},Yt={key:0},$t=n("strong",null,":",-1),te={key:1,class:"edit-row"};function ee(e,s,d,f,t,l){const v=g("core-loader"),T=g("svg-pencil"),y=g("core-tooltip"),_=g("core-html-tags-editor"),w=g("base-button");return o(),h("div",Qt,[n("div",{class:N(["aioseo-details-column",{editing:t.showEditTitle||t.showEditDescription}])},[n("div",null,[n("div",null,[p(y,{class:"aioseo-details-column__tooltip"},{tooltip:a(()=>[n("strong",null,i(t.strings.title)+":",1),c(" "+i(t.titleParsed),1)]),default:a(()=>[n("div",Xt,[n("strong",null,i(t.strings.title),1),t.showEditTitle?r("",!0):(o(),h("span",qt,[Jt,c(" "+i(l.truncate(t.titleParsed,100)),1)])),t.termLoading?(o(),u(v,{key:1,dark:""})):r("",!0),t.showEditTitle?r("",!0):(o(),u(T,{key:2,class:"pencil-icon",onClick:m(l.editTitle,["prevent"])},null,8,["onClick"]))])]),_:1})]),t.showEditTitle?(o(),h("div",Kt,[p(_,{modelValue:t.title,"onUpdate:modelValue":s[0]||(s[0]=b=>t.title=b),"line-numbers":!1,single:"","tags-context":"taxonomyTitle",defaultMenuOrientation:"bottom",tagsDescription:"","default-tags":["taxonomy_title"]},null,8,["modelValue"]),p(w,{type:"gray",size:"small",onClick:m(l.cancel,["prevent"])},{default:a(()=>[c(i(t.strings.discardChanges),1)]),_:1},8,["onClick"]),p(w,{type:"blue",size:"small",onClick:m(l.save,["prevent"])},{default:a(()=>[c(i(t.strings.saveChanges),1)]),_:1},8,["onClick"])])):r("",!0),n("div",null,[p(y,{class:"aioseo-details-column__tooltip"},{tooltip:a(()=>[n("strong",null,i(t.strings.description)+":",1),c(" "+i(t.descriptionParsed),1)]),default:a(()=>[n("div",Wt,[n("strong",null,i(t.strings.description),1),t.showEditDescription?r("",!0):(o(),h("span",Yt,[$t,c(" "+i(l.truncate(t.descriptionParsed)),1)])),t.termLoading?(o(),u(v,{key:1,dark:""})):r("",!0),t.showEditDescription?r("",!0):(o(),u(T,{key:2,class:"pencil-icon",onClick:m(l.editDescription,["prevent"])},null,8,["onClick"]))])]),_:1})]),t.showEditDescription?(o(),h("div",te,[p(_,{modelValue:t.termDescription,"onUpdate:modelValue":s[1]||(s[1]=b=>t.termDescription=b),"line-numbers":!1,"tags-context":"taxonomyDescription",defaultMenuOrientation:"bottom",tagsDescription:"","default-tags":["taxonomy_description"]},null,8,["modelValue"]),p(w,{type:"gray",size:"small",onClick:m(l.cancel,["prevent"])},{default:a(()=>[c(i(t.strings.discardChanges),1)]),_:1},8,["onClick"]),p(w,{type:"blue",size:"small",onClick:m(l.save,["prevent"])},{default:a(()=>[c(i(t.strings.saveChanges),1)]),_:1},8,["onClick"])])):r("",!0)])],2)])}const se=I(Gt,[["render",ee]]);O();const J=e=>(e=tt(e),e=et(e),e=st(e),O(e),e.config.globalProperties.$truSeo=new lt,e),K=e=>{const s=document.getElementById(e);s!=null&&s.__vue_app__&&s.__vue_app__.unmount()},W=e=>{K(`${e.columnName}-${e.id}`),J(M({name:"Standalone/PostsTable/"+e.id,data(){return{screen:window.aioseo.screen}},render:()=>R(Ft)},{post:e})).mount(`#${e.columnName}-${e.id}`)},Y=e=>{if(!e)return;const s=document.createElement("input");s.setAttribute("type","hidden"),s.setAttribute("name","aioseo-has-details-column"),s.setAttribute("value",!0),e.append(s)};window.aioseo.posts&&0<window.aioseo.posts.length&&E.post(H.restUrl("posts-list/load-details-column")).send({ids:window.aioseo.posts.map(e=>e.id)}).then(e=>{window.aioseo.posts=window.aioseo.posts.map(s=>({...s,...e.body.posts.find(d=>d.id===s.id)})),window.aioseo.posts.forEach(s=>{W(s)})});const P=e=>{K(`${e.columnName}-${e.id}`),J(M({name:"Standalone/TermsTable/"+e.id,data(){return{screen:window.aioseo.screen}},render:()=>R(se)},{term:e})).mount(`#${e.columnName}-${e.id}`)};window.aioseo.terms&&0<window.aioseo.terms.length&&window.aioseo.posts.length===0&&E.post(H.restUrl("terms-list/load-details-column")).send({ids:window.aioseo.terms.map(e=>e.id)}).then(e=>{window.aioseo.terms=window.aioseo.terms.map(s=>({...s,...e.body.terms.find(d=>d.id===s.id)})),window.aioseo.terms.forEach(s=>{P(s)})});Y(document.querySelector("#inline-edit div"));Y(document.getElementById("addtag"));(function(e){e(document).on("ajaxComplete",(s,d,f)=>{var v,T;const t=new URLSearchParams(f.data),l=t==null?void 0:t.get("action");if(!(!t||!l)){if(l==="inline-save"){const{post_ID:y}=Object.fromEntries(t.entries()),_=window.aioseo.posts.find(w=>w.id===parseInt(y));W({..._,reload:!0})}if(l==="inline-save-tax"){const{tax_ID:y}=Object.fromEntries(t.entries()),_=window.aioseo.terms.find(w=>w.id===parseInt(y));P({..._,reload:!0})}if(l==="add-tag"){const y=e(d.responseXML).find("term_id").text(),_=e(d.responseXML).find("term taxonomy").text(),w=z();P({id:parseInt(y),columnName:"aioseo-details",title:(v=w.dynamicOptions.searchAppearance.taxonomies[_])==null?void 0:v.title,description:(T=w.dynamicOptions.searchAppearance.taxonomies[_])==null?void 0:T.metaDescription,reload:!0})}}})})(window.jQuery);
