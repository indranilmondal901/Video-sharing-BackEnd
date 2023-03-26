const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

//collections
require('./db/connection.js')

//middlewire
app.use(express.json());

const router = require('./rout/rout');
app.use(router)

//listing to server 
// const server = 
app.listen(port, () => {
    console.log("Your Server Is Running On Port no ==>" + port)
})
//for video
// server.timeout = 600000

