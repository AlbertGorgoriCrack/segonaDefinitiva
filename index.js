const express = require('express');

require('dotenv')

const app = express();
const Routes = require('./Routes/routes');

app.use('/api/v1/user', Routes);

app.listen(process.env.PORT || 3000, function () {
console.log("PORT 3000 DISPONIBLE!")
});