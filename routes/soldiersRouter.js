const express = require("express") // import the express application object
const soldiersRouter = express.Router() // This is the sub-soldier Router

const soldiersController = require("../controllers/soldierController") // all function in other module





// I offer 5 Basic APIs here to do basic function
// CRUD --- C
soldiersRouter.post("/create", soldiersController.soldier_create_post)

// CRUD --- R All
soldiersRouter.get("/read/all", soldiersController.soldier_read_all)
// CRUD --- R Singeby ID
soldiersRouter.get("/read/oneById/:soldierid", soldiersController.soldier_read_oneById)

// CRUD --- R Singeby nickname
soldiersRouter.get("/read/oneByName/", soldiersController.soldier_read_oneByName)

// CRUD --- U
soldiersRouter.post("/update/:soldierid", soldiersController.soldier_update_post)

// CRUD --- D
soldiersRouter.delete( "/:soldierid", soldiersController.soldier_delete)

module.exports = soldiersRouter

