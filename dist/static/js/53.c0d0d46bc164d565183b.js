webpackJsonp([53],{HSIx:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("//Fk"),i=n.n(s),o=n("mvHQ"),a=n.n(o),r=n("0LZo"),l=n("yUdk"),c=n("VTbc"),u={data:function(){return{strengthId:"1",strengthList:[],courseList:[],dialogVisible:!1,courseId:"",courseName:"",trainingType:"",trainingName:"",trainingPart:"",trainingPlanTypeId:"",bodyIds:"",planBodyTypeId:0,isLoadingCourses:!1,isLoadingAllCourses:!1,dialog_courses:[],selectedCourses:[],currentSelectedCourse:""}},components:{SubTitle:r.a},computed:{courseNum:function(){return this.courseList.length},courseIdList:function(){return this.courseList.map(function(t){return t.planCourseId})}},methods:{getCurrentSelect:function(t){},jumpToCourse:function(){this.dialogVisible=!1,this.$router.push({path:"/training/course"})},handleSelectionChange:function(t){this.selectedCourses=t.map(function(t){return t.planCourseId})},handleClose:function(t){t()},handleClick:function(t){this.fetchCourses()},addCourse:function(){this.dialogVisible=!0,this.fetchAllCourses()},editType:function(){this.addCourse()},removeType:function(t){var e=this;confirm("确认删除吗?")&&Object(l.f)({id:t.planBodyTypeCourseBindId}).then(function(t){if(200==t.data.code)return e.$notify.success("删除成功"),void e.fetchCourses();e.$notify.error("删除失败")}).catch(function(){e.$notify.error("删除失败")})},confirmUpdate:function(){var t=this;this.dialogVisible=!1,Object(l.i)({planTypeId:this.trainingPlanTypeId,planBodyTypeId:this.planBodyTypeId,planCourseId:this.currentSelectedCourse}).then(function(e){if(200==e.data.code)return t.$notify.success("绑定课程成功"),void t.fetchCourses();t.$notify.error("绑定课程失败")}).catch(function(){t.$notify.error("绑定课程失败")})},initData:function(){this.planBodyTypeId=this.$route.query.id,this.trainingType=this.$route.query.type,this.trainingName=this.$route.query.planName,this.trainingPart=this.$route.query.planPart,this.trainingPlanTypeId=this.$route.query.planTypeId,this.bodyIds=this.$route.query.bodyIds?a()(this.$route.query.bodyIds.split("-").map(function(t){return parseInt(t)})):""},createParams:function(){var t={};return this.courseName&&(t.courseName=this.courseName),this.courseId&&(t.courseId=this.courseId),t.planBodyIds=this.bodyIds,t},fetchRank:function(){var t=this;return new i.a(function(e,n){Object(c.a)({page:1,size:100}).then(function(n){t.strengthId=n.data.data.list[0].id+"",t.strengthList=n.data.data.list,e()}).catch(function(){n()})})},fetchCourses:function(){var t=this;this.isLoadingCourses=!0,Object(l.b)({planBodyTypeId:this.planBodyTypeId,rankId:this.strengthId}).then(function(e){t.courseList=e.data.data,t.isLoadingCourses=!1}).catch(function(){t.isLoadingCourses=!1})},fetchAllCourses:function(){var t=this;this.isLoadingAllCourses=!0,Object(l.a)(this.createParams()).then(function(e){e.data.data.list.forEach(function(e,n){e.createTime=t.moment(e.createTime).format("YYYY-MM-DD HH:mm:ss"),e.bodyNames=e.bodies.map(function(t){return t.planBodyName}).join(";"),e.isSelected=e.planBodyTypeId}),t.dialog_courses=e.data.data.list,t.isLoadingAllCourses=!1}).catch(function(){t.isLoadingAllCourses=!1})}},watch:{$route:function(){var t=this;this.initData(),this.fetchRank().then(function(){t.fetchCourses()})}},mounted:function(){var t=this;this.$nextTick(function(){t.initData(),t.fetchRank().then(function(){t.fetchCourses()})})}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"courseConfigPage"},[n("div",{staticClass:"trainingPlan"},[n("sub-title",{attrs:{title:"训练计划"}}),t._v(" "),n("div",{staticClass:"planDetail"},[n("div",{staticStyle:{"padding-bottom":"10px"}},[t._v("训练类型: "+t._s(t.trainingType))]),t._v(" "),n("div",{staticStyle:{"padding-bottom":"10px"}},[t._v("训练名称: "+t._s(t.trainingName))]),t._v(" "),n("div",[t._v("训练部位: "+t._s(t.trainingPart))])])],1),t._v(" "),n("div",{staticClass:"courseContent"},[n("sub-title",{attrs:{title:"课程内容"}}),t._v(" "),n("div",{staticStyle:{height:"30px"}}),t._v(" "),n("el-tabs",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoadingCourses,expression:"isLoadingCourses"}],attrs:{type:"card"},on:{"tab-click":t.handleClick},model:{value:t.strengthId,callback:function(e){t.strengthId=e},expression:"strengthId"}},t._l(t.strengthList,function(e,s){return n("el-tab-pane",{key:s,attrs:{label:e.strengthLv,name:e.id+""}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.courseList}},[n("el-table-column",{attrs:{label:"课程ID",prop:"planCourseId",width:"80"}}),t._v(" "),n("el-table-column",{attrs:{label:"课程名称",prop:"name"}}),t._v(" "),n("el-table-column",{attrs:{label:"训练基础值",prop:"typeDesc"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.courseDetailByRankVos[0].planCourseSportVos,function(e,s){return n("div",{key:s},[t._v("\n                "+t._s(s+1)+"."+t._s(3==e.sportType?"拉伸运动":1==e.sportType?"无氧运动":2==e.sportType?"有氧运动":"")+":\n                "),e.stretchExercise?n("span",[t._v(t._s(e.stretchExercise.name))]):t._e(),t._v(" "),e.facilityTypeUnitVoList?n("span",t._l(e.facilityTypeUnitVoList,function(e,s){return n("span",{key:s},[t._v("\n                    #"+t._s(e.facilityName)+"#\n                    "),n("span",{staticStyle:{color:"blue"}},[t._v("(\n                      "),t._l(e.unitInfoVoList,function(e,s){return n("span",{key:s},[t._v("\n                        "+t._s(e.unitValue)+t._s(e.unitSymbol)+";\n                      ")])}),t._v(" )")],2)])})):t._e()])})}}])}),t._v(" "),n("el-table-column",{attrs:{label:e.strengthLv,prop:"typeDesc"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.courseDetailByRankVos[1].planCourseSportVos,function(e,s){return n("div",{key:s},[t._v("\n                "+t._s(s+1)+"."+t._s(3==e.sportType?"拉伸运动":1==e.sportType?"无氧运动":2==e.sportType?"有氧运动":"")+":\n                "),e.stretchExercise?n("span",[t._v(t._s(e.stretchExercise.name))]):t._e(),t._v(" "),e.facilityTypeUnitVoList?n("span",t._l(e.facilityTypeUnitVoList,function(e,s){return n("span",{key:s},[t._v("\n                    #"+t._s(e.facilityName)+"#\n                    "),n("span",{staticStyle:{color:"blue"}},[t._v("(\n                      "),t._l(e.unitInfoVoList,function(e,s){return n("span",{key:s},[t._v("\n                        "+t._s(e.unitValue)+t._s(e.unitSymbol)+";\n                      ")])}),t._v(" )")],2)])})):t._e()])})}}])}),t._v(" "),n("el-table-column",{attrs:{label:"训练部位",prop:"bodies"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.bodies,function(e,s){return n("span",{key:s},[t._v("\n                #"+t._s(e.planBodyName)+"#   \n              ")])})}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",prop:"time",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary",plain:""},on:{click:function(n){t.editType(e.row)}}},[t._v("编辑")]),t._v(" "),n("el-button",{staticStyle:{"margin-left":"0"},attrs:{type:"danger",plain:""},on:{click:function(n){t.removeType(e.row)}}},[t._v("删除")])]}}])})],1)],1)}))],1),t._v(" "),n("div",{staticClass:"bottom_add"},[n("div",[t._v("已添加"+t._s(t.courseNum)+"天课程")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.addCourse}},[t._v("+添加课程")])],1),t._v(" "),n("el-dialog",{attrs:{title:"添加课程",visible:t.dialogVisible,width:"70%",center:"","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("div",{staticClass:"dialog_trainingType"},[n("el-input",{staticStyle:{width:"200px","margin-right":"10px"},attrs:{placeholder:"搜索课程ID"},model:{value:t.courseId,callback:function(e){t.courseId=e},expression:"courseId"}}),t._v(" "),n("el-input",{staticStyle:{width:"200px","margin-right":"10px"},attrs:{placeholder:"搜索课程名称"},model:{value:t.courseName,callback:function(e){t.courseName=e},expression:"courseName"}}),t._v(" "),n("el-button",{on:{click:t.fetchAllCourses}},[t._v("搜索")]),t._v(" "),n("el-button",{attrs:{type:"primary",plain:""},on:{click:t.jumpToCourse}},[t._v("去课程库")])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoadingAllCourses,expression:"isLoadingAllCourses"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.dialog_courses},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{label:"ID",prop:"planCourseId"}}),t._v(" "),n("el-table-column",{attrs:{label:"课程名称",prop:"name"}}),t._v(" "),n("el-table-column",{attrs:{label:"训练基础值",prop:"displayStatus"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.courseSportVoList,function(e,s){return n("div",{key:s},[t._v("\n            "+t._s(s+1)+"."+t._s(3==e.sportType?"拉伸运动":1==e.sportType?"有氧运动":2==e.sportType?"无氧运动":"")+":\n            "),e.stretchExercise?n("span",[t._v(t._s(e.stretchExercise.name))]):t._e(),t._v(" "),e.facilityTypeUnitVoList?n("span",t._l(e.facilityTypeUnitVoList,function(e,s){return n("span",{key:s},[t._v("\n                #"+t._s(e.facilityName)+"#\n                "),n("span",{staticStyle:{color:"blue"}},[t._v("(\n                  "),t._l(e.unitInfoVoList,function(e,s){return n("span",{key:s},[t._v("\n                    "+t._s(e.unitValue)+t._s(e.unitSymbol)+";\n                  ")])}),t._v(" )")],2)])})):t._e()])})}}])}),t._v(" "),n("el-table-column",{attrs:{label:"训练部位",prop:"bodyNames"}}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-radio",{attrs:{label:e.row.planCourseId,border:""},on:{change:t.getCurrentSelect},model:{value:t.currentSelectedCourse,callback:function(e){t.currentSelectedCourse=e},expression:"currentSelectedCourse"}},[t._v("选择")]),t._v(" "),t.courseIdList.includes(e.row.planCourseId)?n("div",[t._v("已在课程中")]):t._e()]}}])})],1),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.confirmUpdate}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var p=n("VU/8")(u,d,!1,function(t){n("tGfj")},"data-v-72cdc87e",null);e.default=p.exports},tGfj:function(t,e){}});
//# sourceMappingURL=53.c0d0d46bc164d565183b.js.map