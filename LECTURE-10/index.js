const express = require("express");
const app = express();
const fs=require("fs");
app.use(express.static(__dirname+"/public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+"/index.html");
// });

// app.get("/about",(req,res)=>{
//     res.sendFile(__dirname+"/about.html");
// });

app.post("/users",(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    let user={
        username,
        password
    }
    let existStudent=[];
        // res.json({userId, userName});
        fs.readFile("info.txt","utf-8",(err,data)=>{
            if(err) return res.send(err);
            if(data && data.length>0){
                existStudent=JSON.parse(data);
            }
            existStudent.push(user);
            fs.writeFile("info.txt",JSON.stringify(existStudent),(err)=>{
                if(err) return console.log(err);
                res.send("done");
            })
})
})
app.listen(3000,()=>{
    console.log("Server Started");
})
