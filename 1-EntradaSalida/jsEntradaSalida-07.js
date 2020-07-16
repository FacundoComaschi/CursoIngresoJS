function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	suma = numeroUno + numeroDos;
	alert ("la suma es " +suma);

}

function restar()
{
	var numeoroUno;
	var numeroDos;
	var resta;
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	resta = numeroUno - numeroDos;
	alert ("la resta es " +resta);
}

function multiplicar()
{ 
	var numeoroUno;
	var numeroDos;
	var multiplicacion;
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	multiplicacion = numeroUno * numeroDos;
	alert ("la multiplicacion es " +multiplicacion);
	
}

function dividir()
{
	var numeoroUno;
	var numeroDos;
	var division;
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	numeroUno = parseFloat(numeroUno);
	numeroDos = parseFloat(numeroDos);
	division = numeroUno / numeroDos;
	alert ("la division es " +division);
	
}

