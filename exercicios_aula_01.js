/* Faça uma mensagem de "Olá Mundo!" */
alert("Olá, mundo!")

/* Faça uma saída de soma de 2 números. */
var n1 = prompt("Digite o primeiro número: ");
var n2 = prompt("Digite o segundo número: ");

var sum = parseFloat(n1) + parseFloat(n2)
alert("A soma dos números é: " + sum)

/* Utilizando variáveis, solicite o ano de nascimento do usuário, calcule sua idade e mostre em um alert. */
var anoNasc = prompt("Digite o ano do seu nascimento: ");
var anoAtual = 2019

var idade = 2019 - parseFloat(anoNasc)
alert("Sua idade é:" + idade)

/* Receba do usuários 3 números e calcule a média entre eles. */
var n1 = prompt("Digite o primeiro número: ");
var n2 = prompt("Digite o segundo número: ");
var n3 = prompt("Digite o terceiro número: ");

var med = parseFloat(n1)+ parseFloat(n2) + parseFloat(n3)/3
alert("A média dos números é: " + med)