//                  0          1          2          3        4
let productos = ["Coca-cola","Agua","Chocolinas","Manteca","Queso"]
console.log ("PRODUCTOS DISPONIBLES")
for (let i=0; i<productos.length ; i++){
    console.log ("Indice " + i + " " + productos[i])
}
let productoEliminado = productos.pop ()
console.log ("El producto eliminado es:" + productoEliminado)
console.log ("-".repeat(36))
console.log ("STOCK ACTUALIZADO")
for (producto of productos){
    console.log (producto)
}