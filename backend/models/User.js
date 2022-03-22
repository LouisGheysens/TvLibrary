const mongoose = require("mongoose");
var crypto = require('crypto'); 

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    profilePictureUrl: {
        type: String,
        required: false,
    },
    hash : String, 
    salt : String 
})

//Password hashing
userSchema.methods.setPassword = function(password) { 
    this.salt = crypto.randomBytes(16).toString('hex'); 
    this.hash = crypto.pbkdf2Sync(password, this.salt,  
        1000, 64, `sha512`).toString(`hex`); 
    }; 
    userSchema.methods.validPassword = function(password) { 
        var hash = crypto.pbkdf2Sync(password,  
            this.salt, 1000, 64, `sha512`).toString(`hex`); 
            return this.hash === hash; 
        }; 


const User = mongoose.model('user', userSchema);
module.exports = User;