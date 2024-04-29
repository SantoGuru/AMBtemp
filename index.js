var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');  

// application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(express.static('public'));

// Mantem a landing page
app.get(('/home'), function (req, res) {  
   res.sendFile( __dirname + "/" + "home.html" );  
}) 

app.get(('/'), function (req, res) {  
   res.sendFile( __dirname + "/" + "home.html" );  
})  


// receber os dados do post
app.post('/process_post', urlencodedParser, function (req, res) {  
   // Prepare output in JSON format  
   response = {  
       first_name:req.body,  
       last_name:req.body  
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
}) 


// Criação do servidor na porta 3000
var server = app.listen(3000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("listen on http://%s:%s", host, port)  
})  