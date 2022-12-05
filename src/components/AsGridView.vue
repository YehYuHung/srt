<template>
    <div>
        <h3>{{title}}</h3>
        <button v-on:click="check">click here</button>
        <ag-grid-vue style="width: 500px; height: 200px"
                     class="ag-theme-alpine"
                     :columnDefs="columnDefs"
                     :rowData="rowData">
        </ag-grid-vue>
    </div>
</template>

<script>
    import "ag-grid-community/styles/ag-grid.css";
    import "ag-grid-community/styles/ag-theme-alpine.css";
    import { AgGridVue } from "ag-grid-vue";
    //import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

    export default {
        name: "AsGridView",
        data() {
            return {
                columnDefs: null,
                rowData: null,
                title: "AsGridView",
            };
        },
        methods: {
            check() {
                alert(this.columnDefs);
            },
        },
        components: {
            AgGridVue,
        },
        beforeMount() {
            this.columnDefs = [
                { field: "make" },
                { field: "model" },
                { field: "price" },
            ];

            this.rowData = [
                { make: "Toyota", model: "Celica", price: 35000 },
                { make: "Ford", model: "Mondeo", price: 32000 },
                { make: "Porsche", model: "Boxster", price: 72000 },
            ];
        },
    };
</script>

<style scoped>
    h3 {
        color: red,
    }
</style>

