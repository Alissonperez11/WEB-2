const { Router } = require('express');
const { check } =  require('express-validator')

const {
    getResultados, 
    getResultado,
    createResultado,
    updateResultado,
    deleteResultado
} = require('../controllers/resultado');

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getResultados );

router.get('/:id',
            [ check('id', 'Este no es un ID de Mongo correcto')
            .isMongoId(), 
            validateFields],
getResultado );


 router.post('/',
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
 createResultado);


 router.put('/:id',
 [  check('id','Debe ser un id de mongo VALIDO').isMongoId(),
 validateFields],
 updateResultado);

 router.delete('/:id',
 [  check('id','Debe ser un id de mongo VALIDO').isMongoId(),
 validateFields],
 deleteResultado);



module.exports = router;