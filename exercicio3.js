/* 
Exercício 3
Crie uma função chamada verificarIdades que recebe um array de
anos de nascimento de várias pessoas. A função deve calcular a idade
de cada pessoa com base no ano atual (inserido pelo usuário) e, para

cada idade, determinar se a pessoa é maior de idade (18 anos ou mais)
ou menor de idade (menos de 18 anos). A função deve retornar um array
contendo "maior" para pessoas maiores de idade e "menor" para
pessoas menores de idade, mantendo a ordem das idades verificadas.
Após isso, a função deve imprimir na tela uma mensagem para cada
pessoa, no formato:

Pessoa 1: Maior de idade
Pessoa 2: Menor de idade

(...)
*/
let anos = [2001, 1970, 2023];
let anoAtual = prompt('Digite o ano atual: ');

function verificarIdades(anos, anoAtual){
    let idades = [];
    for (let i = 0; i < anos.length; i++){
        let idade = anoAtual - anos[i];
        if (idade >= 18){
            idades.push('Maior')
        }
        else {
            idades.push('Menor')
        } 
    }
    return idades;
}


let idades = verificarIdades(anos, anoAtual);

for (let i = 0; i < idades.length; i++){
    console.log(`Pessoa ${i+1}: ${idades[i]} de idade`);
}