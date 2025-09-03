"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circulo {
    raio = 0;
    CalcularArea() {
        return 3.14 * (this.raio ** 2);
    }
    CalcularPerimetro() {
        return 2 * 3.14 * this.raio;
    }
}
let circulo1 = new Circulo();
circulo1.raio = 5;
console.log(circulo1.CalcularArea().toFixed(2));
console.log(circulo1.CalcularPerimetro().toFixed(2));
// Para limitar o Número de casas decimais use o .toFixed(dígitos);
