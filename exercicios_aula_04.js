/* Crie um código que retorne a quantidade de pontos que seu time fez de acordo com o resultado do jogo.
(Se o seu time venceu, ele recebe 3 pontos. Se o resultado foi empate, ele recebe 1 ponto. 
Se ele perdeu, não recebe nada.) */
function calcularPonto(resultado){
    if(resultado === 'v'){
      return '3 pontos';
    }else if(resultado === '1 ponto'){
      return 1;
    }else if(resultado === '0 ponto'){
      return 0;
    }else {
      return 'Resultado desconhecido';
    }  
  }
  
  console.log('Vai, Corinthians!!');
  console.log(calcularPonto('v'));
  console.log(calcularPonto('y'));

  /* Com switch */
  function calcularPontos(resultado){

    switch (resultado){
      case 'v':
        console.log('3 pontos');
        break;
      case 'e':
        console.log('1 ponto');
        break;
      case 'd':
        console.log('O ponto');
        break;
      default:
        console.log('Resultado desconhecido')
    }
    }
    
    calcularPontos('v')

/* Palíndromos são palavras ou frases que podem ser lidas da esquerda para a direita ou da direita para
 a esquerda. Crie uma função que informe se uma palavra é uma palíndromo. */
 let palavra = prompt('Digite uma palavra: ')

function verificarPalindromo(palavra){
  let palavraInvertida = palavra.split("").reverse().join("");
    if (palavra == palavraInvertida){
      return 'É um palíndromo'
    }else {
      return 'Não é um palíndromo'
    }
  
}

console.log(verificarPalindromo(palavra))

/* Faça uma função que dado um número, retorne se ele é par ou ímpar. */
let numero = prompt('Digite um número: ')


function verificarTipo(numero){
  if (numero % 2 == 0){
    return 'Par'
  }else {
    return 'Ímpar'
  }
}

console.log(verificarTipo(numero))

/* Faça uma função que dado um número, retorne a classificação do ângulo. 
(Ângulo agudo: ângulo com medida maior que 0° menor que 90°; Ângulo reto: ângulo com medida igual a 90°; 
Ângulo obtuso: ângulo com medida maior que 90° e menor que 180°; Ângulo raso: ângulo com medida igual 
a 0° ou 180°; Ângulo Côncavo: ângulo com medida entre 180° e 360°; Ângulo completo: ângulo com medida
igual a 360°). */
let angulo = prompt('Digite um angulo')

function classificacaoAngulo(angulo){
  if (angulo <90 && angulo >0){
    return 'Ângulo Agudo';
  }
  else if (angulo === 90){
    return 'Ângulo Reto';
  }
  else if (180 > angulo && angulo > 90){
    return 'Ângulo Obtuso';
  }
  else if (angulo === 0 || angulo === 180){
    return 'Ângulo Raso';
  }
  else if (360 < angulo && angulo > 180){
    return 'Ângulo Côncavo';
  }
  else if (angulo === 360){
    return 'Ângulo Completo';
  }

  }
  
  console.log(classificacaoAngulo(360))
  alert('O seu ângulo é ' + classificacaoAngulo(angulo))

/* 5 */
let codigo = prompt('Digite um codigo')

function classificacaoProduto(codigo){
  if (codigo == 1){
    return 'Alimento não-perecível'
  }
  if (codigo == 2 || codigo == 3 || codigo == 4){
    return 'Alimento perecível'
}
  if (codigo == 5 || codigo == 6){
    return 'Vestuário'
}
  if (codigo == 7){
    return 'Higiene Pessoal'
}
  if (codigo >= 8 && codigo <= 15){
    return 'Limpeza e Utensílios Domésticos'
}
  else {
    return 'Código inválido'
}

}

alert('A classificação do produto é: ' + classificacaoProduto(codigo))

/* Se fizesse com switch, como ficaria if (codigo == 2 || codigo == 3 || codigo == 4)? E como fazer para grandes quantidades?*/

/* 6 */
let codigo = prompt('Digite o codigo do produto')
let quantidade = prompt('Digite a quantidade do produto')

