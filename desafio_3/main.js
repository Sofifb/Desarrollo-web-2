let nombreProducto = "coca-cola";
let precioUnitario = 1500;
let cantidadDeseada = prompt (`¿Cuántas ${nombreProducto} que cuesta $${precioUnitario} cada una desea comprar? Si elige 5 o más unidades tendrá un descuento del 10%`)
cantidadDeseada = parseInt (cantidadDeseada)
const costoTotal = precioUnitario * cantidadDeseada
if (cantidadDeseada >= 5) {
    let costoConDescuento = costoTotal - costoTotal*10/100
    alert (`El costo total de su compra con un 10% de descuento es: $${costoConDescuento}`)
}else{
    alert (`El costo total de su compra es: $${costoTotal}`)
}