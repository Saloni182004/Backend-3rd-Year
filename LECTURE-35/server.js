const express=require("express");
const {Queue,Worker}=require("bullmq");
const app=express();
let codeQueue=new Queue("code-queue",{
    connection: {
    host: 'localhost',
    port: 6379,
  },
});
app.use(express.json);
app.use(express.urlencoded({extended:true}));

app.post("/api/submission",async(req,res)=>{
    let {qId,code,language}=req.body;

    //task ko offload kro message queueko taaki worker task perform kr ske na ki main server
    let job=await codeQueue.add("code-queue",{
        qId,code,language
    })
    console.log(job.id)
    console.log(job);
    res.json({
        submissionId:job.id
    })
})

let worker=new Worker("code-queue",function(job){
    console.log(job.data);
    setTimeout(()=>{
        console.log({
            qId:qId,
            status:success,
            time:"4ms",
            beat:"top 10%"
    })
        return{
        qId:qId,
        status:success,
        time:"4ms",
        beat:"top 10%"
    }},5000)
},{
connection: {
    host: 'localhost',
    port: 6379,
  },})
worker.on("error",function(err){
    console.log(err);
})

app.listen(3562,()=>{
    console.log("Server started");
})

//POLLING KRKE LANA GADHI VANSHIKA