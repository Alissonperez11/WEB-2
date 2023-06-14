const { model, Schema } = require('mongoose');

const PacienteSchema = Schema(   {
    nombre:{
        type: String,
        required: [ true, 'El campo Nombre  debe ser requerido'],
       
    },
    identificacion:{
        type: String,
        required: [ true, 'El campo identificacion debe ser requerido'],
    },

}
);

module.exports = model('Paciente', PacienteSchema );
