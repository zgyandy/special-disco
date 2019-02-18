import * as types from './types'
export default {
  payLoad: (state, payload) => {
    state.numOne = payload
  },
  addTwo: (state) => {
    state.numTwo += 1
  },
  subTwo: (state) => {
    state.numTwo -= 1
  },
  [types.ADDTHR]: (state) => {
    state.numThr += 1
  },
  [types.SUBTHR]: (state) => {
    state.numThr -= 1
  }
}