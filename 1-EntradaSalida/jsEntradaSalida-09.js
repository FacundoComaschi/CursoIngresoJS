/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var resultado;
	var aumentodel10;
	sueldo =txtIdSueldo.value;
	sueldo =parseInt(sueldo);
	aumentodel10 = 1.1;
	resultado = sueldo * aumentodel10;
	txtIdResultado.value = resultado;
	
	
}
