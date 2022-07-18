(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{344:function(t,l,n){"use strict";n.r(l);var e=n(3),v=Object(e.a)({},(function(){var t=this,l=t._self._c;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"数据类型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),l("h2",{attrs:{id:"基本类型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#基本类型"}},[t._v("#")]),t._v(" 基本类型")]),t._v(" "),l("ul",[l("li",[t._v("String")]),t._v(" "),l("li",[t._v("Number(NaN是数字类型，可以用Number.isNaN检测)")]),t._v(" "),l("li",[t._v("Boolean")]),t._v(" "),l("li",[t._v("undefined")]),t._v(" "),l("li",[t._v("null")]),t._v(" "),l("li",[t._v("Symbol")]),t._v(" "),l("li",[t._v("Bigint(在数字后加n)")])]),t._v(" "),l("blockquote",[l("p",[t._v("Symbol和Bigint新加的，用typeof检测会显示"),l("code",[t._v("'symbol'")]),t._v("和"),l("code",[t._v("'bigint'")])])]),t._v(" "),l("h2",{attrs:{id:"引用类型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#引用类型"}},[t._v("#")]),t._v(" 引用类型")]),t._v(" "),l("ul",[l("li",[t._v("Object")]),t._v(" "),l("li",[t._v("Function")])]),t._v(" "),l("blockquote",[l("p",[t._v("let func = new Function ([arg1[, arg2[, ...g1N],] functionBody)\n换句话说，函数的参数(或更确切地说，各参数的名称)首先出现，而函数体在最后。所有参数都写成字符串形式。通过查看示例，可以更容易理解。这是一个有两个参数的函数:\nlet sum = new Function('a', 'b', 'returna + b');\nalert( sum(1,2)); // 3")]),t._v(" "),l("p",[l("strong",[t._v("但是一般不这么写，只是想记录还有这一种定义函数的方法")])])]),t._v(" "),l("ul",[l("li",[t._v("Array")])]),t._v(" "),l("h2",{attrs:{id:"判断值的类型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#判断值的类型"}},[t._v("#")]),t._v(" 判断值的类型")]),t._v(" "),l("ol",[l("li",[t._v("typeof：")])]),t._v(" "),l("blockquote",[l("p",[t._v("不能判断null与object以及object与array")])]),t._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("'object','boolean','number','string','null','undefined','symbol','bigint','function'\n")])])]),l("ol",{attrs:{start:"2"}},[l("li",[l("p",[t._v("instanceof 判断具体类型")])]),t._v(" "),l("li",[l("p",[t._v("===：")])])]),t._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("可以判断undefined, null\n")])])]),l("h2",{attrs:{id:"相关问题"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#相关问题"}},[t._v("#")]),t._v(" 相关问题")]),t._v(" "),l("ol",[l("li",[t._v("undefined和null的区别\n"),l("ul",[l("li",[t._v('undefined表示定义了未赋值，即undefined表示"缺少值"，就是此处应该有一个值')]),t._v(" "),l("li",[t._v('null表示定义并赋值了，只是值为null，即null表示"没有对象"，即该处不应该有值')]),t._v(" "),l("li",[t._v('JavaScript的最初版本是这样区分的：null是一个表示"无"的对象，转为数值时为0；undefined是一个表示"无"的原始值，转为数值时为NaN')])])])]),t._v(" "),l("blockquote",[l("p",[t._v("等于undefined的情况：")]),t._v(" "),l("ol",[l("li",[l("p",[t._v("变量被声明了，但没有赋值时，就等于undefined")])]),t._v(" "),l("li",[l("p",[t._v("调用函数时，应该提供的参数没有提供，该参数等于undefined")])]),t._v(" "),l("li",[l("p",[t._v("对象没有赋值的属性，该属性的值为undefined")])]),t._v(" "),l("li",[l("p",[t._v("函数没有返回值时，默认返回undefined。")])])]),t._v(" "),l("p",[t._v("等于null的情况：")]),t._v(" "),l("ol",[l("li",[l("p",[t._v("作为函数的参数，表示该函数的参数不是对象")])]),t._v(" "),l("li",[l("p",[t._v("作为对象原型链的终点")])])])]),t._v(" "),l("ol",{attrs:{start:"2"}},[l("li",[t._v("什么时候赋值为null\n"),l("ul",[l("li",[t._v("初始赋值，表明将要赋值为对象")]),t._v(" "),l("li",[t._v("结束前，让对象成为垃圾对象(被垃圾回收器回收)")])])])])])}),[],!1,null,null,null);l.default=v.exports}}]);