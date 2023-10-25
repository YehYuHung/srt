<template>
  <div>
    <h1>My Todo List</h1>
    <div v-for="todo in todos" :key="todo.id">
      <div class="todo-title">
        {{ todo.title }}
      </div>
      <div class="todo-icons">
        <i class="fa fa-check" aria-hidden="true"></i>
        <i class="fa fa-trash-alt" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import todoItem from "@/mock/data/todo.json";

export default {
  name: "complexPartView",
  data() {
    return {
      todos: todoItem.todos,
    };
  },
  props: {},
};
</script>

