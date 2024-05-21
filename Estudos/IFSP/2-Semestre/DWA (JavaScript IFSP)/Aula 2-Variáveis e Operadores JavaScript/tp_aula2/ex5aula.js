let n1 = parseFloat(prompt("Digite um número"));
let n2 = parseFloat(prompt("Digite outro número"));

if(n1>n2){
    alert(`${n1} é maior`);
}
else{
    if(n2>n1){
        alert(n2 + " é maior");
    }
    else{
    document.write("Os números são iguais");
    }
}
//usando operador ternario
//n1!=n2? n1>n2? alert(n1+" é maior") : alert(n2+" é maior"): document.write("Os números são iguais");