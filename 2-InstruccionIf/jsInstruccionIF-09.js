function mostrar()
{
	var numeroRandom1;
	var numeroRandom2
	var maximo;
	var minimo;
	var numeroRandom1AlCubo;
	var numeroRandom2AlCubo;
	var mensaje;

	mensaje == "";
	maximo = 52;
	minimo = 1;

	numeroRandom1 = Math.floor(Math.random() * (maximo - minimo)) + minimo;
	numeroRandom2 = Math.floor(Math.random() * (maximo - minimo)) + minimo;

	numeroRandom1AlCubo = Math.pow(numeroRandom1,3);
	numeroRandom2AlCubo = Math.pow(numeroRandom2,3);
	
	
	
	if (numeroRandom1 % 2 == 0 && numeroRandom2 % 2 == 0) {
		mensaje = ("multiplicacion de pares " + numeroRandom1 * numeroRandom2);
		
	} else {
		if(numeroRandom1 % 2 != 0 && numeroRandom2 % 2 != 0) {
		mensaje= ("resta impares "+(numeroRandom1 - numeroRandom2));
		}else {
			
			if (numeroRandom1 % 5 == 0 && numeroRandom2 % 5 == 0) {
				mensaje = mensaje + ("elevar al cubo " + numeroRandom1AlCubo + "elevar al cubo " +numeroRandom2AlCubo);
			
			}else alert ("no ocurrio nada");
		}
	}

}  
//el minimo esta incluido y el maximo no. esta forma me va
// a dar numeros entre 1 y 10

//a- calcular dos numeros random entre 1 y 51
//b- si los dos son pares : multiplicarlos mostrar dato
//c- si los dos son impares restarlos mostrar dato
//d- si alguno es divisible por 5 elevarlo al cubo
//e- si no ocurrio ningun caso anterior mostrar "no paso nada"
//f- mostrar el resultado en un solo alert