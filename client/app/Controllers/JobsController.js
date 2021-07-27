import { ProxyState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"

function _draw() {
  let template = ''
  ProxyState.jobs.forEach(job => {
    template += job.template

  })
  document.getElementById('jobs').innerHTML = template
}

export default class JobsController {

  constructor() {
    ProxyState.on('jobs', _draw)
    // ProxyState.on('jobs', () => { console.log('new job') })
    _draw()
  }

  async createJob() {
    try {
      // console.log('creating job step 1')
      event.preventDefault()
      let form = event.target
      // console.log(form.title.value)
      let rawJob = {
        title: form.title.value,
        company: form.company.value,
        rate: form.rate.value,
        description: form.description.value,
        hours: form.hours.value,
        id: form.id.value

      }
      await jobsService.createJob(rawJob)
      form.reset()
    } catch (e) {
      console.error(e)
      window.alert(e.message)
    }
  }
  deleteJob(jobId) {
    // console.log('you are trying to delete a job by the id of', jobId)
    jobsService.deleteJob(jobId)
  }
  bidJob(jobId) {
    // console.log('you are bidding on the job with the id of' + jobId)
    jobsService.bidJob(jobId)
  }
}