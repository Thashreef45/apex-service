import model from '../../domain/entities/apexModel'
import connectDB from '../../utils/dbConnection'

connectDB()

export default {
  ApexLogin: async (id: string, password: string) => {
    return await model.findOne({ id: id })
  },

  addNewNodal: async (nodalId: string, apexId: string) => {
    const data = await model.updateOne({ id: apexId }, { $push: { nodalPoints: nodalId } })
  },

  apexData: async (apexId: string) => {
    return await model.findOne({ id: apexId })
  },

  apexDatabyPrefix: async (prefix: string) => {
    return await model.findOne({ consignmentPrefix: prefix })
  },

  addNewFdmToSending: async (id: string, awb: string) => {
    return await model.updateOne(
      { id: id },
      {
        $addToSet: {'fdm.sending':awb}
      }
    )
  }



}
