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

function insereLivro (livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const novaListaDeLivros = [...livros, livroNovo]
    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
    // descobriremos qual é o livro da lista livrosAtuais cujo índice possui um id igual ao valor recebido nos parâmetros, o qual enviamos na requisição. Este será o livro que vamos modificar.
    const indiceModificado = livrosAtuais.findIndex( livro => livro.id === id) //indice do elemento que vai modificar
//O comando livrosAtuais[indiceModificado] criará um objeto novo em um índice específico de livrosAtuais com todos os campos que existem neste último. Já o modificacoes consiste em um objeto que possui os campos com os dados a serem alterados.
//Quando realizamos o Spreading de livrosAtuais[indiceModificado], examinamos todos os campos que este item possui e criamos um objeto para cada um deles. Já o Spreading de modificacoes compara os campos modificados com os objetos de livrosAtuais.
//Caso exista um objeto compatível com o campo modificado, ele será substituído pelo conteúdo de modificacoes,mantendo os outros campos inalterados. Caso não haja este objeto, um novo campo será criado.
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }
    livrosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deletaLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const livrosFiltrados =  livros.filter(livro => livro.id !== id)
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
}

module.exports = {
    getTodosLivros,
    getLivrosPorId,
    insereLivro,
    modificaLivro,
    deletaLivroPorId
}