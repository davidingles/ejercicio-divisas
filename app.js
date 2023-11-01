const DIVISAS = document.querySelector("select")
const valorDivisa = document.querySelector("#cambio")
const cambios = [
    { moneda: "Elige una divisa", elCambio: '' },
    { moneda: "Dólares USA", elCambio: 1.06 },
    { moneda: "Libras esterlinas", elCambio: 0.87 },
    { moneda: "Pesos argentinos", elCambio: 370.22 },
    { moneda: "Pesos colombianos", elCambio: 4510.51 },
    { moneda: "Pesos mexicanos", elCambio: 19.33 },
]

cambios.map(valor => {
    DIVISAS.insertAdjacentHTML("beforeend", `<option value="${valor.elCambio}">${valor.moneda}</option>`)
})

function actualizaValorDivisa() {
    const indice = DIVISAS.selectedIndex
    const MONEDA = DIVISAS[indice].text
    if (DIVISAS.value !== "") {
        valorDivisa.textContent = `El € vale ${DIVISAS.value} ${MONEDA}`
    }
}

actualizaValorDivisa()
DIVISAS.addEventListener("change", actualizaValorDivisa)