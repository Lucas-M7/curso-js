class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    } falar() {
        console.log(`O meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
    }
}

new Pessoa()