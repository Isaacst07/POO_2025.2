"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
class Sorteio {
    Array;
    constructor(a) {
        this.Array = a;
    }
    //adicionar(... nomes: string[]): void{
    //nomes.map(nome => this.Array.push(nome));
    //}
    async adicionar() {
        const qtdnomes = parseInt(await (0, utils_1.PedirEntrada)('Quantidade nomes da lista: '));
        console.clear();
        for (let i = 1; i <= qtdnomes; i++) {
            let nome = await (0, utils_1.PedirEntrada)(`${i}° Nome: `);
            this.Array.push(nome);
        }
        console.clear();
    }
    sortear() {
        return this.Array[Math.floor(Math.random() * this.Array.length)];
    }
}
async function main() {
    let sorteio1 = new Sorteio([]);
    await sorteio1.adicionar();
    console.log(sorteio1.sortear());
    utils_1.rl.close();
}
main();
