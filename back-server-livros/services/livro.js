//responsael pelas conexoes e pelo retorno em meu projeto
//tira-se a responsabilidade de "parsear" arquivso JSON do controller e passamos para os services

const fs = require("fs")

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivrosPorId (id) { //recebe somente o id, que é o que ele buscara no banco de dados
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const livroFiltrado = livros.filter(livro => livro.id === id)[0]
    return livroFiltrado
}

module.exports = {
    getTodosLivros,
    getLivrosPorId
}