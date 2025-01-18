/*
Exercício 11
Escreva um programa que receba uma lista de números inteiros e
armazene-os em um array. O programa deve verificar quantos números
do vetor estão em ordem crescente em relação ao número anterior e
exibir essa informação.
Requisitos:

1. Solicite ao usuário a quantidade de números que ele deseja
inserir no vetor e, em seguida, peça que insira cada número.
2. Verifique cada par consecutivo de números no vetor e identifique
se estão em ordem crescente (ou seja, se o próximo número é
maior que o anterior).
3. Imprima quantos números estão em ordem crescente em relação
ao número anterior.
Exemplo: [6,1,3,2,1,7]
Impressão no console: 2
*/
let qtdDeNumeros;
let numerosInteiros;
let cont;

//passo 1
qtdDeNumeros = parseInt(prompt('Digite quantos numeros inteiros deseja inserir no vetor'));

//passo 2
for (let i = 0; i< qtdDeNumeros; i++){
    numerosInteiros.push = parseInt(prompt('Digite os numeros: '));
}
for (let i = 0; i< qtdDeNumeros -1; i++){
    if (numerosInteiros[i+1] > numerosInteiros[i]){
        cont++;
    }   
}
//passo 3
console.log(`A quantidade de numeros que estão em ordem crescente em relação ao anterior é: ${cont}`);

