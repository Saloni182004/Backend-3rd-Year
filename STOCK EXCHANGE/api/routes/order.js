const router=require("express").Router();
const {postPlaceOrder,getOrderBook,getRecentTrades}=require("../controllers/order");

router.post("/order",postPlaceOrder);
router.get("/depth",getOrderBook);
router.get("/trades",getRecentTrades);

module.exports=router