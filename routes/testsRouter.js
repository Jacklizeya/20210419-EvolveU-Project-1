const express = require("express") // import the express application object
const testsRouter = express.Router() // This is the sub-test Router

const testsController = require("../controllers/testController") // all function in other module




// I offer 5 Basic APIs here to do basic function
// CRUD --- C
testsRouter.post("/create", testsController.test_create_post)

// CRUD --- R All
testsRouter.get("/read/all", testsController.test_read_all)
// CRUD --- R Single
testsRouter.get("/read/one/:testid", testsController.test_read_one)

// CRUD --- U
testsRouter.post("/update/:testid", testsController.test_update_post)

// CRUD --- D
testsRouter.get( "/delete/:testid", testsController.test_delete_get)

module.exports = testsRouter
