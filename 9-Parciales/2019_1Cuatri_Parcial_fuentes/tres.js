function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;

    precio = prompt ("ingrese precio");
    precio= parseInt(precio);

    descuento = prompt ("ingrese descuento en porcentaje ");
    descuento = parseInt(descuento);

    precioFinal = (precio * descuento) / 100;

    elPrecioFinal.value = precioFinal;
}
