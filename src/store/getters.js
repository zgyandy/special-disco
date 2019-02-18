export default {
  NumFilter: (state) => {
    // return state.numFou >= 100 ? '' + state.numFou : state.numFou >= 10 ? '0' + state.numFou : '00' + state.numFou
    return state.obj.filter(todo => todo.num)
  }
}