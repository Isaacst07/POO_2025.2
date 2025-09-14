"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nome;
nome = "Ely";
console.log("Nome:", nome);
//Neste modo, o TypeScript considera null e undefined como valores "válidos" para qualquer tipo. É como se string, number, boolean, etc., 
// pudessem, além de seus próprios valores, conter também null ou undefined.
//null e undefined são tratados como tipos distintos. Uma variável do tipo string só pode conter strings. 
// Se você quiser que ela também possa conter null ou undefined, você precisa ser explícito sobre isso.
