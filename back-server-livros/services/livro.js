//responsael pelas conexoes e pelo retorno em meu projeto
//tira-se a responsabilidade de "parsear" arquivso JSON do controller e passamos para os services

const fs = require("fs")

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"))
}

module.exports = {
    getTodosLivros
}