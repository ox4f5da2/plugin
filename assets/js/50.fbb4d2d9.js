(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{358:function(t,r,e){"use strict";e.r(r);var a=e(3),_=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"cdn"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[t._v("#")]),t._v(" CDN")]),t._v(" "),r("h2",{attrs:{id:"cdn是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdn是什么"}},[t._v("#")]),t._v(" CDN是什么")]),t._v(" "),r("p",[t._v("CDN(Content Delivery Network)是指内容分发网络。CDN是构建在现有网络基础之上的智能虚拟网络，依靠部署在各地的"),r("strong",[t._v("边缘服务器")]),t._v("，通过中心平台的负载均衡，内容分发，调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。")]),t._v(" "),r("blockquote",[r("p",[t._v("边缘服务器：接近用户的服务器")]),t._v(" "),r("p",[t._v("CDN服务器简单来说就是帮服务器近距离给用户分发网页内容的")])]),t._v(" "),r("h2",{attrs:{id:"分发内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分发内容"}},[t._v("#")]),t._v(" 分发内容")]),t._v(" "),r("p",[t._v("网页内容分为："),r("strong",[t._v("静态内容")]),t._v("和"),r("strong",[t._v("动态内容")])]),t._v(" "),r("ul",[r("li",[t._v("静态内容：网页上长期不需要改变的内容，比如某些图标和文字等")]),t._v(" "),r("li",[t._v("动态内容：有一部分是经常需要改变的，固定不了的，比如点赞数等")])]),t._v(" "),r("blockquote",[r("p",[t._v("即使是静态内容，也不是一直保存在CDN里面的，源服务器发送文件给CDN的时候就可以利用HTTP头部的"),r("strong",[t._v("cache-control")]),t._v("，这个头部可以设置文件的缓存形式，这样CDN就知道哪些需要保存，哪些不能以及哪些需要保存多久")])]),t._v(" "),r("h2",{attrs:{id:"分发流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分发流程"}},[t._v("#")]),t._v(" 分发流程")]),t._v(" "),r("p",[t._v("静态内容服务：")]),t._v(" "),r("ul",[r("li",[t._v("CDN没有网站的源内容的，因此源服务器就会把静态内容"),r("strong",[t._v("提前备份给CDN")]),t._v("（也叫push），这样在世界各地用户需要访问网页的时候就近的CDN服务器就会吧静态内容提供给用户")]),t._v(" "),r("li",[t._v("如果源服务器"),r("strong",[t._v("没有把静态内容提前提前备份给CDN")]),t._v("， 那么当用户访问的时候，CDN就得去问源服务器索取相应的静态内容（也叫pull），源服务器可以让CDN备份，有了备份后的操作就如同第一个所述")])]),t._v(" "),r("p",[t._v("动态内容服务：")]),t._v(" "),r("ul",[r("li",[t._v("CDN服务器可以提供"),r("strong",[t._v("时间服务")]),t._v("，万一源服务器网络不稳定，时间久没办法同步")])]),t._v(" "),r("blockquote",[r("p",[t._v("CDN的布局无形中给服务器增加一道墙")])]),t._v(" "),r("h2",{attrs:{id:"获取cdn资源服务器的ip"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#获取cdn资源服务器的ip"}},[t._v("#")]),t._v(" 获取CDN资源服务器的IP")]),t._v(" "),r("ul",[r("li",[t._v("假如没有CDN，访问资源时会使用DNS进行解析获取资源服务器的IP地址进行数据交互。"),r("strong",[t._v("传统模式下DNS的调度过程")]),t._v("可以参考"),r("a",{attrs:{href:"./DNS%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90%E8%BF%87%E7%A8%8B"}},[t._v("DNS域名解析过程")]),t._v("。")]),t._v(" "),r("li",[t._v("CDN是构建在承载网上的一个Cache应用层，也就是CDN作为用户和网站服务器之间的Cache来参与整个过程。其中一种常见的调度方案就是"),r("strong",[t._v("DNS调度")]),t._v("，前半部分和传统模式类似，重要的区别在于专用DNS调度服务器的出现。")])]),t._v(" "),r("h2",{attrs:{id:"专用cdn调度过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#专用cdn调度过程"}},[t._v("#")]),t._v(" 专用CDN调度过程：")]),t._v(" "),r("ol",[r("li",[r("strong",[t._v("网站去CDN服务商进行域名加速")]),t._v("，比如为源站"),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//abc.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://abc.com"),r("OutboundLink")],1),t._v("到阿里云进行域名加速，配置完成后阿里云会自动关联生成加速域名的别名如"),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//abc.com.aliyuncdn.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://abc.com.aliyuncdn.net"),r("OutboundLink")],1),t._v("，这个别名也称为CNAME。由于加速域名已经进行了CDN的"),r("strong",[t._v("CNAME")]),t._v("配置，在"),r("strong",[t._v("权威DNS服务器的解析下得到的并不是IP地址，而是CNAME")]),t._v("。")]),t._v(" "),r("li",[r("strong",[t._v("权威DNS服务器的请求转发")]),t._v("，当用户访问"),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//abc.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://abc.com"),r("OutboundLink")],1),t._v("时，传统的权威DNS服务器对"),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//abc.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://abc.com"),r("OutboundLink")],1),t._v("进行解析时得到的是"),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//abc.com.aliyuncdn.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://abc.com.aliyuncdn.net"),r("OutboundLink")],1),t._v("这个配置的CNAME，从而通过CNAME顺利将请求转到CDN服务商专用的DNS服务器，由该服务器返回CDN的资源节点。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-cc4ae0254317ae8fe6d07cd2f08a535f_1440w.jpg",alt:""}})]),t._v(" "),r("blockquote",[r("ul",[r("li",[t._v("CNAME记录，也叫别名记录，比如"),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//www.xx.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.xx.com"),r("OutboundLink")],1),t._v("的别名是"),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//www.yy.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.yy.com"),r("OutboundLink")],1),t._v("，CNAME记录是一种指向关系，把"),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//www.yy.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.yy.com"),r("OutboundLink")],1),t._v("指向了"),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//www.xx.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.xx.com"),r("OutboundLink")],1),t._v("，一个域名可以有多个别名，存在多对一的关系。")]),t._v(" "),r("li",[t._v("A记录，即Address记录，我们可以把它理解为一种域名和IP地址的映射关系。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-e3c900b743584145fd0b7c3ab8a9e96b_1440w.jpg",alt:""}})])]),t._v(" "),r("h2",{attrs:{id:"安全性和可靠性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安全性和可靠性"}},[t._v("#")]),t._v(" 安全性和可靠性")]),t._v(" "),r("p",[t._v("防止DDOS攻击：")]),t._v(" "),r("p",[t._v("布局多台CDN服务器在各个地方，然后监控这些CDN服务器的负载情况，如果某台服务器超载了就会把用户那边的请求转移到没有超载的CDN服务器那边，为的就是"),r("strong",[t._v("平均分配网络流量（也叫负载均衡）")]),t._v("。")]),t._v(" "),r("p",[t._v("采用何种方式转移流量：")]),t._v(" "),r("p",[t._v("采用任播方式 ，用了这种方式以后，服务器对外都"),r("strong",[t._v("拥有同一个IP")]),t._v("，如果这个IP收到用户请求，那么请求就会由距离用户的最近的服务器来响应，因此，利用任播的技术把流量转移到另外没有超载的服务器上就可以缓解了。")])])}),[],!1,null,null,null);r.default=_.exports}}]);