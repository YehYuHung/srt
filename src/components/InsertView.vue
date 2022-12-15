<template>
    <div>
        <h1>My Todo List</h1>

        <div class="row">
            <div class="float-right">
                <button class="btn btn-info" id="btnAdd" v-on:click="AddRow">新增</button>
            </div>
        </div>

        <div class="row custom-table-width">
            <form id="reportForm">
                <table id="InsertTable" class="table table-striped table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th scope="col" v-for="(title) in titles" :key="title.index" class="text-nowrap">{{title.val}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in items" :key="item.v_id">
                            <!--後端使用v_id資料識別資料-->
                            <td scope="row">
                                <select class="form-control" name="merchandise" v-model="item.merchandise">
                                    <optgroup v-for="(group,groupName) in merchandiseGroupDdl" :key="group.index" :label="groupName">
                                        <option v-for="option in group" :key="option.index" :value="option.val">{{option.item}}</option>
                                    </optgroup>
                                </select>
                            </td>
                            <td>
                                <select class="form-control" name="dataSource" v-model="item.dataSource">
                                    <option v-for="dataSourceItem in dataSourceDdl" :key="dataSourceItem.index" :value="dataSourceItem.val">{{dataSourceItem.item}}</option>
                                </select>
                            </td>
                            <td>
                                <!--
             監聽並修改畫面資料，但由於 v-model 為雙向綁定，輸入非數字時畫面呈現無
             但實際上已經被綁訂在 v-model 身上，因此採用 v-model.lazy 等待輸入完
             再將其資料綁定回 v-model身上
        -->
                                <input type="text" class="form-control" name="cost" maxlength="20" placeholder="請輸入金額" v-model.lazy.number.trim="item.cost" v-number-input />
                            </td>
                            <td>
                                <input type="text" class="form-control" name="quantity" maxlength="20" placeholder="請輸入金額" v-model.lazy.number.trim="item.quantity" v-number-input />
                            </td>
                            <td style="vertical-align:middle;">
                                <label name="totalCost">{{ComputeTotalCount(item)}}</label>
                            </td>
                            <td>
                                <input type="text" class="form-control" name="sales" maxlength="20" placeholder="請輸入金額" v-model.lazy.number.trim="item.sales" v-number-input />
                            </td>
                            <td style="vertical-align:middle;">
                                <label name="profit">{{ComputeProfit(item)}}</label>
                            </td>
                            <td>
                                <button class="btn btn-danger" v-on:click="DeleteRow(item,index)" type="button">刪除</button>
                            </td>
                        </tr>
                        <tr v-if="items.length === 0">
                            <td v-bind:colspan="titles.length">請新增列表</td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>

        <div class="row">
            <div class="float-right">
                <!--資料都存放在JS裡了，所以使用Ajax送出資料，不仰賴表單提交，因為表單提交動作和畫面的輸入欄位有很大藕合性，但Vue.js就是要讓開發者不用去管畫面的處理-->
                <button class="btn btn-primary float-right" id="btnSubmit" type="button" v-on:click="AjaxSubmit">Ajax儲存</button>
            </div>
            <div v-html="showResult"></div>
        </div>
    </div>
</template>

<script>
    let items = [];

    let dataSourceDdl = [
        { val: "shopee", item: '蝦皮' },
        { val: "facebook", item: 'Facebook' },
        { val: "Other", item: '其他' },
    ];

    let merchandiseGroupDdl = {
        "束帶": [
            { val: "bun0001", item: "束帶工具" },
            { val: "bun0002", item: "4.6x300mm" },
            { val: "bun0003", item: "4.6x400mm" },
            { val: "bun0004", item: "4.6x500mm" },
            { val: "bun0005", item: "4.6x200mm" },
            { val: "bun0006", item: "4.6x600mm" },
        ],
        "手套": [
            { val: "glo0001", item: "火龍果小ng一組" },
            { val: "glo0002", item: "小ng" },
        ]
    }

    export default {
        name: "InsertView",
        data() {
            return {
                titles: [
                    { text: "merchandiseTitle", val: this.$Constant.merchandise },
                    { text: "dataSourceTitle", val: this.$Constant.dataSource },
                    { text: "costTitle", val: this.$Constant.cost },
                    { text: "quantityTitle", val: this.$Constant.quantity },
                    { text: "totalCostTitle", val: this.$Constant.totalCost },
                    { text: "salesTitle", val: this.$Constant.sales },
                    { text: "profitTitle", val: this.$Constant.profit }
                ],
                items: items,
                originalItems: items,
                dataSourceDdl: dataSourceDdl,
                merchandiseGroupDdl: merchandiseGroupDdl,
                showResult: "", // 顯示資料
            }
        },
        props: {

        },
        methods: {
            AddRow: function () {
                let v_id = Date.now();//產生一個畫面用的不重複id
                this.items.push({ v_id: v_id, merchandise: "", dataSource: "shopee", cost: 0, quantity: 0, totalCost: 0, sales: 0, profit: 0 });//新增資料到陣列就好，不必組html字串
            },
            DeleteRow: function (item, index) {
                //從集合中刪除物件
                this.items.splice(index, 1);//刪除資料，畫面會跟著變動
            },
            // 成本
            ComputeTotalCount: function (item) {
                if (typeof (item.cost) != "number" || typeof (item.quantity) != "number")
                    return item.totalCost = 0;
                return item.totalCost = item.cost * item.quantity;
            },
            // 利潤
            ComputeProfit: function (item) {
                if (typeof (item.cost) != "number" || typeof (item.quantity) != "number" || typeof (item.sales) != "number")
                    return item.profit = 0;
                return item.profit = (item.cost * item.quantity) - item.sales;
            },
            AjaxSubmit: function () {
                this.showResult = JSON.stringify(this.items);//序列化JSON字串
            }
        }
    }
</script>

<style scoped>

    div.float-right {
        float: right;
    }

    div {
        margin: 5px 0px;
    }

    .custom-table-width {
        overflow-x: auto;
        border: 1px solid black;
    }

    #InsertTable thead tr th {
        width: 190px;
    }

    #InsertTable {
        min-width: 1440px;
        width: 100%;
    }
/*
    @media (max-width: 767px) {

        .custom-table-width {
            overflow-x: auto;
        }

        #InsertTable thead tr th{
            width: 190px;
        }

        #InsertTable {
            min-width: 1440px;
            width: 100%;
        }
    }*/
</style>