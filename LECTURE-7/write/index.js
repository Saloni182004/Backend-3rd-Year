let users=[
    {
        name:"Saloni",
        age:24,
        address:"Pinjore"
    },
    {
        name:"Paras",
        age:20,
        address:"Panchkula"
    }
]
// const fs=require("fs");
// fs.writeFile("../users.txt",JSON.stringify(users),function(err){
//     if(err) return console.log(err);
//     console.log("Success");
// })

const fs=require("fs");
const {write}=require("../IOoperation/util");
async function writeFile(filepath, data){
    let message=await write(filepath,data);
    console.log(message)
}
writeFile("../users.txt", users);