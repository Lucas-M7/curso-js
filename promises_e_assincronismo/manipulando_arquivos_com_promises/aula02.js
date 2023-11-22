const fs = require('fs')
const path = require('path')

const pathFile = path.resolve(__dirname, 'coisas.csv')

const promiseDaLeituraDoArquivo = fs.promises.readFile(pathFile)

setTimeout(() =>{
    promiseDaLeituraDoArquivo
.then((arquvio) => {
    console.log(arquvio.toString('utf-8'))
})
.catch((erro) => {
    console.error('Deu ruim!', erro)
})
.finally(() => {
    console.log('Promessa finalizada.')
})
}, 2000)