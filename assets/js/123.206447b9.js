(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{579:function(e,t,r){"use strict";r.r(t);var a=r(14),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"函数思想在电路设计中的应用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#函数思想在电路设计中的应用"}},[e._v("#")]),e._v(" 函数思想在电路设计中的应用")]),e._v(" "),r("p",[e._v("—— 基于 Altium Designer")]),e._v(" "),r("h2",{attrs:{id:"背景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[e._v("#")]),e._v(" 背景")]),e._v(" "),r("blockquote",[r("p",[e._v("永远以构建一个王国的视角去做开发，而不是单纯画一块电路板、设计一种方案。")])]),e._v(" "),r("p",[e._v("在程序设计中，我们会遇到各种各样复杂的数据和情况，如果放任不管，随着开发的推进，代码熵值将急剧增加。函数和库正是为了解决这类问题而出现的。将代码一层一层封装起来，我们将得到一个井然有序的系统，从全局的视角出发，而不用关心任何我们不需要关注的细节。")]),e._v(" "),r("p",[e._v("类比到硬件电路设计中，底层构成元素即分立元件，实现特定功能的模块即函数封装，到了全局层面，可以调用各类模块，组成一类电路解决方案。封装复用的思想，可以帮助我们更系统性地、自上而下设计电路，如同构建一个王国一般。")]),e._v(" "),r("p",[e._v("注：首段「封装」一词为计算机程序术语，后文「封装」为电路术语。")]),e._v(" "),r("h2",{attrs:{id:"元件层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#元件层"}},[e._v("#")]),e._v(" 元件层")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200131212452.png",alt:""}})]),e._v(" "),r("p",[e._v("在元件层面，每个元素（元件）的规格也应该尽量做到统一。我个人的解决方案是，所有出现在我电路方案中的元件符号 / PCB 封装，皆调用于我个人整理的原理图库 / 封装库。")]),e._v(" "),r("p",[e._v("有人可能会问，大部分元器件符号和封装都可以在网上轻易地找到，甚至有人将 90% 以上元器件都整理成库了，为什么还要做重复的工作？"),r("br"),e._v("\n有句话说得好，下层基础决定上层建筑。举个例子，某个芯片符号什么样子更方便布线，某个电感用什么样的封装比较容易买到，某个 MOS 封装上可以打孔散热，等等。再厉害的人制定的标准，也不一定完全适用于你。建立自己的标准，把房子建在自家地皮上，才是最明智的做法。")]),e._v(" "),r("h2",{attrs:{id:"功能模块层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#功能模块层"}},[e._v("#")]),e._v(" 功能模块层")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200131212642.png",alt:""}})]),e._v(" "),r("p",[e._v("基于底层的分立元件，我们可以构建不同的功能模块。功能模块的用途是方便快捷开发。举个例子，我在许多项目中都会用到稳压电路，那我可以挑出比较优秀的方案，按照数据手册，封装成一个个模块，留出函数接口（输入 / 输出端口），标注好属性（稳压电流 / 效率等）。在需要用到的时候，不必管功能模块内部的实现，就像搭积木一般，从顶层进行项目方案的堆叠。")]),e._v(" "),r("p",[e._v("Altium Designer 为我们提供了片断摘录的功能。我们可以将日常接触的功能模块封装起来，方便日后调用。")]),e._v(" "),r("h2",{attrs:{id:"项目层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#项目层"}},[e._v("#")]),e._v(" 项目层")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200131213218.png",alt:""}})]),e._v(" "),r("p",[e._v("到了项目方案设计层面，模块化的思想已经显而易见了。通过 Altium Designer 层次化原理图设计功能，我们可以将注意力集中于每个模块的接口，直接操作接口，即可实现整体电路的功能。在这种设计模式下，每个模块之间的耦合度并不高，我们可以随时轻易替换实现某一类功能的模块；也可以通过多通道的功能，对模块进行复用。条理清晰的项目，对接下来的 PCB 模块化布局、多通道布线复用都大有益处，更方便了日后的排错与更新。")]),e._v(" "),r("h1",{attrs:{id:"参考与致谢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考与致谢"}},[e._v("#")]),e._v(" 参考与致谢")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/25288280",target:"_blank",rel:"noopener noreferrer"}},[e._v("编程的几个思想"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/linyuxuanlin/Power_Lib_Altium",target:"_blank",rel:"noopener noreferrer"}},[e._v("linyuxuanlin/Power_Lib_Altium"),r("OutboundLink")],1),e._v("：我整理的原理图库 / 封装库")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/linyuxuanlin/Modularity_of_Functional_Circuit",target:"_blank",rel:"noopener noreferrer"}},[e._v("linyuxuanlin/Modularity_of_Functional_Circuit"),r("OutboundLink")],1),e._v("：我绘制的功能电路模块")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.altium.com/documentation/altium-designer/multi-sheet-and-multi-channel-design-ad?version=18.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Multi-Sheet and Multi-Channel Design"),r("OutboundLink")],1),e._v("：图三来源")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI0ODU0NDI1Mg==&mid=2247493415&idx=1&sn=48868c853d82747e537d9571e02f9c4c&chksm=e99d89b4deea00a2cb26bc62c13bf9bb8955018b47b9b4c091dc98fe776d853039ba84ce480f&mpshare=1&scene=1&srcid=&sharer_sharetime=1588583649159&sharer_shareid=57baeb2b96d0cff9b17ac2c15b36602b&key=54a344d7200e25b224dfb50449a0a3835910904754e85f2f5687170aa3dc9cd1cada606d232a271784f6c37d841af2a681ce3312fe043716d933a48bc88fdfc38a50be9eeb42cc316538f1781f865de5&ascene=1&uin=MTk5MDUwOTA0Mg%3D%3D&devicetype=Windows+10+x64&version=62090070&lang=zh_CN&exportkey=A638hkClxH9AKARxE%2F2NsRw%3D&pass_ticket=DbttLz0NrPJvKfz31VIx1Sw50my315siej6rJhYtISz9sd1CObS%2BjG%2BOC%2FzHEXzj",target:"_blank",rel:"noopener noreferrer"}},[e._v("详论单片机固件模块化架构设计"),r("OutboundLink")],1)])]),e._v(" "),r("blockquote",[r("p",[e._v("文章作者："),r("strong",[e._v("Power Lin")]),r("br"),e._v("\n原文地址："),r("a",{attrs:{href:"https://wiki-power.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki-power.com"),r("OutboundLink")],1),r("br"),e._v("\n版权声明：文章采用 "),r("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC BY-NC-SA 4.0"),r("OutboundLink")],1),e._v(" 协议，转载请注明出处。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);