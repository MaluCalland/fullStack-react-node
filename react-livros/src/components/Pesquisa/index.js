import { useEffect, useState } from "react";
import Input from "../Input";
import styled from "styled-components";
import {getLivros} from '../../services/livros.js'
import { postFavoritos } from "../../services/favoritos.js";

const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 470px;
        width: 100%;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {
    //constante com parametros - valor inicial do estado = string vazia
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    const [livros, setLivros] = useState([])

    //recebe 2 parametros: uma funcao da acao a ser feita quando a tela carregar + lista vazia
    useEffect(() => {
        fetchLivros()
    }, [])

    async function fetchLivros() {
        const livrosDaAPI = await getLivros() //salvar os livros
        setLivros(livrosDaAPI) //pegar os livros da API e colocar os liros no nosso estado
    }

    async function insertFavorito(id) {
        await postFavoritos(id)
        alert(`Livro de id: ${id} inserido!`)
    }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
                // onBlur={evento => setTextoDigitado(evento.target.value)} quando digitado no input, o que for escrito aparece no console
            />
            { livrosPesquisados.map( livro => (
                <Resultado onClick={() => insertFavorito(livro.id)}>
                    <img src={livro.src}/>
                    <p>{livro.nome}</p>
                </Resultado>
            )) }
        </PesquisaContainer>
    )
}

export default Pesquisa;