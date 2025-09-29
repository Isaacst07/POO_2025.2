import { PedirEntrada, rl } from "./utils";


async function main(){
    const numero = parseInt(await PedirEntrada('Digite um número: '));
    console.log(`O Número ${numero} é PAR: ${ehPar(numero)}`)

    rl.close();
}


function ehPar(n: number): boolean{
    return n % 2 == 0;
}


main()