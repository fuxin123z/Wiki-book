(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{457:function(_,t,r){"use strict";r.r(t);var v=r(10),e=Object(v.a)({},(function(){var _=this,t=_.$createElement,r=_._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[r("h1",{attrs:{id:"ad-入门系列二：基础知识"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ad-入门系列二：基础知识"}},[_._v("#")]),_._v(" AD 入门系列二：基础知识")]),_._v(" "),r("p",[_._v("—— Altium Designer 系列教程")]),_._v(" "),r("h2",{attrs:{id:"背景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[_._v("#")]),_._v(" 背景")]),_._v(" "),r("p",[_._v("配置完软件运行环境，在开始画板子之前，我们务必先熟悉一些 Altium Designer 及电路设计的基本知识。")]),_._v(" "),r("h2",{attrs:{id:"库文件安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#库文件安装"}},[_._v("#")]),_._v(" 库文件安装")]),_._v(" "),r("p",[_._v("库相当于把每个分立元件（如电阻、电容等）的原理图 / PCB 封装起来，方便直接调用。不一定每个元器件的原理图库 / 封装库都必须自己画，但 "),r("strong",[_._v("整理自己的库是必须的")]),_._v("。假想你的项目内每个元器件用的都是别人的（且不同的库有自己的规则），那么越往后你将越受制于人。拥有自己的库，这不仅方便迁移、提高效率，也有利于知识的体系化。适合自己的规则与体系，从时间轴上看，知识将呈指数型增长。刚开始曲线增长虽然缓慢，但到了后期，将不会有重复性的工作，那时候你需要做的，只是学习新知识，并将其归纳到体系中了。")]),_._v(" "),r("p",[_._v("温馨提示：自己的项目所需的所有元器件，尽量全部从自己整理的原理图库 / 封装库中提取。")]),_._v(" "),r("h3",{attrs:{id:"可参考的库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#可参考的库"}},[_._v("#")]),_._v(" 可参考的库")]),_._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/linyuxuanlin/Power_Lib_Altium",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[_._v("Power_Lib_Altium")]),r("OutboundLink")],1),_._v("：我自己整理的库。目前尚处于前中期阶段，封装库齐全，原理图库仅包含我的项目所需要的元器件型号。将不断更新。")]),_._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/KitSprout/AltiumDesigner_PcbLibrary",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[_._v("AltiumDesigner_PcbLibrary")]),r("OutboundLink")],1),_._v("：一个较为齐全的库。")]),_._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/Samwuzhitao/My_PCB_Library_Github",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[_._v("My_PCB_Library_Github")]),r("OutboundLink")],1),_._v("：挺齐全的一个库，还包含一些单片机方案板。")]),_._v(" "),r("li",[r("a",{attrs:{href:"https://gitee.com/JLC_SMT/JLCSMT_LIB",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[_._v("JLCSMT_LIB")]),r("OutboundLink")],1),_._v("：嘉立创提供的标准集成库，包含嘉立创可以 SMT 贴片的所有元件，直接用这个集成库，打板 / SMT 的时候兼容性会比较好。")]),_._v(" "),r("li",[r("a",{attrs:{href:"https://www.jianguoyun.com/p/DX2d84cQ-OOjBxj0kPwB#dir=%2FHare_Library::mode=0",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[_._v("Hare_Library")]),r("OutboundLink")],1),_._v("：彬哥整理的原理图库 / 封装库，涵盖队内硬件所需的大部分元器件。")])]),_._v(" "),r("p",[_._v("如何安装库文件：参考 ["),r("strong",[_._v("Altium Designer 安装库文件")]),_._v("](../unlist/AltiumDesigner 安装库文件。md)")]),_._v(" "),r("h3",{attrs:{id:"不常见的元器件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#不常见的元器件"}},[_._v("#")]),_._v(" 不常见的元器件")]),_._v(" "),r("p",[_._v("以上提供的库，已经涵盖市面上 95% 以上的元器件型号了。如果真的找不到所需元器件，可以尝试以下方法：")]),_._v(" "),r("p",[_._v("AD 插件：")]),_._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.samacsys.com/altium-designer-library-instructions/",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[_._v("Altium Library Loader")]),r("OutboundLink")],1),_._v("：这个用起来真的超级方便（相对以下方法）")])]),_._v(" "),r("p",[_._v("搜索引擎：")]),_._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://www.chiphome.com/",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[_._v("芯片之家")]),r("OutboundLink")],1)]),_._v(" "),r("li",[r("a",{attrs:{href:"https://www.snapeda.com/",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[_._v("SnapEDA")]),r("OutboundLink")],1)]),_._v(" "),r("li",[r("a",{attrs:{href:"https://www.ultralibrarian.com/",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[_._v("Ultra Librarian")]),r("OutboundLink")],1)])]),_._v(" "),r("p",[_._v("SnapEDA 安装库的方法：参考 ["),r("strong",[_._v("从 SnapEDA 导入库文件")]),_._v("](../unlist/从 SnapEDA 导入库文件。md)")]),_._v(" "),r("h2",{attrs:{id:"快捷键"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#快捷键"}},[_._v("#")]),_._v(" 快捷键")]),_._v(" "),r("p",[_._v("于 Altium Designer 而言，熟练掌握常用的快捷键，可以很大程度提高效率。Altium Designer 的系统快捷键都是根据菜单下命令中有下划线的字母组合而成，例如 "),r("strong",[_._v("Place-Line")]),_._v(" 的快捷键为 "),r("strong",[_._v("P-L")]),_._v(" （先按 P 再按 L）")]),_._v(" "),r("h3",{attrs:{id:"原理图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#原理图"}},[_._v("#")]),_._v(" 原理图")]),_._v(" "),r("ul",[r("li",[_._v("显示 Library 面板："),r("strong",[_._v("PP")])]),_._v(" "),r("li",[_._v("绘制导线："),r("strong",[_._v("Ctrl + W")])]),_._v(" "),r("li",[_._v("绘制网络标签："),r("strong",[_._v("PN")])]),_._v(" "),r("li",[_._v("复制元件并自动更新位号："),r("strong",[_._v("按住 Shift + 拖动")])]),_._v(" "),r("li",[_._v("元件自动编号："),r("strong",[_._v("TAA")]),_._v(" "),r("ul",[r("li",[_._v('Reset All：复位所有元件标号，使其变成 " 字母 + ? " 的格式')]),_._v(" "),r("li",[_._v("Update Change List：对元件列表进行标号变更")]),_._v(" "),r("li",[_._v("Accept Changes（Create ECO）：表示接受编号变更，实现原理图的变更")])])]),_._v(" "),r("li",[_._v("生成 BOM 表："),r("strong",[_._v("RI")])]),_._v(" "),r("li",[_._v("更新 PCB："),r("strong",[_._v("DU")])]),_._v(" "),r("li",[_._v("左对齐（右）："),r("strong",[_._v("AL")]),_._v("（"),r("strong",[_._v("AR")]),_._v("）")])]),_._v(" "),r("h3",{attrs:{id:"pcb"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pcb"}},[_._v("#")]),_._v(" PCB")]),_._v(" "),r("ul",[r("li",[_._v("把原理图的变更导入 PCB："),r("strong",[_._v("DI")])]),_._v(" "),r("li",[_._v("把 PCB 的变更覆盖回原理图："),r("strong",[_._v("DU")])]),_._v(" "),r("li",[_._v("切换单位（英寸/毫米）："),r("strong",[_._v("Q")])]),_._v(" "),r("li",[_._v("旋转元器件（任意角度）："),r("strong",[_._v("EMO")])]),_._v(" "),r("li",[_._v("把元件放置在底层："),r("strong",[_._v("拖动同时按 L")])]),_._v(" "),r("li",[_._v("自动布局："),r("strong",[_._v("框选 + TOL")])]),_._v(" "),r("li",[_._v("设置坐标原点："),r("strong",[_._v("EOS")])]),_._v(" "),r("li",[_._v("设置栅格："),r("strong",[_._v("G")])]),_._v(" "),r("li",[_._v("自动布线："),r("strong",[_._v("UAA")])]),_._v(" "),r("li",[_._v("清除布线："),r("strong",[_._v("UUA")])]),_._v(" "),r("li",[_._v("高亮接线："),r("strong",[_._v("按住 Shift + 光标移至线")])]),_._v(" "),r("li",[_._v("高亮节点所对应连线："),r("strong",[_._v("按住 Ctrl + 左键单击")])]),_._v(" "),r("li",[_._v("水平翻转："),r("strong",[_._v("Ctrl + F")])]),_._v(" "),r("li",[_._v("测量："),r("strong",[_._v("Ctrl + M")])]),_._v(" "),r("li",[_._v("切换视图（二维 / 三维）："),r("strong",[_._v("2 / 3")])]),_._v(" "),r("li",[_._v("三维视图中旋转："),r("strong",[_._v("按住 Shift + 拖动")])]),_._v(" "),r("li",[_._v("清除过滤器："),r("strong",[_._v("Shift + C")])]),_._v(" "),r("li",[_._v("切换单层/多层显示："),r("strong",[_._v("Shift + S")])]),_._v(" "),r("li",[_._v("过孔盖油（可略，打板时可直接选择）\n"),r("ol",[r("li",[_._v("单击某一过孔")]),_._v(" "),r("li",[_._v("右键 - 查找相似对象")]),_._v(" "),r("li",[_._v("选择大小属性为 Same，确定以激活选择所有过孔")]),_._v(" "),r("li",[_._v("在属性中的 Solder Mask Expansion 中把顶层和底层都勾选上")])])]),_._v(" "),r("li",[_._v("设置布线规则\n"),r("ol",[r("li",[r("strong",[_._v("UAA")])]),_._v(" "),r("li",[_._v("新建策略并编辑规则")]),_._v(" "),r("li",[_._v("一般修改 Routing 中的规则（新建规则）\n"),r("ul",[r("li",[_._v("Width：设置线的粗细")]),_._v(" "),r("li",[_._v("Routing Via Style ：设置过孔规则")]),_._v(" "),r("li",[_._v("铺铜：？")])])])])])]),_._v(" "),r("h3",{attrs:{id:"原理图库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#原理图库"}},[_._v("#")]),_._v(" 原理图库")]),_._v(" "),r("p",[_._v("待补充……")]),_._v(" "),r("h3",{attrs:{id:"封装库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#封装库"}},[_._v("#")]),_._v(" 封装库")]),_._v(" "),r("ul",[r("li",[_._v("测量距离："),r("strong",[_._v("Ctrl + N")])]),_._v(" "),r("li",[_._v("切换单位（英寸/毫米）："),r("strong",[_._v("Q")])])]),_._v(" "),r("h2",{attrs:{id:"流程及规范"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#流程及规范"}},[_._v("#")]),_._v(" 流程及规范")]),_._v(" "),r("p",[_._v("一块电路板从无到有设计出来，基本流程如下：")]),_._v(" "),r("ol",[r("li",[_._v("初始化\n"),r("ol",[r("li",[_._v("新建项目")]),_._v(" "),r("li",[_._v("在项目内创建原理图和 PCB 文件")])])]),_._v(" "),r("li",[_._v("绘制原理图\n"),r("ol",[r("li",[_._v("完成后确保编译通过")])])]),_._v(" "),r("li",[_._v("绘制 PCB\n"),r("ol",[r("li",[_._v("从原理图导入变更")]),_._v(" "),r("li",[_._v("隐藏元件 Designator 标识\n"),r("ol",[r("li",[_._v("打开右侧 "),r("strong",[_._v("Properties")]),_._v(" 面板")]),_._v(" "),r("li",[_._v("点击 "),r("strong",[_._v("Designator")]),_._v(" 旁边的 "),r("strong",[_._v("眼睛")]),_._v(" 标志，即可关闭")])])]),_._v(" "),r("li",[_._v("绘制板形\n"),r("ul",[r("li",[_._v("切换 90°/45° 走线（"),r("strong",[_._v("Shift+Space")]),_._v("）")]),_._v(" "),r("li",[_._v("以所画形状定义板子（"),r("strong",[_._v("DSD")]),_._v("）")]),_._v(" "),r("li",[r("strong",[_._v("设置板框属性为机械层 1")])]),_._v(" "),r("li",[_._v("固定孔\n"),r("ul",[r("li",[_._v("M3 螺孔：内 "),r("strong",[_._v("3.1")]),_._v(" mm、外 "),r("strong",[_._v("4")]),_._v(" mm")])])])])]),_._v(" "),r("li",[_._v("排布元件\n"),r("ul",[r("li",[_._v("参考 ["),r("strong",[_._v("PCB 元件布局规范")]),_._v("](post/电路设计/PCB 元件布局规范。md)")])])]),_._v(" "),r("li",[_._v("布线\n"),r("ul",[r("li",[_._v("设置布线规则\n"),r("ul",[r("li",[_._v("参考 ["),r("strong",[_._v("PCB 布线规范")]),_._v("](post/电路设计/PCB 布线规范。md)")])])]),_._v(" "),r("li",[r("strong",[_._v("不要开启自动布线！")])]),_._v(" "),r("li",[r("strong",[_._v("开启泪滴功能")])])])]),_._v(" "),r("li",[_._v("字体标识（引脚标识 / 版权 / 迷惑性文字）\n"),r("ul",[r("li",[_._v("放置于丝印层（顶层 / 底层）")]),_._v(" "),r("li",[_._v("放底层要先镜像")])])]),_._v(" "),r("li",[_._v("敷铜（"),r("strong",[_._v("PG")]),_._v("）\n"),r("ul",[r("li",[_._v("参考 ["),r("strong",[_._v("PCB 布线规范")]),_._v("](post/电路设计/PCB 布线规范。md)")])])])])]),_._v(" "),r("li",[_._v("打板\n"),r("ol",[r("li",[_._v("保存项目")]),_._v(" "),r("li",[_._v("将 "),r("strong",[_._v(".pcb")]),_._v(" 文件压缩（这样做似乎不太对，可以的话导出 Gerber）")]),_._v(" "),r("li",[_._v("上传至 "),r("strong",[_._v("嘉立创下单助手")])]),_._v(" "),r("li",[_._v("（可选 SMT)")])])])]),_._v(" "),r("h2",{attrs:{id:"其他知识"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他知识"}},[_._v("#")]),_._v(" 其他知识")]),_._v(" "),r("h3",{attrs:{id:"元件属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#元件属性"}},[_._v("#")]),_._v(" 元件属性")]),_._v(" "),r("ul",[r("li",[r("strong",[_._v("Designator")]),_._v("：元件位号，是元件的唯一标识，用来标识原理图中的不同的元件\n"),r("ul",[r("li",[r("strong",[_._v("R")]),_._v("：电阻")]),_._v(" "),r("li",[r("strong",[_._v("RN")]),_._v("：排阻")]),_._v(" "),r("li",[r("strong",[_._v("C")]),_._v("：电容")]),_._v(" "),r("li",[r("strong",[_._v("J")]),_._v("：接口/跳线")]),_._v(" "),r("li",[r("strong",[_._v("X")]),_._v("：晶振")]),_._v(" "),r("li",[r("strong",[_._v("D")]),_._v("：二极管")]),_._v(" "),r("li",[r("strong",[_._v("Q")]),_._v(" 或 "),r("strong",[_._v("T")]),_._v("：三极管")]),_._v(" "),r("li",[r("strong",[_._v("FB")]),_._v("：磁珠")]),_._v(" "),r("li",[r("strong",[_._v("U")]),_._v("：芯片")]),_._v(" "),r("li",[r("strong",[_._v("TP")]),_._v("：测试点")])])]),_._v(" "),r("li",[r("strong",[_._v("Comment")]),_._v("：元件大小参数，如电阻的阻值、电容的容值、IC 芯片型号等")]),_._v(" "),r("li",[r("strong",[_._v("Description")]),_._v("：用于填写元件的功能描述")])]),_._v(" "),r("h3",{attrs:{id:"logo-添加"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#logo-添加"}},[_._v("#")]),_._v(" Logo 添加")]),_._v(" "),r("p",[_._v("参考文章 "),r("a",{attrs:{href:"https://seujxh.wordpress.com/2018/10/03/logo%E6%B7%BB%E5%8A%A0/",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[_._v("Logo 添加")]),r("OutboundLink")],1),_._v(" 。")]),_._v(" "),r("h3",{attrs:{id:"使用-git-管理项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-git-管理项目"}},[_._v("#")]),_._v(" 使用 Git 管理项目")]),_._v(" "),r("p",[_._v("Altium Designer 支持使用 Git/SVN 用以版本控制。如果使用 Git, 直接在项目所在路径建立 Git 仓库即可。重启 Altium Designer, 会看到文件树边上出现了版本状态：")]),_._v(" "),r("p",[r("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200421100348.png",alt:""}})]),_._v(" "),r("p",[_._v("可以在 "),r("code",[_._v("工程（C） - 版本控制（E）")]),_._v(" 菜单直接进行 Git 操作，甚至可以直接提交 GitHub.")]),_._v(" "),r("p",[_._v("提交远程仓库时，注意要添加 "),r("code",[_._v(".gitignore")]),_._v(" 文件（忽略掉本地缓存文件），内容如下：")]),_._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[_._v(".gitignore\nHistory\nProject Logs for *\nProject Outputs for *\n*.PcbDocPreview\n*.PrjPCBStructure\n*.SchDocPreview\n")])])]),r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结")]),_._v(" "),r("p",[_._v("以上是 Altium Designer 及电路设计的基本知识。"),r("br"),_._v("\n下一章，我们将着手开始原理图的设计。")]),_._v(" "),r("h2",{attrs:{id:"参考与致谢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考与致谢"}},[_._v("#")]),_._v(" 参考与致谢")]),_._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://seujxh.wordpress.com/2018/09/30/altium%e5%85%ac%e5%8f%b8altium-designer%e4%b8%93%e6%a0%8f/",target:"_blank",rel:"noopener noreferrer"}},[_._v("Altium 公司 Altium Designer 专栏"),r("OutboundLink")],1)]),_._v(" "),r("li",[r("a",{attrs:{href:"http://club.szlcsc.com/article/details_2757_1.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("嘉立创 SMT 贴片 可贴列表 PADS 集成库 \\（正式版、)"),r("OutboundLink")],1)]),_._v(" "),r("li",[r("a",{attrs:{href:"https://blog.csdn.net/weifengdq/article/details/78406438",target:"_blank",rel:"noopener noreferrer"}},[_._v("Altium Designer 使用 Git 构想"),r("OutboundLink")],1)]),_._v(" "),r("li",[_._v("彬哥整理的经验和笔记")])]),_._v(" "),r("blockquote",[r("p",[_._v("文章作者："),r("strong",[_._v("Power Lin")]),r("br"),_._v("\n原文地址："),r("a",{attrs:{href:"https://wiki-power.com",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://wiki-power.com"),r("OutboundLink")],1),r("br"),_._v("\n版权声明：文章采用 "),r("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[_._v("CC BY-NC-SA 4.0"),r("OutboundLink")],1),_._v(" 协议，转载请注明出处。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);