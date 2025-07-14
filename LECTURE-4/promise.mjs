// let p=new Promise((resolve,reject)=>{
//     resolve("Wada pura kia")
// })
// console.log(p);
// p.then((data)=>{
//     console.log(data);
// })
// p.catch((err)=>{
//     console.log(err);
// })

let product = [
  { name: "Samsung", amount: 70000, quantity: 10 },
  { name: "Iphone16", amount: 100000, quantity: 2 }
];

function buyProduct(product_Name) {
  return new Promise((resolve, reject) => {
    const found = product.find(p => p.name === product_Name);

    if (found) {
      if (found.quantity > 0) {
        resolve(` ${product_Name} is purchased`);
      } else {
        reject(` ${product_Name} is out of stock`);
      }
    } else {
      reject(` ${product_Name} not found`);
    }
  });
}

buyProduct("Iphone16")
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));

let balance=200000;
function deductMoney(amount){
return new Promise((resolve, reject)=>{
    if(amount>balance){
        reject("insufficient balance");
    }else{
        balance-=amount;
        resolve("Product purchased");
    }
})
}
// buyProduct("Iphone16").then((amount) => deductMoney(amount))
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })
async function doMyTask(){
try{
  let amount=await buyProduct("IPhone16");
  let msg=await deductMoney(amount);
  console.log(msg);
}catch(error){
  console.log(error);
}}
console.log(doMyTask());
console.log("Start");
console.log(doMyTask());