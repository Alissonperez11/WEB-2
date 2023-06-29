const { response } = require('express');
const { Paciente } = require('../models');


const getPacientes = async (req,res = response )=>{
    const { limite = 10 , desde=0 } =  req.query;
    const query = { status:true };

    const [ pacientes ] = await Promise.all([
        Paciente.countDocuments(query),
        Paciente.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);
  
    res.json({
    
      pacientes
    })
}

const getPaciente = async (req, res= response)=>{
    const {id} = req.params
    const paciente=  await Paciente.findById(id);
    res.json(paciente);
}
const createPaciente = async(req,res=response)=>{
    const { status, nombre, identificacion } =  req.body;
    
    const existpaciente =  await Paciente.findOne({nombre, identificacion})

    await existpaciente.save()
  
    res.status(201).json(existpaciente);
   
}
const updatePaciente = async(req,res =  response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const pacienteUpdated =  await Paciente.findByIdAndUpdate(id,data, {new: true} )
    res.json(pacienteUpdated);
}
const deletePaciente =  async (req, res= response)=>{
    const {id} = req.params;
    const deletedpaciente =  await Paciente.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedpaciente);
}

 module.exports ={
    createPaciente,
    getPaciente,
    getPacientes,
    updatePaciente,
    deletePaciente
 }