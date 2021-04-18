const testCollection = require("../models/testmodel.js") 
//It is an object, sync to cloud, it is also a class function

// This one store all the function to interact with MongoDB Atlas
// following the CRUD Pattern

// CRUD --- C // create through Post

exports.test_create_post = async (req, res) => { 
    const testInfo = req.body;  
    const newtest = new testCollection(testInfo)
    try {await newtest.save(); res.status(201).json(newtest)} 
    catch (error) {res.status(409).json({message: error.message})}
}

// CRUD --- R // 20210410 it is verified working ********************************
exports.test_read_all = async (req, res) => { 
    try {let alltests = await testCollection.find() ;
        res.status(200).json(alltests)} 
        catch (err) {res.status(404).json({message: err.message})}
    }
// 20210410 it is verified working **********************************************
exports.test_read_one = async (req, res) => { 
    let testid = req.params.testid
    try {let thattests = await testCollection.find({_id : testid});  
    res.status(200).json(thattests)} 
    catch (err) {res.status(404).json({message: err.message})}   }


// update with POST  **********************verified that it is working 
exports.test_update_post = async (req, res) => {
    let testid = req.params.testid
    let newtestinfo = req.body // this is a JS object
    try { let response = await testCollection.updateOne({_id : testid}, newtestinfo);  
    res.status(200).json(response.ok? "updated": "nothing deleted")}
    catch (err) {res.status(404).json({message: err.message})}}

// CRUD --- Delete by ID  20210411 verified it is working *******************************
exports.test_delete_get = async (req, res) => { 
    let testid = req.params.testid
    try { let response = await testCollection.deleteOne({_id : testid});  
    res.status(200).json(response) }
    catch (err) {res.status(404).json({message: err.message})}}
 