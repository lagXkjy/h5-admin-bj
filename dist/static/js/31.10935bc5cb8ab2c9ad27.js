webpackJsonp([31],{"/iam":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=a("//Fk"),n=a.n(e),s=a("0LZo"),o=a("yUdk"),r=a("b5K4"),l=a("EfP4"),c=window.location.host,d={props:{tableData:{type:Array,default:function(){return[]}},tabName:{type:String,default:function(){return""}},planTypeId:{type:Number,default:0}},components:{DropDownImage:r.a},data:function(){return{active:1,isCreate:!1,dialogVisible:!1,dialog_id:0,dialog_type:this.tabName,dialog_planname:"",dialog_imgUrl:"",dialog_parts:[],parts:[],parts_name:[]}},computed:{apiUrl:function(){return"admin-gym.hxsapp.com"===c?"http://api-control.hxsapp.com/admin/Upload/uploadFile":"http://api-control.test.hxsapp.com/admin/Upload/uploadFile"},datas:function(){var t=this,i=this.tableData.concat();return i.forEach(function(i,a){i.planPart=i.bodyList?i.bodyList.map(function(t){return t.name}).join("、"):"",i.planPartIds=i.bodyList?i.bodyList.map(function(t){return t.id}).join("-"):"",i.createTime=t.moment(i.createTime).format("YYYY-MM-DD HH:mm")}),i}},methods:{beforeAvatarUpload:function(t){this.isUploading=!0;var i="image/png"===t.type||"image/jpeg"===t.type,a=t.size/1024/1024<1;return i||(this.$notify.error("上传图片只能是 JPG/PNG 格式!"),this.isUploading=!1),a||(this.$notify.error("上传图片大小不能超过 1MB!"),this.isUploading=!1),i&&a},switchChange:function(t){var i=this;Object(o.j)({id:t.id,planTypeId:t.planTypeId,displayStatus:t.displayStatus}).then(function(t){if(200==t.data.code)return i.$notify.success("修改训练计划显示状态成功"),void i.$emit("refreshData",i.planTypeId);i.$notify.error("修改训练计划显示状态失败")}).catch(function(){i.$notify.error("修改训练计划显示状态失败")})},geteditingIds:function(){var t=this,i=[];return this.parts_name.forEach(function(a){t.parts.forEach(function(t){t.name!=a.name||i.push(t.id)})}),i},removePlan:function(t){var i=this;confirm("确认要删除吗")&&Object(o.g)({id:t.id}).then(function(a){if(200==a.data.code)return i.$notify.success("删除成功"),void i.$emit("refreshData",t.planTypeId);i.$notify.error("删除失败")}).catch(function(){i.$notify.error("删除失败")})},resetDialog:function(){this.isCreate=!1,this.dialog_type=this.tabName,this.dialog_planname="",this.dialog_imgUrl="",this.dialog_parts=[],this.dialogVisible=!1,this.dialog_id=0,this.parts_name=[]},successUpload:function(t){this.dialog_imgUrl=t.data["oss-request-url"]},failedUpload:function(t){},handleClose:function(t){this.resetDialog(),t()},createPlan:function(){this.resetDialog(),this.isCreate=!0,this.dialogVisible=!0},editPlan:function(t){this.isCreate=!1,this.dialog_planname=t.planName,this.parts_name=t.bodyList?t.bodyList:[],this.dialog_imgUrl=t.bodyImg,this.dialog_id=t.id,this.dialog_parts=this.geteditingIds(),this.dialogVisible=!0},editCourse:function(t){this.$router.push({path:"/training/courseConfig?id="+t.id+"&planTypeId="+t.planTypeId+"&planPart="+t.planPart+"&type="+this.tabName+"&planName="+t.planName+"&bodyIds="+t.planPartIds})},confirmUpdate:function(){var t=this;this.isCreate?(this.dialogVisible=!1,Object(o.j)({planTypeId:this.planTypeId,planName:this.dialog_planname,bodyIds:this.dialog_parts.join(","),bodyImg:this.dialog_imgUrl}).then(function(i){if(200==i.data.code)return t.$notify.success("添加训练计划成功"),t.$emit("refreshData",t.planTypeId),void t.resetDialog();t.$notify.error("添加训练计划失败"),t.resetDialog()}).catch(function(){t.$notify.error("添加训练计划失败"),t.resetDialog()})):(this.dialogVisible=!1,Object(o.j)({id:this.dialog_id,planTypeId:this.planTypeId,planName:this.dialog_planname,bodyIds:this.dialog_parts.join(","),bodyImg:this.dialog_imgUrl}).then(function(i){if(200==i.data.code)return t.$notify.success("修改训练计划成功"),t.$emit("refreshData",t.planTypeId),void t.resetDialog();t.$notify.error("修改训练计划失败"),t.resetDialog()}).catch(function(){t.$notify.error("修改训练计划失败"),t.resetDialog()}))},fetchParts:function(){var t=this;Object(l.a)({page:1,size:100}).then(function(i){200==i.data.code&&i.data.data?t.parts=i.data.data.list:t.parts=[]}).catch(function(){t.parts=[]})}},mounted:function(){var t=this;this.$nextTick(function(){t.fetchParts()})}},p={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"trainingPlanPage"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:t.createPlan}},[t._v("+训练部位计划")]),t._v(" "),a("el-dialog",{attrs:{title:t.isCreate?"新建":"编辑",visible:t.dialogVisible,width:"50%",center:"","before-close":t.handleClose},on:{"update:visible":function(i){t.dialogVisible=i}}},[a("div",{staticClass:"dialog_item"},[a("div",{staticClass:"dialog_subTitle"},[t._v("训练类型")]),t._v(" "),a("el-input",{staticStyle:{width:"200px"},attrs:{disabled:""},model:{value:t.dialog_type,callback:function(i){t.dialog_type=i},expression:"dialog_type"}})],1),t._v(" "),a("div",{staticClass:"dialog_item"},[a("div",{staticClass:"dialog_subTitle"},[t._v("训练计划名称")]),t._v(" "),a("el-input",{staticStyle:{width:"300px"},attrs:{maxlength:"5",placeholder:"限五个字"},model:{value:t.dialog_planname,callback:function(i){t.dialog_planname=i},expression:"dialog_planname"}})],1),t._v(" "),a("div",{staticClass:"dialog_item"},[a("div",{staticClass:"dialog_subTitle"},[t._v("选择训练部位")]),t._v(" "),a("div",{staticClass:"dialog_checkboxs"},[a("el-checkbox-group",{staticStyle:{width:"100%"},model:{value:t.dialog_parts,callback:function(i){t.dialog_parts=i},expression:"dialog_parts"}},t._l(t.parts,function(i){return a("el-checkbox",{key:i.id,staticStyle:{"margin-bottom":"10px"},attrs:{label:i.id,border:""}},[t._v(t._s(i.name))])}))],1)]),t._v(" "),a("div",{staticClass:"dialog_item"},[a("div",{staticClass:"dialog_subTitle"},[t._v("关联图片")]),t._v(" "),a("el-upload",{staticClass:"avatar-uploader",staticStyle:{width:"178px"},attrs:{drag:"",action:t.apiUrl,"on-success":t.successUpload,"on-error":t.failedUpload,"before-upload":t.beforeAvatarUpload,limit:1,"show-file-list":!1}},[t.dialog_imgUrl?a("img",{staticClass:"avatar",attrs:{src:t.dialog_imgUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(i){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.confirmUpdate}},[t._v("确 认")])],1)]),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.datas}},[a("el-table-column",{attrs:{label:"ID",prop:"id"}}),t._v(" "),a("el-table-column",{attrs:{label:"训练计划名称",prop:"planName"}}),t._v(" "),a("el-table-column",{attrs:{label:"训练计划部位",prop:"planPart"}}),t._v(" "),a("el-table-column",{attrs:{label:"关联图片",prop:"bodyImg"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{"max-width":"100px"},attrs:{src:t.row.bodyImg,alt:""}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"训练课程",prop:"courseNum"}}),t._v(" "),a("el-table-column",{attrs:{label:"创建时间",prop:"createTime"}}),t._v(" "),a("el-table-column",{attrs:{label:"状态",prop:"displayStatus"},scopedSlots:t._u([{key:"default",fn:function(i){return[t._v("\n        "+t._s(1==i.row.displayStatus?"启用":2==i.row.displayStatus?"禁用":"")+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"前端显示",prop:"displayStatus"},scopedSlots:t._u([{key:"default",fn:function(i){return[a("el-switch",{directives:[{name:"permission",rawName:"v-permission",value:"0604b63c-8efc-4930-a967-57200a691693",expression:"'0604b63c-8efc-4930-a967-57200a691693'"}],attrs:{"active-value":1,"inactive-value":2,disabled:0==i.row.courseNum},on:{change:function(a){t.switchChange(i.row)}},model:{value:i.row.displayStatus,callback:function(a){t.$set(i.row,"displayStatus",a)},expression:"scope.row.displayStatus"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"170px"},scopedSlots:t._u([{key:"default",fn:function(i){return[a("div",{staticStyle:{"padding-top":"10px","padding-right":"10px",display:"flex","justify-content":"center","flex-direction":"column","align-items":"center"}},[a("el-badge",{staticClass:"item",attrs:{value:0==i.row.courseNum?"待设置":""}},[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"b1383105-d560-49ff-8065-28adbec7efbd",expression:"'b1383105-d560-49ff-8065-28adbec7efbd'"}],staticStyle:{"margin-bottom":"5px"},attrs:{type:"primary",plain:""},on:{click:function(a){t.editCourse(i.row)}}},[t._v("编辑课程")])],1),t._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"4ca77024-2728-4012-b46d-28f499d28f57",expression:"'4ca77024-2728-4012-b46d-28f499d28f57'"}],staticStyle:{"margin-bottom":"5px"},attrs:{type:"primary",plain:""},on:{click:function(a){t.editPlan(i.row)}}},[t._v("修改")]),t._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"0f9fb069-36af-426f-a7a1-fccdc0bd14bc",expression:"'0f9fb069-36af-426f-a7a1-fccdc0bd14bc'"}],staticStyle:{"margin-left":"0","margin-bottom":"5px"},attrs:{type:"danger",plain:""},on:{click:function(a){t.removePlan(i.row)}}},[t._v("删除")])],1)]}}])})],1)],1)},staticRenderFns:[]};var u=a("VU/8")(d,p,!1,function(t){a("DRfV")},"data-v-5c7c3e12",null).exports,f=a("F+jZ"),m={data:function(){return{iconUrl:"",actionApi:f.d,activeType:"2",bmiMinValue:"",bmiMaxValue:"",isCreate:!0,currentId:null,trainingType:"",tipContent:"",dialogVisible:!1,trainingTypeList:[],trainingPartList:[],isLoading:!1,isLoadingTrainingType:!1,isUploading:!1}},components:{SubTitle:s.a,TrainingPlanTable:u,DropDownImage:r.a},beforeRouteEnter:function(t,i,a){a(function(t){t.$nextTick(function(){t.fetchTrainingType().then(function(){t.activeType=t.trainingTypeList[0]?t.trainingTypeList[0].id+"":"0",t.fetchTrainingPartList(t.activeType)})})})},methods:{beforeAvatarUpload:function(t){this.isUploading=!0;var i="image/png"===t.type||"image/jpeg"===t.type,a=t.size/1024/1024<1;return i||(this.$notify.error("上传ICON只能是 JPG/PNG 格式!"),this.isUploading=!1),a||(this.$notify.error("上传ICON大小不能超过 1MB!"),this.isUploading=!1),i&&a},successUpload:function(t,i,a){this.iconUrl=t.data["oss-request-url"],this.isUploading=!1},failedUpload:function(t,i,a){this.$notify.error("文件上传失败, 请重新上传"),this.isUploading=!1},verifyData:function(){return!(!this.trainingType||!this.tipContent)},jumpToDifficultyConfig:function(t){this.$router.push({path:"/training/DifficultyConfig?planTypeId="+t.id+"&planType="+t.name})},handleClose:function(t){this.resetData(),t()},editType:function(t){this.iconUrl=t.iconUrl,this.trainingType=t.name,this.tipContent=t.typeDesc,this.bmiMinValue=t.mixBmi,this.bmiMaxValue=t.maxBmi,this.dialogVisible=!0,this.currentId=t.id,this.isCreate=!1},removeType:function(t){var i=this;Object(o.h)({id:t.id}).then(function(t){if(200==t.data.code)return i.$notify.success("删除成功"),void i.fetchTrainingType();i.$notify.error("删除失败")}).catch(function(){i.$notify.error("删除失败")})},createTrainingType:function(){this.trainingType="",this.tipContent="",this.currentId=null,this.isCreate=!0,this.dialogVisible=!0},resetData:function(){this.dialogVisible=!1,this.tipContent="",this.trainingType="",this.currentId=null},confirmUpdateType:function(){var t=this;if(this.isCreate){if(!this.verifyData())return void this.$notify.warning("训练类型或提示文案不能为空");Object(o.k)({name:this.trainingType,typeDesc:this.tipContent,iconUrl:this.iconUrl,minBmi:this.bmiMinValue,maxBmi:this.bmiMaxValue}).then(function(i){if(200==i.data.code)return t.$notify.success("创建训练类型成功"),t.resetData(),void t.fetchTrainingType();t.$notify.error("创建失败"),t.resetData()}).catch(function(){t.$notify.error("创建失败"),t.resetData()})}else{if(!this.verifyData())return void this.$notify.warning("训练类型或提示文案不能为空");Object(o.k)({id:this.currentId,name:this.trainingType,typeDesc:this.tipContent,iconUrl:this.iconUrl,minBmi:this.bmiMinValue,maxBmi:this.bmiMaxValue}).then(function(i){if(200==i.data.code)return t.$notify.success("编辑训练类型成功"),t.resetData(),void t.fetchTrainingType();t.$notify.error("编辑失败"),t.resetData()}).catch(function(){t.$notify.error("编辑失败"),t.resetData()})}},switchChange:function(t){var i=this;Object(o.k)({id:t.id,displayStatus:t.displayStatus}).then(function(t){if(200==t.data.code)return i.$notify.success("修改显示状态成功"),void i.fetchTrainingType();i.$notify.error("修改显示状态失败")}).catch(function(){i.$notify.error("修改显示状态失败")})},handleClick:function(t){this.fetchTrainingPartList(t.name)},fetchTrainingType:function(){var t=this;return this.isLoadingTrainingType=!0,new n.a(function(i,a){Object(o.e)({page:1,size:100}).then(function(a){t.trainingTypeList=a.data.data.list,t.isLoadingTrainingType=!1,i()}).catch(function(){t.isLoadingTrainingType=!1,a()})})},fetchTrainingPartList:function(t){var i=this;this.isLoading=!0,Object(o.c)({page:1,size:100,planTypeId:t}).then(function(t){i.trainingPartList=t.data.data.list,i.isLoading=!1}).catch(function(){i.isLoading=!1})}},mounted:function(){var t=this;this.$nextTick(function(){t.fetchTrainingType().then(function(){t.activeType=t.trainingTypeList[0]?t.trainingTypeList[0].id+"":"0",t.fetchTrainingPartList(t.activeType)})})}},g={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"newPlanPage"},[a("div",{staticClass:"title"},[t._v("训练类型和计划")]),t._v(" "),a("div",{directives:[{name:"permission",rawName:"v-permission",value:"19d9d3de-3efc-4a6d-9c40-37c5673a8b0a",expression:"'19d9d3de-3efc-4a6d-9c40-37c5673a8b0a'"}],staticClass:"trainingType"},[a("div",{staticClass:"trainingType_header"},[a("sub-title",{attrs:{title:"训练类型"}}),t._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"5ca9a3c5-6d4b-40d9-895a-0291097681f4",expression:"'5ca9a3c5-6d4b-40d9-895a-0291097681f4'"}],attrs:{type:"primary"},on:{click:t.createTrainingType}},[t._v("新建训练类型版块")])],1),t._v(" "),a("el-dialog",{attrs:{title:t.isCreate?"新建":"编辑",visible:t.dialogVisible,width:"50%",center:"","before-close":t.handleClose},on:{"update:visible":function(i){t.dialogVisible=i}}},[a("div",{staticClass:"dialog_trainingType"},[a("div",{staticClass:"dialog_subTitle"},[t._v("训练类型")]),t._v(" "),a("el-input",{staticStyle:{width:"250px"},attrs:{maxlength:"8",placeholder:"8个汉字内"},model:{value:t.trainingType,callback:function(i){t.trainingType=i},expression:"trainingType"}})],1),t._v(" "),a("div",{staticClass:"tipContent"},[a("div",{staticClass:"dialog_subTitle"},[t._v("提示文案")]),t._v(" "),a("el-input",{staticStyle:{width:"350px"},attrs:{type:"textarea",maxlength:"30",placeholder:"30汉字内"},model:{value:t.tipContent,callback:function(i){t.tipContent=i},expression:"tipContent"}})],1),t._v(" "),a("div",{staticClass:"uploadFile"},[a("div",{staticClass:"dialog_subTitle"},[t._v("ICON")]),t._v(" "),a("el-upload",{directives:[{name:"loading",rawName:"v-loading",value:t.isUploading,expression:"isUploading"}],staticClass:"upload-demo",attrs:{drag:"",action:t.actionApi,"show-file-list":!1,"on-success":t.successUpload,"on-error":t.failedUpload,"before-upload":t.beforeAvatarUpload}},[t.iconUrl?a("img",{staticClass:"avatar",attrs:{src:t.iconUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),a("div",{staticClass:"BMIconfig"},[a("div",{staticClass:"dialog_subTitle"},[t._v("BMI最小值")]),t._v(" "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"BMI最小值"},model:{value:t.bmiMinValue,callback:function(i){t.bmiMinValue=i},expression:"bmiMinValue"}})],1),t._v(" "),a("div",{staticClass:"BMIconfig"},[a("div",{staticClass:"dialog_subTitle"},[t._v("BMI最大值")]),t._v(" "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"BMI最大值"},model:{value:t.bmiMaxValue,callback:function(i){t.bmiMaxValue=i},expression:"bmiMaxValue"}})],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(i){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.confirmUpdateType}},[t._v("确 定")])],1)]),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoadingTrainingType,expression:"isLoadingTrainingType"},{name:"permission",rawName:"v-permission",value:"006f1449-3e14-4218-919f-5969645e8060",expression:"'006f1449-3e14-4218-919f-5969645e8060'"}],staticClass:"trainingTypeTable"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.trainingTypeList}},[a("el-table-column",{attrs:{label:"ID",prop:"id"}}),t._v(" "),a("el-table-column",{attrs:{label:"训练类型",prop:"name"}}),t._v(" "),a("el-table-column",{attrs:{label:"提示文案",prop:"typeDesc"}}),t._v(" "),a("el-table-column",{attrs:{label:"ICON",prop:"iconUrl"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{"max-width":"100px"},attrs:{src:t.row.iconUrl,alt:""}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"前端显示",prop:"displayStatus"},scopedSlots:t._u([{key:"default",fn:function(i){return[a("el-switch",{directives:[{name:"permission",rawName:"v-permission",value:"067af995-fb7f-4fc5-b1ee-8c6e4bac64b2",expression:"'067af995-fb7f-4fc5-b1ee-8c6e4bac64b2'"}],attrs:{"active-value":1,"inactive-value":2},on:{change:function(a){t.switchChange(i.row)}},model:{value:i.row.displayStatus,callback:function(a){t.$set(i.row,"displayStatus",a)},expression:"scope.row.displayStatus"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",prop:"time",width:"300"},scopedSlots:t._u([{key:"default",fn:function(i){return[a("div",{staticStyle:{"padding-top":"7px"}},[a("el-badge",{directives:[{name:"permission",rawName:"v-permission",value:"4d06bedc-e34e-4213-9e27-42aa513fb32b",expression:"'4d06bedc-e34e-4213-9e27-42aa513fb32b'"}],attrs:{value:0==i.row.isSetDif?"待设置":""}},[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"4d06bedc-e34e-4213-9e27-42aa513fb32b",expression:"'4d06bedc-e34e-4213-9e27-42aa513fb32b'"}],attrs:{type:"primary",plain:""},on:{click:function(a){t.jumpToDifficultyConfig(i.row)}}},[t._v("设置难度")])],1),t._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"5f57b9a5-2a4a-436e-8487-610a959de3d6",expression:"'5f57b9a5-2a4a-436e-8487-610a959de3d6'"}],attrs:{type:"primary",plain:""},on:{click:function(a){t.editType(i.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"438c34a6-aaa6-4109-b1ae-7c1aedda863e",expression:"'438c34a6-aaa6-4109-b1ae-7c1aedda863e'"}],attrs:{type:"danger",plain:""},on:{click:function(a){t.removeType(i.row)}}},[t._v("删除")])],1)]}}])})],1)],1)],1),t._v(" "),a("div",{directives:[{name:"permission",rawName:"v-permission",value:"f2cbfbf6-4532-4311-abec-78d2c5db4ba7",expression:"'f2cbfbf6-4532-4311-abec-78d2c5db4ba7'"}],staticClass:"trainingPart"},[a("div",{staticClass:"trainingPart_header"},[a("sub-title",{attrs:{title:"训练部位计划"}})],1),t._v(" "),t.trainingTypeList&&t.trainingTypeList.length>0?a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"trainingPartTabs"},[a("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.handleClick},model:{value:t.activeType,callback:function(i){t.activeType=i},expression:"activeType"}},t._l(t.trainingTypeList,function(i,e){return a("el-tab-pane",{key:e,attrs:{label:i.name,name:i.id+""}},[a("training-plan-table",{directives:[{name:"permission",rawName:"v-permission",value:"ebf19857-d6f4-4eb2-8483-c321f4149828",expression:"'ebf19857-d6f4-4eb2-8483-c321f4149828'"}],attrs:{tableData:t.trainingPartList,tabName:i.name,planTypeId:i.id},on:{refreshData:t.fetchTrainingPartList}})],1)}))],1):t._e()])])},staticRenderFns:[]};var v=a("VU/8")(m,g,!1,function(t){a("QJ8/")},"data-v-5404326e",null);i.default=v.exports},DRfV:function(t,i){},"QJ8/":function(t,i){}});
//# sourceMappingURL=31.10935bc5cb8ab2c9ad27.js.map