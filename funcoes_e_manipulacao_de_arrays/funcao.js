//Declaração de função e atribuindo ela a uma variável

function falarMeuNome(nome) {
    console.log(`My name is ${nome}`)
}

const meuNome = falarMeuNome

//meuNome('Lucas')


//Chamando uma função dentro de outra função

function meuTime() {
    console.log('O meu Celtics vai ser campeão!')
}

function campeao() {
    meuTime()
    console.log('E vai ganhar o 18° título!')
}

//campeao(meuTime)


//Closures: é a combinação de uma função com as referências ao estado que a circunda, tipo uma maneira dela "se lembrar" dela mesma

function soma(x) {
    return function(y) {
        return x + y
    }
}

//console.log(soma(10)(90))

//Formas de invocação => Apply, Call, New, Direta

const pessoa = {
    nome: 'Lucas',
    idade: 18
}

function gritar(param) {
    console.log(param, this.nome)
}

//gritar.apply(pessoa, ['Olaa!'])
//gritar.call(pessoa, 'Olá!')