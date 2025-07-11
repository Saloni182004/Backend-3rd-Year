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
  { name: "Iphone16", amount: 100000, quantity: 0 }
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

  // deductamount ka 