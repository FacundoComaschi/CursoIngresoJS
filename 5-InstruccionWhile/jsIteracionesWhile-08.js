/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar() {
	var sumaDePositivos=0;
	var multipNegativos=1;
	var respuesta;
	var numeroIngresado;
	
	respuesta ="si";

	while (respuesta != "no"){

		numeroIngresado = prompt ("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		while (isNaN(numeroIngresado)) {
			numeroIngresado = prompt ("ingrese unicamente numero");
			numeroIngresado = parseInt(numeroIngresado);
			
		}
		if(numeroIngresado > 0){
			sumaDePositivos = sumaDePositivos + numeroIngresado;
			sumaDePositivos = parseInt(sumaDePositivos);
		}else {
			if (numeroIngresado < 0){
				multipNegativos = multipNegativos * numeroIngresado;
				multipNegativos =parseInt(multipNegativos);
			}
		}
		
		respuesta = prompt ("Desea continuar?");
		
	
	}

	txtIdProducto.value= multipNegativos;
		txtIdSuma.value= sumaDePositivos;
		
	

	
}