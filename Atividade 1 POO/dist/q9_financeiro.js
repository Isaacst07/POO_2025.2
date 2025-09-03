"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SituacaoFinanceira {
    valorCredito = 0;
    valorDebito = 0;
    calcularSaldo() {
        return this.valorCredito - this.valorDebito;
    }
}
let SituacaoFinanceira1 = new SituacaoFinanceira();
SituacaoFinanceira1.valorCredito = 15000;
SituacaoFinanceira1.valorDebito = 150.75;
console.log(SituacaoFinanceira1.calcularSaldo().toFixed(2));
