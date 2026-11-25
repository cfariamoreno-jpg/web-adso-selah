document.getElementById("formulario-pedido").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const producto = document.getElementById("producto").value;
    const cantidad = document.getElementById("cantidad").value;
    const direccion = document.getElementById("direccion").value;
    const mensaje = document.getElementById("mensaje").value;

    const texto = `Hola, quiero realizar un pedido en SELAH.

Nombre: ${nombre}
Teléfono: ${telefono}
Producto: ${producto}
Cantidad: ${cantidad}
Dirección: ${direccion}
Detalles: ${mensaje}`;

    const url = "https://wa.me/573238790612?text=" + encodeURIComponent(texto);
    window.open(url, "_blank");
});