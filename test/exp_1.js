import express from "express"
const app=express();

app.get('/add',(req,res)=>{
    const a=parseInt(req.query.a)
    const b=parseInt(req.query.b)
    if(isNaN(a) || isNaN(b)){
        return res.status(400).json({error:"invalid or no number"})
    }
    res.json({result:a+b})
})

app.get('/sub',(req,res)=>{
    const a=parseInt(req.query.a)
    const b=parseInt(req.query.b)
    if(isNaN(a) || isNaN(b)){
        return res.status(400).json({error:"invalid or no number"})
    }
    res.json({result:a-b})
})
app.get('/mul',(req,res)=>{
    const a=parseInt(req.query.a)
    const b=parseInt(req.query.b)
    if(isNaN(a) || isNaN(b)){
        return res.status(400).json({error:"invalid or no number"})
    }
    res.json({result:a*b})
})
app.get('/div',(req,res)=>{
    const a=parseInt(req.query.a)
    const b=parseInt(req.query.b)
    if(isNaN(a) || isNaN(b)){
        return res.status(400).json({error:"invalid or no number"})
    }
    res.json({result:a/b})
})
app.get('/si',(req,res)=>{
    const p=parseInt(req.query.p)
    const t=parseInt(req.query.t)
    const r=parseInt(req.query.r)
    if(isNaN(p) || isNaN(t) || isNaN(r)){
        return res.status(400).json({error:"invalid or no number"})
    }
    res.json({result: (p*t*r)/100})
})
app.listen(3000,()=>{
    console.log("running")
})