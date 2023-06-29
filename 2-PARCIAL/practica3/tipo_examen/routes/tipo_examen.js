const { Router } = require('express');
const { check } =  require('express-validator')


const {
    createTipo,
    getTipo,
    getTipos,
    updateTipo,
    deleteTipo
} = require('../controllers').Tipo_Examen;

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getTipos );
router.get('/:id'
,check('id', 'Este no es un ID de Mongo correcto').isMongoId()
 , getTipo);

 router.post('/crear', 
        [ check('La descripcion del examen')
        .not()
        .isEmpty().withMessage('no debe estar vacio el campo descripcion'),
        check('Indicaciones del examen')
        .not()
        .isEmpty().withMessage('No debe estar vacio el campo las indicaciones'),
        validateFields],
  createTipo);


 router.put('/actualizar:id', updateTipo);

 router.delete('/eliminar:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteTipo);



module.exports = router;