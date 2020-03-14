(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{323:function(t,a,r){"use strict";r.r(a);var e=r(8),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"函数思想在电路设计中的应用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#函数思想在电路设计中的应用"}},[t._v("#")]),t._v(" 函数思想在电路设计中的应用")]),t._v(" "),r("p",[t._v("基于 Altium Designer")]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"背景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),r("blockquote",[r("p",[t._v("永远以构建一个王国的视角去做开发，而不是单纯画一块电路板、设计一种方案。")])]),t._v(" "),r("p",[t._v("在程序设计中，我们会遇到各种各样复杂的数据和情况，如果放任不管，随着开发的推进，代码熵值将急剧增加。函数和库正是为了解决这类问题而出现的。将代码一层一层封装起来，我们将得到一个井然有序的系统，从全局的视角出发，而不用关心任何我们不需要关注的细节。")]),t._v(" "),r("p",[t._v("类比到硬件电路设计中，底层构成元素即分立元件，实现特定功能的模块即函数封装，到了全局层面，可以调用各类模块，组成一类电路解决方案。封装复用的思想，可以帮助我们更系统性地、自上而下设计电路，如同构建一个王国一般。")]),t._v(" "),r("p",[t._v("注：首段「封装」一词为计算机程序术语，后文「封装」为电路术语。")]),t._v(" "),r("h2",{attrs:{id:"元件层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#元件层"}},[t._v("#")]),t._v(" 元件层")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200131212452.png",alt:""}})]),t._v(" "),r("p",[t._v("在元件层面，每个元素（元件）的规格也应该尽量做到统一。我个人的解决方案是，所有出现在我电路方案中的元件符号 / PCB 封装，皆调用于我个人整理的原理图库 / 封装库。")]),t._v(" "),r("p",[t._v("有人可能会问，大部分元器件符号和封装都可以在网上轻易地找到，甚至有人将 90% 以上元器件都整理成库了，为什么还要做重复的工作？"),r("br"),t._v("\n有句话说得好，下层基础决定上层建筑。举个例子，某个芯片符号什么样子更方便布线，某个电感用什么样的封装比较容易买到，某个 MOS 封装上可以打孔散热，等等。再厉害的人制定的标准，也不一定完全适用于你。建立自己的标准，把房子建在自家地皮上，才是最明智的做法。")]),t._v(" "),r("h2",{attrs:{id:"功能模块层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#功能模块层"}},[t._v("#")]),t._v(" 功能模块层")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200131212642.png",alt:""}})]),t._v(" "),r("p",[t._v("基于底层的分立元件，我们可以构建不同的功能模块。功能模块的用途是方便快捷开发。举个例子，我在许多项目中都会用到稳压电路，那我可以挑出比较优秀的方案，按照数据手册，封装成一个个模块，留出函数接口（输入 / 输出端口），标注好属性（稳压电流 / 效率等）。在需要用到的时候，不必管功能模块内部的实现，就像搭积木一般，从顶层进行项目方案的堆叠。")]),t._v(" "),r("p",[t._v("Altium Designer 为我们提供了片断摘录的功能。我们可以将日常接触的功能模块封装起来，方便日后调用。")]),t._v(" "),r("h2",{attrs:{id:"项目层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#项目层"}},[t._v("#")]),t._v(" 项目层")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200131213218.png",alt:""}})]),t._v(" "),r("p",[t._v("到了项目方案设计层面，模块化的思想已经显而易见了。通过 Altium Designer 层次化原理图设计功能，我们可以将注意力集中于每个模块的接口，直接操作接口，即可实现整体电路的功能。在这种设计模式下，每个模块之间的耦合度并不高，我们可以随时轻易替换实现某一类功能的模块；也可以通过多通道的功能，对模块进行复用。条理清晰的项目，对接下来的 PCB 模块化布局、多通道布线复用都大有益处，更方便了日后的排错与更新。")]),t._v(" "),r("h1",{attrs:{id:"参考与致谢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考与致谢"}},[t._v("#")]),t._v(" 参考与致谢")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/25288280",target:"_blank",rel:"noopener noreferrer"}},[t._v("编程的几个思想"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/linyuxuanlin/Power_Lib_Altium",target:"_blank",rel:"noopener noreferrer"}},[t._v("linyuxuanlin/Power_Lib_Altium"),r("OutboundLink")],1),t._v("：我整理的原理图库 / 封装库")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/linyuxuanlin/Modularity_of_Functional_Circuit",target:"_blank",rel:"noopener noreferrer"}},[t._v("linyuxuanlin/Modularity_of_Functional_Circuit"),r("OutboundLink")],1),t._v("：我绘制的功能电路模块")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.altium.com/documentation/altium-designer/multi-sheet-and-multi-channel-design-ad?version=18.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Multi-Sheet and Multi-Channel Design"),r("OutboundLink")],1),t._v("：图三来源")])])])}),[],!1,null,null,null);a.default=n.exports}}]);