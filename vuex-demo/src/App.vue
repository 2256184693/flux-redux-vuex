<template>
<div class='container'>
  <h3 class="title">ToDo List</h3>
  <div class="todo-input-container">
    <input class="todo-input" type="text" v-model="content" />
    <a href="javascript:;" class="add-btn" @click="addTodo(content)">新增</a>
  </div>
  <div class="todo-list">
    <to-do-item v-for="item in notDoneList" :key="item.id" :data="item"></to-do-item>
    <to-do-item v-for="item in doneList" :key="item.id" :data="item"></to-do-item>
  </div>
</div>
</template>

<style lang="scss">

</style>

<script>
import store from './vuex/store.js';
import {mapActions, mapGetters} from 'vuex';
import toDoItem from './todo-item.vue';
export default {
  name: "ToDoList",
  store,
  components: {
    toDoItem,
  },
  props: {
    
  },
  data() {
    return {
      content: '',
    };
  },
  computed: {
    ...mapGetters([
      'doneList',
      'notDoneList',
    ]),
  },
  watch: {},
  methods: {
    ...mapActions({
      addTodoAction: 'addTodo',
    }),
    addTodo() {
      var content = this.content.replace(/(^\s*|\s*$)/ , '');
      if(!content) {
        alert('请输入Todo内容');
        return;
      }
      this.addTodoAction(content);
    }
  },
  mounted() {},
  beforeDestroy() {},
};
</script>