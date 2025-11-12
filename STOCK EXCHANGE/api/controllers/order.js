const OrderBook = require("../service/orderService");
let {publisher}=require("../../shared/server");
// let ob=new OrderBook("BTCUSD");  //global object yeh ik problem h ki isse single market kelie hee bnega or agr hum "symbol" bhejte h toh voh function mein lete h upr nhi la skte

module.exports.postPlaceOrder=async(req,res)=>{
    // to create a new order for user who is placing the order
    let {symbol}=req.query;
    let {side,type,price,quantity,user}=req.body;
    let ob=OrderBook.getOrderBook(symbol);
    //global object islie bnaya h taaki ik hee object bna rhe hr baar nya obj na bne
    let response=ob.placeOrder(side,type,price,quantity,user);
    await publisher.connect();
    publisher.publish("Book_update",JSON.stringify(response.book));
    res.json({
        event:"Orderupdate",
        data:{
            orderReport:response.result,
            book:response.book
        }
    })
    console.log(response);
}

module.exports.getOrderBook=async(req,res)=>{
    let {symbol}=req.query;
    let ob=OrderBook.getOrderBook(symbol);
    let bookSnapShot=ob.getBookSnapshot();
    return res.json(bookSnapShot);
}

module.exports.getRecentTrades=async(req,res)=>{
    let {symbol,limit}=req.query;
    let ob=OrderBook.getOrderBook(symbol);
    let recentTrades=ob.getRecentTrades(limit);
    return res.json(recentTrades);
}