var Ot=Object.defineProperty;var _t=(t,e,s)=>e in t?Ot(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var w=(t,e,s)=>_t(t,typeof e!="symbol"?e+"":e,s);import{r as Gt,d as Mt,e as p,b as T,h as M,l as q,m as qt,B as y,s as pt,u as tt,p as It,z as P,A as C,g as f,F as $,U as D,E as L,V as B,W as R,D as U,C as G,X as Q}from"./index.20192476.js";import{d as nt}from"./Caret.662da1f3.js";import{s as $t}from"./metabox.dc73facf.js";import{c as I}from"./cleanForSlug.f9ffe7db.js";import{a as Dt,g as E}from"./_baseSet.32e7a763.js";import"./translations.12335a6a.js";import{_ as l}from"./default-i18n.54b5d8cd.js";import{e as lt}from"./regex.f8017116.js";import{n as ut,aT as rt}from"./runtime-dom.esm-bundler.6789c400.js";import{I as Lt}from"./helpers.f95d5840.js";function Bt(t,e,s){return t==null?t:Dt(t,e,s)}const u="all-in-one-seo-pack",Rt=()=>{const t=[{slug:"article",graphName:"Article",label:l("Article",u)},{slug:"book",graphName:"Book",label:l("Book",u)},{slug:"course",graphName:"Course",label:l("Course",u)},{slug:"dataset",graphName:"Dataset",label:l("Dataset",u)},{slug:"event",graphName:"Event",label:l("Event",u)},{slug:"faq-page",graphName:"FAQPage",label:l("FAQ",u)},{slug:"fact-check",graphName:"FactCheck",label:l("Fact Check",u)},{slug:"how-to",graphName:"HowTo",label:l("How To",u)},{slug:"job-posting",graphName:"JobPosting",label:l("Job Posting",u)},{slug:"movie",graphName:"Movie",label:l("Movie",u)},{slug:"music",graphName:"Music",label:l("Music",u)},{slug:"person",graphName:"Person",label:l("Person",u)},{slug:"product",graphName:"Product",label:l("Product",u)},{slug:"product-review",graphName:"ProductReview",label:l("Product Review",u)},{slug:"car",graphName:"Car",label:l("Car",u)},{slug:"recipe",graphName:"Recipe",label:l("Recipe",u)},{slug:"service",graphName:"Service",label:l("Service",u)},{slug:"software-application",graphName:"SoftwareApplication",label:l("Software",u)},{slug:"video",graphName:"Video",label:l("Video",u)},{slug:"web-page",graphName:"WebPage",label:l("Web Page",u)}],e={Article:[{childGraphName:"BlogPosting",label:l("Blog Post",u)},{childGraphName:"NewsArticle",label:l("News Article",u)}],Music:[{childGraphName:"MusicAlbum",label:l("Music Album",u)},{childGraphName:"MusicGroup",label:l("Music Group",u)}],WebPage:[{childGraphName:"WebPage",label:l("Web Page",u)},{childGraphName:"AboutPage",label:l("About Page",u)},{childGraphName:"CheckoutPage",label:l("Checkout Page",u)},{childGraphName:"CollectionPage",label:l("Collection Page",u)},{childGraphName:"ContactPage",label:l("Contact Page",u)},{childGraphName:"ItemPage",label:l("Item Page",u)},{childGraphName:"MedicalWebPage",label:l("Medical Page",u)},{childGraphName:"ProfilePage",label:l("Profile Page",u)},{childGraphName:"RealEstateListing",label:l("Real Estate Listing",u)},{childGraphName:"SearchResultsPage",label:l("Search Results Page",u)}]};return{childGraphs:e,graphs:t,initSchemaEditor:n=>{const o=dt(),i=JSON.stringify(o.graph);o.graph=Gt(n,o.graph);const c=JSON.stringify(o.graph);JSON.stringify(i)!==JSON.stringify(c)&&(o.isDirty=!0)},getGraphObject:(n,o=!1)=>{var i;return!o&&((i=n==null?void 0:n.properties)==null?void 0:i.type)!==n.graphName&&e[n.graphName]?e[n.graphName].find(c=>c.childGraphName===n.properties.type):t.find(c=>c.slug===n.slug)},getParentGraphName:n=>{let o="";return Object.entries(e).forEach(i=>{const c=i[0];i[1].forEach(b=>{o||n===b.childGraphName&&(o=c)})}),o||n}}},dt=Mt("SchemaStore",{state:()=>({custom:{graphName:"",schema:""},defaultGraphParent:"",graph:null,graphCardsKey:0,isDirty:!1,isEditingCustomGraph:!1,isEditingCustomTemplate:!1,isEditingDefaultGraph:!1,isEditingGraph:!1,isEditingTemplate:!1,modalOpenMetabox:!1,modalOpenSidebar:!1,output:"",outputKey:0,tabs:{generator:"schema-templates",templates:"schema-catalog"},templateName:"",previousOutputRequestData:null}),actions:{getCustomObject(){return{id:"#aioseo-custom-"+new Date().getTime().toString(36),custom:!0,graphName:this.custom.graphName,schema:this.custom.schema}},resetSessionState(){this.custom={graphName:"",schema:""},this.defaultGraphParent="",this.graph=null,this.templateName="",this.isEditingCustomGraph=!1,this.isEditingCustomTemplate=!1,this.isEditingDefaultGraph=!1,this.isEditingGraph=!1,this.isEditingTemplate=!1,this.isDirty=!1},addCustomAsGraph(){const t=p();t.currentPost.schema.customGraphs.push(this.getCustomObject()),t.currentPost.schema.customGraphs=t.currentPost.schema.customGraphs.sort((e,s)=>e.graphName<s.graphName?-1:1),this.resetSessionState(),this.graphCardsKey=this.graphCardsKey+1,this.modalOpenMetabox=!1,this.modalOpenSidebar=!1},addCustomAsTemplate(){const t=T(),e={...this.getCustomObject()},s={...JSON.parse(JSON.stringify(e)),label:"Custom Schema - "+e.graphName};t.internalOptions.internal.schema.templates.push(this.getCustomObject()),this.resetSessionState(),this.setTabTemplates("your-templates"),M.post(q.restUrl("schema/templates")).send({template:s}).then(a=>{a.body.success&&a.body.templates&&this.parseAndUpdateTemplates(a.body.templates)})},addCustomTemplateAsGraph(){const t=p();t.currentPost.schema.customGraphs.push(this.graph),t.currentPost.schema.customGraphs=t.currentPost.schema.customGraphs.sort((e,s)=>e.graphName<s.graphName?-1:1),this.resetSessionState(),this.graphCardsKey=this.graphCardsKey+1,this.modalOpenMetabox=!1,this.modalOpenSidebar=!1},addDefaultGraph(){const t=p();t.currentPost.schema.default.isEnabled=!0,this.resetSessionState(),this.graphCardsKey=this.graphCardsKey+1,this.modalOpenMetabox=!1,this.modalOpenSidebar=!1},addGraph(){const t=p();t.currentPost.schema.graphs.push(this.graph),t.currentPost.schema.graphs=t.currentPost.schema.graphs.sort((e,s)=>e.graphName<s.graphName?-1:1),this.resetSessionState(),this.graphCardsKey=this.graphCardsKey+1,this.modalOpenMetabox=!1,this.modalOpenSidebar=!1},addGraphAsTemplate(){var a,r,n,o,i;const t=Rt();(r=(a=this.graph)==null?void 0:a.properties)!=null&&r.type&&this.graph.properties.type!==this.graph.graphName?this.graph.label=((n=t.getGraphObject(this.graph,!0))==null?void 0:n.label)+" - "+((o=t.getGraphObject(this.graph))==null?void 0:o.label)+" - "+this.templateName:this.graph.label=((i=t.getGraphObject(this.graph,!0))==null?void 0:i.label)+" - "+this.templateName;const e=JSON.parse(JSON.stringify(this.graph));T().internalOptions.internal.schema.templates.push(this.graph),this.resetSessionState(),this.setTabTemplates("your-templates"),M.post(q.restUrl("schema/templates")).send({template:e}).then(c=>{c.body.success&&c.body.templates&&this.parseAndUpdateTemplates(c.body.templates)})},addTemplateAsGraph(t,e=""){let a=T().internalOptions.internal.schema.templates;if(e){const o=new RegExp(lt(e).replace(/\s/g,"\\s"),"i");a=a.filter(i=>{var c;return(c=i==null?void 0:i.label)==null?void 0:c.match(o)})}t===void 0&&(t=a.findIndex(o=>o.id===this.graph.id));const r=JSON.parse(JSON.stringify(a[t]));r.id=r.id+new Date().getTime().toString(18);const n=p();r.custom?(n.currentPost.schema.customGraphs.push(r),n.currentPost.schema.customGraphs=n.currentPost.schema.customGraphs.sort((o,i)=>o.graphName<i.graphName?-1:1)):(n.currentPost.schema.graphs.push(r),n.currentPost.schema.graphs=n.currentPost.schema.graphs.sort((o,i)=>o.graphName<i.graphName?-1:1)),this.resetSessionState(),this.graphCardsKey=this.graphCardsKey+1,this.modalOpenMetabox=!1,this.modalOpenSidebar=!1},deleteCustomGraph(t){const e=p();t===void 0&&(t=e.currentPost.schema.customGraphs.findIndex(s=>s.id===this.graph.id)),e.currentPost.schema.customGraphs.splice(t,1),this.resetSessionState(),this.graphCardsKey=this.graphCardsKey+1,this.modalOpenMetabox=!1,this.modalOpenSidebar=!1},deleteDefaultGraph(){const t=p();t.currentPost.schema.default.isEnabled=!1,this.resetSessionState(),this.graphCardsKey=this.graphCardsKey+1,this.modalOpenMetabox=!1,this.modalOpenSidebar=!1},deleteGraph(t){const e=p();t===void 0&&(t=e.currentPost.schema.graphs.findIndex(s=>s.id===this.graph.id)),e.currentPost.schema.graphs.splice(t,1),this.resetSessionState(),this.graphCardsKey=this.graphCardsKey+1,this.modalOpenMetabox=!1,this.modalOpenSidebar=!1},deleteTemplate(t){const e=this.graph.id,s=T();t===void 0&&(t=s.internalOptions.internal.schema.templates.findIndex(a=>a.id===e)),s.internalOptions.internal.schema.templates.splice(t,1),this.resetSessionState(),this.setTabTemplates("your-templates"),M.delete(q.restUrl("schema/templates")).send({templateId:e}).then(a=>{a.body.success&&a.body.templates&&this.parseAndUpdateTemplates(a.body.templates)})},editCustomGraph({customGraphIndex:t,isSidebar:e}){const s=p(),a=JSON.parse(JSON.stringify(s.currentPost.schema.customGraphs[t]));this.graph=a,this.isEditingCustomGraph=!0,this.tabs.generator="custom-schema",e?this.modalOpenSidebar=!0:this.modalOpenMetabox=!0},editDefaultGraph({isSidebar:t,parentGraphName:e}){this.defaultGraphParent=e;const s=p();s.currentPost.schema.default.data[e]&&(this.graph=s.currentPost.schema.default.data[e]),this.isEditingDefaultGraph=!0,this.tabs.generator="schema-templates",t?this.modalOpenSidebar=!0:this.modalOpenMetabox=!0},async editGraph({graphIndex:t,isSidebar:e}){const s=p(),a=JSON.parse(JSON.stringify(s.currentPost.schema.graphs[t]));this.graph=a,this.isEditingGraph=!0,this.tabs.generator="schema-templates",e?this.modalOpenSidebar=!0:this.modalOpenMetabox=!0,await ut(),this.isDirty=!1},async editTemplate(t,e=""){let a=T().internalOptions.internal.schema.templates;if(e){const n=new RegExp(lt(e).replace(/\s/g,"\\s"),"i");a=a.filter(o=>o.label.match(n))}const r=JSON.parse(JSON.stringify(a[t]));if(this.graph=r,r.custom)this.templateName=this.graphName,this.isEditingCustomTemplate=!0,this.tabs.generator="custom-schema";else{const n=new RegExp(`^${this.graph.graphName} -`,"i"),o=this.graph.label.replace(n,"");this.templateName=o,this.isEditingTemplate=!0}await ut(),this.isDirty=!1},updateCustomGraph(){const t=p(),e=t.currentPost.schema.customGraphs.findIndex(s=>s.id===this.graph.id);e!==-1&&(t.currentPost.schema.customGraphs[e]=this.graph,t.currentPost.schema.customGraphs=t.currentPost.schema.customGraphs.sort((s,a)=>s.graphName<a.graphName?-1:1),this.resetSessionState(),this.graphCardsKey=this.graphCardsKey+1,this.modalOpenMetabox=!1,this.modalOpenSidebar=!1)},updateDefaultGraph(){const t=p();t.currentPost.schema.default.data[this.defaultGraphParent]=this.graph,this.resetSessionState(),this.graphCardsKey=this.graphCardsKey+1,this.modalOpenMetabox=!1,this.modalOpenSidebar=!1},updateGraph(){const t=p(),e=t.currentPost.schema.graphs.findIndex(s=>s.id===this.graph.id);e!==-1&&(t.currentPost.schema.graphs[e]=this.graph,t.currentPost.schema.graphs=t.currentPost.schema.graphs.sort((s,a)=>s.graphName<a.graphName?-1:1),this.resetSessionState(),this.graphCardsKey=this.graphCardsKey+1,this.modalOpenMetabox=!1,this.modalOpenSidebar=!1)},updateSchemaOutput(){const t=p();if(qt().isUnlicensed)return;let s=t.currentPost.id;if(y()&&(s=window.wp.data.select("core/editor").getCurrentPostId()),!s||t.currentPost.context!=="post")return;const a={postId:s,graphs:t.currentPost.schema.graphs,customGraphs:t.currentPost.schema.customGraphs,default:t.currentPost.schema.default,blockGraphs:t.currentPost.schema.blockGraphs};JSON.stringify(a)!==this.previousOutputRequestData&&(this.previousOutputRequestData=JSON.stringify(a),M.post(q.restUrl("schema/validator/output")).send(a).then(r=>{if(r.body.success&&r.body.output){let n=null;try{n=JSON.parse(r.body.output)}catch{return}if(r.body.output=JSON.stringify(n,null,"	").trim(),r.body.output===this.output)return;this.output=r.body.output,this.outputKey=this.outputKey+1}}))},updateTemplate(){this.graph.label=this.graph.graphName+" - "+this.templateName;const t=JSON.parse(JSON.stringify(this.graph)),e=T(),s=e.internalOptions.internal.schema.templates.findIndex(a=>a.id===this.graph.id);s!==-1&&(e.internalOptions.internal.schema.templates[s]=this.graph,this.resetSessionState(),this.setTabTemplates("your-templates"),M.put(q.restUrl("schema/templates")).send({template:t}).then(a=>{a.body.success&&a.body.templates&&this.parseAndUpdateTemplates(a.body.templates)}))},parseAndUpdateTemplates(t){t=t.map(s=>(typeof s!="string"||(s=JSON.parse(s)),s)),t=t.sort((s,a)=>{const r=s.custom?0:1;return s.graphName<a.graphName?-1:r});const e=T();e.internalOptions.internal.schema.templates=t},setModalOpen({isOpen:t,initialTab:e,isSidebar:s}){t||(this.resetSessionState(),this.setTabTemplates("schema-catalog")),s?this.modalOpenSidebar=t:this.modalOpenMetabox=t,e&&(this.tabs.generator=e)},setTabTemplates(t){this.tabs.generator="schema-templates",this.tabs.templates=t}}}),et=(t,e="div")=>{const s=document.createElement(e);return s.innerHTML=It(t.trim()),s},st=(t,e=!0,s="textContent")=>(typeof t=="string"&&(e&&(t=t.replace(/[\t|\n]/gm,"")),t=et(t)),t[s]||t.textContent||t.innerText||""),Le=t=>(typeof t=="string"&&(t=et(t)),(t==null?void 0:t.outerText)??""),ot=t=>(typeof t=="string"&&(t=et(t)),t.querySelectorAll("img")),Be=(t,e=200)=>t&&(e<t.length&&(t=t.substring(0,e).trim()+pt("&hellip;")),t),Re=(t,e)=>{try{const s=JSON.parse(e);return s?s["@type"]&&(t===s["@type"]||Array.isArray(s["@type"])&&s["@type"].includes(t))?s:Array.isArray(s["@graph"])&&s["@graph"].find(r=>Array.isArray(r["@type"])?r["@type"].includes(t):r["@type"]===t)||!1:!1}catch{return!1}},Ue=()=>{var t;return{url:window.location.href,title:document.title||"",description:((t=document.querySelector('meta[name="description"]'))==null?void 0:t.content)||""}},Je=()=>{var e,s,a,r;const t={description:((e=document.querySelector('meta[property="og:description"]'))==null?void 0:e.content)||"",image:((s=document.querySelector('meta[property="og:image"]'))==null?void 0:s.content)||"",title:((a=document.querySelector('meta[property="og:title"]'))==null?void 0:a.content)||"",type:((r=document.querySelector('meta[property="og:type"]'))==null?void 0:r.content)||""};if(!t.title&&(t.title=document.title||"",!t.title)){const n=tt();t.title=n.aioseo.urls.domain}return t},Ke=()=>{var t,e,s,a;return{card:((t=document.querySelector('meta[name="twitter:card"]'))==null?void 0:t.content)||"",description:((e=document.querySelector('meta[name="twitter:description"]'))==null?void 0:e.content)||"",image:((s=document.querySelector('meta[name="twitter:image"]'))==null?void 0:s.content)||"",title:((a=document.querySelector('meta[name="twitter:title"]'))==null?void 0:a.content)||""}},Ut=t=>{var s;if(typeof(window==null?void 0:window.acf)!="object"||typeof((s=window.acf)==null?void 0:s.getField)!="function")return null;const e=window.acf.getField(t)||{};return typeof(e==null?void 0:e.val)!="function"?null:e.val()||{}},Jt=()=>{const t=window.elementor.documents.getCurrent(),e=[];return t.$element?(t.$element.find(".elementor-widget-container").each((s,a)=>{const r=a.innerHTML.trim().replaceAll(/<p.*>(<img.*>)<\/p>/g,"$1");st(r)===""&&ot(r).length===0||e.push(r)}),e.join(" ")):""},J=()=>{var s;const{settings:t,config:e}=window.elementor;return{content:Jt(),title:t.page.model.get("post_title"),excerpt:t.page.model.get("post_excerpt")||"",slug:I(t.page.model.get("post_title")),permalink:e.document.urls.permalink||"",featuredImage:((s=t.page.model.get("post_featured_image"))==null?void 0:s.url)||""}},Kt=()=>{const t=E(ET_Builder,"Frames.app.frameElement",document.querySelector("iframe#et-fb-app-frame"));if(!t)return document.createElement("div");let e=t.contentWindow.document.querySelectorAll("#et-fb-app");return 1<e.length&&(e=[...e].filter(s=>s.classList.contains("et-fb-root-ancestor"))),e[0]||document.createElement("div")},Wt=()=>{const t=[],e=Kt().querySelectorAll(".et_pb_section"),s=new RegExp(["<style.*?</style>","\\[object Object\\]"].join("|"),"gi");for(const a of e){const r=a.innerHTML.replace(s,"").replaceAll(/<p.*>(<img.*>)<\/p>/g,"$1");st(r)===""&&ot(r).length===0||t.push(r)}return t.join(" ")},jt=()=>{const t=new URL(E(ETBuilderBackendDynamic,"currentPage.permalink",""));return t.searchParams.delete("PageSpeed"),t.href},Ht=async()=>{const{wp:t}=window,e=E(ETBuilderBackendDynamic,"currentPage.thumbnailId",0);if(!t||e===0)return"";const s=t.media.attachment(e);let a="";return await s.fetch().then(()=>{a=s.get("url"),Bt(ETBuilderBackendDynamic,"currentPage.thumbnailUrl",a)}),a},K=()=>({content:Wt(),title:E(ETBuilderBackendDynamic,"postTitle",""),excerpt:E(ETBuilderBackendDynamic,"postMeta.post_excerpt",""),slug:E(ETBuilderBackendDynamic,"postMeta.post_name",""),permalink:jt(),featuredImage:Ht()}),Vt=t=>{let e;switch(t.type){case"header":e=document.createElement(t.settings.tag),e.innerHTML=t.settings.headerTxt.trim();break;case"image":const s=document.createElement("img");t.settings.altTxt&&s.setAttribute("alt",t.settings.altTxt),t.settings.src&&s.setAttribute("src",t.settings.src),t.settings.noFollow&&s.setAttribute("rel","nofollow"),e=s,t.settings.link&&(e=document.createElement("a"),e.setAttribute("href",t.settings.link),e.innerHTML=s.outerHTML,t.settings.noFollow&&e.setAttribute("rel","nofollow"),t.settings.openNewWindow&&e.setAttribute("target","_blank"));break;case"video":t.settings.type==="youtube"?(e=document.createElement("iframe"),e.setAttribute("src",t.settings.youtubeUrl)):(e=document.createElement("div"),e.innerHTML=t.settings.code);break;case"text":e=document.createElement("div"),e.innerHTML=t.settings.txt.trim();break;case"button":e=document.createElement("a"),e.appendChild(document.createTextNode(t.settings.btnTxt+" "+t.settings.btnSubTxt)),t.settings.link&&e.setAttribute("href",t.settings.link),t.settings.altTxt&&e.setAttribute("alt",t.settings.altTxt),t.settings.src&&e.setAttribute("src",t.settings.src),t.settings.noFollow&&e.setAttribute("rel","nofollow"),t.settings.openNewWindow&&e.setAttribute("target","_blank");break;case"bullet-list":e=document.createElement("ul"),t.settings.items.forEach(a=>{const r=document.createElement("li");r.innerHTML=a.txt,e.appendChild(r)});break;case"custom-html":e=document.createElement("div"),e.innerHTML=t.settings.code;break}return e},zt=()=>{const t=[];return JSON.parse(JSON.stringify(E(seedprod_data,"settings.document.sections",[]))).forEach(s=>{s.rows.forEach(a=>{a.cols.forEach(r=>{r.blocks.forEach(n=>{const o=Vt(n);o&&(st(o)===""&&ot(o).length===0||t.push(o.outerHTML))})})})}),t.join(" ")},Ft=()=>{const t=E(seedprod_data,"home_url",""),e=E(seedprod_data,"settings.post_name","");return`${t}/${e}/`},W=()=>({content:zt(),title:E(seedprod_data,"settings.post_title",""),excerpt:"",slug:E(seedprod_data,"settings.post_name",""),permalink:Ft()}),Xt=()=>p().currentPost.processedContent,Zt=t=>{var e;if(t==="admin_frontend_editor"){const{vc:s}=window;return s.builder.getTitle()}return((e=document.getElementById("#title"))==null?void 0:e.value)||""},Qt=t=>{var e;if(t==="admin_frontend_editor"){const{vc_iframe_src:s}=window,a=new URL(s).pathname.split("/").filter(r=>r);return a[a.length-1]}return((e=document.querySelector("#post_name"))==null?void 0:e.value)||""},Yt=t=>{var e;if(t==="admin_frontend_editor"){const{vc_iframe_src:s}=window;return s.replace(new URL(s).search,"")}return((e=document.querySelector("#sample-permalink a"))==null?void 0:e.href)||""},j=()=>{const{vc_mode:t}=window;return{content:Xt(),title:Zt(t),excerpt:"",slug:Qt(t),permalink:Yt(t),featuredImage:""}},te=()=>{var e;return((e=p().currentPost)==null?void 0:e.processedContent)||""},ee=()=>{var e;const{FusionApp:t}=window;return(t==null?void 0:t.getPost("post_title"))||((e=document.getElementById("#title"))==null?void 0:e.value)||""},se=()=>{var e;const{FusionApp:t}=window;return(t==null?void 0:t.getPost("post_name"))||((e=document.querySelector("#post_name"))==null?void 0:e.value)||""},ae=()=>{var e;const{FusionApp:t}=window;return(t==null?void 0:t.getPost("post_permalink").replace("?fb-edit=1",""))||((e=document.querySelector("#sample-permalink a"))==null?void 0:e.href)||""},re=async()=>{const{wp:t,FusionApp:e}=window;if(!t||!e||!e.getDynamicPost("post_meta")._thumbnail_id)return"";const s=t.media.attachment(e.getDynamicPost("post_meta")._thumbnail_id);let a="";return await s.fetch().then(()=>{a=s.get("url")}),a},H=()=>({content:te(),title:ee(),excerpt:"",slug:se(),permalink:ae(),featuredImage:re()}),ne=()=>{let t="";const e=["p","a","img","caption","br","video","iframe","blockquote","cite","em","strong","i","b","q","h1","h2","h3","h4","h5","h6","ul","ol","li","table","tr","th","td"],s=function(r){var o;const n=et(r);if(n.querySelectorAll(".so-panel").length===0)return r;for(const i of n.querySelectorAll("iframe, script, style, link"))i.remove();return n.querySelectorAll("*").forEach(i=>{if(!e.includes(i.tagName.toLowerCase())){const c=Array.from(i.childNodes);i.replaceWith(...c)}}),((o=n.innerHTML)==null?void 0:o.replace(/[\t|\n]/gm," "))||""},{soPanelsBuilderView:a}=window;return a&&(Array.isArray(a)?a.forEach(function(r){t+=s(r.contentPreview)}):t=s(a.contentPreview)),t},V=()=>({content:ne(),title:"",excerpt:"",slug:"",permalink:"",featuredImage:""}),oe=()=>{var t,e;return((e=(t=TVE==null?void 0:TVE.Editor_Page)==null?void 0:t.content_manager)==null?void 0:e.get_clean_content())||""},ie=()=>{var t,e;return((e=(t=TVE==null?void 0:TVE.CONST)==null?void 0:t.post)==null?void 0:e.post_title)||""},ce=()=>{var t,e;return((e=(t=TVE==null?void 0:TVE.CONST)==null?void 0:t.post)==null?void 0:e.post_name)||""},le=()=>{var t;return((t=TVE==null?void 0:TVE.CONST)==null?void 0:t.post_url)||""},ue=()=>{var e,s,a,r,n;const t=((a=(s=(e=TVE==null?void 0:TVE.CONST)==null?void 0:e.theme)==null?void 0:s.post_featured_image)==null?void 0:a.src)||((n=(r=TVE==null?void 0:TVE.CONST)==null?void 0:r.post_image)==null?void 0:n.featured)||"";return t.includes("inc/assets/images/featured_image.png")?"":t},z=()=>({content:oe(),title:ie(),excerpt:"",slug:ce(),permalink:le(),featuredImage:ue()}),mt=()=>{let t="";switch(!0){case G():t=J().permalink;break;case U():t=K().permalink;break;case R():t=W().permalink;break;case B():t=j().permalink;break;case L():t=H().permalink;break;case D():t=V().permalink;break;case $():t=z().permalink;break}return t},pe=()=>{const t=f();if(t.liveTags.permalink)return t.liveTags.permalink;let e;if(P()||C){const s=document.querySelector("#edit-slug-box a");s&&s.href&&(e=s.href)}return y()&&(e=window.wp.data.select("core/editor").getPermalink()),e||(e=mt()),e&&t.updatePermalink(e),e},x=()=>{let t;if(P()||C){const e=document.querySelector("#edit-slug-box a");e&&e.href&&(t=e.href)}return y()&&(t=window.wp.data.select("core/editor").getPermalink()),t||(t=mt()),t},de=async(t=!0)=>{let e=pe();const s=x();if(e!==s&&(e=s,e)){const a=p();if(f().updatePermalink(e),!t)return;new N().runAnalysis({postId:a.currentPost.id,postData:{...a.currentPost},content:v(),slug:x()})}},gt=t=>t?(t=t.replaceAll(/\n\n/g," "),t=st(t,!1,"innerText"),t=t.replace(/\[.*?]/g,""),t.trim()):"",ht=()=>{let t="";switch(!0){case G():t=J().excerpt;break;case U():t=K().excerpt;break;case R():t=W().excerpt;break;case B():t=j().excerpt;break;case L():t=H().excerpt;break;case D():t=V().excerpt;break;case $():t=z().excerpt;break}return t},me=()=>{const t=f();if(t.liveTags.post_excerpt)return t.liveTags.post_excerpt;let e;return(P()||C())&&(e=ft()),y()&&(e=window.wp.data.select("core/editor").getCurrentPost().excerpt),e||(e=ht()),e||(e=gt(Nt())),e&&t.updatePostExcerpt(e),e},ge=()=>{let t;return(P()||C())&&(t=ft()),y()&&(t=window.wp.data.select("core/editor").getEditedPostAttribute("excerpt")),t||(t=ht()),t||(t=gt(v())),t},he=async(t=!0)=>{let e=me();const s=ge();if(e!==s){e=s;const a=p();if(f().updatePostExcerpt(e),!t)return;new N().runAnalysis({postId:a.currentPost.id,postData:{...a.currentPost},content:v(),slug:x()})}},ft=()=>{let t="";const e=document.querySelector("#postexcerpt textarea#excerpt");if(t=e?e.value:"",document.querySelector("#wp-excerpt-wrap.tmce-active")){const s=window.tinyMCE?window.tinyMCE.get("excerpt"):"";s&&(t=s.getContent({format:"raw"}))}return t},yt=()=>{let t="";switch(!0){case G():t=J().slug;break;case U():t=K().slug;break;case R():t=W().slug;break;case B():t=j().slug;break;case L():t=H().slug;break;case D():t=V().slug;break;case $():t=z().slug;break}return t},fe=()=>{const t=f();if(t.permalinkSlug)return t.permalinkSlug;let e="";if(P()||C()){const s=document.querySelector("#post_name");s&&(e=I(s.value))}return y()&&(e=window.wp.data.select("core/editor").getCurrentPost().slug),e||(e=yt()),e&&t.updatePermalinkSlug(e),e},ye=()=>{let t="";if(P()||C()){const e=document.querySelector("#post_name");e&&(t=I(e.value))}if(y()&&(t=window.wp.data.select("core/editor").getEditedPostAttribute("slug")),G()){const e=window.elementor.settings.page.model.get("post_title");e&&(t=I(e))}return t||(t=yt()),t},Se=async(t=!0)=>{let e=fe();const s=ye();if(e!==s){e=s;const a=p();if(f().updatePermalinkSlug(e),!t)return;new N().runAnalysis({postId:a.currentPost.id,postData:{...a.currentPost},content:v(),slug:x()})}};let S="",k="";const be=(t=!0)=>{var a;const e=f();if(P()||C()){const r=document.querySelectorAll('#post input[name="post_category[]"]:checked');r.length?(S!==r[0].parentNode.innerText&&(S=r[0].parentNode.innerText,e.updateTaxonomyTitle(S)),k=Array.from(r).map(n=>n.parentNode.innerText).join(", "),e.updateCategories(k)):S!==""&&(S=k="",e.updateTaxonomyTitle(S),e.updateCategories(k))}if(y()){let r=[],n=[];if((a=tt().aioseo.user.data.allcaps)!=null&&a.manageCategories&&(r=window.wp.data.select("core").getEntityRecords("taxonomy","category"),n=window.wp.data.select("core/editor").getEditedPostAttribute("categories")),n&&n.length&&r){const i=r.find(c=>c.id===n[0]);i&&S!==i.name&&(S=i.name,e.updateTaxonomyTitle(S)),k=r.filter(c=>n.includes(c.id)).map(c=>c.name).join(", "),e.updateCategories(k)}else S!==""&&(S=k="",e.updateTaxonomyTitle(S),e.updateCategories(k))}const s=p();t&&new N().runAnalysis({postId:s.currentPost.id})},we=(t=!1)=>{const e=p();if(e.currentPost.context!=="term")return;const s=f(),a=document.querySelector("#edittag input#name");a&&(s.updateTaxonomyTitle(a.value),a.addEventListener("input",()=>{s.updateTaxonomyTitle(a.value)}));const r=document.querySelector("#edittag textarea#description");r&&(s.updateTaxonomyDescription(r.value),r.addEventListener("input",()=>{s.updateTaxonomyDescription(r.value)}));const n=document.querySelector("#edittag input#slug");if(n){const o=I(n.value);s.updatePermalinkSlug(o),s.updatePermalink(e.currentPost.permalink.replace(`/${s.permalinkSlug}`,`/${o.replace(/ /gi,"-").replace(/[^a-z0-9-]/gi,"").toLowerCase()}`)),n.addEventListener("input",()=>{s.updatePermalinkSlug(o),s.updatePermalink(e.currentPost.permalink.replace(`/${s.permalinkSlug}`,`/${o.replace(/ /gi,"-").replace(/[^a-z0-9-]/gi,"").toLowerCase()}`))})}e.savePostState(),t&&N.runAnalysis({postId:e.currentPost.id})},Ee=(t=!1)=>{const e=p();if(e.currentPost.postType!=="attachment")return;const s=f(),a=document.querySelector("textarea#attachment_caption");a&&(s.updateAttachmentCaption(a.value),a.addEventListener("input",c=>{s.updateAttachmentCaption(c.target.value)}));const r=document.querySelector("textarea#attachment-details-caption");r&&(s.updateAttachmentCaption(r.value),r.addEventListener("input",c=>{s.updateAttachmentCaption(c.target.value)}));const n=document.querySelector("textarea#attachment_content");n&&(s.updateAttachmentDescription(n.value),n.addEventListener("input",c=>{s.updateAttachmentDescription(c.target.value)}));const o=document.querySelector("input#attachment_alt");o&&(s.updateAltTag(o.value),o.addEventListener("input",c=>{s.updateAltTag(c.target.value)}));const i=document.querySelector("input#attachment-details-alt-text");i&&(s.updateAltTag(o.value),i.addEventListener("input",c=>{s.updateAltTag(c.target.value)})),t&&new N().runAnalysis({postId:e.currentPost.id})},St=()=>{var e,s;const t=p();return(e=t==null?void 0:t.currentPost)!=null&&e.id&&!!((s=t.currentPost)!=null&&s.isTruSeoEligible)||!1},We=()=>{var a,r;const t=tt();if(!((a=t.aioseo.screen)!=null&&a.postType))return!1;const e=p();return!!((r=T().options.advanced)!=null&&r.truSeo&&$t(t.aioseo.screen.postType)&&!e.currentPost.isStaticPostsPage)},_=async(t=900,e=!0)=>{nt(async()=>{const s=dt(),a=p();await ke(!1),await Te(!1),await he(!1),await Se(!1),await de(!1),be(!1),we(!1),Ee(!1),nt(s.updateSchemaOutput,Math.max(t*2,1800)),e&&new N().runAnalysis({postId:a.currentPost.id})},t)},je=t=>{const e=t.getRangeAt(0),s=e.cloneRange();return s.collapse(!1),t.removeAllRanges(),t.addRange(s),t.extend(e.startContainer,e.startOffset),t},He=t=>{const e=new RegExp(" ","g");return t.replace(/&nbsp;/g," ").replace(e," ")},Ve=({element:t,property:e,value:s})=>{if(!t)return document.documentElement;let a=t.parentElement;for(;a;){if(a.isEqualNode(document.documentElement)||s===document.defaultView.getComputedStyle(a).getPropertyValue(e))return a;a=a.parentElement}},ze=()=>{const t=document.createElement("div");return t.classList.add("tru-seo-highlight-popover-wrapper"),t.style.position="absolute",t.style.zIndex="999",t.style.display="flex",t.setAttribute("tabindex",-1),t},bt=()=>{const e=p().currentPost.postType;if(!e)return"";const a=T().dynamicOptions.searchAppearance.postTypes[e].customFields;if(!a||!St)return"";const r=()=>{_(500)},n=a.replace(/\n/g,",").split(","),o=[],i=["INPUT","TEXTAREA","IMG"],c=m=>{try{document.createDocumentFragment().querySelector(m)}catch{return!1}return!0};n.forEach(m=>{m=m.trim();const h=c(`#${m}`)?document.querySelector(`#${m}`):!1,A=document.querySelectorAll("#the-list > tr"),F=document.querySelectorAll(".acf-field");i.includes(h==null?void 0:h.tagName)&&!(h!=null&&h.closest(".acf-field"))?o.push(h):A.forEach(g=>{const d=g.querySelector(`#${g.id}-key`),O=g.querySelector(`#${g.id}-value`);i.includes(O==null?void 0:O.tagName)&&n.includes(d==null?void 0:d.value)&&o.push(O)}),F.forEach(g=>{if(m!==g.dataset.name)return"";let d=g.querySelector(`[id^="acf"][name$="[${g.dataset.key}]"]`);if(g.dataset.type==="image"&&(d=g.querySelector(".has-value img")),g.dataset.type==="gallery"&&(d=g.querySelector(".acf-gallery-attachment img")),g.dataset.type==="link"&&(d=Ut(g.dataset.key)||g.querySelector(`[name$="[${g.dataset.key}][url]"]`)||{},d={tagName:"INPUT",type:"url",value:(d==null?void 0:d.url)??(d==null?void 0:d.value)??""}),!d||d.type&&d.type==="hidden")return"";if(g.dataset.type==="wysiwyg"){const O=window.setInterval(()=>{var X,Z;(Z=(X=window.tinyMCE)==null?void 0:X.activeEditor)!=null&&Z.acf&&(window.clearInterval(O),window.tinyMCE.activeEditor.on("keyup",function(){_(500)}),window.tinyMCE.activeEditor.on("PostProcess",function(){nt(()=>{_(500)},10)}))},50),xt=function(X){X.forEach(Z=>{var ct;if(Z.attributeName==="class"&&g.querySelector(".wp-editor-wrap.tmce-active")&&((ct=window.tinyMCE)!=null&&ct.activeEditor)){window.tinyMCE.activeEditor.on("keyup",function(){_(500)});const at=g.querySelector(`[name="acf[${g.dataset.key}]"]`);at&&(at.addEventListener("keyup",()=>{_(500)}),at.addEventListener("paste",()=>{_(500)}))}})},At=new MutationObserver(xt),it=g.querySelector(".wp-editor-wrap");it&&At.observe(it,{attributes:!0})}i.includes(d.tagName)&&o.push(d)})});let b="";return o.forEach(m=>{let h="";if(i.includes(m.tagName)&&typeof(m==null?void 0:m.addEventListener)=="function"&&m.addEventListener("keyup",r),m.value&&(h=m.value),m.tagName==="IMG"&&m.src){const A=m.alt?`alt="${m.alt}"`:"";h=`<img src="${m.src}" ${A}>`}m.value&&m.type&&m.type==="url"&&(h=`<a href="${h}">${h}</a>`),h&&(b+=`${h} `)}),b},Fe=(t,e=["INPUT","TEXTAREA","IMG"])=>{if(!t)return"";const s=document.querySelector(`#${t}`),a=document.querySelectorAll("#the-list > tr"),r=document.querySelectorAll(".acf-field");let n="";return s&&e.indexOf(s.tagName)!==-1&&(s.closest(".acf-field")||(n=s.tagName==="IMG"?s.getAttribute("src"):s.value)),a.length&&a.forEach(o=>{const i=o.querySelector(`#${o.id}-key`),c=o.querySelector(`#${o.id}-value`);c&&e.indexOf(c.tagName)!==-1&&i.value===t&&(n=c.tagName==="IMG"?c.getAttribute("src"):c.value)}),r.length&&r.forEach(o=>{if(t!==o.dataset.name)return;let i;e.forEach(c=>{const b=c.toLowerCase();i=o.querySelector(`[data-key="${o.dataset.key}"] ${b}`)||i}),i&&(n=i.tagName==="IMG"?i.getAttribute("src"):i.value)}),n},Pe=t=>{const e=t.getBody();return 1<e.childNodes.length?!1:e.childNodes.length===0?!0:1<e.childNodes[0].childNodes.length?!1:/^\n?$/.test(e.innerText||e.textContent)},wt=/base64,(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)/g,Et=["acf","aioseo"],Pt=()=>{let t="";switch(!0){case G():t=J().content;break;case U():t=K().content;break;case R():t=W().content;break;case B():t=j().content;break;case L():t=H().content;break;case D():t=V().content;break;case $():t=z().content;break}return t},Tt=t=>{var a;if(!t.includes('<!-- wp:block {"ref":'))return t;const e=(a=window.wp.blocks)==null?void 0:a.rawHandler({HTML:t});return Lt(e).forEach(r=>{var n,o,i;if(r.name==="core/block"){const c=window.wp.data.select("core").getEntityRecord("postType","wp_block",(n=r.attributes)==null?void 0:n.ref);(o=c==null?void 0:c.content)!=null&&o.raw&&(t=t.replace(`<!-- wp:block {"ref":${(i=r.attributes)==null?void 0:i.ref}} /-->`,c.content.raw))}}),t},Ct=(t,e)=>(window.wp.data.select("core/block-editor").getBlocks().forEach(a=>{if(e.includes(a.name.split("/")[0])){const r=document.getElementById("block-"+a.clientId);if(r&&r.innerText){const n=`(<!-- wp:${a.name}.*?/wp:${a.name} -->)|(<!-- wp:${a.name}.*?/-->)`;t=t.replace(new RegExp(n,"s"),r.innerText)}}}),t),Nt=()=>{const t=f();if(t.liveTags.post_content)return t.liveTags.post_content;let e="";if(P()&&!Q())if(window.tinyMCE||document.querySelector("#wp-content-wrap.html-active"))e=Y();else{const a=window.setInterval(()=>{window.tinyMCE&&(window.clearInterval(a),e=Y())},50)}return y()&&(e=window.wp.data.select("core/editor").getCurrentPost().content||"",e=Tt(e),e=Ct(e,Et)),Q()&&(e=Pt()),p().currentPost.descriptionIncludeCustomFields&&(e=e+bt()),e=e.replace(wt,""),e&&t.updatePostContent(e),e},v=(t=!1)=>{let e="";if(P()&&!Q())if(window.tinyMCE||document.querySelector("#wp-content-wrap.html-active"))e=Y();else{const a=window.setInterval(()=>{window.tinyMCE&&(window.clearInterval(a),e=Y())},50)}y()&&(e=window.wp.data.select("core/editor").getEditedPostContent(),e=Tt(e),e=Ct(e,Et)),Q()&&(e=Pt());const s=p();return!t&&s.currentPost.descriptionIncludeCustomFields&&(e=e+bt()),e=e.replace(wt,""),e},Te=async(t=!0)=>{let e=Nt();const s=v();if(e!==s){e=s;const a=p();if(f().updatePostContent(e),!t)return;new N().runAnalysis({postId:a.currentPost.id,postData:{...a.currentPost},content:v(),slug:x()})}},Y=()=>{let t;const e=window.tinyMCE?window.tinyMCE.get("content"):"";if(document.querySelector("#wp-content-wrap.tmce-active")&&e)t=e.getContent({format:Pe(e)?"html":"raw"});else{const s=document.querySelector("textarea#content");t=s?s.value:""}return t};function Ce(t){return new Worker(""+window.__aioseoDynamicImportPreload__("main-BPrMxXiR.js"),{name:t==null?void 0:t.name})}class N{constructor(){w(this,"postId",null);w(this,"postTitle",null);w(this,"postParsedTitle",null);w(this,"postParsedDescription",null);w(this,"postDescription",null);w(this,"keyphrases",null);w(this,"postContent",null);w(this,"postSlug",null);w(this,"isAnalyzing",!1);w(this,"worker",null)}async runAnalysis({postId:e,postData:s,content:a=v(),slug:r=x()}){var g;const n=p(),o=T();if(s=s||{...n.currentPost},!((g=o.options.advanced)!=null&&g.truSeo)||!n.currentPost.page_analysis||this.isAnalyzing)return;this.worker&&this.worker.terminate();const i={separator:pt(o.options.searchAppearance.global.separator)},c=tt(),b=f(),m=b.tags.map(d=>b.liveTags[d.id]!==void 0&&d.value!==b.liveTags[d.id]?{...d,value:b.liveTags[d.id]}:d),h={...rt(c.aioseo),tags:rt(m),currentPost:rt(n.currentPost)},A=JSON.parse(JSON.stringify({postId:e,postData:s,content:a,aioseo:h,slug:r,postEditedTitle:vt(),aioseoGlobals:i}));let F=[];this.worker=new Ce,this.worker.addEventListener("message",d=>{d.data.event==="tru-seo-analysis-complete"&&(F=d.data.analysis,this.dispatchActions(F,A),this.worker.terminate())}),this.worker.postMessage({event:"tru-seo-analysis",analysisData:A})}setSidebarButtonScore(e){const s=document.getElementById("aioseo-post-settings-sidebar-button"),a=document.getElementById("aioseo-post-score");!s||!a||(s.className=80<e?"score-green":50<e?"score-orange":"score-red",y()||(s.classList.add("aioseo-score-button","classic-editor"),e=`${e}/100`),a.textContent=e)}dispatchActions(e,s){const a=p();e.forEach(r=>{r.action==="updateState"&&s.postEditedTitle&&St()&&this.setSidebarButtonScore(r.data.seo_score),a[r.action](r.data)})}}const kt=()=>{let t="";switch(!0){case G():t=J().title;break;case U():t=K().title;break;case R():t=W().title;break;case B():t=j().title;break;case L():t=H().title;break;case D():t=V().title;break;case $():t=z().title;break}return t},Ne=()=>{const t=f();if(t.liveTags.post_title)return t.liveTags.post_title;let e;if(P()||C()){const s=document.querySelector("#post input#title");e=s?s.value:""}return y()&&(e=window.wp.data.select("core/editor").getCurrentPost().title),e||(e=kt()),e&&t.updatePostTitle(e),e},vt=()=>{let t;if(P()||C()){const e=document.querySelector("#post input#title");t=e?e.value:""}return y()&&(t=window.wp.data.select("core/editor").getEditedPostAttribute("title")),t||(t=kt()),t},ke=async(t=!0)=>{let e=Ne();const s=vt();if(e!==s){e=s;const a=p();if(f().updatePostTitle(e),!t)return;new N().runAnalysis({postId:a.currentPost.id,postData:{...a.currentPost},content:v(),slug:x()})}};export{Ve as A,je as B,He as C,ze as D,Rt as E,N as T,J as a,K as b,Fe as c,H as d,z as e,v as f,st as g,be as h,St as i,we as j,Ee as k,vt as l,_ as m,me as n,j as o,Re as p,We as q,V as r,Bt as s,Be as t,dt as u,Je as v,Ue as w,Ke as x,ye as y,Le as z};