function calcularCompra(codigo, quantidade){
    if (codigo == '100'){
        return 'Produto: Cachorro quente; ' + 'Quantidade: ' + quantidade + '; Valor Total: R$' + (quantidade * 1.70)
    }
    if (codigo == '101'){
    return 'Produto: Bauru simples; ' + 'Quantidade: ' + quantidade + '; Valor Total: R$' + (quantidade * 2.30)
    }
    if (codigo == '102'){
        return 'Produto: Bauru com ovo; ' + 'Quantidade: ' + quantidade + ' ; Valor Total: R$' + (quantidade * 2.60)
    }
    if (codigo == '103'){
        return 'Produto: Hamburguer; ' + 'Quantidade: ' + quantidade + ' ; Valor Total: R$' + (quantidade * 2.40)
    }
    if (codigo == '104'){
        return 'Produto: Cheeseburguer; ' + 'Quantidade: ' + quantidade + ' ; Valor Total: R$' + (quantidade * 2.50)
    }
    if (codigo == '105'){
        return 'Produto: Refrigerante; ' + 'Quantidade: ' + quantidade + ' ; Valor Total: R$' + (quantidade * 1)
    }
    else {
        return 'Código inválido.'
    }

}

alert(calcularCompra(codigo, quantidade))

/* Achei meu código bem feio, o que poderia melhorar?*/

/* Escreva um código que receba dois número e determine qual o maior entre eles. */
let primeiroNumero = prompt('Digite o primeiro número')
let segundoNumero = prompt('Digite o segundo número')

function numeroMaior(primeiroNumero, segundoNumero){
    if (primeiroNumero > segundoNumero){
        return 'O primeiro número é o maior.'
    } 
    if (primeiroNumero < segundoNumero){
      return 'O segundo número é o maior.'
    }
    if (primeiroNumero == segundoNumero){
      return 'Os números são iguais.'
    }
    
}

alert(numeroMaior(primeiroNumero, segundoNumero))

/* Escreva um código que receba um número (1-7) e devolva o dia da semana correspondente.*/
let numero = prompt('Digite um numero')

  function calcularDia(numero){
    if (numero == 1){
      return 'Domingo';
    }
    if (numero == 2){
      return 'Segunda-feira';
    }
    if (numero == 3){
      return 'Terça-feira';
    }
    if (numero == 4){
      return 'Quarta-feira';
    }
    if (numero == 5){
      return 'Quinta-feira';
    }
    if (numero == 6){
      return 'Sextouuu';
    }
    if (numero = 7){
      return 'Sábado';
    } else{
      return 'A semana só tem 7 dias, querida!'
    }
}

alert('O dia da semana é: ' + calcularDia(numero))

/*Escreva um código que receba um número (1-12), e diga qual mês e quantos dias ele tem.*/

let numero = prompt('Digite um numero')

  function calcularMes(numero){
    if (numero == 1){
      return 'O mês é Janeiro, com 31 dias.';
    }
    if (numero == 2){
      return 'O mês é Fevereiro, com 28 dias.';
    }
    if (numero == 3){
      return 'O mês é Março, com 31 dias.';
    }
    if (numero == 4){
      return 'O mês é Abril, com 30 dias.';
    }
    if (numero == 5){
      return 'O mês é Maio, com 31 dias.';
    }
    if (numero == 6){
      return 'O mês é Junho, com 30 dias.';
    }
    if (numero == 7){
      return 'O mês é Julho, com 31 dias.';
    }
    if (numero == 8){
      return 'O mês é Agosto, com 31 dias.'
    }
    if (numero == 9){
        return 'O mês é Setembro, com 30 dias.'
    } 
    if (numero == 10){
        return 'O mês é Outubro, com 31 dias.'
    }
    if (numero == 11){
        return 'O mês é Novembro, com 30 dias.'
    }
    if (numero == 12){
        return 'O mês é Dezembro, cujo único dia que importa é 23.'
    }else {
      return 'O ano só tem 12 meses, querida!'
    }
}

alert(calcularMes(numero))

/* Utilizando switch-case, receba uma letra e determine se é uma vogal ou consoante. */
let letra = prompt('Digite uma letra');

function classificarLetra(letra){

    switch (letra){
      case 'a':
        console.log('É uma vogal.');
        break;
      case 'e':
        console.log('É uma vogal.');
        break;
      case 'i':
        console.log('É uma vogal.');
        break;
      case 'o':
        console.log('É uma vogal.');
        break;
      case 'u':
        console.log('É uma vogal.');
        break;
      default:
        console.log('É uma consoante.')
    }
  
    }

alert('A letra é uma: ' + classificarLetra(letra))

/* DUVIDA!!!!! A função funcionou ok e o resultado retorna pra mim, mas para o usário fica undefined.*/