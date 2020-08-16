const PendingTasks = require("../models/pending_tasks");

//function for home route
module.exports.home = function(req,res){
//    send the db file from here to the page in an array
   PendingTasks.find({},function(err,documents){
        if(err){
            console.log("the documents could not be fetched");
            return;
        }
        return res.render("home",{
            task_list : documents
        });
   });
    
}


//function to create a new task
module.exports.createtask = function(req,res){
    let year="";
    let month = "";
    let month_no = "";
    let monthly_date = "";
    let month_arr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    // changing format of the date
    for(let i=0;i<=3;i++){
        year = year + req.body.duedate[i];
    }
    for(let i=5;i<=6;i++){
        month_no = month_no + req.body.duedate[i];
    }
    //converting month from numbers to the name of the month
    for(let i=1;i<=12;i++){
        if(parseInt(month_no) == i){
            month = month_arr[i-1];
        }
    }
    for(let i=8;i<=9;i++){
        monthly_date = monthly_date + req.body.duedate[i];
    }
    
    //changing the format
    req.body.duedate = month + " " + monthly_date + ", " + year ;

    //sending the data to the DB
    PendingTasks.create({
    description : req.body.description,
    category : req.body.category,
    duedate : req.body.duedate
},function(err, newentry){
    if(err){
        console.log("error in adding new entry to the database");
        return res.redirect("back");
    }
    return res.redirect("back");
});
   
};

//function to delete the completed task from the DB
module.exports.complete = function(req,res){
    let id = req.query.id;
    console.log(id);
    //Deleting by using id 
    PendingTasks.findByIdAndDelete(id,function(err){
        if(err){
            console.log("error in deleting from database");
            return;
        }
        return res.redirect("back");
    })



   
}