const { Router } = require("express")
const { getLivros, getLivro } = require("../controllers/livro")

const router = Router()

router.get('/', getLivros) //retorna todos os livros

router.get('/:id', getLivro) //pesquisa com identificador unico - busca por id
// dois pontos indicam que terá um parametro variavel

router.post('/', (req, res) => {
    res.send('Você fez uma requisição do tipo POST')
})

router.patch('/', (req, res) => {
    res.send('Você fez uma requisição do tipo PATCH')
})

router.delete('/', (req, res) => {
    res.send('Você fez uma requisição do tipo DELETE')
})

module.exports = router