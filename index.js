const express = require('express');

require('dotenv')

const app = express();

const ModelHandler = require('./controllers/ModelHandler');
const Routes = require('./Routes/routes');

app.get('/', ModelHandler.helloWorld);
// app.use('/api/v1/user', Routes)
app.listen(process.env.PORT || 3000, function () {
console.log("PORT 3000 DISPONIBLE!")
});