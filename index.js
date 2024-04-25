const express = require('express');
const bodyParse = require("body-parser")
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.post('/api/post-example',function(req,res){
    var body = req.body;
    console.log(body);
    console.log("Dados recebidos: ");
    res.send('Requisição POST bem-sucedida!')
})

app.listen(port,()=>{
    console.log(`Servidor express está rodando na porta ${port}`)
})