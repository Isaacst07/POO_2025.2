"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TradutorEmojis {
    dicionario = {
        "amor": "❤️",
        "futebol": "⚽",
        "cachorro": "🐶",
    };
    traduzir(frase) {
        let lista = frase.split(' ');
        for (let i = 0; i <= lista.length; i++) {
            if (lista[i] in this.dicionario) {
                lista[i] = this.dicionario[lista[i]];
            }
        }
        return lista.join(" ");
    }
}
let traducao1 = new TradutorEmojis();
console.log(traducao1.traduzir('O amor do brasileiro é o futebol e o cachorro'));
