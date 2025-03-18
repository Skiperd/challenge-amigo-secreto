//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const input = document.getElementById("amigo")
const ul = document.getElementById("listaAmigos")
const ulResu = document.getElementById("resultado")

const arr = []


function criaLi(){
    let li = document.createElement('li')
    return li
}

function adicionarAmigo(){
    const li = criaLi()
    if(input.value == "") {
        alert('Insira um nome válido')
    }
    li.innerText = input.value
    arr.push(input.value)
    input.value = ""
    ul.appendChild(li)
}

function sortearAmigo(){
    if(arr == "") {
        alert('Preencha os valores')
    } else {
        const li = criaLi()
        let sorteio = Math.floor(Math.random() * arr.length)
        let nomeSorteado = arr[sorteio]
        li.innerText = `O amigo secreto sorteado é: ${nomeSorteado}`
        ulResu.appendChild(li)
    }

}