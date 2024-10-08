import express from 'express';
import CountRouter from '../routes/CountRouter.js'
import dbConnect from '../database/config.js'

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.middlewares();
        this.dbConnection();
        this.routes();
        this.listen();
    }

    middlewares(){
        this.app.use(express.json());
    }

    async dbConnection(){
        try {
            await dbConnect();
            console.log('Connected to the database');
        }
        catch (error) {
            console.error('Error connecting to the database:', error.message);
        }
    }

    routes(){
        this.app.use('/api', CountRouter);
    }

    listen(){
        this.app.listen( process.env.PORT,  () => {
            console.log(`Sever Is Running`)
        });
    }
}

export default Server;

