const express=require("express");
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const app=express();
const User=require("./model/users");
const {isLogin}=require("./middleware/token");
const { error } = require("console");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/health",(req,res)=>{
    res.json({
        success:true,
        message:"server running"
    })
})

app.get("/home",isLogin,(req,res)=>{
    console.log(req.user);
    let user=req.user;
    return res.json({
        success:true,
        message:"Welcome" + user.name
    })
})

//signUp
app.post("/api/user/signUp",async(req,res)=>{
    try{
        let {name,email,password}=req.body;
        let userExists=await User.findOne({email:email});
        if(userExists){
            return res.json({
                success:false,
               message:"User already exixts with this email please login"
            })
        }

        let newUser=new User({
            name:name,
                email:email,
        password:password
        })
        await newUser.save();

        res.json({
            success:true,
            message:"User registered successfully please login to continue"
        })
        }catch(error){
            console.log(error.message);
            res.json({
                error:{
                message:error.message
            }
        })
    }
})

app.post("/api/auth/login",async(req,res)=>{
    try{
        let {email,password}=req.body;
        let userExist=await User.findOne({email:email});
        if(!userExist){
            return res.json({
                success:false,
                messgae:"user doenst exists please signUp"
            })
        }
        if(userExist.password!=password){
            return res.json({
                success:false,
                message:"invalid password"
            })
        }
        if(userExist.password==password){
            // let token=jwt.sign({id:userExist._id},"okk")
            let token =jwt.sign({"user":userExist}, "okk")
            return res.json({
                success:true,
                message:"login successfully",
                token:token
            })
        }
        }catch(error){
            console.log(error.message);
            res.json({
                error:{
                    message:error.message
                }
            })
        }
})

app.listen(3080,()=>{
    console.log("Server started");
});

mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
  .then(() => console.log('Connected!'));

