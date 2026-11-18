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

// RF03. Compra de entradas
function comprarEntradas() {
    // 1. Nombre del comprador
    const nombre = prompt("Ingrese el nombre del comprador:");
    if (nombre === null || nombre.trim() === "") {
        alert("Compra rechazada: el nombre no puede estar vacío.");
        return;
    }

    // 2. Tipo de participante
    const tipoIngresado = prompt(
        "Tipo de participante:\n\n" +
        "1. Estudiante\n" +
        "2. Docente\n" +
        "3. Público general\n\n" +
        "Elija una opción (1, 2 o 3):"
    );

    let tipo;
    let porcentajeDescuento;

    if (tipoIngresado === "1") {
        tipo = "Estudiante";
        porcentajeDescuento = DESCUENTO_ESTUDIANTE;
    } else if (tipoIngresado === "2") {
        tipo = "Docente";
        porcentajeDescuento = DESCUENTO_DOCENTE;
    } else if (tipoIngresado === "3") {
        tipo = "Público general";
        porcentajeDescuento = DESCUENTO_GENERAL;
    } else {
        alert("Compra rechazada: tipo de participante inválido.");
        return;
    }

    // 3. Cantidad de entradas
    const cantidadIngresada = prompt(
        "Cantidad de entradas (entre 1 y " + MAX_ENTRADAS_COMPRA + "):"
    );

    if (cantidadIngresada === null || cantidadIngresada.trim() === "") {
        alert("Compra rechazada: debe ingresar una cantidad.");
        return;
    }

    const cantidad = Number(cantidadIngresada);

    // 4. Validar número entero entre 1 y 5
    if (!Number.isInteger(cantidad) || cantidad < 1 || cantidad > MAX_ENTRADAS_COMPRA) {
        alert(
            "Compra rechazada: la cantidad debe ser un número entero entre 1 y " +
            MAX_ENTRADAS_COMPRA + "."
        );
        return;
    }

    // 5. Comprobar cupos suficientes
    if (cantidad > cuposDisponibles) {
        alert(
            "Compra rechazada: no hay cupos suficientes.\n" +
            "Cupos disponibles: " + cuposDisponibles
        );
        return;
    }

    // 6. Cálculos
    const subtotal = cantidad * PRECIO_ENTRADA;
    const descuento = subtotal * porcentajeDescuento;
    const total = subtotal - descuento;

    // 7. Actualizar datos (solo si la compra es válida)
    cuposDisponibles = cuposDisponibles - cantidad;
    entradasVendidas = entradasVendidas + cantidad;
    ingresosAcumulados = ingresosAcumulados + total;
    numeroCompras = numeroCompras + 1;

    // 8. Resumen de compra
    const resumen =
        "RESUMEN DE COMPRA\n\n" +
        "Nombre: " + nombre.trim() + "\n" +
        "Tipo de participante: " + tipo + "\n" +
        "Cantidad de entradas: " + cantidad + "\n\n" +
        "Subtotal: $" + subtotal.toFixed(2) + "\n" +
        "Descuento (" + (porcentajeDescuento * 100) + " %): $" + descuento.toFixed(2) + "\n" +
        "Total a pagar: $" + total.toFixed(2) + "\n\n" +
        "Compra realizada exitosamente.\n" +
        "Cupos restantes: " + cuposDisponibles;

    alert(resumen);
    console.log(resumen);
}
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
            comprarEntradas();
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