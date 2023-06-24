const { Router } = require('express')
const { check } =  require('express-validator')

const { 
    createResultado,
     getResultado, 
     getResultados,
     updateResultado,
     deleteResultado
     } = require('../controllers').Resultado;

const { validateFields } = require('../middlewares')

const router = Router();

///     https://localhost:3000/api/v1/products/

router.get('/', getResultados);

router.get('/:id', [ 
    check('id', 'Este no es un ID de Mongo correcto').isMongoId() 
 ]  , getResultado);

router.post('/crear', 
        [ check('Resultado de examen')
        .not()
        .isEmpty().withMessage('no debe estar vacio el campo resultado de examen'),
        check('valor pagado')
        .not()
        .isEmpty().withMessage('No debe estar vacio el campo valor pagado'),
        check('observacion')
        .not()
        .isEmpty().withMessage('No debe estar vacio el campo observacion'),
         validateFields],
createResultado)

router.put('/actualizar:id', updateResultado)

router.delete('/eliminar:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteResultado)

module.exports = router;