const express = require('express');
const rotaLivro = require("./routes/livro.js");
const rotaFavorito = require("./routes/favoritos.js");

const cors = require('cors');

const app = express(); //minha aplicacao Express - cria uma aplicacao express usando express()
app.use(express.json()) //habilita o uso do body JSON 
app.use(cors({ origin: "*" }))

app.use("/livros", rotaLivro)
app.use("/favoritos", rotaFavorito) 

const port = 8000 //front com porta 3000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})