<template>
    <div>
        <h1>My Todo List</h1>
        <span></span>
        <form>
            <table class="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <td v-for="title in titles" :key="title.id">
                            <span style="text-align:center;">{{title}}</span>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td v-for="(title,index) in titles" :key="title.id">
                            <input v-if="index != titles.length-1" type="text" class="form-control" />
                            <button v-else-if="index == titles.length-1" class="btn glyphicon glyphicon-plus" type="button"></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
</template>

<script>
    const titles = ["名稱", "來源", "成本", "數量", "總成本", "銷售額", ""];
    export default {
        name: "InsertView",
        data() {
            return {
                titles: titles,
            }
        },
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
</style>