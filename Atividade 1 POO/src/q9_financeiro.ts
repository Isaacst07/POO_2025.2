class SituacaoFinanceira {
    valorCredito: number = 0;
    valorDebito: number = 0;

    calcularSaldo() {
        return this.valorCredito - this.valorDebito;
    }
}

let SituacaoFinanceira1 = new SituacaoFinanceira();

SituacaoFinanceira1.valorCredito = 15000;
SituacaoFinanceira1.valorDebito = 150.75;

console.log(SituacaoFinanceira1.calcularSaldo().toFixed(2))