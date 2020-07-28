function mostrar()
{
	//Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
	
	var destinoIngresado =txtIdDestino.value;
	switch (destinoIngresado){
		case ("Bariloche"):
		case ("Ushuaia"):
			alert ("Hace Frio");
			break;
		
			default:
				alert  ("Hace Calor");
				break;
	
	
	
	}

}
