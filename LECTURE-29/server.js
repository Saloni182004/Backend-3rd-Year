const express=require("express");
const {PrismaClient}=require("./generated/prisma");
const app=express();
const prisma=new PrismaClient();

app.use(express.json());

//CREATE USER
app.post("/users",async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const newUser=await prisma.user.create({
            data:{
                name:name,
                email:email,
                password:password
            }
        });
        res.json({
            success:true,
            message:"User created successfully",
            data:newUser
        });
    }catch(error){
        res.json({
            success:false,
            message:"User not created due to some error"
        });
    }
});

//GET ALL USERS
app.get("/users",async(req,res)=>{
    const users=await prisma.user.findMany({
        include:{
            tweet:true
        }
    });
    res.json({
        success:true,
        message:"User fetched successfully",
        data:users
    });
})

//GET USER BY ID
app.get("/users/:id",async(req,res)=>{
    const {id}=req.params;
    const oneUser=await prisma.user.findUnique({
        where:{
            id:Number(id)
        },
        include:{
            tweet:true
        }
    });
    if(!oneUser){
        res.json({
            success:false,
            message:"User not found"
        })
    }
    res.json({
        success:true,
        message:"User found successfully",
        data:oneUser
    });
})

//UPDATE USER
app.put("/users/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const {name,email,password}=req.body;
        const updatedUser=await prisma.user.update({
            where:{
                id:Number(id)
            },
            data:{
                name:name,
                email:email,
                password:password
            }
        });
        res.json({
            success:true,
            message:"User updated successfully",
            data:updatedUser
        });
    }catch(error){
        res.json({
            success:false,
            message:"User not found"
        });
    }
})

//DELETE USER
app.delete("/users/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const deletedUser=await prisma.user.delete({
            where:{
                id:Number(id)
            }
        })
        res.json({
            success: true, 
            message: "User deleted successfully!" ,
            data:deletedUser
        });
    } catch (error) {
        res.json({ 
            success: false,
            message: "User not found" });
    }
})

//CREATE TWEET
app.post("/tweets",async(req,res)=>{
    try{
        const {content,userId}=req.body;
        const user=await prisma.user.findUnique({ 
            where:{ 
                id: Number(userId) 
            }
        });
        if(!user){ 
            return res.json({
                success: false, 
                message: "User not found" 
            });
        }
        const newTweet=await prisma.tweet.create({
            data:{
                content:content,
                userId:Number(userId)
            }
        });
        res.json({
            success:true,
            message:"Tweet created successfully",
            data:newTweet
        });
    }catch(error){
        res.json({
            success:false,
            message:"Tweet not created"
        });
    }
})


//GET ALL TWEETS
app.get("/tweets", async (req, res) => {
    try{
        const tweets = await prisma.tweet.findMany({
        include: {  
            user: true 
        }
    });
    res.json({ 
        success: true,  
        data: tweets });
    }catch(error){
        res.json({
            success:false,
            message:"Tweet not found"
        });
    }
});

//GET TWEET BY ID
app.get("/tweets/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const oneTweet = await prisma.tweet.findUnique({
      where: { id: Number(id) },
      include: { user: true }
    });

    if (!oneTweet) {
      return res.json({
        success: false,
        message: "Tweet not found"
      });
    }

    res.json({
      success: true,
      message: "Tweet fetched successfully",
      data: oneTweet
    });
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: "Error fetching tweet"
    });
  }
});

//UPDATE TWEET
app.put("/tweets/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const { userId, content } = req.body;

        const tweet = await prisma.tweet.findUnique({ 
            where: {
                id: Number(id) 
            }
        });
        if (!tweet) {   
            return res.json({ 
                success: false, 
                message: "Tweet not exists" 
            });
        }

        if (tweet.userId !== Number(userId)) {
            return res.json({   
                success: false,     
                message: "User not authorized to update this tweet" });
        }

        const updatedTweet = await prisma.tweet.update({
            where: {
                id: Number(id)
            },
            data:{content }
        });
        res.json({  
            success: true, 
            message: "Tweet updated successfully",
            data: updatedTweet });
    }catch(error){
        res.json({
            success:false,
            message:"Error"
        })
    }
});

//DELETE TWEET
app.delete("/tweets/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const { userId } = req.body;

        const tweet = await prisma.tweet.findUnique({ 
            where: {
                id: Number(id) 
            }
        });
        if (!tweet) {
            return res.json({ 
                success: false,
                message: "Tweet not exists" 
            });
        }

        if (tweet.userId !== Number(userId)) {
            return res.json({   
                success: false, 
                message: "User not authorized to delete this tweet" 
            });
        }

        await prisma.tweet.delete({ 
            where: {    
                id: Number(id) 
            }
        });
        res.json({ 
            success: true, 
            message: "Tweet deleted successfully!",
        });
    }catch(error){
        res.json({
            success:false,
            message:"Error"
        })
    };
});

app.listen(3056,()=>{
    console.log("Server started");
})