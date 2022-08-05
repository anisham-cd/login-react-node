const express=require('express');
const router=require('./src/router/routes');
const app=express();
const cors=require('cors');
app.use(cors())
const port=process.env.PORT ||3002;
var bodyParser=require('body-parser')
app.use(bodyParser.json());
app.use('/api/v1',router);


app.listen(port,console.log(`server is running in port no ${port}`))