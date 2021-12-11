const Status = require("./Status");
const User = require("./User");

const { Schema, model } = require("mongoose");

const dogSchema = new Schema({
    name: {
        type: String, 
        required: true,
        trim: true
    },
    height: {
        type: String, 
        required: true,
        trim: true
    },
    weight: {
        type: String, 
        required: true,
        trim: true
    },
    yearOfBirth: {
        type: Number        
    },
    story: {
        type: String
    },
    size: {
        type: String,
        required: true,
    },
   
    imgUrl:{
        type: String,
    },
    
})

const Dog = model('Dog', dogSchema);

module.exports = Dog;