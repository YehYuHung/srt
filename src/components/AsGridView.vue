<template>
    <div>
        <div>
            <h3>{{title}}</h3>
            <button v-on:click="check">新增本月</button>
        </div>
        <div>
            <!--
                * pagination 分頁
                * paginationAutoPageSize 固定頁面長度改用分頁
                * rowData 資料源
                * columnDefs 標頭資料源
                * defaultColDef 預設定義
                * grid-ready grid準備完成後api倒入資料地方
            -->
            <ag-grid-vue style="width: 100%; height: 400px"
                         class="ag-theme-alpine"
                         :columnDefs="columnDefs"
                         :pagination="true"
                         :paginationAutoPageSize="true"
                         :rowSelection="rowSelection"
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

    export default {
        name: "AsGridView",
        data() {
            return {
                columnDefs: null,
                rowData: null,
                title: "AsGridView",
                defaultColDef: {
                    // set the default column width
                    width: 300,
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
        },
        components: {
            AgGridVue,
        },
        beforeMount() {
            this.columnDefs = [
                {
                    // real columns name from back-end data
                    field: "make",
                    // show User-defined tags for Viewing
                    headerName: "Cars",
                    // select single row data
                    checkboxSelection: true,
                    // select all row datas with pagination data
                    headerCheckboxSelection: true,
                },
                { field: "model" },
                {
                    field: "price",
                    colSpan: (params) => {
                        const price = params.data.price;
                        if (price > 0) {
                            // have all Russia age columns width 2
                            return 2;
                        } else if ( price< 0 ){
                            // all other rows should be just normal
                            return 1;
                        } else {
                            return 0;
                        }
                    },
                },
            ];

            this.rowData = [
                { make: "Toyota", model: "Celica", price: -39482 },
                { make: "Ford", model: "Mondeo", price: 32000 },
                { make: "Porsche", model: "Boxster", price: 72000 },
                { make: "Toyota1", model: "Celica", price: 0 },
                { make: "Ford1", model: "Mondeo", price: 32000 },
                { make: "Porsche1", model: "Boxster", price: 72000 },
                { make: "Toyota2", model: "Celica", price: -324 },
                { make: "Ford2", model: "Mondeo", price: 32000 },
                { make: "Porsche2", model: "Boxster", price: 72000 },
                { make: "Toyota3", model: "Celica", price: 35000 },
                { make: "Ford3", model: "Mondeo", price: 32000 },
                { make: "Porsche3", model: "Boxster", price: 72000 },
            ];
        },
    };
</script>

<style scoped>
    h3 {
        color: red,
    }
    .ag-body-viewport [col-id='price'] {
        background-color: #a6e1ec;
    }
</style>

