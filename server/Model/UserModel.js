const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        require:true,
        timestamps:false
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
     blogs:[{type:mongoose.Types.ObjectId,ref:"Story",require:true,}]
});
module.exports = mongoose.model("User", userSchema)