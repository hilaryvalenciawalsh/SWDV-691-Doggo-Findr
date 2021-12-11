const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Status {
    _id: ID
    name: String
  }

  type Breed {
    _id: ID
    name: String
    size: String
   
  }

  type Auth {
    token: ID!
    user: User
  }

  type Dog {
    _id: ID
    name: String
    height: String
    weight: String
    yearOfBirth: Int
    size: String
    status: Status
    imgUrl: String
  }

    type User {
        _id: ID
        userName: String
        email: String
        firstName: String
        lastName: String
        address: String
        city: String
        state: String
        zip: String
        phone: Int
        otherDogs: Int
        noOfKids: Int
        houseOrApartment: String
       
    }

  

module.exports = typeDefs;
