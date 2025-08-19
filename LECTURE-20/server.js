const express=require("express");
const app=express();
const {m1,m2}=require("./middleware/firstMiddleware");
const {m3,m4,m5}=require("./middleware/pathlevel");
const userRouters=require("./routes/userRouters");
app.use(express.static(__dirname+"/public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(m1);
// app.use(m2);
app.use("/api/users",userRouters);
app.get("/health",m3,(req,res,next)=>{
    console.log("running controller function");
    next();
    res.json({
        status:"ok",
        message:"Server running ok"
    })
})
app.use(m2);
app.get("/home",m4,(req,res,next)=>{
    console.log("running home endpoint");
    res.json({
        success:true,
        message:"welcome home"
    })
})
app.listen(3000,()=>{
    console.log("SERVER STARTED");
})
//Middleware: function which run on client request before controller function,it can change request object.middleware will run on a order it is called;
//Middleware level:1)Application level:(app.use) This will run on every client request.
//next() or return is not same 
//path level: run only on specific 