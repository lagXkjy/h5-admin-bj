webpackJsonp([32],{NF88:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("mvHQ"),s=i.n(a),n=i("JaHG"),r=i("RyKi");function o(e){return r.a.post("admin/Main/musicList",e)}var c={props:{tableData:{type:Array,default:function(){return[]}}},data:function(){return{multipleSelection:[]}},computed:{datas:function(){var e=Object(n.b)(this.tableData);return e.forEach(function(e,t){e.createTime=moment(e.createTime).format("YYYY-MM-DD HH:mm:ss")}),e}},methods:{remove:function(e){var t,i=this;confirm("确定要删除吗?")&&(t={id:e.id},r.a.post("admin/Main/musicDelete",t)).then(function(e){200==e.data.code?(i.$notify.success("删除成功"),i.$emit("refresh")):i.$notify.error("删除失败")}).catch(function(){i.$notify.error("删除失败")})},toggleSelection:function(e){var t=this;e?e.forEach(function(e){t.$refs.multipleTable.toggleRowSelection(e)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){this.multipleSelection=e}}},l={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.datas,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{label:"ID",prop:"id"}}),e._v(" "),i("el-table-column",{attrs:{prop:"createTime",label:"上传时间"}}),e._v(" "),i("el-table-column",{attrs:{prop:"musicName",label:"名称"}}),e._v(" "),i("el-table-column",{attrs:{prop:"musicUrl",label:"输出地址"}}),e._v(" "),i("el-table-column",{attrs:{prop:"musicLength",label:"大小"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n      "+e._s(t.row.musicLength)+"MB\n    ")]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"1c61cc40-de8e-4e0b-8541-3c237f9139f9",expression:"'1c61cc40-de8e-4e0b-8541-3c237f9139f9'"}],attrs:{type:"danger",plain:""},on:{click:function(i){e.remove(t.row)}}},[e._v("删除")])]}}])})],1)},staticRenderFns:[]};var u=i("VU/8")(c,l,!1,function(e){i("fTq1")},"data-v-525a5e5b",null).exports,d=i("F+jZ"),f={components:{MusicTable:u},data:function(){return{store:1,currentNormalPage:1,currentNormalSize:10,curNormalTotal:0,actionApi:d.d,fileList:[],musicList:[],musicUrl:"",musicName:"",normalMusic:[],crazyMusic:[],curMusicType:1,dialogVisible:!1,isOverUploading:!1,useableMusicSuffix:["mp3","wma","mod","wmv","ra","cd","md","asf","mp3pro"]}},computed:{dropdownStoreList:function(){return this.$store.state.board.dropdownStoreList}},methods:{handleSizeChange:function(e){this.currentNormalSize=e,this.fetchNormal()},handleCurrentChange:function(e){this.currentNormalPage=e,this.fetchNormal()},handleRemove:function(e,t){},handlePreview:function(e){},handleExceed:function(e,t){},beforeRemove:function(e,t){},beforeAvatarUpload:function(e){var t="audio/mp3"===e.type||"audio/mpeg"===e.type,i=e.size/1024/1024<20;return t||this.$notify.error("上传音频只能是 MP3 格式!"),i||this.$notify.error("上传视音频大小不能超过 20MB!"),t&&i},successUpload:function(e,t,i){var a=e.data["oss-request-url"],s=(e.data.info.size_upload/1024/1024).toFixed(1);this.musicList.push({name:t.name,url:a,size:s}),this.isOverUploading=!0},failedUpload:function(e,t,i){this.$notify.error("文件上传失败, 请重新上传"),this.isOverUploading=!1},getSuffix:function(e){if(!e||"string"!=typeof e)return"";var t=e.split("."),i=t.pop();return{name:t.join(""),suffix:i}},confirm:function(){var e=this;if(!this.isOverUploading)return this.$notify.warning("请等待文件上传成功");var t=[];JSON.parse(s()(this.musicList)).forEach(function(i){var a={};a.storeId=e.store,a.musicName=e.getSuffix(i.name).name,a.musicSuffix=e.getSuffix(i.name).suffix,a.musicUrl=i.url,a.musicLength=i.size,a.musicType=e.curMusicType,t.push(a)}),this.dialogVisible=!1,function(e){return r.a.post("admin/Main/uploadBatch",e)}({param:s()(t)}).then(function(t){200==t.data.code?(e.$notify.success("音频上传成功"),e.fetchMusic()):e.$notify.error("音频上传失败, 错误描述: "+t.data.message)}).catch(function(t){e.$notify.error("音频上传失败, 错误描述: 网络异常")})},mapNormalPagination:function(e){this.currentNormalPage=e.pageNum<1?1:e.pageNum,this.currentNormalSize=e.pageSize,this.curNormalTotal=e.total},cancel:function(){this.dialogVisible=!1},_uploadMusic:function(e){this.curMusicType=e,this.fileList=[],this.musicList=[],this.dialogVisible=!0},fetchNormal:function(){var e=this;o({page:this.currentNormalPage,size:this.currentNormalSize,musicType:1}).then(function(t){e.normalMusic=t.data.data.list,e.mapNormalPagination(t.data.data)})},fetchCrazy:function(){var e=this;o({page:1,size:100,musicType:2}).then(function(t){e.crazyMusic=t.data.data.list})},fetchMusic:function(){this.fetchNormal(),this.fetchCrazy()}},beforeRouteEnter:function(e,t,i){i(function(e){e.$nextTick(function(){e.fetchMusic()})})},mounted:function(){var e=this;this.$nextTick(function(){e.musicList=[],e.fetchMusic(),0==e.dropdownStoreList.length&&e.$store.dispatch("getStores")})}},m={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"protalPage"},[i("div",{staticClass:"usersPage"},[i("div",{staticClass:"title"},[e._v("\n      音乐管理\n    ")]),e._v(" "),i("el-dialog",{attrs:{title:"上传音频",visible:e.dialogVisible,width:"40%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("div",{staticStyle:{"font-size":"10px",color:"red"}},[e._v("(出现"),i("span",{staticStyle:{color:"green"}},[e._v("绿色对号"),i("i",{staticClass:"el-icon-circle-check"})]),e._v("标识时为上传成功!)")]),e._v(" "),i("div",{staticClass:"dialog_item"},[i("div",{staticStyle:{width:"80px"}},[e._v("选择门店")]),e._v(" "),i("el-select",{staticStyle:{"margin-bottom":"10px"},attrs:{placeholder:"请选择",size:"medium"},model:{value:e.store,callback:function(t){e.store=t},expression:"store"}},e._l(e.dropdownStoreList,function(e,t){return i("el-option",{key:t,attrs:{label:e.storeName,value:e.id}})}))],1),e._v(" "),i("el-upload",{staticClass:"upload-demo",attrs:{action:e.actionApi,"on-success":e.successUpload,"on-error":e.failedUpload,"before-upload":e.beforeAvatarUpload,"file-list":e.fileList}},[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.cancel}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确 定")])],1)],1),e._v(" "),i("div",{directives:[{name:"permission",rawName:"v-permission",value:"fb727079-cd44-48a1-a861-6b246b6a8a88",expression:"'fb727079-cd44-48a1-a861-6b246b6a8a88'"}],staticClass:"music"},[i("div",{staticClass:"header"},[i("div",{staticClass:"subtitle"},[e._v("普通音频")]),e._v(" "),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"4d4e6ced-3d23-4a20-b8db-1cd1fe0f4ade",expression:"'4d4e6ced-3d23-4a20-b8db-1cd1fe0f4ade'"}],attrs:{type:"primary"},on:{click:function(t){e._uploadMusic(1)}}},[e._v("上传")])],1),e._v(" "),i("div",{directives:[{name:"permission",rawName:"v-permission",value:"47f086fa-3673-472a-84c3-ac8da8988653",expression:"'47f086fa-3673-472a-84c3-ac8da8988653'"}],staticClass:"musicTable"},[i("music-table",{attrs:{tableData:e.normalMusic},on:{refresh:e.fetchMusic}}),e._v(" "),i("div",{staticClass:"paginationBox"},[i("el-pagination",{attrs:{"current-page":e.currentNormalPage,"page-sizes":[10,20,30,40],"page-size":e.currentNormalSize,layout:"total, sizes, prev, pager, next, jumper",total:e.curNormalTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)]),e._v(" "),i("div",{directives:[{name:"permission",rawName:"v-permission",value:"0e5c45e1-72be-4203-83cf-1be188cf5906",expression:"'0e5c45e1-72be-4203-83cf-1be188cf5906'"}],staticClass:"specialMusic"},[i("div",{staticClass:"header"},[i("div",{staticClass:"subtitle"},[e._v("紧急音频")]),e._v(" "),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"6bd38c83-6ea9-4683-8404-af26f0f3cddc",expression:"'6bd38c83-6ea9-4683-8404-af26f0f3cddc'"}],attrs:{type:"primary"},on:{click:function(t){e._uploadMusic(2)}}},[e._v("上传")])],1),e._v(" "),i("div",{staticClass:"speMusicTable"},[i("music-table",{directives:[{name:"permission",rawName:"v-permission",value:"98a4d706-711d-412d-955a-041bca167f80",expression:"'98a4d706-711d-412d-955a-041bca167f80'"}],attrs:{tableData:e.crazyMusic},on:{refresh:e.fetchMusic}})],1)])],1)])},staticRenderFns:[]};var p=i("VU/8")(f,m,!1,function(e){i("k0l/")},"data-v-99b414a2",null);t.default=p.exports},fTq1:function(e,t){},"k0l/":function(e,t){}});
//# sourceMappingURL=32.ecf8461548146c1ed15c.js.map