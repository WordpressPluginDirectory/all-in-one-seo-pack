import{u as P}from"./links.C572zDFG.js";import{B as V}from"./HighlightToggle.B8dVNbkJ.js";import{C as k}from"./Caret.CGwYaMo_.js";import{C as A}from"./Tooltip.CRFjFnpF.js";import{G as B,a as D}from"./Row.CHjKxnPP.js";import{P as N}from"./PostTypes.Cef6XkQ_.js";import{_ as S}from"./_plugin-vue_export-helper.BLXtEB-G.js";import{v as p,o as l,c as g,a as o,k as m,l as r,t,C as c,b as _,F as R,ac as w,B as y,aa as I}from"./runtime-core.esm-bundler.DMBo7TXk.js";const L={setup(){return{rootStore:P()}},components:{BaseHighlightToggle:V,CoreAlert:k,CoreTooltip:A,GridColumn:B,GridRow:D},mixins:[N],props:{type:{type:String,required:!0},options:{type:Object,required:!0},registeredPostTypes:Object,excluded:{type:Array,default(){return[]}}},data(){return{strings:{label:this.$t.__("Label:",this.$td),name:this.$t.__("Slug:",this.$td),noPostTypes:this.$t.__("No post types available.",this.$td),noTaxonomies:this.$t.__("No taxonomies available.",this.$td),noPostTypesDescription:this.$t.__("All post types are set to noindex or your site does not have any post types registered that are supported by this feature.",this.$td),noTaxonomiesDescription:this.$t.__("All taxonomies are set to noindex or your site does not have any taxonomies registered that are supported by this feature.",this.$td)}}},computed:{getRegisteredPostTypes(){return this.registeredPostTypes||this.rootStore.aioseo.postData},postTypes(){return this.getRegisteredPostTypes[this.type].filter(e=>!this.excluded.includes(e.name))}},methods:{emitInput(e){this.$emit("input",e)},updateValue(e,d){if(e){const u=this.options[this.type].included;u.push(d.name),this.options[this.type].included=u;return}const n=this.options[this.type].included.findIndex(u=>u===d.name);n!==-1&&this.options[this.type].included.splice(n,1)},getValue(e){return this.options[this.type].included.includes(e.name)},isActive(e){return this.options[this.type].included.findIndex(n=>n===e.name)!==-1}}},G={class:"aioseo-post-type-options-toggle"},O={class:"post-type-options-settings"},U={class:"aioseo-description"},j=o("br",null,null,-1);function q(e,d,n,u,a,i){const h=p("core-alert"),f=p("core-tooltip"),x=p("base-highlight-toggle"),T=p("grid-column"),b=p("grid-row");return l(),g("div",G,[o("div",O,[i.postTypes.length===0&&n.type==="postTypes"?(l(),m(h,{key:0,type:"blue"},{default:r(()=>[o("strong",null,t(a.strings.noPostTypes),1),c(" "+t(a.strings.noPostTypesDescription),1)]),_:1})):_("",!0),i.postTypes.length===0&&n.type==="taxonomies"?(l(),m(h,{key:1,type:"blue"},{default:r(()=>[o("strong",null,t(a.strings.noTaxonomies),1),c(" "+t(a.strings.noTaxonomiesDescription),1)]),_:1})):_("",!0),0<i.postTypes.length?(l(),m(b,{key:2},{default:r(()=>[(l(!0),g(R,null,w(i.postTypes,(s,v)=>(l(),m(T,{md:"6",key:v},{default:r(()=>[y(x,{size:"medium",active:i.isActive(s),name:s.name,type:"checkbox",modelValue:i.getValue(s),"onUpdate:modelValue":C=>i.updateValue(C,s)},{default:r(()=>[y(f,null,{tooltip:r(()=>[o("div",U,[c(t(a.strings.label)+" ",1),o("strong",null,t(s.label),1),j,c(" "+t(a.strings.name)+" ",1),o("strong",null,t(s.name),1)])]),default:r(()=>[o("span",{class:I(["icon dashicons",e.getPostIconClass(s.icon)])},null,2)]),_:2},1024),c(" "+t(s.label),1)]),_:2},1032,["active","name","modelValue","onUpdate:modelValue"])]),_:2},1024))),128))]),_:1})):_("",!0)])])}const Q=S(L,[["render",q]]);export{Q as C};
