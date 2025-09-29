class JogoParImpar{
    numerojogador: number;
    numeromaquina: number;

    constructor(nj: number){
        this.numerojogador = nj;
        this.numeromaquina = this.sortearMaquina();
    }

    sortearMaquina(): number{
        return Math.floor(Math.random() * 10) + 1;
    }

    resultado(): boolean{
       return (this.numerojogador + this.numeromaquina) % 2 == 0; 
    }

    vencedor(): string{
        if (this.resultado() == true){
            return 'Jogador';
        }else{
            return 'Máquina';
        }
    }
}

let jogo1 = new JogoParImpar(4);

console.log(`Número da máquina: ${jogo1.numeromaquina}`);

console.log(`O vencendor é: ${jogo1.vencedor()}`);