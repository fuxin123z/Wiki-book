(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{464:function(t,_,v){"use strict";v.r(_);var e=v(10),r=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"电源的设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#电源的设计"}},[t._v("#")]),t._v(" 电源的设计")]),t._v(" "),v("h2",{attrs:{id:"需求分析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#需求分析"}},[t._v("#")]),t._v(" 需求分析")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("功能")]),t._v("：输入电压、电流（变动范围）；输出电压、电流等，还要达到总体的功率指标，实现系统最大转换效率。")]),t._v(" "),v("li",[v("strong",[t._v("性能")]),t._v("：输出电压上的纹波大小、带负载的能力、效率、发热程度等")]),t._v(" "),v("li",[v("strong",[t._v("成本")]),t._v("：系统综合成本，不仅计算核心器件，还要包括外围器件，比如电感或线圈、电容、驱动 MOSFET 管等等；板卡面积的增加也会导致系统成本的增加；设计工具、测试设备等等可能带来的系统成本的增加也都一并考虑在内。")]),t._v(" "),v("li",[v("strong",[t._v("空间")]),t._v("：任何一个电子产品都是有空间尺寸的限制的，尤其是电源部分在一个电子产品中放置的位置是非常讲究的，要考虑到周边其它电路的空间位置、关键接插件的位置及方向，还有散热、干扰在空间的分布等因素。")]),t._v(" "),v("li",[v("strong",[t._v("时间点")]),t._v("：电子产品都有其设计到生产的生命周期，设计的难易程度、元器件的选择等都会直接影响到产品的上市时间，任何一个项目都要以产品规定的时间节点为基础做项目进程的规划。")])]),t._v(" "),v("h2",{attrs:{id:"方案确定"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#方案确定"}},[t._v("#")]),t._v(" 方案确定")]),t._v(" "),v("p",[t._v("线性稳压与开关稳压的对比：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}}),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("线性稳压")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("开关稳压")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("效率")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("低（30% ~ 60%）")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("高（70% ~ 90%）")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("稳压模式")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("只能降压")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("降压、升压、反压")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("发热量")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("大")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("小")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("体积")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("大")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("小")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("重量")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("重")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("轻")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("稳定度")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("高")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("一般")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("噪声")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("有（需噪声对策）")])])])]),t._v(" "),v("p",[v("strong",[t._v("线性稳压")]),t._v(" 由工作在线性状态的三极管构成可变电阻对负载进行恒流控制，得到稳定的电压输出，这种方式结构简单、噪声抑制度很高（达到 60dB 也就是 1000 倍以上），但一般效率比较低，要满足输入电压高于输出电压一定的压差才能够稳压，只能做降压变换。常规的线性稳压器的压差高达 2.5V，因此效率比较低。线性稳压电路简单、纹波小，对输入端的毛刺抑制度（PSRR）高，但能量的损耗都以发热的方式通过器件扩散。\nLDO（低压差线性稳压器）可以做到较低的压差，比如在负载高达 1A 的情况下压差可以降低到 350mA，其效率取决于具体使用的输入和输出电压的情况。")]),t._v(" "),v("p",[v("strong",[t._v("开关稳压")]),t._v(" 由工作在开关模式的三极管和储能的电感以及平滑纹波的电容构成，以 PWM 或 PFM 的方式得到稳定的输出电压。开关方式的好处是能够降压、升压、反压，输入电压的范围可以很宽，效率可以做到很高（有的能达到 95% 以上），缺点是外围电路比较复杂，外围元器件的选型比较敏感，另外高频的开关信号会在电压输出上带来较大的干扰、纹波。")]),t._v(" "),v("h3",{attrs:{id:"线性稳压"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#线性稳压"}},[t._v("#")]),t._v(" 线性稳压")]),t._v(" "),v("p",[t._v("效率：η = Vout / Vin")]),t._v(" "),v("p",[v("strong",[t._v("稳压情况")]),t._v("：")]),t._v(" "),v("ul",[v("li",[t._v("Vout < Vin")])]),t._v(" "),v("p",[v("strong",[t._v("优点")]),t._v("：")]),t._v(" "),v("ul",[v("li",[t._v("电路简单、便宜")]),t._v(" "),v("li",[t._v("输出端噪声低")]),t._v(" "),v("li",[t._v("对噪声的隔离度高")]),t._v(" "),v("li",[t._v("快速的瞬态响应")])]),t._v(" "),v("p",[v("strong",[t._v("缺点")]),t._v("：")]),t._v(" "),v("ul",[v("li",[t._v("需要一定的压差才能起到稳压的作用，因此只能降压使用")]),t._v(" "),v("li",[t._v("在压差比较大的情况下，转换效率比较低，损耗都以 “热” 的方式消耗掉，并影响板卡的稳定性、可靠性")]),t._v(" "),v("li",[t._v("功率至上，即便负载电路并不需要很大电流。这样做的后果就是所有元件即便非必要的时候也工作在满负荷下，结果产生高很多的热量。")])]),t._v(" "),v("p",[t._v("压降：\n"),v("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200202231005.png",alt:""}})]),t._v(" "),v("p",[v("strong",[t._v("应用")]),t._v("：")]),t._v(" "),v("ul",[v("li",[t._v("对供电电源的噪声要求严格的模拟电路、时钟产生电路等")]),t._v(" "),v("li",[t._v("小电流、电源转换效率影响不大的数字电路供电场景")])]),t._v(" "),v("h3",{attrs:{id:"开关稳压-电容变换（电荷泵）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开关稳压-电容变换（电荷泵）"}},[t._v("#")]),t._v(" 开关稳压 - 电容变换（电荷泵）")]),t._v(" "),v("p",[v("strong",[t._v("稳压情况")]),t._v("：")]),t._v(" "),v("ul",[v("li",[t._v("Vout > Vin（两倍、三倍……）")]),t._v(" "),v("li",[t._v("Vout < Vin（极少见）")]),t._v(" "),v("li",[t._v("负压输出（反极性）")])]),t._v(" "),v("p",[v("strong",[t._v("优点")]),t._v("：")]),t._v(" "),v("ul",[v("li",[t._v("比 LDO 更高的转换效率")]),t._v(" "),v("li",[t._v("设计简单，只需要电容变化")])]),t._v(" "),v("p",[v("strong",[t._v("缺点")]),t._v("：")]),t._v(" "),v("ul",[v("li",[t._v("有限的输入输出范围")]),t._v(" "),v("li",[t._v("标准的电荷泵是不带调压的，具有调压特性的电荷泵，通常会有较高的损耗")]),t._v(" "),v("li",[t._v("非常有限的电流输出能力")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200206145007.png",alt:""}})]),t._v(" "),v("h3",{attrs:{id:"开关稳压-电感变换"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开关稳压-电感变换"}},[t._v("#")]),t._v(" 开关稳压 - 电感变换")]),t._v(" "),v("p",[v("strong",[t._v("稳压情况")]),t._v("：")]),t._v(" "),v("ul",[v("li",[t._v("Vout > Vin（Boost）")]),t._v(" "),v("li",[t._v("Vout < Vin（Buck）")]),t._v(" "),v("li",[t._v("Vin_min < Vout < Vin_max（Buck-Boost）（升降压）")]),t._v(" "),v("li",[t._v("负压输出（反极性）")])]),t._v(" "),v("p",[v("strong",[t._v("优点")]),t._v("：")]),t._v(" "),v("ul",[v("li",[t._v("能达到最高的效率")]),t._v(" "),v("li",[t._v("很多种不同的拓扑结构，可满足更多设计的需求")]),t._v(" "),v("li",[t._v("可实现隔离变换")])]),t._v(" "),v("p",[v("strong",[t._v("缺点")]),t._v("：")]),t._v(" "),v("ul",[v("li",[t._v("比较复杂的解决方案")]),t._v(" "),v("li",[t._v("引入磁场")]),t._v(" "),v("li",[t._v("不可避免的开关噪声")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200206145045.png",alt:""}})]),t._v(" "),v("h2",{attrs:{id:"元器件选型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#元器件选型"}},[t._v("#")]),t._v(" 元器件选型")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("功能")]),t._v("：是否满足输入／输出电压及电流要求")]),t._v(" "),v("li",[v("strong",[t._v("性能")]),t._v("：尽可能低的纹波、噪声，尽可能高的转换效率")]),t._v(" "),v("li",[v("strong",[t._v("价格")]),t._v("：整体系统成本")]),t._v(" "),v("li",[v("strong",[t._v("供货渠道")]),t._v("：是否容易购买")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200202192814.png",alt:""}})]),t._v(" "),v("ul",[v("li",[t._v("线性稳压\n"),v("ul",[v("li",[v("strong",[t._v("78xx")]),t._v("：固定输出， 最经典的三端稳压器，xx 表示了稳压输出的电压值（LM7805 输出 5V 稳压），最大输出电流为 1A（LM7805 的输出电流为最大 1A，LM78M05 的输出电流最大为 500mA，而 LM78L05 的输出电流最大为 100mA），要求输入电压和输出电压之间的压差为 2.5V 以上，其转换效率为 Vout/Vin（输入 12V 的电压，得到 5v 的稳压输出，其效率为 5/12 = 41.6%，如果负载电流达到 1A 的情况下，7805 器件上的热损耗高达（12-5）*1 = 7W，这就是为什么很多 78xx 系列的器件上必须加上散热片的缘故）")]),t._v(" "),v("li",[v("strong",[t._v("79xx")]),t._v("：固定输出，78xx 得到的是对地正电压，79xx 得到的是对地负电压，经常配对使用。其他参数 78xx 相同")]),t._v(" "),v("li",[v("strong",[t._v("LM317/LM117")]),t._v("：可调输出，输出电压可以调节，最大输出电路可以高达 1.5A，也要求 2.5v 以上的压差才能正常稳压工作，具备与 78xx 一样的优点和缺点")]),t._v(" "),v("li",[v("strong",[t._v("1117 系列")]),t._v("：LDO，要求的输入电压和输出电压的差值为 1.2V. 输出电流只有最高 800mA")]),t._v(" "),v("li",[v("strong",[t._v("LP5907")]),t._v("：LDO，压差则可以做到典型值 120mV，甚至负载电流更小的时候能够在 50mV 的压差下得到稳压输出。效率可以高达 90%. 最大输出电流为 250mA")]),t._v(" "),v("li",[v("strong",[t._v("TPS51200")]),t._v("：LDO，输出电流高达 3A")])])]),t._v(" "),v("li",[t._v("开关稳压\n"),v("ul",[v("li",[v("strong",[t._v("MC34063A")]),t._v("：效率比较低（现在看来开关频率只有 100KHz），对外围器件的要求高（由于开关频率较低，要得到较大的电流输出，所需要的电感的个头就要比较大）")]),t._v(" "),v("li",[v("strong",[t._v("LM2576")]),t._v("：外围电路简单，像线性稳压器，可以在较宽的输入电压范围内获得较高的效率，可以用在不需要在意电源纹波（比如数字器件的供电）的场合替代掉 78xx、317 以及 1117 等")]),t._v(" "),v("li",[v("strong",[t._v("LMZ21701")]),t._v("：工作频率高达 2.5MHz，电路可以做得非常小，在能够供电 1A 的情况下可以输出常用的 1.2V、1.8V、2.5V、3.3V 以及 5V，并且有可调输出的版本")]),t._v(" "),v("li",[v("strong",[t._v("LTM4644")]),t._v("：集成度高，能够提供 4 路输出且拥有较小的体积，可以说是现在高速的处理器、FPGA 最佳的供电选择。其相当高的集成度以及内部的时序控制、保护电路等都是你用很多器件堆不出来的")])])])]),t._v(" "),v("p",[t._v("以上为经典的稳压芯片。在设计电源电路时，我们还可以按电源设计参数来挑选芯片。可以用 "),v("a",{attrs:{href:"http://www.ti.com.cn/cn/reference-designs/index.html",target:"_blank",rel:"noopener noreferrer"}},[v("strong",[t._v("TI 参考设计")]),v("OutboundLink")],1),t._v(" 这个工具来辅助芯片选型。")]),t._v(" "),v("h2",{attrs:{id:"pcb-设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pcb-设计"}},[t._v("#")]),t._v(" PCB 设计")]),t._v(" "),v("p",[t._v("尽量根据元件数据手册提供的参考布局。示例：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200202194045.png",alt:""}})]),t._v(" "),v("h2",{attrs:{id:"参考与致谢"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考与致谢"}},[t._v("#")]),t._v(" 参考与致谢")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s/l4-iG3Ki4R70X8GeHg3OpA",target:"_blank",rel:"noopener noreferrer"}},[t._v("最受全球工程师欢迎的 10 款稳压器件"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s/19ePnO54yBIvatcj5nVRBg",target:"_blank",rel:"noopener noreferrer"}},[t._v("开关电源设计的关键 7 步"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s/ilSCii7jw9DHfIqorrq5Yg",target:"_blank",rel:"noopener noreferrer"}},[t._v("开关电源知多少？"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://www.eetree.cn/wiki/ps_design_case#%E7%94%B5%E5%AD%90%E4%BA%A7%E5%93%81%E4%B8%AD%E7%94%B5%E6%BA%90%E7%94%B5%E8%B7%AF%E7%9A%84%E8%AE%BE%E8%AE%A1%E4%B8%BE%E4%BE%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("电子产品中电源电路的设计举例"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://www.eetree.cn/wiki/powersupply",target:"_blank",rel:"noopener noreferrer"}},[t._v("电源及管理"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s/R6c96mmincweZ_xV7ex2QQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("漫画解电源，初学者福音！"),v("OutboundLink")],1)])]),t._v(" "),v("blockquote",[v("p",[t._v("文章作者："),v("strong",[t._v("Power Lin")]),v("br"),t._v("\n原文地址："),v("a",{attrs:{href:"https://wiki-power.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki-power.com"),v("OutboundLink")],1),v("br"),t._v("\n版权声明：文章采用 "),v("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC BY-NC-SA 4.0"),v("OutboundLink")],1),t._v(" 协议，转载请注明出处。")])])])}),[],!1,null,null,null);_.default=r.exports}}]);