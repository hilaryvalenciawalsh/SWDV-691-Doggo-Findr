"German Shepard"
"Bulldog"
"Beagle"
"Labrador Retriever"
"Golden Retriever"
"Chihuahua"
"Siberian Husky"
"Dachshund"
"French Bulldog"
"Great Dane"
"Greyhound"
"Rottweiler"
"Dobermann"
"Basenji"
"Giant Schnauzer"
"Maltese"
"Barbet"


const { Schema, model } = require("mongoose");

const breedSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true

    },
    
    size: {
        type: String,
        required: true,
  
    }
})

const Breed = model("Breed", breedSchema);

module.exports = Breed;