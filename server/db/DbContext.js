import mongoose from 'mongoose'
import CarSchema from '../models/Car'
import HomeSchema from '../models/Home'
import JobSchema from '../models/Job'

class DbContext {
  // Values = mongoose.model('Value', ValueSchema)
  Cars = mongoose.model('Car', CarSchema)
  Homes = mongoose.model('Home', HomeSchema)
  Jobs = mongoose.model('Job', JobSchema)
}

export const dbContext = new DbContext()
