const valor = document.getElementById('productValue')
const submitBtn = document.getElementById('submitButton')
const resetBtn = document.getElementById('resetButton')
const cupon = document.getElementById('coupon')
const cuponForm = document.getElementById('couponForm')
const cuponArea = document.getElementById('couponArea')
const removeCoupon = document.getElementById('removeCoupon')

var descuento = 0

const calcularPorcentaje = (cupon = 0) => {

    submitBtn.classList.add('hide')
    resetBtn.classList.remove('hide')
    
    if(descuento === 0) {
        var operacion = valor.value - ((valor.value * cupon) / 100);
    } else {
        var operacion = valor.value - ((valor.value * descuento) / 100);
    }
    
    const resultado = `$${operacion}`
    document.getElementById('response').innerText = resultado
    
}

const resetState = () => {
    
    document.getElementById('response').innerText = ""
    valor.value = ""
    submitBtn.classList.remove('hide')
    resetBtn.classList.add('hide')
    
}

const aplicarCupon = () => {
    console.log(cupon.value)
    switch(cupon.value){
        
        case 'DESC9821': 
            removeCoupon.classList.remove('hide')
            Swal.fire(
                'Felicidades',
                `Usted ha ingresado correctamente el cupón ${cupon.value}`,
                'success'
            )
            cuponForm.classList.add('hide')
            cuponArea.innerText = `Cupón ${cupon.value} aplicado`
            descuento = 20
            calcularPorcentaje(descuento)
            
            break
            
            default:
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usted ha ingresado un cupón inválido',
                })
                break
                
    }
}

const removerCupon = () => {

    let html = `
        <form action="" id="couponForm">
            <input type="text" placeholder="CODE1234" id="coupon" maxlength="8">
            <input type="button" value="Aplicar cupón" onclick="aplicarCupon()">
        </form>
    `

    removeCoupon.classList.add('hide')
    cuponArea.innerHTML = html
    descuento = 0

    calcularPorcentaje()

    Swal.fire(
        'Hecho',
        `Removiste el cupón correctamente`,
        'success'
    )
    
}
        
        
        