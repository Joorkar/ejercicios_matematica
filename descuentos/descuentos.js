const coupons = [
    { name: 'Este_no_es_un_cupon', discount: 15 },
    { name: 'AuronPlay', discount: 30 },
    { name: 'Nunca_pares_de_aprender', discount: 50 }
]

const calcularPrecioConDescuento = (precio, descuento) => (precio * (100 - descuento)) / 100

onClickButtonPriceDiscount = () => {
    const inputPrice = document.getElementById('inputPrice')
    const priceValue = inputPrice.value

    const inputCoupon = document.getElementById('inputCoupon')
    const couponValue = inputCoupon.value

    const isCouponValueValid = (coupon) => coupon.name === couponValue
    const userCoupon = coupons.find(isCouponValueValid)

    if (!userCoupon) {
        alert(`El cupón ${couponValue} no es valido`)
    } else {
        const descuento = userCoupon.discount
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento)
    
    const resultP = document.getElementById('ResultP')
    resultP.innerText = `El precio con descuento es: $${precioConDescuento}`
    }
}