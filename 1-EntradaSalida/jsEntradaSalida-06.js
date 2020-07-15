/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeoroUno;
	var numeroDos;
	var suma;
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	suma = numeroUno + numeroDos;
	alert ("la suma es " +suma);

	//suma = parseInt (numerUno) + parseInt (numeroDos);No
	//siempre que hay un "string"(texto) la consola va a concatenar 
	//parseInt 
	//NaN not a number

}

