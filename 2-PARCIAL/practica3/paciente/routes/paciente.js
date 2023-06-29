const { Router } = require('express');
const { check } =  require('express-validator')


const {
    createPaciente,
    getPacientes,
    getPaciente,
    updatePaciente,
    deletePaciente
} = require('../controllers').Paciente;

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getPacientes );
router.get('/:id',
    check('id', 'Este no es un ID de Mongo correcto').isMongoId(),
    getPaciente );

 router.post('/crear', 
        [ check('El nombre del paciente')
        .not()
        .isEmpty().withMessage('no debe estar vacio el campo nombre del paciente'),
        check('identificacion')
        .not()
        .isEmpty().withMessage('No debe estar vacio el campo identificacion'),
        validateFields],
 createPaciente);


 router.put('/actualizar:id', updatePaciente);

 router.delete('/eliminar:id',
 [  check('id','Debe ser un id de mongo VALIDO').isMongoId()
 ], 
deletePaciente);



module.exports = router;