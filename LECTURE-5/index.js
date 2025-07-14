let users=[
    {
        id:1,
        name:"Saloni",
        age:24
    },
    {
        id:2,
        name:"Paras",
        age:18
    }
]
// function isAllowed(id){
//     let user=users.filter((u)=> u.id==id)[0];
//     //return user;
//     if(!user) return console.log("No user found");
//     if(user.age<18) return console.log("cannot vote");
//     return console.log("can vote");
// }
// let userFound=isAllowed(1);
//console.log(userFound);

function isAllowed(id){
    return new Promise((resolve,reject)=>{
        let user=users.filter((u)=> u.id==id)[0];
    //return user;
        if(!user) return reject("No user found");
        if(user.age<18) return reject("cannot vote");
        return resolve("can vote");
    })
}
isAllowed(1).then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
console.log("start");
console.log("bvhjg")