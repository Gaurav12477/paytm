const mongoose = require("mongoose");
const { number } = require("zod");
// const { string } = require("zod");
mongoose.connect("mongodb+srv://gauravsharma12477:Gaurav%4012345@cluster0.vcke2cd.mongodb.net/")

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },    
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
});

// Create a model from the schema
const User = mongoose.model('User', UserSchema);


//count Schema
const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, 
    balance: {
        type: Number,
        required: true
    }
})
const Account = mongoose.model('Account', accountSchema)
module.exports = {
	User ,Account
};