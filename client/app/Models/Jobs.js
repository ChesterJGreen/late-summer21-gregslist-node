export default class Job {

  constructor({ title, company, location, rate, description, hours, companyLogo, id }) {
    this.title = title
    this.company = company
    this.location = location
    this.rate = rate
    this.description = description
    this.hours = hours
    this.companyLogo = companyLogo || '//placehold.it/200x200'
    this.id = id
  }

  get template() {
    return `
      <div class="col-md-3 col-sm-2 my-3">
        <div class="house bg-light shadow">
          <div class="p-3 sticky">
            <div class="text-center">
              <p><b>${this.company} - ${this.title}</b></p>
            </div>
            <p>${this.description}</p>
            <p class="text-center"><em>${this.hours} Hrs - $${this.rate}/year</em></p>
            <button class="btn btn-info btn-block" onclick="app.jobsController.bidJob('${this.id}')"> RAISE </button>
              <button class="btn btn-warning btn-block" onclick="app.jobsController.deleteJob('${this.id}')"> delete </button>
          </div>
        </div>
      </div>
      `
  }
}
