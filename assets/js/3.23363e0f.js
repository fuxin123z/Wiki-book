(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{397:function(t,e,n){"use strict";var r=n(224),i=n(13),a=n(24),s=n(27),o=n(226),u=n(225);r("match",1,(function(t,e,n){return[function(e){var n=s(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var s=i(t),c=String(this);if(!s.global)return u(s,c);var l=s.unicode;s.lastIndex=0;for(var h,d=[],p=0;null!==(h=u(s,c));){var f=String(h[0]);d[p]=f,""===f&&(s.lastIndex=o(c,a(s.lastIndex),l)),p++}return 0===p?null:d}]}))},414:function(t,e,n){},447:function(t,e,n){"use strict";var r=n(224),i=n(13),a=n(27),s=n(448),o=n(225);r("search",1,(function(t,e,n){return[function(e){var n=a(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var a=i(t),u=String(this),c=a.lastIndex;s(c,0)||(a.lastIndex=0);var l=o(a,u);return s(a.lastIndex,c)||(a.lastIndex=c),null===l?-1:l.index}]}))},448:function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},449:function(t,e,n){"use strict";var r=n(414);n.n(r).a},456:function(t,e,n){"use strict";n.r(e);n(95),n(23),n(227),n(92),n(41),n(397),n(93),n(447);var r={name:"UtterancesComments",props:{title:{type:String,required:!0},repo:{type:String,required:!0},pathname:{type:String,required:!0},url:{type:String},src:{type:String,default:"https://utteranc.es/utterances.html"},issueTerm:{type:String,default:"pathname"},label:{type:String,default:null},theme:{type:String,default:"github-light"},description:{type:String,default:null},origin:{type:String,default:window.location.origin}},data:function(){return{token:"",containerHeight:0}},computed:{utterancesOrigin:function(){var t=this.src.match(/^(https?:\/\/[^\/]+).*/);return t?t[1]:null},iframeSrc:function(){var t=this,e=this.url||window.location.origin+window.location.pathname,n=["title","repo","theme","label","token","description","origin","pathname"].filter((function(e){return!!t[e]})).map((function(e){return"".concat(e,"=").concat(encodeURIComponent(t[e]))}));return n.push("issue-term=".concat(encodeURIComponent(this.issueTerm))),n.push("url=".concat(encodeURIComponent(e))),"https://utteranc.es/utterances.html?".concat(n.join("&"))}},created:function(){window.addEventListener("message",this.handleEvent);var t=window.location,e=t.search,n=t.pathname,r=t.hash,i=e.substr(1).match(/(?:^|&)utterances=([^&]+)(?:$|&)/);i&&(this.token=i[1],history.replaceState(void 0,document.title,n+e.replace("utterances=".concat(this.token),"")+r))},destroyed:function(){removeEventListener("message",this.handleEvent)},methods:{handleEvent:function(t){if(t.origin===this.utterancesOrigin){var e=t.data;e&&"resize"===e.type&&e.height&&(this.containerHeight=e.height)}}}},i=(n(449),n(14)),a=Object(i.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"utterances",style:{height:this.containerHeight+"px"}},[e("iframe",{staticClass:"utterances-frame",attrs:{title:"Comments",scrolling:"no",src:this.iframeSrc}})])}),[],!1,null,null,null);e.default=a.exports}}]);