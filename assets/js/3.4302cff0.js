(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4],{166:function(t,e,n){},181:function(t,e,n){"use strict";var u=n(166);n.n(u).a},182:function(t,e,n){},188:function(t,e,n){"use strict";n.r(e);var u=n(24),a=n(0),o={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}},s={name:"SWUpdatePopup",data:function(){return{rawPopupConfig:{message:"内容更新啦!",buttonText:"朕知道了"},updateEvent:null}},computed:{popupConfig:function(){return Object(a.g)(this,this.rawPopupConfig)},enabled:function(){return Boolean(this.popupConfig&&this.updateEvent)},message:function(){var t=this.popupConfig;return t&&t.message||o["/"].message},buttonText:function(){var t=this.popupConfig;return t&&t.buttonText||o["/"].buttonText}},created:function(){u.a.$on("sw-updated",this.onSWUpdated),!0==={message:"内容更新啦!",buttonText:"朕知道了"}&&(this.rawPopupConfig=o)},methods:{onSWUpdated:function(t){this.updateEvent=t},reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then((function(){location.reload(!0)})),this.updateEvent=null)}}},i=(n(181),n(10)),p=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)+"\n\n      "),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v("\n        "+t._s(t.buttonText)+"\n      ")])]):t._e()],{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)}),[],!1,null,"03f17113",null);e.default=p.exports},223:function(t,e,n){"use strict";var u=n(182);n.n(u).a},227:function(t,e,n){"use strict";n.r(e);var u={components:{SWUpdatePopup:n(188).default}},a=(n(223),n(10)),o=Object(a.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SWUpdatePopup",{scopedSlots:t._u([{key:"default",fn:function(e){var u=e.enabled,a=e.reload,o=e.message,s=e.buttonText;return u?n("div",{staticClass:"my-sw-update-popup"},[t._v("\n    "+t._s(o)+"\n    "),n("br"),n("button",{on:{click:a}},[t._v(t._s(s))]),n("br")]):t._e()}}],null,!0)})}),[],!1,null,null,null);e.default=o.exports}}]);