/**let contador = 0
function corpoprograma() {
console.log(contador)
contador++
}
async function corpoPrograma() {

    console.log("Regra de negocio")

}
console.log("começou o Programa")
// setTimeout(corpoPrograma, 5000)
setInterval(corpoPrograma, 1000)
console.log("Terminou o programa")

const frutas = [
    'banana',
    'tomate',
    'azeitona',
    'bergamota',
    'manga'
]

const verduras = [
    'cenoura',
    'xuxu',
    'beringela',
    'abobora',
    'beterraba'
]

const cor = [
    'roxo',
    'azul',
    'rosa',
    'preto',
    'branco'

]
    

function escreveArray(array) {
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
        setTimeout(() => { }, 1000)

    }
}
escreveArray(frutas)
escreveArray(verduras)
escreveArray(cor)
**/


setInterval(() => {
    const dataAtual = new Date()
    const horaAtual = String(dataAtual.getHours()).padStart(2, "0")
    const minutoAtual = String(dataAtual.getMinutes()).padStart(2, "0")
    const segundoAtual = String(dataAtual.getSeconds()).padStart(2, "0")
    console.log(horaAtual, minutoAtual, segundoAtual)
    const horaFormatada = `${horaAtual} ${minutoAtual} ${segundoAtual}`
    document.getElementById("clock").innerHTML = horaFormatada
}, 1000)