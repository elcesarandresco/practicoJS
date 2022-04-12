const calcularPorcentaje = () => {

    valor = document.getElementById('productValue')
    porcentaje = document.getElementById('discountPercentage')

    operacion = valor.value - ((valor.value * porcentaje.value) / 100);
    resultado = `$${operacion}`
    document.getElementById('response').innerText = resultado


}