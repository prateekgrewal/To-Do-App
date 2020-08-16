const mongoose = require("mongoose");

//defining a schema for the DB
const pendingTaskSchema = new mongoose.Schema({
    description : {
        type : String,
        required : true
    } ,
    category : {
        type : String , 
        required : true
    } , 
    duedate : {
        type : String
    }
});


//creating a collection in the DB named PendingTasks
const PendingTasks = mongoose.model("PendingTasks", pendingTaskSchema);

//exporting the schema
module.exports = PendingTasks;