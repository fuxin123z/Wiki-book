(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{450:function(t,_,v){"use strict";v.r(_);var e=v(10),r=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"ad-入门系列三：原理图绘制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ad-入门系列三：原理图绘制"}},[t._v("#")]),t._v(" AD 入门系列三：原理图绘制")]),t._v(" "),v("p",[t._v("—— Altium Designer 系列教程")]),t._v(" "),v("h2",{attrs:{id:"背景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),v("p",[t._v("经过上一章节的预热，从这一章开始，我们进入原理图绘制环节。")]),t._v(" "),v("h2",{attrs:{id:"绘制原理图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#绘制原理图"}},[t._v("#")]),t._v(" 绘制原理图")]),t._v(" "),v("h3",{attrs:{id:"调整图纸"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#调整图纸"}},[t._v("#")]),t._v(" 调整图纸")]),t._v(" "),v("p",[t._v("按照前文提到的基本流程，我们新建了一个项目，将原理图文件添加到项目中。此时，出现了一张空白的图纸。我们可以直接在上绘制原理图。如果原理图变得复杂，也可以 "),v("strong",[t._v("更改图纸的尺寸")]),t._v("，使元器件不显得过于拥挤：")]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("双击")]),t._v(" 图纸任意空白处，")]),t._v(" "),v("li",[t._v("在 Properties 面板内找到 "),v("strong",[t._v("Page Options")]),t._v(" 栏目，")]),t._v(" "),v("li",[t._v("点击 Sheet Size 下拉框更改图纸尺寸。")])]),t._v(" "),v("h3",{attrs:{id:"放置元件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#放置元件"}},[t._v("#")]),t._v(" 放置元件")]),t._v(" "),v("p",[t._v("接下来我们开始放置元件。库的安装在前一章已讲解，我们打开 "),v("strong",[t._v("Components")]),t._v(" 面板，点击显示为库的名称的下拉框，即可切换已经安装的库。切换之后。在搜索框搜索所需的元器件（键入后不用按回车），找到对应的之后，可用鼠标左键 "),v("strong",[t._v("直接拖进")]),t._v(" 原理图中，这就成功放置了一个元件。")]),t._v(" "),v("p",[t._v("如果忘记元件是属于哪个库的，也可以用全局搜索的功能。点击库名称左边的 "),v("strong",[t._v("三条杠")]),t._v(" 标志，在下拉框选择 "),v("strong",[t._v("File-based Librarys Search")]),t._v(" ，即可搜索所有可用的库。")]),t._v(" "),v("h3",{attrs:{id:"元件属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#元件属性"}},[t._v("#")]),t._v(" 元件属性")]),t._v(" "),v("p",[t._v("放置的元件有几个关键属性：")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("Designator")]),t._v("：元件位号。元件唯一标识，不可重名。通常用 R1, R2 ... 代表电阻，C1, C2 ... 代表电容（参考上一章的知识点），")]),t._v(" "),v("li",[v("strong",[t._v("Comment")]),t._v("：元件大小参数，如阻值、容值、芯片型号等，")]),t._v(" "),v("li",[v("strong",[t._v("Description")]),t._v("：元件的功能描述，")]),t._v(" "),v("li",[v("strong",[t._v("Footprint")]),t._v("：链接到封装库，将元件与某个 PCB 封装对应上，")]),t._v(" "),v("li",[v("strong",[t._v("Models")]),t._v("：包括 Simulation（仿真模型）、Signal Integrity（信号完整性）等。")])]),t._v(" "),v("h3",{attrs:{id:"基本操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本操作"}},[t._v("#")]),t._v(" 基本操作")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("左键单击")]),t._v("：选择命令")]),t._v(" "),v("li",[v("strong",[t._v("左键长按")]),t._v("：拖动对象")]),t._v(" "),v("li",[v("strong",[t._v("左键双击")]),t._v("：设置对象属性")]),t._v(" "),v("li",[v("strong",[t._v("右键单击")]),t._v("：取消或弹出命令菜单")]),t._v(" "),v("li",[v("strong",[t._v("右键长按")]),t._v("：拖动原理图页面")]),t._v(" "),v("li",[v("strong",[t._v("Ctrl + 滚轮")]),t._v("：缩放页面")]),t._v(" "),v("li",[v("strong",[t._v("Shift + 左键单击/框选")]),t._v("：选择多个元器件")])]),t._v(" "),v("p",[t._v("更高级的操作，使用命令 "),v("strong",[t._v("S")]),t._v("（Select），弹出命令菜单：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"left"}},[t._v("快捷键")]),t._v(" "),v("th",{staticStyle:{"text-align":"left"}},[t._v("详细命令")]),t._v(" "),v("th",{staticStyle:{"text-align":"left"}},[t._v("功能")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("E")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("Lasso S"),v("strong",[t._v("e")]),t._v("lect")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("套索，选择范围内元件；单击左键开始绘制套索，再次单击完成范围结束绘制")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("I")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[v("strong",[t._v("I")]),t._v("nside Area")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("框选，选中区域内所有的元件")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("O")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[v("strong",[t._v("O")]),t._v("utside Area")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("反选，选中区域外所有的元件")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("L")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("Touching "),v("strong",[t._v("L")]),t._v("ine")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("线选，选中被线条触碰到的元件")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("C")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[v("strong",[t._v("C")]),t._v("onnection")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("选中网络名称相同的元件")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("A")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[v("strong",[t._v("A")]),t._v("ll")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("选择所有元件")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("T")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[v("strong",[t._v("T")]),t._v("oggle Select")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("反选，单击原来选中的将取消选中，原来未选中的将选中")])])])]),t._v(" "),v("ul",[v("li",[t._v("元件的旋转：选中元件后按 "),v("strong",[t._v("Space")]),t._v(" 空格键")]),t._v(" "),v("li",[t._v("复制剪切粘贴："),v("strong",[t._v("Ctrl + C")]),t._v("，"),v("strong",[t._v("Ctrl + X")]),t._v("，"),v("strong",[t._v("Ctrl + V")])]),t._v(" "),v("li",[t._v("复制后自动填充位号：选中元件，"),v("strong",[t._v("按住 Shift 同时拖动")]),t._v("，即可粘贴递增位号的元件。步长可在 "),v("strong",[t._v("TP")]),t._v("（"),v("strong",[t._v("T")]),t._v("ools-"),v("strong",[t._v("P")]),t._v("reference-Schematic-General）中设置。")]),t._v(" "),v("li",[t._v("绘制导线："),v("strong",[t._v("Ctrl + W")])]),t._v(" "),v("li",[t._v("绘制网络标签："),v("strong",[t._v("PN")])]),t._v(" "),v("li",[t._v("放置电源/地：直接在工具栏中"),v("strong",[t._v("左键")]),t._v("选取，"),v("strong",[t._v("右键")]),t._v("则可以选择不同样式")])]),t._v(" "),v("h3",{attrs:{id:"全局元件自动编号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#全局元件自动编号"}},[t._v("#")]),t._v(" 全局元件自动编号")]),t._v(" "),v("p",[t._v("当原理图工程比较庞大，元件比较多，有时候可能会出现元件位号重名、缺失的情况。这时候可以用全局位号管理："),v("strong",[t._v("TAA")]),t._v("，代替手动检查。")]),t._v(" "),v("p",[t._v("勾选需要自动排号的元器件，点击 "),v("strong",[t._v("更新更改列表")]),t._v("，再点击 "),v("strong",[t._v("接收更改（创建 ECO）")]),t._v("，"),v("strong",[t._v("执行变更")]),t._v("，即可完成元件的自动编号。")]),t._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),v("p",[t._v("以上仅仅是绘制原理图的最基本操作，就像提供了一套厨具。至于怎么做出更香的饭菜，更多靠的是 "),v("strong",[t._v("想象力")]),t._v(" 与 "),v("strong",[t._v("不断的练习")]),t._v(" 。")]),t._v(" "),v("h2",{attrs:{id:"参考与致谢"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考与致谢"}},[t._v("#")]),t._v(" 参考与致谢")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://seujxh.wordpress.com/2018/09/30/altium%e5%85%ac%e5%8f%b8altium-designer%e4%b8%93%e6%a0%8f/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Altium 公司 Altium Designer 专栏"),v("OutboundLink")],1)])]),t._v(" "),v("blockquote",[v("p",[t._v("文章作者："),v("strong",[t._v("Power Lin")]),v("br"),t._v("\n原文地址："),v("a",{attrs:{href:"https://wiki-power.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki-power.com"),v("OutboundLink")],1),v("br"),t._v("\n版权声明：文章采用 "),v("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC BY-NC-SA 4.0"),v("OutboundLink")],1),t._v(" 协议，转载请注明出处。")])])])}),[],!1,null,null,null);_.default=r.exports}}]);