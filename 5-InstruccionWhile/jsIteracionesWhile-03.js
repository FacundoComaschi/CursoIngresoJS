/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	var contador;
	contador = 0;
	claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada != "utn750" && contador < 2) {
		claveIngresada = prompt ("error! ingrese la clave correcta");
		contador = contador + 1;
		
	}
	
}//FIN DE LA FUNCIÓN
