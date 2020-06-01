(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{473:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git-配置代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-配置代理"}},[t._v("#")]),t._v(" Git 配置代理")]),t._v(" "),a("h2",{attrs:{id:"问题来源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题来源"}},[t._v("#")]),t._v(" 问题来源")]),t._v(" "),a("p",[a("code",[t._v("git clone")]),t._v(" 与 "),a("code",[t._v("git pull")]),t._v(" 速度太慢。")]),t._v(" "),a("h2",{attrs:{id:"解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[t._v("#")]),t._v(" 解决方法")]),t._v(" "),a("h3",{attrs:{id:"_1-代理软件内设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-代理软件内设置"}},[t._v("#")]),t._v(" 1. 代理软件内设置")]),t._v(" "),a("ol",[a("li",[t._v("在代理软件内勾选 "),a("code",[t._v("允许来自局域网的连接")])]),t._v(" "),a("li",[t._v("记下端口号（例如：1080）")]),t._v(" "),a("li",[t._v("开启 "),a("code",[t._v("全局模式")])])]),t._v(" "),a("h3",{attrs:{id:"_2-给-git-全局配置-http-代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-给-git-全局配置-http-代理"}},[t._v("#")]),t._v(" 2. 给 Git 全局配置 http 代理")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global http.proxy http://127.0.0.1: 端口号\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global https.proxy https://127.0.0.1: 端口号\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果上面的不生效，则用：")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global http.proxy "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'socks5://127.0.0.1: 端口号'")]),t._v(" \n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global https.proxy "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'socks5://127.0.0.1: 端口号'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果只对 GitHub 进行代理，对国内的仓库不影响（不熟悉配置文件不建议使用）：")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global http.https://github.com.proxy https://127.0.0.1:1080\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global https.https://github.com.proxy https://127.0.0.1:1080\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只对 GitLab 进行代理，对国内的仓库不影响（不熟悉配置文件不建议使用）：")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global https.https://https://gitlab.com.proxy https://127.0.0.1:1080\n")])])]),a("h3",{attrs:{id:"恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#恢复"}},[t._v("#")]),t._v(" 恢复")]),t._v(" "),a("p",[t._v("如果不想用代理，可以用以下的方法恢复：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global --unset http.proxy\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global --unset https.proxy\n")])])]),a("h2",{attrs:{id:"参考与致谢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考与致谢"}},[t._v("#")]),t._v(" 参考与致谢")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://c.lanmit.com/czxt/Linux/16965.html",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("征服 git clone 与 git pull 的龟速提交")]),a("OutboundLink")],1)])]),t._v(" "),a("blockquote",[a("p",[t._v("文章作者："),a("strong",[t._v("Power Lin")]),a("br"),t._v("\n原文地址："),a("a",{attrs:{href:"https://wiki-power.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki-power.com"),a("OutboundLink")],1),a("br"),t._v("\n版权声明：文章采用 "),a("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC BY-NC-SA 4.0"),a("OutboundLink")],1),t._v(" 协议，转载请注明出处。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);