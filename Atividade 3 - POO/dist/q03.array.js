"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
async function main() {
    let numbers = [];
    let TamanhoArray = parseInt(await (0, utils_1.PedirEntrada)('Tamanho do Array: '));
    console.clear();
    for (let i = 1; i <= TamanhoArray; i++) {
        let numero = parseInt(await (0, utils_1.PedirEntrada)(`${i}° Número do Array: `));
        numbers.push(numero);
    }
    console.clear();
    console.log(organizar(numbers));
    utils_1.rl.close();
}
function organizar(lista) {
    let saida = '';
    lista.forEach((elemento, index) => {
        if (index == lista.length - 1) {
            saida += `${elemento}`;
        }
        else {
            saida += `${elemento} - `;
        }
    });
    return saida;
}
main();
