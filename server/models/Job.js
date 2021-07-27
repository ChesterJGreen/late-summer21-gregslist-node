import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Job = new Schema(
  {
    title: { type: String, required: true },
    pay: { type: String, required: true },
    rate: { type: Number, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    companyLogo: { type: String, default: 'https://placehold.it/200x200' },
    hours: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Job
