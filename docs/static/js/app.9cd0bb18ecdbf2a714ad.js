webpackJsonp([0],[,,,function(t,n,e){"use strict";var o=e(12),i=e(16);n.a={components:{ShareComponent:o.a,MultimediaComponent:i.a},data:function(){return{clipped:!1,drawer:!0,fixed:!1,items:[{icon:"bubble_chart",title:"Home",path:"/"},{icon:"av_timer",title:"Clock",path:"/clock"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}},name:"App"}},function(t,n,e){"use strict";n.a={name:"Share",data:function(){return{fab:!1,data:"example",show:!1}},methods:{share:function(){navigator.share({title:"My awesome post!",text:"Pàgina multimèdia de Quim González Colat",url:window.location.href}).then(function(){console.log("Thanks for sharing!")}).catch(function(t){console.log("Couldn't share because of",t.message)})}},mounted:function(){navigator.share&&(this.show=!0)}}},function(t,n,e){"use strict";n.a={name:"Multimedia",data:function(){return{data:"example"}},mounted:function(){console.log("Mounted ok")}}},function(t,n){throw new Error("Module build failed: SyntaxError: Unexpected token, expected , (125:0)\n\n[0m [90m 123 | [39m  }\n [90m 124 | [39m}\n[31m[1m>[22m[39m[90m 125 | [39m\n [90m     | [39m[31m[1m^[22m[39m[0m\n")},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(2),i=e(11),a=e(20),r=e(29),c=e.n(r),s=e(30);e.n(s);o.a.use(c.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:a.a,components:{App:i.a},template:"<App/>"})},,,,function(t,n,e){"use strict";var o=e(3),i=e(19),a=e(0),r=a(o.a,i.a,!1,null,null,null);n.a=r.exports},function(t,n,e){"use strict";function o(t){e(13)}var i=e(4),a=e(15),r=e(0),c=o,s=r(i.a,a.a,!1,c,null,null);n.a=s.exports},function(t,n){},,function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.show?e("v-btn",{attrs:{fab:"",bottom:"",right:"",color:"red",dark:"",fixed:""},on:{click:t.share}},[e("v-icon",[t._v("share")])],1):e("v-speed-dial",{attrs:{fixed:"",bottom:!0,right:!0,direction:"top"}},[e("v-btn",{attrs:{slot:"activator",color:"blue darken-2",dark:"",fab:"",hover:""},slot:"activator"},[e("v-icon",[t._v("share")]),t._v(" "),e("v-icon",[t._v("close")])],1),t._v(" "),e("v-btn",{attrs:{fab:"",dark:"",small:"",color:"green"}},[e("v-icon",[t._v("edit")])],1),t._v(" "),e("v-btn",{attrs:{fab:"",dark:"",small:"",color:"indigo"}},[e("v-icon",[t._v("add")])],1),t._v(" "),e("v-btn",{attrs:{fab:"",dark:"",small:"",color:"red"}},[e("v-icon",[t._v("delete")])],1)],1)],1)},i=[],a={render:o,staticRenderFns:i};n.a=a},function(t,n,e){"use strict";function o(t){e(17)}var i=e(5),a=e(18),r=e(0),c=o,s=r(i.a,a.a,!1,c,"data-v-40f4687e",null);n.a=s.exports},function(t,n){},function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("v-btn",{attrs:{color:"error"}},[t._v("btn1")]),t._v(" "),e("v-btn",{attrs:{color:"blue"}},[t._v("btn2")]),t._v(" "),e("v-btn",{attrs:{color:"green"}},[t._v("btn3")]),t._v(" "),e("v-btn",{attrs:{color:"yellow"}},[t._v("btn4")])],1)},i=[],a={render:o,staticRenderFns:i};n.a=a},function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",[e("v-navigation-drawer",{attrs:{persistent:"","mini-variant":t.miniVariant,clipped:t.clipped,"enable-resize-watcher":"",fixed:"",app:""},model:{value:t.drawer,callback:function(n){t.drawer=n},expression:"drawer"}},[e("v-list",t._l(t.items,function(n,o){return e("v-list-tile",{key:o,attrs:{value:"true",to:n.path}},[e("v-list-tile-action",[e("v-icon",{domProps:{innerHTML:t._s(n.icon)}})],1),t._v(" "),e("v-list-tile-content",[e("v-list-tile-title",{domProps:{textContent:t._s(n.title)}})],1)],1)}))],1),t._v(" "),e("v-toolbar",{attrs:{app:"","clipped-left":t.clipped}},[e("v-toolbar-side-icon",{on:{click:function(n){n.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.miniVariant=!t.miniVariant}}},[e("v-icon",{domProps:{innerHTML:t._s(t.miniVariant?"chevron_right":"chevron_left")}})],1),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.clipped=!t.clipped}}},[e("v-icon",[t._v("web")])],1),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.fixed=!t.fixed}}},[e("v-icon",[t._v("remove")])],1),t._v(" "),e("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[e("v-icon",[t._v("menu")])],1)],1),t._v(" "),e("v-content",[e("router-view")],1),t._v(" "),e("v-navigation-drawer",{attrs:{temporary:"",right:t.right,fixed:"",app:""},model:{value:t.rightDrawer,callback:function(n){t.rightDrawer=n},expression:"rightDrawer"}},[e("v-list",[e("v-list-tile",{on:{click:function(n){t.right=!t.right}}},[e("v-list-tile-action",[e("v-icon",[t._v("compare_arrows")])],1),t._v(" "),e("v-list-tile-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),e("v-footer",{attrs:{fixed:t.fixed,app:""}},[e("span",[t._v("© 2017")])]),t._v(" "),e("share-component")],1)},i=[],a={render:o,staticRenderFns:i};n.a=a},function(t,n,e){"use strict";var o=e(2),i=e(21),a=e(22),r=e(26);o.a.use(i.a),n.a=new i.a({routes:[{path:"/",name:"HelloWorld",component:a.a},{path:"/clock",name:"ClockComponent",component:r.default}]})},,function(t,n,e){"use strict";function o(t){e(23)}var i=e(24),a=e(0),r=o,c=a(null,i.a,!1,r,"data-v-083bf78f",null);n.a=c.exports},function(t,n){},function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-container",{attrs:{fluid:""}},[o("v-slide-y-transition",{attrs:{mode:"out-in"}},[o("v-layout",{attrs:{column:"","align-center":""}},[o("img",{staticClass:"mb-5",attrs:{src:e(25),alt:"Vuetify.js"}}),t._v(" "),o("blockquote",[o("footer",[o("small",[o("em",[t._v("—John Johnson")])])])])])],1)],1)},i=[],a={render:o,staticRenderFns:i};n.a=a},function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAAHdElNRQfgDAgBJwAB06yeAAAAanRFWHRSYXcgcHJvZmlsZSB0eXBlIGFwcDEACmFwcDEKICAgICAgMzQKNDk0OTJhMDAwODAwMDAwMDAxMDAzMTAxMDIwMDA3MDAwMDAwMWEwMDAwMDAwMDAwMDAwMDUwNjk2MzYxNzM2MTAwMDAK3JU+DAAAFGVJREFUeNrtnXuU1dV1xz/7/O5j5s6DVwQ1AgafgIAWRR1AraVJtGoMikp8xWiMTdOmq+1aSdulaZgxaf5su9IWkGIVkDcKKAoCoqgYJWKUiMpDBEEFZpjHvTP39dv943fvqDgz3Ln3nt+9M6vftViLgbm/fc753u/vnLPP2XsLJcLI37YChEXkN6B1QNq60WQCd88u0URcQPzopiBymEDwr4CDB/5jsh82v4SA7xazPRcQkbjCRyg/9cWogrouqHo/+NJRZxGh8Gekkv7YOwGmJFaBD39ckx3iNcBef6z6RGoWIm0Y8xixtsSBf7vcX9sZlIxg8ISUdAO7EVlbynZYg8hWguGXCYVL1oSSErz/x9UETUqBZUBTKdtSfEgC4yygPdqmp1aXrBUlJRjIvDVlO8hLpW5KUWFkB05gPaEwB/9xXOmaUepxcF0FaEd4AkiUuj1FgiJmMS1NR6geUNKGlJzgj35Sk/mbbAZ5275FHxZaYt7HCayiZgAHfn2BfXs9oOQEA6gqgn6KsNyyIX86ZMzKA/9e9yHhCn/s9QBfdvu54Mz/igKMQXUd6AgrXY23k97zLiQt7klFDhMIXYPqWwd+O9WenRxRFgoG78WpgeAuhGdL3ZaCIOZprR24U0u4Nfoiyobgppa3kVTCBZYCLdYM2XxLizTjOIuk6WhKLppg0VDuKBuCW352GYqgmNcQebXU7ckLYjYTqthGOMyBu/5fwV9FOo3gtgGLgVSpm9M7SAfGLCTa0q4VpXNsnIiyInj/T2qzf90A8m7xLVh8Pxt5g0BwI+EKDv5r6RwbJ6LL06RfvKao0vkHoKHOpwW3gggfq7ASpbgjZY9fFzELaWtpcocMsz1CnZj39pc7dO+4r3LUJcFpAUcBYaLAdEAeetX6HjIJPA7sfmxHFOBJ4H7gNN9GLF+IeRcnsFaqqlnwdxNo+pFOcwzTsO9VMS5s/7iZZTWhrm11SbCb+SQQVbgNZZQv4ySowL8MiRiOxnhHxN2A6l3FtWJhzI0slcOHD/7iwRv4rIXaoMPPXZc/82HI4i7cO3wAery9m6Z19Y+/muRJPR1jF56qfIEq0134+rXnVCJoCmUJEC3Kw8WSnEQ+wjgrdNhQBlUHcQxXCfhy+KuwJZFmTXsS7h7T9RTa7SJrVp1gIgAsBD7wo8HAaIFvZm57gJiXQV73yXZ+ELNGTh3x7j03jiOaJGyE24GID5ZjrjK7MkBLogfHXM+raIWg8IEIC30arkBmSqieOa4ScJuBJXizRvlB5BjGWaSHPnQnjBpIZYCLBab5YVphU8plfTwNd43tfgHcI8H1k4WU917zT8XK5cBlAQEQEFkH8n4xHi1ocd/TYjYRrtw+fvRpHIliRPgeMNiHUWpzlf+uDND2T1t6/sWT74MVUml2i7DAh4YD1AC3iYPzp98IETGh/QhPFePBRT1MEolhzOPEWuP3XHMOQyKcb+B6PwZI4bl4ms2xJOy5r+ft60kJnjVZCDgALER4z5cOKN9y04w+ozZALB0HZSVwxA/bOUNkG4HQi1UDqhkaASPMAIb7YLnZVeZEAsRiORyK5ebJEnAT7BF8m4vPAG5EoSokqJgdiGzyyXYuA5LCOAuJtTb/8r6L+STKcIEZflhWeCbhsiWehnsvOLnzKSeCZ10umDAg/qkYuEmE06aPiSC4CbzFVodPtnuGyNs4gXUmUkVVEBzDdQKjfbDcmFk5x/c35vaBnH3RroKj7MWvfbEyVmGadP7IFpA3C31oUVZZxizl6OHD9fdPIppgsMD38MGv78LqaJJX25Pws8tycx3n3KiGOiEFiHfSs8t2Z4AgMBOhaua4CAZpRFiK77fXT4CYvTjOChk8lNpKh4DhaoFLfLB8RJVHqkMkvnde7ucCvfrWqQsKexDfVDxZlUuDRjKsylqQfb7Y7g4iTzqjx+9+YMYEYkkiItwJWD/8VVjVluC1eC8PUXtFcMOUzm/OE4CF47yvoBa4RQRz8WlBEmlnD0L+URCFal/kCI6zOL1zh55/Rg0hh0sFrvRhHA6nlbk1YVK7c5x7s8hr3jAu+/BrX6xc4yrnjR4aJOSUOApCzLNEanZMnjiSljhOxi1p/eKzC8uPd/BmPAUPXd67Y9teE1xfJ6gBgUX4o+IRwHeMQIUjKPIGyIs+2P0yRFoxZiEtTcmbrxhBJMh4gWttm1U46CrzBleS7s3cm0VeCnYBUT5EeMx2BzO9vFmVYTMuiCBoB8IS8o2CyPc1LbKVQHDr0GEDuekscDzHhvWzalUW723kD7k4NbpCXgQ31Amu92VaDPzRdieBcQpXeyYFkI35RUHkzW4CMQtoj0V/dseFLNvNKBFust1phQ/TyqNnDUbvPD+/GzX5790UcDtVbHvrEsLbMlXePLYSA58hLOvtQ/K+dCSyg0BwQ6g6wuAKMMKNAudY7jMKC2/5FTs7CrinnzfB9ZMl+2l/VKxMVeXiSEBwUUDWAAd6OWD5WTZmEW0tR2bdP4ljHZxihNuwHxWy23V5bPk/wx2j8zdVkPfFBQKw3ycVDxS4xTXI+UOCpFV2IfJMr56QTwvFvI9xVhOppipkcIRvC1xoua+4yuPTzuT9RIGZSwoi+OE6IU2nd8u6ilW5zrice8kZIRxxXbwtUy+iIPJwVRqzkjXz9/38+xcTS1Kd2RoFrfYTdqWVxzfuh3xWzl9qfhEaA8pHCP+LfRWfCVwvQNARQLYh8oo1ayKHMGYJ193N6YPChANMFbCdKkcV5o8YwL7WIkRLF0xwfZ1kSV4C7LTceVSZoXDKrWMjANGMXTtREGLWUTPonenTzqMtQUjgdsBq2ILCO2mXxQea4Z4xhU/zxTkBEVD/VDwBuMpk+y6yHqT404NIM8ZZwPFj6SvGD6UyyIUC37TcN1eV+QMr+ChapAjXohBcXycYz7u1BOEdy4MQxtsyVXzn/AqMcAhhVU6f7M1XT8wLhEK/O3PkEPa3IJn7VqfY7JjCjpSy5HgHfL8I6oUinmG6CuJtW+yrWLlSlYm1YYPrXbRaBRwu2vNF4hizgPZo7G9uHsvwGs41cIPVPkHaVR6pDXMoXsT49KIR3DBZsndblwK2c20MFrg5MhCG1zqoOju9V/XJkOP3TuR1AsFN4aoIgzzHxk3AN2x2SOH1tLKyNQ53Fkm9UOxbCK6nYhEexbKKFa6PHefsq75RgUg6hffFKkYUhIs4i2hraWy4fxJHY5wucIvNvgBJVR6pDPBpb897T4aiElz/+XnxMoQ/WB0SZZTAdQI4RlBkKyK/K/i5Yv5IwFkjVdVEQkLQcK2A1VQ5CtuSLk+2J+HOArxWXaHo94gUUOUg3lxsMyJBFG5BGOJd6dEWPBUXZtOY5ezeefChey8hmmSgeI4Nx2I/4q4ytzrEsSYLVwqLTnB9nSAGRFjqg4ovQrnSCKh3ytRzFMTJJg2RAzjOMkaN5pTaIEEvkOxSu11ga1pZE0vBA+OL7962chPQVTDKxwKPYlfFFQozgfC3zw4zaXDkJFEQJ2FYzGp36Nd33XX9WGJJKoxwB1Bpsf0drjK7IsDxo812DFghuKGuc0W9HOEtW6MDgHKVKhcOrXL4XWMMkBUgR3r4/a4h0ohxnjCHP3Innj2IgOESgavtNp3NiTTPtSfgxxPtHE5Zu8urXt5tP1T8NYEZTYNhaMSg8BbQ+ygIkee1ouKNcaNP51AbxvEcG4MstjvqKnMiQVqOxOwZsUZw/RRBvC/lcoQd9roAqtwwsJFR3zqnAlE9SRREFxIWiWGchRJti//gmrMZVsVY4DqrbYbnky4bOlLw1xfZO1q2exvfgCqHfFDx2cC1AhgjqMgWRH6f86dFthEIvjBgcA3TzvICycSLj7KF1kwISvS3my1awTLBsy7zVtSIdRULyq0Kg267IIKoNqIs4yty7WoClhRiFhJrbXnonoms381IgZttjovCs8kUL8RT8NKP7F4MsR5Poy6gHBaYj93KKhOBqQFDtuLHGpAv14Lokl8vkMyJVFMdAke4QeA8i+087iqzK0K0N7YX/rCTwTrB9ZMle49ihWUVV+KdMoWuOjNM0pW9kEMUhDFLOH7s8C/vn0RrnCEizLQ5LgprY3G2xuLwlxPs5x7zJ9Odx7B9FStXqzJh+ACHoFHN5J/uPgpCZC/GrGLAIAZ4gWR/LvAnFkfiWFqZWxUmfnuRXZLdwReC6ydLNo3RCoQCQ0B7xFBgugjUhgVFtiPSfRYLMU+mL5rywU9nXkQsSVXGLWktkEzhqfYUr8btlwDrhG+5KsXr4SfYV/GNKCO/c34lgrZDN1EQIp/hOIud37+ko06rIuRwucAVFofgM1eZUx0kWczz3pPBN4Jn1XVWk1uJkPsWpvc4V+EaIZNry4uCyPjEv7DKErOeisiOqyaNJBonkLktWZuHvZzgwopoku3xNNyTQ+qFYsHXbLMKiH0VG+BWhAG3XlCJoEeAFZ0NgExFMmcB0dbkjVNGUBFgvMA1Frt+OBO8nZp5rr9VFHwluKHOS0aJd8XGnoqVSapMCXnnxCDyFMhHnf8vspVQ+OVThg7kpishE6lgLU2sC0sOtbGjvQTlC33PF63erY9PEP4He0m/I8BtCsFJXw+iynsI6zL/l8Q4C4i1tv38jgks2cRZInzXYpcPuMr806tx78gzgKwQ+E5ww5RsOgZWWZ2LlWnABed9LYiIuhhnGepGMeZNnMD6QFUVgyshYPiueK5OK3CVxbsbebujRPnrS5LxXTyGPwWrKj5VMlumqqBBasPbSKW24ASW0d52pP6Hl3A0xjDxXs+2sM+F+ecOQUuhXigRwbMmd3Z2FbDdlh1VvqvK8OljKun4zS+imkz+kmBokVTVMjBiCBi+JTDeln1XWTDjbN6NlbBgX8kKYz34infJRuGHKP+JnWLVaYQHRHgknYaHM5cCl3ygKNSGDCtsZYdVeD/lcp3ABzPOKV39sZIV5cjGNAk8hfCGJTMO3mKrxmR6+s9blLADAWGqzcTdqjw+YgAfFBr+WShKW3XFK/rxmcA8bM3FyqUoddkfx5wKLQlCmftWVZa69ce0suBAC9xeork3i5ISXD85c+tDeArBVmb3aoHbxBB48BWlIgARu4m71VUeHTWQD1vKILNmyesmZUJPjwCP4FVeKb4N5ZvqMjYgsL8Jk3FsfM1Sf/7gwhP7mnPLBmsbJSe4PuvdEtZYVPHpwI2n18DwgZwn9gLJXFXm1YY4GItbstBLlJxgyHi3lCOZudiOQ0+Zvu84pznCdGCkHRP8PumyvLkD7h5bevVCmRDcMLnTu7UaofD4oq4xuibMDyzet0qpMq82zOFipF4oFsqC4CwUjmJJxQrBoPAPwFhLbX89paxoS8B9ZTD3ZlE2BNdnaiOKsBrhNRs2RBiodjLkJBRmR4IcSZRZzdSyIRjIntceE4srakvNfjXlehXICklaZgNlRXB91kctrEXYVuznC1Z8s3FXmVMZpPGQvbrleaOsCIbOe9RZFZfRcqWb9sKLKZen2xPwt5YCyApB2RFc//mK2oqKi4xYJvyzOVGexffKj+AsFBrxVtRFU3Gx9aWwOenyXDwN+ab7tY2yJLi+TjLRJ6xFeLVoDy4uB179wCBtTW1+j1DuKEuCwcsSgNJYrnOxwoZEmk0dSXjAYvhnoShbghvqOgftaYSiJBwtIg0tmbk3Vi4+5+5QtgQDpL3VVhOeistmKBXWtafY0pGCH4wrX/VCmRP88GTJloR9plgqLgKaXGV2VZCOcjjvPRnKmmDACyBXmqQIKi6G1lxYG03xcnsKHvAh/LNQlD3Bsy7vzPXxDJRcxUdVmVMTJHF7gZnY/ULZEwydlbuPI8ylEBUXyInCqrY420oRgpIv+gTBX/BurQNezvc5BfL7SdrlkZowqWjZbdq6R58gGCDtxTRlVez78kZhRWsm/PN+CykHbaHPEPyrKZ0r6oJUnCc+Tnu3NfKqH1hK9BmCgexiq9lvFbvKkr3HeautD72as+hTBM/63Lv1LMLW3n4+H+0p7Hdh/lmDcL9fZof5uaBPEQzeilqgGfxRscKile/yTnsfVC+UMPisEDz4ioJXmHkpmlupGwWGReCMXmThUNiTcvkLgfdKGUBWCPqcggHUy+fSnPFu5ZwvTqR332j1wj/fK1XwdjHQJwlu+LzM+XMIL9mwofBeWnl8+Z7i11HwE32SYADX8ya14M3Fxc76qAqPjhjInmJXQfEbfZbghisz3i1hPcKLuXwmVx0q7Ey7PHGgGUqVeqFY6LMEA7hpEGgRmEPxVOyqMn9whP3NFjOx+4U+TfDDUz3vlsIGhBdO+oEcxKjwVlpZ3NQO9/Uhl2R36NMEA7jeHNmKt6LuUXM50JVWmFcT5lBHHzox6gl9nuCHr+iMaVqfk4p7gML2tMvy1njfXjl/EX2eYIBEDFDaxFtR5ztzplSZWx3m0xYfMrH7hX5B8G+mdart+XxVnK0f2NrRP+beLPoFwQCuCwhtmRV1lyrugbaEq8yNBDna2gcu0vUG/YbghimdK+qNCF0Xq+mGYYWX0y6r25P9S73QjwiGzn1xG95c/KVawj3Q1uEqsyuDHD/SWuoeFB/9iuCHp2ay5wnPd6XirkhW2JJIsy6WhJ+UYfhnoehXBENnbYgoJ6i4m5qUMVeZHQnR0tbP5t4s+h3Bs+o6b2Bu5AtFKrtR78ZkmvUdif4392bR7wgGwLuBGc3c3epU8QkUtrousyuDRD9u6uXz+xD6JcH1Uzoz2W5C2NjV7yisT7hs6kjB31/WP9UL/ZRgAPF81Nm52AvR/pzH5szKub2vn/eeDP2W4FlXdJ4Xb86qOMuvC093JHmxIwl3j+m/6oV+THAWoieoGBpVmRMJEZ95balbZx/9muD6z1fUm4ENAAqr25O8Ek8Be/q3eqGfEwxeGnmBGMI8YI/C3EiI5Mw+FoKSL/o9wb+uE4xAhcNWhFkuvOln9c9S4/8AnvsEmK7rtXMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTYtMTItMDhUMDE6Mzk6MDArMDE6MDBqlVScAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE2LTEyLTA4VDAxOjM5OjAwKzAxOjAwG8jsIAAAAFd6VFh0UmF3IHByb2ZpbGUgdHlwZSBpcHRjAAB4nOPyDAhxVigoyk/LzEnlUgADIwsuYwsTIxNLkxQDEyBEgDTDZAMjs1Qgy9jUyMTMxBzEB8uASKBKLgDqFxF08kI1lQAAAABJRU5ErkJggg=="},function(t,n,e){"use strict";function o(t){e(27)}var i=e(6),a=(e.n(i),e(28)),r=e(0),c=o,s=r(i.default,a.a,!1,c,"data-v-6a2e3cba",null);n.default=s.exports},function(t,n){},function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("canvas",{staticStyle:{"background-color":"#333"},attrs:{id:"canvas",width:"400",height:"400"}})])}],a={render:o,staticRenderFns:i};n.a=a},,function(t,n){}],[7]);
//# sourceMappingURL=app.9cd0bb18ecdbf2a714ad.js.map