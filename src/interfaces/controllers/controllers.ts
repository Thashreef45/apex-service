import { type Request, type Response } from 'express'
import login from '../../application/usecase/login'

export default {
  
  login: async(req: Request, res: Response) => {
    const response = await login(req.body)
    if(response.message == 'success') res.status(200).json(response)
    else if(response.message == 'Incorrect Password') res.status(401).json(response)
    else res.status(404).json(response)
  },

}
