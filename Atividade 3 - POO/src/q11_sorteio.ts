import { PedirEntrada, rl } from "./utils";

class Sorteio{
    Array: string[];
    
    constructor(a: string[]){
        this.Array = a;
    }

    //adicionar(... nomes: string[]): void{
    //nomes.map(nome => this.Array.push(nome));
    //}

    async adicionar(){
        const qtdnomes = parseInt(await PedirEntrada('Quantidade nomes da lista: '));

        console.clear();
        
        for(let i = 1;i <= qtdnomes; i++){
            let nome = await PedirEntrada(`${i}° Nome: `);
            this.Array.push(nome);
        }
        
        console.clear();
    }

    sortear(): string{
        return this.Array[Math.floor(Math.random() * this.Array.length)]
    }

}


async function main(){

    let sorteio1 = new Sorteio([]);

    await sorteio1.adicionar();
    console.log(sorteio1.sortear());

    rl.close();

}


main();