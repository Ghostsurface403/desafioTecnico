/*
Exercício 13
Você está desenvolvendo um sistema para gerenciar jogadores de um
time de esportes. Cada jogador deve ter as seguintes propriedades:
● Nome (string)
● Idade (número)
● Posição (string)
● Pontuação (número)
Implemente as seguintes funcionalidades:
1. Crie um array vazio chamado time para armazenar os jogadores
cadastrados.
2. Escreva uma função chamada adicionarJogador que:
○ Recebe como parâmetros os dados de um jogador (nome,
idade, posição e pontuação). Observação: esses dados
devem ser inseridos pelo usuário.
○ Cria um objeto representando o jogador e o adiciona ao
array time.

3. Escreva uma função chamada buscarPorPosicao que:
○ Recebe como parâmetro uma string representando a
posição. Observação: esse dado deve ser inserido pelo
usuário.

○ Retorna todos os jogadores dessa posição. Se não houver
jogadores, exiba uma mensagem apropriada.
4. Escreva uma função chamada listarTime que:
○ Imprime todos os jogadores cadastrados no time no
console, um por linha.

5. Escreva uma função chamada calcularPontuacaoMedia que:
○ Calcula e retorna a pontuação média de todos os jogadores
do time.

6. O programa deve iniciar exibindo o seguinte menu interativo, que
deve permitir ao usuário escolher uma das opções:
1 - Adicionar jogador
2 - Buscar por posição
3 - Listar time
4 - Calcular pontuação média
5 - Sair
O programa só deve ser encerrado ao escolher a opção 5. Caso
contrário, ele deve retornar ao menu interativo.
*/

//passo 1
let time = [];

//passo 2
function adicionarJogador(){
    let nome = prompt('Digigte o nome do jogador');
    let idade = prompt('Digigte o idade do jogador');
    let posicao = prompt('Digigte o posicao do jogador');
    let pontuacao = prompt('Digigte o pontuacao do jogador');

    let jogador = {
        Nome: nome,
        Idade: idade,
        Posicao: posicao,
        Pontuacao: pontuacao
    }

    time.push(jogador);
}

//passo 3
function buscarPorPosicao(posicao){
    let jogadoresSelecionados = [];
    for (let i = 0; i < time.length; i++){
        if (posicao == time[i].Posicao){
            jogadoresSelecionados.push(time[i]);
        }
    }

    if (jogadoresSelecionados.length > 0) {
        return jogadoresSelecionados;
    }
    else {
        console.log('Não há jogadores para a posição referida');
    }
}
//passo 4 
function listarTime(){
    for (let i = 0; i < time.length; i++){
        console.log(time[i]);
    }
}

//passo 5 
function calcularPontuacaoMedia(){
    let media = 0;
    for (let i = 0; i < time.length; i++){
        media += time[i].pontuacao;
    }
    let mediaTotal = media / time.length;
    return mediaTotal;
}
//passo 6
function menu(){
    console.log('--- Menu ---')
    console.log(`1 - Adicionar jogador
                 2 - Buscar por posição
                 3 - Listar time
                 4 - Calcular pontuação média
                 5 - Sair`);

    let opcao = prompt('Escolha uma opção:');

    return opcao;
}
function main(){
    let opcao = menu();
    while (opcao != '5'){
        switch(opcao){
        case "1":
            adicionarJogador();
            opcao = menu();
            break;
        case "2":
            let posicao = prompt('Digite a posição desejada');
            buscarPorPosicao(posicao);
            opcao = menu();
            break;
        case "3":
            listarTime();
            opcao = menu();
            break;
        case "4":
            let mediaTotal = calcularPontuacaoMedia()
            console.logc(`A media de pontos dos jogadores foi ${mediaTotal}`);
            opcao = menu();
            break;
        case "5":
            console.log('Programa encerrado.');
            break;
        default:
            console.log('Erro! Opção inválida!');
            opcao = menu();
        }
    }  
}

