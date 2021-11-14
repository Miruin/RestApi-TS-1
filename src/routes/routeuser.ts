import {Request, Response, Router} from 'express'
import { auth } from '../helpers/service'
import cu from '../controllers/controllersUser'
import cors from 'cors'



class Rutasuser{

    router: Router;
    c: any;

    constructor() {

        this.router = Router();
        this.c = cors();        
        this.routes();

    }

    routes() {
        
        this.router.options('*', this.c())
        
        this.router.post('/registro',this.c(), cu.reguser)

        this.router.post('/log', cu.login)

        this.router.get('/log', auth, cu.logout)

        this.router.get('/actualizar', auth, cu.datosuser)

        this.router.put('/actualizar', auth, cu.moduser)

        this.router.delete('/eliminar', auth, cu.deluser)

    }
 
}

const ru = new Rutasuser();
ru.routes();

export default ru.router


