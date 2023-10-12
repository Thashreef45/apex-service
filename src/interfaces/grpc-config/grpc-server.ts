import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { config } from 'dotenv'
import controllers from '../controllers/controllers'
config()

const packageDef = protoLoader.loadSync('/home/thashreef/Brototype/express-link/server/microservices/apex/src/interfaces/grpc-config/apex.proto')
const grpcObject = grpc.loadPackageDefinition(packageDef)
const apexPackage: any = grpcObject.apexPackage;

const server = new grpc.Server()

const grpcServer = () => {
    server.bindAsync(String(process.env.GRPC_PORT),
         grpc.ServerCredentials.createInsecure(),
        (err, port) => {
            if(!err){
                server.start()
                console.log("gRPC server is running at Port:",port)
            }
        })
}

export default grpcServer

server.addService(apexPackage.apexService.service,{
    "Login":controllers.login,
    "Home":controllers.home,
})
