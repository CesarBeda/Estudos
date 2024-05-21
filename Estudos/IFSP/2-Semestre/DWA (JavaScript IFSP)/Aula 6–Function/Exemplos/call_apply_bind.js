// para entender - da maneira básica
const circle = {
    radius: 10, //raio
    calculateArea() { // method notation
        return Math.PI * Math.pow(this.radius, 2);
		// PI * raio ao quadrado
    }
};
console.log(circle.calculateArea());



// aqui removemos a função do objeto
const calculateArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
};
const circle = {
    radius: 10,
    calculateArea
};
console.log(circle.calculateArea());



// agora sim utilizando o call e passando 
// o objeto circle como parametro
const calculateArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
};
const circle = {
    radius: 10,
    calculateArea
};
console.log(calculateArea.call(circle));



// nesse caso o apply funciona igualzinho ao call
const calculateArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
};
const circle = {
    radius: 10,
    calculateArea
};
console.log(calculateArea.apply(circle));



// ENTENDENDO A DIFEREÇA
// podemos passar uma função de arredondamento para o PI - fn
// e no parametro - Math.round ou Math.ceil
const calculateArea = function(fn) {
    return fn(Math.PI * Math.pow(this.radius, 2));
};
const circle = {
    radius: 10,
    calculateArea
};
console.log(calculateArea.call(circle, Math.round));
// o 1 parametro sempre o this
// do 2 pra frente, entram como parametro da função
console.log(calculateArea.apply(circle, [Math.ceil]));
// APPLY SEMPRE EM FORMA DE ARRAY
// remova o array e veja o erro


// bind
const calculateArea = function(fn) {
    return fn(Math.PI * Math.pow(this.radius, 2));
};
const circle = {
    radius: 10,
    calculateArea
};
const calculateAreaForCircle = calculateArea.bind(circle);
// encapsulando o this antes mesmo da execução

console.log(calculateAreaForCircle(Math.round));
console.log(calculateAreaForCircle(Math.ceil));