export default class House {
  constructor({ datePosted, price, bedrooms, bathrooms, description, imgUrl, id, year, levels }) {
    this.datePosted = datePosted
    // this.sqFootage = sqFootage;
    this.price = price
    this.bed = bedrooms
    this.bath = bathrooms
    // this.address = address;
    this.description = description
    this.imgUrl = imgUrl || '//placehold.it/200x200'
    this.id = id
    this.year = year
    this.levels = levels
  }

  get Template() {
    return `
    <div class="col-md-4 col-sm-3 my-3">
      <div class="house bg-light shadow">
        <img src="${this.imgUrl}" class="w-100" alt="${this.year}">
        <div class="p-3">
          <div class="text-center">
            <p><b>${this.year}</b></p>
            <p>${this.levels} Levels - ${this.bed} Bedrooms - ${this.bath} bathrooms</p>
          </div>
          
          <p>${this.description}</p>
          <p><em>$${this.price.toLocaleString('en-US')}</em></p>
          <button class="btn btn-info btn-block" onclick="app.housesController.bidHouse('${this.id}')"> bid </button>
          <button class="btn btn-warning btn-block" onclick="app.housesController.deleteHouse('${this.id}')"> delete </button>
        </div>
      </div>
    </div>
    `
  }
}
