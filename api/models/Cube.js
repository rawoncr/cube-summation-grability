/**
 * Cube.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    data: {
      type: 'Array'
    },
    size: {
      type: 'integer',
      required: true
    },
    permittedOperations: {
      type: 'integer',
      required: true
    },
    remainingOperations: {
      type: 'integer'
    }

  },
  beforeCreate(values, next) {
    if (!_.inRange(values.size, 1, 101) || !_.inRange(values.permittedOperations, 1, 1001)) {
      next({
        message: '1 <= N <= 100 \n 1 <= M <= 1000'
      })
    }
    values.data = _.fill(Array(values.size), _.fill(Array(values.size), _.fill(Array(values.size), 0)))
    next()
  },
};
