debugger

//Saludo bienvenida 

let nombreCompleto = prompt ("Ingrese su nombre completo, por favor:");
alert ("Bienvenido, " + nombreCompleto);

//informacion de usuario

let ventas = parseInt(prompt ("¿Cuantos productos vendiste?"))
let precioTotal = 0 ;

for (let i = 1; i <= ventas; i++){
    let precio = parseInt(prompt("¿Cuanto salio el producto? " + i));
    console.log("El producto " + i + " salio " + precio)
    precioTotal += precio;
    console.log("El precio total es de " + precioTotal)
}

if (ventas >= 5){
    console.log("Tu comisión es del 15%")
}
else if (ventas < 5){
    console.log("Tu comisión es de 5%")
}