const express = require('express');
const rotaLivro = require("./routes/livro.js")

const app = express(); //minha aplicacao Express - cria uma aplicacao express usando express()

app.use(express.json()) //habilita o uso do body JSON 

app.use("/livros", rotaLivro) 

const port = 8000 //front com porta 3000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})