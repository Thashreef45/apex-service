import model from '../../domain/entities/apexModel'
import connectDB from '../../utils/dbConnection'

connectDB()

export default {
  ApexLogin: async (id: string, password: string) => {
    const apex = await model.findOne({id:id})
    return apex
  },
}
