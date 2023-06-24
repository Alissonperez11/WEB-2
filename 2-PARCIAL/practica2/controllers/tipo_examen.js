const { response } = require('express');
const { Tipo_Examen } = require('../models');


const getTipos = async (req,res = response )=>{
    const { limite = 10 , desde=0 } =  req.query;
    const query = { status:true };

    const [ sum, tipos ] = await Promise.all([
        Tipo_Examen.countDocuments(query),
        Tipo_Examen.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);
  
    res.json({
      sum, 
      tipos
    })
}

const getTipo = async (req, res= response)=>{
    const {id} = req.params
    const tipo=  await Tipo_Examen.findById(id);
    res.json(tipo);
}
const createTipo = async(req,res=response)=>{
    const { status, descripcion, indicacion} =  req.body;
    
    const existTipo =  await Tipo_Examen.findOne({descripcion, indicacion})

    await existTipo.save()
  
    res.status(201).json(existTipo);

}
const updateTipo = async(req,res =  response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const tipoUpdated =  await Tipo_Examen.findByIdAndUpdate(id,data, {new: true} )
    res.json(tipoUpdated);
}
const deleteTipo =  async (req, res= response)=>{
    const {id} = req.params;
    const deletedtipo=  await Tipo_Examen.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedtipo);
}

 module.exports ={
    createTipo,
    getTipo,
    getTipos,
    updateTipo,
    deleteTipo
 }