const numeroQualquer = new Promise((resolve, reject) => {
    setTimeout(() =>{
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 2000)
})

numeroQualquer
.then((valor) => {
    console.log(valor)
    return valor + 10
})
.then((valor) => {
    console.log(valor)
})
.catch((erro) =>{
    console.error(erro)
})
.finally(() => {
    console.log('Promessa finalizada!')
})