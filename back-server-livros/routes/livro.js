const { Router } = require("express")
const { getLivros, getLivro, postLivro, patchLivro } = require("../controllers/livro")

const router = Router()

router.get('/', getLivros) //retorna todos os livros

router.get('/:id', getLivro) //pesquisa com identificador unico - busca por id
// dois pontos indicam que terá um parametro variavel

router.post('/', postLivro)

router.patch('/:id', patchLivro)

router.delete('/', (req, res) => {
    res.send('Você fez uma requisição do tipo DELETE')
})

module.exports = router