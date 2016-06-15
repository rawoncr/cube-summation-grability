/**
 * CubeController
 *
 * @description :: Server-side logic for managing cubes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

export default {
  /**
   * @author Ramon Caraballo
   * @description update a block cube
   * @return 200 cube
   */
  update(req, res) {
      const [x, y, z, W] = [req.body.x, req.body.y, req.body.z, req.body.W]
      Cube.findOne(req.params.id)
        .then(cube => cube.updateBlock(x, y, z, W))
        .then(cube => res.ok(cube))
        .catch(err => {
          sails.log.warn('CubeController:update', err)
          return res.badRequest()
        })

    },
    query(req, res) {
      const [x1, y1, z1] = [req.query.x1, req.query.y1, req.query.z1]
      const [x2, y2, z2] = [req.query.x2, req.query.y2, req.query.z2]
      Cube.findOne(req.params.id)
        .then(cube => cube.sum(x1, y1, z1, x2, y2, z2))
        .then(sum => res.ok(sum))
        .catch(err => {
          sails.log.warn('CubeController:query', err)
          return res.badRequest()
        })

    }
}
