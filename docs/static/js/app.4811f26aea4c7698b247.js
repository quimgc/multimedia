webpackJsonp([3],[,,,function(t,n,e){"use strict";var o=e(11),a=e(15);n.a={components:{ShareComponent:o.a,MultimediaComponent:a.a},data:function(){return{clipped:!1,drawer:!0,fixed:!1,items:[{icon:"bubble_chart",title:"Home",path:"/"},{icon:"av_timer",title:"Clock",path:"/clock"},{icon:"videogame_asset",title:"Game",path:"/game"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}},name:"App"}},function(t,n,e){"use strict";n.a={name:"Share",data:function(){return{fab:!1,data:"example",show:!1}},methods:{share:function(){navigator.share({title:"My awesome post!",text:"Pàgina multimèdia de Quim González Colat",url:window.location.href}).then(function(){console.log("Thanks for sharing!")}).catch(function(t){console.log("Couldn't share because of",t.message)})}},mounted:function(){navigator.share&&(this.show=!0)}}},function(t,n,e){"use strict";n.a={name:"Multimedia",data:function(){return{data:"example"}},mounted:function(){console.log("Mounted ok")}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(2),a=e(10),i=e(19),r=e(21),c=e.n(r),l=e(22);e.n(l);o.a.use(c.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:i.a,components:{App:a.a},template:"<App/>"})},,,,function(t,n,e){"use strict";var o=e(3),a=e(18),i=e(0),r=i(o.a,a.a,!1,null,null,null);n.a=r.exports},function(t,n,e){"use strict";function o(t){e(12)}var a=e(4),i=e(14),r=e(0),c=o,l=r(a.a,i.a,!1,c,null,null);n.a=l.exports},function(t,n){},,function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.show?e("v-btn",{attrs:{fab:"",bottom:"",right:"",color:"red",dark:"",fixed:""},on:{click:t.share}},[e("v-icon",[t._v("share")])],1):e("v-speed-dial",{attrs:{fixed:"",bottom:!0,right:!0,direction:"top"}},[e("v-btn",{attrs:{slot:"activator",color:"blue darken-2",dark:"",fab:"",hover:""},slot:"activator"},[e("v-icon",[t._v("share")]),t._v(" "),e("v-icon",[t._v("close")])],1),t._v(" "),e("v-btn",{attrs:{fab:"",dark:"",small:"",color:"green"}},[e("v-icon",[t._v("edit")])],1),t._v(" "),e("v-btn",{attrs:{fab:"",dark:"",small:"",color:"indigo"}},[e("v-icon",[t._v("add")])],1),t._v(" "),e("v-btn",{attrs:{fab:"",dark:"",small:"",color:"red"}},[e("v-icon",[t._v("delete")])],1)],1)],1)},a=[],i={render:o,staticRenderFns:a};n.a=i},function(t,n,e){"use strict";function o(t){e(16)}var a=e(5),i=e(17),r=e(0),c=o,l=r(a.a,i.a,!1,c,"data-v-40f4687e",null);n.a=l.exports},function(t,n){},function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("v-btn",{attrs:{color:"error"}},[t._v("btn1")]),t._v(" "),e("v-btn",{attrs:{color:"blue"}},[t._v("btn2")]),t._v(" "),e("v-btn",{attrs:{color:"green"}},[t._v("btn3")]),t._v(" "),e("v-btn",{attrs:{color:"yellow"}},[t._v("btn4")])],1)},a=[],i={render:o,staticRenderFns:a};n.a=i},function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",[e("v-navigation-drawer",{attrs:{persistent:"","mini-variant":t.miniVariant,clipped:t.clipped,"enable-resize-watcher":"",fixed:"",app:""},model:{value:t.drawer,callback:function(n){t.drawer=n},expression:"drawer"}},[e("v-list",t._l(t.items,function(n,o){return e("v-list-tile",{key:o,attrs:{value:"true",to:n.path}},[e("v-list-tile-action",[e("v-icon",{domProps:{innerHTML:t._s(n.icon)}})],1),t._v(" "),e("v-list-tile-content",[e("v-list-tile-title",{domProps:{textContent:t._s(n.title)}})],1)],1)}))],1),t._v(" "),e("v-toolbar",{attrs:{app:"","clipped-left":t.clipped}},[e("v-toolbar-side-icon",{on:{click:function(n){n.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.miniVariant=!t.miniVariant}}},[e("v-icon",{domProps:{innerHTML:t._s(t.miniVariant?"chevron_right":"chevron_left")}})],1),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.clipped=!t.clipped}}},[e("v-icon",[t._v("web")])],1),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.fixed=!t.fixed}}},[e("v-icon",[t._v("remove")])],1),t._v(" "),e("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[e("v-icon",[t._v("menu")])],1)],1),t._v(" "),e("v-content",[e("router-view")],1),t._v(" "),e("v-navigation-drawer",{attrs:{temporary:"",right:t.right,fixed:"",app:""},model:{value:t.rightDrawer,callback:function(n){t.rightDrawer=n},expression:"rightDrawer"}},[e("v-list",[e("v-list-tile",{on:{click:function(n){t.right=!t.right}}},[e("v-list-tile-action",[e("v-icon",[t._v("compare_arrows")])],1),t._v(" "),e("v-list-tile-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),e("v-footer",{attrs:{fixed:t.fixed,app:""}},[e("span",[t._v("© 2017")])]),t._v(" "),e("share-component")],1)},a=[],i={render:o,staticRenderFns:a};n.a=i},function(t,n,e){"use strict";var o=e(2),a=e(20);o.a.use(a.a);var i=function(){return e.e(0).then(e.bind(null,25))},r=function(){return e.e(1).then(e.bind(null,26))},c=function(){return e.e(2).then(e.bind(null,27))};n.a=new a.a({routes:[{path:"/",name:"HelloWorld",component:i},{path:"/clock",name:"ClockComponent",component:r},{path:"/game",name:"GameComponent",component:c}]})},,,function(t,n){}],[6]);
//# sourceMappingURL=app.4811f26aea4c7698b247.js.map