/*  2. Abaixo iremos ver algumas declarações de constantes e variáveis, observe se as declarações estão de acordo com a sintaxe do Javascript. Caso não esteja, corrija, deixando-a válida.
Conteúdos avaliados: variáveis, constantes e seus padrões de nomenclatura

a. algum_nome: Mariana
b. var Nome = 32; 
c. const: idade 40;
d. let profissão = 'desenvolvedor';*/


const algum_nome = "Mariana";
let nome = "Ana";
const idade = 40;
let profissao = "dsesnvolvedor"

console.log(algum_nome);
console.log(nome);
console.log(idade);
console.log(profissao);


/*  3. Vamos fazer algumas operações simples. Queremos imprimir a área
 e a circunferência de um retângulo, 
sabemos que a base do retângulo é 5 e a altura é 8.
Conteúdos observados: operadores aritméticos

Para te ajudar a pensar, escreva em português um algoritmo do que você 
deve fazer para calcular a área de um perímetro. Feito isso, 
escreva um código que calcula uma área e exiba no console.

Exemplo: Quero imprimir o nome de minha gata no console.

1. Meu algoritmo em portugues seria:
  - Criar constante e atribuir a ela o nome de minha gata 
  - Dar um console.log o valor da constante de eu acabei de criar

2. Meu código seria:
  const nomeDaMinhaGata = “Olga”; 
  console.log(nomeDaMinhaGata);
   OBS: no caso ouve um erro e ao inves de circunferencia é perímetro*/

  let base = 5
  let altura = 8
  let calculandoArea = base * altura;
  let calculandoPerimetro = 2 * (base + altura);

  console.log(`a area do retangulo é a base ${base}, vezes a altura ${altura},
  o resultado é ${calculandoArea} e o preimetro é 2 veezs a base + a altura
  que corresponde a ${calculandoPerimetro}`)

  /*4. Sem rodar os códigos, analise tente e identifique quais trechos
   de código terão como saída no console 'Folia' com base nas variáveis ​​declaradas.
Conteúdos vistos: operadores relacionais e estrutura condicional

const a = null;
const b = 20;
const c = true;
const d = '';

Traço 1:

if (b === 20 && c != false && d == 0) 
{console.log('Folia')} 
else {console.log('Descanso')}


Traço 2:

if (a == 0) {
   console.log('Folia')} 
   else {console.log('Descanso')}


   Trecho 3:

if (d) {console.log('Folia')} 
else {console.log('Descanso')}


Trecho 4:

if (b == '20') {console.log('Folia')} 
else {console.log('Descanso')}

Resposta: trecho 4*/


/*5. Observe as variáveis ​​criadas abaixo. Você tem o ano de nascimento 
da Shuri. Usando seus conhecimentos, com base no ano de nascimento, 
calcule a idade dela e exiba da seguinte forma no console.
Conteúdos observados: operadores aritméticos e string

Olá, me chamo Shuri, sou Super Heroína, tenho X anos e tenho algo para
 te dizer: O Pantera Negra vive, e quando ele lutar pelo destino 
 de Wakanda, estarei ao lado dele.

  const nome = "Shuri";
  const anoDeNascimento = 1988;
  const profissao = "Super Heroína";
  const frase = "O Pantera Negra vive, e quando ele lutar pelo destino de Wakanda, estarei ao lado dele.";
⚠️Fique a vontade para cirar novas variáveis, se achar necessário */


const meChamo = "Shuri";
const anoDeNascimento = 1988;
const trabalho = "Super Heroina";
const frase = "O Pantera Negra vive, e quando ele lutar pelo destino de Wakanda, estarei ao lado dele.";
const idadeAtual = 2023 - anoDeNascimento

console.log(`Olá, me chamo ${meChamo}, sou ${trabalho}, tenho ${idadeAtual} anos
e tenho algo pra te dizer: ${frase} `)
