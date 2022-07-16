(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{333:function(a,t,s){"use strict";s.r(t);var e=s(13),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"vue-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-2"}},[a._v("#")]),a._v(" Vue(2)")]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#_5-webpack"}},[a._v("5. webpack")]),t("ul",[t("li",[t("a",{attrs:{href:"#_5-1-什么是webpack"}},[a._v("5.1 什么是Webpack ?")])]),t("li",[t("a",{attrs:{href:"#_5-2-前端模块化"}},[a._v("5.2 前端模块化")])]),t("li",[t("a",{attrs:{href:"#_5-3-打包"}},[a._v("5.3 打包")])]),t("li",[t("a",{attrs:{href:"#_5-4-webpack和gulp有什么不同"}},[a._v("5.4 webpack和gulp有什么不同")])]),t("li",[t("a",{attrs:{href:"#_5-5-安装webpack"}},[a._v("5.5 安装webpack")])]),t("li",[t("a",{attrs:{href:"#_5-6-webpack-loader"}},[a._v("5.6 webpack-loader")])]),t("li",[t("a",{attrs:{href:"#_5-7-打包"}},[a._v("5.7 打包")])]),t("li",[t("a",{attrs:{href:"#_5-8-优化图片和js文件"}},[a._v("5.8 优化图片和js文件")])]),t("li",[t("a",{attrs:{href:"#_5-9-clean-webpack-plugin"}},[a._v("5.9 clean-webpack-plugin")])]),t("li",[t("a",{attrs:{href:"#_5-10-source-map"}},[a._v("5.10 Source Map")])])])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"_5-webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-webpack"}},[a._v("#")]),a._v(" 5. webpack")]),a._v(" "),t("h3",{attrs:{id:"_5-1-什么是webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-什么是webpack"}},[a._v("#")]),a._v(" 5.1 什么是Webpack ?")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("什么是webpack ?官方的解释:")]),a._v(" "),t("ul",[t("li",[a._v("At its core，webpack is a static module bundler for modern JavaScript applications.")])]),a._v(" "),t("blockquote",[t("p",[a._v("从本质上来讲，webpack是一个现代的JavaScript应用的静态模快打包工具。即模块和打包")])])])]),a._v(" "),t("h3",{attrs:{id:"_5-2-前端模块化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-前端模块化"}},[a._v("#")]),a._v(" 5.2 前端模块化")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("目前使用前端模块化的一些方案: AMD、CMD、CommonJS、ES6。")])]),a._v(" "),t("li",[t("p",[a._v("在ES6之前,我们要想进行模块化开发，就必须借助于其他的工具，让我们可以进行模块化开发。")])]),a._v(" "),t("li",[t("p",[a._v("并且在通过模块化开发完成了项目后，还需要处理模块间的各种依赖，并且将其进行整合打包。")])]),a._v(" "),t("li",[t("p",[a._v("而webpack其中一个核心就是让我们可能进行模块化开发，并且会帮助我们处理模块间的依赖关系。")])]),a._v(" "),t("li",[t("p",[a._v("而且不仅仅是JavaScript文件，我们的CSS、图片、json文件等等在webpack中都可以被当做模块来使用。")])]),a._v(" "),t("li",[t("p",[a._v("这就是webpack中模块化的概念。")])])]),a._v(" "),t("h3",{attrs:{id:"_5-3-打包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-打包"}},[a._v("#")]),a._v(" 5.3 打包")]),a._v(" "),t("ul",[t("li",[a._v("就是将webpack中的各种资源模块进行打包合并成一个或多个包(Bundle)。")]),a._v(" "),t("li",[a._v("并且在打包的过程中，还可以对资源进行处理，比如压缩图片，将scss转成css ，将ES6语法转成ES5语法，将TypeScript转成JavaScript等等操作。")])]),a._v(" "),t("h3",{attrs:{id:"_5-4-webpack和gulp有什么不同"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-webpack和gulp有什么不同"}},[a._v("#")]),a._v(" 5.4 webpack和gulp有什么不同")]),a._v(" "),t("ul",[t("li",[a._v("grunt/gulp更加强调的是前端流程的自动化，模块化不是它的核心。")]),a._v(" "),t("li",[a._v("webpack更加强调模块化开发管理，而文件压缩合并、预处理等功能是他附带的功能。")])]),a._v(" "),t("h3",{attrs:{id:"_5-5-安装webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-安装webpack"}},[a._v("#")]),a._v(" 5.5 安装webpack")]),a._v(" "),t("ol",[t("li",[a._v("安装node")]),a._v(" "),t("li",[a._v("输入"),t("code",[a._v("npm install webpack -g")]),a._v("  全局安装")]),a._v(" "),t("li",[a._v("然后在项目文件中安装webpack: "),t("code",[a._v("npm install webpack@5.42.1-D")])]),a._v(" "),t("li",[a._v("安装脚手架"),t("code",[a._v("npm install webpack-cli@4.9.0 -D")])]),a._v(" "),t("li",[a._v("新建package.json: "),t("code",[a._v("npm init -y")])]),a._v(" "),t("li",[a._v("新建src源代码目录，并新建index.html和index.js文件")]),a._v(" "),t("li",[a._v("新建web pack.config.js:")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" path "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'path'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("mode")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'development'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 入口文件的路径")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("entry")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("join")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("__dirname，"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./src/index.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 导出的文件配置")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("output")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 路径")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("path")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("join")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("__dirname，"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./dist'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 名字")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("filename")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'bundle.js'")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("devServer")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("open")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("ol",{attrs:{start:"8"}},[t("li",[a._v("如果想每次实时自动打包则安装,就安装webpack-dev-server")])]),a._v(" "),t("p",[t("code",[a._v("npm install webpack-dev-server@3.11.2 -D")])]),a._v(" "),t("ol",{attrs:{start:"9"}},[t("li",[a._v("在package.json文件中加入")])]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"webpack serve"')]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),t("ol",{attrs:{start:"10"}},[t("li",[t("p",[a._v("在终端输入npm run dev即可,当改变js文件的代码保存后即可自动打包")])]),a._v(" "),t("li",[t("p",[a._v("访问时使用http://localhost:8080/")])]),a._v(" "),t("li",[t("p",[a._v("index.html文件中引用"),t("code",[a._v("<script src='/bundle.js'><\/script>")])])])]),a._v(" "),t("h3",{attrs:{id:"_5-6-webpack-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-webpack-loader"}},[a._v("#")]),a._v(" 5.6 webpack-loader")]),a._v(" "),t("h4",{attrs:{id:"_5-6-1-css"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-1-css"}},[a._v("#")]),a._v(" 5.6.1 css")]),a._v(" "),t("ol",[t("li",[a._v("新建css文件夹,并新建index.css")]),a._v(" "),t("li",[a._v("在index.js里导入 --\x3e import '../css/index.css'")]),a._v(" "),t("li",[a._v("接着在终端里运行"),t("code",[a._v("npm run dev")]),a._v("，得到报错")])]),a._v(" "),t("blockquote",[t("ul",[t("li",[a._v("ERROR in ./css/index.css 1:3")]),a._v(" "),t("li",[a._v("Module parse failed: Unexpected token (1:3)")]),a._v(" "),t("li",[a._v("You may need an appropriate loader to handle this file type,currently no loaders are configured to process this file.See https://webpack.js.org/concepts#loaders")])])]),a._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[a._v("执行"),t("code",[a._v("npm install style-loader@3.0.0 css-loader@5.2.6 -D")]),a._v("，安装处理css文件的loader")]),a._v(" "),t("li",[a._v("在webpack.config.js的module -> rules数组中，添加loader规则:")])]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// test表示匹配的文件类型,use表示对应要调用的loader")]),a._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  rules"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("test"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" /\\.css$/，use"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("'style-loader'，'css-loader'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h4",{attrs:{id:"_5-6-2-图片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-2-图片"}},[a._v("#")]),a._v(" 5.6.2 图片")]),a._v(" "),t("ol",[t("li",[a._v("新建图片文件夹并放入图片")]),a._v(" "),t("li",[a._v("在index.html文件中写入"),t("code",[a._v('<img src="" alt="" class="box">')])]),a._v(" "),t("li",[a._v("在index.js文件中导入并使用")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("import logo from '../images/WechatIMG2.jpg'\n\n$('.box').attr('src', logo)\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[a._v("运行"),t("code",[a._v("npm install url-loader@4.1.1 file-loader@6.2.0 -D")])]),a._v(" "),t("li",[a._v("在webpack.config.js的module -> rules数组中，添加loader规则:")])]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// limit用来限定图片的大小，单位字节(byte)，如果小于这个阈值，图片会转成base64，否则还是保留图片的链接")]),a._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  rules"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("test"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" /\\.jpg|png|gif$/，use"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("'url-loader?limit="),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("22229")]),a._v("'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h3",{attrs:{id:"_5-7-打包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-7-打包"}},[a._v("#")]),a._v(" 5.7 打包")]),a._v(" "),t("ol",[t("li",[a._v("在package.json文件的scripts节点下，新增build命令:")])]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"webpack serve"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"webpack --mode production"')]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("运行"),t("code",[a._v("npm run build")])])]),a._v(" "),t("h3",{attrs:{id:"_5-8-优化图片和js文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-8-优化图片和js文件"}},[a._v("#")]),a._v(" 5.8 优化图片和js文件")]),a._v(" "),t("h4",{attrs:{id:"_5-8-1-图片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-8-1-图片"}},[a._v("#")]),a._v(" 5.8.1 图片")]),a._v(" "),t("p",[a._v("webpack.config.js中修改rules的use参数")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("module"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    rules"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n      ......\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("...，use"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("'url-loader?limit="),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("22229")]),a._v("&outputPath=images'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h4",{attrs:{id:"_5-8-2-js文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-8-2-js文件"}},[a._v("#")]),a._v(" 5.8.2 js文件")]),a._v(" "),t("p",[a._v("webpack.config.js中修改output的filename参数")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("output"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    path"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" path.join(__dirname，'./dist')"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    filename"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'js/bundle.js'\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),t("p",[a._v("然后修改index.html的"),t("code",[a._v("<script src='/js/bundle.js'><\/script>")])]),a._v(" "),t("h3",{attrs:{id:"_5-9-clean-webpack-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-9-clean-webpack-plugin"}},[a._v("#")]),a._v(" 5.9 clean-webpack-plugin")]),a._v(" "),t("p",[a._v("作用: 自动删除dist文件中的额外文件后再重新生成新的")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("运行"),t("code",[a._v("npm install --save--dev clean-webpack-plugin")]),a._v("或"),t("code",[a._v("npm install clean-webpack-plugin -D")])])]),a._v(" "),t("li",[t("p",[a._v("在webpack.config.js加入"),t("code",[a._v("const { CleanWebpackPlugin } = require('clean-webpack-plugin')")])])]),a._v(" "),t("li",[t("p",[a._v("在module.exports加入plugins")])])]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("module.exports = "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  ......\n  plugins"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    new CleanWebpackPlugin()\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h3",{attrs:{id:"_5-10-source-map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-10-source-map"}},[a._v("#")]),a._v(" 5.10 Source Map")]),a._v(" "),t("p",[t("strong",[a._v("Source Map就是一个信息文件,里面储存着位置信息。"),t("strong",[a._v("也就是说，Source Map文件中存储着压缩混淆后的代码，所对应的")]),a._v("转换前的位置")]),a._v("。出错的时候，除错工具将"),t("strong",[a._v("直接显示原始代码，而不是转换后的代码")]),a._v("，能够极大的方便后期的调试。")]),a._v(" "),t("p",[a._v("开发式打开source map在webpack.config.js加入")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// eval-source-map仅限在开发模式中使用")]),a._v("\nmodule.exports = "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  ......\n  devtool"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'source-map'\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("发布后让source map只定位报错的位置，但不暴露源码")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("module.exports = "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  ......\n  devtool"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'nosources-source-map'\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);