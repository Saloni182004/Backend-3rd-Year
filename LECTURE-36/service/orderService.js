class OrderBook{
    constructor(symbol="BTCUSD"){  //new OrderBook=new OrderBook("BTCUSD") {bracket ke andr vali cheez symbol h}
        this.symbol=symbol,
        this.bids=[],
        this.ask=[],
        this._nextId=1,      //if a function or variable start with _ (private) iska koi kaam nhi h bs ik naming comvention h ki yeh private h
        this.lastTradedPrice=null
    }

    _genOrder(){
        return this._nextId++;
    }

    _sort(sides){
        if(sides==="BUY"){
            this.bids.sort((a,b)=>{
                if(a.price!=b.price){
                    return b.price-a.price;
                }
                return a.timestamp-b.timestamp;
            });    //sort use krte time comparator dena hota h sort function mein (desc mein krne kelie b-a hota h asc mein a-b)
        }else{
            this.ask.sort((a,b)=>{
                if(a.price!=b.price){
                    return a.price-b.price;
                }
                return a.timestamp-b.timestamp;
            });
        }
    }

    placeOrder(){

    }

    _marketMatch(){

    }

    _limitOrder(){

    }
}

let BTCUSDOrderBook=new OrderBook()

BTCUSDOrderBook.bids.push({orderId:2,side:"BUY",type:"MARKET",price:100,quantity:10,timestamp:Date.now(),user:"Saloni"});
BTCUSDOrderBook.bids.push({orderId:2,side:"BUY",type:"MARKET",price:95,quantity:10,timestamp:Date.now(),user:"Sanam"});
BTCUSDOrderBook.bids.push({orderId:2,side:"BUY",type:"MARKET",price:101,quantity:10,timestamp:Date.now(),user:"Vanshika"});
BTCUSDOrderBook.bids.push({orderId:2,side:"BUY",type:"MARKET",price:90,quantity:10,timestamp:Date.now(),user:"Keshav"});
BTCUSDOrderBook.bids.push({orderId:2,side:"BUY",type:"MARKET",price:92,quantity:10,timestamp:Date.now(),user:"Sneha"});

BTCUSDOrderBook._sort("BUY");
console.log(BTCUSDOrderBook.bids);

BTCUSDOrderBook.ask.push({orderId:2,side:"SELL",type:"MARKET",price:100,quantity:10,timestamp:Date.now(),user:"Saloni"});
BTCUSDOrderBook.ask.push({orderId:2,side:"SELL",type:"MARKET",price:95,quantity:10,timestamp:Date.now(),user:"Sanam"});
BTCUSDOrderBook.ask.push({orderId:2,side:"SELL",type:"MARKET",price:101,quantity:10,timestamp:Date.now(),user:"Vanshika"});
BTCUSDOrderBook.ask.push({orderId:2,side:"SELL",type:"MARKET",price:90,quantity:10,timestamp:Date.now(),user:"Keshav"});
BTCUSDOrderBook.ask.push({orderId:2,side:"SELL",type:"MARKET",price:92,quantity:10,timestamp:Date.now(),user:"Sneha"});

BTCUSDOrderBook._sort("SELL");
console.log(BTCUSDOrderBook.ask);