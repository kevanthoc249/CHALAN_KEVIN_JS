# Sistema de gestión de entradas - Innova ESPE 2026

Prototipo en JavaScript nativo para registrar la compra de entradas del evento ficticio Innova ESPE 2026, calcular descuentos y controlar los cupos disponibles.

**Autor:** Kevin Anthony Chalan
**NRC:**  36875

**Universidad:** Universidad de las Fuerzas Armadas ESPE

## Funcionalidades

- Menú principal que se repite hasta que el usuario elige salir.
- Compra de entradas con validación de nombre, tipo de participante y cantidad.
- Cálculo de subtotal, descuento y total a pagar.
- Consulta de cupos disponibles con mensaje según la disponibilidad.
- Consulta de ingresos acumulados, entradas vendidas y número de compras.
- Resumen final al salir.

## Configuración

| Concepto | Valor |
|---|---|
| Precio por entrada | $20 |
| Cupos iniciales | 50 |
| Descuento estudiantes | 30 % |
| Descuento docentes | 15 % |
| Descuento público general | 0 % |
| Máximo de entradas por compra | 5 |

## Estructura del proyecto

```
CHALAN_KEVIN_JS/
├── index.html
├── js/
│   └── app.js
└── README.md
```

## Cómo ejecutarlo

1. Descargar o clonar el repositorio.
2. Abrir `index.html` en el navegador.
3. Abrir la consola con F12 para ver los resultados.
4. Usar el menú que aparece con `prompt()` y `alert()`.

## Opciones del menú

1. Comprar entradas
2. Consultar cupos disponibles
3. Consultar ingresos acumulados
4. Salir