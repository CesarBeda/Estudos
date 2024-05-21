let colaboradores = [
    {nome: 'Edu', salario: 90000, data: "28 de Julho de 2008"},
    {nome: 'Savoia', salario: 75000, data: "15 de Agosto de 2021"},
    {nome: 'Catia', salario: 80000, data: "12 de Dezembro de 2011"}
];


// a - sort
colaboradores.sort(function (x, y) {
    return x.salario - y.salario;
});

console.table(colaboradores);


// b - push
let colaboradores = [
    {nome: 'Edu', salario: 90000, data: "28 de Julho de 2008"},
    {nome: 'Savoia', salario: 75000, data: "15 de Agosto de 2021"},
    {nome: 'Catia', salario: 80000, data: "12 de Dezembro de 2011"}
];
console.log(colaboradores.push({nome: 'Eduarda', salario: 62000, data: "10 de Novembro de 1999"}));
console.table(colaboradores);

// c - shift
console.log(colaboradores.shift(0));
console.table(colaboradores);

// d - filter

const  result =  colaboradores.filter(function  (colaboradores)  {
return  colaboradores.salario <=  75000;  });
console.table(result);
