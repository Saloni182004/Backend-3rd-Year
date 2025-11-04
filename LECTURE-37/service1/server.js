let {createClient}=require("redis");
let client=createClient();

async function notify(){
    await client.PUBLISH("notify-me",JSON.stringify({
        event_id:1,
        message:"IPhone back in stock"
    }))
}

setTimeout(()=>{
    notify();
},2000);

client.connect()
.then(()=>console.log("Redis connected"));