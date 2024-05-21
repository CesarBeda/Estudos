"use strict";
//Arrays e ReadOnly Array
let numeros = [20, 30, 40];
//let valores:Array<number | string> = [10, 20, 30, "oitenta"]; union types
//let valores:number|string[] = [10, 20, 30, "oitenta"]; unitypes outro tipo de declaraçao de array
numeros.push(50); //adiciona no final do array
numeros.unshift(10); //adiciona no inicio do array
//console: [ 10, 20, 30, 40, 50 ]
numeros.pop();
numeros.shift();
//console: [ 20, 30, 40 ]
console.log(numeros.toSorted());
let numeros_ro = [200, 300, 100]; //ReadonlyArray array apenas para leitura
//numeros_ro - metodos de moidficaçoes não funciona adicionar, remover
