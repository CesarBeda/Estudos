"use strict";
class Curso {
    canal = null;
    curso = null;
    constructor(canal, curso) {
        this.canal = canal;
        this.curso = curso;
    }
}
let c1 = new Curso('CFB-Cursos', 'TypeScript');
console.log(c1.canal);
console.log(c1.curso);
//compilação
//tsc aula03.ts - javascript com ECMA antigo
//tsc aula03.ts --tagest "ES2016" Selecionando formatação ECMA
//tsc aula03.ts --tagest "ESNEXT" usando ECMA mais recente
// cmd "tsc" lista de comandos de saída
//cmd diretorio "tsc --init" cria arquivo json para configurações do compilador tsconfig.json 
//1-
//apos compilar script em ecma 3 ultrapassado
//*var Curso = /** @class */ (function () {
/*    function Curso(canal, curso) {
        this.canal = null;
        this.curso = null;
        this.canal = canal;
        this.curso = curso;
    }
    return Curso;
}());
var c1 = new Curso('CFB-Cursos', 'TypeScript');
console.log(c1.canal);
console.log(c1.curso);
*/ 
