//ler e escrever arquivos, em que se insere dados no JSON e os lê depois
const fs = require("fs")

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"))
const novoDado = { id:'3', nome: 'Livro mais que demais' }

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado ]))

console.log(JSON.parse(fs.readFileSync("livros.json")))

//readFileSync(): funcao de ler os dados - recebe apenas o caminho até o arquivo
//parse(): transformar
//writeFileSync(): inseririr ou escrever um texto no arquivo - recebe o que sera escrito de fato
//cria uma nova lista escrevendo [] com ...dadosAtuais dentro
//...dadosAtuais: tudo que há em dadosAtuais deve ser colocado na nova lista
//com os dados atuais e os novos que vamos inserir, teremos o writeFileSync() com uma lista nova passando o novoDado também
//JSON.stringfy(): transforma um arquivo de objeto JavaScript e o transformaremos em texto