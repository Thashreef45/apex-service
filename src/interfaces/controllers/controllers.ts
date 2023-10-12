import getHomeData from '../../application/usecase/home'
import login from '../../application/usecase/login'

export default {
  
  login: async(call:any,callback:any) => {
    const response = await login(call.request)
    callback(null,response)
  },

  home : async(call:any,callback:any) => {
    let response = await getHomeData(call.request.id)
    callback(null,response)
  }

}
