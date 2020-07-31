/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
	var sueldoBruto;
	var numeroDeLegajo;
	var nacionalidad;

	edadIngresada = prompt("ingrese su edad");
	edadIngresada = parseInt(edadIngresada);

	while (isNaN(edadIngresada) || (edadIngresada <18 || edadIngresada >90)) {
		edadIngresada = prompt("ingrese una edad valida");
		edadIngresada = parseInt(edadIngresada);

	}

	sexoIngresado = prompt ("ingrese sexo");
	
	while (sexoIngresado != "F" && sexoIngresado!="M"){
		sexoIngresado = prompt ("ingrese unicamente sexo valido");

	}

	estadoCivilIngresado = prompt("ingrese estado civil");

	while (estadoCivilIngresado !="1" && estadoCivilIngresado !="2" && estadoCivilIngresado != "3" && estadoCivilIngresado!="4"){
		estadoCivilIngresado = prompt ("ingrese estado civil correcto 1 2 3 o 4");
	}

	sueldoBruto = prompt ("Ingrese sueldo bruto");

	while (!(sueldoBruto>8000)) {
		sueldoBruto = prompt ("sueldo bruto no debe se menor a 8000");
		
	}

	nacionalidad = prompt ("ingrese nacionalidad");

	while (nacionalidad !="A" && nacionalidad != "E" && nacionalidad != "N"){
		nacionalidad = prompt ("Ingrese A E N");
	}

	numeroDeLegajo = prompt ("Ingrese legajo");
	numeroDeLegajo = parseInt(numeroDeLegajo);

	while (isNaN(numeroDeLegajo) || (!(numeroDeLegajo>999))){
		numeroDeLegajo = prompt("Ingrese legajo de 4 cifras sin 0 a la izquierda");
		numeroDeLegajo = parseInt (numeroDeLegajo);
	}


	

	txtIdEdad.value = edadIngresada;
	txtIdSexo.value = sexoIngresado;
	txtIdEstadoCivil.value = estadoCivilIngresado;
	txtIdSueldo.value = sueldoBruto;
	txtIdNacionalidad.value = nacionalidad;
	txtIdLegajo.value = numeroDeLegajo;


}

