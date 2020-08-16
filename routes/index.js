const express = require("express");
//calling the express router
const router = express.Router();

//connecting to the controllers file(importing)
const listController = require("../controllers/list_controller");

//home route
router.get("/",listController.home);
//route to create tasks(after clicking on add task)
router.post("/create-task",listController.createtask);
//route to mark a task completed(deleting it from DB)
router.get("/complete-task",listController.complete);

//to export the file so that it can be used in main server file
module.exports = router ; 