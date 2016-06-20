/**
 * CubeController
 *
 * @description :: Server-side logic for managing cubes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
export default {
  /**
   * @author Ramon Caraballo
   * @description create one cube
   * @return 200 cube
   */
    create(req, res) {
      Cube.create(req.body)
        .then(cube => res.ok(cube))
        .catch(err => {
          sails.log.warn('CubeController:create', err.message)
          return res.badRequest(_.pick(err, 'message'))
        })
    },
    find(req, res) {
      Cube.find()
        .then(cubes => res.ok(cubes))
        .catch(err => {
          sails.log.warn('CubeController:find', err.message)
          return res.badRequest(_.pick(err, 'message'))
        })
    },
    findOne(req, res) {
      Cube.findOne(req.params.id)
        .then(cube => {
          if (!cube)
            throw Error('Cubo no exite')
          return res.ok(cube)
        })
        .catch(err => {
          sails.log.warn('CubeController:findOne', err.message)
          return res.badRequest(_.pick(err, 'message'))
        })
    },
    /**
     * @author Ramon Caraballo
     * @description update a block cube - operator update
     * @return 200 cube
     */
    update(req, res) {
      const [x, y, z, W] = [req.body.x, req.body.y, req.body.z, req.body.W]
      Cube.findOne(req.params.id)
        .then(cube => cube.updateBlock(x, y, z, W))
        .then(cube => res.ok(cube))
        .catch(err => {
          sails.log.warn('CubeController:update', err.message)
          return res.badRequest(_.pick(err, 'message'))
        })

    },
    /**
     * @author Ramon Caraballo
     * @description operator query
     * @return 200 sum
     */
    query(req, res) {
      const [x1, y1, z1] = [req.query.x1, req.query.y1, req.query.z1]
      const [x2, y2, z2] = [req.query.x2, req.query.y2, req.query.z2]
      Cube.findOne(req.params.id)
        .then(cube => cube.sum(x1, y1, z1, x2, y2, z2))
        .then(sum => res.ok(sum))
        .catch(err => {
          sails.log.warn('CubeController:query', err.message)
          return res.badRequest(_.pick(err, 'message'))
        })

    }
}
