const express = require('express');

require('dotenv').config();
const cors = require('cors')

const app = express();
const Routes = require('./Routes/routes');

const connect = require('./database/database');

connect.createConnection()


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api/v1/user', Routes);

app.listen(process.env.PORT || 3000, function () {
console.log("PORT 3000 DISPONIBLE!")
});