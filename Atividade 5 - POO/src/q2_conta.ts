class Conta {
    id: number; [cite: 18]
    numero: string;
    saldo: number;
    cliente: Cliente | null = null; [cite: 19]
    dataDeAbertura: Date; [cite: 20]

    constructor(id: number, numero: string, saldoInicial: number, dataDeAbertura: Date) {
        if (saldoInicial < 0) {
            throw new Error("Saldo inicial não pode ser negativo.");
        }
        this.id = id;
        this.numero = numero;
        this.saldo = saldoInicial;
        this.dataDeAbertura = dataDeAbertura;
    }

    sacar(valor: number): void {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        } else {
            console.log(`Saldo insuficiente na conta ${this.numero}.`);
        }
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
        } else {
            console.log("Valor de depósito deve ser positivo.");
        }
    }
}