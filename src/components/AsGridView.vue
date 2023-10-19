<template>
  <div>
    <div>
      <h1>{{ title }}</h1>
    </div>
    <div>
      <div class="row">
        <div class="float-right">
          <button class="btn btn-info" id="addBtn" v-on:click="addData">
            新增資料
          </button>
          <button
            class="btn btn-info"
            id="editBtn"
            v-on:click="editSelectedDatas"
          >
            修改
          </button>
        </div>
      </div>
      <!--
                * pagination 分頁
                * paginationAutoPageSize 固定頁面長度改用分頁
                * rowData 資料源
                * columnDefs 標頭資料源
                * defaultColDef 預設定義
                * gridOptions 獲得 As Grid 表格資訊
                * grid-ready grid準備完成後api倒入資料地方
            -->
      <ag-grid-vue
        style="width: 100%; height: 400px"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :gridOptions="gridOptions"
        :pagination="true"
        :paginationAutoPageSize="true"
        :rowData="rowData"
        :defaultColDef="defaultColDef"
        :grid-ready="onGridReady"
      >
      </ag-grid-vue>
    </div>
  </div>
</template>

<script>
import merchandise from "@/mock/data/merchandise.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
// import { AgGridVue } from "ag-grid-vue" for Vue2
import { AgGridVue } from "ag-grid-vue3";

var wordStyle = { color: "red", font: "18px" };

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
        filter: "agTextColumnFilter",
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
      columnApi: null,
    };
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
    },
    fillLarge() {
      this.setWidthAndHeight("100%", "100%");
    },
    fillMedium() {
      this.setWidthAndHeight("60%", "60%");
    },
    fillExact() {
      this.setWidthAndHeight("400px", "400px");
    },
    setWidthAndHeight(width, height) {
      this.width = width;
      this.height = height;
    },
    editSelectedDatas() {
      // 獲得grid各節點資訊
      if (this.gridApi) {
        const selectedData = this.gridApi
          .getSelectedNodes()
          .map((node) => node.data);
        if (selectedData.length > 0) {
          //alert(JSON.stringify(selectedData.map(e => e.storeId)));
          this.$router.push({
            name: "passing",
            query: { Item: selectedData.map((e) => e.storeId) },
          });
        } else {
          alert("請選擇其中一件商品");
        }
      }
    },
    addData() {
      this.$router.push({ name: "insert" });
    },
  },
  components: {
    AgGridVue,
  },
  beforeMount() {
    // remember declare element for grabbing table datas
    this.gridOptions = {};
    this.columnDefs = [
      { field: "storeId", headerName: this.Constant.storeId, hide: true },
      {
        // real columns name from back-end data
        field: "merchandise",
        // show User-defined tags for Viewing
        headerName: this.Constant.merchandise,
        // select single row data
        checkboxSelection: true,
        // select all row datas with pagination data
        headerCheckboxSelection: true,
      },
      { field: "dataSource", headerName: this.Constant.dataSource },
      { field: "cost", headerName: this.Constant.Cost },
      { field: "quantity", headerName: this.Constant.quantity },
      { field: "totalCost", headerName: this.Constant.totalCost },
      { field: "sales", headerName: this.Constant.sales },
      {
        field: "profit",
        headerName: this.Constant.profit,
        cellStyle: function (params) {
          if (params.value < 0) {
            return wordStyle;
          }
        },
      },
    ];
    this.rowData = merchandise.merchandiseItem;
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
  color: red;
}

div.float-right {
  float: right;
}

div.float-right > button {
  margin-right: 1vw;
  margin-bottom: 1vh;
}
</style>

