import{I as h,b as m,f as L,d as q,u as P,z as M,C as T,E as A}from"./links.C2upUfsO.js";import{s as B}from"./metabox.Ddeb-6g9.js";import{m as t,e as N,t as W,f as U,h as z}from"./postSlug.aEbF4K7B.js";const D=()=>{let e=!1;if(document.querySelector("#wp-content-wrap.tmce-active")){const r=window.setInterval(()=>{!window.tinyMCE||!window.tinyMCE.activeEditor||(window.clearInterval(r),t(),window.tinyMCE.get("content").on("keyup",()=>{t(500)}),window.tinyMCE.get("content").on("paste",()=>{t(500)}))},50)}else{const r=document.querySelector("textarea#content");r&&(r.addEventListener("keyup",()=>{t(500)}),r.addEventListener("paste",()=>{t(500)}))}const n=document.querySelector("#post input#title");n&&n.addEventListener("input",()=>{t(500)}),C();const i=document.querySelector("#post_name");i&&i.addEventListener("change",()=>{t(500)});const o=document.querySelector("#edit-slug-buttons");o&&o.addEventListener("click",r=>{r.target===o.querySelector("#edit-slug-buttons button.save")&&t()});const a=document.querySelector("#categorychecklist");a&&a.addEventListener("change",function(){N()});const c=function(r){r.forEach(w=>{if(w.attributeName==="class"){if(document.querySelector("#wp-content-wrap.tmce-active")){if(!window.tinyMCE)return;window.tinyMCE.get("content").on("keyup",()=>{t(500)}),window.tinyMCE.get("content").on("paste",()=>{t(500)})}const l=document.querySelector("#content");l&&(l.addEventListener("keyup",()=>{t(500)}),l.addEventListener("paste",()=>{t(500)})),C()}})},d=new MutationObserver(c),u=document.querySelector("#wp-content-wrap");u&&d.observe(u,{attributes:!0});const p=document.querySelector("#wp-excerpt-wrap");p&&d.observe(p,{attributes:!0}),setInterval(()=>{e&&(e=!1)},500),W()&&!h()&&(e=!0,setInterval(()=>{window.tinyMCE&&window.tinyMCE.activeEditor&&window.tinyMCE.activeEditor.isDirty()&&!e&&(e=!0,t())},500))},C=()=>{if(document.querySelector("#wp-excerpt-wrap.tmce-active")){const n=window.setInterval(()=>{window.tinyMCE&&(window.clearInterval(n),t(),window.tinyMCE.get("excerpt").on("keyup",()=>{t(500)}),window.tinyMCE.get("excerpt").on("paste",()=>{t(500)}))},50)}const e=document.querySelector("#post textarea#excerpt");e&&(e.addEventListener("keyup",()=>{t(500)}),e.addEventListener("paste",()=>{t(500)}))},O=()=>{t(),window.wp.data.subscribe(()=>{t(500);const e=window.wp.data.select("core/editor").isSavingPost(),n=window.wp.data.select("core/editor").isAutosavingPost();if(e&&!n){const i=m();i.isDirty=!1,t()}})},I=()=>{const e=L();return(e==null?void 0:e.isUnlicensed)||!1},k=()=>{var y,E,v,S,g,x,b,_;let e="",n="",i="",o=[],a="";const c=q(),d=m(),u=document.getElementById("_sku");u&&(e=u.value,c.updateWooCommerceSku(e));const p=document.getElementById("_sale_price"),r=document.getElementById("_regular_price");p&&(n=p.value),!n&&r&&(n=r.value);const l=((E=(y=P().aioseo.data)==null?void 0:y.wooCommerce)==null?void 0:E.currencySymbol)||"$"+parseFloat(n||0).toFixed(2);if(c.updateWooCommercePrice(l),o=document.querySelectorAll('#post input[name="tax_input[product_brand][]"]:checked'),o.length||(o=document.querySelectorAll('#post input[name="tax_input[pwb-brand][]"]:checked')),o.length){if(i!==o[0].parentNode.innerText&&(i=o[0].parentNode.innerText,c.updateWooCommerceBrand(o[0].parentNode.innerText)),(S=(v=d.currentPost)==null?void 0:v.primary_term)!=null&&S["pwb-brand"]){const s=document.getElementById(`in-pwb-brand-${d.currentPost.primary_term["pwb-brand"]}`);(g=s==null?void 0:s.parentNode)!=null&&g.innerText&&c.updateWooCommerceBrand(s.parentNode.innerText)}}else c.updateWooCommerceBrand("");const f=document.querySelectorAll('#post input[name="tax_input[product_cat][]"]:checked');if(f.length&&(a=f[0].parentNode.innerText),(b=(x=d.currentPost)==null?void 0:x.primary_term)!=null&&b.product_cat){const s=document.getElementById(`in-product_cat-${d.currentPost.primary_term.product_cat}`);a=((_=s==null?void 0:s.parentNode)==null?void 0:_.innerText)||""}c.updateTaxonomyTitle(a)};window.addEventListener("DOMContentLoaded",()=>{I()||k()});const $=()=>{I()||window.addEventListener("change",e=>{e.target.tagName==="INPUT"&&k()})},G=(e,n=!0)=>{if(!B())return;t();const i=m();if(i.currentPost.context==="term")U();else if(P().ping(),n&&i.savePostState(),M()){const a=window.setInterval(()=>{window.wp.data.select("core/editor").getCurrentPost().id&&(window.clearInterval(a),O())},50)}else h()&&$(),(T()||A())&&D(),z()};export{G as l};
