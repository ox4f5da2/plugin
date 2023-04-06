(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{357:function(t,v,_){"use strict";_.r(v);var r=_(3),e=Object(r.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"tcp三次握手和四次挥手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp三次握手和四次挥手"}},[t._v("#")]),t._v(" TCP三次握手和四次挥手")]),t._v(" "),v("h2",{attrs:{id:"tcp基础知识"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp基础知识"}},[t._v("#")]),t._v(" TCP基础知识")]),t._v(" "),v("ul",[v("li",[t._v("TCP（Transmission Control Protocol，传输控制协议）是一种"),v("strong",[t._v("面向连接的、可靠的、基于字节流的通信协议")]),t._v("，数据在传输前要建立连接，传输完毕后还要断开连接。")]),t._v(" "),v("li",[t._v("客户端在收发数据前要使用 connect() 函数和服务器建立连接。建立连接的目的是保证"),v("strong",[t._v("IP地址、端口、物理链路")]),t._v("等正确无误，为数据的传输开辟通道。")]),t._v(" "),v("li",[t._v("TCP建立连接时要传输三个数据包，俗称三次握手（Three-way Handshaking）")])]),t._v(" "),v("h2",{attrs:{id:"tcp数据报结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp数据报结构"}},[t._v("#")]),t._v(" TCP数据报结构")]),t._v(" "),v("ul",[v("li",[t._v("序号："),v("strong",[t._v("Seq")]),t._v("（Sequence Number）序号占32位，用来标识从计算机A发送到计算机B的数据包的序号，计算机发送数据时对此进行标记。")]),t._v(" "),v("li",[t._v("确认号："),v("strong",[t._v("Ack")]),t._v("（Acknowledge Number）确认号占32位，客户端和服务器端都可以发送，"),v("strong",[t._v("Ack = Seq + 1")]),t._v("。")]),t._v(" "),v("li",[t._v("标志位：每个标志位占用1Bit，共有6个，分别为 URG、"),v("strong",[t._v("ACK")]),t._v("、PSH、RST、"),v("strong",[t._v("SYN")]),t._v("、"),v("strong",[t._v("FIN")]),t._v("，具体含义如下：\n"),v("ul",[v("li",[t._v("URG：紧急指针（urgent pointer）有效")]),t._v(" "),v("li",[v("strong",[t._v("ACK：确认序号有效")])]),t._v(" "),v("li",[t._v("PSH：接收方应该尽快将这个报文交给应用层")]),t._v(" "),v("li",[t._v("RST：重置连接")]),t._v(" "),v("li",[v("strong",[t._v("SYN：建立一个新连接")])]),t._v(" "),v("li",[v("strong",[t._v("FIN：断开一个连接")])])])])]),t._v(" "),v("p",[t._v("如下图所示：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319132644853.png",alt:""}})]),t._v(" "),v("h2",{attrs:{id:"tcp的三次握手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp的三次握手"}},[t._v("#")]),t._v(" TCP的三次握手")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("首先 Client 端发送连接请求报文")])]),t._v(" "),v("li",[v("p",[t._v("Server 段接受连接后回复 ACK 报文，并为这次连接分配资源。")])]),t._v(" "),v("li",[v("p",[t._v("Client 端接收到 ACK 报文后也向 Server 段发生 ACK 报文，并分配资源，这样 TCP 连接就建立了。")])])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020031913392621.png",alt:""}})]),t._v(" "),v("h2",{attrs:{id:"为什么需要三次握手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要三次握手"}},[t._v("#")]),t._v(" 为什么需要三次握手")]),t._v(" "),v("p",[t._v("只有经过三次握手才能确认双发的收发功能都正常，缺一不可：")]),t._v(" "),v("ul",[v("li",[t._v("第一次握手（客户端发送 SYN 报文给服务器，服务器接收该报文）：客户端什么都不能确认；服务器确认了对方发送正常，自己接收正常")]),t._v(" "),v("li",[t._v("第二次握手（服务器响应 SYN 报文给客户端，客户端接收该报文）：客户端确认了：自己发送、接收正常，对方发送、接收正常；服务器确认了：对方发送正常，自己接收正常")]),t._v(" "),v("li",[t._v("第三次握手（客户端发送 ACK 报文给服务器）：客户端确认了：自己发送、接收正常，对方发送、接收正常； 服务器确认了：自己发送、接收正常，对方发送、接收正常")])]),t._v(" "),v("blockquote",[v("p",[t._v("三次握手的目的是建立可靠的通信信道，说到通讯，简单来说就是数据的发送与接收，而三次握手最主要的目的就是"),v("strong",[t._v("双方确认自己与对方的发送与接收是正常的")]),t._v("。")])]),t._v(" "),v("h2",{attrs:{id:"tcp的四次挥手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp的四次挥手"}},[t._v("#")]),t._v(" TCP的四次挥手")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("Client发送一个FIN，用来关闭Client到Server的数据传送，Client进入FIN_WAIT_1状态。")])]),t._v(" "),v("li",[v("p",[t._v("Server收到FIN后，发送一个ACK给Client，Server进入CLOSE_WAIT状态。")])]),t._v(" "),v("li",[v("p",[t._v("Server发送一个FIN，用来关闭Server到Client的数据传送，Server进入LAST_ACK状态。")])]),t._v(" "),v("li",[v("p",[t._v("Client收到FIN后，Client进入TIME_WAIT状态，发送ACK给Server，Server进入CLOSED状态，完成四次握手。")])])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319135917416.png",alt:""}})])])}),[],!1,null,null,null);v.default=e.exports}}]);