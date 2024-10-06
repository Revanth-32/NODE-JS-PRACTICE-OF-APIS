function otp(n){
    var otp = ""
    for(i=0;i<n;i++){
        var a = Math.floor(Math.random()*10)
        otp += a
    }
    return otp
}

module.exports={
    otp
}