
// SIMULADOR DE CUOTAS 


// PREGUNTA SI ESTA REGISTRADO MEDIENTE LA FUNCION.

let validacion = validacionRegistro();


// PREGUNTA LA MODALIDAD DEL PAGO
let modalidadPago = prompt("¿En qué modalidad deseas realizar el pago? (contado, 6 cuotas, 12 cuotas, 18 cuotas, transferencia o mercado Pago)");
  console.log("Elegiste como modalidad de pago: " + modalidadPago);
 
//PREGUNTA EL MONTO DE LA COMPRA TOTAL GASTADO SIN INTERESES
let montoDeCompra= parseFloat(prompt("Ingresa el monto total de la compra"));
    if ((montoDeCompra > 10 )) {
      console.log("Vas a gastar: $ "+ montoDeCompra)
    } else {
      alert("El monto ingresado no es válido. Debe ser un monto de compra mayor a $10.");
    }
    

// CALCULA EL TOTAL A PAGAR CON INTERESES SEGUN EL MEDIO DE PAGO
let interesMDP = interesMedioDePago(modalidadPago);

//calculo del monto final a pagar 
 let montoFinal = montoDeCompra * (1 + interesMDP / 100);
 console.log("Total a pagar con " + modalidadPago + ": $" + montoFinal + " (incluido interes de %" + interesMDP +")");


// CALCULO DEL MONTO FINAL DE LAS CUOTAS
const cuotas6 = 6;
const cuotas12 = 12;
const cuotas18 = 18;

let cuotaPorMes = cuotasMes(modalidadPago);
alert("El monto final a pagar con intereses es de $" + montoFinal + " en " + modalidadPago);
