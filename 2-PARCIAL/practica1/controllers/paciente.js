const { response, request } = require('express');
const Paciente = require('../models/paciente');



const getPacientes = async (req, res= response)=>{
        const pacientes =await  Paciente.find();
        return res.json({pacientes})
}


const getPaciente = async (req=request, res= response)=>{
    const {id} = req.params
    const paciente =  await Paciente.findById(id)
    res.json(paciente);
}

const createPaciente = async(req=request,res=response)=>{
    const {nombre, identificacion } =  req.body;
    
    const pacientesave = new Paciente({ nombre, identificacion})

    await pacientesave.save()
  
    res.status(201).json(pacientesave);
}
const updatePaciente = async(req,res =  response)=>{
    const {id} = req.params;
    const {...data } =  req.body;
    console.log(id,data)
    const updatePaciente =  await Paciente.findByIdAndUpdate(id,data )
    res.json(updatePaciente);
}
const deletePaciente =  async (req, res= response)=>{
    const {id} = req.params;
    await Paciente.findByIdAndDelete(id)
    res.json(`Se ha eliminado el paciente`);
}

 module.exports ={
    getPacientes, 
    getPaciente,
    createPaciente,
    updatePaciente,
    deletePaciente
 }