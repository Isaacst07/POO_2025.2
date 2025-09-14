"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let valor; // Tipo implícito "any"
valor = 10;
valor = "teste";
console.log(valor);
let outroValor; // Tipo declarado
outroValor = 20;
console.log(outroValor);
// opção noImplicitAny = true acontecerá o erro "Variable 'valor' implicitly has an 'any' type" significa que, 
// como você declarou a variável valor sem um tipo e sem um valor inicial, TypeScript não conseguiu inferir seu tipo.
// Já opção noImplicitAny == false Ao compilar o código (tsc), o processo será BEM-SUCEDIDO e sem nenhum erro.
// A variável será do tipo "any", podendo receber qualquer tipo.
