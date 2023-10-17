import { Schema, model } from 'mongoose'

const apexSchema: Schema = new Schema({
  address:String,
  pincode:Number,
  id:String,
  name:String,
  nodalPoints: Array,
  employee: Array,
  phone: Number,
  email: String,
  password:String,
  fdm: {
    sending: {
      type: [String],
      default: [],
    },
    received: {
      type: [String],
      default: [],
    },
  },
  consignmentPrefix : String,
})

const Model = model('apex', apexSchema)
export default Model
