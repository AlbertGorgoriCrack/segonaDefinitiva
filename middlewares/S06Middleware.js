const c = require('../constants/constants');

module.exports.checkNumInt = (req, res, next) => {
    const x = Number.parseInt(req.params.num);
    if (!Number.isNaN(x)) {
        next();
    } else {
        res.status(c.status.badRequest).send({ msg: "No es un numero entero" })
    }
}

module.exports.checkGreater = (req, res, next) => {
    const x = Number.parseInt(req.params.num);
    if (!Number.isNaN(x)) {
        next();
    } else {
        res.status(c.status.badRequest).send({ msg: "No es un numero entero" })
    }
}

module.exports.checkString = (req, res, next) => {
    const x = Number.parseInt(req.params.num);
    if (!Number.isNaN(x)) {
        next();
    } else {
        res.status(c.status.badRequest).send({ msg: "No es un numero entero" })
    }
}