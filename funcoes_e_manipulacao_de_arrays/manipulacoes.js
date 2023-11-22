//forEach percorre um array

const lista1 = [3, 8, 1, 10]

lista1.forEach((value, i, listRef) => {
    //console.log(value, i, listRef)
}) // 0 3 [3, 8, 1, 10]

//Filter cria um novo array com os valores retornados a partir de outro array

const numerosPares = lista1.filter((elemento) =>{
    return(elemento % 2 === 0)
})

//console.log(numerosPares) [8, 10]

//Map

const metodoMap = lista1.map((elemen) =>{
    return elemen * elemen
})

//console.log(metodoMap) [9, 64, 1, 100]


class Pessoa  {
    constructor(nome) {
        this.nome = nome
    }
}

const pessoas  = [new Pessoa('Lucas'), new Pessoa('João'), new Pessoa('Maria'), new Pessoa('Ana')]

const listaDePessoasEmHtml = pessoas.map((person) => {
    return `
        <ul>
            <li>
                ${person.nome}
            </li>
        </ul>
    `
})

//console.log(listaDePessoasEmHtml)



//Reduce

const somaDosNumeros = lista1.reduce((accumulator, currentValue) => {
   return accumulator + currentValue
}, 0)

//console.log(somaDosNumeros)

const nomes = [{nome: 'Lucas'}, {nome: 'Mariana'}, {nome: 'Anderson'}, {nome: 'Gabriel'}, {nome: 'Luiza'}]

const testeDeJoin = nomes.map((e) => e.nome)
.filter((e) => e.includes('i'))
.join('; ')

console.log(testeDeJoin)