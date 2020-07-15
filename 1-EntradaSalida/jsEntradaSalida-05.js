/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;
	var nombreedad;
	nombre = txtIdNombre.value;
	edad = txtIdEdad.value;
	nombreedad = nombre+edad;
	alert ("Usted se llama "+nombreedad)+("y tiene"+edad);
}

