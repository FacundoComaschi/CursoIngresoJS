/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioProducto1;
    var precioProducto2;
    var precioProducto3;
    var total;
    precioProducto1 = txtIdPrecioUno.value;
    precioProducto2 = txtIdPrecioDos.value;
    precioProducto3 = txtIdPrecioTres.value;
    precioProducto1 = parseInt(precioProducto1);
    precioProducto2 = parseInt(precioProducto2);
    precioProducto3 = parseInt(precioProducto3);
    total = precioProducto1 + precioProducto2 + precioProducto3;
    alert ("El total de los productos es "+total);

    
}
function Promedio () 
{
    var precioProducto1;
    var precioProducto2;
    var precioProducto3;
    var promedio;
    precioProducto1 = txtIdPrecioUno.value;
    precioProducto2 = txtIdPrecioDos.value;
    precioProducto3 = txtIdPrecioTres.value;
    precioProducto1 = parseInt(precioProducto1);
    precioProducto2 = parseInt(precioProducto2);
    precioProducto3 = parseInt(precioProducto3);
    promedio = (precioProducto1 + precioProducto2 + precioProducto3)/3;
    alert ("El promedio de los productos es "+promedio);

	
}
function PrecioFinal () 
{
	var precioProducto1;
    var precioProducto2;
    var precioProducto3;
    //var total;
    var iva;
    precioProducto1 = txtIdPrecioUno.value;
    precioProducto2 = txtIdPrecioDos.value;
    precioProducto3 = txtIdPrecioTres.value;
    precioProducto1 = parseInt(precioProducto1);
    precioProducto2 = parseInt(precioProducto2);
    precioProducto3 = parseInt(precioProducto3);
    iva = (precioProducto1 + precioProducto2 + precioProducto3)*1.21 ;
   // iva =parseInt(iva);
   // iva = total * 21;

    alert ("El total mas el iva de los productos es "+iva);

}