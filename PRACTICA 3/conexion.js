const mongoose = require('mongoose');

const connectionURL= "mongodb+srv://alizerep11:alisson11@cluster0.fc8jodf.mongodb.net/test";

( async ()=>{

try {
    await mongoose.connect(connectionURL); // Conexion a Mongo
    
    const Paciente = mongoose.model("Paciente", { name:String } ); //modelo paciente
    const Tipo_Examen = mongoose.model("Tipo de Examen", { name:String } ); // modelo tipo
    const Resultado =  mongoose.model("Resultado", 
        {
            paciente: Number,
            idpaciente: { type: mongoose.Types.ObjectId , ref:"Paciente" }, // Relacion paciente - resultado
            idtipo_examen: { type: mongoose.Types.ObjectId , ref:"Tipo de Examen" }, //Relacion tipo - resultado
        } 
    );

    // Creacion de Datos 
    
    const paciente =  new Paciente( { name:"Antonio" } );
    const savepaciente = await paciente.save();

    
    const tipo_examen = new Tipo_Examen( { name:"Examen de orina" } );
    const savetipo_examen = await  tipo_examen.save();

    const resultado =  new Resultado(
        {
            idpaciente: savepaciente._id,
            idtipo_examen: savetipo_examen._id
        }
    ); await resultado.save();
    console.log("Datos Guardados")
    

    //Leer Datos

    const result = await Resultado.find({}).populate('idpaciente').populate('idtipo_examen')
    for(const item in result) {
        const actual = result[item];
        console.log(`\nNombre del Paciente: ${actual.idpaciente.name} -  Tipo de Examen: ${actual.idcarrera.name} -  Resultado: ${actual._id}`)
    }

    
  // Eliminacion de Datos 

   await Resultado.findByIdAndDelete('644f328ee5c771c234c4749c')
   console.log(`Resultado eliminado satisfactoriamente`)



    //Actualizacion de Datos 

     const body = { corredor: 13}
     await Resultado.findByIdAndUpdate('644f328fe5c771c234c4749e', body, { new: true })
     console.log(`Resultado actualizado satisfactoriamente`) 

} catch (error) {
    console.log(error.message);       
}
})();
