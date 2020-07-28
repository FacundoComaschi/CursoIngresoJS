function mostrar()
{
	//Enunciado:
	//una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y 
	//localidad para vacacionar para poder calcular el precio final
	//en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%
	//en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%
	//en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
	
	var estacionIngresada = txtIdEstacion.value;
	var destino = txtIdDestino.value;
	var estadia = 15000;
	
	switch (estacionIngresada + destino){
		case "Invierno" + "Bariloche":
			alert (estadia * 1.20);
			break;

		case "Invierno" + "Cordoba":
			alert (estadia * 1.10);
			break;

		case "Invierno" + "Cataratas":
			alert (estadia * 1.10);
			break;

		case "Invierno" + "Mar del plata":
			alert (estadia * 0.80);
			break;
		
		case "Verano" + "Bariloche":
			alert (estadia * 0.80);
			break;

		case "Verano" + "Cordoba":
			alert (estadia * 1.10);
			break;

		case "Verano" + "Cataratas":
			alert (estadia * 1.10);
			break;

		case "Verano" + "Mar del plata":
			alert (estadia * 1.20);
			break;
		
		
	}	switch (estacionIngresada){
			case "Otoño":
			case "Primavera":
				switch (destino){
					case "Bariloche":
					case "Cataratas":
					case "Mar del plata":
						alert (estadia * 1.10);
						break;
					case "Cordoba":
						alert (estadia);
						break;
				}
		
		}
}