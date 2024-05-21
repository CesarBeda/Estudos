// 1 - REST PARAMETERS
function sortValues(...theArgs) {
    // using Array method on rest params
    let sortedArgs = theArgs.sort();
    return sortedArgs;
}

console.log(sortValues(9,2,5,7,1,8));

//Array(6) [ 1, 2, 5, 7, 8, 9 ]


// 2 - default function parameters
function add(a=10, b=20)
{
	return a+b;
}
console.log(" A soma é: " + add());   // No argument
console.log(" A soma é: " + add(1));   // with one argument
console.log(" A soma é: " + add(5,6));   // with both argument
 //A soma é: 30
 //A soma é: 21
 //A soma é: 11


//3 
/* defining a new constructor function */
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}
function Bike(company, model, year, owner) {
    this.company = company;
    this.model = model;
    this.year = year;
    this.owner = owner;
}

/* creating the object */
let edu = new Person("Eduardo", 48, "Santos");
let myBike = new Bike("BMW", "R 1200", 2021, edu);

document.write(myBike.company+"<br/>"+myBike.model+"<br/>"+myBike.year+"<br/>"+myBike.owner.name);