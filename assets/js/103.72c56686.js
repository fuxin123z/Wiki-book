(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{458:function(t,r,_){"use strict";_.r(r);var v=_(10),e=Object(v.a)({},(function(){var t=this,r=t.$createElement,_=t._self._c||r;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"ad-入门系列二：基础知识"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ad-入门系列二：基础知识"}},[t._v("#")]),t._v(" AD 入门系列二：基础知识")]),t._v(" "),_("p",[t._v("—— Altium Designer 系列教程")]),t._v(" "),_("h2",{attrs:{id:"背景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),_("p",[t._v("配置完软件运行环境，在开始画板子之前，我们务必先熟悉一些 Altium Designer 及电路设计的基本知识。")]),t._v(" "),_("h2",{attrs:{id:"库文件安装"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#库文件安装"}},[t._v("#")]),t._v(" 库文件安装")]),t._v(" "),_("p",[t._v("库相当于把每个分立元件（如电阻、电容等）的原理图 / PCB 封装起来，方便直接调用。不一定每个元器件的原理图库 / 封装库都必须自己画，但 "),_("strong",[t._v("整理自己的库是必须的")]),t._v("。假想你的项目内每个元器件用的都是别人的（且不同的库有自己的规则），那么越往后你将越受制于人。拥有自己的库，这不仅方便迁移、提高效率，也有利于知识的体系化。适合自己的规则与体系，从时间轴上看，知识将呈指数型增长。刚开始曲线增长虽然缓慢，但到了后期，将不会有重复性的工作，那时候你需要做的，只是学习新知识，并将其归纳到体系中了。")]),t._v(" "),_("p",[t._v("温馨提示：自己的项目所需的所有元器件，尽量全部从自己整理的原理图库 / 封装库中提取。")]),t._v(" "),_("h3",{attrs:{id:"可参考的库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#可参考的库"}},[t._v("#")]),t._v(" 可参考的库")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://github.com/linyuxuanlin/Power_Lib_Altium",target:"_blank",rel:"noopener noreferrer"}},[_("strong",[t._v("Power_Lib_Altium")]),_("OutboundLink")],1),t._v("：我自己整理的库。目前尚处于前中期阶段，封装库齐全，原理图库仅包含我的项目所需要的元器件型号。将不断更新。")]),t._v(" "),_("li",[_("a",{attrs:{href:"https://github.com/KitSprout/AltiumDesigner_PcbLibrary",target:"_blank",rel:"noopener noreferrer"}},[_("strong",[t._v("AltiumDesigner_PcbLibrary")]),_("OutboundLink")],1),t._v("：一个较为齐全的库。")]),t._v(" "),_("li",[_("a",{attrs:{href:"https://github.com/Samwuzhitao/My_PCB_Library_Github",target:"_blank",rel:"noopener noreferrer"}},[_("strong",[t._v("My_PCB_Library_Github")]),_("OutboundLink")],1),t._v("：挺齐全的一个库，还包含一些单片机方案板。")]),t._v(" "),_("li",[_("a",{attrs:{href:"https://gitee.com/JLC_SMT/JLCSMT_LIB",target:"_blank",rel:"noopener noreferrer"}},[_("strong",[t._v("JLCSMT_LIB")]),_("OutboundLink")],1),t._v("：嘉立创提供的标准集成库，包含嘉立创可以 SMT 贴片的所有元件，直接用这个集成库，打板 / SMT 的时候兼容性会比较好。")]),t._v(" "),_("li",[_("a",{attrs:{href:"https://www.jianguoyun.com/p/DX2d84cQ-OOjBxj0kPwB#dir=%2FHare_Library::mode=0",target:"_blank",rel:"noopener noreferrer"}},[_("strong",[t._v("Hare_Library")]),_("OutboundLink")],1),t._v("：彬哥整理的原理图库 / 封装库，涵盖队内硬件所需的大部分元器件。")])]),t._v(" "),_("p",[t._v("如何安装库文件：参考 "),_("a",{attrs:{href:"https://wiki-power.com/post/unlist/AltiumDesigner%E5%AE%89%E8%A3%85%E5%BA%93%E6%96%87%E4%BB%B6.html",target:"_blank",rel:"noopener noreferrer"}},[_("strong",[t._v("Altium Designer 安装库文件")]),_("OutboundLink")],1)]),t._v(" "),_("h3",{attrs:{id:"不常见的元器件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#不常见的元器件"}},[t._v("#")]),t._v(" 不常见的元器件")]),t._v(" "),_("p",[t._v("以上提供的库，已经涵盖市面上 95% 以上的元器件型号了。如果真的找不到所需元器件，可以尝试以下方法：")]),t._v(" "),_("p",[t._v("AD 插件：")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://www.samacsys.com/altium-designer-library-instructions/",target:"_blank",rel:"noopener noreferrer"}},[_("strong",[t._v("Altium Library Loader")]),_("OutboundLink")],1),t._v("：这个用起来真的超级方便（相对以下方法）")])]),t._v(" "),_("p",[t._v("搜索引擎：")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"http://www.chiphome.com/",target:"_blank",rel:"noopener noreferrer"}},[_("strong",[t._v("芯片之家")]),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://www.snapeda.com/",target:"_blank",rel:"noopener noreferrer"}},[_("strong",[t._v("SnapEDA")]),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://www.ultralibrarian.com/",target:"_blank",rel:"noopener noreferrer"}},[_("strong",[t._v("Ultra Librarian")]),_("OutboundLink")],1)])]),t._v(" "),_("p",[t._v("SnapEDA 安装库的方法：参考 "),_("a",{attrs:{href:"https://wiki-power.com/post/unlist/%E4%BB%8ESnapEDA%E5%AF%BC%E5%85%A5%E5%BA%93%E6%96%87%E4%BB%B6.html",target:"_blank",rel:"noopener noreferrer"}},[_("strong",[t._v("从 SnapEDA 导入库文件")]),_("OutboundLink")],1)]),t._v(" "),_("h2",{attrs:{id:"快捷键"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#快捷键"}},[t._v("#")]),t._v(" 快捷键")]),t._v(" "),_("p",[t._v("于 Altium Designer 而言，熟练掌握常用的快捷键，可以很大程度提高效率。Altium Designer 的系统快捷键都是根据菜单下命令中有下划线的字母组合而成，例如 "),_("strong",[t._v("Place-Line")]),t._v(" 的快捷键为 "),_("strong",[t._v("P-L")]),t._v(" （先按 P 再按 L）")]),t._v(" "),_("h3",{attrs:{id:"原理图"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#原理图"}},[t._v("#")]),t._v(" 原理图")]),t._v(" "),_("ul",[_("li",[t._v("显示 Library 面板："),_("strong",[t._v("PP")])]),t._v(" "),_("li",[t._v("绘制导线："),_("strong",[t._v("Ctrl + W")])]),t._v(" "),_("li",[t._v("绘制网络标签："),_("strong",[t._v("PN")])]),t._v(" "),_("li",[t._v("复制元件并自动更新位号："),_("strong",[t._v("按住 Shift + 拖动")])]),t._v(" "),_("li",[t._v("元件自动编号："),_("strong",[t._v("TAA")]),t._v(" "),_("ul",[_("li",[t._v('Reset All：复位所有元件标号，使其变成 " 字母 + ? " 的格式')]),t._v(" "),_("li",[t._v("Update Change List：对元件列表进行标号变更")]),t._v(" "),_("li",[t._v("Accept Changes（Create ECO）：表示接受编号变更，实现原理图的变更")])])]),t._v(" "),_("li",[t._v("生成 BOM 表："),_("strong",[t._v("RI")])]),t._v(" "),_("li",[t._v("更新 PCB："),_("strong",[t._v("DU")])]),t._v(" "),_("li",[t._v("左对齐（右）："),_("strong",[t._v("AL")]),t._v("（"),_("strong",[t._v("AR")]),t._v("）")])]),t._v(" "),_("h3",{attrs:{id:"pcb"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pcb"}},[t._v("#")]),t._v(" PCB")]),t._v(" "),_("ul",[_("li",[t._v("把原理图的变更导入 PCB："),_("strong",[t._v("DI")])]),t._v(" "),_("li",[t._v("把 PCB 的变更覆盖回原理图："),_("strong",[t._v("DU")])]),t._v(" "),_("li",[t._v("切换单位（英寸/毫米）："),_("strong",[t._v("Q")])]),t._v(" "),_("li",[t._v("旋转元器件（任意角度）："),_("strong",[t._v("EMO")])]),t._v(" "),_("li",[t._v("把元件放置在底层："),_("strong",[t._v("拖动同时按 L")])]),t._v(" "),_("li",[t._v("自动布局："),_("strong",[t._v("框选 + TOL")])]),t._v(" "),_("li",[t._v("设置坐标原点："),_("strong",[t._v("EOS")])]),t._v(" "),_("li",[t._v("设置栅格："),_("strong",[t._v("G")])]),t._v(" "),_("li",[t._v("自动布线："),_("strong",[t._v("UAA")])]),t._v(" "),_("li",[t._v("清除布线："),_("strong",[t._v("UUA")])]),t._v(" "),_("li",[t._v("高亮接线："),_("strong",[t._v("按住 Shift + 光标移至线")])]),t._v(" "),_("li",[t._v("高亮节点所对应连线："),_("strong",[t._v("按住 Ctrl + 左键单击")])]),t._v(" "),_("li",[t._v("水平翻转："),_("strong",[t._v("Ctrl + F")])]),t._v(" "),_("li",[t._v("测量："),_("strong",[t._v("Ctrl + M")])]),t._v(" "),_("li",[t._v("切换视图（二维 / 三维）："),_("strong",[t._v("2 / 3")])]),t._v(" "),_("li",[t._v("三维视图中旋转："),_("strong",[t._v("按住 Shift + 拖动")])]),t._v(" "),_("li",[t._v("清除过滤器："),_("strong",[t._v("Shift + C")])]),t._v(" "),_("li",[t._v("切换单层/多层显示："),_("strong",[t._v("Shift + S")])]),t._v(" "),_("li",[t._v("过孔盖油（可略，打板时可直接选择）\n"),_("ol",[_("li",[t._v("单击某一过孔")]),t._v(" "),_("li",[t._v("右键 - 查找相似对象")]),t._v(" "),_("li",[t._v("选择大小属性为 Same，确定以激活选择所有过孔")]),t._v(" "),_("li",[t._v("在属性中的 Solder Mask Expansion 中把顶层和底层都勾选上")])])]),t._v(" "),_("li",[t._v("设置布线规则\n"),_("ol",[_("li",[_("strong",[t._v("UAA")])]),t._v(" "),_("li",[t._v("新建策略并编辑规则")]),t._v(" "),_("li",[t._v("一般修改 Routing 中的规则（新建规则）\n"),_("ul",[_("li",[t._v("Width：设置线的粗细")]),t._v(" "),_("li",[t._v("Routing Via Style ：设置过孔规则")]),t._v(" "),_("li",[t._v("铺铜：？")])])])])])]),t._v(" "),_("h3",{attrs:{id:"原理图库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#原理图库"}},[t._v("#")]),t._v(" 原理图库")]),t._v(" "),_("p",[t._v("待补充……")]),t._v(" "),_("h3",{attrs:{id:"封装库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#封装库"}},[t._v("#")]),t._v(" 封装库")]),t._v(" "),_("ul",[_("li",[t._v("测量距离："),_("strong",[t._v("Ctrl + N")])]),t._v(" "),_("li",[t._v("切换单位（英寸/毫米）："),_("strong",[t._v("Q")])])]),t._v(" "),_("h2",{attrs:{id:"流程及规范"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#流程及规范"}},[t._v("#")]),t._v(" 流程及规范")]),t._v(" "),_("p",[t._v("一块电路板从无到有设计出来，基本流程如下：")]),t._v(" "),_("ol",[_("li",[t._v("初始化\n"),_("ol",[_("li",[t._v("新建项目")]),t._v(" "),_("li",[t._v("在项目内创建原理图和 PCB 文件")])])]),t._v(" "),_("li",[t._v("绘制原理图\n"),_("ol",[_("li",[t._v("完成后确保编译通过")])])]),t._v(" "),_("li",[t._v("绘制 PCB\n"),_("ol",[_("li",[t._v("从原理图导入变更")]),t._v(" "),_("li",[t._v("隐藏元件 Designator 标识\n"),_("ol",[_("li",[t._v("打开右侧 "),_("strong",[t._v("Properties")]),t._v(" 面板")]),t._v(" "),_("li",[t._v("点击 "),_("strong",[t._v("Designator")]),t._v(" 旁边的 "),_("strong",[t._v("眼睛")]),t._v(" 标志，即可关闭")])])]),t._v(" "),_("li",[t._v("绘制板形\n"),_("ul",[_("li",[t._v("切换 90°/45° 走线（"),_("strong",[t._v("Shift+Space")]),t._v("）")]),t._v(" "),_("li",[t._v("以所画形状定义板子（"),_("strong",[t._v("DSD")]),t._v("）")]),t._v(" "),_("li",[_("strong",[t._v("设置板框属性为机械层 1")])]),t._v(" "),_("li",[t._v("固定孔\n"),_("ul",[_("li",[t._v("M3 螺孔：内 "),_("strong",[t._v("3.1")]),t._v(" mm、外 "),_("strong",[t._v("4")]),t._v(" mm")])])])])]),t._v(" "),_("li",[t._v("排布元件\n"),_("ul",[_("li",[t._v("参考 ["),_("strong",[t._v("PCB 元件布局规范")]),t._v("](post/电路设计/PCB 元件布局规范。md)")])])]),t._v(" "),_("li",[t._v("布线\n"),_("ul",[_("li",[t._v("设置布线规则\n"),_("ul",[_("li",[t._v("参考 ["),_("strong",[t._v("PCB 布线规范")]),t._v("](post/电路设计/PCB 布线规范。md)")])])]),t._v(" "),_("li",[_("strong",[t._v("不要开启自动布线！")])]),t._v(" "),_("li",[_("strong",[t._v("开启泪滴功能")])])])]),t._v(" "),_("li",[t._v("字体标识（引脚标识 / 版权 / 迷惑性文字）\n"),_("ul",[_("li",[t._v("放置于丝印层（顶层 / 底层）")]),t._v(" "),_("li",[t._v("放底层要先镜像")])])]),t._v(" "),_("li",[t._v("敷铜（"),_("strong",[t._v("PG")]),t._v("）\n"),_("ul",[_("li",[t._v("参考 ["),_("strong",[t._v("PCB 布线规范")]),t._v("](post/电路设计/PCB 布线规范。md)")])])])])]),t._v(" "),_("li",[t._v("打板\n"),_("ol",[_("li",[t._v("保存项目")]),t._v(" "),_("li",[t._v("将 "),_("strong",[t._v(".pcb")]),t._v(" 文件压缩（这样做似乎不太对，可以的话导出 Gerber）")]),t._v(" "),_("li",[t._v("上传至 "),_("strong",[t._v("嘉立创下单助手")])]),t._v(" "),_("li",[t._v("（可选 SMT)")])])])]),t._v(" "),_("h2",{attrs:{id:"其他知识"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他知识"}},[t._v("#")]),t._v(" 其他知识")]),t._v(" "),_("h3",{attrs:{id:"元件属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#元件属性"}},[t._v("#")]),t._v(" 元件属性")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("Designator")]),t._v("：元件位号，是元件的唯一标识，用来标识原理图中的不同的元件\n"),_("ul",[_("li",[_("strong",[t._v("R")]),t._v("：电阻")]),t._v(" "),_("li",[_("strong",[t._v("RN")]),t._v("：排阻")]),t._v(" "),_("li",[_("strong",[t._v("C")]),t._v("：电容")]),t._v(" "),_("li",[_("strong",[t._v("J")]),t._v("：接口/跳线")]),t._v(" "),_("li",[_("strong",[t._v("X")]),t._v("：晶振")]),t._v(" "),_("li",[_("strong",[t._v("D")]),t._v("：二极管")]),t._v(" "),_("li",[_("strong",[t._v("Q")]),t._v(" 或 "),_("strong",[t._v("T")]),t._v("：三极管")]),t._v(" "),_("li",[_("strong",[t._v("FB")]),t._v("：磁珠")]),t._v(" "),_("li",[_("strong",[t._v("U")]),t._v("：芯片")]),t._v(" "),_("li",[_("strong",[t._v("TP")]),t._v("：测试点")])])]),t._v(" "),_("li",[_("strong",[t._v("Comment")]),t._v("：元件大小参数，如电阻的阻值、电容的容值、IC 芯片型号等")]),t._v(" "),_("li",[_("strong",[t._v("Description")]),t._v("：用于填写元件的功能描述")])]),t._v(" "),_("h3",{attrs:{id:"logo-添加"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#logo-添加"}},[t._v("#")]),t._v(" Logo 添加")]),t._v(" "),_("p",[t._v("参考文章 "),_("a",{attrs:{href:"https://seujxh.wordpress.com/2018/10/03/logo%E6%B7%BB%E5%8A%A0/",target:"_blank",rel:"noopener noreferrer"}},[_("strong",[t._v("Logo 添加")]),_("OutboundLink")],1),t._v(" 。")]),t._v(" "),_("h3",{attrs:{id:"使用-git-管理项目"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用-git-管理项目"}},[t._v("#")]),t._v(" 使用 Git 管理项目")]),t._v(" "),_("p",[t._v("Altium Designer 支持使用 Git/SVN 用以版本控制。如果使用 Git, 直接在项目所在路径建立 Git 仓库即可。重启 Altium Designer, 会看到文件树边上出现了版本状态：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200421100348.png",alt:""}})]),t._v(" "),_("p",[t._v("图标的含义如下：\n"),_("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200421101221.png",alt:""}})]),t._v(" "),_("p",[t._v("可以在 "),_("code",[t._v("工程（C） - 版本控制（E）")]),t._v(" 菜单直接进行 Git 操作，甚至可以直接提交 GitHub.")]),t._v(" "),_("p",[t._v("提交远程仓库时，注意要添加 "),_("code",[t._v(".gitignore")]),t._v(" 文件（忽略掉本地缓存文件），内容如下：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v(".gitignore\nHistory\nProject Logs for *\nProject Outputs for *\n*.PcbDocPreview\n*.PrjPCBStructure\n*.SchDocPreview\n")])])]),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),_("p",[t._v("以上是 Altium Designer 及电路设计的基本知识。"),_("br"),t._v("\n下一章，我们将着手开始原理图的设计。")]),t._v(" "),_("h2",{attrs:{id:"参考与致谢"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考与致谢"}},[t._v("#")]),t._v(" 参考与致谢")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://seujxh.wordpress.com/2018/09/30/altium%e5%85%ac%e5%8f%b8altium-designer%e4%b8%93%e6%a0%8f/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Altium 公司 Altium Designer 专栏"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"http://club.szlcsc.com/article/details_2757_1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("嘉立创 SMT 贴片 可贴列表 PADS 集成库 \\（正式版、)"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://blog.csdn.net/weifengdq/article/details/78406438",target:"_blank",rel:"noopener noreferrer"}},[t._v("Altium Designer 使用 Git 构想"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://www.altium.com/documentation/altium-designer/using-version-control-ad",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using Version Control"),_("OutboundLink")],1)]),t._v(" "),_("li",[t._v("彬哥整理的经验和笔记")])]),t._v(" "),_("blockquote",[_("p",[t._v("文章作者："),_("strong",[t._v("Power Lin")]),_("br"),t._v("\n原文地址："),_("a",{attrs:{href:"https://wiki-power.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki-power.com"),_("OutboundLink")],1),_("br"),t._v("\n版权声明：文章采用 "),_("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC BY-NC-SA 4.0"),_("OutboundLink")],1),t._v(" 协议，转载请注明出处。")])])])}),[],!1,null,null,null);r.default=e.exports}}]);