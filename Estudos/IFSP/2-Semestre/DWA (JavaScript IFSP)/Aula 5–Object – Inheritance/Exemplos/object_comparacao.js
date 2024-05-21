// comparação entre dois objetos
const book1 = {
    title: "Javascript Assertivo",
    author: "Gabriel Ramos"
};
const book2 = {
    title: "Javascript Assertivo",
    author: "Gabriel Ramos"
};
console.log(book1 == book2);	// false
console.log(book1 === book2);	// false

// se comparar o mesmo objeto é igual
console.log(book1 == book1);	// false
console.log(book2 === book2);	// false


/* ======================================================================= */
// Como fazer para comparar
const book1 = {
    title: "Javascript Assertivo",
    author: "Gabriel Ramos"
};
const book2 = {
    title: "Javascript Assertivo",
    author: "Gabriel Ramos"
};
let equal = true;
for (let key in book1) {
    if (book1[key] !== book2[key]) equal = false;
}
console.log(equal);

for (let key in book2) {
    if (book2[key] !== book1[key]) equal = false;
}
console.log(equal);

