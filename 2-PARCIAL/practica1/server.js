const express =  require('express');
const cors = require('cors');

const { dbConnection } =  require('./database/config');


class Server {


    constructor(){
         this.routes = express.Router();
         this.app = express.Router();
         this.port = process.env.PORT;

         this.paths ={
         paciente: '/paciente',
         tipo_examen : '/tipo_examen',
         resultado : '/resultado'
         }
         this.dataBase();

 
         this.middlewares();
      

         this.routes();
         this._express = express().use(this.router);
    }

    middlewares(){
       
        this.app.use(cors());

        this.app.use(express.json());


        this.app.use( express.static('public') );
        

    }

    async dataBase(){
     await  dbConnection()
    }

    routes(){
        this.app.use(this.paths.paciente, require('./routes/paciente'))
        this.app.use(this.paths.tipo_examen, require('./routes/tipo_examen'))
        this.app.use(this.paths.resultado, require('./routes/resultado'))
        

    }

    listen(){
  
        this._express.listen(this.port, ()=>{
        console.log(`Servidor arrancado en el puerto ${this.port}`)
        })

    }

}

module.exports=  Server;