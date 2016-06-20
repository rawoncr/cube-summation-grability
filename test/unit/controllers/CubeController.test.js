'use strict'
const request = require('supertest-as-promised')

describe('CubeController', () => {
  it('create', done => {
    const app = sails.hooks.http.app
    request(app)
      .post('/cube')
      .send(cube)
      .expect(200)
      .then(res => {
        sails.log.debug('POST /cube', JSON.stringify(res.body) + '\n\n')
        done()
      })
      .catch(err => done(err))
  })
  it('update 1', done => {
    const app = sails.hooks.http.app
    const update = {
      x: 1,
      y: 1,
      z: 1,
      W: 5
    }
    request(app)
      .put('/cube/' + cube.id)
      .send(update)
      .expect(200)
      .then(res => {
        sails.log.debug('PUT /cube/' + cube.id, JSON.stringify(res.body) + '\n\n')
        done()
      })
      .catch(err => done(err))
  })
  it('query 1', done => {
    const app = sails.hooks.http.app
    const query = {
      x1: 1,
      y1: 1,
      z1: 1,
      x2: 2,
      y2: 2,
      z2: 2,
    }
    request(app)
      .get('/cube/' + cube.id + '/query')
      .query(query)
      .expect(200)
      .then(res => {
        // Se espera que la sumatoria sea 5
        sails.log.debug('GET /cube/' + cube.id + '/query', JSON.stringify(res.body) + '\n\n')
        done()
      })
      .catch(err => done(err))
  })
  it('update 2', done => {
    const app = sails.hooks.http.app
    const update = {
      x: 2,
      y: 2,
      z: 2,
      W: 14
    }
    request(app)
      .put('/cube/' + cube.id)
      .send(update)
      .expect(200)
      .then(res => {
        sails.log.debug('PUT /cube/' + cube.id, JSON.stringify(res.body) + '\n\n')
        done()
      })
      .catch(err => done(err))
  })
  it('query 2', done => {
    const app = sails.hooks.http.app
    const query = {
      x1: 2,
      y1: 2,
      z1: 2,
      x2: 3,
      y2: 3,
      z2: 3,
    }
    request(app)
      .get('/cube/' + cube.id + '/query')
      .query(query)
      .expect(200)
      .then(res => {
        // Se espera que la sumatoria sea 14
        sails.log.debug('GET /cube/' + cube.id + '/query',JSON.stringify(res.body) + '\n\n')
        done()
      })
      .catch(err => done(err))
  })
  it('query 3', done => {
    const app = sails.hooks.http.app
    const query = {
      x1: 1,
      y1: 1,
      z1: 1,
      x2: 3,
      y2: 3,
      z2: 3,
    }
    request(app)
      .get('/cube/' + cube.id + '/query')
      .query(query)
      .expect(200)
      .then(res => {
        // Se espera que la sumatoria sea 19
        sails.log.debug('GET /cube/' + cube.id + '/query', JSON.stringify(res.body) + '\n\n')
        done()
      })
      .catch(err => done(err))
  })
  it('update 3', done => {
    const app = sails.hooks.http.app
    const update = {
      x: 3,
      y: 3,
      z: 3,
      W: 25
    }
    request(app)
      .put('/cube/' + cube.id)
      .send(update)
      .expect(400) // Se espera que retorne 400 pues M es igual a 5 y esta seria la operacion numero 6
      .then(res => {
        sails.log.debug('PUT /cube/' + cube.id, JSON.stringify(res.body) + '\n\n')
        done()
      })
      .catch(err => done(err))
  })
})
