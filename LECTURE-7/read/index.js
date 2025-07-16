const fs=require("fs");
const {read}=require("../IOoperation/util")
// fs.readFile("../users.txt","utf-8",function(err,data){
//     if(err) return console.log(err);
//     console.log(data);
//     //console.log(data[0]); aise nhi hogaa
//     let users=JSON.parse(data);
//     console.log(users[0]);
// })

async function readFile(filepath){
    let data=await read(filepath);
    console.log(data);
}
readFile("../users.txt");
