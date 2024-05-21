// indexOf - posição do primeiro elemento encontrado
//lastIndexOf - posição do ultimo elemento encontrado
const languages = ["Python", "C", "Java"];
console.log(languages.indexOf("Python"));
console.log(languages.lastIndexOf("C"));
console.log(languages.indexOf("JavaScript"));

// Mesmo elemento encontrado 2 vezes 
// em posições diferentes
const languages = ["Python", "C", "Java","Python"];
console.log(languages.indexOf("Python"));
console.log(languages.lastIndexOf("Python"));

// Buscando elemento INExistente
console.log(languages.indexOf("Javascript"));
// retorna -1

// includes - Retorna true se o elemento existir
// dentro de um array (true or false)
const languages = ["Python", "C", "Java"];
console.log(languages.includes("Python"));
console.log(languages.includes("C"));
console.log(languages.includes("JavaScript"));

// Retorna um novo array resultante da  
// concatenação de um ou mais arrays 
const ooLanguages = ["Smalltalk", "C++", "Simula"];
const functionalLanguages = ["Haskell", "Scheme"];
console.log(ooLanguages.concat(functionalLanguages));
console.log(ooLanguages);
console.log(functionalLanguages);
// outra maneira, criando um novo array com o resultado
const banana = [].concat(ooLanguages,functionalLanguages);
console.log(banana)


// slice - Retorna partes de um determinado array
// de acordo com a posição de início e fim
// SEMPRE N-1 
const languages = ["Smalltalk", "C++", "Simula", "Haskell", "Scheme"];
console.log(languages.slice(0, 2));
console.log(languages.slice(2, 4));
console.log(languages.slice(1)); // DESTE ELEMENTO ATÉ O FINAL

// Join Converte o array para uma String
// juntando os 	elementos com base em um separador
const languages = ["Smalltalk", "C++", "Simula", "Haskell", "Scheme"];
console.log(languages.join(","));
console.log(languages.join(";"))
console.log(languages.join(" "))
// UTIL PARA EXPORTAR AQUIVOS


