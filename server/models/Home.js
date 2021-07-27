import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Home = new Schema(
  {
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, default: 'No Description Provided' },
    imgUrl: { type: String, default: 'http://placehold.it/200x200' },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    garage: { type: Number, required: false },
    levels: { type: Number, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
export default Home
