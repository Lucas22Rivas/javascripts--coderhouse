
//FUNCION DE VALIDACION DE REGISTRO.
function validacionRegistro () {
    let cliente = prompt("¿Estás registrado? (responde sí o no)");
  if (cliente === "si") {
    console.log("Bienvenido!");
  } else {
    alert("Respuesta no válida. Por favor, responde 'si' o 'no'.");
  }
}

// FUNCION- VERIFICA LA MODALIDAD DE PAGO Y DEVUELVE EL INTERES SEGUN CORRESPONDA
function interesMedioDePago(modalidadPago) {
        switch (modalidadPago) {
          case "contado":
            return 0;
          case "6 cuotas":
            return 30; 
          case "12 cuotas":
            return 65;
          case "18 cuotas":
            return 115;
          case "transferencia bancaria":
            return 0;
          case "mercado pago":
            return 2.5;
          default:
            return 0; // Modalidad no válida
    }
}

//FUNCION - VALIDA CALCULO DE CUOTAS MENSUALES CON INTERES INCLUIDO
function cuotasMes (modalidadPago){
    if (modalidadPago === "6 cuotas") {
        for (let i = 0; i < cuotas6 ; i++) {
                let numeroCuota = i + 1;
                let cuotaMensual = montoFinal /cuotas6;
                 console.log( numeroCuota +  " cuotas: $" + cuotaMensual.toFixed(2) );
                };
      } else if (modalidadPago === "12 cuotas") {
        for (let i = 0; i < cuotas12 ; i++) {
                let numeroCuota = i + 1;
                let cuotaMensual = montoFinal /cuotas12;
                console.log( numeroCuota +  " cuotas: $" + cuotaMensual.toFixed(2) );
      };
      }else if (modalidadPago === "18 cuotas"){
        for (let i = 0; i < cuotas18 ; i++) {
                let numeroCuota = i + 1;
                let cuotaMensual = montoFinal /cuotas18;
                console.log( numeroCuota +  " cuotas: $" + cuotaMensual.toFixed(2) );
        } 
      
      }
}
