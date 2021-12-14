const express = require('express');
const ModelHandler = require('../controllers/ModelHandler');
const Middleware = require('../middlewares/middlewares');
const S07Handler = require('../controllers/S07Controllers');
const joiMiddle = require('../middlewares/hapiJoi');
const UserSchema = require('../models/joiSchemaUser');
const router = express.Router();

router.get('/getDateActualMil', ModelHandler.getDateActualMil);
router.get('/getDateActual', ModelHandler.getDateActual);
router.get('/getDateActualHoras', ModelHandler.getDateActualHoras);
router.get('/getMultiplicacion/:num', ModelHandler.getMultiplicacion);
router.get('/getFactorial/:num', ModelHandler.getFactorial);

router.get('/randomNum', Middleware.checkNumQueryInteger, ModelHandler.getRandomNumber)
router.get('/randomNum', Middleware.checkNumQueryInteger, ModelHandler.getRandomNumber)

router.post('/addValue', S07Handler.addModel)
router.get('/showObjects', S07Handler.showObjects)
router.put('/updateObjects', S07Handler.updateObjects)
router.delete('/deleteObjects', S07Handler.deleteObjects)

router.post('/create',joiMiddle.validate(UserSchema.createUserSchema,'body'), ModelHandler.create)
//router.get('/profile/:userId?', userController.profile); //El ? en la ruta hace que la Id sea opcionalS

module.exports = router;