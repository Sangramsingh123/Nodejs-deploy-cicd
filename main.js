const express=require('express');
const dotenv=require('dotenv');
dotenv.config();
const Port= process.env.Port || 8080


const app=express();


app.get('/testing',(req,res)=>{
    return res.send("data fetched ")
});


app.listen(Port,()=>{
console.log("http://localhost:8080")
})