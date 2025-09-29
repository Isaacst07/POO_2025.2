import * as redaline from 'readline';

export const rl = redaline.createInterface({
    input: process.stdin,
    output: process.stdout
});


export function PedirEntrada(label: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(label, (resposta) => {
            resolve(resposta);
        });
    });
}