const fs=require("fs");

fs.writeFile("../demo3.txt","FROM        DEMO3",function(err,data){
    if(err) return console.log(err);
    console.log("success!!!");
})

fs.writeFile("../demo4.txt","                  FROM DEMO4",function(err,data){
    if(err) return console.log(err);
    console.log("success!!!");
})

let variable="";

fs.readFile("../demo3.txt","utf-8",function(err,data){
    if(err) return console.log(err);
    variable+=data+"\n";
    fs.readFile("../demo4.txt","utf-8",function(err,data){
        if(err) return console.log(err);
        variable+=data;

        fs.writeFile("../demoFinal.txt",variable,function(err,data){
            if(err) return console.log(err);
            console.log("success!!!");
        })
    })
})