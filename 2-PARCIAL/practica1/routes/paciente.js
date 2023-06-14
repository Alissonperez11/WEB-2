const { Router } = require('express');
const { check } =  require('express-validator')

const {
    getPacientes, 
    getPaciente,
    createPaciente,
    updatePaciente,
    deletePaciente
} = require('../controllers/paciente');

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getPacientes );

router.get('/:id',
            [ check('id', 'Este no es un ID de Mongo correcto')
            .isMongoId(), 
            validateFields],
getPaciente );


 router.post('/',
        [ check('El nombre del paciente')
        .not()
        .isEmpty().withMessage('no debe estar vacio el campo nombre del paciente'),
        check('identificacion')
        .not()
        .isEmpty().withMessage('No debe estar vacio el campo identificacion'),
        validateFields],
 createPaciente);


 router.put('/:id',
 [  check('id','Debe ser un id de mongo VALIDO').isMongoId(),
 validateFields],
 updatePaciente);

 router.delete('/:id',
 [  check('id','Debe ser un id de mongo VALIDO').isMongoId(),
 validateFields],
 deletePaciente);



module.exports = router;