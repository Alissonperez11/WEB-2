// Exportamos los datos de los arreglos 

const {Paciente, Tipo_Examen, Resultado}= require('./Entidades')

//Definimos una funcion para el Paciente
async function buscarIdPaciente(id){
    const paciente = Paciente.find((paciente) => {
        return paciente.id === id
    })
    if(!paciente){
        const error = new Error();
        error.message="Paciente no Encontrado";
        throw error;
    }
    return paciente
}

//Definimos una funcion para Tipo de Examen
async function buscarIdTipoExamen(id){
    const tipo = Tipo_Examen.find((tipo) => {
        return tipo.id === id
    })
    if(!tipo){
        const error = new Error();
        error.message="El tipo de Examen no fue Encontrado";
        throw error;
    }
    return tipo
}

//Definimos una funcion para Resultado
async function buscarIdResultado(id){
    const resultado = Resultado.find((resultado) => {
        return resultado.id === id
    })
    if(!resultado){
        const error = new Error();
        error.message="Resultado no encontrado";
        throw error;
    }
    return resultado
}

//Realizamos busquedas y mostramos los arreglos definidos.  
async function main (){
    try{
        const resultpaciente =  await buscarIdPaciente(1)
        const resulttipo =  await buscarIdTipoExamen(resultpaciente.id)
        const resultresultado =  await buscarIdResultado(resultresultado.id)
        resultpaciente.resulttipo = resulttipo
        resulttipo.resultresultado = resultresultado
        console.log(resulttipo)
    }catch (err){
        console.log(err.message)
    }
}main()