const { request } = require("express");
const c = require('../constants/constants')
let oModel = require('../models/models')

module.exports = {
    randomNum: (req, res) => {
        const sol = Math.round(Math.random() * Number.parseInt(req.params.num));
        res.status(c.status.ok).send({ Number: sol });
    },

    ex2: () => {
        let arr = [2,3,8,]
    }

    
}