(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{376:function(e,t,r){"use strict";r.r(t);var o=r(3),s=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),t("h2",{attrs:{id:"学习chrome插件的起因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#学习chrome插件的起因"}},[e._v("#")]),e._v(" 学习Chrome插件的起因")]),e._v(" "),t("p",[e._v("最近在学习Chrome插件开发，说到动机那可能就是，在目前开发的项目过程中，因为要在本地运行结果然后模拟登陆操作，那么就需要先登陆发布的网址登录进去，然后打开控制台获取对应字段的值，然后到本地的"),t("code",[e._v("http://localhost:8080")]),e._v("页面中先将原来的Cookie清除，然后就要配置一下项目中的cookie.js，把刚刚获取到的cookie复制进去，最后重新进行"),t("code",[e._v("npm run serve")]),e._v("一下，每次都这么操作就会显得很麻烦。那么就想着能不能自己写个插件进行快速操作呢？那么既然有了需求就要开始造轮子了。")]),e._v(" "),t("h2",{attrs:{id:"学习插件的心得体会"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#学习插件的心得体会"}},[e._v("#")]),e._v(" 学习插件的心得体会")]),e._v(" "),t("p",[e._v("之前没接触过，在第一次开发的过程中遇到很多坑，目前网上大多数教的是manifest V2版本的，但是CHrome官方已经禁止提交V2版本的插件同时要求进行版本迁移，这就导致开发的道路很艰辛，这就让我想起了之前学习小程序的时候，当时网上没那么多教程，都是看着官方文档一遍又一遍试错，才将代码跑通。现在学习Chrome插件开发也是一样的路程。用马克思主义发展的思想就是道路是曲折的，前途是光明的。那么就开始写插件吧，关于插件的如何编写，可以看看"),t("a",{attrs:{href:"https://developer.chrome.com/docs/extensions/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),t("OutboundLink")],1),e._v("，当然如果想发布插件，得先去注册成为插件开发者，然后交几美金，大概三四十块的样子，那么之后将插件写完后就可以发布了。对了写插件肯定要进行"),t("a",{attrs:{href:"https://blog.csdn.net/joy1793/article/details/109166008",target:"_blank",rel:"noopener noreferrer"}},[e._v("消息通信"),t("OutboundLink")],1),e._v("，可以看这篇文章。")]),e._v(" "),t("p",[e._v("发布的时候记得上传的图片必须是"),t("code",[e._v("640*400")]),e._v("或者"),t("code",[e._v("1280*800")]),e._v("的尺寸，因为不常用PS，主要懒得装，那么自己写了一个工具快速更改图片大小，学以致用，又花了一天时间写好了，可能非常喜欢这个工作吧，虽然遇到了很多的坑会暴躁，但是很开心。")]),e._v(" "),t("blockquote",[t("p",[e._v("其实学习插件并完成后发布，会有满满的成就感，用着自己开发的插件还是很激动的。")])]),e._v(" "),t("h2",{attrs:{id:"插件编写过程中遇到的坑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插件编写过程中遇到的坑"}},[e._v("#")]),e._v(" 插件编写过程中遇到的坑")]),e._v(" "),t("p",[e._v("把能想到的都写下来吧，方便以后规避一下：")]),e._v(" "),t("ul",[t("li",[e._v("manifest V2和manifest V3版本中"),t("code",[e._v("manifest.json")]),e._v("的配置有所改变，可以看官方的配置更改："),t("a",{attrs:{href:"https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Migrating to Manifest V3"),t("OutboundLink")],1),e._v("，不能看的可以看"),t("RouterLink",{attrs:{to:"/plugin/guide/V3的配置更改.html"}},[e._v("V3的配置更改")])],1),e._v(" "),t("li",[e._v("chrome提供的API的弃用")]),e._v(" "),t("li",[e._v("关于popup、content_script、background中的document的不同指向，以及不同部分所能调用的API也有所不同")]),e._v(" "),t("li",[e._v("V3中规定了不能在用内联script标签(部分)，同时也不能进行跨域请求，网上的做法是用的沙盒(sandbox)，但是没具体说明如何使用")]),e._v(" "),t("li",[e._v("图标的大小问题，要符合标准")]),e._v(" "),t("li",[e._v("最好不要在插件里用异步，因为会出现意想不到的BUG，虽然现在支持Promise了")]),e._v(" "),t("li",[e._v('一定要在manifest.json文件中的"permissions"进行权限填写，否则可能无法使用API')])])])}),[],!1,null,null,null);t.default=s.exports}}]);