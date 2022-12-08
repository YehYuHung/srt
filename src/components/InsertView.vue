<template>
    <div>
        <h1>My Todo List</h1>

        <div class="float-right">
            <button class="btn btn-info" id="btnAdd" v-on:click="AddRow">新增</button>
        </div>

        <form>
            <table class="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <td>{{merchandiseTitle}}</td>
                        <td>{{dataSourceTitle}}</td>
                        <td>{{costTitle}}</td>
                        <td>{{quantityTitle}}</td>
                        <td>{{totalCostTitle}}</td>
                        <td>{{salesTitle}}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in items" :key="item.v_id">
                        <!--後端使用v_id資料識別資料-->
                        <td>
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
                            <input type="text" class="form-control" name="cost" @input="numberOnly" maxlength="20" placeholder="請輸入金額" v-model.number.trim="item.cost" />
                        </td>
                        <td>
                            <input type="text" class="form-control" name="quantity" @input="numberOnly" maxlength="20" placeholder="請輸入金額" v-model.number.trim="item.quantity" />
                        </td>
                        <td style="vertical-align:middle;">
                            <label name="totalCost">{{ComputeTotalCount(item)}}</label>
                        </td>
                        <td>
                            <input type="text" class="form-control" name="sales" @input="numberOnly" maxlength="20" placeholder="請輸入金額" v-model.number.trim="item.sales" />
                        </td>
                        <td>
                            <button class="btn btn-danger" v-on:click="DeleteRow(item,index)" type="button">刪除</button>
                        </td>
                    </tr>
                    <tr v-if="items.length === 0">
                        <td colspan="99">請新增列表</td>
                    </tr>
                </tbody>
            </table>
        </form>

        <div class="float-right">
            <!--資料都存放在JS裡了，所以使用Ajax送出資料，不仰賴表單提交，因為表單提交動作和畫面的輸入欄位有很大藕合性，但Vue.js就是要讓開發者不用去管畫面的處理-->
            <button class="btn btn-primary float-right" id="btnSubmit" type="button" v-on:click="AjaxSubmit">Ajax儲存</button>
        </div>
        <div v-html="showResult"></div>
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
                merchandiseTitle: this.$Constant.merchandise,
                dataSourceTitle: this.$Constant.dataSource,
                costTitle: this.$Constant.cost,
                quantityTitle: this.$Constant.quantity,
                totalCostTitle: this.$Constant.totalCost,
                salesTitle: this.$Constant.sales,
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
                this.items.push({ v_id: v_id, merchandise: "", dataSource: "shopee", cost: 0, quantity: 0, totalCost: 0, sales: "" });//新增資料到陣列就好，不必組html字串
            },
            DeleteRow: function (item, index) {
                //從集合中刪除物件
                this.items.splice(index, 1);//刪除資料，畫面會跟著變動
            },
            numberOnly: function (e) {
                e.target.value = e.target.value.replace(/[^\d]/g, '');
            },
            ComputeTotalCount: function (item) {
                if (typeof (item.cost) != "number" || typeof (item.quantity) != "number")
                    return item.totalCost = 0;
                return item.totalCost = item.cost * item.quantity;
            },
            AjaxSubmit: function () {
                this.showResult = JSON.stringify(this.items);//序列化JSON字串
            }
        }
    }
</script>

<style scoped>
    /*
    .order-table {
        width: 80%;
        border: 1px solid black;
        margin-left: auto;
        margin-right: auto;
    }*/

    div.float-right {
        float: right;
    }

    div {
        margin: 5px 0px;
    }
</style>