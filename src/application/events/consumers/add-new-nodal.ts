import * as amqp from 'amqplib'
import { config } from 'dotenv'
import repository from '../../../infrastructure/repositories/repository'
config()

const URL = String(process.env.RabbitMq_PORT)
const queue = 'add-new-nodal'


const addNewNodal = async() => {
    const connect = await amqp.connect(URL)
    const channel = await connect.createChannel()
    await channel.assertQueue(queue)

    await channel.consume(queue,(data:any)=>{
        channel.ack(data)
        execute(data.content.toString())
    })
}

const execute = (data:any) => {
    data = JSON.parse(data)
    repository.addNewNodal(data.nodal,data.apex)
}

export default addNewNodal