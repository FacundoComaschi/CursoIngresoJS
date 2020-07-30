/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var respuesta;
	var maximo;
	var minimo;
	var numero;
	var primeravez;

	respuesta = true;
	primeravez = true;

	while (respuesta) {
		
		do {
			numero = prompt("ingrese numero");
			numero = parseInt(numero);
		
		} while (isNaN(numero));	

			

		if (primeravez){
			primeravez = false;

			maximo = numero;
			minimo = numero;
		}else {
			if (numero > maximo){
				maximo = numero;
			}
			if (numero < minimo){
				minimo = numero;
			}
		}



		respuesta = confirm ("desea continuar");
	
	}
	txtIdMaximo.value = maximo;
	txtIdMinimo.value = minimo;
}//FIN DE LA FUNCIÓN