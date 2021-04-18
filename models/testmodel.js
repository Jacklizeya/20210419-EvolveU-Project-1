const mongoose = require("mongoose")

// This is a class/function/object as a method
const Schema = mongoose.Schema

const testSchema = new Schema({
    question : String,
    A : String,
    B: String,
    C: String,
    D: String,
    correct: String  
})

// Based on MDN, model is collection
// model's instance is individual document
const testModel = mongoose.model( "tests", testSchema) 
// if not in Atlas, then create one, if in Atlas, then ignore it
module.exports = testModel

/*
// new + save
let testDocument = new testCollection({nickname: "Robot1", score: 0}); testDocument.save(function(err) {if (err) {return handleError(err)}})
// create testCollection.create({nickname: "Robot1", score: 0}, function (err, testDocument) {if (err) {return handleError(err)}})

console.log testDocument.nickname)
 testCollection.find({"score": 100}, function (err, testDocument) { if (err) {return handleError(err)} })
*/