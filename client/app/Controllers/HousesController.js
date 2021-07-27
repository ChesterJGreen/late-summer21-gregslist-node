import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js"

function _draw() {
  let template = ''
  ProxyState.houses.forEach(house => {
    template += house.Template
  })
  document.getElementById('houses').innerHTML = template
}

export default class HousesController {
  constructor() {

    ProxyState.on('houses', _draw)
    // ProxyState.on('houses', () => { console.log('new house') })
    _draw()
  }

  async createHouse() {
    try {
      event.preventDefault()
      // console.log('creating house step 1')
      let form = event.target
      let rawHouse = {
        year: form.year.value,
        price: form.price.value,
        bedrooms: form.bedrooms.value,
        bathrooms: form.bathrooms.value,
        // address: form.address.value,
        description: form.description.value,
        imgUrl: form.imgUrl.value,
        levels: form.levels.value


      }
      await housesService.createHouse(rawHouse)
      form.reset()
    } catch (e) {
      console.error(e)
      window.alert(e.message)
    }
  }
  deleteHouse(houseId) {
    // console.log('you are trying to delete a house by the id of', houseId)
    housesService.deleteHouse(houseId)
  }
  bidHouse(houseId) {
    // console.log('you are bidding on the house with the id of', houseId)
    housesService.bidHouse(houseId)

  }
}