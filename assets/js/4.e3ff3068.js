(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{239:function(t,e,s){"use strict";e.a=function(){let t=navigator.userAgent,e=/(?:Windows Phone)/.test(t),s=/(?:SymbianOS)/.test(t)||e,i=/(?:Android)/.test(t),r=/(?:Firefox)/.test(t),n=(/(?:Chrome|CriOS)/.test(t),/(?:iPad|PlayBook)/.test(t)||i&&!/(?:Mobile)/.test(t)||r&&/(?:Tablet)/.test(t)),o=/(?:iPhone)/.test(t)&&!n;return{isTablet:n,isPhone:o,isAndroid:i,isPc:!o&&!i&&!s}}},240:function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));const i=function(t){return/^https?/.test(t)?t:"https://fang-6g2x00mca935d11b-1305708135.tcloudbaseapp.com/Karl_Doc_vuepress"+t}},267:function(t,e,s){},303:function(t,e,s){"use strict";s(267)},322:function(t,e,s){"use strict";s.r(e);var i=s(240),r=s(239),n={props:{src:{type:String,require:!0},title:{default:"",type:String},scale:{default:1,type:Number},threshold:{type:Number,default:.5},position:{default:"left",type:String}},mounted(){this.observer=new IntersectionObserver(this.handle,{threshold:this.threshold}),this.observer.observe(this.$refs.myimg)},data:()=>({observer:null}),methods:{$myBase:i.a,handle(t){const{isPhone:e,isAndroid:s}=Object(r.a)(),i=s||e?1:this.scale;if(t[0].isIntersecting){const t=this.$refs.myimg,e=t.children[0];e.src=e.dataset.url,e.addEventListener("load",()=>{let s=null;s=setTimeout(()=>{t.style.cssText=`\n              width: calc(100% * ${i});\n              height: calc(100% * ${i});\n            `,e.classList.remove("hidden"),this.observer.unobserve(this.$refs.myimg),clearTimeout(s)},1e3)}),e.addEventListener("error",()=>e.src=this.$withBase("/images/common/imgError.svg"))}}}},o=(s(303),s(3)),a=Object(o.a)(n,(function(){var t=this._self._c;return t("div",{ref:"myimg",staticClass:"myImg origin"},[t("img",{staticClass:"normal hidden",attrs:{"data-url":this.$myBase(this.src),alt:this.title,title:this.title}})])}),[],!1,null,"77db8a9a",null);e.default=a.exports}}]);