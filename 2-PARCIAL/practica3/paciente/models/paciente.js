const { model, Schema } = require('mongoose');

const PacienteSchema = Schema(   
    {
        nombre:{
            type: String,
            required: [ true, 'El campo Nombre de carrera debe ser requerido'],
            unique:true
        },
        identificacion:{
            type: String,
            required:[ true, 'El campo identificacion debe ser requerido'],
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        },
    }
);
        
module.exports = model('Paciente', PacienteSchema );
