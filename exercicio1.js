/*Exercício 1
Escreva um programa em que o usuário insira os coeficientes a, b e c
de uma equação quadrática da forma:

                            ax2 + bx + c = 0

O programa deve:
1. Calcular o discriminante (Δ) pela fórmula:

                            Δ = b2 − 4ac

2. Avaliar o valor de Δ para determinar o número de raízes reais:
○ Se Δ > 0, exibir as duas raízes reais e distintas.
○ Se Δ = 0, exibir uma raiz real (raiz dupla).
○ Se Δ < 0, informar que a equação não possui raízes reais.
3. Usar a fórmula de Bhaskara para calcular as raízes (caso existam)
e imprimir na tela tais raízes:

                    x1 = −b + Δ     x2 = −b − Δ
                            2a          2a
*/

let coefficientA = prompt("Digite o coeficiente a:");
let coefficientB = prompt("Digite o coeficiente b:");
let coefficientC = prompt("Digite o coeficiente c:");

// Calculo do delta

let delta = (coefficientB * coefficientB) - (4 * coefficientA * coefficientC);

//calculo das raízes

let x1 = (- coefficientB + Math.sqrt(delta)) / (2 * coefficientA);
let x2 = (- coefficientB - Math.sqrt(delta)) / (2 * coefficientA);

if (delta > 0) {
    console.log('As duas raízes reais e distintas são: ');
    console.log(`x1 = ${x1} e x2 = ${x2}`);
}
else if (delta == 0) {
    console.log('A raíz dupla real é igual a: ');
    console.log(`x = ${x1}`);
}
else {
    console.log('A equação não possui raízes reais');
}