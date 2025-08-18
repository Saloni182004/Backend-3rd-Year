const express=require("express");

const router=express.Router();
const Users=require("../model/userSchema");
const {getAllUsers,getOneUser,postUser}=require("../controller/userController");

router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post("/",postUser);

module.exports=router;