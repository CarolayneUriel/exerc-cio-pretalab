/* 12. Siga as instruções abaixo:
Conteúdos vistos: operadores relacionais e estrutura condicional

a. Crie uma chamada constante "horarioAtual", que receba um número entre 4 e 24 de sua escolha, para representar as horas do dia. b. Crie uma variável chamada "mensagem" que, inicialmente, é uma string vazia. c. Implemente condicionais para que:

Se o horário for maior ou igual a 22, atribua "Não devemos comer nada, é hora de dormir" na variável "mensagem".
Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "mensagem".
Se o horário for maior ou igual a 14 e menor que 18, digite "Vamos fazer um bolo pro café da tarde?" na variável "mensagem".
Se o horário for maior ou igual a 11 e menor que 14, insira "Hora do almoço!!!" na variável "mensagem".
Se o horário estiver entre 4 e 11, insira "Vamos fazer um bolo pro café da tarde?" na variável "mensagem". d. Por fim, dê um console.log na variável "mensagem".
*/

const horarioAtual = 12
let mensagem = ""

if (horarioAtual >= 11 && horarioAtual < 14){console.log(mensagem = "Hora do almoço!!!" )}
else if (horarioAtual >= 22){console.log(mensagem = "Não deveríamos comer nada, é hora de dormir")}
else if (horarioAtual >= 18 && horarioAtual < 22){console.log(mensagem = "Rango da noite, vamos jantar :D")}
else if (horarioAtual >= 14 && horarioAtual <18){console.log(mensagem = "Vamos fazer um bolo pro café da tarde?")}
else if (horarioAtual >= 4 && horarioAtual < 11){console.log(mensagem = "Humm, cheiro de café recém-passado")}


/* 13. Utilize if/else para escrever um código que converta uma 
nota dada em porcentagem (de 0 a 100) em conceitos de A a F.

Siga essas regras:

Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C 
Porcentagem >= 60 -> D 
Porcentagem >= 50 -> E
Porcentagem < 50 -> F 
O código deve retornar uma mensagem de erro 
se a nota passada for menor que 0 ou maior que 100  */

const nota = 85

if (nota > 100 || nota < 0){console.log("nulo, tente novamente")}
else if (nota >= 90){console.log("A")}
else if (nota >= 80){console.log("B")}
else if (nota >= 70){console.log("C")}
else if (nota >= 50){console.log("E")}
else if (nota < 50 ){console.log("F")}


/* 14. Utilize if/else para escrever um código que se inicie com duas 
constantes declaradas: uma para o custo de um produto e 
outra para o seu valor de venda. A partir desses valores, 
calcule quanto de lucro (valor de venda, 
descontado o custo do produto) a empresa terá ao vender mil desses produtos. 

Seu código também deve mostrar um console com mensagem de erro caso 
algum dos seus valores de entrada seja menor que zero.*/

const valorDoProduto = 8
const valorDeVenda = 17
const lucro = valorDeVenda - valorDoProduto

if(valorDoProduto > 0 && valorDeVenda > 0){console.log("seu lucro na venda de mil unidades foi:" + lucro * 1000)}
else {console.log("valor inválido")}

/* 15. Utilize if/else para escrever um código que define três constantes 
com os valores dos três ângulos internos de um triângulo. 
O programa deve retornar true se os ângulos representarem os ângulos 
de um triângulo e false, caso contrário. 

Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
 Um ângulo será considerado inválido se não tiver um valor positivo*/

const anguloA = 60
const anguloB = 80
const anguloC = 40
const angulosDeUmTriengulo = anguloA + anguloB + anguloC

if (angulosDeUmTriengulo === 180){console.log(true)}
else{console.log(false)}



