const loginJson = require('./router/docs/login.json')
const fs = require('fs');
const responseBuilder = require("./responseBuilder")
const { request } = require("https");
const { json } = require('body-parser');

function push2(body) {
  body["id"]=loginJson.length+1;
  body['firstName'] = body.firstName.charAt(0).toUpperCase() + body.firstName.substring(1);
  loginJson.push(body)
  let JsonData = JSON.stringify(loginJson, null, 2)
  fs.writeFile('src/router/docs/login.json', JsonData, (err) => {
    if (err) throw err
  })
  let resp = responseBuilder.success(loginJson);
  return resp;
}
function getData(body) {
  let loginData = [];
  // console.log(body)
  // loginJson.push(body)
  if (!body.id&&!body.firstName && !body.lastName && !body.email && !body.password)
    return responseBuilder.success(loginJson)
  for (let elem of loginJson) {
    if (body.firstName) {
      if (elem.firstName.toLowerCase() == body.firstName.toLowerCase())
        result.push(elem);
    }
  }
  if (body.lastName) {
    if (elem.lastName.toLowerCase() == body.lastName.toLowerCase())
      result.push(elem);
  }
  if (body.email) {
    if (elem.email.toLowerCase() == body.email.toLowerCase())
      result.push(elem);
  }
  if (body.password) {
    if (elem.password.toLowerCase() == body.password.toLowerCase())
      result.push(elem);
  }
  let resp = responseBuilder.success(loginData)
  return resp;
}
function editData(body){
  // if(body.id){
  //  return responseBuilder.error()
  // }
  let result =[];
  if(body.id){
      for(let elem of loginJson){
          if(body.id==elem.id){
              result.push(elem);
              if(body.firstName){
                  elem.firstName=body.firstName;
              }
              if(body.lastName){
                elem.lastName=body.lastName;
            }
             if(body.email){
                  elem.email=body.email;
              }
              if(body.password){
                elem.password=body.password;
            }
            }
          }
        let JsonData = JSON.stringify(loginJson, null, 2)
        fs.writeFile('src/router/docs/login.json', JsonData, (err) => {
          if (err) throw err
        })
        let resp = responseBuilder.success(result);
        return resp;
      
     
  }

}
module.exports = {
  push2,
  getData,
  editData
}
