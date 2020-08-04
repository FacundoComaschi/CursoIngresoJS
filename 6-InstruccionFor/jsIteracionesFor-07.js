function mostrar()
{	
	
	var repeticion;
	var numero;
	var cantidaddivisores=0;

	repeticion = prompt ("ingrese cantidad de veces");
	repeticion = parseInt(repeticion);
	while (isNaN(repeticion) || repeticion < 1){
		repeticion = prompt ("ingrese unicamente numeros");
		repeticion = parseInt(repeticion);
	}

	for (numero = 1; numero <= repeticion; numero++){
		
		if (repeticion % numero == 0 ){
			cantidaddivisores++
			alert (numero);
	
		}
		
		
	}
	alert ("hay " + cantidaddivisores + " numeros divisores");

}