const fs=require("fs");
console.log("start");

setTimeout(()=>{
    console.log("timer callback")
},0)

setImmediate(()=>{
    console.log("Set immediate callback");
})

function dosometask(){
    return new Promise((resolve,reject)=>{
        resolve("Promise chla")
    })
}

fs.readFile("demo.txt",(data)=>{
    console.log("poll phase callback");
    setTimeout(()=>{
        console.log("Timer 2")
    },0)
    setImmediate(()=>{
        console.log("Immediate2")
    })
})
console.log("end")

dosometask().then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})

process.nextTick(()=>{
    console.log("Next tick")
})