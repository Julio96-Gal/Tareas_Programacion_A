function jugar() {
    let continuar = true;

    while (continuar) {
        let numeroComputadora = parseInt(Math.random() * 9) + 1;
        let numeroUsuario;

        // Validar entrada del usuario (entre 3 y 6)
        do {
            numeroUsuario = parseInt(prompt("Ingrese un número entre 3 y 6:"));
        } while (isNaN(numeroUsuario) || numeroUsuario < 3 || numeroUsuario > 6);

        let eleccionUsuario;
        // Validar que el usuario ingrese "mayor", "menor" o "igual"
        do {
            eleccionUsuario = prompt("¿Tu número es MAYOR, MENOR o IGUAL al número de la computadora?").toLowerCase();
        } while (eleccionUsuario !== "mayor" && eleccionUsuario !== "menor" && eleccionUsuario !== "igual");

        // Evaluar la comparación
        let resultado;
        if ((numeroUsuario > numeroComputadora && eleccionUsuario === "mayor") ||
            (numeroUsuario < numeroComputadora && eleccionUsuario === "menor") ||
            (numeroUsuario === numeroComputadora && eleccionUsuario === "igual")) {
            resultado = "¡Ha adivinado!";
        } else {
            resultado = "No ha adivinado.";
        }

        // Mostrar resultado
        alert(`La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. Su elección fue "${eleccionUsuario}". ${resultado}`);

        // Preguntar si quiere jugar otra vez
        let jugarDeNuevo;
        do {
            jugarDeNuevo = prompt("¿Quiere jugar otra vez? (SI/NO)").toLowerCase();
        } while (jugarDeNuevo !== "si" && jugarDeNuevo !== "no");

        if (jugarDeNuevo !== "si") {
            continuar = false;
            alert("Gracias por jugar. Nombre: Julio Vila - Carnet: 25002728");
        }
    }
}

// Ejecutar el juego
jugar();
