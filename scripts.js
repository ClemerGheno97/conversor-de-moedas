const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputvalue = document.querySelector(".input-value").value
    const currencyConvert = document.querySelector(".value-section")
    const currencyConverted = document.querySelector(".value-section-converted")

    console.log(currencySelect.value)
    const realToday = 0.18
    const dolarToday = 5.41
    const euroToday = 6.33
    const libraToday = 7.30

    currencyConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputvalue)

    if (currencySelect.value == "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputvalue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputvalue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputvalue / libraToday)
    }

}

function changeCurrency() {
    const nameCurrency = document.getElementById("name-currency")
    const imgcurrency = document.querySelector(".img-currency")


     if (currencySelect.value == "dolar") {
        nameCurrency.innerHTML = "Dolar Americano"
        imgcurrency.src = "./assets/dolar.png"
     }

     if (currencySelect.value == "euro") {
        nameCurrency.innerHTML = "Euro"
        imgcurrency.src = "./assets/euro.png"
     }

     if (currencySelect.value == "libra") {
        nameCurrency.innerHTML = "Libra"
        imgcurrency.src = "./assets/libra.png"
     }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)