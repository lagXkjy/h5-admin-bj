webpackJsonp([38],{"9q5E":function(t,e){},EU3W:function(t,e){},"T+gl":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("mvHQ"),s=i.n(a),n=i("0LZo"),o=i("RyKi");function l(t){return o.a.post("admin/Plan/getTiredAffectList",t)}function r(t){return o.a.post("admin/Plan/tiredUpdate",t)}var c={props:{tableData:{type:Array,default:function(){return[]}}},data:function(){return{affectVisible:!1,dialog_tiredName:"",dialog_aerobicList:[],dialog_anaerobicList:[],dialog_frequency:"",dialog_planTiredId:""}},methods:{yieldParams:function(){var t=this,e=[];this.dialog_aerobicList.forEach(function(i){e.push({planTiredId:t.dialog_planTiredId,sportType:2,unitId:i.unitId,frequency:t.dialog_frequency,changeData:i.changeData})});var i=[];return this.dialog_anaerobicList.forEach(function(e){i.push({planTiredId:t.dialog_planTiredId,sportType:1,unitId:e.unitId,frequency:t.dialog_frequency,changeData:e.changeData})}),s()(e.concat(i))},editAffect:function(t){this.dialog_tiredName=t.planTiredName,this.dialog_frequency=t.frequency,this.dialog_planTiredId=t.planTiredId,this.dialog_aerobicList=JSON.parse(s()(t.aerobicList)),this.dialog_anaerobicList=JSON.parse(s()(t.anaerobicList)),this.affectVisible=!0},confirm:function(){var t,e=this;this.affectVisible=!1,(t={param:this.yieldParams()},o.a.post("admin/Plan/uploadTiredAffect",t)).then(function(t){if(200==t.data.code)return e.$notify.success("编辑疲劳评价影响成功"),void e.$emit("refreshData");e.$notify.error("编辑疲劳评价影响失败")}).catch(function(){e.$notify.error("编辑疲劳评价影响失败")})}}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dialog",{attrs:{title:"编辑",visible:t.affectVisible,width:"50%",center:""},on:{"update:visible":function(e){t.affectVisible=e}}},[i("div",{staticClass:"dialog_item"},[i("div",{staticClass:"dialog_subtitle"},[t._v("疲劳反馈")]),t._v(" "),i("div",[t._v(t._s(t.dialog_tiredName))])]),t._v(" "),i("div",{staticClass:"dialog_item"},[i("div",{staticClass:"dialog_subtitle"},[t._v("有氧设备")]),t._v(" "),t._l(t.dialog_aerobicList,function(e,a){return i("div",{key:a},[i("span",[t._v(t._s(e.unitName))]),t._v(" "),i("el-input",{staticStyle:{width:"130px"},model:{value:e.changeData,callback:function(i){t.$set(e,"changeData",i)},expression:"item.changeData"}},[i("span",{attrs:{slot:"append"},slot:"append"},[t._v(t._s(e.unitSymbol))])])],1)})],2),t._v(" "),i("div",{staticClass:"dialog_item"},[i("div",{staticClass:"dialog_subtitle"},[t._v("无氧设备")]),t._v(" "),t._l(t.dialog_anaerobicList,function(e,a){return i("div",{key:a},[i("span",[t._v(t._s(e.unitName))]),t._v(" "),i("el-input",{staticStyle:{width:"130px"},model:{value:e.changeData,callback:function(i){t.$set(e,"changeData",i)},expression:"item.changeData"}},[i("span",{attrs:{slot:"append"},slot:"append"},[t._v(t._s(e.unitSymbol))])])],1)})],2),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.affectVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确 定")])],1)]),t._v(" "),i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[i("el-table-column",{attrs:{label:"疲劳反馈分类",prop:"planTiredName"}}),t._v(" "),i("el-table-column",{attrs:{label:"有氧设备"},scopedSlots:t._u([{key:"default",fn:function(e){return e.row.aerobicList&&e.row.aerobicList.length>0?t._l(e.row.aerobicList,function(e,a){return i("div",{key:a},[t._v("\n             "+t._s(e.unitName)+": "),i("span",[t._v(t._s(e.changeData)+t._s(e.unitSymbol)+" ")])])}):void 0}}])}),t._v(" "),i("el-table-column",{attrs:{label:"无氧设备",prop:"topicContent"},scopedSlots:t._u([{key:"default",fn:function(e){return e.row.anaerobicList&&e.row.anaerobicList.length>0?t._l(e.row.anaerobicList,function(e,a){return i("div",{key:a},[t._v("\n              "+t._s(e.unitName)+": "),i("span",[t._v(t._s(e.changeData)+t._s(e.unitSymbol)+" ")])])}):void 0}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作",prop:"time"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"8d8d4feb-fe89-4d4f-8e55-f21e5dfddcc7",expression:"'8d8d4feb-fe89-4d4f-8e55-f21e5dfddcc7'"}],attrs:{type:"primary",plain:""},on:{click:function(i){t.editAffect(e.row)}}},[t._v("编辑")])]}}])})],1)],1)},staticRenderFns:[]};var f=i("VU/8")(c,d,!1,function(t){i("9q5E")},"data-v-0aa3d9f2",null).exports,u=i("F+jZ"),p={data:function(){return{activeName:"m",affectList:[],fatigueList:[],isCreate:!1,dialogVisible:!1,affectVisible:!1,dialog_fatigueName:"",dialog_id:"",thresholdList:[],dialog_item:null,dialog_facilityName:"",dialog_unitInfoVos:[],thresholdVisible:!1,isUploading:!1,actionApi:u.d,iconUrl:""}},components:{SubTitle:n.a,AffectTable:f},methods:{beforeAvatarUpload:function(t){this.isUploading=!0;var e="image/png"===t.type||"image/jpeg"===t.type,i=t.size/1024/1024<1;return e||(this.$notify.error("上传ICON只能是 JPG/PNG 格式!"),this.isUploading=!1),i||(this.$notify.error("上传ICON大小不能超过 1MB!"),this.isUploading=!1),e&&i},successUpload:function(t,e,i){this.iconUrl=t.data["oss-request-url"],this.isUploading=!1},failedUpload:function(t,e,i){this.$notify.error("文件上传失败, 请重新上传"),this.isUploading=!1},configThreshold:function(t){this.dialog_item=t,this.dialog_facilityName=t.facilityName,this.dialog_unitInfoVos=t.unitInfoVos?JSON.parse(s()(t.unitInfoVos)):[],this.thresholdVisible=!0},confirmThreshold:function(){var t=this;this.dialog_item.unitInfoVos=this.dialog_unitInfoVos;var e=[],i=this.dialog_item.facilityName,a=this.dialog_item.facilityType;this.dialog_item.unitInfoVos.forEach(function(t){var s={};s.facilityName=i,s.facilityType=a,s.unitId=t.unitId,s.mixValue=t.minValue,s.maxValue=t.maxValue,e.push(s)}),e=s()(e),this.thresholdVisible=!1,function(t){return o.a.post("admin/plan/uploadEquipThreshold",t)}({param:e}).then(function(e){if(200==e.data.code)return t.$notify.success("上传疲劳阈值成功"),void t.fetchThresholdList();t.$notify.error("上传疲劳阈值失败")}).catch(function(){t.$notify.error("上传疲劳阈值失败")})},remove:function(t){var e,i=this;confirm("确认删除吗?")&&(e={id:t.id},o.a.post("admin/Plan/tiredDelete",e)).then(function(t){if(200==t.data.code)return i.$notify.success("删除成功"),void i.fetchFatigue();i.$notify.error("删除失败")}).catch(function(){i.$notify.error("删除失败")})},createFatigue:function(){this.isCreate=!0,this.dialog_fatigueName="",this.dialogVisible=!0},confirmUpdateType:function(){var t=this;this.dialogVisible=!1,this.isCreate?r({name:this.dialog_fatigueName,iconUrl:this.iconUrl}).then(function(e){200==e.data.code?(t.$notify.success("新建疲劳评价成功"),t.fetchFatigue()):t.$notify.error("新建疲劳评价失败")}).catch(function(){t.$notify.error("新建疲劳评价失败")}):r({id:this.dialog_id,name:this.dialog_fatigueName,iconUrl:this.iconUrl}).then(function(e){200==e.data.code?(t.$notify.success("修改疲劳评价成功"),t.fetchFatigue()):t.$notify.error("修改疲劳评价失败")}).catch(function(){t.$notify.error("修改疲劳评价失败")})},editFatigue:function(t){this.isCreate=!1,this.dialog_fatigueName=t.name,this.dialog_id=t.id,this.dialogVisible=!0},handleClose:function(t){t()},handleClick:function(t,e){"m"==t.name?this.fetchAffectList_M():this.fetchAffectList_N()},fetchAffectList_M:function(){var t=this;l({frequency:1}).then(function(e){t.affectList=e.data.data})},fetchFatigue:function(){var t,e=this;(t={page:1,size:100},o.a.post("admin/Plan/tiredList",t)).then(function(t){e.fatigueList=t.data.data.list})},fetchAffectList_N:function(){var t=this;l({frequency:2}).then(function(e){t.affectList=e.data.data})},fetchThresholdList:function(){var t,e=this;o.a.post("admin/plan/thresholdList",t).then(function(t){t.data.data.forEach(function(t){}),e.thresholdList=t.data.data})}},mounted:function(){var t=this;this.$nextTick(function(){t.fetchThresholdList(),t.fetchAffectList_M(),t.fetchFatigue()})}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fatigueLevelPage"},[i("div",{directives:[{name:"permission",rawName:"v-permission",value:"c947f28e-625d-45bc-9317-c0317ebee80b",expression:"'c947f28e-625d-45bc-9317-c0317ebee80b'"}],staticClass:"level"},[i("div",{directives:[{name:"permission",rawName:"v-permission",value:"c947f28e-625d-45bc-9317-c0317ebee80b",expression:"'c947f28e-625d-45bc-9317-c0317ebee80b'"}],staticClass:"level_header"},[i("sub-title",{attrs:{title:"疲劳评价"}}),t._v(" "),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"0243f807-bbfa-472e-b4cd-418878136a81",expression:"'0243f807-bbfa-472e-b4cd-418878136a81'"}],attrs:{type:"primary"},on:{click:t.createFatigue}},[t._v("新增")])],1),t._v(" "),i("el-dialog",{attrs:{title:t.isCreate?"新建":"编辑",visible:t.dialogVisible,width:"50%",center:"","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("div",{staticClass:"dialog_trainingType dialog_item"},[i("div",{staticClass:"dialog_subTitle"},[t._v("疲劳评价")]),t._v(" "),i("el-input",{staticStyle:{width:"250px"},model:{value:t.dialog_fatigueName,callback:function(e){t.dialog_fatigueName=e},expression:"dialog_fatigueName"}})],1),t._v(" "),i("div",{staticClass:"uploadFile dialog_item"},[i("div",{staticClass:"dialog_subTitle"},[t._v("ICON")]),t._v(" "),i("el-upload",{directives:[{name:"loading",rawName:"v-loading",value:t.isUploading,expression:"isUploading"}],staticClass:"upload-demo",attrs:{drag:"",action:t.actionApi,"show-file-list":!1,"on-success":t.successUpload,"on-error":t.failedUpload,"before-upload":t.beforeAvatarUpload}},[t.iconUrl?i("img",{staticClass:"avatar",attrs:{src:t.iconUrl}}):i("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.confirmUpdateType}},[t._v("确 定")])],1)]),t._v(" "),i("el-table",{directives:[{name:"permission",rawName:"v-permission",value:"c2b6eeeb-6578-4e28-a6dd-5f302401339a",expression:"'c2b6eeeb-6578-4e28-a6dd-5f302401339a'"}],staticStyle:{width:"100%"},attrs:{data:t.fatigueList}},[i("el-table-column",{attrs:{label:"ID",prop:"id"}}),t._v(" "),i("el-table-column",{attrs:{label:"疲劳评价",prop:"name"}}),t._v(" "),i("el-table-column",{attrs:{label:"ICON",prop:"iconUrl"},scopedSlots:t._u([{key:"default",fn:function(t){return[i("img",{staticStyle:{"max-width":"100px"},attrs:{src:t.row.iconUrl,alt:""}})]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"ad92eef2-cb07-441e-abe0-e98cd8475680",expression:"'ad92eef2-cb07-441e-abe0-e98cd8475680'"}],attrs:{type:"primary",plain:""},on:{click:function(i){t.editFatigue(e.row)}}},[t._v("编辑")]),t._v(" "),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"ba4e37d4-7fc6-49f0-9d3e-06fe51dcf614",expression:"'ba4e37d4-7fc6-49f0-9d3e-06fe51dcf614'"}],attrs:{type:"danger",plain:""},on:{click:function(i){t.remove(e.row)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),i("div",{directives:[{name:"permission",rawName:"v-permission",value:"a8c437d2-1dc2-4614-9fbe-6dd0dadf55ae",expression:"'a8c437d2-1dc2-4614-9fbe-6dd0dadf55ae'"}],staticClass:"level_affect"},[i("div",{staticClass:"level_affect_header"},[i("sub-title",{attrs:{title:"疲劳评价影响"}})],1),t._v(" "),i("el-tabs",{directives:[{name:"permission",rawName:"v-permission",value:"e236aff1-b47e-4874-82bc-8d2d5f7e1b84",expression:"'e236aff1-b47e-4874-82bc-8d2d5f7e1b84'"}],attrs:{type:"card"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[i("el-tab-pane",{attrs:{label:"第M次反馈",name:"m"}},[i("affect-table",{attrs:{tableData:t.affectList},on:{refreshData:t.fetchAffectList_M}})],1),t._v(" "),i("el-tab-pane",{attrs:{label:"第N次反馈",name:"n"}},[i("affect-table",{attrs:{tableData:t.affectList},on:{refreshData:t.fetchAffectList_N}})],1)],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"阈值设置",visible:t.thresholdVisible,width:"50%",center:""},on:{"update:visible":function(e){t.thresholdVisible=e}}},[i("div",{staticClass:"dialog_item"},[i("div",{staticClass:"dialog_subTitle",staticStyle:{width:"80px"}},[t._v("设备名称")]),t._v(" "),i("div",[t._v(t._s(t.dialog_facilityName))])]),t._v(" "),t._l(t.dialog_unitInfoVos,function(e,a){return i("div",{key:a,staticClass:"dialog_units dialog_item"},[i("div",{staticStyle:{width:"80px"}},[t._v(t._s(e.unitName))]),t._v(" "),i("div",[t._v("最低 "),i("el-input",{staticStyle:{width:"120px"},model:{value:e.minValue,callback:function(i){t.$set(e,"minValue",i)},expression:"item.minValue"}},[i("span",{attrs:{slot:"append"},slot:"append"},[t._v(t._s(e.unitSymbol))])])],1),t._v(" "),i("div",[t._v("最高 "),i("el-input",{staticStyle:{width:"120px"},model:{value:e.maxValue,callback:function(i){t.$set(e,"maxValue",i)},expression:"item.maxValue"}},[i("span",{attrs:{slot:"append"},slot:"append"},[t._v(t._s(e.unitSymbol))])])],1)])}),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.thresholdVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.confirmThreshold}},[t._v("确 定")])],1)],2),t._v(" "),i("div",{staticClass:"threshold_list"},[i("div",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[i("sub-title",{attrs:{title:"疲劳评价阈值"}})],1),t._v(" "),i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.thresholdList}},[i("el-table-column",{attrs:{label:"分类",prop:"sportType"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(1==e.row.sportType?"无氧设备":2==e.row.sportType?"有氧设备":"")+"\n        ")]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"设备名称",prop:"facilityName"}}),t._v(" "),i("el-table-column",{attrs:{label:"疲劳评价",prop:"unitInfoVos"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.unitInfoVos,function(e,a){return i("div",{key:a},[i("span",[t._v(t._s(e.unitName))]),t._v(":"),i("span",[t._v("最低"+t._s(e.minValue)+t._s(e.unitSymbol)+";")]),i("span",[t._v("最高"+t._s(e.maxValue)+t._s(e.unitSymbol))]),t._v(";\n          ")])})}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary",plain:""},on:{click:function(i){t.configThreshold(e.row)}}},[t._v("设置")])]}}])})],1)],1)],1)},staticRenderFns:[]};var _=i("VU/8")(p,v,!1,function(t){i("EU3W")},"data-v-0c1f904b",null);e.default=_.exports}});
//# sourceMappingURL=38.ba0f252bafafbce4a8cd.js.map