import {Request, Response, Router} from 'express'
import { auth } from '../helpers/service'
import cu from '../controllers/controllersUser'
import cors from 'cors'



class Rutasuser{

    router: Router;

    constructor() {

        this.router = Router();      
        this.routes();

    }

    routes() {
        
        this.router.options('/registro', cors({
            origin: '*',
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            exposedHeaders: ['Content-Range', 'X-Content-Range'],
            allowedHeaders: ['Content-Type', 'authorization'],
            credentials: true,
            optionsSuccessStatus: 200,
            preflightContinue: true
        }), (req: Request, res: Response, next: any) =>{

            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            // handle OPTIONS method
            if ('OPTIONS' == req.method) {
                return res.sendStatus(200);
            } else {
                next();
            }

        })

        this.router.post('/registro',cors({
            origin: '*',
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            exposedHeaders: ['Content-Range', 'X-Content-Range'],
            allowedHeaders: ['Content-Type', 'authorization'],
            credentials: true,
            optionsSuccessStatus: 200,
            preflightContinue: true
        }), cu.reguser)

        this.router.post('/log', cu.login)

        this.router.get('/log', auth, cu.logout)

        this.router.get('/actualizar', auth, cu.datosuser)

        this.router.put('/actualizar', auth, cu.moduser)

        this.router.delete('/eliminar', auth, cu.deluser)

    }
 
}

const ru = new Rutasuser();

export default ru.router


