const express = require('express');

require('dotenv').config();
const cors = require('cors')

const app = express();
const Routes = require('./Routes/routes');

const connect = require('./database/database');
const ModelHandler = require('./controllers/ModelHandler');
connect.createConnection()

app.get("/", ModelHandler.getDateActualMil)


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api/v1/user', Routes);

app.listen(process.env.PORT || 3000, function () {
console.log("PORT 3000 DISPONIBLE!")
});