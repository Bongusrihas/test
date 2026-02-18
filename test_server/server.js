import express from "express"

const app = express()

app.get('/',(req,res)=>{
    res.send("Hello world !!!")
})
app.get('/ajp',(req,res)=>{
    res.send("Ravikanth sir")
})
app.get('/cc',(req,res)=>{
    res.send("godavari madam")
})
app.get('/cns',(req,res)=>{
    res.send("swetha madam")
})
app.get('/se',(req,res)=>{
    res.send("venkatramulu sir")
})
app.get('/dm',(req,res)=>{
    res.send("sushmitha madam")
})
app.get('/uhv',(req,res)=>{
    res.send("soujanya madam")
})
app.listen(3000,()=>{
    res.send("running bro")
})