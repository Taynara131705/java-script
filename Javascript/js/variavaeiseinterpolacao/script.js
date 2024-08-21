//Comentário de uma linha
/*Comentário de várias linhas*/
//exibindo um número na tela 
console.log(2);

//exibindo o tipo de dado na tela
console.log(typeof 2.5);

//declarando constante e imprimindo
const meunumero = 10;
console.log(meunumero);

//erro alterar a constante
const numero = 5;
//numero = 3;
console.log(numero);

//string ultilizando aspas simples e asplas duplas
console.log('Estou aprendendo Javascript');
console.log("Continue a prendizagem");


//Contagem de Strings
const nome = "Carlos Cunha";
console.log(nome.length);

//Strings de números 
const valores = "589";
console.log(valores);
console.log(typeof valores);


//pular uma linha da strings
console.log("vou pular a linha \n R$50,00");

//Espaçamento na string
console.log("Espaçamento \tna atrings");

//variaveis var e let- var para escopo global- let para escopo local
var numero1= 5;
numero = 3;
console.log(numero1);

let numero2 = 10;
console.log(numero2);
 
//iterpolação
const sobrenome = "Cunha";
console.log( `Olá, ${ sobrenome}`)

const idade = 34;
console.log(`Sua idade é ${idade} anos`);
console.log(  `Seu sobrenome é ${sobrenome}, sua idade é ${idade}`);
