import{D as I,a as N,u as z,g as J}from"./index.jlplx4ex.js";import{u as W}from"./WpTable.iid7bkmr.js";import{F,P as O}from"./constants.hcfrsngk.js";import{d as j,a as H}from"./date.hhdpx3z9.js";import"./translations.b896ab1m.js";import{o as A,g as K,n as q}from"./helpers.cti0cl6i.js";import{u as Q}from"./Url.ejc0l7wu.js";import{B as G}from"./DatePicker.o51dzq1p.js";import{C as X,c as Z,e as $}from"./Caret.hnvbzqgq.js";import{C as Y}from"./Index.lexckf3q.js";import{S as ee}from"./Exclamation.f0pmbpi9.js";import{v as m,o as P,c as U,a as l,t as n,b as y,C as c,l as d,F as se,k as b,G as V,x as h,E as L}from"./runtime-dom.esm-bundler.h3clfjuw.js";import{_ as B}from"./_plugin-vue_export-helper.oebm7xum.js";import{_ as o,a as E}from"./default-i18n.hohxoesu.js";import{C as te}from"./Table.dpnj7vzp.js";import{C as ie}from"./Card.m3lmtg1o.js";import{C as oe}from"./Tooltip.jx4casvt.js";import{S as ae}from"./index.npoectbv.js";import"./ScrollTo.ntqtkazp.js";import"./Calendar.fbofsn3b.js";import"./pick.i0imowk1.js";import"./_baseSet.c1i96bqt.js";import"./toString.fflnj7pf.js";import"./_getTag.fj45ivwn.js";import"./debounce.nun852aa.js";import"./toNumber.j7ix6obd.js";import"./_baseTrim.ohbpllmu.js";import"./isEqual.czpd1uhn.js";import"./_baseIsEqual.h4qr0q1d.js";import"./numbers.busvl4mt.js";import"./Slide.dop8j51m.js";const le=""+window.__aioseoDynamicImportPreload__("images/import-from-csv.5tcutozs.png"),g="all-in-one-seo-pack",x={page:{url:null,priority:{label:"0.7",value:"0.7"},frequency:{label:o("weekly","all-in-one-seo-pack"),value:"weekly"},lastModified:I.now().toFormat("MM/dd/yyyy")}},re={emits:["cancel","process-page-add-and-update","process-page-edit"],setup(){const{decodeUrl:t}=Q();return{FREQUENCY_OPTIONS:F,PRIORITY_OPTIONS:O,dateJsToLocal:j,dateStringToLocalJs:H,decodeUrl:t,optionsStore:N(),rootStore:z()}},components:{BaseDatePicker:G,CoreAlert:X,CoreModal:Y,SvgCircleCheck:Z,SvgCircleClose:$,SvgCircleExclamation:ee},props:{inTable:Boolean,row:Object,index:Number,getPaginatedIndex:Function,getParsedPages:Function,rowPage:{type:Object,default(){return{}}},editedPage:{type:Object,default(){return{}}}},data(){return{csvFileImage:le,priorityOptionsValues:[],frequencyOptionsValues:[],filename:"",file:"",loading:!1,showImportModal:!1,page:A(x.page),errors:{url:{invalid:null,exists:null},upload:!1},isLoading:!1,strings:{placeholder:E(o("Enter a page URL, e.g. %1$s",g),`${this.rootStore.aioseo.urls.home}/new-page`),pageUrl:o("Page URL",g),priority:o("Priority",g),frequency:o("Frequency",g),lastModified:o("Last Modified",g),addPage:o("Add Page",g),importFromCSV:o("Import from CSV",g),saveChanges:o("Update Page",g),cancel:o("Cancel",g),importAdditionalPages:o("Import Additional Pages",g),modalDescription:E(o("You can import additional page URL's to your sitemap using a CSV file. The following 4 columns are required: %1$sPage URL, Priority, Frequency, Date Modified.%2$s",g),"<strong>","</strong>"),downloadSampleFile:o("Download Sample CSV File",g),imgAltText:o("CSV example file",g),fileUploadPlaceholder:o("Import from CSV file...",g),chooseAFile:o("Choose a File",g),import:o("Import",g),csvFileTypeRequired:o("The file that you've currently selected is not a CSV file.",g),invalidCSV:o("Unable to read CSV file. Please check if the file is valid and try again.",g),errors:{url:{invalid:o("Please enter a valid URL.",g),exists:o("URL already exists.",g)}}},sampleCSVData:`Page URL,Priority,Frequency,Date Modified\r
https://aioseo.com/pricing/,0.0,weekly,01/30/2022`}},computed:{importValidated(){return this.file.type==="text/csv"}},methods:{getAssetUrl:K,updateAdditionalPages(t){this.optionsStore.options.sitemap.general.additionalPages.pages=t},addPage(){const t=this.optionsStore.options.sitemap.general.additionalPages.pages;t.unshift(JSON.stringify(this.page)),this.updateAdditionalPages(t),this.page=A(x.page),this.errors.url.invalid=null,this.$emit("process-page-add-and-update")},editPage(t,s){if(this.page[t]=s,!q(this.page.url)&&this.page.url){this.errors.url.invalid=!0;return}if(this.pageExists(this.page.url)&&!this.inTable){this.errors.url.invalid=!1,this.errors.url.exists=!0;return}this.errors.url.invalid=!1,this.errors.url.exists=!1,this.inTable&&this.$emit("process-page-edit",this.page)},updateUrl(t){this.page.url="",this.page.url=this.decodeUrl(t)},updatePage(t){const s=this.optionsStore.options.sitemap.general.additionalPages.pages;s[this.getPaginatedIndex(t)]=JSON.stringify(this.page),this.updateAdditionalPages(s),this.$emit("process-page-add-and-update"),this.$emit("cancel",!0)},pageExists(t){return this.getParsedPages().some(({url:s})=>s===t)},reset(){this.errors.upload=!1,this.filename="",this.file=""},triggerFileUpload(){this.reset(),this.$refs.file.$el.querySelector("input").focus(),this.$refs.file.$el.querySelector("input").click()},async submitFile(){this.loading=!0;try{const t=await this.parseFile(),s=this.optionsStore.options.sitemap.general.additionalPages.pages;t.forEach(r=>{const a=this.prepareAdditionalPage(r);a&&s.unshift(JSON.stringify(a))}),this.updateAdditionalPages(s)}catch{this.errors.upload=this.strings.invalidCSV}this.reset(),this.page=A(x.page),this.showImportModal=!1,this.loading=!1},prepareAdditionalPage(t){const s=A(x.page),r=["MM/dd/yyyy"];return t.forEach(a=>{try{if(q(a)){const e=this.decodeUrl(a);if(!this.pageExists(e)){s.url=e;return}}if(this.priorityOptionsValues.includes(parseFloat(a))){s.priority.label=s.priority.value=a;return}if(this.frequencyOptionsValues.includes(a.toLowerCase())){s.frequency.label=s.frequency.value=a.toLowerCase();return}r.forEach(e=>{I.fromFormat(a,e).isValid&&(s.lastModified=a)})}catch{}}),s.url!==null?s:!1},parseFile(){const t=new FileReader;return t.readAsText(this.file),new Promise((s,r)=>{t.onerror=()=>{t.abort(),r(new DOMException)},t.onload=()=>{const e=t.result.split(/[\r\n]/).map(i=>i.split(","));s(e)}})},handleFileUpload(){this.file=this.$refs.file.$el.querySelector("input").files[0],this.file&&(this.filename=this.file.name,this.file.type!=="text/csv"&&(this.errors.upload=this.strings.csvFileTypeRequired))},closeImportModal(){this.reset(),this.showImportModal=!1},isDisabledDate(t){return t>I.now()},downloadSampleCSV(){this.showDownloadSample=!1;const t=new Blob([this.sampleCSVData],{type:"text/csv"}),s=URL.createObjectURL(t),r=document.createElement("a");r.href=s,r.download="aioseo-additional-pages-sample.csv",r.click()}},mounted(){this.priorityOptionsValues=O.map(t=>t.value),this.frequencyOptionsValues=F.map(t=>t.value),this.inTable&&(this.page=this.rowPage!==this.editedPage?this.rowPage:this.editedPage)}},ne={key:0,class:"page-input-header"},de={class:"page-url"},ue={class:"page-priority"},ce={class:"page-frequency"},ge={class:"page-last-modified"},pe={class:"page-row"},me={class:"page-url"},he={class:"append-icon"},fe={class:"page-priority"},Pe={class:"page-frequency"},ye={class:"page-last-modified"},_e={class:"page-input-footer"},be={key:0},ve={key:1},we={class:"aioseo-modal-body import-additional-pages"},Se={class:"alert"},ke=["innerHTML"],Ce=["src","alt"],De={class:"file-upload"};function Ue(t,s,r,a,e,i){const v=m("svg-circle-close"),w=m("svg-circle-check"),S=m("svg-circle-exclamation"),k=m("base-input"),C=m("core-alert"),D=m("base-select"),T=m("base-date-picker"),_=m("base-button"),f=m("core-modal");return P(),U("div",{class:V(["additional-pages-input",{"in-table":r.inTable}])},[r.inTable?y("",!0):(P(),U("div",ne,[l("div",de,n(e.strings.pageUrl),1),l("div",ue,n(e.strings.priority),1),l("div",ce,n(e.strings.frequency),1),l("div",ge,n(e.strings.lastModified),1)])),l("div",pe,[l("div",me,[c(k,{modelValue:e.page.url,onKeyup:s[0]||(s[0]=u=>i.editPage("url",u.target.value)),onInput:s[1]||(s[1]=u=>i.updateUrl(u.target.value)),size:"medium",placeholder:e.strings.placeholder,class:V(e.errors.url.invalid&&"aioseo-error"||e.page.url&&e.errors.url.exists&&"aioseo-warning"||e.page.url&&"aioseo-active")},{"append-icon":d(()=>[l("div",he,[e.isLoading?y("",!0):(P(),U(se,{key:0},[e.errors.url.invalid?(P(),b(v,{key:0})):y("",!0),!e.errors.url.invalid&&!e.errors.url.exists&&e.page.url?(P(),b(w,{key:1})):y("",!0),e.errors.url.exists&&e.page.url?(P(),b(S,{key:2})):y("",!0)],64))])]),_:1},8,["modelValue","placeholder","class"]),e.errors.url.invalid?(P(),b(C,{key:0,type:"red",size:"small"},{default:d(()=>[h(n(e.strings.errors.url.invalid),1)]),_:1})):y("",!0),e.errors.url.exists?(P(),b(C,{key:1,type:"yellow",size:"small"},{default:d(()=>[h(n(e.strings.errors.url.exists),1)]),_:1})):y("",!0)]),l("div",fe,[c(D,{size:"medium",modelValue:e.page.priority,"onUpdate:modelValue":s[2]||(s[2]=u=>i.editPage("priority",u)),options:a.PRIORITY_OPTIONS},null,8,["modelValue","options"])]),l("div",Pe,[c(D,{size:"medium",modelValue:e.page.frequency,"onUpdate:modelValue":s[3]||(s[3]=u=>i.editPage("frequency",u)),options:a.FREQUENCY_OPTIONS},null,8,["modelValue","options"])]),l("div",ye,[c(T,{type:"datetime",size:"large",dateFormat:"m/d/Y H:i:s",defaultValue:a.dateStringToLocalJs(e.page.lastModified),onChange:s[4]||(s[4]=u=>i.editPage("lastModified",a.dateJsToLocal(u,"MM/dd/yyyy HH:mm:ss"))),isDisabledDate:i.isDisabledDate},null,8,["defaultValue","isDisabledDate"])])]),l("div",_e,[r.inTable?(P(),U("div",be,[c(_,{type:"blue",size:"medium",onClick:s[5]||(s[5]=u=>i.updatePage(r.index)),disabled:e.errors.url.invalid||e.errors.url.exists||!e.page.url},{default:d(()=>[h(n(e.strings.saveChanges),1)]),_:1},8,["disabled"]),c(_,{type:"gray",size:"medium",onClick:s[6]||(s[6]=u=>t.$emit("cancel",!0))},{default:d(()=>[h(n(e.strings.cancel),1)]),_:1})])):y("",!0),r.inTable?y("",!0):(P(),U("div",ve,[c(_,{type:"blue",size:"small-table",onClick:i.addPage,disabled:e.errors.url.invalid||e.errors.url.exists||!e.page.url},{default:d(()=>[h(n(e.strings.addPage),1)]),_:1},8,["onClick","disabled"]),c(_,{type:"black",size:"small-table",onClick:s[7]||(s[7]=u=>e.showImportModal=!0)},{default:d(()=>[h(n(e.strings.importFromCSV),1)]),_:1})]))]),c(f,{show:e.showImportModal,onClose:i.closeImportModal,classes:["aioseo-add-additional-pages-modal"]},{headerTitle:d(()=>[h(n(e.strings.importAdditionalPages),1)]),body:d(()=>[l("div",we,[l("div",Se,[l("p",{innerHTML:e.strings.modalDescription},null,8,ke),l("a",{onClick:s[8]||(s[8]=L((...u)=>i.downloadSampleCSV&&i.downloadSampleCSV(...u),["stop"]))},n(e.strings.downloadSampleFile),1)]),l("img",{src:i.getAssetUrl(e.csvFileImage),alt:e.strings.imgAltText},null,8,Ce),e.errors.upload?(P(),b(C,{key:0,type:"red",class:"import-error"},{default:d(()=>[c(v),h(" "+n(e.errors.upload),1)]),_:1})):y("",!0),l("div",De,[c(k,{modelValue:e.filename,"onUpdate:modelValue":s[9]||(s[9]=u=>e.filename=u),size:"medium",onFocus:i.triggerFileUpload,placeholder:e.strings.fileUploadPlaceholder,class:V({"aioseo-error":e.errors.upload})},null,8,["modelValue","onFocus","placeholder","class"]),c(_,{type:"black",size:"medium",onClick:i.triggerFileUpload},{default:d(()=>[h(n(e.strings.chooseAFile),1)]),_:1},8,["onClick"])]),c(k,{type:"file",value:e.file,"onUpdate:modelValue":i.handleFileUpload,ref:"file"},null,8,["value","onUpdate:modelValue"]),c(_,{type:"blue",size:"medium",class:"import",onClick:i.submitFile,disabled:!e.file||!i.importValidated,loading:e.loading},{default:d(()=>[h(n(e.strings.import),1)]),_:1},8,["onClick","disabled","loading"])])]),_:1},8,["show","onClose"])],2)}const Le=B(re,[["render",Ue]]),p="all-in-one-seo-pack",Ae={setup(){const t="sitemap-additional-pages",{pageNumber:s,processChangeItemsPerPage:r,processPagination:a,processSort:e,resultsPerPage:i,searchTerm:v,wpTableKey:w,wpTableLoading:S}=W({changeItemsPerPageSlug:"sitemapAdditionalPages",fetchData:()=>Promise.resolve(),slug:"additionalPages",resultsPerPage:10,tableId:t});return{optionsStore:N(),pageNumber:s,processChangeItemsPerPage:r,processPagination:a,processSort:e,resultsPerPage:i,rootStore:z(),searchTerm:v,settingsStore:J(),tableId:t,wpTableKey:w,wpTableLoading:S}},components:{AddAdditionalPage:Le,CoreWpTable:te,CoreCard:ie,CoreTooltip:oe,CoreModal:Y,SvgTrash:ae},data(){return{page:{},editedPage:{},searchResults:null,deletingRow:!1,activeRow:-1,showDeleteModal:!1,shouldDeleteURL:null,selectedRows:null,bulkOptions:[{label:o("Delete",p),value:"delete"}],strings:{searchUrls:o("Search URLs",p),edit:o("Edit",p),delete:o("Delete",p),additionalPages:o("Additional Pages",p),additionalPagesTooltip:o("You can use this section to add any URLs to your sitemap which aren't a part of your WordPress installation. For example, if you have a contact form that you would like to be included on your sitemap you can enter the information manually.",p),areYouSureDeleteLink:o("Are you sure you want to delete this page?",p),areYouSureDeleteLinks:o("Are you sure you want to delete these pages?",p),thisWillRemoveLink:o("This will permanently remove this page from the additional pages sitemap.",p),thisWillRemoveLinks:o("This will permanently remove the selected pages from the additional pages sitemap.",p),yesDeleteLink:o("Delete Page",p),yesDeleteLinks:o("Delete Selected Pages",p),noChangedMind:o("No, I changed my mind",p)}}},computed:{currentPages(){return this.searchResults||this.getParsedPages()},rows(){const t=this.currentPages.map(r=>({url:r.url,priority:r.priority&&r.priority.label?r.priority.label:"",frequency:r.frequency&&r.frequency.label?r.frequency.label:"",lastModified:r.lastModified})),s=this.pageNumber===1?0:(this.pageNumber-1)*this.resultsPerPage;return t.slice(s,s+this.resultsPerPage)},totals(){return{page:1,pages:Math.ceil(this.currentPages.length/this.resultsPerPage),total:this.currentPages.length}},columns(){return[{slug:"url",label:o("Page URL",p)},{slug:"priority",label:o("Priority",p),width:"90px"},{slug:"frequency",label:o("Frequency",p),width:"90px"},{slug:"lastModified",label:o("Last Modified",p),width:"180px"},{slug:"page-actions",label:"",width:"40px"}]},areYouSureDeleteLink(){return Array.isArray(this.shouldDeleteURL)?this.strings.areYouSureDeleteLinks:this.strings.areYouSureDeleteLink},yesDeleteLink(){return Array.isArray(this.shouldDeleteURL)?this.strings.yesDeleteLinks:this.strings.yesDeleteLink},thisWillRemoveLink(){return Array.isArray(this.shouldDeleteURL)?this.strings.thisWillRemoveLinks:this.strings.thisWillRemoveLink}},methods:{processSearch(t){if(this.$refs.table.editRow(null),this.pageNumber=1,t===""){this.searchResults=null,this.searchTerm=null;return}t||(t=this.searchTerm),this.wpTableLoading=!0,this.searchResults=this.getParsedPages().filter(s=>s.url.includes(t)),this.searchTerm=t,this.wpTableLoading=!1},processBulkAction({action:t,selectedRows:s}){s.length&&t==="delete"&&(this.showDeleteModal=!0,this.shouldDeleteURL=s)},processPageDelete(){this.wpTableLoading=!0,Array.isArray(this.shouldDeleteURL)?this.shouldDeleteURL.forEach(t=>{this.deletePage(t)}):this.deletePage(this.shouldDeleteURL),this.showDeleteModal=!1,this.wpTableLoading=!1},deletePage(t){const s=[];this.getParsedPages().forEach(r=>{r.url!==t&&s.push(JSON.stringify(r))}),this.optionsStore.options.sitemap.general.additionalPages.pages=s,this.searchResults&&this.processSearch()},maybeProcessDelete(t){this.showDeleteModal=!0,this.shouldDeleteURL=t},processPageEdit(t){this.editedPage=t},processPageAddAndUpdate(){this.processSearch(this.searchTerm||"")},rowPage(t){return this.searchResults?this.searchResults[this.getPaginatedIndex(t)]:this.getParsedPages()[this.getPaginatedIndex(t)]},getPaginatedIndex(t){return(this.pageNumber-1)*this.resultsPerPage+t},getParsedPages(){return this.optionsStore.options.sitemap.general.additionalPages.pages.map(t=>JSON.parse(t))}}},xe={class:"aioseo-additional-pages"},Te=["onClick"],Re={class:"row-actions"},Ve=["onClick"],Ie=["onClick"],Me={class:"page-actions"},Fe={class:"aioseo-modal-body delete"},Oe={class:"reset-description"};function qe(t,s,r,a,e,i){const v=m("base-toggle"),w=m("add-additional-page"),S=m("svg-trash"),k=m("core-tooltip"),C=m("core-wp-table"),D=m("base-button"),T=m("core-modal"),_=m("core-card");return a.optionsStore.options.sitemap.general.enable?(P(),b(_,{key:0,slug:"additionalPages",toggles:a.optionsStore.options.sitemap.general.additionalPages.enable},{header:d(()=>[c(v,{modelValue:a.optionsStore.options.sitemap.general.additionalPages.enable,"onUpdate:modelValue":s[0]||(s[0]=f=>a.optionsStore.options.sitemap.general.additionalPages.enable=f)},null,8,["modelValue"]),l("span",null,n(e.strings.additionalPages),1)]),tooltip:d(()=>[h(n(e.strings.additionalPagesTooltip),1)]),default:d(()=>[l("div",xe,[c(w,{getPaginatedIndex:i.getPaginatedIndex,getParsedPages:i.getParsedPages,onProcessPageAddAndUpdate:i.processPageAddAndUpdate},null,8,["getPaginatedIndex","getParsedPages","onProcessPageAddAndUpdate"]),(P(),b(C,{ref:"table",class:"additional-pages-table",id:a.tableId,"bulk-options":e.bulkOptions,columns:i.columns,"initial-items-per-page":a.settingsStore.settings.tablePagination.sitemapAdditionalPages,"initial-page-number":a.pageNumber,key:a.wpTableKey,loading:a.wpTableLoading,rows:i.rows,"search-label":e.strings.searchUrls,"show-search":!0,totals:i.totals,"show-items-per-page":"",onPaginate:a.processPagination,onProcessBulkAction:i.processBulkAction,onProcessChangeItemsPerPage:a.processChangeItemsPerPage,onSearch:i.processSearch,onSortColumn:a.processSort},{url:d(({row:f,index:u,editRow:R})=>[l("a",{class:"post-title",href:"#",onClick:L(M=>R(u),["prevent","stop"])},n(f.url),9,Te),l("div",Re,[l("span",null,[l("a",{class:"edit",href:"#",onClick:L(M=>R(u),["prevent","stop"])},[l("span",null,n(e.strings.edit),1)],8,Ve),h(" | ")]),l("span",null,[l("a",{class:"delete",href:"#",onClick:L(M=>i.maybeProcessDelete(f.url),["prevent","stop"])},[l("span",null,n(e.strings.delete),1)],8,Ie)])])]),"edit-row":d(({index:f,editRow:u})=>[c(w,{index:f,rowPage:i.rowPage(f),editedPage:e.editedPage,getPaginatedIndex:i.getPaginatedIndex,getParsedPages:i.getParsedPages,inTable:"",onCancel:R=>u(null),onProcessPageAddAndUpdate:i.processPageAddAndUpdate,onProcessPageEdit:i.processPageEdit},null,8,["index","rowPage","editedPage","getPaginatedIndex","getParsedPages","onCancel","onProcessPageAddAndUpdate","onProcessPageEdit"])]),"page-actions":d(({row:f})=>[l("div",Me,[c(k,{type:"action"},{tooltip:d(()=>[h(n(e.strings.delete),1)]),default:d(()=>[c(S,{onClick:u=>i.maybeProcessDelete(f.url)},null,8,["onClick"])]),_:2},1024)])]),_:1},8,["id","bulk-options","columns","initial-items-per-page","initial-page-number","loading","rows","search-label","totals","onPaginate","onProcessBulkAction","onProcessChangeItemsPerPage","onSearch","onSortColumn"])),c(T,{show:e.showDeleteModal,"no-header":"",onClose:s[3]||(s[3]=f=>e.showDeleteModal=!1),classes:["aioseo-additional-pages-modal"]},{body:d(()=>[l("div",Fe,[l("button",{class:"close",onClick:s[1]||(s[1]=L(f=>e.showDeleteModal=!1,["stop"]))}),l("h3",null,n(i.areYouSureDeleteLink),1),l("div",Oe,n(e.strings.thisWillRemoveLink),1),c(D,{type:"blue",size:"medium",onClick:i.processPageDelete,loading:e.deletingRow},{default:d(()=>[h(n(i.yesDeleteLink),1)]),_:1},8,["onClick","loading"]),c(D,{type:"gray",size:"medium",onClick:s[2]||(s[2]=f=>e.showDeleteModal=!1)},{default:d(()=>[h(n(e.strings.noChangedMind),1)]),_:1})])]),_:1},8,["show"])])]),_:1},8,["toggles"])):y("",!0)}const fs=B(Ae,[["render",qe]]);export{fs as default};
