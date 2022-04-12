const calcularPerimetroCuadrado = () => {

    const input = document.getElementById("InputCuadrado")
    const perimetro = input.value * input.value
    const resultado = document.getElementById("CuadradoResult")
    resultado.value = `Perimetro: ${perimetro}cm^2`

}

const calcularAreaCuadrado = () => {

    const input = document.getElementById("InputCuadrado")
    const area = input.value * 4
    const resultado = document.getElementById("CuadradoResult")
    resultado.value = `Area: ${area}cm`

}



