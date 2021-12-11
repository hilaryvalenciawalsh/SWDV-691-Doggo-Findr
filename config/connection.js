const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hilaryvalenciawalsh@cluster0.gkr59.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' || 'mongodb://localhost/dog-adoption',
        err => {
                if (err) throw err;
                console.log('Connected to MongoDB!!!')
        });

module.exports = mongoose.connection;