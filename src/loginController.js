//  const express=require('express')
const loginUtils=require('../src/loginUtils')

function push1(request,response){
    console.log("...data")
    let body = request.body;
    let data=loginUtils.push2(body)
    console.log(data)
    response.send(data)
}
function getData(request,response){
    let data=loginUtils.getData(request.body)
    response.send(data)
}
function edit(request,response){
    let data=loginUtils.editData(request.body)
    response.send(data)
}
module.exports={
    push1,
    getData,
    edit
}