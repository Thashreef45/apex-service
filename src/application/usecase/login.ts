import repository from '../../infrastructure/repositories/repository'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { ApexLoginRequest } from '../types/interfaces'

const apexLogin = async (data:ApexLoginRequest) => {
    try {
        const { id, password } = data
        const apex = await repository.ApexLogin(id, password)
        if (apex) {
            if (await compare(password, apex.password)) {
                return { message: 'success', token: sign({ id: apex.id, administration: "apex" }, String(process.env.JWT_SIGNATURE), { expiresIn: '24h' }), status: 200 }
            } else {
                return { message: 'Incorrect Password', status: 401 }
            }
        } else {
            return { message: 'Apex not found', status: 404 }
        }
    } catch (error) {
        if(error instanceof Error){
            return { message: 'Internal Server Error', status: 500 }
        }
    }
}

export default apexLogin 