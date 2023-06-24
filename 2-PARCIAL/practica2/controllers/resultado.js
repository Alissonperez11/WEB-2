const { response } = require('express')
const { Resultado } = require('../models')


const getResultados= async (req, res = response )=>{

    //GET http://localhost:3000/products   ?limit=100?since=1
    const { limit = 10 , since=0 } =  req.query;
    const query = { status:true };

    const [ sum, resultados ] = await Promise.all([
        Resultado.countDocuments(query),
        Resultado.find(query)
        .populate('paciente')
        .populate('tipo_examen')
        .skip(Number(since))
        .limit(Number(limit))
    ])
  
    res.json({
      sum, 
      resultados
    })
    
}
const getResultado= async (req, res =  response)=>{
    const {id} = req.params
    const resultado=  await Resultado.findById(id).populate('paciente').populate('tipo_examen');
    res.json(resultado);
}
const createResultado = async(req=request,res=response)=>{
    const {status,resultado_examen, valor, observacion} =  req.body;
    
    const resultadosave = new Resultado({ resultado_examen, valor, observacion})

    await resultadosave.save()
  
    res.status(201).json(resultadosave);
}
const updateResultado= async (req, res=response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    // console.log(id,data)
    const updatedresultado =  await Resultado.findByIdAndUpdate(id,data, {new: true} )
    res.json(updatedresultado);
}
const deleteResultado= async (req, res = response)=>{
    const {id} = req.params;
    const deletedresultado =  await Resultado.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedresultado);
}

module.exports = {
    getResultado,
    getResultados,
    createResultado,
    updateResultado,
    deleteResultado
};