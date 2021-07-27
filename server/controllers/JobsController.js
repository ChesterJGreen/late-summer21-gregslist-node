import { jobsService } from '../services/JobsService'
import BaseController from '../utils/BaseController'

export class JobsController extends BaseController {
  constructor() {
    super('api/jobs')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .put('/:id/bid', this.bid)
      .delete('/:id', this.destroy)
  }

  /**
   * Get all Cars
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getAll(req, res, next) {
    try {
      const jobs = await jobsService.getAll(req.query)
      res.send(jobs)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Get all Cars
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getById(req, res, next) {
    try {
      const job = await jobsService.getById(req.params.id)
      res.send(job)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Get all Cars
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async create(req, res, next) {
    try {
      const job = await jobsService.create(req.body)
      res.send(job)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Get all Cars
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const job = await jobsService.edit(req.body)
      res.send(job)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Get all Cars
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async bid(req, res, next) {
    try {
      const bid = { pay: req.body.pay, id: req.params.id }
      const job = await jobsService.bid(bid)
      res.send(job)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Get all Cars
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async destroy(req, res, next) {
    try {
      await jobsService.destroy(req.params.id)
      res.send({ message: 'Successfully Deleted Job'})
    } catch (error) {
      next(error)
    }
  }
}
