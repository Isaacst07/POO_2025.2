import { PedirEntrada, rl } from "./utils";


async function main() {
    let numbers: number[] = [];
    let TamanhoArray = parseInt(await PedirEntrada('Tamanho do Array: '));

    console.clear();

    for (let i: number = 1; i <= TamanhoArray; i++) {
        let numero = parseInt(await PedirEntrada(`${i}° Número do Array: `))
        numbers.push(numero)
    }

    console.clear();

    console.log(organizar(numbers));

    rl.close();
}


function organizar(lista: number[]): string{
    let saida: string = '';

    lista.forEach((elemento, index) => {
        if (index == lista.length - 1){
            saida += `${elemento}`;
        }
        else{
            saida += `${elemento} - `;
        }

    });

    return saida;

}


main()