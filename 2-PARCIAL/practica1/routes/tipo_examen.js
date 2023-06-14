const { Router } = require('express');
const { check } =  require('express-validator')

const {
    getTipos_Examenes, 
    getTipo_Examen,
    createTipo_Examen,
    updateTipo_Examen,
    deleteTipo_Examen
} = require('../controllers/tipo_examen');

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getTipos_Examenes );

router.get('/:id',
            [ check('id', 'Este no es un ID de Mongo correcto')
            .isMongoId(), 
            validateFields],
getTipo_Examen );


 router.post('/',
        [ check('La descripcion del examen')
        .not()
        .isEmpty().withMessage('no debe estar vacio el campo descripcion'),
        check('Indicaciones del examen')
        .not()
        .isEmpty().withMessage('No debe estar vacio el campo las indicaciones'),
        validateFields],
 createTipo_Examen);


 router.put('/:id',
 [  check('id','Debe ser un id de mongo VALIDO').isMongoId(),
 validateFields],
 updateTipo_Examen);

 router.delete('/:id',
 [  check('id','Debe ser un id de mongo VALIDO').isMongoId(),
 validateFields],
 deleteTipo_Examen);



module.exports = router;