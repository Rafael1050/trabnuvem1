//init server

const express = require('express');
const { getAll, getMain } = require('./controllers/controllerMusica');
const app = express()

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{

    console.log(`SERVIDOR RODANDO NA PORTA ${PORT}`)

});


//routes
const controllersMusica = require('./controllers/controllerMusica');

app.get('/',controllersMusica.getMain);
app.get('/musicas',controllersMusica.getAll);
app.get('/musicas/:id',controllersMusica.getbyID);

app.post('/musicas',controllersMusica.insert);

app.put('/musicas/:id',controllersMusica.atualizar);

app.delete('/musicas/:id',controllersMusica.delete);