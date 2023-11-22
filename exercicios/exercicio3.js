// Fazer um programa que calcule e imprima o salário a ser transferido para um funcionário
// Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios
// O salário a ser transferido é calculado da seguinte maneira

// Valor bruto do salário - percentual de imposto mediante a faixa salarial + adição dos benefícios


// Para calcular o percentual de imposto segue as aliquotas:

/*
    De R$ 0.00 a R$ 1100.0 - 5.00%
    De R$ 1100.01 a R$ 2500.00 = 10.00%
    Maior que R$ 2500.00 = 15.00%
*/

/*
    Exemplo:
        Entrada:
            2000
            250

        Saída:
            2050.00    
*/

const { gets, print } = require('./funcoes-auxiliares-ex3')

const valorSalarioBruto = gets()
const valorAdicionalDosBeneficios = gets()

function calcularPercentualDoImposto(salarioBruto, percentual) {
    return (percentual / 100) * salarioBruto
}

function pegarPercentualDoImpostoComBaseNoSalario(salario) {

    return salario >= 0 && salario <= 1100 ? 5 :
        salario >= 1100.01 && salario <= 2500 ? 10 :
            15;
}

const valorDoImposto = calcularPercentualDoImposto(valorSalarioBruto, pegarPercentualDoImpostoComBaseNoSalario(valorSalarioBruto))

const valorATransferir = valorSalarioBruto - valorDoImposto + valorAdicionalDosBeneficios

print(valorATransferir)