const fs=require("fs");
fs.readFile("../users1.txt","utf-8",function(err,data1){
    if(err) return console.log(err);
    let users1=JSON.parse(data1);
    fs.readFile("../users2.txt","utf-8",function(err,data2){
        if(err) return console.log(err);
        let users2=JSON.parse(data2);
        let merge=[...users1,...users2];
        fs.writeFile("../merged.txt",JSON.stringify(merge),function(err){
            if(err) return console.log(err);
            console.log("Third File");
        })
    })
})


