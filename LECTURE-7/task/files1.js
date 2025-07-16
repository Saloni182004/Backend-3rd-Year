let users=[
    {
        name:"svsdv",
        age:24,
        address:"Pinjore"
    },
    {
        name:"dvsd",
        age:20,
        address:"Panchkula"
    }
]
const fs=require("fs");
fs.writeFile("../users1.txt",JSON.stringify(users),function(err){
    if(err) return console.log(err);
    console.log("Success");
})
