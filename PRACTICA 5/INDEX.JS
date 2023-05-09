const cors = require("cors");
const express  = require("express");

const app =  express();
const PUERTO =  2900;


app.use(cors()).use(express.json())

app.use('/example', express.static(__dirname+'/example') )

let resultado = [];

//Get

app.get('/', (req,res)=>{
    res.status(200).send(
        resultado
    )
})

//Post
app.post('/', (req,res)=>{
    const {body} =  req;
    resultado.push(body);
    res.status(200).send
    ({

    msg:"Resultado insertado correctamente",
        resp: body
    })
})

//Get

app.get('/:id', (req,res)=>{
    const {id} = req.params;
    let resul = resultado.filter(p=>p.id === id);
    if (resul.length > 0){
        res.status(200).send(resul[0]);

    }
    
    res.status(404).send({ 
        msg:"No se puede encontrar el resultado del examen",
    })
})

//Put

app.put('/', (req,res)=>{
    const {id, nombre,resultado_examen, valor, observaciones} = req.body;
    let paciente =  resultado.filter(p=> p.id === id)[0]
    
    paciente.nombre = nombre;
    paciente.resultado_examen = resultado_examen;
    paciente.valor = valor; 
    paciente.observaciones = observaciones;

    res.status(200).send(
        {
            msg:"resultado modificado correctamente",
            response: resultado
        }
    )

})

//Delete

app.delete('/:id', (req,res)=>{
    const {id} =  req.params;
    resultado = resultado.filter(p => p.id !== id);
    res.status(200).send({
        msg:"Se eliminó el resultado con éxito!"
    })
})

//Salida del Puerto

app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo correctamente, acceda a http://localhost:${PUERTO}`)
})