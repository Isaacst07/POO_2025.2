class Numero{
    valor: number;
    
    constructor(v: number){
        this.valor = v;
    }

    ehPar(): boolean{
        return this.valor % 2 == 0;
    }

    ehImpar(): boolean{
        return this.valor % 2 != 0;
    }

}

let numero1 = new Numero(12);

console.log(`O número ${numero1.valor} é par: ${numero1.ehPar()}`);
console.log(`O número ${numero1.valor} é par: ${numero1.ehImpar()}`);
