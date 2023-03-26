const TunerUser = require('../model/Tuner_schema');
const jwt = require('jsonwebtoken');

const auth = async (req,res,next) => {
    try{
        let token = req.body.token;
        console.log("from auth.js==>" + token);
        // if(!token){
        //     res.sendStatus(401);
        // }else{
            const verifyUser = jwt.verify(token,"mnbvcxzasdfhghjkloiuyytreewqplmkonjibhuyv");
            console.log(verifyUser);
            if(!verifyUser){
                res.sendStatus(402);
            }
            const user = await TunerUser.findOne({_id: verifyUser._id});
            // console.log("verified user is ===>" + user);
            req.token = token;
            req.user = user;
        // }
        next()
    }catch (err) {
        return res.status(500).send({
            message:err.message
        })
    }
}

module.exports = auth;