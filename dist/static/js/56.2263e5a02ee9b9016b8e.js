webpackJsonp([56],{CGyi:function(i,t){},K2wP:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("0LZo"),s=e("RyKi");var n=e("yS1H"),o={data:function(){return{isEditing:!1,historyList:[],resultList:[],id:"",planRankId:"",resultVisible:!1,actionVisible:!1,dialog_minValue:"",dialog_maxValue:"",dialog_trainingLevel:"",dialog_name:"",dialog_description:"",historyId:"",video_url:"",video_name:"",video_size:"",isOverUploading:!0,isChangingVideo:!1,fm_default:"0",fm_minValue:"0",fm_maxValue:"0"}},beforeRouteEnter:function(i,t,e){e(function(i){i.$nextTick(function(){i.fetchResultList(),i.fetchHistoryList(),i.fetchConfig()})})},components:{SubTitle:a.a},methods:{editFm:function(){this.isEditing=!0},verifyDout:function(i){return/^\d+$/.test(i)},updateFmNum:function(){var i=this;this.fm_default&&this.fm_minValue&&this.fm_maxValue?this.verifyDout(this.fm_default.toString())&&this.verifyDout(this.fm_minValue.toString())&&this.verifyDout(this.fm_maxValue.toString())?(this.isEditing=!1,Object(n.b)({confType:"fmDefault",confValue:this.fm_default}).then(function(t){Object(n.b)({confType:"fmMixValue",confValue:i.fm_minValue}).then(function(t){Object(n.b)({confType:"fmMaxValue",confValue:i.fm_maxValue}).then(function(t){if(200==t.data.code)return i.$notify.success("修改配置成功"),i.levelId=i.dialog_level,void i.fetchConfig();i.$notify.error("修改配置失败")})})}).catch(function(){i.$notify.error("修改配置失败")})):this.$notify.warning("请输入整数"):this.$notify.warning("输入不能为空")},editResult:function(i){this.dialog_trainingLevel=i.rankInfo.strengthLv,this.dialog_minValue=i.mixValue,this.dialog_maxValue=i.maxValue,this.id=i.id,this.planRankId=i.planRankId,this.resultVisible=!0},editAction:function(i){this.dialog_name=i.name,this.historyId=i.id,this.dialog_description=i.descText,this.video_url=i.videoUrl,this.video_name=i.videoName,this.actionVisible=!0},createFm:function(){this.dialog_name="",this.historyId=null,this.dialog_description="",this.video_url="",this.video_name="",this.actionVisible=!0},beforeAvatarUpload:function(i){this.isOverUploading=!1;var t="video/mp4"===i.type,e=i.size/1024/1024<20;return t||this.$notify.error("上传视频只能是 MP4 格式!"),e||this.$notify.error("上传视频大小不能超过 20MB!"),t&&e&&(this.isOverUploading=!0),t&&e},successUpload:function(i,t,e){this.video_url=i.data["oss-request-url"],this.video_name=t.name,this.video_size=t.size,this.isOverUploading=!0,this.isChangingVideo=!0},failedUpload:function(i,t,e){this.$notify.error("文件上传失败, 请重新上传"),this.isOverUploading=!0},confirmAction:function(){var i=this;if(this.isOverUploading)if(this.dialog_description)if(this.dialog_name)if(this.video_url){this.actionVisible=!1;(function(i){return s.a.post("admin/Plan/planFmConfSave",i)})(this.historyId?this.isChangingVideo?{id:this.historyId,name:this.dialog_name,descText:this.dialog_description,videoName:this.video_name,videoSize:(this.video_size/1024/1024).toFixed(2),videoUrl:this.video_url}:{id:this.historyId,name:this.dialog_name,descText:this.dialog_description}:this.isChangingVideo?{name:this.dialog_name,descText:this.dialog_description,videoName:this.video_name,videoSize:(this.video_size/1024/1024).toFixed(2),videoUrl:this.video_url}:{name:this.dialog_name,descText:this.dialog_description}).then(function(t){if(200==t.data.code)return i.$notify.success("动作记录配置成功"),void i.fetchHistoryList();i.$notify.error("动作记录配置失败")}).catch(function(){i.$notify.error("动作记录配置失败")})}else this.$notify.warning("请上传视频");else this.$notify.warning("动作名称不能为空");else this.$notify.warning("动作解释不能为空");else this.$notify.warning("文件上传未完成, 请稍后")},confirmResult:function(){var i,t=this;!isNaN(Number(this.dialog_minValue))&&!isNaN(Number(this.dialog_maxValue))&&/^\d+$/.test(this.dialog_minValue)&&/^\d+$/.test(this.dialog_maxValue)?(this.resultVisible=!1,(i={id:this.id,planRankId:this.planRankId,mixValue:this.dialog_minValue,maxValue:this.dialog_maxValue},s.a.post("admin/Plan/planRankFmBindSave",i)).then(function(i){200==i.data.code?(t.$notify.success("编辑4M测试结果成功"),t.fetchResultList()):t.$notify.error("编辑4M测试结果失败")}).catch(function(){t.$notify.error("编辑4M测试结果失败")})):this.$notify.error("请输入整数")},fetchResultList:function(){var i,t=this;s.a.post("admin/Plan/planRankFmBindList",i).then(function(i){t.resultList=i.data.data})},fetchHistoryList:function(){var i,t=this;(i={page:1,size:100},s.a.post("admin/Plan/planFmConfList",i)).then(function(i){t.historyList=i.data.data.list})},fetchConfig:function(){var i=this;Object(n.a)({confType:"fmDefault"}).then(function(t){i.fm_default=t.data.data.confValue?t.data.data.confValue:0}),Object(n.a)({confType:"fmMixValue"}).then(function(t){i.fm_minValue=t.data.data.confValue?t.data.data.confValue:0}),Object(n.a)({confType:"fmMaxValue"}).then(function(t){i.fm_maxValue=t.data.data.confValue?t.data.data.confValue:0})}},mounted:function(){var i=this;this.$nextTick(function(){i.fetchConfig(),i.fetchResultList(),i.fetchHistoryList()})}},l={render:function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"4mtestPage"},[e("el-dialog",{attrs:{title:"4M测试结果",visible:i.resultVisible,width:"50%",center:""},on:{"update:visible":function(t){i.resultVisible=t}}},[e("div",{staticClass:"dialog_item"},[e("div",{staticClass:"dialog_subtitle"},[i._v("全部动作次数")]),i._v(" "),e("el-input",{staticStyle:{width:"100px"},model:{value:i.dialog_minValue,callback:function(t){i.dialog_minValue=t},expression:"dialog_minValue"}}),i._v("至\n      "),e("el-input",{staticStyle:{width:"100px"},model:{value:i.dialog_maxValue,callback:function(t){i.dialog_maxValue=t},expression:"dialog_maxValue"}})],1),i._v(" "),e("div",{staticClass:"dialog_item"},[e("div",{staticClass:"dialog_subtitle"},[i._v("训练难度")]),i._v(" "),e("div",[i._v(i._s(i.dialog_trainingLevel))])]),i._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(t){i.resultVisible=!1}}},[i._v("取 消")]),i._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:i.confirmResult}},[i._v("确 定")])],1)]),i._v(" "),e("div",{directives:[{name:"permission",rawName:"v-permission",value:"80619835-75b5-44fc-9e21-dad301e3f14c",expression:"'80619835-75b5-44fc-9e21-dad301e3f14c'"}],staticClass:"test_result"},[e("sub-title",{attrs:{title:"4M测试结果"}}),i._v(" "),e("el-table",{directives:[{name:"permission",rawName:"v-permission",value:"ebf44516-39f6-481c-92eb-984cef846a47",expression:"'ebf44516-39f6-481c-92eb-984cef846a47'"}],staticStyle:{width:"100%"},attrs:{data:i.resultList}},[e("el-table-column",{attrs:{label:"训练强度",prop:"rankInfo.strengthLv"}}),i._v(" "),e("el-table-column",{attrs:{label:"全部动作总次数"},scopedSlots:i._u([{key:"default",fn:function(t){return[i._v("\n          "+i._s(t.row.mixValue)+"-"+i._s(t.row.maxValue)+"次\n        ")]}}])}),i._v(" "),e("el-table-column",{attrs:{label:"操作",prop:"time"},scopedSlots:i._u([{key:"default",fn:function(t){return[e("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"ff2ee805-b971-40dc-9dbb-eca4434614a0",expression:"'ff2ee805-b971-40dc-9dbb-eca4434614a0'"}],attrs:{type:"primary"},on:{click:function(e){i.editResult(t.row)}}},[i._v("编辑")])]}}])})],1)],1),i._v(" "),e("div",{directives:[{name:"permission",rawName:"v-permission",value:"b552a3a8-916d-4d22-bec8-576fb3bfd976",expression:"'b552a3a8-916d-4d22-bec8-576fb3bfd976'"}],staticClass:"test_threshold"},[e("div",{staticClass:"test_threshold_title"},[e("sub-title",{attrs:{title:"4M动作数量阈值"}}),i._v(" "),i.isEditing?e("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"8de25571-f366-459c-b7ac-807d388a5770",expression:"'8de25571-f366-459c-b7ac-807d388a5770'"}],staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:i.updateFmNum}},[i._v("确认修改")]):i._e()],1),i._v(" "),e("div",{staticClass:"threshold",staticStyle:{"margin-top":"20px","margin-bottom":"20px","font-size":"14px"}},[e("div",[i._v("单项4M测试动作反馈区间")]),i._v(" "),e("div",{directives:[{name:"permission",rawName:"v-permission",value:"9cdb0815-e982-4d91-93e9-d2d8db5a1b99",expression:"'9cdb0815-e982-4d91-93e9-d2d8db5a1b99'"}],staticClass:"test_threshold_item"},[i.isEditing?e("el-input",{directives:[{name:"permission",rawName:"v-permission",value:"8de25571-f366-459c-b7ac-807d388a5770",expression:"'8de25571-f366-459c-b7ac-807d388a5770'"}],staticStyle:{width:"80px"},model:{value:i.fm_minValue,callback:function(t){i.fm_minValue=t},expression:"fm_minValue"}}):e("span",[e("a",{staticClass:"hyperlink",attrs:{href:"javascript:;"},on:{click:i.editFm}},[i._v(i._s(i.fm_minValue))])]),i._v("\n         -\n        "),i.isEditing?e("el-input",{directives:[{name:"permission",rawName:"v-permission",value:"8de25571-f366-459c-b7ac-807d388a5770",expression:"'8de25571-f366-459c-b7ac-807d388a5770'"}],staticStyle:{width:"80px"},model:{value:i.fm_maxValue,callback:function(t){i.fm_maxValue=t},expression:"fm_maxValue"}}):e("span",[e("a",{staticClass:"hyperlink",attrs:{href:"javascript:;"},on:{click:i.editFm}},[i._v(i._s(i.fm_maxValue))])]),i._v("\n        个\n      ")],1)]),i._v(" "),e("div",{staticClass:"default",staticStyle:{"font-size":"14px"}},[e("div",[i._v("未填默认数值")]),i._v(" "),i.isEditing?e("el-input",{directives:[{name:"permission",rawName:"v-permission",value:"8de25571-f366-459c-b7ac-807d388a5770",expression:"'8de25571-f366-459c-b7ac-807d388a5770'"}],staticStyle:{width:"80px"},model:{value:i.fm_default,callback:function(t){i.fm_default=t},expression:"fm_default"}}):e("div",[e("a",{staticClass:"hyperlink",attrs:{href:"javascript:;"},on:{click:i.editFm}},[i._v(i._s(i.fm_default))])]),i._v("\n      个\n    ")],1)]),i._v(" "),e("el-dialog",{attrs:{title:"4M动作解析",visible:i.actionVisible,width:"50%",center:""},on:{"update:visible":function(t){i.actionVisible=t}}},[e("div",{staticClass:"dialog_item"},[e("div",{staticClass:"dialog_subtitle"},[i._v("动作名称")]),i._v(" "),e("el-input",{staticStyle:{width:"220px"},attrs:{placeholder:"输入动作名称"},model:{value:i.dialog_name,callback:function(t){i.dialog_name=t},expression:"dialog_name"}})],1),i._v(" "),e("div",{staticClass:"dialog_item"},[e("div",{staticClass:"dialog_subtitle"},[i._v("动作解释")]),i._v(" "),e("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",placeholder:"输入动作解释"},model:{value:i.dialog_description,callback:function(t){i.dialog_description=t},expression:"dialog_description"}})],1),i._v(" "),e("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"http://api-control.test.hxsapp.com/admin/Upload/uploadFile",multiple:"",limit:1,"on-success":i.successUpload,"on-error":i.failedUpload,"before-upload":i.beforeAvatarUpload}},[e("i",{staticClass:"el-icon-upload"}),i._v(" "),e("div",{staticClass:"el-upload__text"},[i._v("将文件拖到此处，或\n        "),e("em",[i._v("点击上传")]),e("div",{staticStyle:{color:"red","font-size":"10px"}},[i._v("(出现"),e("span",{staticStyle:{color:"green"}},[i._v("绿色对号"),e("i",{staticClass:"el-icon-circle-check"})]),i._v("标识时为上传成功!)")])])]),i._v(" "),e("div",{staticClass:"dialog_upload dialog_item"},[e("div",{staticClass:"dialog_subtitle"},[i._v("视频文件")]),i._v(" "),e("div",[i._v(i._s(i.video_name?i.video_name:"无"))])]),i._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(t){i.actionVisible=!1}}},[i._v("取 消")]),i._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:i.confirmAction}},[i._v("确 定")])],1)],1),i._v(" "),e("div",{directives:[{name:"permission",rawName:"v-permission",value:"53b6ae41-e5fc-44ab-bb9d-ab94536849c6",expression:"'53b6ae41-e5fc-44ab-bb9d-ab94536849c6'"}],staticClass:"test_record"},[e("div",{staticClass:"test_record_header"},[e("sub-title",{attrs:{title:"4M动作记录"}}),i._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:i.createFm}},[i._v("新增")])],1),i._v(" "),e("el-table",{directives:[{name:"permission",rawName:"v-permission",value:"2af71bc5-eb54-4de0-9ecb-167589c682c0",expression:"'2af71bc5-eb54-4de0-9ecb-167589c682c0'"}],staticStyle:{width:"100%"},attrs:{data:i.historyList}},[e("el-table-column",{attrs:{label:"序号",prop:"createTime"}}),i._v(" "),e("el-table-column",{attrs:{label:"动作",prop:"name"}}),i._v(" "),e("el-table-column",{attrs:{label:"动作解析",prop:"descText"}}),i._v(" "),e("el-table-column",{attrs:{label:"视频文件",prop:"videoName"}}),i._v(" "),e("el-table-column",{attrs:{label:"视频大小",prop:"videoSize"},scopedSlots:i._u([{key:"default",fn:function(t){return[t.row.videoSize?e("span",[i._v(i._s(t.row.videoSize)+"MB")]):e("span")]}}])}),i._v(" "),e("el-table-column",{attrs:{label:"操作",prop:"time"},scopedSlots:i._u([{key:"default",fn:function(t){return[e("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"42e023c9-036d-448d-bb86-7755f8640572",expression:"'42e023c9-036d-448d-bb86-7755f8640572'"}],attrs:{type:"primary"},on:{click:function(e){i.editAction(t.row)}}},[i._v("编辑")])]}}])})],1)],1)],1)},staticRenderFns:[]};var d=e("VU/8")(o,l,!1,function(i){e("CGyi")},"data-v-546e4667",null);t.default=d.exports}});
//# sourceMappingURL=56.2263e5a02ee9b9016b8e.js.map