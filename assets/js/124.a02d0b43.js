(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{401:function(t,e,a){"use strict";a.r(e);var o=a(10),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vs-code-生产力指南-jupyter-notebook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vs-code-生产力指南-jupyter-notebook"}},[t._v("#")]),t._v(" VS Code 生产力指南 - Jupyter Notebook")]),t._v(" "),a("p",[t._v("—— 如何用 VS Code 打造高效率的生产力工具。")]),t._v(" "),a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200323155728.png",alt:""}})]),t._v(" "),a("p",[t._v("Jupyter Notebook 是一个很强大的工具，它允许我们在一个文档环境内编写、运行代码、查看输出、将数据可视化并查看结果……总之，有了它，我们写含代码的文档就方便多了。")]),t._v(" "),a("p",[t._v("在上一篇文章中，我们完成了 VS Code 基本环境的搭建。这篇文章我将对 Jupyter with VS Code 进行详细讲解。")]),t._v(" "),a("h2",{attrs:{id:"环境配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境配置"}},[t._v("#")]),t._v(" 环境配置")]),t._v(" "),a("p",[t._v("众所周知，Jupyter Notebooks 依赖 Python 环境。"),a("br"),t._v("\n为了确认你是否拥有 Python 环境，在 VS Code 命令面板（"),a("code",[t._v("Ctrl + Shift + P")]),t._v("）内键入 "),a("strong",[t._v("Python: Select Interpreter")]),t._v(", 如果看到有可以选择的 Python 版本，那就没问题。")]),t._v(" "),a("p",[t._v("如果没有 Python 环境，可以通过以下方法安装：")]),t._v(" "),a("ol",[a("li",[t._v("在 "),a("a",{attrs:{href:"https://www.python.org/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Python 官网")]),a("OutboundLink")],1),t._v(" 下载最新版本安装包（尽量选择 "),a("code",[t._v("web-based installer")]),t._v(" 版本）")]),t._v(" "),a("li",[t._v("如果网络环境有问题，可以直接下载我转存的 "),a("a",{attrs:{href:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/doc/python-3.8.2-amd64-webinstall.exe",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("3.8.2-amd64-webinstall")]),a("OutboundLink")],1),t._v(" 版本并安装")])]),t._v(" "),a("p",[t._v("配置完本地 Python 环境后，我们还需要在 VS Code 内安装 "),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ms-python.python",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Python")]),a("OutboundLink")],1),t._v(" 插件。在近期的一次更新中，Jupyter Notebooks 已经被包含在这个插件内，不用再单独安装了。")]),t._v(" "),a("h2",{attrs:{id:"创建笔记本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建笔记本"}},[t._v("#")]),t._v(" 创建笔记本")]),t._v(" "),a("p",[t._v("环境配置完成后，我们可以在 VS Code 命令面板（"),a("code",[t._v("Ctrl + Shift + P")]),t._v("）输入 "),a("strong",[t._v("Python: Create Blank New Jupyter")]),t._v(" 创建一个空白的 Jupyter 笔记本（"),a("code",[t._v(".ipynb")]),t._v(" 文件）。如下图简单测试一下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200323153020.png",alt:""}})]),t._v(" "),a("p",[t._v("可以看到，代码正常运行。")]),t._v(" "),a("h2",{attrs:{id:"基本操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本操作"}},[t._v("#")]),t._v(" 基本操作")]),t._v(" "),a("p",[t._v("Jupyter Notebook 使用 "),a("strong",[t._v("代码单元（code cells）")]),t._v(" 的形式来创建、编辑和运行代码。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200323153717.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"添加-code-cells"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加-code-cells"}},[t._v("#")]),t._v(" 添加 code cells")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200323153850.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"运行单个-code-cell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行单个-code-cell"}},[t._v("#")]),t._v(" 运行单个 code cell")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200323153939.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"运行多个-code-cells"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行多个-code-cells"}},[t._v("#")]),t._v(" 运行多个 code cells")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200323154005.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"移动-code-cell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动-code-cell"}},[t._v("#")]),t._v(" 移动 code cell")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200323154059.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"删除-code-cell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除-code-cell"}},[t._v("#")]),t._v(" 删除 code cell")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200323154148.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"在代码与-markdown-之间切换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在代码与-markdown-之间切换"}},[t._v("#")]),t._v(" 在代码与 Markdown 之间切换")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200323154242.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"图表查看器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图表查看器"}},[t._v("#")]),t._v(" 图表查看器")]),t._v(" "),a("p",[t._v("通过图表查看器，你可以轻松查看代码输出的图表，也可以将图标导出各种格式的图片：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200323154555.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"数据与变量查看器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据与变量查看器"}},[t._v("#")]),t._v(" 数据与变量查看器")]),t._v(" "),a("p",[t._v("变量的类型、数量与值可以通过变量查看器实时查看：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200323154758.png",alt:""}})]),t._v(" "),a("p",[t._v("也可以通过数据查看器浏览更具体的数据：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200323154832.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("本篇文章讲解了 Jupyter Notebook 在 VS Code 上的配置和基本操作。更多 VS Code 的骚操作，敬请期待下一篇文章。")]),t._v(" "),a("h2",{attrs:{id:"参考与致谢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考与致谢"}},[t._v("#")]),t._v(" 参考与致谢")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://code.visualstudio.com/docs/python/jupyter-support",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with Jupyter Notebooks in Visual Studio Code"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/85445777",target:"_blank",rel:"noopener noreferrer"}},[t._v("VS Code Python 全新发布！Jupyter Notebook 原生支持终于来了！"),a("OutboundLink")],1)])]),t._v(" "),a("blockquote",[a("p",[t._v("文章作者："),a("strong",[t._v("Power Lin")]),a("br"),t._v("\n原文地址："),a("a",{attrs:{href:"https://wiki-power.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki-power.com"),a("OutboundLink")],1),a("br"),t._v("\n版权声明：文章采用 "),a("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC BY-NC-SA 4.0"),a("OutboundLink")],1),t._v(" 协议，转载请注明出处。")])])])}),[],!1,null,null,null);e.default=r.exports}}]);