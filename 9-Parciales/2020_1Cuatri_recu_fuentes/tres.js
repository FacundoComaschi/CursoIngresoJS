function mostrar()
{
	var nombre;
	var nacionalidad;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;

	nombre = prompt ("ingrese su nombre");

	nacionalidad = prompt ("ingrese nacionalidad");

	edad = prompt ("ingrese edad");

	while (isNaN(edad)){

		edad = prompt ("ingrese en numeros");
	}

	sexo = prompt ("ingrese sexo");

	while (sexo != "F" && sexo != "M"){
		
		sexo = prompt ("ingrese unicamente M o F");
	}

	estadoCivil = prompt("ingrese estado civil");

	while (estadoCivil != "soltero" && 
	estadoCivil != "casado" && estadoCivil != "viudo"){
		
		estadoCivil = prompt ("Ingrese unicamente casado soltero o viudo");
	}

	temperatura = prompt("ingrese temperatura");

	while (temperatura < 0){

		temperatura = prompt ("ingrese temperatura real");

	}

	if (edad > 17){
		
	}

}
