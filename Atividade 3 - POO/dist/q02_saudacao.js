"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
async function main() {
    const nome = await (0, utils_1.PedirEntrada)('Seu nome: ');
    const TemPronome = await (0, utils_1.PedirEntrada)('Você tem Pronome(sim/não): ');
    if (TemPronome == 'sim') {
        const pronome = await (0, utils_1.PedirEntrada)('Seu pronome(Ex: Sr.): ');
        console.log(saudacao(nome, pronome));
    }
    else {
        console.log(saudacao(nome));
    }
    utils_1.rl.close();
}
function saudacao(nome, pronome = 'Sr.') {
    return `Òla, ${pronome}${nome}.`;
}
main();
