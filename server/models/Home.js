import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Home = new Schema(
  {
    year: { type: String, required: true },
    price: { type: String, required: true},
    description: { type: String, default: 'No Description Provided' },
    imgUrl: { type: String, default: 'https/placehold.it/200x200'},
    bedrooms: { type: String, required: true },
    bathrooms: { type: String, required: true },
    garage: { type: Number, required: false}
  },
  { timestamps: true, toJSON: { virtuals: true} }
)
export default Home