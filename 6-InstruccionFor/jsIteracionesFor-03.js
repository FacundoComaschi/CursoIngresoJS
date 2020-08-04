function mostrar()
{	
	
	var repeticion;
	var numero;

	repeticion = prompt ("ingrese cantidad de veces");
	repeticion = parseInt(repeticion);
	while (isNaN(repeticion) || repeticion < 1){
		repeticion = prompt ("ingrese unicamente numeros");
		repeticion = parseInt(repeticion);
	}

	for (numero = 1; numero <= repeticion; numero++){

		alert ("hola Utn fraa");
	}
}//FIN DE LA FUNCIÓN