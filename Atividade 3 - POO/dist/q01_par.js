"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
async function main() {
    const numero = parseInt(await (0, utils_1.PedirEntrada)('Digite um número: '));
    console.log(`O Número ${numero} é PAR: ${ehPar(numero)}`);
    utils_1.rl.close();
}
function ehPar(n) {
    return n % 2 == 0;
}
main();
