var http = require('http');
var {otp} = require("./otp")
var url = require("url")

console.log(otp)

var server = http.createServer((req,res)=>{
   
    var parsed = url.parse(req.url,true);

    console.log(parsed.pathname);  
    
    console.log(parsed.query)
``
    if(req.method=="GET"){ 
        var obj = {
            "otp":otp(6)
        }
        res.write(JSON.stringify(obj))
        res.end()
    }else{
        var obj = {
            "otp":otp(3)
        }
        res.write(JSON.stringify(obj))
        res.end()
 }
})

    server.listen(3001,()=>{
        console.log("connected")
    
})
