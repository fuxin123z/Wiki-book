(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{496:function(t,e,a){"use strict";a.r(e);var s=a(14),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"自适应网页设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自适应网页设计"}},[t._v("#")]),t._v(" 自适应网页设计")]),t._v(" "),a("h2",{attrs:{id:"思想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思想"}},[t._v("#")]),t._v(" 思想")]),t._v(" "),a("p",[t._v("一次设计，普遍适用。")]),t._v(" "),a("h2",{attrs:{id:"方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),a("h3",{attrs:{id:"允许网页宽度自动调整"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#允许网页宽度自动调整"}},[t._v("#")]),t._v(" "),a("strong",[t._v("允许网页宽度自动调整")])]),t._v(" "),a("p",[t._v("在网页代码头部加入：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<meta name="viewport" content="width=device-width, initial-scale=1" />\n')])])]),a("p",[t._v("这行代码包含在自动生成的 HTML5 框架内。")]),t._v(" "),a("h3",{attrs:{id:"不使用绝对宽度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不使用绝对宽度"}},[t._v("#")]),t._v(" 不使用绝对宽度")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("width: xx%;")]),t._v(" 或 "),a("code",[t._v("width: auto;")]),t._v(" ，替代 "),a("code",[t._v("width: xxx px;")])]),t._v(" "),a("h3",{attrs:{id:"使用相对大小的字体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用相对大小的字体"}},[t._v("#")]),t._v(" 使用相对大小的字体")]),t._v(" "),a("p",[t._v("指定字体大小为页面默认大小的 100%，即 16 像素：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("body { font: normal 100% Helvetica, Arial, sans-serif; }\n")])])]),a("p",[t._v("再指定 h1 大小为默认的 1.5 倍，即 24 像素：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("h1 { font-size: 1.5em; }\n")])])]),a("h3",{attrs:{id:"流动布局（fluid-grid）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流动布局（fluid-grid）"}},[t._v("#")]),t._v(" "),a("strong",[t._v("流动布局（fluid grid）")])]),t._v(" "),a("p",[t._v("各个区块的位置都是浮动的，而非固定不变的。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".main {\n    float: right;\n    width: 70%;\n}\n\n.leftBar {\n    float: left;\n    width: 25%;\n}\n")])])]),a("p",[a("a",{attrs:{href:"http://designshack.net/articles/css/everything-you-never-knew-about-css-floats/",target:"_blank",rel:"noopener noreferrer"}},[t._v("float"),a("OutboundLink")],1),t._v(" 的好处是，如果宽度太小，放不下两个元素，后面的元素会自动滚动到前面元素的下方，不会在水平方向 overflow（溢出），避免了水平滚动条的出现。")]),t._v(" "),a("p",[t._v("尽量不要出现 "),a("strong",[t._v("绝对定位（position: absolute）")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"选择加载-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择加载-css"}},[t._v("#")]),t._v(" "),a("strong",[t._v("选择加载 CSS")])]),t._v(" "),a("p",[t._v("如果屏幕宽度小于 400 像素（max-device-width: 400px），就加载 tinyScreen.css 文件**：**")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<link rel="stylesheet" type="text/css"\n　　　　media="screen and (max-device-width: 400px)"\n　　　　href="tinyScreen.css" />\n')])])]),a("p",[t._v("如果屏幕宽度在 400 像素到 600 像素之间，则加载 smallScreen.css 文件：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<link rel="stylesheet" type="text/css"\n　　　　media="screen and (min-width: 400px) and (max-device-width: 600px)"\n　　　　href="smallScreen.css" />\n')])])]),a("h3",{attrs:{id:"图片的自适应（fluid-image）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片的自适应（fluid-image）"}},[t._v("#")]),t._v(" "),a("strong",[t._v("图片的自适应（fluid image）")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("img { max-width: 100%;}\n")])])]),a("h2",{attrs:{id:"参考与致谢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考与致谢"}},[t._v("#")]),t._v(" 参考与致谢")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2012/05/responsive_web_design.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("自适应网页设计（Responsive Web Design）"),a("OutboundLink")],1)])]),t._v(" "),a("blockquote",[a("p",[t._v("文章作者："),a("strong",[t._v("Power Lin")]),a("br"),t._v("\n原文地址："),a("a",{attrs:{href:"https://wiki-power.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki-power.com"),a("OutboundLink")],1),a("br"),t._v("\n版权声明：文章采用 "),a("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC BY-NC-SA 4.0"),a("OutboundLink")],1),t._v(" 协议，转载请注明出处。")])])])}),[],!1,null,null,null);e.default=r.exports}}]);