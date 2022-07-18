(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{325:function(t,e,i){"use strict";i.r(e);var a=i(3),v=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"display、visibility和opacity区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display、visibility和opacity区别"}},[t._v("#")]),t._v(" display、visibility和opacity区别")]),t._v(" "),e("h2",{attrs:{id:"共同点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#共同点"}},[t._v("#")]),t._v(" 共同点")]),t._v(" "),e("p",[t._v("都可以隐藏元素，让元素不可见")]),t._v(" "),e("h2",{attrs:{id:"区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),e("p",[e("strong",[t._v("display: none")])]),t._v(" "),e("ol",[e("li",[t._v("DOM 结构：浏览器不会渲染 display 属性为 none 的元素，不占据空间；")]),t._v(" "),e("li",[t._v("事件监听：无法进行 DOM 事件监听；")]),t._v(" "),e("li",[t._v("性能：动态改变此属性时会引起重排，性能较差；")]),t._v(" "),e("li",[t._v("继承：不会被子元素继承，毕竟子类也不会被渲染；")]),t._v(" "),e("li",[t._v("transition：transition 不支持 display。")])]),t._v(" "),e("p",[e("strong",[t._v("visibility: hidden")])]),t._v(" "),e("ol",[e("li",[t._v("DOM 结构：元素被隐藏，但是会被渲染不会消失，占据空间；")]),t._v(" "),e("li",[t._v("事件监听：无法进行 DOM 事件监听；")]),t._v(" "),e("li",[t._v("性能：动态改变此属性时会引起重绘，性能较高；")]),t._v(" "),e("li",[t._v("继承：会被子元素继承，子元素可以通过设置 visibility: visible; 来取消隐藏；")]),t._v(" "),e("li",[t._v("transition：transition 支持 visibility。")])]),t._v(" "),e("p",[e("strong",[t._v("opacity: 0")])]),t._v(" "),e("ol",[e("li",[t._v("DOM 结构：透明度为 100%，元素隐藏，占据空间；")]),t._v(" "),e("li",[t._v("事件监听：可以进行 DOM 事件监听；")]),t._v(" "),e("li",[t._v("性能：提升为合成层，不会触发重绘，性能较高；")]),t._v(" "),e("li",[t._v("继承：会被子元素继承,且，子元素并不能通过 opacity: 1 来取消隐藏；")]),t._v(" "),e("li",[t._v("transition：transition 支持 opacity。")])]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}}),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("display:none")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("visibility:hidden")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("opacity:0")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("页面中")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("不存在")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("存在")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("存在")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("重绘")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("会")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("会")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("不一定")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("重排")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("会")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不会")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不会")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("自身绑定事件")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不触发")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不触发")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("可触发")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("transition")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("不支持")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("子元素复原")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不能")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("能")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不能")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("被遮挡元素触发事件")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不影响")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不影响")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("影响")])])])])])])}),[],!1,null,null,null);e.default=v.exports}}]);