import express, { type Application } from 'express'
import helmet from 'helmet'
import nocache from 'nocache'
import compression from 'compression'
import logger from 'morgan'
import cors from 'cors'
import env from 'dotenv'
import grpcServer from './src/interfaces/grpc-config/grpc-server'
import addNewNodal from './src/application/events/consumers/add-new-nodal'
import getApexDetailsByConsignmetnPrefix from './src/application/events/consumers/get-apex-details-by-prefix'
import recieveSendingfdms from './src/application/events/consumers/recieve-sending-fdms'
import removeFdmFromApexSending from './src/application/events/consumers/remove-apex-sending-fdm'

class nodeApp {
  public app: Application

  constructor () {
    env.config()
    this.app = express()

    this.initialiseMiddleware()
    this.initiliseGatewayListner()
    this.messageConsumers()
  }

  private initialiseMiddleware (): void {
    this.app.use(cors())
    this.app.use(helmet())
    this.app.use(nocache())
    this.app.use(compression())
    this.app.use(logger('dev'))
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
  }

  private messageConsumers() {
    addNewNodal()
    getApexDetailsByConsignmetnPrefix()
    recieveSendingfdms()
    removeFdmFromApexSending()
  }

  private initiliseGatewayListner ():void {
    grpcServer()
  }

  public listen (port:string): void {
    this.app.listen(process.env.PORT, () => { console.log('apex service is running at',port) })
  }
}

export default nodeApp
