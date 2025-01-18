/*
Exercício 10
Escreva um programa para simular uma fila de espera em uma central
de atendimento ao cliente. O programa deve iniciar exibindo na tela um
menu interativo contendo a lista de todos os clientes esperando
atendimento, mostrando a posição ao lado do nome (ex.: 1o João, 2o
Maria, etc).
O menu deve permitir escolher entre as seguintes opções:
1 - “Novo Cliente”: Adiciona um novo cliente ao final da fila
(solicitando o nome do cliente).
2 - “Atender Cliente”: Retira o primeiro cliente da fila e exibe o
nome do cliente que está sendo atendido.
3 - “Sair”: Encerra o programa.
O programa só deve ser encerrado ao escolher a opção 3. Caso
contrário, ele deve retornar ao menu principal.
*/
let filaDeEspera;
let novoCliente;

function menu(){
    console.log('--- Lista de Clientes ---');
    if (filaDeEspera.lenght > 0){
        for ( let i = 0; i< filaDeEspera; i++){
            console.log(`${i+1}° Cliente ${filaDeEspera[i]}`);
        }    
    }
    else {
        console.log('Não há clientes na fila');
    }
    
    console.log(`1 - Novo Cliente
                 2 - Atender Cliente
                 3 - Sair`);

    let opcao = prompt('Escolha uma opção:');

    return opcao;
}
function main(){
    let opcao = menu();
    while (opcao != '3'){
        switch(opcao){
        case "1":
            novoCliente = prompt('Digite seu nome');
            filaDeEspera.push(novoCliente);
            opcao = menu();
            break;
        case "2":
            filaDeEspera.shift();
            opcao = menu();
            break;
        case "3":
            console.log('Programa encerrado.');
            break;
        default:
            console.log('Erro! Opção inválida!');
            opcao = menu();
        }
    }  
}