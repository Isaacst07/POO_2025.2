class Cliente {
    id: number; [cite: 11]
    nome: string; [cite: 12]
    cpf: string; [cite: 13]
    dataNascimento: Date; [cite: 14]
    contas: Conta[] = []; [cite: 15]

    constructor(id: number, nome: string, cpf: string, dataNascimento: Date) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
    }
}