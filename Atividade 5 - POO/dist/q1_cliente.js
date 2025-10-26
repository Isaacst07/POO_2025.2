"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    id;
    nome;
    cpf;
    dataNascimento;
    contas = [];
    constructor(id, nome, cpf, dataNascimento) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
    }
}
