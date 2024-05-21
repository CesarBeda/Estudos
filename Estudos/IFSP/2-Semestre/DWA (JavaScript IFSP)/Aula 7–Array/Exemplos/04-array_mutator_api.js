// push: Adiciona um elemento no final 
// pop: Remove um elemento do final
const languages = ["Python", "C", "Java"];
console.log(languages);
console.log(languages.push("Ruby"));
console.log(languages.push("Go"));
console.log(languages);
console.log(languages.pop());
console.log(languages.pop());
console.log(languages);

// unshift: Adiciona um elemento no início 
// shift: Remove um elemento do início
const languages = ["Python", "C", "Java"];
console.log(languages);
console.log(languages.unshift("Ruby"));
console.log(languages.unshift("Go"));
console.log(languages);
console.log(languages.shift());
console.log(languages.shift());
console.log(languages);

// splice: Remove, substitui ou adiciona 
// um ou mais elementos em uma determinada posição
// não use delete... use splice 
const languages = ["Python", "C", "Java"];
console.log(languages);
console.log(languages.splice(1, 1)); //(posição e qtd elementos) - removeu 1 elemento C
console.log(languages);
console.log(languages.splice(1, 0, "C++", "C#")); // inseriu 2 elementos - empurrando
console.log(languages);
console.log(languages.splice(1, 2, "C")); // removeu 2 e inclui C
console.log(languages);


// sort: Ordena os elementos de acordo com a 
//função de ordenação
// retornando -1
const languages = [
    {
        name: "Python",
        year: 1991
    }, 
    {
        name: "C",
        year: 1972
    },
    {
        name: "Java",
        year: 1995
    }
];
languages.sort(function (a, b) {
    return -1;
});
console.log(languages);


// retornando 1
const languages = [
    {
        name: "Python",
        year: 1991
    }, 
    {
        name: "C",
        year: 1972
    },
    {
        name: "Java",
        year: 1995
    }
];
languages.sort(function (a, b) {
    return 1;
});
console.log(languages);


// ordenando por a - b (crescente)
const languages = [
    {
        name: "Python",
        year: 1991
    }, 
    {
        name: "C",
        year: 1972
    },
    {
        name: "Java",
        year: 1995
    }
];
languages.sort(function (a, b) {
    return a.year - b.year;
});
console.log(languages);

// ordenando por b - a (decrescente)
const languages = [
    {
        name: "Python",
        year: 1991
    }, 
    {
        name: "C",
        year: 1972
    },
    {
        name: "Java",
        year: 1995
    }
];
languages.sort(function (a, b) {
    return b.year - a.year;
});
console.log(languages);


// ordenando por nome usando ternário
const languages = [
    {
        name: "Python",
        year: 1991
    }, 
    {
        name: "C",
        year: 1972
    },
    {
        name: "Java",
        year: 1995
    }
];
languages.sort(function (a, b) {
    return (a.name < b.name) ? -1 : 1; // ternário por nome
});
console.log(languages);
// inverta

// usando o localeCompare
const languages = [
    {
        name: "Python",
        year: 1991
    }, 
    {
        name: "C",
        year: 1972
    },
    {
        name: "Java",
        year: 1995
    }
];
languages.sort(function (a, b) {
    return a.name.localeCompare(b.name);
}); // * -1
console.log(languages);
// util para caracteres especiais etc.



// reverse: Inverte a ordem dos elementos 
const languages = ["Python", "C", "Java"];
languages.reverse();
console.log(languages);
languages.reverse();
console.log(languages);


// fill: Preenche os elementos de acordo com a 
// posição de início e fim 
const languages = ["Python", "C", "Java"];
languages.fill("JavaScript"); 
// se não especificar preenche todas as posições
console.log(languages);

const languages = ["Python", "C", "Java"];
languages.fill("JavaScript", 1);
// apenas 2 parametros, preenche a partir dessa posição
console.log(languages);

const languages = ["Python", "C", "Java"];
languages.fill("JavaScript", 0, 2);
// 3 parametros, a partir da posição, qtd (N -1)
console.log(languages);



