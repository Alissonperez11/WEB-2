// Exportamos los datos de los arreglos 
const {Paciente, Tipo_Examen, Resultado}= require('./Entidades')

//Definimos una funcion para el Paciente
function buscarIdPaciente(id){
    return new Promise((res, rej) => {
        const paciente = Paciente.find((paciente) => paciente.id === id)
        if(!paciente){
            const error= new Error();
            error.message="Paciente no encontrado";
            rej(error);
        }
        res(paciente)
    })
}

//Definimos una funcion para Tipo de Examen
function buscarIdTipoExamen(paciente){
    return new Promise((res, rej) => {
        const tipo = Tipo_Examen.find((tipo) =>{
            return tipo.id === resultado.IdPaciente
        })
        if(!tipo){
            const error= new Error();
            error.message="El tipo de Examen no fue Encontrado";
            rej(error);
        }
        paciente.tipo= tipo;
        res(paciente)
    })
}

//Definimos una funcion para Resultado
function buscarIdResultado(id){
    return new Promise((res, rej) => {
        const resultado = Resultado.find((resultado) => {
            return resultado.id === id
        })
        if(!resultado){
            const error= new Error();
            error.message="El resultado no fue encontrado";
            rej(error);
        }
        res(resultado)
    })
}

//Realizamos la busquedas y mostramos los arreglos definidos.
let aux = {}
buscarIdResultado(1).then((resultado) => {
    aux = resultado
    return buscarIdPaciente(resultado.IdPaciente)
}).then((paciente) => {
    aux.Paciente = paciente
    delete aux.IdPaciente
    return buscarIdTipoExamen(paciente);
}).then((paciente) => {
    aux.Paciente = paciente
    console.log(aux)
}).catch((error) => {
    console.log(error.message)
})