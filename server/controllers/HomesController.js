import BaseController from '../utils/BaseController'
import { homesService } from '../services/HomesService'

export class HomesController extends BaseController {
  constructor() {
    super('api/homes')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .put('/:id/bid', this.bid)
      .delete('/:id', this.destroy)
  }

  /**
   * Get all homes
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getAll(req, res, next) {
    try {
      const homes = await homesService.getAll(req.query)
      res.send(homes)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Get home by id
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getById(req, res, next) {
    try {
      const home = await homesService.getById(req.params.id)
      res.send(home)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Create home
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async create(req, res, next) {
    try {
      const home = await homesService.create(req.body)
      res.send(home)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Create home
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const home = await homesService.edit(req.body)
      res.send(home)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Create home
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async bid(req, res, next) {
    try {
      const bid = { price: req.body.price, id: req.params.id }
      const home = await homesService.bid(bid)
      res.send(home)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Create home
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async destroy(req, res, next) {
    try {
      await homesService.destroy(req.params.id)
      res.send({ message: 'Successfully Deleted Car' })
    } catch (error) {
      next(error)
    }
  }
}
