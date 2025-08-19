
function m1(req,res,next){
    console.log("Running m1");
    req.userId="4";
    next();
    console.log("after m1");
}
function m2(req,res,next){
    console.log("running m2");
    console.log(req.userId);
    req.isAdmin=true;
    next();
    console.log("after m2");
}
module.exports.m1=m1;
module.exports.m2=m2;