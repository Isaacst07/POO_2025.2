"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    nome;
    preco;
    constructor(n, p) {
        this.nome = n;
        this.preco = p;
    }
    aplicarDesconto(percentual) {
        return this.preco * (1 - (percentual / 100));
    }
    formatarMoeda(valor) {
        //'pt-BR' formatar o número usando as regras do Português do Brasil
        //style: 'currency': Esta opção diz ao método para formatar o número como uma moeda, não como um número decimal simples.
        // currency: 'BRL': É esta opção que adiciona automaticamente o símbolo R$ à string final.
        return valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }
    emitirOrcamento(percentual) {
        let precoDesconto = this.aplicarDesconto(percentual);
        let orcamento = `Produto: ${this.nome}, Preço sem desconto: ${this.formatarMoeda(this.preco)}
Desconto: ${percentual}%, então o preço com desconto é ${this.formatarMoeda(precoDesconto)}`;
        return orcamento;
    }
}
let produto1 = new Produto('Camisa', 49.99);
console.log(produto1.emitirOrcamento(10));
console.log('');
let produto2 = new Produto('Carro', 15000);
console.log(produto2.emitirOrcamento(10));
