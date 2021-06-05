const mongoose = require("mongoose");
//establishing a connection

const URL = "mongodb+srv://Prateek:prateek@to-do-app.e50qj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(URL, {
    useUnifiedTopology:true,
    useNewUrlParser: true
});
// "mongodb://localhost/to-do-list-db"

//verifying the connection

const db = mongoose.connection;

//to execute if the connection can not be established
db.on("error",console.error.bind(console,"error connecting to DataBase"));
//to execute after the connecting to the db
db.once("open",function(){
    console.log("connected to DataBase");
});

module.exports = db;