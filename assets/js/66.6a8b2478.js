(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{371:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"v3的配置更改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v3的配置更改"}},[t._v("#")]),t._v(" V3的配置更改")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#manifest-version"}},[t._v("Manifest version")])]),s("li",[s("a",{attrs:{href:"#service-worker"}},[t._v("Service worker")])]),s("li",[s("a",{attrs:{href:"#host-permissions"}},[t._v("Host permissions")])]),s("li",[s("a",{attrs:{href:"#content-security-policy-csp"}},[t._v("Content security policy(CSP)")])]),s("li",[s("a",{attrs:{href:"#action-api-unification"}},[t._v("Action API unification")])]),s("li",[s("a",{attrs:{href:"#web-accessible-resources"}},[t._v("Web-accessible resources")])]),s("li",[s("a",{attrs:{href:"#写在最后"}},[t._v("写在最后")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"manifest-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manifest-version"}},[t._v("#")]),t._v(" Manifest version")]),t._v(" "),s("p",[t._v("更改"),s("code",[t._v('"manifest_version"')]),t._v("元素的值是升级扩展的关键。这决定了您使用的是 Manifest V2 还是 Manifest V3 功能集：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Manifest V2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ...\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"manifest_version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Manifest V3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ...\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"manifest_version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"service-worker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-worker"}},[t._v("#")]),t._v(" Service worker")]),t._v(" "),s("p",[t._v("在 Manifest V3 中，背景页面现在是"),s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/API/Service_Worker_API",target:"_blank",rel:"noopener noreferrer"}},[s("em",[t._v("服务工作者")]),s("OutboundLink")],1),t._v("。"),s("code",[t._v('"background"')]),t._v("在该字段下注册服务人员。此字段使用"),s("code",[t._v('"service_worker"')]),t._v("指定单个 JavaScript 文件的键。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Manifest V2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ...\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"background"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"backgroundContextMenus.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"backgroundOauth.js"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"persistent"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Manifest V3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ...\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"background"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"service_worker"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"background.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//optional")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("即使 Manifest V3 不支持多个后台脚本，您也可以通过指定选择将服务工作者声明为"),s("a",{attrs:{href:"https://web.dev/es-modules-in-sw/#static-imports-only",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES 模块"),s("OutboundLink")],1),s("code",[t._v('"type": "module"')]),t._v("，这允许您导入更多代码。")])]),t._v(" "),s("h2",{attrs:{id:"host-permissions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#host-permissions"}},[t._v("#")]),t._v(" Host permissions")]),t._v(" "),s("p",[t._v("在 Manifest V3 中，您需要将主机权限和可选主机权限与其他权限分开指定。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Manifest V2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"permissions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tabs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bookmarks"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.blogger.com/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"optional_permissions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unlimitedStorage"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*://*/*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Manifest V3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"permissions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tabs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bookmarks"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"optional_permissions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unlimitedStorage"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"host_permissions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.blogger.com/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"optional_host_permissions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*://*/*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("将匹配模式移至"),s("code",[t._v('"host_permissions"')]),t._v("不影响"),s("a",{attrs:{href:"https://developer.chrome.com/docs/extensions/mv3/content_scripts/#static-declarative",target:"_blank",rel:"noopener noreferrer"}},[t._v("内容脚本"),s("OutboundLink")],1),t._v("。内容脚本匹配模式保留在"),s("code",[t._v('"content_scripts.matches"')]),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"content-security-policy-csp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#content-security-policy-csp"}},[t._v("#")]),t._v(" Content security policy(CSP)")]),t._v(" "),s("p",[t._v("扩展的"),s("a",{attrs:{href:"https://content-security-policy.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("内容安全策略"),s("OutboundLink")],1),t._v("(CSP) 在 Manifest V2 中指定为字符串；在 Manifest V3 中，它是一个对象，其成员代表替代 CSP 上下文：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Manifest V2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ...\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content_security_policy"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),t._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Manifest V3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ...\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content_security_policy"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extension_pages"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sandbox"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[s("code",[t._v("extension_pages")])]),t._v("：此政策涵盖您的扩展程序中的页面，包括 html 文件和服务人员。")]),t._v(" "),s("p",[t._v("这些页面类型由"),s("code",[t._v("chrome-extension://")]),t._v("协议提供。例如，您的扩展程序中的一个页面是"),s("code",[t._v("chrome-extension://EXTENSION_ID/foo.html")]),t._v(".")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("sandbox")])]),t._v("：此政策涵盖您的扩展程序使用的任何"),s("a",{attrs:{href:"https://developer.chrome.com/docs/extensions/mv3/manifest/sandbox/",target:"_blank",rel:"noopener noreferrer"}},[t._v("沙盒扩展程序页面"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("此外，Manifest V3 不允许"),s("code",[t._v("extension_pages")]),t._v("Manifest V2 中允许的某些 CSP 修改。"),s("code",[t._v("script-src,")]),t._v(" "),s("code",[t._v("object-src")]),t._v("和"),s("code",[t._v("worker-src")]),t._v("指令只能具有以下值：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("self")])]),t._v(" "),s("li",[s("code",[t._v("none")])]),t._v(" "),s("li",[t._v("任何 localhost 源、（"),s("code",[t._v("http://localhost")]),t._v("、"),s("code",[t._v("http://127.0.0.1")]),t._v("或这些域上的任何端口）")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[s("code",[t._v("script-src,")]),t._v(" "),s("code",[t._v("object-src")]),t._v("都不允许更改，只有"),s("code",[t._v("worker-src")]),t._v("能更改，不能用XHR但是可以用fetch")])]),t._v(" "),s("p",[t._v("CSP 修改"),s("code",[t._v("sandbox")]),t._v("没有这样的新限制。")]),t._v(" "),s("p",[t._v("从 Chrome 10.2 开始，Manifest V3 扩展可以包含"),s("code",[t._v("wasm-unsafe-eval")]),t._v("在 CSP 中，以使用作为扩展的一部分捆绑的 WebAssembly 文件。")]),t._v(" "),s("h2",{attrs:{id:"action-api-unification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#action-api-unification"}},[t._v("#")]),t._v(" Action API unification")]),t._v(" "),s("p",[t._v("在 Manifest V2 中，有两种不同的 API 来实现操作："),s("code",[t._v('"browser_action"')]),t._v("和"),s("code",[t._v('"page_action"')]),t._v(". 这些 API 在引入时扮演了不同的角色，但随着时间的推移它们变得多余，因此在 Manifest V3 中，我们将它们统一为单个"),s("code",[t._v('"action"')]),t._v("API：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Manifest V2")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// manifest.json")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"browser_action"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"page_action"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// background.js")]),t._v("\nchrome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("browserAction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onClicked"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("tab")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nchrome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageAction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onClicked"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("tab")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Manifest V3")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// manifest.json")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"action"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// background.js")]),t._v("\nchrome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onClicked"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("tab")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"web-accessible-resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-accessible-resources"}},[t._v("#")]),t._v(" Web-accessible resources")]),t._v(" "),s("p",[t._v("此更改将扩展资源的访问限制为特定站点/扩展。**您现在提供了一个对象数组，**而不是提供文件列表，每个对象都可以映射到一组资源到一组 URL 或扩展 ID：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Manifest V2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ...\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"web_accessible_resources"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    RESOURCE_PATHS\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Manifest V3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ...\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"web_accessible_resources"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"resources"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("RESOURCE_PATHS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"matches"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MATCH_PATTERNS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extension_ids"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("EXTENSION_IDS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"use_dynamic_url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" boolean "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//optional")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("替换以下内容：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("RESOURCE_PATHS")]),t._v(": 字符串列表，每个字符串都包含从扩展的根目录到给定资源的相对路径。")]),t._v(" "),s("li",[s("code",[t._v("MATCH_PATTERNS")]),t._v("：字符串列表，每个字符串都包含一个"),s("a",{attrs:{href:"https://developer.chrome.com/docs/extensions/mv3/match_patterns/",target:"_blank",rel:"noopener noreferrer"}},[t._v("匹配模式"),s("OutboundLink")],1),t._v("，指定哪些站点可以访问这组资源。")]),t._v(" "),s("li",[s("code",[t._v("EXTENSION_IDS")]),t._v("：字符串列表，每个字符串都包含给定扩展的 ID。")])]),t._v(" "),s("p",[t._v("以前，适用于所有网站和扩展的 Web 可访问资源列表。这为指纹识别或无意资源访问创造了机会。更新后的 API 让扩展更严格地控制其他站点或扩展可以访问扩展资源的内容。")]),t._v(" "),s("p",[t._v("有关使用信息，请参阅"),s("a",{attrs:{href:"https://developer.chrome.com/docs/extensions/mv3/manifest/web_accessible_resources/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web 可访问资源"),s("OutboundLink")],1),t._v("文档")]),t._v(" "),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),s("p",[t._v("其实manifest V3已经弃用了许多API，就不列出来了，可以去搜搜，当然V3还有其他的更改，就不一一列举了，列举了一些会用到的")])])}),[],!1,null,null,null);s.default=e.exports}}]);