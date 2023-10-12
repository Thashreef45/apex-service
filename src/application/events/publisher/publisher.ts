// import * as amqp from 'amqplib'


// const Url = 'amqp://localhost:5672'


// const createNodal = async (data: any) => {
//     try {        
//         const connection = await amqp.connect(Url)
//         const channel = await connection.createChannel()
//         const queue = 'create-nodal'
//         await channel.assertQueue(queue)
//         channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)))
//         await channel.close()
//         await connection.close()
//     } catch (error) {
//         console.log(error)
//     }

// }

// export default createNodal