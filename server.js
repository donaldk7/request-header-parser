var express = require('express')
var app = express()

app.get('/', function(req, res){
    var str = JSON.stringify(req.headers)  
    var json = JSON.parse(str)
    var browserInfo = ''
    browserInfo = '{"IP Address": "' + json["x-forwarded-for"] + '", ' + 
                    '"Language": "' + json["accept-language"].substring(0,5) + '", ' +
                    '"Software": "' + json["user-agent"] + '"}'
    
    
    res.send(browserInfo)

})

app.listen(process.env.PORT || 8080, function(req, res) {
  console.log('Request Header Parser')
})

