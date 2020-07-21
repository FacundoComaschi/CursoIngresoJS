function mostrar()
{
	 var edad;
	 edad = txtIdEdad.value;
	 
	 if (edad>=18){
		 alert ("es mayor de edad");
		} else {
			if(edad >=13){
			alert ("es adolescente");
		} else {
			alert("es un niño");
		}

	}
	}
// ejercicio del profesor
	var edad1;
	var edad2;
	var edad3;
	edad1 = 22;
	edad2 = 33;
	edad3= 44;

	if (edad1 >= edad2 && edad1 >= edad3) {
		alert (edad1);
	} else {
		if (edad2 >= edad3){
			alert (edad2);
		}else {
			alert (edad3)
		}
	}
