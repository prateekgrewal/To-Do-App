const express = require("express");
const path = require("path");
const port = 8000;
//requiring connection to the database
const db = require("./config/mongoose");
// requiring the schema 
const PendingTasks = require("./models/pending_tasks");

const app = express();



//using middleware to parse form data
app.use(express.urlencoded());
//specifying the position of statics
app.use(express.static("assets"));

//specifying that we are using ejs
app.set("view engine","ejs");
//specifying where the views will be stored
app.set("views",path.join(__dirname,"views"));

// connecting to the main routes file
app.use("/", require("./routes/index"));



//listener to check if the server has succesfully started 
app.listen(port,function(err){
    if(err){
        console.log("error in starting the server : ",err);
        return;
    }
    console.log("server is active on port: ",port);
});
