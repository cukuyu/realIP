const express = require('express')


const app = express()
const expressip = require('express-ip');



app.use(expressip().getIpInfoMiddleware)
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
  });

app.get('/',(req,res)=>{
    res.json({
        code:200,
        data:req.ipInfo,
        msg: '成功'
    })
})

app.listen(8080,()=>{
})