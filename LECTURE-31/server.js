const { WebSocketServer } =require("ws");

const wss = new WebSocketServer({ port: 8015 });
//event-handler
wss.on("connection",function(socket){
    console.log(socket);
    setInterval(()=>{
        socket.send(Math.random());
    },500);

    socket.on('message', function message(data) {
        console.log('received: %s', data);
    });
})