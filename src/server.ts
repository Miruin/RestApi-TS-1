import express, { Application } from 'express'
import ru from './routes/routeuser';
import config from './config/config';
import cors from 'cors'

class server {

    app: express.Application;

    constructor(){

        this.app = express();
        this.config();
        this.routes();

    }

    config() {

        this.app.set('port', config.port);

        //middleware

        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
        this.app.use(cors({
            origin: true,
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            exposedHeaders: ['Content-Range', 'X-Content-Range'],
            allowedHeaders: ['Content-Type', 'authorization'],
            maxAge: 100,
            credentials: true,
            optionsSuccessStatus: 200,
            preflightContinue: true
        }));

    }

    routes() {

        this.app.use(ru);

    }
    
    start() {

        this.app.listen(this.app.get('port'), () => {

            console.log('El servidor esta corriendo en el puerto: ', this.app.get('port'));
            
        });
    }

}

const serv = new server()
serv.start();
