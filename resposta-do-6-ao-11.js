/* 6. Crie uma variável chamada diaDaSemana que receba uma 
string "quarta-feira". Usando if/else, 
implemente condicionais para que:
Conteúdos vistos: Tabela verdade, Estrutura Condicional

a. Se nossa variável for: "segunda-feira", "terça-feira", 
"quarta-feira", "quinta-feira" ou "sexta-feira", 
o console.log imprima a seguinte mensagem:
Oba, mais um dia de aprendizado em JavaScript :D

b. Se for algum dia de fim de semana:
“FINALMENTE, descanso merecido”.  */

const diaDaSemana = "quarta-feira"

if (diaDaSemana === "segunda-feira" || diaDaSemana === "terça-feira" ||
diaDaSemana === "quarta-feira" || diaDaSemana === "quinta-feira" ||
diaDaSemana === "sexta-feira"){console.log("Oba, mais um dia de aprendizado em JavaScript :D")}
else if (diaDaSemana === "sabado" || 
diaDaSemana === "domingo"){console.log("FINALMENTE, descanso merecido")} 
else{console.log("Erro, o que digitou não foi um dia de semana, tente novamente!")}


/* 7. Você está num restaurante e quer comer alguma coisa no 
almoço. Então, você diz:

Por favor, me veja uma feijoada E um suco de laranja”

Seria muito triste se você recebesse apenas uma bebida ou só 
uma comida, não é?

Também não seria legal se recebemosssemos a feijoada completa, 
mas a nossa bebida fosse um caldo de cana. 
Porque nosso pedido era de que as duas condições foram atendidas corretamente.

Crie duas variáveis ​​em JS, uma deve conter o prato e outra a 
bebida. Quando o pedido vier certo, seu programa deve 
imprimir a mensagem: "Muito grata pelo almoço!" 
caso não seja o pedido, imprima: 
"Acho que houve um engano com meu pedido" */

let frangoXadrez = true;
let sucoDeLimao = true;

if (frangoXadrez === true && sucoDeLimao === true){console.log("muito grata pelo almoço!")} 
else  {console.log("Acho que houve um engano com meu pedido")}


/* 8. Crie uma constante que receba a nota de uma pessoa 
candidata em um desafio técnico e atribua a ela um valor 
entre 1 e 100. Implemente uma lógica que verifique se 
a pessoa candidata foi aprovada, reprovada ou 
se essa pessoa está na lista de espera .
Para isso, considere as seguintes informações:

Se a nota for maior ou igual a 80, imprima "Parabéns, você faz 
parte do grupo das pessoas aprovadas!".

Se a nota for menor que 80 e maior ou igual a 60, 
imprima "Você está na nossa lista de espera".

Se a nota for menor que 60, imprima "Infelizmente, você reprovou." .

Crie uma estrutura condicional utilizando 
o if, else if e else para criar o seu algoritmo, 
e os operadores lógicos que se aplicam a cada situação. 
Altere o valor da nota para verificar se as condições 
que você implementou funcionam.*/

const nota = 50


if (nota >= 80){console.log("Parabéns, você faz parte do grupo das pessoas aprovadas!")}
else if (nota >= 60){console.log("Você está na nossa lista de espera")}
else {console.log("Infelizmente, você reprovou")}


/* 9. Defina 2 constantes que salvem valores numéricos
 diferentes. Utilize if/else para escrever um 
 código que retorne o maior dos dois números*/

 const numero1 = 50
 const numero2 = 30

 if (50 > 30){console.log(numero1 + " É o maior")}
 else{console.log(numero2 + " É o maior")}


 /* 10. Defina 3 constantes que salvem valores numéricos diferentes. Utilize if/els
 e para escrever um código que retorne o maior de três números.*/


 const a = 20
 const b = 40
 const c = 60

 if (a > b > c){console.log("Então " + a + " é o maior")}
 else if (b > a > c ){console.log("Enatão " + b + " é o maior")}
 else {console.log("Então " + c + " é o maior")}
 

 /* 11. Utilize if/else para escrever um código que defina 
 três números em constantes e retorne true se pelo menos 
 uma das três para par. 
 
 Caso contrário, ele deve retornar false*/


 const d = 3
 const e = 4
 const f = 5

 if (d % 2 === 0 || e % 2 === 0 || f % 2 === 0){console.log(true)} 
 else{console.log(false)}

