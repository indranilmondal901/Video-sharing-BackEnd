const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017';
const dbName = 'Tuner_User_Api';
const uri = url + "/" + dbName;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>
    console.log("mongoDb is connected with Node.JS sucessfully")
).catch((err) =>
    console.log(`failed to connect with mongoDb and error is ${err}`)
)
