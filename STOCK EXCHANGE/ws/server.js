const {WebSocketServer}=require("ws");
let {subscriber}=require("../shared/server");
const wss=new WebSocketServer({port:8080});
let allSocket=[];

wss.on("connection",(socket)=>{
    console.log("User connected");
    allSocket.push(socket);
    (async function orderBookUpdate(){
    await subscriber.connect();
    subscriber.subscribe("Book_update",(message)=>{
        //broadcasting
        let parsedMessage=JSON.parse(message);
        console.log(parsedMessage);
        broadcast(parsedMessage);
    })
})() // yeh IIFE h immediately invoking function iifii-pronunciation
})

function broadcast(message){
    allSocket.forEach((s)=>{
        let data=JSON.stringify(message)
        s.send(data);
    })
}