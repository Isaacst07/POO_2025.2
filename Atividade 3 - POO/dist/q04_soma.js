"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function soma(x, y) {
    return x + y;
}
console.log(soma(1, 2));
console.log(soma(1, "2"));
console.log(soma(1));
// Resposta:
// Na letra a: chama soma passa os números 1 e 2,ou seja, o resultado é 3.
// Na letra b: chama soma passa soma passando o número 1 e a string '2', por meio da coerção de tipo o número vira string
// e a função junta as duas string '1' e '2', resultando no '12'.
// Na letra c: chama soma passa o 1° parametro e não passa o segundo, y assume valor undefined gerando uma saída NaN, a soma fica 1 + NaN.
