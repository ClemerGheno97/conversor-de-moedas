const convertButton = document.querySelector(".convert-button")
const moedaSelect = document.querySelector(".moeda-select")

function convertValues() {
    const inputValor = document.querySelector(".input-valor").value
    const moedaConverter = document.querySelector(".valor-section")
    const moedaConvertida = document.querySelector(".valor-section-convertido")

    console.log(moedaSelect.value)
    const dolarToday = 5.4427989
    const euroToday = 6.3095
    const libraToday = 7.3309

    moedaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValor)

    if (moedaSelect.value == "dolar") {
        moedaConvertida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor / dolarToday)
    }

    if (moedaSelect.value == "euro") {
        moedaConvertida.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor / euroToday)
    }

    if (moedaSelect.value == "libra") {
        moedaConvertida.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputValor / libraToday)
    }

}

convertButton.addEventListener("click", convertValues)