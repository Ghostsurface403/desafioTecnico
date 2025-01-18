/*
Exercício 4
Elabore um algoritmo para ler um valor monetário em reais (R$) e
convertê-lo para as moedas euro (€) e dólar americano (US$),
considerando as seguintes taxas de câmbio:
● Taxa de câmbio para euro: €1 = R$6,10
● Taxa de câmbio para dólar: $1 = R$5,70
Imprima na tela o valor em reais inserido pelo usuário e suas
conversões para dólar americano e euro.
*/

alert('Conversor de moedas para euro e dolar!');

// inserção do valor a ser convertido pelo usuário
let valor = prompt('Insira o valor a ser convertido:');

// taxas de câmbio de euro e dolar
let euro = 6.10;
let dolar = 5.70;

//valor convertido

let valorEuro = (valor / euro).toFixed(2);
let valorDolar = (valor / dolar).toFixed(2);

console.log(`O valor inserido foi: ${valor}`);
console.log(`O valor convertido para euro é igual a: ${valorEuro}`);
console.log(`O valor convertido para dolar é igual a: ${valorDolar}`);