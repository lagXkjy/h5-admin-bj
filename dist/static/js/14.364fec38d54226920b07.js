webpackJsonp([14],{"81v+":function(e,t){},AcqH:function(e,t){},Phn0:function(e,t){},VOAp:function(e,t){},f0WJ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("fZjL"),s=a.n(i),o=a("Dd8w"),n=a.n(o),l=a("JaHG"),r={props:{tableData:{type:Array,default:function(){return[]}}},computed:{datas:function(){var e=Object(l.b)(this.tableData);return e.forEach(function(e,t){e.goodsNum=e.goodsNum+"种",e.warningNum=e.warningNum+"种",e.restockedStatus=1==e.restockedStatus?"待补货":0==e.restockedStatus?"补货成功":""}),e}},data:function(){return{headStyle:{}}},methods:{handleEdit1:function(e,t){},handleEdit2:function(e,t){},handleEdit3:function(e,t){},handleEdit4:function(e,t){},checkDetail:function(e){this.$router.push({path:"/operation/shops?shopsDetail="+e.storeId})}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"shopsTable"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.datas,"header-cell-style":e.headStyle}},[a("el-table-column",{attrs:{label:"设备ID",prop:"facilityId"}}),e._v(" "),a("el-table-column",{attrs:{label:"所属门店",prop:"storeName"}}),e._v(" "),a("el-table-column",{attrs:{label:"商品",prop:"goodsNum"}}),e._v(" "),a("el-table-column",{attrs:{label:"预警商品",prop:"warningNum"}}),e._v(" "),a("el-table-column",{attrs:{label:"状态",prop:"restockedStatus"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{directives:[{name:"permission",rawName:"v-permission",value:"ea3a71ae-70d2-401f-a0d2-52dc38d5ec1f",expression:"'ea3a71ae-70d2-401f-a0d2-52dc38d5ec1f'"}],on:{click:function(a){e.checkDetail(t.row)}}},[e._v("查看详情")])]}}])})],1)],1)},staticRenderFns:[]};var d=a("VU/8")(r,c,!1,function(e){a("81v+")},"data-v-70530fe6",null).exports,u=a("F+jZ"),p=a("NYxO"),h={props:{tableData:{type:Array,default:function(){return[]}}},computed:{datas:function(){var e=Object(l.b)(this.tableData);return e.forEach(function(e,t){e.priceBuyer=(e.priceBuyer/100).toFixed(2),e.priceSaler=(e.priceSaler/100).toFixed(2),e.goodsType=1==e.goodsType?"饮料":2==e.goodsType?"减肥餐":"其他",e.goodsStatus=1==e.goodsStatus?"待上架":2==e.goodsStatus?"已上架":"其他"}),e}},data:function(){return{api:u.a,headStyle:{},editingItem:{},dialogTitle:"编辑",dialogVisible:!1,goodName:"",goodsStandard:"",priceBuyer:"",priceSaler:"",uploadImgUrl:""}},methods:n()({},Object(p.b)(["storeConfigUploadImg","saveGoodInfo"]),{handleClose:function(e){this.resetEditingData(),e()},cancel:function(){this.dialogTitle="编辑",this.dialogVisible=!1,this.resetEditingData()},createGood:function(){this.dialogTitle="添加",this.dialogVisible=!0},confirm:function(){var e=this;this.dialogVisible=!1;var t=void 0;t="添加"===this.dialogTitle?{goodsName:this.goodName,minPicUrl:this.uploadImgUrl,maxPicUrl:this.uploadImgUrl,goodsStandard:this.goodsStandard,priceBuyer:100*this.priceBuyer,priceSaler:100*this.priceSaler}:{id:this.editingItem.id,goodsName:this.goodName,minPicUrl:this.uploadImgUrl,maxPicUrl:this.uploadImgUrl,goodsStandard:this.goodsStandard,priceBuyer:100*this.priceBuyer,priceSaler:100*this.priceSaler},this.saveGoodInfo(t).then(function(){e.$notify.success("修改商品信息成功"),e.$emit("fetchGoodsData")}).catch(function(){e.$notify.error("修改商品信息失败"),e.$emit("fetchGoodsData")}),this.resetEditingData()},resetEditingData:function(){this.goodName="",this.goodsStandard="",this.priceBuyer="",this.priceSaler="",this.uploadImgUrl=""},editGood:function(e){this.dialogTitle="编辑",this.editingItem=e,this.goodName=e.goodsName,this.goodsStandard=e.goodsStandard,this.uploadImgUrl=e.minPicUrl,this.priceBuyer=e.priceBuyer,this.priceSaler=e.priceSaler,this.dialogVisible=!0},handleRemove:function(e,t){},submitUpload:function(){this.$refs.upload.submit()},handlePreview:function(e){},beforeUploadImg:function(e){var t="image/jpeg"===e.type||"image/png"===e.type,a=e.size/1024/1024<1;return t||this.$notify.error("上传图片只能是 JPG或PNG 格式!"),a||this.$notify.error("上传图片大小不能超过 1MB!"),t&&a},upLoadImg:function(e){this.$notify.warning("图片正在上传, 请耐心等待");var t=this,a="",i=new FileReader;i.readAsDataURL(e.file),i.onloadend=function(){a=this.result;var i=e.file.name.split("."),s=i[i.length-1];t.storeConfigUploadImg({imageBase64:a,type:s}).then(function(e){t.uploadImgUrl=e,t.isLoadingImgSuccess=!0,t.$notify.success("图片加载成功")}).catch(function(e){t.$notify.error("图片加载失败, 请重试"),t.isLoadingImgSuccess=!1})}}})},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"shopsTable"},[a("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogVisible,width:"400px","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"item"},[a("div",{staticClass:"subTitle"},[e._v("名称")]),e._v(" "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"输入名称",clearable:""},model:{value:e.goodName,callback:function(t){e.goodName=t},expression:"goodName"}})],1),e._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"subTitle"},[e._v("规格")]),e._v(" "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"输入规格",clearable:""},model:{value:e.goodsStandard,callback:function(t){e.goodsStandard=t},expression:"goodsStandard"}})],1),e._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"subTitle"},[e._v("进货价")]),e._v(" "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"输入规格",clearable:""},model:{value:e.priceBuyer,callback:function(t){e.priceBuyer=t},expression:"priceBuyer"}})],1),e._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"subTitle"},[e._v("售价")]),e._v(" "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"输入售价",clearable:""},model:{value:e.priceSaler,callback:function(t){e.priceSaler=t},expression:"priceSaler"}})],1),e._v(" "),a("div",{staticClass:"uploadBox item"},[a("div",{staticClass:"subTitle"},[e._v("图片")]),e._v(" "),a("el-upload",{ref:"upload",staticClass:"avatar-uploader",attrs:{action:e.api+"admin/Upload/uploadBase64","on-preview":e.handlePreview,"on-remove":e.handleRemove,"list-type":"picture-card","auto-upload":!0,"http-request":e.upLoadImg,"show-file-list":!1,"before-upload":e.beforeUploadImg}},[e.uploadImgUrl?a("img",{staticClass:"avatar",attrs:{src:e.uploadImgUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon imgborder"})]),e._v(" "),a("div",{staticClass:"uploadTips"},[a("div",[e._v("尺寸: 40X40")]),e._v(" "),a("div",[e._v("支持JPG/PNG格式")]),e._v(" "),a("div",[e._v("大小不超过1M")])])],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.cancel}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确 定")])],1)]),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.datas,"header-cell-style":e.headStyle}},[a("el-table-column",{attrs:{label:"商品ID",prop:"id"}}),e._v(" "),a("el-table-column",{attrs:{label:"图片"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("div",{style:"width: 40px; height: 40px;background-image: url("+e.row.minPicUrl+"); background-size: 100% 100%"})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"商品类型",prop:"goodsType"}}),e._v(" "),a("el-table-column",{attrs:{label:"商品名称",prop:"goodsName"}}),e._v(" "),a("el-table-column",{attrs:{label:"规格",prop:"goodsStandard"}}),e._v(" "),a("el-table-column",{attrs:{label:"入货价(元)",prop:"priceBuyer"}}),e._v(" "),a("el-table-column",{attrs:{label:"售价(元)",prop:"priceSaler"}}),e._v(" "),a("el-table-column",{attrs:{label:"已售数量",prop:"saleNumber"}}),e._v(" "),a("el-table-column",{attrs:{label:"状态",prop:"goodsStatus"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{directives:[{name:"permission",rawName:"v-permission",value:"b0a8721a-e7ca-44ed-9618-d994d0c8b45d",expression:"'b0a8721a-e7ca-44ed-9618-d994d0c8b45d'"}],on:{click:function(a){e.editGood(t.row)}}},[e._v("编辑")])]}}])})],1)],1)},staticRenderFns:[]};var v=a("VU/8")(h,g,!1,function(e){a("AcqH")},"data-v-464bbc40",null).exports,m=a("83G7"),f=a("SyRM"),b={data:function(){return{datas:[],storeId:1,managerInfo:{},storeInfo:{},warningInfo:[],goodsName:"",history:[],currentPage:1,pageSizes:[10,20,30,40],curPageSize:10,curTotal:0,shopsCurrentPage:1,shopsPageSizes:[10,20,30,40],curShopsPageSize:10,curShopsTotal:0,isFetchingShops:!1,actionType:"all",time:[],actionOptions:[{value:"all",label:"全部"},{value:1,label:"补货"},{value:2,label:"换货"}]}},computed:n()({},Object(p.e)({isFetchingShopsDetailData:function(e){return e.shops.isFetchingShopsDetailData}})),watch:{time:function(){this.fetchHistory()},actionType:function(){this.fetchHistory()}},methods:n()({},Object(p.b)(["getShopDetailList"]),{handleSizeChange:function(e){this.curPageSize=e,this.fetchHistory()},handleCurrentChange:function(e){this.currentPage=e,this.fetchHistory()},handleShopsSizeChange:function(e){this.curShopsPageSize=e,this.isFetchingShopsDetailData||this.fetchShopsList()},handleShopsCurrentChange:function(e){this.shopsCurrentPage=e,this.isFetchingShopsDetailData||this.fetchShopsList()},createParams:function(){var e={};return this.time.length>0&&(e.beginTime=this.time[0],e.endTime=this.time[1]),"all"!==this.actionType&&(e.actionType=this.actionType),this.goodsName&&(e.goodsName=this.goodsName),e.page=this.currentPage,e.size=this.curPageSize,e},fetchShopsList:function(){var e=this;this.getShopDetailList({storeId:this.storeId,page:this.shopsCurrentPage,size:this.curShopsPageSize}).then(function(t){e.managerInfo=t.list[0].managerInfo,e.storeInfo=t.list[0].storeInfo,e.warningInfo=t.list[0].warningInfo,t.list.forEach(function(e,t){e.goodsType=1==e.goodsType?"饮料":2==e.goodsType?"减肥餐":"其他",e.goodsStatus=1==e.goodsStatus?"待上架":2==e.goodsStatus?"已上架":"其他",e.minPicUrl=e.goodsInfo.minPicUrl,e.goodId=e.goodsInfo.id,e.goodName=e.goodsInfo.goodsName,e.goodStandard=e.goodsInfo.goodsStandard,e.priceSaler=(e.goodsInfo.priceSaler/100).toFixed(2)}),e.shopsCurrentPage=t.pageNum<1?1:t.pageNum,e.curShopsPageSize=t.pageSize,e.curShopsTotal=t.total,e.datas=t.list}).catch(function(){})},fetchHistory:function(){var e=this;Object(f.c)(this.createParams()).then(function(t){var a=t.data.data;e.currentPage=a.pageNum<1?1:a.pageNum,e.curPageSize=a.pageSize,e.curTotal=a.total;var i=t.data.data.list;i.forEach(function(e,t){e.createTime=moment(e.createTime).format("YYYY-MM-DD HH:mm:ss"),e.actionType=1==e.actionType?"补货":2==e.actionType?"换货":"",e.priceSaler=(e.priceSaler/100).toFixed(2),e.who="店长"}),e.history=i})}}),mounted:function(){var e=this;this.$nextTick(function(){e.storeId=e.$route.query.shopsDetail,e.fetchShopsList(),e.fetchHistory()})}},S={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"shopsDetail"},[a("div",{staticClass:"shopsDetailTitle"},[e._v("售货机商品详情")]),e._v(" "),a("div",{staticClass:"shoreDetail"},[a("div",{staticClass:"storeName item"},[e._v("门店: "+e._s(e.storeInfo.storeName))]),e._v(" "),a("div",{staticClass:"storeAddress item"},[e._v("地址: "+e._s(e.storeInfo.detailedAddress))]),e._v(" "),a("div",{staticClass:"managerName item"},[e._v("店长: "+e._s(e.managerInfo.ownerName))]),e._v(" "),a("div",{staticClass:"managerPhone item"},[e._v("电话: "+e._s(e.managerInfo.ownerPhone))]),e._v(" "),a("div",{staticClass:"warningGoods"},[a("div",[e._v("预警商品:  ")]),e._v(" "),e._l(e.warningInfo,function(t,i){return a("div",{key:i,staticClass:"goods",staticStyle:{"padding-right":"10px",color:"#666666","font-size":"14px"}},[e._v("\n        槽位["+e._s(t.slotNo)+"]-"+e._s(t.goodsName)+"\n      ")])}),e._v(" "),a("div",[e._v("共"+e._s(e.warningInfo.length)+"种商品")])],2)]),e._v(" "),a("div",{staticClass:"shopsTitle"},[e._v("售货机商品列表")]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.isFetchingShopsDetailData,expression:"isFetchingShopsDetailData"}],staticStyle:{width:"100%"},attrs:{data:e.datas}},[a("el-table-column",{attrs:{label:"位置",prop:"slotNo"}}),e._v(" "),a("el-table-column",{attrs:{label:"图片"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("div",{style:"width: 40px; height: 40px;background-image: url("+e.row.minPicUrl+"); background-size: 100% 100%"})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"商品ID",prop:"goodId"}}),e._v(" "),a("el-table-column",{attrs:{label:"商品",prop:"goodName"}}),e._v(" "),a("el-table-column",{attrs:{label:"规格",prop:"goodStandard"}}),e._v(" "),a("el-table-column",{attrs:{label:"价格",prop:"priceSaler"}}),e._v(" "),a("el-table-column",{attrs:{label:"数量",prop:"goodsSurplus"}}),e._v(" "),a("el-table-column",{attrs:{label:"预警值",prop:"warnNum"}})],1),e._v(" "),a("div",{staticClass:"paginationBox"},[a("el-pagination",{attrs:{"current-page":e.shopsCurrentPage,"page-sizes":e.shopsPageSizes,"page-size":e.curShopsPageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.curShopsTotal},on:{"size-change":e.handleShopsSizeChange,"current-change":e.handleShopsCurrentChange}})],1),e._v(" "),a("div",{staticClass:"shopsTitle"},[e._v("操作记录")]),e._v(" "),a("div",{staticClass:"selects"},[a("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"请选择"},model:{value:e.actionType,callback:function(t){e.actionType=t},expression:"actionType"}},e._l(e.actionOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("div",{staticClass:"timeSelect",staticStyle:{"margin-left":"10px","margin-right":"20px"}},[a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1),e._v(" "),a("el-input",{staticStyle:{width:"250px"},attrs:{placeholder:"输入商品名称,按回车搜索","suffix-icon":"el-icon-search"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.fetchHistory(t)}},model:{value:e.goodsName,callback:function(t){e.goodsName=t},expression:"goodsName"}})],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.history}},[a("el-table-column",{attrs:{label:"日期",prop:"createTime"}}),e._v(" "),a("el-table-column",{attrs:{label:"位置",prop:"slotNo"}}),e._v(" "),a("el-table-column",{attrs:{label:"商品ID",prop:"goodsId"}}),e._v(" "),a("el-table-column",{attrs:{label:"商品",prop:"goodsName"}}),e._v(" "),a("el-table-column",{attrs:{label:"规格",prop:"goodsStandard"}}),e._v(" "),a("el-table-column",{attrs:{label:"售价",prop:"priceSaler"}}),e._v(" "),a("el-table-column",{attrs:{label:"类型",prop:"actionType"}}),e._v(" "),a("el-table-column",{attrs:{label:"补货数量",prop:"actionNumber"}}),e._v(" "),a("el-table-column",{attrs:{label:"经手",prop:"who"}})],1),e._v(" "),a("div",{staticClass:"paginationBox"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.curPageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.curTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var _=a("VU/8")(b,S,!1,function(e){a("VOAp")},"data-v-121b4e5c",null).exports,y={props:{subPageType:{type:String,default:""}},components:{SubPage:m.a,ShopsDetail:_},methods:{routeCallback:function(){this.$router.push({path:"/operation/shops"})}},data:function(){return{mapSubPageTitle:{shopsDetail:{mainTitle:"售货机商品管理",subTitle:"售货机商品详情"}}}}},C={render:function(){var e=this.$createElement,t=this._self._c||e;return t("sub-page",{attrs:{mainTitle:"售货机商品管理",subTitle:"售货机商品详情",routeCallback:this.routeCallback}},["shopsDetail"===this.subPageType?t("shops-detail"):this._e()],1)},staticRenderFns:[]};var P={components:{ShopsTable:d,GoodsTable:v,ShopsSubPage:a("VU/8")(y,C,!1,function(e){a("vBlK")},"data-v-26143d0c",null).exports},computed:n()({},Object(p.e)({shopsList:function(e){return e.shops.shopsList},goodsList:function(e){return e.shops.goodsList},isFetchingData1:function(e){return e.shops.isFetchingData1},pageSize1:function(e){return e.shops.pageSize1},pageNum1:function(e){return e.shops.pageNum1},total1:function(e){return e.shops.total1},isFetchingData2:function(e){return e.shops.isFetchingData2},pageSize2:function(e){return e.shops.pageSize2},pageNum2:function(e){return e.shops.pageNum2},total2:function(e){return e.shops.total2}}),{routeQuery:function(){return s()(this.$route.query)[0]},isLoadSubPage:function(){return!s()(this.$route.query)[0]}}),data:function(){return{time:"",currentPage1:1,currentPage2:1,pageSizes2:[10,20,30,40],curPageSize2:10,curTotal2:0,deviceStatus:"已绑设备",input:"",storeName:"",status:"售货机",vendingOptions:[{value:"all",label:"全部类型"},{value:"1",label:"待补货"},{value:"2",label:"补货成功"}],value:"all",dialogVisible:!1,dialogTitle:"添加",goodName:"",goodsStandard:"",priceBuyer:"",priceSaler:""}},watch:{value:function(e){this.fetchData1()},input:function(e){this.fetchData2()}},methods:n()({},Object(p.b)(["getShopsList","getGoodsList"]),{confirm:function(){this.dialogVisible=!1},mapPagination1:function(){this.currentPage1=this.pageNum1,this.curTotal1=this.total1,this.curPageSize1=this.pageSize1},mapPagination2:function(){this.currentPage2=this.pageNum2,this.curTotal2=this.total2,this.curPageSize2=this.pageSize2},handleSizeChange1:function(e){},handleCurrentChange1:function(e){},handleSizeChange2:function(e){var t=this;this.curPageSize2=e,this.getGoodsList(this.creatGoodsParams()).then(function(){t.mapPagination2()})},handleCurrentChange2:function(e){var t=this;this.currentPage2=e,this.getGoodsList(this.creatGoodsParams()).then(function(){t.mapPagination2()})},createShopsParams:function(){var e={};return"all"!==this.value&&(e.restockedStatus=this.value),this.input1&&(e.storeName=this.input1),e},creatGoodsParams:function(){var e={};return e.page=this.currentPage2,e.size=this.curPageSize2,this.input&&(e.goodsName=this.input),e},fetchData1:function(){this.getShopsList(this.createShopsParams())},fetchData2:function(){var e=this;this.getGoodsList(this.creatGoodsParams()).then(function(){e.mapPagination2()})},createGood:function(){this.$refs.goodsTable.createGood()},handleClose:function(e){e()}}),beforeRouteEnter:function(e,t,a){a(function(e){e.$nextTick(function(){e.fetchData1(),e.fetchData2()})})},mounted:function(){var e=this;this.$nextTick(function(){e.fetchData1(),e.fetchData2()})}},N={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isLoadSubPage?a("div",{staticClass:"protalPage"},[a("div",{staticClass:"shopsPage"},[a("div",{staticClass:"title"},[e._v("\n      售货机商品管理\n    ")]),e._v(" "),a("div",{staticClass:"radioSelect"},[a("el-radio-group",{model:{value:e.status,callback:function(t){e.status=t},expression:"status"}},[a("el-radio-button",{directives:[{name:"permission",rawName:"v-permission",value:"bedb7439-ba7e-42d8-926d-b754f089503d",expression:"'bedb7439-ba7e-42d8-926d-b754f089503d'"}],attrs:{label:"售货机"}}),e._v(" "),a("el-radio-button",{directives:[{name:"permission",rawName:"v-permission",value:"e616c758-500c-42e1-88d5-5efd93b13932",expression:"'e616c758-500c-42e1-88d5-5efd93b13932'"}],attrs:{label:"商品库"}})],1)],1),e._v(" "),"售货机"===e.status?a("div",{staticClass:"vending"},[a("div",{staticClass:"selects"},[a("div",{staticClass:"selectTitle"},[e._v("状态 ")]),e._v(" "),a("div",{staticClass:"statusSelect"},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.vendingOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("div",{staticClass:"searchBar"},[a("el-input",{attrs:{placeholder:"输入门店名称, 回车搜索 "},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.fetchData1(t)}},model:{value:e.storeName,callback:function(t){e.storeName=t},expression:"storeName"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})])],1)]),e._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.isFetchingData1,expression:"isFetchingData1"}],staticClass:"messageTableBox"},[a("shops-table",{directives:[{name:"permission",rawName:"v-permission",value:"3bda1e7d-47c0-41b6-afc8-36afb64036e5",expression:"'3bda1e7d-47c0-41b6-afc8-36afb64036e5'"}],attrs:{tableData:e.shopsList}})],1)]):e._e(),e._v(" "),"商品库"===e.status?a("div",{staticClass:"shops"},[a("div",{staticClass:"selects"},[a("div",{staticClass:"searchBar"},[a("el-input",{attrs:{placeholder:"输入商品名称"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})])],1),e._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"76fa1cd0-30ca-4077-bf9d-b5f5c5597382",expression:"'76fa1cd0-30ca-4077-bf9d-b5f5c5597382'"}],nativeOn:{click:function(t){e.createGood(t)}}},[e._v("新增商品")])],1),e._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.isFetchingData2,expression:"isFetchingData2"}],staticClass:"goodsTableBox"},[a("goods-table",{directives:[{name:"permission",rawName:"v-permission",value:"eddb104f-b63b-41a7-88ad-43142415678a",expression:"'eddb104f-b63b-41a7-88ad-43142415678a'"}],ref:"goodsTable",attrs:{tableData:e.goodsList},on:{fetchGoodsData:e.fetchData2}}),e._v(" "),a("div",{staticClass:"paginationBox"},[a("el-pagination",{attrs:{"current-page":e.currentPage2,"page-sizes":e.pageSizes2,"page-size":e.curPageSize2,layout:"total, sizes, prev, pager, next, jumper",total:e.curTotal2},on:{"size-change":e.handleSizeChange2,"current-change":e.handleCurrentChange2}})],1)],1)]):e._e()])]):a("shops-sub-page",{attrs:{subPageType:e.routeQuery}})},staticRenderFns:[]};var T=a("VU/8")(P,N,!1,function(e){a("Phn0")},"data-v-d4fede9e",null);t.default=T.exports},vBlK:function(e,t){}});
//# sourceMappingURL=14.364fec38d54226920b07.js.map