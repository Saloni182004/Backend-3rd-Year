const express=require("express");
const mongoose=require("mongoose");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const Blogs=require("./model/user")
app.post("/blogs",async(req,res)=>{
    let {title,body}=req.body;
    let newBlog=new Blogs({
        title:title,
        body:body,
        date:Date.now()
    })
    await newBlog.save()
    res.json({
        success:true,
        data:newBlog,
        message:"blog added successfully!!!"
    })
})

app.get("/blogs",async(req,res)=>{
    let allblog=await Blogs.find();
    res.json({
        success:true,
        data:allblog
    })
})

app.get("/blogs/:id",async(req,res)=>{
    let {id}=req.params
    let blog=await Blogs.findOne({_id:id});
    res.json({
        success:true,
        data:blog
    })
})
app.listen(3000,()=>{
    console.log("Server started");
})
+
mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
  .then(() => console.log('Connected!'));



//userSchema ki file bnao model mein (email,username,password) server.js mein teen route bnao userpost krna user get krna or ik user ko get krna 