(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{592:function(e,s,t){"use strict";t.r(s);var r=t(14),a=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"在浏览器上运行-vscode（code-server）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在浏览器上运行-vscode（code-server）"}},[e._v("#")]),e._v(" 在浏览器上运行 VScode（code-server）")]),e._v(" "),t("h2",{attrs:{id:"背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[e._v("#")]),e._v(" 背景")]),e._v(" "),t("p",[e._v("众所周知，VSCode 是一个功能十分强大的编辑器。如果能在 iPad 这类轻便的平台上使用 VSCode（iPadOS 对键鼠的支持已经能够媲美桌面系统），那我们就可以随时随地工作了。")]),e._v(" "),t("p",[e._v("恰好有一个让 VSCode 跑在服务器上的服务：code-server. 部署完成后，可通过浏览器访问。这样，只要有网络，任何设备都能够轻松用上 VSCode.")]),e._v(" "),t("h2",{attrs:{id:"准备环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备环境"}},[e._v("#")]),e._v(" 准备环境")]),e._v(" "),t("p",[e._v("一台安装有 Linux 的服务器（我用的是阿里云最低配的学生机）。")]),e._v(" "),t("p",[e._v("官方要求配置如下：")]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("64-bit host.")]),e._v(" "),t("li",[e._v("At least 1GB of RAM.")]),e._v(" "),t("li",[e._v("2 cores or more are recommended (1 core works but not optimally).")]),e._v(" "),t("li",[e._v("Secure connection over HTTPS or localhost (required for service workers and clipboard support).")]),e._v(" "),t("li",[e._v("For Linux: GLIBC 2.17 or later and GLIBCXX 3.4.15 or later.")])])]),e._v(" "),t("h2",{attrs:{id:"安装过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装过程"}},[e._v("#")]),e._v(" 安装过程")]),e._v(" "),t("h3",{attrs:{id:"_1-下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载"}},[e._v("#")]),e._v(" 1. 下载")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://github.com/cdr/code-server/releases/download/3.1.0/code-server-3.1.0-linux-x86_64.tar.gz "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 下载 code-server")]),e._v("\n")])])]),t("p",[e._v("不要照搬命令，在 code-server 的 "),t("a",{attrs:{href:"https://github.com/cdr/code-server/releases",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Release")]),t("OutboundLink")],1),e._v(" 页面复制最新版本的链接（根据服务器的架构来选择，我使用的是 "),t("code",[e._v("code-server-3.1.0-linux-x86_64.tar.gz")]),e._v(" 版本），用 "),t("code",[e._v("$ wget")]),e._v(" 或 "),t("code",[e._v("SFTP")]),e._v(" 下载 / 传输至服务器上。")]),e._v(" "),t("p",[e._v("如果下载速度很慢，可复制下载链接，并在 "),t("a",{attrs:{href:"https://d.serctl.com/",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("这个网站")]),t("OutboundLink")],1),e._v(" 中获取新的下载链接。")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" -xvf code-server-3.1.0-linux-x86_64.tar.gz "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 解压")]),e._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" code-server-3.1.0-linux-x86_64.tar.gz code-server"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 改名（非必要）")]),e._v("\n")])])]),t("h3",{attrs:{id:"_2-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装"}},[e._v("#")]),e._v(" 2. 安装")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" code-server\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"yourpassword"')]),e._v("\n$ ./code-server --port "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8888")]),e._v(" --host "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.0")]),e._v(".0.0\n")])])]),t("ul",[t("li",[e._v("将 "),t("code",[e._v("yourpassword")]),e._v(" 改为你设定的密码，否则会随机生成密码")]),e._v(" "),t("li",[t("code",[e._v("--port 8888")]),e._v(" 意为指定运行端口，你可以设置为 "),t("code",[e._v("80")]),e._v(" 端口（Http 协议），这样访问的时候就不用加端口号了")]),e._v(" "),t("li",[t("code",[e._v("--host 0.0.0.0")]),e._v(" 让服务能通过外网访问。默认的 "),t("code",[e._v("127.0.0.1")]),e._v(" 只能本地访问")]),e._v(" "),t("li",[e._v("如不需要密码验证，可以加上 "),t("code",[e._v("--auth none")])]),e._v(" "),t("li",[e._v("如启动服务不成功，可能为架构版本选择错误，换一个版本即可")])]),e._v(" "),t("h3",{attrs:{id:"_3-配置后台运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置后台运行"}},[e._v("#")]),e._v(" 3. 配置后台运行")]),e._v(" "),t("p",[e._v("默认直接运行的情况下，ssh 连接一断就没了。为了使其能够后台运行，可以用 "),t("code",[e._v("screen")]),e._v(" ：")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ yum "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("screen")]),e._v("\n或\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("screen")]),e._v("\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("screen")]),e._v(" -S VSCode-online "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# VSCode-online 为自取的名字")]),e._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"yourpassword"')]),e._v("\n$ ./code-server --port "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8888")]),e._v(" --host "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.0")]),e._v(".0.0\n")])])]),t("p",[e._v("如果需要停止后台运行：")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("screen")]),e._v(" -ls "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查看已运行服务的 id")]),e._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("screen")]),e._v(" -X -S "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("id")]),e._v(" quit "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 替换掉 id")]),e._v("\n")])])]),t("h3",{attrs:{id:"_4-轻松使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-轻松使用"}},[e._v("#")]),e._v(" 4. 轻松使用")]),e._v(" "),t("p",[e._v("在浏览器直接输入 "),t("code",[e._v("http://你的服务器 ip")]),e._v(" 即可享用云端 VSCode.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200413181001.jpg",alt:""}})]),e._v(" "),t("p",[e._v("配置域名访问："),t("code",[e._v("待探索……")])]),e._v(" "),t("h2",{attrs:{id:"现阶段问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#现阶段问题"}},[e._v("#")]),e._v(" 现阶段问题")]),e._v(" "),t("ul",[t("li",[e._v("可直接下载的插件数量，手动安装插件很麻烦，且没有自动同步插件 / 用户设置功能，之后的版本应该会更新解决")])]),e._v(" "),t("h2",{attrs:{id:"参考与致谢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考与致谢"}},[e._v("#")]),e._v(" 参考与致谢")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://copyfuture.com/blogs-details/20200405045150018h4edt0f4q8486jq",target:"_blank",rel:"noopener noreferrer"}},[e._v("在浏览器上运行 vscode，code-server（阿里云服务器）"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000022267386",target:"_blank",rel:"noopener noreferrer"}},[e._v("在浏览器上运行 vscode，code-server"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/Granery/article/details/90415636",target:"_blank",rel:"noopener noreferrer"}},[e._v("（推荐）VS code 在线工具——code-serve 在云服务器上的安装和使用 与常见的问题解决 （超详细）"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://blog.icodef.com/2019/11/17/1670",target:"_blank",rel:"noopener noreferrer"}},[e._v("iPad 编程学习环境---vscode web 版本搭建"),t("OutboundLink")],1)])]),e._v(" "),t("blockquote",[t("p",[e._v("文章作者："),t("strong",[e._v("Power Lin")]),e._v("\n原文地址："),t("a",{attrs:{href:"https://wiki-power.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki-power.com"),t("OutboundLink")],1),e._v("\n版权声明：文章采用 "),t("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC BY-NC-SA 4.0"),t("OutboundLink")],1),e._v(" 协议，转载请注明出处。")])])])}),[],!1,null,null,null);s.default=a.exports}}]);