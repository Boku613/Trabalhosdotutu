const Incrementar = document.getElementById("Incrementar")
const Decrementar = document.getElementById("Decrementar")
const texto = document.getElementById("titulo")

let contador = 0

Incrementar.addEventListener("click", () => {
    contador ++
    console.log(contador)
    titulo.innerText = contador
})


Decrementar.addEventListener("click", () => {
    contador --
    console.log(contador)
    texto.innerText = contador
})  