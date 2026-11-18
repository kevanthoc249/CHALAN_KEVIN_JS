// RF01. Configuración inicial
const PRECIO_ENTRADA = 20;
const DESCUENTO_ESTUDIANTE = 0.30;
const DESCUENTO_DOCENTE = 0.15;
const DESCUENTO_GENERAL = 0;
const MAX_ENTRADAS_COMPRA = 5;

let cuposDisponibles = 50;
let entradasVendidas = 0;
let ingresosAcumulados = 0;
let numeroCompras = 0;
// RF02. Menú principal
let opcion;

do {
    opcion = prompt(
        "SISTEMA INNOVA ESPE 2026\n\n" +
        "1. Comprar entradas\n" +
        "2. Consultar cupos disponibles\n" +
        "3. Consultar ingresos acumulados\n" +
        "4. Salir\n\n" +
        "Elija una opción:"
    );

    switch (opcion) {
        case "1":
            alert("Aquí irá la compra de entradas");
            break;
        case "2":
            let mensajeDisponibilidad;

            if (cuposDisponibles > 10) {
                mensajeDisponibilidad = "Cupos disponibles";
            } else if (cuposDisponibles >= 1 && cuposDisponibles <= 10) {
                mensajeDisponibilidad = "Últimos cupos disponibles";
            } else {
                mensajeDisponibilidad = "Evento agotado";
            }

            alert(
                "CONSULTA DE CUPOS\n\n" +
                "Cupos disponibles: " + cuposDisponibles + "\n" +
                "Estado: " + mensajeDisponibilidad
            );
            console.log("Cupos disponibles:", cuposDisponibles, "-", mensajeDisponibilidad);
            break;
        case "3": {
            alert(
                "INGRESOS ACUMULADOS\n\n" +
                "Total de entradas vendidas: " + entradasVendidas + "\n" +
                "Total de ingresos: $" + ingresosAcumulados.toFixed(2) + "\n" +
                "Número de compras realizadas: " + numeroCompras
            );
            console.log("Entradas vendidas:", entradasVendidas);
            console.log("Ingresos acumulados: $" + ingresosAcumulados.toFixed(2));
            console.log("Compras realizadas:", numeroCompras);
            break;
        }
        case "4":
            alert("Gracias por usar el sistema. ¡Hasta pronto!");
            break;
        default:
            alert("Opción inválida. Ingrese un número del 1 al 4.");
    }
} while (opcion !== "4");