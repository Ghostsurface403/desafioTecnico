/*
Exercício 12
Implemente uma função chamada encontrarElementoUnico que recebe
um array de números inteiros onde cada elemento aparece exatamente
duas vezes, exceto por um elemento que aparece exatamente uma vez.
A função deve retornar o elemento que aparece apenas uma vez. Tal
elemento deve ser impresso na tela.
*/
let numerosInteiros;

numerosInteiros = [1, 1, 2, 2, 3, 4, 4, 5, 5];

function encontrarElementoUnico(numerosInteiros){
    for (let i = 0; i< numerosInteiros.lenght; i++){
        for (let j = i+1; j< numerosInteiros.lenght; j++){
            if (numerosInteiros[i] == numerosInteiros[j]){
                i = j;
                break;
            }
            return numerosInteiros[i];
        }
    }
}

let resultado = encontrarElementoUnico(numerosInteiros);
console.log(`O elemento que aparece somente uma vez é: ${resultado}`);

