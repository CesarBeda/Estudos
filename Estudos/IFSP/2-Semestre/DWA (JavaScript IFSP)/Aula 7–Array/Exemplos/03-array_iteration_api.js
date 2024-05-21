// forEach - percorre cada elemento
// Executa a função passada por parâmetro para cada elemento 
const frameworks = ["Angular.js", "Ember.js", "Vue.js"];
frameworks.forEach(framework => console.log(framework));
// Podemos substituir a função por uma 
// ARROW FUNCTION - proóxima aula vamos ver isso

//Retorna um novo array contendo somente os elementos 
// que retornaram true na função passada por parâmetro 
const frameworks = [
    {
        name: "Angular.js",
        contributors: 1598
    }, 
    {
        name: "Ember.js",
        contributors: 746
    },
    {
        name: "Vue.js",
        contributors: 240
    }
];
const result = frameworks.filter(function (framework) {
    return framework.contributors < 1000;
});
console.log(result);


// find - Retorna o primeiro elemento que retornou 
// true na função passada por parâmetro 
const frameworks = [
    {
        name: "Angular.js",
        contributors: 1598
    }, 
    {
        name: "Ember.js",
        contributors: 746
    },
    {
        name: "Vue.js",
        contributors: 240
    }
];
const result = frameworks.find(function (framework) {
    return framework.name === "Angular.js";
});
console.log(result);

//some -Retorna true se um ou mais elementos retornaram
// true na função passada por parâmetro 
const frameworks = [
    {
        name: "Angular.js",
        contributors: 1598
    }, 
    {
        name: "Ember.js",
        contributors: 746
    },
    {
        name: "Vue.js",
        contributors: 240
    }
];
const result = frameworks.some(function (framework) {
    return framework.name.includes("js");
});
console.log(result);
// Conjunto checkbox, voce quer mostrar um botão
// deletar se 1 ou mais estiverem marcados

// every -Retorna true se todos os elementos retornarem 
// true na função passada por parâmetro 
const frameworks = [
    {
        name: "Angular.js",
        contributors: 1598
    }, 
    {
        name: "Ember.js",
        contributors: 746
    },
    {
        name: "Vue.js",
        contributors: 240
    }
];
const result = frameworks.every(function (framework) {
	return framework.contributors > 1000;
});
console.log(result);


// map - Retorna um novo array com base no retorno 
// da função passada por parâmetro 
const frameworks = [
    {
        name: "Angular.js",
        contributors: 1598
    }, 
    {
        name: "Ember.js",
        contributors: 746
    },
    {
        name: "Vue.js",
        contributors: 240
    }
];
const result = frameworks.map(function (frameworks) {
	return frameworks.name;
})
//const result = frameworks.map((framework) => framework.name);
console.log(result);

// é como retornar um novo array com o que vocêr quer
// no caso acima, os nomes dos frameworks



//  reduce - Retorna um valor com base no retorno 
// da função passada por parâmetro
const frameworks = [
    {
        name: "Angular.js",
        contributors: 1598
    }, 
    {
        name: "Ember.js",
        contributors: 746
    },
    {
        name: "Vue.js",
        contributors: 240
    }
];
const result = frameworks.reduce(function (total, framework) {
    return total + framework.contributors;
}, 0);
console.log(result);
// 2 parametros (total = 0) (soma contributors)
// comum em operações matemáticas... preços e numeros
// pode ser substituido por forEach ... SIM
