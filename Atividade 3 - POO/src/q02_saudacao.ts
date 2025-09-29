import { PedirEntrada, rl } from "./utils";


async function main(){
    const nome = await PedirEntrada('Seu nome: ');
    const TemPronome = await PedirEntrada('Você tem Pronome(sim/não): ');

    if (TemPronome == 'sim'){
        const pronome = await PedirEntrada('Seu pronome(Ex: Sr.): ');
        console.log(saudacao(nome, pronome));
    }
    else{
        console.log(saudacao(nome));
    }

    rl.close();
}


function saudacao(nome: string, pronome: string = 'Sr.'): string{
    return `Òla, ${pronome}${nome}.`;
}


main()