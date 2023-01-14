// Use command "!mdbgum"
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Declare the Schema of the Mongo model
let userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min: 3,
        max: 30,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        max: 50,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        min: 8,
        max: 50,
    },
    role: {
        type: String,
        default: "user",
    },
});


// Hashing password
userSchema.pre('save', async function (next) { 
    const salt = bcrypt.genSaltSync(20);
    this.password = await bcrypt.hash(this.password, salt);
});

//validate password
userSchema.methods.isPasswordMatched = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};


//Export the model
module.exports = mongoose.model('User', userSchema);