const fs=require("fs");

fs.writeFile("../demo.txt","g26 Hello",function(err,data){
    if(err) return console.log(err);
    console.log("success!!!");
})

fs.writeFile("../demo2.txt","HELLO SALONI",function(err,data){
    if(err) return console.log(err);
    console.log("success!!!");
})