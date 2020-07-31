/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var cantidadNumeros;
	var acumulador;
	var numeroIngresado
	
	contador = 0;
	cantidadNumeros = true;
	acumulador = 0;
	
	cantidadNumeros = prompt ("cuantos numeros desea inggresar");
	cantidadNumeros = parseInt(cantidadNumeros);

	while (isNaN(cantidadNumeros)) {
		cantidadNumeros = prompt ("Ingrese unicamente numeros");
		cantidadNumeros = parseInt(cantidadNumeros);
		
	}while (contador < cantidadNumeros){
		contador++;
		numeroIngresado = prompt ("ingrese su numero " + contador +"° a sumar");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador += numeroIngresado;
	}
	
	
	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador / cantidadNumeros;
}