// Nome do aluno: Letícia Fidelis Lourenço
// Atividade: Lista de Exercícios 1 - Estudando as estruturas básicas
// Descrição: Conjunto de exercícios básicos de programação que envolvem estruturas condicionais (if, if-else, switch-case), loops (for, while, do-while)

// Importa o módulo 'prompt-sync' para permitir entrada de dados pelo usuário no console (Node.js)
// A função prompt() será usada para ler valores digitados pelo usuário durante a execução do programa
const prompt = require("prompt-sync")();
let menu; //Declara a váriavel Menu dos exercicios

do {
  // Inicia a execução de repetir os 15 exercicios
  console.log("Seja bem vindo a lista de exercicios!");
  // Recebe o numero de 1 a 15 que o usuário digitar.
  menu = parseInt(
    prompt(
      "Digite o número exercicio que deseja executar de 1 a 15, para sair digite 0."
    )
  );

  // Inicio da estrutura Switch
  switch (menu) {
    case 1:
      //Exercicio 1: Verifica se o número é par ou ímpar
      let numIpunt = prompt("Digite um número: "); //Pede um número de entrada ao usuário
      if (numIpunt % 2 == 0) {
        //Verifica se o número é par
        console.log("O número " + numIpunt + " é par.");
      } else {
        // Senão é par, então será ímpar, então imprime que é ímpar
        console.log("O número " + numIpunt + " é ímpar.");
      }
      break;
    case 2:
      //Exercicio 2: Determinar se a pessoa é criança, adolescente, adulto ou idoso de acordo com a idade utilizando de if-else.

      //Pede uma idade de entrada ao usuário
      let idadeInput = parseInt(prompt("Digite uma idade"));
      // Verifica se a idade que o usuario digitou é menor ou igual a 13 anos
      if (idadeInput <= 13) {
        console.log("A idade é " + idadeInput + " anos então é uma criança");
        //  Verifica se a idade que o usuario digitou está entre 14 e 17 anos
      } else if (idadeInput > 13 && idadeInput <= 17) {
        console.log("A idade é " + idadeInput + " anos então é um adolescente");
        // Verifica se a idade que o usuario digitou está entre 18 e 60 anos
      } else if (idadeInput > 17 && idadeInput <= 60) {
        console.log("A idade é " + idadeInput + " anos então é um adulto");
        // Verifica se a idade que o usuario digitou é maior que 60
      } else if (idadeInput > 60) {
        console.log("A idade é " + idadeInput + " anos então é um idoso");
        // Caso nenhum dos casos anteriores seja verdadeiro (ex: idade inválida ou NaN)
      } else {
        console.log("Idade inválida, digite novamente");
      }
      break;
    case 3:
      //Exercicio 2: um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

      // Entra com o valor da nota do aluno
      let notaInput = prompt("Entre com a nota do aluno");
      // Verifica se a nota é maior ou igual a 6, se o aluno está aprovado
      if (notaInput >= 6) {
        console.log("Situação: Aprovado!");
        // Verifica se a nota é maior que 3 e menor ou igual a 5 se sim o aluno está de recuperação
      } else if (notaInput > 3 && notaInput <= 5) {
        console.log("Situação: Recuperação!");
        // Verifica se a nota é menor ou igual a 3 se sim o aluno está reprovado
      } else if (notaInput <= 3) {
        console.log("Situação: Reprovado!");
        // Caso nenhum dos casos anteriores seja verdadeiro (ex: nota inválida ou NaN)
      } else {
        console.log("Nota inválida, digite novamente");
      }
      break;
    case 4:
      // Menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

      let valorEmConta = 3800; //Valor que o usuario tem conta inicialmente
      let saque; // Variável para armazenar o valor do saque
      let depositar; // Variável para armazenar o valor do depósito
      let menuBanco; // Variável para armazenar a escolha do menu
      do {
        // Início do loop do menu bancário
        console.log("Seja bem vindo ao seu Banco");
        console.log("Digite 1 para Sacar");
        console.log("Digite 2 para depositar");
        console.log("Digite 3 para sair");

        menuBanco = parseInt(prompt("Escolha uma opção: "));

        switch (menuBanco) {
          case 1: // Caso o usuário escolha sacar
            saque = parseFloat(prompt("Digite o valor que deseja sacar: ")); // Solicita o valor do saque
            if (saque <= valorEmConta) {
              // Verifica se há saldo suficiente
              valorEmConta -= saque; // Subtrai o valor sacado do saldo
              console.log("Saque de R$" + saque + " realizado com sucesso!");
              console.log("Saldo atual: R$ " + valorEmConta); // Exibe o novo saldo
            } else {
              // Mensagem caso o saldo seja insuficiente
              console.log("Saldo insuficiente para realizar o saque.");
            }
            break;
          case 2:
            // Caso o usuário escolha depositar
            console.log("Operação de depósito selecionada");
            depositar = parseFloat(
              prompt("Digite o valor que deseja depositar: ")
            ); // Solicita valor do depósito
            if (depositar > 0) {
              // Verifica se o valor é válido
              valorEmConta += depositar; // Adiciona o valor ao saldo
              console.log(
                "Depósito de R$ " + depositar + " realizado com sucesso!"
              );
              console.log("Saldo atual: " + valorEmConta); // Mostra o novo saldo
            } else {
              console.log("Valor de depósito inválido."); // Mensagem caso o saldo seja insuficiente
            }
            break;
          case 3:
            console.log("Saindo do sistema bancário..."); //Encerra o loop
            break;
          default: // Se o usuário digitar uma opção inválida
            console.log("Opção inválida");
        }
      } while (menuBanco !== 3); // O loop continua enquanto o usuário não escolher sair
      break;
    case 5:
      //Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa edetermina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

      console.log("Calculadora de IMC");
      let IMC;
      let peso = parseFloat(
        prompt(" Digite o seu peso (Utilize ponto ao inves de vírgula) ")
      ); // Recebe o valor do peso do usuário
      let altura = parseFloat(
        prompt(" Digite o sua altura (Utilize ponto ao inves de vírgula) ")
      ); // Recebe o valor da altura do usuário
      IMC = peso / (altura * altura); // Calculo do IMC
      if (IMC > 17 && IMC <= 18.5) {
        // Se o IMC for maior que 17 e menor ou igual que 18.5 vai aparecer a mensagem de 'abaixo do peso'
        console.log("O seu peso IMC é " + IMC + "Abaixo do peso");
      } else if (IMC > 18.5 && IMC <= 24.9) {
        // Se o IMC for maior que 18.5 e menor ou igual que 24.9 vai aparecer a mensagem de 'normal'
        console.log("O seu peso IMC é " + IMC + "Normal");
      } else if (IMC > 24.9 && IMC <= 29.9) {
        // Se o IMC for maior que 24.5 e menor ou igual que  24.9 vai aparecer a mensagem de 'Sobre'
        console.log("O seu peso IMC é " + IMC + "Sobrepeso");
      } else if (IMC > 29.9) {
        // Se o IMC for maior que 29.9 vai aparecer a mensagem de 'Obesidade'
        console.log("O seu peso IMC é " + IMC + "Obesidade");
      } else {
        // Se não for nenhuma das opções
        console.log("Entrada inválida, digite novamente!");
      }

      break;

    case 6:
      //Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

      //Receber a entrada o lado A
      let A = parseInt(prompt(" Entre com o valor do lado A"));
      //Receber a entrada o lado B
      let B = parseInt(prompt(" Entre com o valor do lado B"));
      //Receber a entrada o lado C
      let C = parseInt(prompt(" Entre com o valor do lado C"));

      // Fórmula para definir se é um triangulo
      if (A < B + C && B < A + C && C < A + B) {
        if (A === B && B === C) {
          // Se o lado A for igual ao lado B e o lado B for igual ao lado C então será um equilátero
          console.log("É um triângulo equilátero");
        } else if (A === B || A === C || B === C) {
          // Se o lado A for igual ao lado B  ou lado A for igual ao lado C ou o lado B for igual ao lado C então será um isósceles
          console.log("É um triângulo isósceles");
        } else {
          // Senão for nenhuma das anteriores será um escaleno
          console.log("É um triângulo escaleno");
        }
      } else {
        //Caso não for um triangulo nem passará pelas condições anteriores virá diretamente pra cá
        console.log("Não é um triângulo");
      }

      break;

    case 7:
      //As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

      let valor = 0.3; // Preço normal da maça
      let desconto = 0.05; // Desconto caso caso o cliente compre mais de 12 maçãs
      let TotValor; // valor total da compra
      let inputMaca = parseInt(
        prompt("Digite o valor de quantas maçãs deseja comprar")
      ); //Recebe valor de maças que o usuário digitou

      TotValor = inputMaca * valor; // calculo do valor total

      if (inputMaca > 12) {
        // Caso a quantidade de maçãs seja maior o usuário terá um desconto de 0.05 centavos em cada maça
        desconto = desconto * inputMaca; // calcula quanto o usuário  teve de desconto
        TotValor = TotValor - desconto; // Aplica o desconto
        console.log(
          "Você teve um desconto de 0.05 centavos em cada maça, valor total de: " +
            TotValor
        );
      } else {
        // Caso não seja um valor maior que 12 maçãs o usuário ira pagar o valor normal
        console.log(
          "Você não obteve nenhum desconto, valor total da sua compra é de: " +
            TotValor
        );
      }

      break;

    case 8:
      //Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

      //usuário entra com o primeiro valor
      let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
      //usuário entra com o segundo valor
      let valor2 = parseFloat(
        prompt("Digite o segundo valor (diferente do primeiro):")
      );

      //condição caso os valores sejam diferentes
      if (valor1 !== valor2) {
        //Caso o valor1 seja menor que o valor dois ele vem antes da vírgula
        if (valor1 < valor2) {
          console.log(valor1 + ", " + valor2);
        } else {
          // caso contrário o valor2 vem antes da vírgula
          console.log(valor2 + ", " + valor1);
        }
      } else {
        // caso os valores de entrada sejam iguais
        console.log("Entrada inválida, os valores são iguais");
      }
      break;

    case 9:
      //Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.

      for (
        let contagemRegressiva = 10; // a contagem recebe o valor de 10
        contagemRegressiva >= 1; // enquanto for maior ou igual 1 o program vai rodar
        contagemRegressiva-- // decremento de contagem regressiva a cada passada do looping
      ) {
        console.log(contagemRegressiva); //Exibe o contagem regressiva
      }
      break;

    case 10:
      // Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

      let numeroInput = parseInt(prompt("Digite um número inteiro:")); // Recebe o valor do número inteiro

      for (
        i = 0; // i se inicia com zero
        i <= 9; // Enquanto i for menor que 9 ele vai rodar o programa dez vezes, isso porque o 0 também é contado
        i++ // incremento de i a cada passada de looping
      ) {
        console.log(numeroInput); //Exibe o numero que usuário digitou
      }
      break;

    case 11:
      //Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

      let soma = 0; // Variavel da soma com valor zero para acumular os valores digitados pelos usuários

      for (
        let i = 1; // i se inicia com o numero 1
        i <= 5; // Enquanto i for menor que ou igual 5 o programa vai fazer a execução
        i++ // incremento de i a cada passada de looping
      ) {
        //Receberá os números do usuário
        let numero = parseFloat(prompt("Digite o + " + i + "º número: "));
        soma += numero; //Adiciona o número digitado à variável soma
      }

      //Exibe o resultado da total da soma
      console.log("A soma total dos números é: " + soma);

      break;
    case 12:
      //Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for
      let multiplicacao; //Variavel de resultado da multiplicação
      let numero = parseInt(
        prompt("Digite qual tabuada você quer utilizando números inteiros ")
      ); // Numero recebido pelo usuário
      for (
        let i = 1; // i se inicia com o numero 1
        i <= 10; // Enquanto i for menor que ou igual 10 o programa vai fazer a execução
        i++ // incremento de i a cada passada de looping
      ) {
        multiplicacao = numero * i; // multiplicação do numero recebido de entrada multiplicado pelo i
        console.log(i + " x " + numero + " = " + multiplicacao); //Exibe a tabuada
      }
      break;

    case 13:
      //Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

      // Declara a variável que armazenará o número digitado pelo usuário
      let numeroDecimal;

      // Variável que acumula a soma dos números digitados
      let somaParaMedia = 0;

      // Variável que conta quantos números foram digitados (exceto o zero)
      let contador = 0;

      // Estrutura de repetição que executa pelo menos uma vez
      do {
        // Solicita ao usuário que digite um número decimal
        // O valor digitado é convertido de string para número decimal com parseFloat
        numeroDecimal = parseFloat(
          prompt("Digite um número decimal (0 para sair):")
        );

        // Se o número digitado for diferente de 0, ele entra no cálculo
        if (numeroDecimal !== 0) {
          somaParaMedia += numeroDecimal; // Soma o número à variável acumuladora
          contador++; // Incrementa o contador de números válidos
        }

        // Repete o bloco enquanto o número digitado for diferente de 0
      } while (numeroDecimal !== 0);

      // Verifica se ao menos um número válido foi digitado
      if (contador > 0) {
        // Calcula a média aritmética
        let media = somaParaMedia / contador;

        // Exibe a média no console
        console.log("A média aritmética é:", media);
      } else {
        // Caso nenhum número válido tenha sido digitado (apenas 0)
        console.log("Nenhum número foi digitado.");
      }
      break;

    case 14:
      //Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

      // Solicita ao usuário que digite um número inteiro
      let numeroInt = parseInt(
        prompt("Digite um número inteiro para calcular o fatorial:")
      );

      // Inicializa a variável que armazenará o resultado do fatorial
      let fatorial = 1;

      // Laço for que vai de 1 até o número informado
      for (let i = 1; i <= numeroInt; i++) {
        // Multiplica o valor atual de 'fatorial' por 'i' em cada iteração
        fatorial *= i;
      }

      // Exibe o resultado
      console.log(`O fatorial de ${numeroInt} é ${fatorial}.`);

      break;

    case 15:
      // Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

      // Inicializa os dois primeiros números da sequência
      let a = 0;
      let b = 1;

      // Imprime os dois primeiros números
      console.log(a);
      console.log(b);

      // Gera e imprime os próximos 8 números (totalizando 10)
      for (let i = 2; i < 10; i++) {
        let proximo = a + b;
        console.log(proximo);

        // Atualiza os valores para a próxima iteração
        a = b;
        b = proximo;
      }
      break;
    default:
      console.log("Número inserido é inválido");
      break;
  }
} while (menu !== 0); //Finaliza a repetição quando o número for diferente de 0

console.log("Lista de exercicios encerrada!");
