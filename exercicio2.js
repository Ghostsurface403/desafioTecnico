/* Exercício 2
Escreva um programa que:
1. Solicite ao usuário um número inteiro positivo e calcule o seu
fatorial.
2. Pergunte ao usuário se ele quer calcular o fatorial de outro
número. Se o usuário digitar "S" ou “s”, o programa deve reiniciar e
permitir outro cálculo; se digitar "N" ou “n”, o programa deve
encerrar.
3. Valide a entrada do usuário para garantir que apenas números
inteiros positivos são aceitos. Se o usuário digitar um número
inválido, exiba uma mensagem de erro e peça a entrada
novamente. */

//entrada do numero inteiro positivo 
let continuar = 's';
while (continuar.toLowerCase() == 's'){
    let inteiro = prompt("Digite um numero inteiro positivo: ");
    inteiro = parseInt(inteiro);
    while (inteiro < 0 || !Number.isInteger(inteiro)){
        console.log('Erro! Numero invalido, digite novamente');
        inteiro = prompt("Digite um numero inteiro positivo: ");
        inteiro = parseInt(inteiro);
    }
    let fatorial = 1;
    for (let i = inteiro; i > 0; i--){
        fatorial = fatorial * i;
    }
    console.log(`O fatorial de ${inteiro} é igual a: ${fatorial}`);
    continuar = prompt('Deseja calcular novamente? (S para sim / N para nao)');    
} 





