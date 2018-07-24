export default {
  doneList(state) {
    return state.list.filter(item => item.done);
  },
  notDoneList(state) {
    return state.list.filter(item => !item.done);
  },
};