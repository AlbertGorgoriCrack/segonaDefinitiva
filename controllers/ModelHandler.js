var date = new Date()

const users = [{
    user: "max"
},{user: "rayo"}];

const status = {
    ok: 200,
    notFound: 404,
    badRequest: 400
}

var ModelHandler = {

    helloWorld: function (req, res) {
        const oResponseObj = {msg: `Hello world!`};
        res.status(status.ok).send(oResponseObj);
    },

    getDateActualMil: function (req, res) {
        const oResponseStatus = 200;
        res.status(oResponseStatus).send({dataActual: date.getTime().toString()});
    },

    getDateActual: function (req, res) {
        res.status(oResponseStatus).send({ dataActual: `${new Date().getDate().toString()}-${new Date().getMonth()+1}-${new Date().getFullYear()}` });
    },

    getDateActualHoras: (req, res) => {
        res.status(status.ok).send({ dataActual: `${new Date().getHours().toString()}:${new Date().getMinutes()+1}:${new Date().getSeconds()}` });
    },

    getMultiplicacion: (req, res) => {
        if (Number.isNaN(req.params.num)) {
            const msg = { ERROR: 'Not number' }
            res.status(status.badRequest).send(msg);
        } else if (req.params.num >= 2 && req.params.num <= 5) {
            const result = multiplicar(req.params.num);
            res.status(status.ok).send(result);
        } else {
            const msg = { ERROR: 'Number out of range' }
            res.status(status.badRequest).send(msg);
        }
    },

    getFactorial: (req, res) => {
        if (req.params.num == null) {
            const msg = { ERROR: 'Envia un numero entero!' }
            res.status(status.badRequest).send(msg);
        } else if (Number.isNaN(req.params.num)) {
            const msg = { ERROR: 'No es un numero' }
            res.status(status.badRequest).send(msg);
        } else if (req.params.num === 0) {
            const msg = { ERROR: 'No es un numero entero' }
            res.status(status.badRequest).send(msg);
        } else {
            const result = factorial(req.params.num);
            res.status(status.ok).send({factorial: result});
        }
    },

    create: (req,res) => {
        const user = req.body;
        user.id = users.length + 1;
        users.push(user);
        res.status(status.ok).send(users)
    },

    getRandomNumber: (req, res) => {
        const nNumber = Math.round(Math.random() * Number.parseInt(req.params.num));
        res.status(status.ok).send({ Number: nNumber });
    }


}

function multiplicar(x) {
    let nums = []
    for (i = 1; i <= 10; i++) {
        nums.push(`${i}*${x}=${i * x}`);
    }
    return nums;
}

function factorial(x) {
    if (x === 0 || x=== 1) {
        return 1;
    }else{
        return x * factorial(x - 1);
    }
    
}



module.exports = ModelHandler;