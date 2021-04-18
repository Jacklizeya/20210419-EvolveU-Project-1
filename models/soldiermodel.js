const mongoose = require("mongoose")

// This is a class/function/object as a method
const Schema = mongoose.Schema

const soldierSchema = new Schema({
    nickname : String,
    score : Number  
})

// Based on MDN, model is collection
// model's instance is individual document
const soldierModel = mongoose.model("soldiers", soldierSchema) 
// if not in Atlas, then create one, if in Atlas, then ignore it
module.exports = soldierModel

/*
// new + save
let soldierDocument = new soldierCollection({nickname: "Robot1", score: 0}); soldierDocument.save(function(err) {if (err) {return handleError(err)}})
// create
soldierCollection.create({nickname: "Robot1", score: 0}, function (err, soldierDocument) {if (err) {return handleError(err)}})

console.log(soldierDocument.nickname)

soldierCollection.find({"score": 100}, function (err, soldierDocument) { if (err) {return handleError(err)} })
*/