const ObjectID = require('sails-mongo/node_modules/mongodb').ObjectID
const _ = require('lodash')
const moment = require('moment')

global.cube = {
  id: new ObjectID().toString(),
  N: 3,
  M: 5
}
