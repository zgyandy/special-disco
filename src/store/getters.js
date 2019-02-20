export default {
  NumFilter: (state) => {
    return state.obj['num']
  },
  doneTodos: state => {
    // 通过方法访问
    return state.todos.filter (todo => todo.done)
  },
  doneTodosCount: (state, getters) => {
    // 通过属性访问
    return getters.doneTodos.length
  }
}