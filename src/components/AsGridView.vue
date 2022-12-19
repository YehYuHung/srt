<template>
    <div>
        <div>
            <h3>{{title}}</h3>
            <button v-on:click="check">新增本月</button>
        </div>
        <div>
            <button @click="getSelectedRows()">Get Selected Rows</button>
            <!--
                * pagination 分頁
                * paginationAutoPageSize 固定頁面長度改用分頁
                * rowData 資料源
                * columnDefs 標頭資料源
                * defaultColDef 預設定義
                * gridOptions 獲得 As Grid 表格資訊
                * grid-ready grid準備完成後api倒入資料地方
            -->
            <ag-grid-vue style="width: 100%; height: 400px"
                         class="ag-theme-alpine"
                         :columnDefs="columnDefs"
                         :gridOptions="gridOptions"
                         :pagination="true"
                         :paginationAutoPageSize="true"
                         :rowData="rowData"
                         :defaultColDef="defaultColDef"
                         :grid-ready="onGridReady">
            </ag-grid-vue>
        </div>
    </div>
</template>

<script>
    import "ag-grid-community/styles/ag-grid.css";
    import "ag-grid-community/styles/ag-theme-alpine.css";
    import { AgGridVue } from "ag-grid-vue";

    var wordStyle = { color: 'red', font: '18px' }

    export default {
        name: "AsGridView",
        data() {
            return {
                columnDefs: null,
                rowData: null,
                title: "AsGridView",
                defaultColDef: {
                    // set the default column width
                    width: 200,
                    // make every column use 'text' filter by default
                    filter: 'agTextColumnFilter',
                    // enable floating filters by default
                    //floatingFilter: true,
                    // make columns resizable
                    resizable: true,
                    // sort columns value ASC/DESC
                    sortable: true,
                },
                rowSelection: null,
                gridApi: null,
                gridColumnApi: null,
                columnApi: null
            };
        },
        methods: {
            check() {
                alert("yoloshiku");
            },
            onGridReady(params) {
                this.gridApi = params.api;
                this.gridColumnApi = params.columnApi;
            },
            fillLarge() {
                this.setWidthAndHeight('100%', '100%');
            },
            fillMedium() {
                this.setWidthAndHeight('60%', '60%');
            },
            fillExact() {
                this.setWidthAndHeight('400px', '400px');
            },
            setWidthAndHeight(width, height) {
                this.width = width;
                this.height = height;
            },
            getSelectedRows() {
                // 獲得grid各節點資訊
                const selectedNodes = this.gridApi.getSelectedNodes();
                if (selectedNodes) {
                    const selectedData = selectedNodes.map(node => node.data);
                    alert(JSON.stringify(selectedData));
                }
            },
        },
        components: {
            AgGridVue,
        },
        beforeMount() {
            // remember declare element for grabbing table datas
            this.gridOptions = {};
            this.columnDefs = [
                { field: "storeId", headerName: this.$Constant.storeId, hide: true, },
                {
                    // real columns name from back-end data
                    field: "merchandise",
                    // show User-defined tags for Viewing
                    headerName: this.$Constant.merchandise,
                    // select single row data
                    checkboxSelection: true,
                    // select all row datas with pagination data
                    headerCheckboxSelection: true,
                },
                { field: "dataSource", headerName: this.$Constant.dataSource },
                { field: "cost", headerName: this.$Constant.Cost },
                { field: "quantity", headerName: this.$Constant.quantity },
                { field: "totalCost", headerName: this.$Constant.totalCost },
                { field: "sales", headerName: this.$Constant.sales },
                {
                    field: "profit", headerName: this.$Constant.profit,
                    cellStyle: function (params) {
                        if (params.value < 0) {
                            return wordStyle;
                        }
                    }
                },
            ];

            this.rowData = [
                { storeId: Date.now(), merchandise: "4.6x300mm", dataSource: "facebook", cost: 100, quantity: 7, totalCost: 700, sales: 1050, profit: 350 },
                { storeId: Date.now(), merchandise: "4.6x400mm", dataSource: "蝦皮", cost: 105, quantity: 1, totalCost: 105, sales: 130, profit: 25 },
                { storeId: Date.now(), merchandise: "4.6x500mm", dataSource: "蝦皮", cost: 119, quantity: 3, totalCost: 357, sales: 450, profit: 93 },
                { storeId: Date.now(), merchandise: "4.6x200mm", dataSource: "facebook", cost: 139, quantity: 2, totalCost: 278, sales: 300, profit: 22 },
                { storeId: Date.now(), merchandise: "4.6x600mm", dataSource: "蝦皮", cost: 50, quantity: 10, totalCost: 500, sales: 400, profit: -100 },
                { storeId: Date.now(), merchandise: "束帶工具", dataSource: "蝦皮", cost: 100, quantity: 7, totalCost: 700, sales: 1050, profit: 350 },
                { storeId: Date.now(), merchandise: "束帶工具", dataSource: "facebook", cost: 50, quantity: 10, totalCost: 500, sales: 1200, profit: 700 },
                { storeId: Date.now(), merchandise: "4.6x600mm", dataSource: "facebook", cost: 119, quantity: 3, totalCost: 357, sales: 450, profit: 93 },
                { storeId: Date.now(), merchandise: "火龍果小ng一組", dataSource: "facebook", cost: 50, quantity: 10, totalCost: 500, sales: 1200, profit: 700 },
                { storeId: Date.now(), merchandise: "4.6x300mm", dataSource: "蝦皮", cost: 100, quantity: 8, totalCost: 800, sales: 500, profit: -300 },
                { storeId: Date.now(), merchandise: "火龍果小ng一組", dataSource: "蝦皮", cost: 50, quantity: 11, totalCost: 550, sales: 1200, profit: 650 },
                { storeId: Date.now(), merchandise: "4.6x400mm", dataSource: "facebook", cost: 50, quantity: 10, totalCost: 500, sales: 1200, profit: 700 },
            ];
        },
        // 綁定 gridApi 以及 gridColumnApi 資訊
        mounted() {
            this.gridApi = this.gridOptions.api;
            this.gridColumnApi = this.gridOptions.columnApi;
        },
    };
</script>

<style scoped>
    h3 {
        color: red,
    }
</style>

