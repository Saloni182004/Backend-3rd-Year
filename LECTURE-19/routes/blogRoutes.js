const express=require("express");

const router=express.Router();  //small application
const Blogs=require("../model/user");
const {postAddBlog,getBlog,getOneBlog,deleteOneBlog,updateOneBlog}=require("../controller/blogController");

router.post("/",postAddBlog);
router.get("/",getBlog)
router.get("/blogs/:id",getOneBlog)
router.delete("/:blogId",deleteOneBlog)
router.put("/:blogId",updateOneBlog)

module.exports=router;