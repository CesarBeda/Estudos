//Spread ...

/* let n1=[10,20,30];
let n2=[11,22,33,44,55];
let n3=[n1,n2];

console.log('n1: '+ n1);
console.log('n2: '+ n2);
console.log('n3: '+ n3); */


/* const player1 = {nome:'Cesar', energia: 100, vidas: 3}
const player2 = {nome:'John', energia: 100, vidas: 5}
const player3 = {...player1, ...player2}  //pega as propriedades dos segundo pois são as mesmas

console.log(player3); */

/* const player1 = {nome:'Cesar', energia: 100, vidas: 3, magia: 150}
const player2 = {nome:'John', energia: 100, vidas: 5, velocidade:80}
const player3 = {...player1, ...player2}  //pega as propriedades comuns e incomuns

console.log(player3); */

/* const soma=(v1, v2, v3)=>{
    return v1+v2+v3;
}

let valores=[6,8,4];

console.log(soma(valores)); 
console.log(soma(...valores)); //espalhando os valores */

const objs1 = document.getElementsByTagName("div");
const objs2 = [...document.getElementsByTagName("div")];

/* objs1.forEach(element => {
    console.log(element); //retorna erro de tipagem pois objs é um html collection
}); */

objs2.forEach(element => {
    // console.log(element);
    element.innerHTML='curso'
});

console.log(objs1);
console.log(objs2);