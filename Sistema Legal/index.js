const {
    Soma,
    Multi,
    Divi,
    Sub
} = require('./operações');
const prompt = require('prompt-sync')();

console.log("Soma: ", Soma(6, 3));
console.log("Multiplicação: ", Multi(6, 3));
console.log("Divisão: ", Divi(6, 3));
console.log("Subtração: ", Sub(6, 3));

let a = 0;
let b = 0;
let opcao = -1;

while (opcao != 0) {

    console.log("\nEscolha uma operação:");
    console.log("1 - Soma");
    console.log("2 - Multiplicação");
    console.log("3 - Divisão");
    console.log("4 - Subtração");
    console.log("0 - Sair");

    opcao = parseInt(prompt("Digite a operação desejada: "));

    if (opcao === 0) {
        console.log("Saindo...");
        break;
    }

    a = parseInt(prompt("Digite o primeiro número: "));
    b = parseInt(prompt("Digite o segundo número: "));

    if (opcao === 1) {
        console.log("Resultado da Soma: ", Soma(a, b));

    } else if (opcao === 2) {
        console.log("Resultado da Multiplicação: ", Multi(a, b));

    } else if (opcao === 3) {
        console.log("Resultado da Divisão: ", Divi(a, b));

    } else if (opcao === 4) {
        console.log("Resultado da Subtração: ", Sub(a, b));

    } else {
        console.log("Opção inválida!");

    }



}