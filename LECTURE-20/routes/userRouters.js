const express=require("express");
const router=express.Router();
const {m3}=require("../middleware/pathlevel");
router.use(m3);
router.post("/",(req,res)=>{
    res.json({
        success:true,
        message:"user added"
    })
});

router.get("/",(req,res)=>{
    res.json({
        success:true,
        message:"all users data fetched successfully"
    })
})

router.get("/:id",(req,res)=>{
    res.json({
        success:true,
        message:"one user fetched"
    })
})
module.exports=router;