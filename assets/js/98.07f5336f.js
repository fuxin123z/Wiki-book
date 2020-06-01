(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{555:function(e,t,s){"use strict";s.r(t);var a=s(14),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"使用-vs-code-进行远程开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-vs-code-进行远程开发"}},[e._v("#")]),e._v(" 使用 VS Code 进行远程开发")]),e._v(" "),s("p",[e._v("—— 将 VS Code 作为 SSH 工具，连接开发远程服务器。")]),e._v(" "),s("h2",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[e._v("#")]),e._v(" 背景")]),e._v(" "),s("p",[e._v("尝试了各类 SSH 工具，最终还是回到免费好用颜值又高的 VS Code.\n本篇文章仅记录以供日后参考用，部分内容未详细展开说明。更多教程请参考文末链接。")]),e._v(" "),s("p",[e._v("VS Code 基础配置篇："),s("a",{attrs:{href:"https://wiki-power.com/post/%E9%AB%98%E6%95%88%E5%B7%A5%E4%BD%9C/VSCode%E7%94%9F%E4%BA%A7%E5%8A%9B%E6%8C%87%E5%8D%97-%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE.html",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[e._v("VS Code 生产力指南 - 环境配置")]),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"配置扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置扩展"}},[e._v("#")]),e._v(" 配置扩展")]),e._v(" "),s("p",[e._v("点击安装扩展："),s("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[e._v("Remote - SSH")]),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("点击左下角 "),s("code",[e._v("Remote")]),e._v(" 按钮即可使用。")]),e._v(" "),s("h2",{attrs:{id:"其他配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他配置"}},[e._v("#")]),e._v(" 其他配置")]),e._v(" "),s("h3",{attrs:{id:"vs-code-无法监视大型工作区的文件变化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vs-code-无法监视大型工作区的文件变化"}},[e._v("#")]),e._v(" VS Code 无法监视大型工作区的文件变化")]),e._v(" "),s("p",[e._v("运行此命令查看当前限制：")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" /proc/sys/fs/inotify/max_user_watches\n")])])]),s("p",[e._v("编辑 "),s("code",[e._v("/etc/sysctl.conf")]),e._v(" 文件：")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("vim")]),e._v(" /etc/sysctl.conf\n")])])]),s("p",[e._v("增加如下代码，将此限制增加到最大值：")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ fs.inotify.max_user_watches"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("524288")]),e._v("\n")])])]),s("p",[e._v("保存，启用设置：")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" sysctl -p\n")])])]),s("h2",{attrs:{id:"参考与致谢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考与致谢"}},[e._v("#")]),e._v(" 参考与致谢")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/64849549",target:"_blank",rel:"noopener noreferrer"}},[e._v("VSCode Remote 体验 | 远程 Linux 环境开发真香"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"http://www.deadnine.com/somehow/2019/0208/1481.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("VSCode 报警处理：VisualStudioCode 无法监视这个大型工作区的文件变化"),s("OutboundLink")],1)])]),e._v(" "),s("blockquote",[s("p",[e._v("文章作者："),s("strong",[e._v("Power Lin")]),s("br"),e._v("\n原文地址："),s("a",{attrs:{href:"https://wiki-power.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki-power.com"),s("OutboundLink")],1),s("br"),e._v("\n版权声明：文章采用 "),s("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC BY-NC-SA 4.0"),s("OutboundLink")],1),e._v(" 协议，转载请注明出处。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);