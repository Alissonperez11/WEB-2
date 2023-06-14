const { model, Schema } = require('mongoose');

const ResultadoSchema = Schema(   {
    resultado_examen:{
        type: String,
        required: [ true, 'El campo resultado de examen debe ser requerido'],
       
    },
    valor:{
        type: String,
        required: [ true, 'El campo valor a pagar debe ser requerido'],
    },
    observacion:{
        type: String,
        required: [ true, 'El campo observacion debe ser requerido'],
    },
   
}
);

module.exports = model('Resultado', ResultadoSchema );