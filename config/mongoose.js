const mongoose = require("mongoose");
//establishing a connection
mongoose.connect("mongodb://localhost/to-do-list-db");

//verifying the connection

const db = mongoose.connection;

//to execute if the connection can not be established
db.on("error",console.error.bind(console,"error connecting to DataBase"));
//to execute after the connecting to the db
db.once("open",function(){
    console.log("connected to DataBase");
});

module.exports = db;