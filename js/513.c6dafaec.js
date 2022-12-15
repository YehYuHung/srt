"use strict";(self["webpackChunksrt"]=self["webpackChunksrt"]||[]).push([[513],{7513:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var n=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("My Todo List")]),e("div",{staticClass:"row"},[e("div",{staticClass:"float-right"},[e("button",{staticClass:"btn btn-info",attrs:{id:"btnAdd"},on:{click:t.AddRow}},[t._v("新增")])])]),e("div",{staticClass:"row custom-table-width"},[e("form",{attrs:{id:"reportForm"}},[e("table",{staticClass:"table table-striped table-bordered table-hover table-striped",attrs:{id:"InsertTable"}},[e("thead",[e("tr",t._l(t.titles,(function(a){return e("th",{key:a.index,staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v(t._s(a.val))])})),0)]),e("tbody",[t._l(t.items,(function(a,n){return e("tr",{key:a.v_id},[e("td",{attrs:{scope:"row"}},[e("select",{directives:[{name:"model",rawName:"v-model",value:a.merchandise,expression:"item.merchandise"}],staticClass:"form-control",attrs:{name:"merchandise"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(a,"merchandise",e.target.multiple?n:n[0])}}},t._l(t.merchandiseGroupDdl,(function(a,n){return e("optgroup",{key:a.index,attrs:{label:n}},t._l(a,(function(a){return e("option",{key:a.index,domProps:{value:a.val}},[t._v(t._s(a.item))])})),0)})),0)]),e("td",[e("select",{directives:[{name:"model",rawName:"v-model",value:a.dataSource,expression:"item.dataSource"}],staticClass:"form-control",attrs:{name:"dataSource"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(a,"dataSource",e.target.multiple?n:n[0])}}},t._l(t.dataSourceDdl,(function(a){return e("option",{key:a.index,domProps:{value:a.val}},[t._v(t._s(a.item))])})),0)]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model.lazy.number.trim",value:a.cost,expression:"item.cost",modifiers:{lazy:!0,number:!0,trim:!0}},{name:"number-input",rawName:"v-number-input"}],staticClass:"form-control",attrs:{type:"text",name:"cost",maxlength:"20",placeholder:"請輸入金額"},domProps:{value:a.cost},on:{change:function(e){t.$set(a,"cost",t._n(e.target.value.trim()))},blur:function(e){return t.$forceUpdate()}}})]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model.lazy.number.trim",value:a.quantity,expression:"item.quantity",modifiers:{lazy:!0,number:!0,trim:!0}},{name:"number-input",rawName:"v-number-input"}],staticClass:"form-control",attrs:{type:"text",name:"quantity",maxlength:"20",placeholder:"請輸入金額"},domProps:{value:a.quantity},on:{change:function(e){t.$set(a,"quantity",t._n(e.target.value.trim()))},blur:function(e){return t.$forceUpdate()}}})]),e("td",{staticStyle:{"vertical-align":"middle"}},[e("label",{attrs:{name:"totalCost"}},[t._v(t._s(t.ComputeTotalCount(a)))])]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model.lazy.number.trim",value:a.sales,expression:"item.sales",modifiers:{lazy:!0,number:!0,trim:!0}},{name:"number-input",rawName:"v-number-input"}],staticClass:"form-control",attrs:{type:"text",name:"sales",maxlength:"20",placeholder:"請輸入金額"},domProps:{value:a.sales},on:{change:function(e){t.$set(a,"sales",t._n(e.target.value.trim()))},blur:function(e){return t.$forceUpdate()}}})]),e("td",{staticStyle:{"vertical-align":"middle"}},[e("label",{attrs:{name:"profit"}},[t._v(t._s(t.ComputeProfit(a)))])]),e("td",[e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.DeleteRow(a,n)}}},[t._v("刪除")])])])})),0===t.items.length?e("tr",[e("td",{attrs:{colspan:t.titles.length}},[t._v("請新增列表")])]):t._e()],2)])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"float-right"},[e("button",{staticClass:"btn btn-primary float-right",attrs:{id:"btnSubmit",type:"button"},on:{click:t.AjaxSubmit}},[t._v("Ajax儲存")])]),e("div",{domProps:{innerHTML:t._s(t.showResult)}})])])},i=[];a(7658);let r=[],s=[{val:"shopee",item:"蝦皮"},{val:"facebook",item:"Facebook"},{val:"Other",item:"其他"}],o={"束帶":[{val:"bun0001",item:"束帶工具"},{val:"bun0002",item:"4.6x300mm"},{val:"bun0003",item:"4.6x400mm"},{val:"bun0004",item:"4.6x500mm"},{val:"bun0005",item:"4.6x200mm"},{val:"bun0006",item:"4.6x600mm"}],"手套":[{val:"glo0001",item:"火龍果小ng一組"},{val:"glo0002",item:"小ng"}]};var l={name:"InsertView",data(){return{titles:[{text:"merchandiseTitle",val:this.$Constant.merchandise},{text:"dataSourceTitle",val:this.$Constant.dataSource},{text:"costTitle",val:this.$Constant.cost},{text:"quantityTitle",val:this.$Constant.quantity},{text:"totalCostTitle",val:this.$Constant.totalCost},{text:"salesTitle",val:this.$Constant.sales},{text:"profitTitle",val:this.$Constant.profit}],items:r,originalItems:r,dataSourceDdl:s,merchandiseGroupDdl:o,showResult:""}},props:{},methods:{AddRow:function(){let t=Date.now();this.items.push({v_id:t,merchandise:"",dataSource:"shopee",cost:0,quantity:0,totalCost:0,sales:0,profit:0})},DeleteRow:function(t,e){this.items.splice(e,1)},ComputeTotalCount:function(t){return"number"!=typeof t.cost||"number"!=typeof t.quantity?t.totalCost=0:t.totalCost=t.cost*t.quantity},ComputeProfit:function(t){return"number"!=typeof t.cost||"number"!=typeof t.quantity||"number"!=typeof t.sales?t.profit=0:t.profit=t.cost*t.quantity-t.sales},AjaxSubmit:function(){this.showResult=JSON.stringify(this.items)}}},u=l,m=a(1001),c=(0,m.Z)(u,n,i,!1,null,"45d69ece",null),d=c.exports}}]);
//# sourceMappingURL=513.c6dafaec.js.map