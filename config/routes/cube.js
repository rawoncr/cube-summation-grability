module.exports = {
  defaultController: 'CubeController',

  // Only For Debug
  '/*': function(req, res, next) {
    console.log('Requested', (req.isSocket) ? 'Socket' : '', ':: ', req.method, req.url)
    next();
  },
  'PUT /cube/:id': {action: 'update'},
  'GET /cube/:id/query': {action: 'query'}

}
