/* Crie uma função que receba 1 parâmetro e calcule 5% de desconto, retornando o valor do desconto; */
function calcularDesconto(valor){
    let desconto = valor * 0.05;
    console.log(desconto);
    return desconto;
  }
  
  calcularDesconto(67);

/* Crie uma função que receba 2 parâmetros e exiba o resultado e o resto da divisão entre eles; */
function calcularDivisao(valor1, valor2){
    let divisao = valor1 / valor2;
    let resto = valor1 % valor2;
    console.log("O resultado da divisão é: " + divisao + " E o resto é: " + resto);
    
  }
  
  calcularDivisao(14,5)

/* Crie uma função que recebe 2 parâmetros (altura e peso) e retorna o IMC; */
function calculoIMC(altura, peso){
    let calcularIMC = peso / (altura **2);
    console.log(calcularIMC);
    return calcularIMC;
  }
  
  calculoIMC(1.80, 65)

/* Crie uma função que recebe 3 parâmetros, e utilizando a fórmula de Báskara, mostre o resultado de x' e x". */
function bhaskara(a, b, c){
    let delta = (b**2) - (4*a*c);
    
    let x1 = (-b + Math.sqrt(delta)) / (2*a);
    
    let x2 = (-b - Math.sqrt(delta)) / (2*a);
    
    console.log('O valor de x1 é ' + x1 + '. E o valor de x2 é ' + x2);
  }
  
  
  bhaskara(1,5,4);

/* Refatore seu código da questão anterior, de maneira que o novo código possua 3 funções:

a. A primeira recebe 3 parâmetros e calcula apenas o resultado de "delta";

b. A segunda recebe 3 parâmetros e calcula o resultado de x';

c. A terceira recebe 3 parâmetros e calcula o resultado de x";

/* a */
function calcDelta(a,b,c){
    let delta = (b**2) - (4*a*c);
    
    console.log(delta);
    return delta;
  }
  
  calcDelta(1,5,4);
  calcDelta(2,4,6);

/* b e c */
let delta;

function calcDelta(a,b,c){
  delta = (b**2) - (4*a*c);
  return delta;
}

console.log(calcDelta (1,5,4));


function calcX1(a,b,c){
  let x1 = (-b + Math.sqrt(delta)) / (2*a);
  console.log(x1);
}

calcX1(1,5,4);

function calcX2(a,b,c){
  let x2 = (-b - Math.sqrt(delta)) / (2*a);
  console.log(x2);
} 

calcX2(1,5,4);

/* Crie uma função que calcule quantos dias o usuário viveu, baseado na idade */
let idade = prompt("Digite sua idade em anos")

function calcIdade(idade){
	
	let idadeDias = idade * 365;
	console.log(idadeDias);
	return(idadeDias);
}

calcIdade (idade); 

/* Crie uma função que calcule quantos batidas por dia dá um coração, considerando que, ele bate a 70 bpm */
let bpm;

function batimentosDia(bpm){
	let minDia = 24 * 60;
	let batDia = minDia * 70;
	console.log(batDia)
}

batimentosDia(bpm);

OU

let minDia = 24 * 60;

function batimentosDia(minDia){
	
	let batDia = minDia * 70;
	console.log(batDia)
}

batimentosDia(minDia);

/* Batimentos na vida toda do indivíduo */
let idade = prompt("Digite sua idade em anos");
let idadeDias = idade * 365;

function calcIdade(idade){
	
	console.log(idadeDias);
	return(idadeDias);
}

calcIdade (idade); 


let minDia = 24 * 60;
let batDia = minDia * 70;

function batimentosDia(minDia){
	
	console.log(batDia);
    return(batDia);
}

batimentosDia(minDia);
  

let calculo = idadeDias * batDia;
console.log(calculo);

