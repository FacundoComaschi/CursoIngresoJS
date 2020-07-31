/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var maximo;
	var minimo;
	var primeraVez;
	var numeroIngresado;
	var respuesta;

	respuesta = true;
	primeraVez = true;
	
	while (respuesta){

		do {
			numeroIngresado = prompt("ingrese numero");
			numeroIngresado = parseInt(numeroIngresado)
		} while (isNaN(numeroIngresado));

		if (primeraVez) {
			primeraVez= false;

			maximo= numeroIngresado;
			minimo= numeroIngresado;
			
		}else{
			if (numeroIngresado<minimo) {
				minimo = numeroIngresado;
				
			}
		}

		respuesta = confirm("Desea continuar?")
	}
		txtIdMinimo.value = minimo;
		txtIdMaximo.value = maximo;
}//FIN DE LA FUNCIÓN