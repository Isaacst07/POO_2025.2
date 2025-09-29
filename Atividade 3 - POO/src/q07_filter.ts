const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const pares = array.filter(valor => valor % 2 == 0);

console.log(`Lista original: ${array}`);
console.log(`Só os pares da lista: ${pares}`);