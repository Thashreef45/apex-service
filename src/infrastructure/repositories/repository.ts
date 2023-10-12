import model from '../../domain/entities/apexModel'
import connectDB from '../../utils/dbConnection'

connectDB()

export default {
  ApexLogin: async (id: string, password: string) => {
    return await model.findOne({ id: id })
  },

  addNewNodal: async (nodalId: string, apexId: string) => {
    const data =  await model.updateOne({ id: apexId }, { $push: { nodalPoints: nodalId } })
  },

  apexData : async(apexId:string) => {
    return await model.findOne({id:apexId})
  }


}
