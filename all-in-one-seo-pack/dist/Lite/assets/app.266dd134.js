import"./js/vue2.45bb6cb6.js";import{c as a,d as i,o as c,Y as l}from"./js/vue.esm-bundler.f425fb9b.js";import{_ as u}from"./js/_plugin-vue_export-helper.c114f5e4.js";const p={data(){return{display:!1,interval:null}},methods:{addMenuHighlight(){const e=document.querySelector("#toplevel_page_aioseo");if(!e)return;e.querySelectorAll(".wp-submenu li").forEach(t=>{const o=t.querySelector("a");if(!o)return;const n=o.querySelector(".aioseo-menu-highlight");if(n){t.classList.add("aioseo-submenu-highlight"),n.classList.contains("red")&&t.classList.add("red");const s=t.querySelector("a");s&&n.classList.contains("lite")&&s.setAttribute("target","_blank")}})}},created(){this.addMenuHighlight()}},d={key:0};function m(e,r,t,o,n,s){return n.display?(c(),a("div",d)):i("",!0)}const _=u(p,[["render",m]]);document.getElementById("aioseo-admin")&&l({..._,name:"Standalone/App"}).mount("#aioseo-admin");
