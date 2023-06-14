const { response, request } = require('express');
const Tipo_Examen = require('../models/tipo_examen');



const getTipos_Examenes = async (req, res= response)=>{
        const tipos =await  Tipo_Examen.find();
        return res.json({tipos})
}


const getTipo_Examen = async (req=request, res= response)=>{
    const {id} = req.params
    const tipo_examen =  await Tipo_Examen.findById(id)
    res.json(tipo_examen);
}

const createTipo_Examen = async(req=request,res=response)=>{
    const {descripcion, indicacion } =  req.body;
    
    const tipo_examensave = new Tipo_Examen({ descripcion, indicacion})

    await tipo_examensave.save()
  
    res.status(201).json(tipo_examensave);
}
const updateTipo_Examen = async(req,res =  response)=>{
    const {id} = req.params;
    const {...data } =  req.body;
    console.log(id,data)
    const updateTipo_Examen =  await Tipo_Examen.findByIdAndUpdate(id,data )
    res.json(updateTipo_Examen);
}
const deleteTipo_Examen =  async (req, res= response)=>{
    const {id} = req.params;
    await Tipo_Examen.findByIdAndDelete(id)
    res.json(`Se ha eliminado el tipo de examen`);
}

 module.exports ={
    getTipos_Examenes, 
    getTipo_Examen,
    createTipo_Examen,
    updateTipo_Examen,
    deleteTipo_Examen
 }