//Dom movimentando-se nele
//console.log(document.body);
console.log(document.body);


console.log(document.body.childNodes);
console.log(document.body.childNodes [1].childNodes);

//propriedade para acessar o elemento do título
console.log(document.body.childNodes[1].childNodes[1].textContent);
//a contagem é somente tags e conteudo  para cessar os elementos
 
 
console.log(document.body.childNodes[1].childNodes[1].textContent);
console.log(document.body.childNodes[5].childNodes[1].textContent);

//para corrigir o retorno do filho do nó , sem os espaços em branco do texto
//ultilize a linha de comando
//dessa forma header estará na posição 0 , mais na posição 1 e footer na 2
console.log(document.body.children);

//alterando para childer, agora ele 
//mostra o conteúdo de texto do footer na posição real que é a posição 2
console.log(document.body.children[2].childNodes[1].textContent);

//selecionando por tags
const listadeItens= document.getElementsByName("li");

console.log(listadeItens);

//selecionando elemento por id

const titulo = document.getElementById("titulo")
console.log(titulo);

//selecionando elementos por class 
const produtos = document.getElementsByClassName("produtos");
console.log(produtos);

//insertBefore
const paragrafo = document.createElement("p");
const header = titulo.parentElement;
header.insertBefore( paragrafo, titulo);

//appendChild
const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");
const a = document.createElement("a");
a.href = "#";
a.textContent = "Blog";
li.appendChild(a);
navLinks.appendChild(li);

//replaceChild

const h2 = document.createElement("h2");
h2.textContent = "Novo Título";
header.replaceChild(h2, titulo);

//criando um nó de texto
const meuTexto = document.createTextNode("Inserindo outro título");
const h3 = document.createElement("h3");
h3.appendChild(meuTexto);
h2.insertAdjacentElement('afterend',h3);

const h3 = document.createElement("h3");
h3.appendChild(meuTexto);
console.log(h3);
 
//setAtribute e getAtribute Inserindo valores 
const primeiroLink = navLinks.querySelector("a");
console.log(primeiroLink);

primeiroLink.setAttribute("href","https://www.oul.com.br/");


//Pegando o link alterado
console.log(primeiroLink.getAttribute("href"));


//abrir um euma nova aba
primeiroLink.setAttribute("target","_blank");

//altura e lagura
const footer = document.querySelector("footer")
console.log(footer.offsetWidth);
console.log(footer.offsetHeight);
console.log(footer.clientWidth);
console.log(footer.clientHeight);

//getClientBouldingRect
const produtos1 = produtos[0];
console.log(produtos1.getBoundingClientRect());
 

//css com js
const mainCss = document.getElementById("main-container");
mainCss.style.color ="red";
mainCss.style.backgroundColor = "#000";
mainCss.style.paddingBottom = "100px";

//HTML Collection
//Fazendo um loop no li e altetrando a cor de fundo 

for(const li of listadeItens){
    li.style.backgroundColor = "yellow";
}





