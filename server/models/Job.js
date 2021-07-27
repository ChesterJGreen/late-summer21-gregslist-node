import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Job = new Schema(
  {
    title: { type: String, required: true },
    pay: { type: String, required: false },
    rate: { type: Number, required: true },
    company: { type: String, required: true },
    location: { type: String, required: false },
    companyLogo: { type: String, default: 'https://placehold.it/200x200' },
    hours: { type: Number, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Job
