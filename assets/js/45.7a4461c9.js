(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{490:function(t,e,a){"use strict";a.r(e);var r=a(14),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"stm32-的启动模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stm32-的启动模式"}},[t._v("#")]),t._v(" STM32 的启动模式")]),t._v(" "),a("p",[t._v("STM32 提供了 BOOT1 与 BOOT0 引脚，可以通过设置引脚的状态，以选择上电复位后的启动模式。")]),t._v(" "),a("p",[t._v("以下为三种启动模式：")]),t._v(" "),a("h2",{attrs:{id:"_1-从主闪存存储器启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-从主闪存存储器启动"}},[t._v("#")]),t._v(" 1. 从主闪存存储器启动")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("BOOT0")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("BOOT1")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("低")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("任意")])])])]),t._v(" "),a("p",[t._v("从片上 Flash 存储器启动（就是参数为 64K / 128K / 256K 的 Flash），一般正常情况下是这样配置的。")]),t._v(" "),a("h2",{attrs:{id:"_2-从系统存储器启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-从系统存储器启动"}},[t._v("#")]),t._v(" 2. 从系统存储器启动")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("BOOT0")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("BOOT1")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("高")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("低")])])])]),t._v(" "),a("p",[t._v("使用串口 / ISP 下载程序时，需要配置这种模式。")]),t._v(" "),a("h2",{attrs:{id:"_3-从内置-sram-启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-从内置-sram-启动"}},[t._v("#")]),t._v(" 3. 从内置 SRAM 启动")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("BOOT0")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("BOOT1")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("高")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("高")])])])]),t._v(" "),a("p",[t._v("从内置 SRAM 启动，用途有两个：")]),t._v(" "),a("ul",[a("li",[t._v("用于反复下载调试时，提高效率（因为下载到 Flash 相对慢）。需要注意的是，断电程序将丢失")]),t._v(" "),a("li",[t._v("用于解除芯片的读保护功能 / 擦除 Flash 恢复出厂")])]),t._v(" "),a("h2",{attrs:{id:"补充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充"}},[t._v("#")]),t._v(" 补充")]),t._v(" "),a("p",[t._v("以上图表中 "),a("code",[t._v("高")]),t._v(" "),a("code",[t._v("低")]),t._v(" 表示接 10K 电阻上拉 / 下拉，而非直连 VCC / GND")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200603134417.jpg",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"参考与致谢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考与致谢"}},[t._v("#")]),t._v(" 参考与致谢")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/Creative_Team/article/details/79315876",target:"_blank",rel:"noopener noreferrer"}},[t._v("STM32 BOOT0、BOOT1 的配置"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/weixin_34349320/article/details/86231081?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase",target:"_blank",rel:"noopener noreferrer"}},[t._v("STM32 BOOT 模式配置以及作用"),a("OutboundLink")],1)])]),t._v(" "),a("blockquote",[a("p",[t._v("文章作者："),a("strong",[t._v("Power Lin")]),a("br"),t._v("\n原文地址："),a("a",{attrs:{href:"https://wiki-power.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki-power.com"),a("OutboundLink")],1),a("br"),t._v("\n版权声明：文章采用 "),a("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC BY-NC-SA 4.0"),a("OutboundLink")],1),t._v(" 协议，转载请注明出处。")])])])}),[],!1,null,null,null);e.default=n.exports}}]);