function mostrar()
{
	var edad;
	var estadoCivilPersona;
	
	edad = txtIdEdad.value;
	estadoCivilPersona = estadoCivil.value;
	
	if (edad <18 && estadoCivilPersona != "Soltero") {
			alert ("es muy joven para no ser soltero");
		}


}