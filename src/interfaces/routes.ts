import express, { type Request, type Response, type Application } from 'express'
import controllers from './controllers/controllers'

const route: Application = express()

route.post('/login', controllers.login)

export default route
