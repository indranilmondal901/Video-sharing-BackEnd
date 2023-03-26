const mongoose = require('mongoose');
const url = 'mongodb+srv://10xGroup1:abcd1234@tuner-videosharingproje.g5723nk.mongodb.net/?retryWrites=true&w=majority';
// const dbName = 'Tuner_User_Api';
// const uri = url + "/" + dbName;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>
    console.log("mongoDb is connected with Node.JS sucessfully")
).catch((err) =>
    console.log(`failed to connect with mongoDb and error is ${err}`)
)
