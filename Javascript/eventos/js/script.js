//adicionando evento 
const btn = document.querySelector("#meu-botao");

/*Dois argumentos, tipos de evento e função 
que vai acontercer após clicar no evento*/

btn.addEventListener("click", function(){
console.log("Clicou!");
});


// Selecionando campo de entrada e a div de saída

const inputField = document.getElementById(`inputField`);
const output = document.getElementById(`output`);

//Adicionando o evento Keydown ao campo de entrada
//inputField;addEventListener("keydown",function(event){
    //Exibir qual a tecla foi pressionada
    //output.textContent = `Você pressionou: ${event.key}`;

//});
//Esse código a cima também é válido


inputField;addEventListener("keyup",function(event){
    //Exibir qual a tecla foi liberada
    output.textContent = `Você pressionou: ${event.key}`;
});

//Outros eventos de mouse
const eventosMouse=document.querySelector("#mouse");
eventosMouse.addEventListener("mousedown",()=>{
    console.log("Pressionou o Botão do mouse");
});

eventosMouse.addEventListener("mouseup",() =>{
    console.log("Soltou o Botão do mouse");
});
eventosMouse.addEventListener("dblclick", () => {
    console.log("Duplo click");
});

//movimento do mouse 
eventosMouse.addEventListener("mousemove" , (e) => {
    //console.log(`Mouse no eixo x: ${e.x}`);
    //console.log(`Mouse no eixo y: ${e.y}`)
});

//Focus e blur
const input = document.querySelector("#meu-input");

input.addEventListener("focus", (e) =>{
    console.log("Entrou no input");
})
input.addEventListener("blur", (e) =>{
    console.log("Saiu do input");

});