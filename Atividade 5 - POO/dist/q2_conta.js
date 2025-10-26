"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    id;
    numero;
    saldo;
    cliente = null;
    dataDeAbertura;
    constructor(id, numero, saldoInicial, dataDeAbertura) {
        if (saldoInicial < 0) {
            throw new Error("Saldo inicial não pode ser negativo.");
        }
        this.id = id;
        this.numero = numero;
        this.saldo = saldoInicial;
        this.dataDeAbertura = dataDeAbertura;
    }
    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
        else {
            console.log(`Saldo insuficiente na conta ${this.numero}.`);
        }
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
        }
        else {
            console.log("Valor de depósito deve ser positivo.");
        }
    }
}
