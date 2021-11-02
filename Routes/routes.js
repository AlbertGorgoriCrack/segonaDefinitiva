const express = require('express');
const ModelHandler = require('../controllers/ModelHandler');
const router = express.Router();

router.get('/getDateActualMil', ModelHandler.getDateActualMil);
router.get('/getDateActual', ModelHandler.getDateActual);
router.get('/getDateActualHoras', ModelHandler.getDateActualHoras);
router.get('/getMultiplicacion/:num', ModelHandler.getMultiplicacion);
router.get('/getFactorial/:num', ModelHandler.getFactorial);
//router.get('/profile/:userId?', userController.profile); //El ? en la ruta hace que la Id sea opcionalS

module.exports = router;