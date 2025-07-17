import axios from 'axios';
//criando api para fazer as chamadas get, post, delete...

//variavel de conexao com a API
const livrosAPI = axios.create({baseURL: "http://localhost:8000/livros"}) //api de livros
//axios.create() - comeca a criar uma API com o axios
//baeURL - deve ser igual a URL onde o Axios vai buscar os dados

//pegar dados - coletar e ler os dados da API
async function getLivros() {
    const response = await livrosAPI.get('/') //retornar os livros

    return response.data
}

export {
    getLivros
}