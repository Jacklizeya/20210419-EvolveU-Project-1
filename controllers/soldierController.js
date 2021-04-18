const soldierCollection = require("../models/soldiermodel.js") 
//It is an object, sync to cloud, it is also a class function

// This one store all the function to interact with MongoDB Atlas
// following the CRUD Pattern

// CRUD --- C // create through Post

exports.soldier_create_post = async (req, res) => { 
    const soldierInfo = req.body;  
    const newSoldier = new soldierCollection(soldierInfo)
    try {await newSoldier.save(); res.status(201).json(newSoldier)} 
    catch (error) {res.status(409).json({message: error.message})}
}

// CRUD --- R all// 20210410 it is verified working ********************************
exports.soldier_read_all = async (req, res) => { 
    try {let allSoldiers = await soldierCollection.find() ;
        res.status(200).json(allSoldiers)} 
        catch (err) {res.status(404).json({message: err.message})}
    }
// 20210410 R by Id  it is verified working **********************************************
exports.soldier_read_oneById = async (req, res) => { 
    let soldierid = req.params.soldierid
    try {let thatSoldiers = await soldierCollection.find({_id : soldierid});  
    res.status(200).json(thatSoldiers)} 
    catch (err) {res.status(404).json({message: err.message})}   }

// 20210410 R by nickname  it is verified working **********************************************
exports.soldier_read_oneByName = async (req, res) => { 
    let soldiernickname = req.query.nickname
    try {let thatSoldiers = await soldierCollection.find({nickname: soldiernickname});  
    res.status(200).json(thatSoldiers)} 
    catch (err) {res.status(404).json({message: err.message})}   }

// update with POST  **********************verified that it is working 
exports.soldier_update_post = async (req, res) => {
    let soldierid = req.params.soldierid
    let newSoldierinfo = req.body // this is a JS object
    try { let response = await soldierCollection.updateOne({_id : soldierid}, newSoldierinfo);  
    res.status(200).json(response.ok? "updated": "nothing deleted")}
    catch (err) {res.status(404).json({message: err.message})}}

// CRUD --- Delete by ID  20210411 verified it is working *******************************
exports.soldier_delete = async (req, res) => { 
    let soldierid = req.params.soldierid
    try { let response = await soldierCollection.deleteOne({_id : soldierid});  
    // There is a default reponse from MongoDB Atlas in its own format
    res.status(200).json("deleted count: " + response.deletedCount.toString())}
    catch (err) {res.status(404).json({message: err.message})}}
