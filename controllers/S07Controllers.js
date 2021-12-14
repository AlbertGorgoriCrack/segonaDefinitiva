

let oModel = require('../models/models');

// import {arrayObjeto} from '../models/models';
// import {status} from '../helper/constants'

const arrayObjeto = [
    {
        id: 1,
        modelo: "Xiaomi",
        precio: 400,
        pulgadas: "44inch",
        ram: 4,
        cpu: "intel"
    }
]

const status = {
    ok: 200,
    notFound: 404,
    badRequest: 400
}

var S07Handler = {
    addModel: (req,res) => {
        const newData = req.body
        if (newData.id && newData.modelo && newData.precio && newData.pulgadas && newData.ram && newData.cpu){
        arrayObjeto.push(req.body)
        res.status(status.ok).send(arrayObjeto);
        }else{
            const msg = "No contiene los elementos necesarios"
            res.status(status.badRequest).send(msg);
        }
    },

    showObjects: (req,res) => {
        if(arrayObjeto){
            res.status(status.ok).send(arrayObjeto);
        }
    },

    updateObjects: (req,res) => {
        const newData = req.body
        console.log(req.body)
        if (newData.id && newData.modelo && newData.precio && newData.pulgadas && newData.ram && newData.cpu){
            arrayObjeto.map(objeto => {
                if (objeto.id === newData.id){
                    objeto = newData;
                }
            })
            res.status(status.ok).send(arrayObjeto);
        }else{
            const msg = "No hay ningun objeto con ese id"
            res.status(status.badRequest).send(msg);
        }
    },

    deleteObjects: (req,res) => {
        const found = arrayObjeto.some(objeto => objeto.id === req.body.id);

        if(!found) {
            const msg = "Not object to delete"
            res.status(status.badRequest).send(msg);
        }else{
            res.status(status.ok).send(arrayObjeto);
        }
        
    }

    
}

module.exports = S07Handler