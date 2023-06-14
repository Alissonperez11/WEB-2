const { model, Schema } = require('mongoose');

const Tipo_ExamenSchema = Schema(   {
    descripcion:{
        type: String,
        required: [ true, 'El campo Descripcion debe ser requerido'],
       
    },
    indicacion:{
        type: String,
        required: [ true, 'El campo Indicacion debe ser requerido'],
    },
    
}
);

module.exports = model('Tipo de examen', Tipo_ExamenSchema );
