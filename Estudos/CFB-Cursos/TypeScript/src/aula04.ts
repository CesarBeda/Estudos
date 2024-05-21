//Type Inference

//let nome1; :any sem tipagem aceira qualquer valor
let nome1:string; 
nome1 = "Beda";

//let valor:number; declarando tipo sem valor
let valor = 10; //number int, float, bin, hex...
valor = 10.5; //aceita float mesmo o primeiro sendo int


console.log(nome1);


//tsc -h lista de comando de ajuda
//ts watch compila arquivo ts para js automaticamente ao salvar
//tsc -w ou tsc --watch