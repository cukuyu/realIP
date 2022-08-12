const express = require('express')


const app = express()
const expressip = require('express-ip');

app.use(expressip().getIpInfoMiddleware)
app.get('/',(req,res)=>{
    res.json({
        code:200,
        data:req.ipInfo,
        msg: '成功'
    })
})

app.listen(8080,()=>{
    console.log("server start")
})