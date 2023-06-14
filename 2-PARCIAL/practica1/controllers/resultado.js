const { response, request } = require('express');
const Resultado = require('../models/resultado');



const getResultados = async (req, res= response)=>{
        const resultados =await  Resultado.find();
        return res.json({resultados})
}


const getResultado = async (req=request, res= response)=>{
    const {id} = req.params
    const resultado =  await Resultado.findById(id)
    res.json(resultado);
}

const createResultado = async(req=request,res=response)=>{
    const {resultado_examen, valor, observacion} =  req.body;
    
    const resultadosave = new Resultado({ resultado_examen, valor, observacion})
    
    await resultadosave.save()
  
    res.status(201).json(resultadosave);
}
const updateResultado = async(req,res =  response)=>{
    const {id} = req.params;
    const {...data } =  req.body;
    console.log(id,data)
    const updateresultado =  await Resultado.findByIdAndUpdate(id,data )
    res.json(updateresultado);
}
const deleteResultado =  async (req, res= response)=>{
    const {id} = req.params;
    await Resultado.findByIdAndDelete(id)
    res.json(`Se ha eliminado el Resultado`);
}

 module.exports ={
    getResultados, 
    getResultado,
    createResultado,
    updateResultado,
    deleteResultado
 }