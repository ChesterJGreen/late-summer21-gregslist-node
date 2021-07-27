import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class JobsService {
  async getAll(query = {}) {
    const jobs = await dbContext.Jobs.find(query)
    return jobs
  }

  async getById(id) {
    const job = await dbContext.Jobs.findById(id)
    if (!job) {
      throw new BadRequest('Invalid Id')
    }
  }

  async create(body) {
    const job = await dbContext.Jobs.create(body)
    return job
  }

  async edit(body) {
    const job = await dbContext.Jobs.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    if (!job) {
      throw new BadRequest('Invalid')
    }
    return job
  }

  async bid(body) {
    let job = await this.getById(body.id)
    if (job.pay < body.pay) {
      throw new BadRequest('Job can only be under bid')
    }
    job = await dbContext.Jobs.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    return job
  }

  async destroy(id) {
    const job = await dbContext.Jobs.findByIdAndDelete(id)
    if (!job) {
      throw new BadRequest('Invalid Id')
    }
    return job
  }
}

export const jobsService = new JobsService()
