module.exports.setFlash = function(req,res,next){
    res.locals.flash = {
        "success" : req.flash("success")
    }
    next();
}