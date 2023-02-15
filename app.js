const express    = require('express');
const app        = express();
const db = require('./db/connection')

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O Express está rodando na porta ${PORT}`);
});

//conexão com o bando de dados
db.authenticate()
.then(()=>{console.log("Conectou ao BD!")})
.catch(err =>{
    console.log("ocorreu um erro ao conectar com o BD", err);
});

//rotas
app.get('/', (req, res) => {
    res.send("Está funcionando");
});

