const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;

//requiring cookie parse
const cookieParser = require("cookie-parser");
//requiring connection to the database
const db = require("./config/mongoose");
// requiring the schema 
const PendingTasks = require("./models/pending_tasks");
//requiring express session
const session = require("express-session");
//requiring connect flash for flash messages
const flash = require('connect-flash');
//requiring our custom middleware file
const customMware = require("./config/middleware");

const app = express();



//using middleware to parse form data
app.use(express.urlencoded());
//specifying the position of statics
app.use(express.static("assets"));

//using cookie parser
app.use(cookieParser());

//specifying that we are using ejs
app.set("view engine","ejs");
//specifying where the views will be stored
app.set("views",path.join(__dirname,"views"));

//setting up express session
app.use(session({
    name: "notification",
    secret: "prateek",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge : (1000*60*100)
    }
}));
//setting up flash message as a middleware
app.use(flash());
//sending flash message to the locals
app.use(customMware.setFlash);

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
