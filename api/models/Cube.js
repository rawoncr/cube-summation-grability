/**
 * Cube.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

export default {
  MIN_N: 1,
  MAX_N: 100,
  MIN_M: 1,
  MAX_M: 100,
  MIN_W: -1000000000,
  MAX_W: 1000000000,

  attributes: {
    data: {
      type: 'Array'
    },
    N: {
      type: 'integer',
      required: true
    },
    M: {
      type: 'integer',
      required: true
    },
    remainingOperations: {
      type: 'integer'
    },
    updateBlock(x, y, z, W) {
      if (this.remainingOperations <= 0)
        throw Error('No se aceptan mas operaciones para este cubo')
      if (!ValidatorService.inRangeN(x, this.N) || !ValidatorService.inRangeN(y, this.N) || !ValidatorService.inRangeN(z, this.N))
        throw Error(Cube.MIN_N + ' <= x,y,z <= ' + this.N)
      if (!ValidatorService.inRangeW(W))
        throw Error(Cube.MIN_W + ' <= W <= ' + Cube.MAX_W)

      this.remainingOperations--
      this.data[x - 1][y - 1][z - 1] = W
      this.save()
      return this
    },
    sum(x1,y1,z1,x2,y2,z2) {
      if (this.remainingOperations <= 0)
        throw Error('No se aceptan mas operaciones para este cubo')
      console.log(x1,y1,z1,x2,y2,z2)
      if (!ValidatorService.inRangeN(x2, this.N) || !ValidatorService.inRangeN(x1, this.N) || x1 > x2)
        throw Error(Cube.MIN_N + ' <= x1 <= x2 <= ' + this.N)
      if (!ValidatorService.inRangeN(y2, this.N) || !ValidatorService.inRangeN(y1, this.N) || y1 > y2)
        throw Error(Cube.MIN_N + ' <= y1 <= y2 <= ' + this.N)
      if (!ValidatorService.inRangeN(z2, this.N) || !ValidatorService.inRangeN(z1, this.N) || z1 > z2)
        throw Error(Cube.MIN_N + ' <= z1 <= z2 <= ' + this.N)

      let sum = 0
      for (let i = x1 - 1; i <= x2 - 1; i++) {
        for (let j = y1 - 1; j <= y2 - 1; j++) {
          for (let k = z1 - 1; k <= z2 - 1; k++) {
            sum += parseInt(this.data[i][j][k])
          }
        }
      }
      this.remainingOperations--
      this.save()
      return { sum: sum }
    }

  },
  beforeCreate(values, next) {
    if (!ValidatorService.inRangeN(values.N) || !ValidatorService.inRangeM(values.M)) {
      next({
        message: MIN_N + ' <= N <= ' + MAX_N + ' \n ' + MIN_M + ' <= M <= ' + MAX_M
      })
    } else {
      values.remainingOperations = values.M
      values.data = _.fill(Array(values.N), _.fill(Array(values.N), _.fill(Array(values.N), 0)))
      next()
    }
  }
}
