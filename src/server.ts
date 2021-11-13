import express, { Application } from 'express'
import ru from './routes/routeuser';
import config from './config/config';

class server {

    app: express.Application;

    constructor(){

        this.app = express();
        this.config();
        this.routes();

    }

    config() {

        this.app.set('port', config.port);
        
        let corsOptions = {
            origin: 'http://localhost:8100',
            optionsSuccessStatus: 200 
        }

        //middleware

        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
        this.app.use(cors(corsOptions));

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
