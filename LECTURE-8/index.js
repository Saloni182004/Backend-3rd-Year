const express=require('express');
const app = express();

// GET REQUESTS
/*app.get('/', (req, res) => {
  res.send('Hello World');
  res.send("<h1> OK </h1>");
  res.sendFile(__dirname+"/index.html") //hme hmesha absolute path dena hota h jo ki dirname use krke bnta h relative path nhi dete
    res.json({
        name:"Saloni",
        age:21
    })
   res.end("HII");
});*/

//Path Variables
//1. Query parameter
/*app.get("/watch",(req,res)=>{
    //console.log(req.query.v);
    let videoId=req.query.v;
    let nId=req.query.n;
    console.log(videoId,nId);
    res.send("id got it"+videoId+nId);
})*/

//2. Params
app.get("/watch/:v/video/:n",(req,res)=>{
    console.log(req.params.v);
    console.log(req.params.n);
    res.send("got it!!!!")
})

app.listen(3000, ()=>{
    console.log("server started");
});