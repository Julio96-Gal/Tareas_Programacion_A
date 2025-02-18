// Solicitar el mes y el día de nacimiento al usuario
var mes = parseInt(prompt("Introduce tu mes de nacimiento (en números):"));
var dia = parseInt(prompt("Introduce tu día de nacimiento:"));

// Arreglo con el número máximo de días para cada mes (índice 0: enero, 1: febrero, etc.)
// Para febrero se acepta hasta 29 días (aunque no se realiza comprobación de año bisiesto) ya que unicamente es valores sobre dia y mes como prompt 
var maxDiasPorMes = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Validación de la entrada: comprobamos que el mes y el día sean números válidos y estén en el rango correcto
if (isNaN(mes) || isNaN(dia)) {
  alert("Debes ingresar números válidos.");
} else if (mes < 1 || mes > 12) {
  alert("Mes inválido.");
} else if (dia < 1 || dia > maxDiasPorMes[mes - 1]) { // Como los arreglos en JavaScript empiezan desde 0, para obtener el mes correcto hay que restar 1
  alert("Fecha inválida.");
} else {
  var signo = "";
  
  // Determinar el signo zodiacal según las fechas
  if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
      signo = "Acuario";
  } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
      signo = "Piscis";
  } else if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
      signo = "Aries";
  } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
      signo = "Tauro";
  } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
      signo = "Géminis";
  } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
      signo = "Cáncer";
  } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
      signo = "Leo";
  } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
      signo = "Virgo";
  } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
      signo = "Libra";
  } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
      signo = "Escorpio";
  } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
      signo = "Sagitario";
  } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
      signo = "Capricornio";
  }
  
  // Mostrar el resultado al usuario
  alert("Tu signo zodiacal es: " + signo);
}
