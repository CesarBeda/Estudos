
function Animal(pernas) {
    this.pernas = pernas;
}

Animal.prototype.anda = function() {
    console.log('Anda sobre ' + this.pernas + ' pernas');
}

function Passaro(pernas) {
    Animal.call(this, pernas);
}

Passaro.prototype = Object.create(Animal.prototype);
Passaro.prototype.constructor = Animal;


Passaro.prototype.voa = function() {
    console.log('Voa');
}

var pombo = new Passaro(2);
pombo.anda(); // Anda sobre 2 pernas
pombo.voa(); // voa



