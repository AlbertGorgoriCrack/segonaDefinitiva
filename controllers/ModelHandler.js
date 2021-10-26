
var ModelHandler = {

    helloWorld: function (req, res) {
        const oResponseObj = {msg: `Hello world!`};
        const oResponseStatus = 200;
        res.status(oResponseStatus).send(oResponseObj);
    }
}

module.exports = ModelHandler;