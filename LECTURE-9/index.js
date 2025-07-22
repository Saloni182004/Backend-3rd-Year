const express=require("express");
const fs=require("fs");
const app=express();
app.use(express.json());
// app.get("/",(req,res)=>{
//     res.send("HII");
// });
// app.listen(3000,()=>{
//     console.log("Server Started");
// })
 
app.post("/video",(req,res)=>{
    /*-----------------------------------------------------
    let{userId, userName}=req.body;
    res.json({userId, userName});
    console.log(req.body);
    // let student={
    //     studentId:userId,
    //     studentName:userName
    // }
    fs.writeFile("./info.txt",JSON.stringify({userId,userName}),function(err){
        if(err) return console.log(err);
        else console.log("Done");
    })
    -------------------------------------------------------------*/
    let{userId, userName}=req.body;
      const student={
            userId,
            userName
        }
    let existStudent=[];
    // res.json({userId, userName});
    fs.readFile("info.txt","utf-8",(err,data)=>{
        if(err) return res.send(err);
        if(data && data.length>0){
            existStudent=JSON.parse(data);
        }
        existStudent.push(student);
        fs.writeFile("info.txt",JSON.stringify(existStudent),(err)=>{
            if(err) return console.log(err);
            res.send("done");
        })
    })
})
app.listen(3000,()=>{
    console.log("Server Started");
})
