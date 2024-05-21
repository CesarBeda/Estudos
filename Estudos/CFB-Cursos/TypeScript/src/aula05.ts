//union Types

//let vteste:string|number; //mescla tipos em uma varivel
let vteste:any; //aceita qaulaquer tipo
vteste = true;

//let cursos = ["JavaScrit", "TypeScript", "C++"];// tipo pelo valor array de string
//let cursos:string[]=["JavaScrit", "TypeScript", "C++, 100, false"]; //tipagem mista na declaração só aceita tipos semelhantes aos já atribuidos
let cursos:string[]=["JavaScrit", "TypeScript", "C++"]; //tipagem na declaração
let valores = [100, 200, 300];


cursos.push("Arduino");// só adiciona elementonto se estiverde acordo com tipo (do array)
valores.push(555);


console.log(cursos);
console.log(valores);
console.log(vteste);