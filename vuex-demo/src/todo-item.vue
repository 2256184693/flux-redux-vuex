<template>
<div class="todo-item" :class="{'done': data.done}">
  <div class="content">{{data.content}}</div>
  <div class="operation">
    <a href="javascript:;" class="btn" @click="changeTodoStatus(data.id)">{{data.done ? '重置' : '完成'}}</a>
    <a href="javascript:;" class="btn del" @click="deleteTodo(data.id)">删除</a>
  </div>
</div>
</template>

<style lang="scss">

</style>

<script>
import {mapActions} from 'vuex';
export default {
  name: "TodoItem",
  props: {
    data: Object,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    ...mapActions([
      'changeTodoStatus',
      'deleteTodo',
    ]),
  },
  mounted() {},
  beforeDestroy() {},
};
</script>