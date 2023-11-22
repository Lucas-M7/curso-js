const entradas = [4, 6, 2, 5, 18, 6]
let i = 0

function gets() {
    const valor = entradas[i]
    i++
    return valor
}

function print(texto) {
    console.log(texto)
}

module.exports = { gets, print }