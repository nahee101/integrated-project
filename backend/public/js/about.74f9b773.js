"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[443],{568:function(e,t,o){o.r(t),o.d(t,{default:function(){return s}});var m=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h3",[e._v("글을 작성하는 공간입니다")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),e._v(" "),o("br"),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.memo,expression:"memo"}],attrs:{cols:"30",rows:"10"},domProps:{value:e.memo},on:{input:function(t){t.target.composing||(e.memo=t.target.value)}}}),e._v(" "),o("br"),o("button",{on:{click:e.addmemo}},[e._v("작성")]),o("form",{attrs:{action:"/api/memo/writeform",method:"post"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text",name:"title"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),e._v(" "),o("br"),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.memo,expression:"memo"}],attrs:{cols:"30",rows:"10",name:"memo"},domProps:{value:e.memo},on:{input:function(t){t.target.composing||(e.memo=t.target.value)}}}),e._v(" "),o("br"),o("input",{attrs:{type:"submit",value:"작성"}})])])},a=[],n={data(){return{title:"",memo:""}},methods:{addmemo(){this.$http.post("/api/memo",{data:{title:this.title,memo:this.memo}}).then((e=>console.log(e.data))),this.$router.push("/")}}},r=n,i=o(1),l=(0,i.Z)(r,m,a,!1,null,null,null),s=l.exports}}]);
//# sourceMappingURL=about.74f9b773.js.map