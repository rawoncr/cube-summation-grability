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
}
