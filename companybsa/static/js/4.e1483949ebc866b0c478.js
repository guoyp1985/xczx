webpackJsonp([4],{"/wE6":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=o(e("/wNa")),a=o(e("viPQ")),s=o(e("fbYF")),r=o(e("+p4d"));function o(t){return t&&t.__esModule?t:{default:t}}i.default={components:{TopMenu:s.default,ClassMenu:r.default},data:function(){return{query:{},listData:[],pagestart:0,limit:15,isLoading:!1,isDone:!1,hostName:""}},filters:{dateformat:function(t){return new a.default(1e3*t).dateFormat("yyyy-MM-dd hh:mm")}},watch:{$route:{handler:function(t,i){this.refresh()}}},methods:{toDetail:function(t){this.$router.push({path:"/product",query:{id:t.id}})},getList:function(){var t=this;this.$http.get(n.default.GxkApi+"/api/list_n/factoryproduct",{params:{module:"factoryproduct",prefixdomain:this.hostName,classid:this.query.classid,pagestart:this.pagestart,limit:this.limit}}).then(function(i){var e=i.data;if(t.isLoading=!1,e.flag){var n=e.data;t.listData=t.listData.concat(n),n.length<t.limit&&t.listData.length>t.limit/2&&(t.isDone=!0)}})},handleScroll:function(t){var i=this,e=this.$refs[t][0]?this.$refs[t][0]:this.$refs[t];this.$util.scrollEvent({element:e,callback:function(){i.listData.length===(i.pagestart+1)*i.limit&&(i.pagestart++,i.isLoading=!0,i.getList())}})},refresh:function(){this.query=this.$route.query,this.listData=[],this.pagestart=0,this.limit=15,this.isLoading=!1,this.isDone=!1,this.getList()}},created:function(){},activated:function(){this.refresh()}}},"8/oW":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=o(e("/wNa")),a=o(e("viPQ")),s=o(e("fbYF")),r=o(e("+p4d"));function o(t){return t&&t.__esModule?t:{default:t}}i.default={components:{TopMenu:s.default,ClassMenu:r.default},data:function(){return{query:{},listData:[],pagestart:0,limit:15,isLoading:!1,isDone:!1,hostName:""}},filters:{dateformat:function(t){return new a.default(1e3*t).dateFormat("yyyy-MM-dd hh:mm")}},watch:{$route:{handler:function(t,i){this.refresh()}}},methods:{toDetail:function(t){this.$router.push({path:"/product",query:{id:t.id}})},getList:function(){var t=this;this.$http.get(n.default.GxkApi+"/api/list_n/factoryproduct",{params:{module:"factoryproduct",prefixdomain:this.hostName,classid:this.query.classid,pagestart:this.pagestart,limit:this.limit}}).then(function(i){var e=i.data;if(t.isLoading=!1,e.flag){var n=e.data;t.listData=t.listData.concat(n),n.length<t.limit&&t.listData.length>t.limit/2&&(t.isDone=!0)}})},handleScroll:function(t){var i=this,e=this.$refs[t][0]?this.$refs[t][0]:this.$refs[t];this.$util.scrollEvent({element:e,callback:function(){i.listData.length===(i.pagestart+1)*i.limit&&(i.pagestart++,i.isLoading=!0,i.getList())}})},refresh:function(){this.query=this.$route.query,this.listData=[],this.pagestart=0,this.limit=15,this.isLoading=!1,this.isDone=!1,this.getList()}},created:function(){},activated:function(){this.refresh()}}},LYrU:function(t,i,e){var n=e("QQL4");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("e542118e",n,!0,{})},Prii:function(t,i,e){"use strict";var n={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"scrollContainer",staticClass:"product-list-page",on:{scroll:function(i){return t.handleScroll("scrollContainer")}}},[e("top-menu",{attrs:{current:"productlist"+(t.query.classid?t.query.classid:0)}}),t._v(" "),e("div",{staticClass:"main-area"},[e("class-menu"),t._v(" "),e("div",{staticClass:"middle-col"},[e("div",{staticClass:"m-row2 list-outer"},[e("div",{staticClass:"list-area"},t._l(t.listData,function(i,n){return e("div",{staticClass:"item",on:{click:function(e){return t.toDetail(i)}}},[e("div",{staticClass:"item-inner"},[e("div",{staticClass:"pic"},[e("img",{attrs:{src:i.photo}})]),t._v(" "),e("div",{staticClass:"con"},[e("h3",[t._v(t._s(i.title))]),t._v(" "),e("div",{staticStyle:{"margin-bottom":"5px",color:"#ff0000"}},[t._v(t._s(i.sellingpoint))]),t._v(" "),e("div",{staticStyle:{color:"#ff0000"}},[e("span",[t._v("￥")]),t._v(" "),e("span",{staticStyle:{"font-size":"16px","font-weight":"bold"}},[t._v(t._s(i.price))])])])])])}),0),t._v(" "),t.isLoading?e("div",{staticClass:"loading-area flex_center",staticStyle:{width:"100%",height:"50px",color:"#ccc"}},[t._v("正加载中")]):t._e(),t._v(" "),t.isDone?e("div",{staticClass:"loading-end-area flex_center",staticStyle:{width:"100%",height:"50px",color:"#ccc"}},[t._v("没有更多数据啦")]):t._e()])])],1)],1)},staticRenderFns:[]};i.a=n},QQL4:function(t,i,e){(t.exports=e("FZ+f")(!0)).push([t.i,"\n.product-list-page {\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n.product-list-page .middle-col {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n}\n.product-list-page .m-row2 .item {\n  border-top: 1px solid #e6e6e6;\n}\n.product-list-page .m-row2 .item:first-child {\n  border-top: none;\n}\n.product-list-page .m-row2 .item-inner {\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  padding: 20px 0;\n  color: #333;\n}\n.product-list-page .m-row2 .item-inner:hover {\n  color: #2291f7;\n}\n.product-list-page .m-row2 .list-area .pic {\n  margin-right: 20px;\n  width: 230px;\n  height: 130px;\n  overflow: hidden;\n}\n.product-list-page .m-row2 .list-area img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.product-list-page .m-row2 .list-area .con {\n  height: 130px;\n}\n.product-list-page .m-row2 .list-area .con h3 {\n  line-height: 32px;\n}\n","",{version:3,sources:["/Users/gyp/博卡项目/xczx/src/pages/Productlist.vue"],names:[],mappings:";AACA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;CAClB;AACD;EACE,oBAAoB;EACpB,gBAAgB;UACR,QAAQ;CACjB;AACD;EACE,8BAA8B;CAC/B;AACD;EACE,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,gBAAgB;EAChB,YAAY;CACb;AACD;EACE,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,aAAa;EACb,cAAc;EACd,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;CACnB;AACD;EACE,cAAc;CACf;AACD;EACE,kBAAkB;CACnB",file:"Productlist.vue",sourcesContent:["\n.product-list-page {\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n.product-list-page .middle-col {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n}\n.product-list-page .m-row2 .item {\n  border-top: 1px solid #e6e6e6;\n}\n.product-list-page .m-row2 .item:first-child {\n  border-top: none;\n}\n.product-list-page .m-row2 .item-inner {\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  padding: 20px 0;\n  color: #333;\n}\n.product-list-page .m-row2 .item-inner:hover {\n  color: #2291f7;\n}\n.product-list-page .m-row2 .list-area .pic {\n  margin-right: 20px;\n  width: 230px;\n  height: 130px;\n  overflow: hidden;\n}\n.product-list-page .m-row2 .list-area img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.product-list-page .m-row2 .list-area .con {\n  height: 130px;\n}\n.product-list-page .m-row2 .list-area .con h3 {\n  line-height: 32px;\n}\n"],sourceRoot:""}])},eR7R:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("8/oW");e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);var s=e("/wE6"),r=e.n(s),o=e("Prii");var l=function(t){e("LYrU")},c=e("VU/8")(r.a,o.a,!1,l,null,null);i.default=c.exports}});
//# sourceMappingURL=4.e1483949ebc866b0c478.js.map