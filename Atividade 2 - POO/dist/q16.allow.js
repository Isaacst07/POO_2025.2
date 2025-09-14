"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function teste() {
    let x = 10;
    console.log("Início do programa");
    if (x > 5) {
        console.log("x é maior que 5");
        return;
    }
    console.log("Fim do programa");
}
teste();
// Se allowUnreachableCode: false acontecerá um erro e a compilação irá falhar.
// allowUnreachableCode: true A compilação ocorrerá com sucesso e sem nenhum erro.
