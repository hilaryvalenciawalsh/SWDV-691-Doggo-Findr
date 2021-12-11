const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    userName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    firstName: {
        type: String,

    },
    lastName: {
        type: String,

    },
    address: {
        type: String,

    },
    city: {
        type: String,

    },
    state: {
        type: String,

    },
    zip: {
        type: String,

    },
    phone: {
        type: Number,

    },
    otherDogs: {
        type: Number
    },
    noOfKids: {
        type: Number
    },
    houseOrApartment: {
        type: String
    },
   
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;