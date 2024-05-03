var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');  

var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(express.static('public'));

// Mantem a landing page
app.get(('/home'), function (req, res) {  
   res.sendFile( __dirname + "/public/pages/" + "home.html" );  
}) 

app.get(('/'), function (req, res) {  
   res.sendFile( __dirname + "/public/pages/" + "home.html" );  
})  

app.get(('/menu'), function (req, res) {  
   res.sendFile( __dirname + "/public/pages/" + "menu.html" );  
})  

app.get(('/op/:parametro'), function (req, res) {  
   res.sendFile( __dirname + "/public/pages/" +`${req.params.parametro}` +".html");
})  


// receber os dados do post
app.post('/process_post/:parametro', urlencodedParser, function (req, res) {  
   // Prepare output in JSON format  
   response = {  
      value1:req.body, 
   };  
   console.log(response)
   console.log(require(__dirname+"/public/js/"+`${req.params.parametro}`+".js")(req.body.input1,req.body.input2))
const arq = require(__dirname+"/public/js/"+`${req.params.parametro}`+".js")

async function main() {
    let resultado = await arq(req.body.input1,req.body.input2);
    res.send(`<p>${resultado}</p>`)
    console.log(resultado);
}
main();
}) 


// Criação do servidor na porta 3000
var server = app.listen(3000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("listen on http://%s:%s", host, port)  
})  