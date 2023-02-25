/* 1. Siga as instruções descritas abaixo:
Conteúdos observados: constantes e variáveis

Crie uma constante chamada meuNome e atribua a ela o seu nome.
Crie uma constante chamada cidadeNatal e atribua a ela a sua cidade de nascimento.
Crie uma constante chamada anoDeNascimento e atribua a ela o ano em que você nasceu.
Crie uma variável chamada profissão e atribuição a ela a sua profissão.
Utilize o console.log para imprimir as constantes e variáveis ​​que você criou.
Altere o valor da variável profissão para desenvolvedor e tente exibir no console novamente, observe o que acontece.
Atribua um novo valor à constante cidadeNatal e tente exibir no console novamente, observe o que acontece.
Você consegue entender e explicar, com suas palavras, o motivo do erro?
*/
const meuNome = "Carolayne";
const cidadeNatal = "Recife";
const anoDeNascimento = 1996;
let profissao = "confeiteira";

console.log(`Me chamo ${meuNome}, nasce em ${cidadeNatal}, no ano de ${anoDeNascimento} e sou ${profissao}`)

let profissao = "desenvolverdor";

console.log(profissao);

const cidadeNatal = "Olinda"

console.log(cidadeNatal)

/* quando mudei o valor da variavel profissao o console log 
exibiu as duas profissoes, mas quando atribui um novo 
valor a const deu erro, pois o valor da const é fixo;
*/
