function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	var respuesta = true;
	var banderaNombreMasTemperatura = "primera vez";
	var mayorTemperatura;
	var nombreMayorTemperatura;
	var contadorMayoresViudos=0;
	var contadorSolteroViudo=0;
	var contadorTerceraEdadMas38Grados=0;
	var promedioEdadSolteros;
	var sumaEdadSolteros = 0;
	var contadorSolteros = 0;

	while (respuesta){

		nombre = prompt ("ingrese nombre");

		while (!(isNaN(nombre))){

			nombre = prompt("ingrese nombre sin numeros");
		}

		edad = prompt ("ingrese edad");
		edad = parseInt(edad);

		while (isNaN(edad)){

			edad = prompt ("ingrese edad en numeros");
			edad = parseInt(edad);
		}

		sexo = prompt ("ingrese sexo");

		while (sexo != "f" && sexo != "m"){

			sexo = prompt ("ingrese sexo f o m");
		}

		estadoCivil = prompt("ingrese estado civil");

		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){

			estadoCivil = prompt("ingrese soltero casado o viudo");
		}

		temperaturaCorporal = prompt("ingrese temperatura corporal");
		temperaturaCorporal = parseInt(temperaturaCorporal);

		while (temperaturaCorporal < 20){

			temperaturaCorporal = prompt("ingrese una temperatura normal");
			temperaturaCorporal = parseInt(temperaturaCorporal);
		}

		if (banderaNombreMasTemperatura == "primera vez"){
			banderaNombreMasTemperatura = "segunda vez";

			mayorTemperatura = temperaturaCorporal;
			nombreMayorTemperatura = nombre;
		}else{
			if(temperaturaCorporal > mayorTemperatura){

				mayorTemperatura = temperaturaCorporal;
				nombreMayorTemperatura = nombre;
			}

		}

		if (edad > 18){

			switch (estadoCivil){
				case "viudo":

				contadorMayoresViudos++;
			}
		}

		if (sexo == "m"){

			switch (estadoCivil){
				case "viudo":
				case "soltero":

				contadorSolteroViudo++;
			}
		}

		if (edad > 60 && temperaturaCorporal > 38){

			contadorTerceraEdadMas38Grados++;	
		}

		if (sexo == "m" && estadoCivil == "soltero"){

			sumaEdadSolteros = edad + sumaEdadSolteros;
			contadorSolteros++;
		}
		

		respuesta = confirm("desea continuar?");
	}


	promedioEdadSolteros = sumaEdadSolteros / contadorSolteros;

	console.log (nombreMayorTemperatura + " es la persona con mas temperatura");

	console.log ("hay " + contadorMayoresViudos + " pensonas mayores y viudas");

	console.log (" hay " + contadorSolteroViudo + " de hombres solteros o viudos");

	console.log ( " hay " + contadorTerceraEdadMas38Grados + " tercera edad con mas de 38");

	console.log (" el promedio de edad entre hombres solteros es de "+ promedioEdadSolteros);

}
