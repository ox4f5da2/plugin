(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{259:function(t,s,i){},290:function(t,s,i){"use strict";i(259)},311:function(t,s,i){"use strict";i.r(s);var o={props:{src:{type:String,default:""}},data(){return{videoSrc:this.src,ifShow:!1}},methods:{showVideo(){this.ifShow=!this.ifShow}}},e=(i(290),i(13)),c=Object(e.a)(o,(function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"showVideo"}},[s("span",{staticClass:"tip"},[t._v("点击观看示例视频")]),t._v(" "),s("img",{staticClass:"video",attrs:{src:t.$withBase("/images/common/video.svg"),alt:"示例视频",title:"示例视频"},on:{click:t.showVideo}}),t._v(" "),s("section",{class:{myVideo:!0,active:t.ifShow}},[s("video",{attrs:{controls:""}},[s("source",{attrs:{src:t.$withBase(t.videoSrc)}}),t._v("\n        你的浏览器不支持播放视频\n      ")])])])}),[],!1,null,"03f0ee8a",null);s.default=c.exports}}]);