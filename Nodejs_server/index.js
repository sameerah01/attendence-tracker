const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes.js');
const cors = require("CORS");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(routes);

app.listen(3001, () => {
    console.log("Server up in port: ", 3000);
})