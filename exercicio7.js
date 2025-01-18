/*
Exercício 7
Escreva um programa que verifique se uma frase é um palíndromo. Um
palíndromo é uma sequência que pode ser lida da mesma maneira da
esquerda para a direita e da direita para a esquerda.
Requisitos:
1. Solicite ao usuário uma frase.
2. Remova todos os espaços e ignore a diferença entre letras
maiúsculas e minúsculas.
3. Verifique se a frase é igual quando lida ao contrário e informe se
ela é um palíndromo ou não.
Dica: Use toLowerCase() e split().

*/

console.log('Verificador de frases palindromas!');

let frase = prompt('Digite a frase para ser verificada: ');
let fraseInvertida =[];
let palindromo;
frase = frase.strip(" ");
frase = frase.toLowerCase();

for (let i = frase.length - 1; i >= 0; i--) {
    fraseInvertida.push(frase[i]);
}

console.log(fraseInvertida);
fraseInvertida = fraseInvertida.join("");

if (frase == fraseInvertida) {
    console.log('A frase é um palindromo!');
}