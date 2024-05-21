// getter
const rectangle = {
    x: 10,
    y: 2,
    get area() {	//method notation
        return this.x * this.y;
    }
};
console.log(rectangle.area);
// mais simples


// setter - VEJA O ERRO + COMUM
const rectangle = {
    set x(x) {
        this.x = x;
    },
    set y(y) {
        this.y = y;
    },
    get area() {
        return this.x * this.y;
    }
};
rectangle.x = 10;
rectangle.y = 2;
console.log(rectangle.area);
//esse é um erro muito comum
// set e this são executados em loop (são o mesmo)


// MUDANDO O NOME DAS CHAVES
const rectangle = {
    set x(x) {
        this._x = x; // INTERNAMENTE É _x _y
    },
    set y(y) {
        this._y = y;
    },
    get area() {
        return this._x * this._y;
    }
};
rectangle.x = 10;		// AQUI PERMANECE
rectangle.y = 2;
console.log(rectangle.area);


// getter setter - muito útil quando
// associamos as regras

const rectangle = {
    set x(x) {
        if (x > 0) {
            this._x = x;
        } else {
            console.log("Invalid value for x");
        }
    },
    set y(y) {
        if (y > 0) {
            this._y = y;
        } else {
            console.log("Invalid value for y");
        }
    },
    get area() {
        return this._x * this._y;
    }
};
rectangle.x = -10;
rectangle.y = -2;
console.log(rectangle.area);
// voltando a valores positivos volta a funcionar

// defineProperties
// antes do ES6 era assim
// utilize o method notation - get and set
const rectangle = {};
Object.defineProperty(rectangle, "area", {
    get() {
        return this.x * this.y;
    }
});
rectangle.x = 10;
rectangle.y = 2;
console.log(rectangle.area);
// Recebe 3 propriedades 
// 1 - objeto alvo (rectangle)
// 2 - nome da propriedade ("area")
// 3 - Atributo get