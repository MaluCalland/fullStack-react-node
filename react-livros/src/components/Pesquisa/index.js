import { useState } from "react";
import Input from "../Input";
import styled from "styled-components";

const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
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

function Pesquisa() {
    //constante com parametros - valor inicial do estado = string vazia
    const [textoDigitado, setTextoDigitado] = useState('');

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => setTextoDigitado(evento.target.value)} //quando digitado no input, o que for escrito aparece no console
            />
            <p>{textoDigitado}</p>
        </PesquisaContainer>
    )
}

export default Pesquisa;