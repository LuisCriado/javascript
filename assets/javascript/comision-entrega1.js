// calculadora porcentaje de comision 

debugger

//Saludo bienvenida 

let nombreCompleto = prompt ("Ingrese su nombre completo, por favor:");
alert ("Bienvenido a la calculadora de porcentaje por comisión, " + nombreCompleto);

//informacion de usuario

function datosIngresados(){
    let numero = parseFloat(prompt("Ingrese el monto total:"));
    let porcentaje= parseFloat(prompt ("Ingrese el porcentaje:"));
    let resultado = (numero * porcentaje / 100);

    console.log("Resultado: "+ resultado);
}

datosIngresados();

let numeroDeVentas= prompt("Número de ventas en el dia:");
let comisionPorVenta= 10;

for {
    if()
}