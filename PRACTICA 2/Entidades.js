const Paciente=[
    {
        id:1,
        Nombre:"Alisson",
        Cedula:1310824621
    },
    {
        id:2,
        Nombre:"Antonio",
        Cedula:1303742820
    },
    
    {
        id:3,
        Nombre:"Sara",
        Cedula:1307837638
    },
    
    {
        id:4,
        Nombre:"Angelica",
        Cedula:1314564324
    },
    
    {
        id:5,
        Nombre:"Juan",
        Cedula:1310837346
    },
    
]
const Tipo_Examen=[
    {
        id:1,
        Descripcion:"Examen de orina",
        Indicaciones:"tomar mucha agua"
    },
    {
        id:2,
        Descripcion:"Examen de embarazo",
        Indicaciones:"Hacerse los chequeos"
    },
    {
        id:3,
        Descripcion:"Examen de sangre",
        Indicaciones:"Hacer ejercicio"
    },
    {
        id:4,
        Descripcion:"Examen de eses",
        Indicaciones:"Tomar Enterogermina"
    },
    {
        id:5,
        Descripcion:"Examen de tiroides",
        Indicaciones:"Positivo a Tiroides"
    }
]
const Resultado=[
    {
        id:1,
        idpaciente:1,
        idtipo_examen:1,
        Resultado_examen:"Positivo a Infeccion urinaria",
        Valor_pagado:"20 dolares",
        Observaciones:"Debe tomar mucha agua y no sentarse en lugares calientes",
        
    },
    {
        id:2,
        idpaciente:2,
        idtipo_examen:2,
        Resultado_examen:"Positivo a Embarazo",
        Valor_pagado:"30 dolares",
        Observaciones:"Debe de permanecer en reposo",
    },
    {
        id:3,
        idpaciente:3,
        idtipo_examen:3,
        Resultado_examen:"Resultado de sangre",
        Valor_pagado:"25 dolares",
        Observaciones:" Tomar Hierro",
    },
    {
        id:4,
        idpaciente:4,
        idtipo_examen:4,
        Resultado_examen:"Resultado de eses",
        Valor_pagado:"20 dolares",
        Observaciones:"Tiene gastritis",
    },
    {
        id:5,
        idpaciente:5,
        idtipo_examen:5,
        Resultado_examen:"Positivo a tiroides",
        Valor_pagado:"25 dolares",
        Observaciones:"Tomar pastillas para controlar la tiroide",
    },
]//Exportamos los arreglos 
module.exports= {Paciente, Tipo_Examen, Resultado}