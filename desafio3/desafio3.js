"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let buttonUpdade = document.getElementById("atualizar-saldo");
let buttonClear = document.getElementById("limpar-saldo");
let sum = document.getElementById("soma");
let fieldSumary = document.getElementById("campo-saldo");
let saldoTotal = 0;
limparSaldo();
function sumrAoSaldo(sum) {
    if (fieldSumary) {
        saldoTotal += sum;
        fieldSumary.innerHTML = saldoTotal.toString();
        limparCamposum();
    }
}
function limparCamposum() {
    sum.value = "";
}
function limparSaldo() {
    if (fieldSumary) {
        saldoTotal = 0;
        fieldSumary.innerHTML = saldoTotal.toString();
    }
}
if (buttonUpdade) {
    buttonUpdade.addEventListener("click", () => {
        sumrAoSaldo(Number(sum.value));
    });
}
buttonClear.addEventListener("click", () => {
    // Percebam que aqui o typescript não acusou o botao de ser nulo e não precisei do if. Caso queiram fazer o teste, retirem a exclamação.
    limparSaldo();
});
// <!DOCTYPE html>
// <html lang="en">
// 	<head>
// 		<meta charset="UTF-8" />
// 		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
// 		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
// 		<title>Typescript</title>
// 		<script src="desafio3.js" defer></script>
// 	</head>
// 	<body>
// 		<h4>Valor a ser adicionado: <input id="soma"> </h4>
// 		<button id="atualizar-saldo">Atualizar saldo</button>
// 		<button id="limpar-saldo">Limpar seu saldo</button>
// 		<h1>Seu saldo é: <span id="campo-saldo"></span></h1>
// 	</body>
// </html>
