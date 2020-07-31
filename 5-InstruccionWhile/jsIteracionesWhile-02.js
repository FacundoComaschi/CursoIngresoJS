/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var contador = 11;

	while (contador > 1) {
		contador = contador - 1;
		console.log ("contador"+ contador);
	}
}
// tambien se puede hacer 

//while (contador < 10) {
	//contador = contador + 1;
	//console.log ("contador", 11 - contador);