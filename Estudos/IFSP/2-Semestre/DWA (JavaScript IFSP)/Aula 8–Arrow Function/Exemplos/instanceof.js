// É possível verificar se um objeto foi criado 
// por meio de uma determinada função construtora 
// Analisando a cadeia de protótipo
const date = new Date();
console.log(date instanceof Date);
console.log(date instanceof Object); //descende de object
console.log(date instanceof Array);	 // Na cadeia de prototipo não tem array

// Diferença entre o typeof e o instanceof?
// typeof revela o TIPO DE DADO
const date = new Date();
console.log(date instanceof Date);
console.log(date instanceof Object);
console.log(date instanceof Array);
console.log(typeof date); 
// é OBJECT(tipo de dado) apesar de ser  instancia
// de Date

