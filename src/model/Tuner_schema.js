const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    imgfile: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
    },
    profession: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    videoes: [{
        video:{
            vfile : String,
            name: String,
            description: String,
            category: String,
            visibility: String,
        }
    }],
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

//generating Token
userSchema.methods.generateAuthToken = async function () {
    console.log(this)
    try {
        const token = jwt.sign({ _id: this._id.toString() }, "mnbvcxzasdfhghjkloiuyytreewqplmkonjibhuyv"); // uniq , secret(min=>32 ch)
        // console.log(token);
        this.tokens = this.tokens.concat({ token: token })
        await this.save();
        return token;
    } catch (err) {
        console.log("err in generating token==>" + err);
        res.status(500).send(err);
    }
}

//hashing password
userSchema.pre("save", async function (next) {
    // console.log(this);
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10); // salt=10
        // console.log(`the hased password is ${this.password}`);
        next();
    }
    next();
})


const TunerUser = new mongoose.model("TunerUser", userSchema);
module.exports = TunerUser;