// Module dependencies
// import _ from 'lodash'

export default {
  inRangeN(num, end = Cube.MAX_N){
    return _.inRange(num, Cube.MIN_N, end + 1)
  },
  inRangeM(num, end = Cube.MAX_M){
    return _.inRange(num, Cube.MIN_M, end + 1)
  },
  inRangeW(num){
    return _.inRange(num, Cube.MIN_W, Cube.MAX_W + 1)
  }
}
