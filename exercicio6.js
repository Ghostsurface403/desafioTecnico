/*
Exercício 6
Escreva um programa que:
1. Solicite ao usuário um número inteiro positivo n, que representa o
número de termos que ele deseja ver da sequência de Fibonacci.
2. Implemente uma função recursiva chamada fibonacci que recebe
um número n e retorna os n primeiros termos da sequência de
Fibonacci, onde:
○ Fibonacci(0) = 0

○ Fibonacci(1) = 1
○ Para n>1: Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)
3. Exiba os n primeiros termos da sequência de Fibonacci.
*/

function fibonacci(n) {
    if(n < 2) {
        return n;
    }
    else {
        return fibonacci(n-1) + fibonacci(n - 2);
    }
}

const numTermos = prompt('Digite o numero de termos: ');

if(numTermos < 0) {
    console.log('Digite o numero inteiro positivo');
}
else if (numTermos == 0) {
    console.log(0);
}
else if (numTermos == 1) {
    console.log(1);
}
else {
    for(let i = 0; i < numTermos; i++) {
        console.log(fibonacci(i));
    }
}
