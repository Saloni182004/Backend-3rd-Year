let {PrismaClient}=require("./generated/prisma");
let prisma=new PrismaClient();
async function addUser(name,email,password){
    let newUser=await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:password
        }
    })
    return newUser;
}

// addUser("Saloni","Saloni@gmail.com","1234").then((data)=>{
//     console.log("User created successfully");
// }).catch((err)=>{
//     console.log("Error");
// })

async function addTweeet(content,userId){
    const newTweet=await prisma.tweet.create({
        data:{
            content:content,
            userId:userId
        }
    })
    return newTweet;
}
addTweeet("This is my first tweet",1).then((data)=>{
    console.log("Tweet add successfully");
}).catch((error)=>{
    console.log("Error");
})

//find all tweet whose userId is 1
async function getOneTweet(userId){
    const oneTweet=await prisma.tweet.findMany({
        where:{
            userId:Number(userId)
        }
    })
    return oneTweet;
}
// getOneTweet(1).then((data)=>{
//     console.log("Tweet",data);
// }).catch((error)=>{
//     console.log("Error");
// })

//user who's id is one wants to update his tweet=> tweet id is 1
async function updateTweet(tweetid,userId,updatedContent){
    let tweet=await prisma.tweet.findUnique({
        where:{
            id:Number(tweetid)
        }
    })
    if(!tweet){
        return "Tweet not exists"
    }
    if(tweet.userId!=Number(userId)){
        return "User cannot update this tweet";
    }
    const updatedTweet=await prisma.tweet.update({
        where:{
            id:Number(tweetid)
        },
        data:{
            content:updatedContent
        }
    })
}
// updateTweet("1","1","updated Tweet").then((data)=>{
//     console.log("Successfully");
// }).catch((error)=>{
//     console.log("Error");
// })

async function deletedTweet(tweetid,userId){
    let tweet=await prisma.tweet.findUnique({
        where:{
            id:Number(tweetid)
        }
    })
    if(!tweet){
        return "Tweet not exists"
    }
    if(tweet.userId!=Number(userId)){
        return "User cannot delete this tweet";
    }
    const deleteTweet=await prisma.tweet.delete({
        where:{
            id:Number(tweetid)
        }
    })
}
// deletedTweet("2","1").then((data)=>{
//     console.log("Deleted successfully");
// }).catch((error)=>{
//     console.log("error");
// })

