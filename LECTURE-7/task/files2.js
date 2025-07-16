let users=[
    {
        name:"bdfbdgfb",
        age:24,
        address:"Pinjore"
    },
    {
        name:"fbbgbfgb",
        age:20,
        address:"Panchkula"
    }
]
const fs=require("fs");
fs.writeFile("../users2.txt",JSON.stringify(users),function(err){
    if(err) return console.log(err);
    console.log("Success");
})