/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	var sumaDePositivos=0;
	var sumaNegativos=0;
	var respuesta;
	var numeroIngresado;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var cantidad0=0;
	var contadorpares=0;
	var promediopositivo;
	var promedionegativo;
	var difAmbos;
	
	respuesta =true;

	while (respuesta){

		numeroIngresado = prompt ("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		while (isNaN(numeroIngresado)) {
			numeroIngresado = prompt ("ingrese unicamente numero");
			numeroIngresado = parseInt(numeroIngresado);
			
		}
		if(numeroIngresado > 0){
			sumaDePositivos = sumaDePositivos + numeroIngresado;
			sumaDePositivos = parseInt(sumaDePositivos);
			contadorPositivos++;
		}else {
			if (numeroIngresado < 0){
				sumaNegativos = sumaNegativos + numeroIngresado;
				sumaNegativos =parseInt(sumaNegativos);
				contadorNegativos++
			}else {
				cantidad0++;
			}
		}
		if (numeroIngresado % 2 == 0) {
			contadorpares++;
			
		}

		
		respuesta = confirm ("Desea continuar?");
		
		
	}

		promediopositivo = sumaDePositivos / contadorPositivos;
		promedionegativo = sumaNegativos / contadorNegativos;
		difAmbos = sumaDePositivos + sumaNegativos;

	document.write("suma de positivos es = " + sumaDePositivos + "<br>");

	document.write("suma de negativos es = " + sumaNegativos + "<br>");

	document.write("la cantidad de positivos = "+contadorPositivos + "<br>");

	document.write("la cantidad de negativos = "+contadorNegativos + "<br>");

	document.write("La cantidad de ceros es de = "+cantidad0 + "<br>");

	document.write("La cantida de pares es de = "+contadorpares + "<br>");

	document.write("El promedio de numeros positivos es = "+promediopositivo + "<br>");

	document.write("el promedio de numero negativos es = "+promedionegativo + "<br>");
	
	document.write("La diferencia entre porsit y negat es = "+difAmbos + "<br>");

		
}