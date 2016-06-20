'use strict'

module.exports.afterDisconnect = (session, socket, next) => {
  sails.log.debug('[-] afterDisconnect . . . .')
  return next()
}
