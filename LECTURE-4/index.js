// function buyPurchased(product_Name,cb){
//     setTimeout(()=>{
//         console.log("all i/O Operations are completed and order details are saved.")
//         cb();
//     })
// }
// buyPurchased("Iphone16",function(){
//     console.log("product is purchased");
// })

let product=[{
    name:"Samsung",
    amount:70000,
    quantity:10
},
{
    name:"Iphone16",
    amount:100000,
    quantity:0
}]
function buyPurchased(product_Name,cb){
    let isProduct=product.filter((p)=> p.name==product_Name)[0];
    if(!isProduct){
        return cb("Product is not available",null)
    }
    cb(null,isProduct.amount);

}

let availAmount=300000
function deductbankamount(amount,cb){
    if(amount>availAmount){
        return cb("Insufficient amount")
    }else{
        availAmount-=amount;
        console.log(availAmount)
        cb(null,"amount deducted")
    }
    
}

buyPurchased("Iphone16",function(err,amount){
    //console.log("product is purchased");
    if(err) return console.log(err);
    console.log(amount);
    deductbankamount(amount,function(err,msg){
        if(err) return console.log(err)
            console.log(msg)
    })
})

const fs=require("fs");
fs.readFile("filepath","utf-8",(err,data)=>{
    
})