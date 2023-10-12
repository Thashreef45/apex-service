import { verify } from "jsonwebtoken"
import { config } from "dotenv"
import repository from "../../infrastructure/repositories/repository"
config()

const getHomeData = async(data:string) => {
    const id = decodeToken(data)
    const response  = await repository.apexData(id)

    if(response){
        response.status = 200
        response.message = 'success'
        return response
    }else {
        return {message:'Not Found',status:404}
    }
    
}



const decodeToken = (data:string) => {
    const jwtSignature = String(process.env.JWT_SIGNATURE)
    const token = data.split(" ")[1]
    const id = verify(token,jwtSignature)
    if(id instanceof Object) return id.id
}



export default getHomeData