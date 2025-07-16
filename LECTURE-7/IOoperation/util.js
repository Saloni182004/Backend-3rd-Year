const fs=require("fs");
function read(){
    return new Promise((resolve,reject)=>{
        fs.readFile("../users.txt","utf-8",function(err,data){
            if(err) return reject(err);
            console.log(data);
            //console.log(data[0]); aise nhi hogaa
            let users=JSON.parse(data);
            resolve(users);
        })
    })
}

function write(filepath, data){
    return new Promise((resolve,reject)=>{
        fs.writeFile(filepath,JSON.stringify(data),function(err){
            if(err) return reject(err);
            resolve("Done");
        })
    })
}

module.exports.read=read;
module.exports.write=write;