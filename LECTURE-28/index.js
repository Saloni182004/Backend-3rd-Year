const {PrismaClient} = require('./generated/prisma'); 
const prisma = new PrismaClient()
async function addUser(email,name,password){
    await prisma.user.create({
        data:{
            email:email,
            name:name,
            password:password
        }
    })
}
// addUser("user4@gmail.com","user4","user4").then(()=>{
//     console.log(("User added successfully"));
// })

// async function getAllUsers(){
//     let allUsers=await prisma.user.findMany();
//     return allUsers;
// }
// getAllUsers().then((data)=>{
//     console.log(data);
// })

// async function getUserById(id){
//     const userById=await prisma.user.findUnique({
//         where:{
//             id:id
//         }
//     })
//     return userById;
// }
// getUserById(2).then((data)=>{
//     console.log(data);
// })

// async function updateUser(email, data){
//     const updateUser=await prisma.user.update({
//         where:{
//             email:email,
//         },
//         data:data
//     })
//     return updateUser;
// }
// updateUser("user2@gmail.com", {
//     name:"user22",
//     password:"user22"
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

// async function deleteUser(id){
//     const deleteUser=await prisma.user.delete({
//         where:{
//             email:"user2@gmail.com"
//         },
//     })
// }
// deleteUser("user2@gmail.com").then((data)=>{
//     console.log("Deleted successfully");
// })