class Pessoa {
    nome: string;
    idade: number;

    constructor(n: string, i: number){
        this.nome = n;
        this.idade = i;
    }

    apresentar(){
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

let pessoa1 = new Pessoa('Ely', 46);

console.log(pessoa1.apresentar());