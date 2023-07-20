import repository from '../../infrastructure/repositories/repository'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

async function login(data:{id:string,password:string}){
    const {id,password} = data
    const apex = await repository.ApexLogin(id,password)
    if(apex) {
        if(await compare(password,apex.password)){
            return {message:'success',token:sign({id:apex.id,administration:"apex"},String(process.env.JWT_SIGNATURE),{ expiresIn: '24h'})}
        }return{message:'Incorrect Password'}
    }return {message:'Apex not found'}
}

export default login