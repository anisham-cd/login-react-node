
function success(data){
    let value={
        "code":200,
        "message":"request was successfull",
        "data":data
    }
    return value;
}
function error(){
    let value={
        "code":400,
        "message":"request failed",
    }
    return value
}

module.exports={
    success,error
}