const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId:String,
})

mongoose.model("users",userSchema);


// username:String,
// picture:String