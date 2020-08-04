function mostrar()
{	
	
	var repeticion;
	var numero;
	var cantidadpares=0;

	repeticion = prompt ("ingrese cantidad de veces");
	repeticion = parseInt(repeticion);
	while (isNaN(repeticion) || repeticion < 1){
		repeticion = prompt ("ingrese unicamente numeros");
		repeticion = parseInt(repeticion);
	}

	for (numero = 1; numero <= repeticion; numero++){
		
		if (numero % 2 == 0){
			cantidadpares++
			alert (numero);
	
		}
		
		
	}
	alert ("hay " + cantidadpares + " numeros pares");

}
