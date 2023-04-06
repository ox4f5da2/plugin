(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{377:function(s,t,a){"use strict";a.r(t);var n=a(3),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"npm发布流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm发布流程"}},[s._v("#")]),s._v(" npm发布流程")]),s._v(" "),t("h2",{attrs:{id:"写在最前面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最前面"}},[s._v("#")]),s._v(" 写在最前面")]),s._v(" "),t("p",[s._v("目前已经发布了属于自己的NPM包，如果发布新的后会更新：")]),s._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/npm/mylibs.html"}},[s._v("@karl_fang/mylibs")]),s._v("——这是一个JS库，打包了数学、数据结构、函数、URL和数组的常用函数")],1),s._v(" "),t("li",[t("RouterLink",{attrs:{to:"/npm/js数据结构.html"}},[s._v("@karl_fang/data-structure")]),s._v("——这个NPM包括了用JS封装常见的数据结构以及在JS语言中将链表和二叉树展示的辅助函数")],1)]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("也可以在右上角导航栏"),t("strong",[s._v("Guide")]),s._v("菜单中查看")])]),s._v(" "),t("h2",{attrs:{id:"注册npm官网账号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注册npm官网账号"}},[s._v("#")]),s._v(" 注册npm官网账号")]),s._v(" "),t("p",[s._v("npm官网：https://www.npmjs.com/")]),s._v(" "),t("p",[s._v("输入用户名、密码、邮箱")]),s._v(" "),t("h2",{attrs:{id:"建立文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建立文件"}},[s._v("#")]),s._v(" 建立文件")]),s._v(" "),t("ul",[t("li",[s._v("输入"),t("code",[s._v("npm init")]),s._v("，建立"),t("strong",[s._v("package.json")]),s._v("文件，配置如下：")])]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@karl_fang/mylibs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"This is a JS library that packages the common functions of mathematics, data structure, function and array."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo \\"Error: no test specified\\" && exit 1"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"keywords"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"javascript"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tools"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"author"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"karl_fang"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"license"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MIT"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("blockquote",[t("ul",[t("li",[s._v("name：一般与文件夹的名字相同")]),s._v(" "),t("li",[s._v("version：版本号")]),s._v(" "),t("li",[s._v("description：对该NPM包的描述")]),s._v(" "),t("li",[s._v("main：入口文件")]),s._v(" "),t("li",[s._v("scripts：设置快捷命令")]),s._v(" "),t("li",[s._v("keywords：该NPM包的关键词，类似网站的keywords")]),s._v(" "),t("li",[s._v("author：作者名")]),s._v(" "),t("li",[s._v("license：我也不太清楚各种license的区别，就写了MIT")])])]),s._v(" "),t("h2",{attrs:{id:"写js库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写js库"}},[s._v("#")]),s._v(" 写JS库")]),s._v(" "),t("p",[s._v("把JS按module导出，然后在入口文件"),t("strong",[s._v("index.js")]),s._v("中import导入，最后把所有的导出：")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ArrayTools "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/array/array.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" BinaryTree "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/dataStructure/binaryTree.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" LinkedList "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/dataStructure/linkedList.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" MinStack "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/dataStructure/minStack.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Sort "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/dataStructure/sort.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" MyFunctions "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/function/general.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" MyRegExp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/function/regRep.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" MyURL "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/function/URL.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" MathTools "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/math/math.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ArrayTools"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  BinaryTree"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  LinkedList"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  MinStack"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  Sort"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  MyFunctions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  MyRegExp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  MyURL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  MathTools\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h2",{attrs:{id:"写readme文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写readme文档"}},[s._v("#")]),s._v(" 写README文档")]),s._v(" "),t("h2",{attrs:{id:"本地登陆npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地登陆npm"}},[s._v("#")]),s._v(" 本地登陆NPM")]),s._v(" "),t("ul",[t("li",[s._v("输入命令")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" adduser\n")])])]),t("ul",[t("li",[s._v("输入NPM账号的用户名")]),s._v(" "),t("li",[s._v("输入密码")]),s._v(" "),t("li",[s._v("输入绑定NPM账号的邮箱")])]),s._v(" "),t("blockquote",[t("p",[s._v("如果遇到镜像源问题：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" ERR"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" code E403\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" ERR"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("403")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("403")]),s._v(" Forbidden - PUT https://registry.npmjs.org/flexing - Forbidden\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" ERR"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("403")]),s._v(" In "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("most")]),s._v(" cases, you or one of your dependencies are requesting\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" ERR"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("403")]),s._v(" a package version that is forbidden by your security policy\n")])])]),t("p",[s._v("可以输入命令更改到官方的源(E403)才行：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npmjs.org/\n")])])])]),s._v(" "),t("h2",{attrs:{id:"发布npm包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布npm包"}},[s._v("#")]),s._v(" 发布NPM包")]),s._v(" "),t("ul",[t("li",[s._v("输入"),t("code",[s._v("npm publish")])])]),s._v(" "),t("h2",{attrs:{id:"更新版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新版本"}},[s._v("#")]),s._v(" 更新版本")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("输入命令更新版本号")]),s._v(" "),t("ul",[t("li",[s._v("修订号，问题修正")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version patch \n")])])]),t("ul",[t("li",[s._v("次版本号，功能性新增")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version minor\n")])])]),t("ul",[t("li",[s._v("主版本号，不兼容的API 修改")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version major\n")])])])]),s._v(" "),t("li",[t("p",[s._v("发布输入")])])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" publish\n")])])]),t("blockquote",[t("p",[s._v("还会收到邮件，输入8位的OTPcode")]),s._v(" "),t("p",[s._v("如果NPM包的名字是@开头的那可能会报错，")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm ERR! publish Failed PUT 402\nnpm ERR! code E402\nnpm ERR! You must sign up for private packages :\n")])])]),t("p",[s._v("这个当你的包名为"),t("code",[s._v("@your-name/your-package")]),s._v("时才会出现，原因是当包名以"),t("code",[s._v("@your-name")]),s._v("开头时，"),t("code",[s._v("npm publish")]),s._v("会默认发布为私有包，但是 npm 的私有包需要付费，所以需要添加如下参数进行发布：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" publish --access public\n")])])])]),s._v(" "),t("h2",{attrs:{id:"补充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充"}},[s._v("#")]),s._v(" 补充")]),s._v(" "),t("p",[s._v("一般的NPM包应该至少包括入口文件"),t("strong",[s._v("index.js")]),s._v("，"),t("strong",[s._v("README")]),s._v("文档，"),t("strong",[s._v("package.json")]),s._v("文件")])])}),[],!1,null,null,null);t.default=r.exports}}]);