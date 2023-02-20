const express    = require('express');
const app        = express();
const db         = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O Express está rodando na porta ${PORT}`);
});

//body parser
app.use(bodyParser.urlencoded({extended: false}));

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

//jobs routes
app.use('/jobs', require('./routes/jobs_routes'));
