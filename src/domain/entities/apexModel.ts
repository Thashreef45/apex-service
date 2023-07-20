import { Schema, model } from 'mongoose'

const apexSchema: Schema = new Schema({
  address: {
    pincode: Number,
    address: String
  },
  nodalPoints: Array,
  employee: Array,
  phone: Number,
  email: String,
  password:String,
  fdm: Array
})

const Model = model('apex', apexSchema)
export default Model
