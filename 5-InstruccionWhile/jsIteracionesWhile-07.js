/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var respuesta;
	var cantidadNumeros;
	var acumulador;
	
	contador = 0;
	respuesta = true;
	acumulador = 0;
	
	cantidadNumeros = prompt ("cuantos numeros desea inggresar");
	cantidadNumeros = parseInt(cantidadNumeros);

	while (isNaN(cantidadNumeros)) {
		cantidadNumeros = prompt ("Ingrese unicamente numeros");
		cantidadNumeros = parseInt(cantidadNumeros);
		
	}while (contador < cantidadNumeros){
		contador++;
		acumulador = prompt ("ingrese su numero a sumar");
		acumulador = acumulador + acumulador;
	}while (acumulador + acumulador)
		
	
	txtIdSuma.value = acumulador;
	txtIdPromedio.value= acumulador / cantidadNumeros;
}