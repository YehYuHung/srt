<template>
  <div>
    <h1>My Todo List</h1>
    <div
      :class="[todos[0].isComplete ? 'success' : 'error', 'todo-wrapper']"
      v-for="todo in todos"
      :key="todo.id"
    >
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
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.form-container {
  border: 5px solid black;
  border-radius: 1rem;
  margin: 2% 10%;
  padding: 0px;
}
</style>

<script>
const todos = [
  {
    title: "Get dressed",
    isComplete: false,
  },
  {
    title: "Buy food",
    isComplete: false,
  },
  {
    title: "Eat lunch",
    isComplete: true,
  },
  {
    title: "Write Article",
    isComplete: true,
  },
];

export default {
  name: "complexPartView",
  props: {},
  data() {
    return {
      todos: todos,
    };
  },
};
</script>

