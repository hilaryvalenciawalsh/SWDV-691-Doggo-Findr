const { User, Breed} = require("../models")
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');



const resolvers = {
    Query: {
        me: async (context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            return await User.find();
        },

        breeds: async () => {
            return await Breed.find()
        },

        dogs: async ({ breed, name }) => {
            const params = {};
            if (breed) {
                params.breed = breed
            }
            if (name) {
                params.name = name
            }}}
     

    }

module.exports = resolvers;
