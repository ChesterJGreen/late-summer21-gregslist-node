import { ProxyState } from "../AppState.js";
import Job from "../Models/Jobs.js"
import { api } from "./AxiosService.js";



class JobsService {

  constructor() {
    this.getAllJobs()
  }

  async createJob(rawJob) {
    // console.log('creating job step 2')
    const res = await api.post('jobs', rawJob)
    // console.log('creating job step 3')
    ProxyState.jobs = [...ProxyState.jobs, new Job(res.data)]
  }
  async getAllJobs() {
    try {
      const res = await api.get('jobs')
      // console.log(res.data)
      ProxyState.jobs = res.data.map(j => new Job(j))
    } catch (e) {
      console.error(e)
    }
  }
  async bidJob(jobId) {
    try {
      let foundJob = ProxyState.jobs.find(j => j.id == jobId)
      foundJob.rate += 2
      const res = await api.put('jobs/' + jobId, foundJob)
      // console.log('updated job', res.data)
      ProxyState.jobs = ProxyState.jobs
    } catch (e) {
      console.error(e)
    }
  }
  async deleteJob(jobId) {
    try {
      const res = await api.delete('jobs/' + jobId)
      // console.log(res.data)
      ProxyState.jobs = ProxyState.jobs.filter(j => j.id != jobId)
    } catch (e) {
      console.error(e)
    }
  }
}
export const jobsService = new JobsService()