/* Crie uma função que dado um número seja retornado o número reverso. Ex.: dado 1234, devolve 4321. */
let numero;

function reverterNumero(numero){
  return numero.split('').reverse().join('');
}

console.log(reverterNumero('1234'));

/* Crie uma função que recebe uma palavra e ordena suas letras em ordem alfabética. */
let palavra;

function ordenar(palavra){
  return palavra.split('').sort().join('');
}

console.log(ordenar('casa'));

/* Crie uma função que receba uma string, contendo nome e sobrenome, e retorne as inicias. Ex.: dado "Débora Borges", retorne "DB". */
let nome;

function iniciaisNome(nome){
  let idEspaco = nome.indexOf(' ');
  console.log(idEspaco);
  let primeiraLetra = nome.substr(0, 1);
  let segundaLetra = nome.substr(idEspaco+1,1)
  return primeiraLetra + segundaLetra;
  
}

console.log(iniciaisNome('Jessica Costa'))

/* Crie uma função que receba a quantidade de bilhetes vendidos em um concurso e sorteie um bilhete. */
function sorteio(quantidadebilhetes){
    return Math.floor(Math.random() * quantidadebilhetes + 1);
    
  }
  
  console.log(sorteio(100))

/* Altere a função que calcula IMC de maneira que o valor do IMC tenha apenas duas casas decimais. */
calculoIMC(1.70, 68)

function calculoIMC(altura, peso){
  let calcularIMC = peso / (altura **2);
  return calcularIMC.toFixed(2);
}

console.log(calculoIMC(1.70, 68))