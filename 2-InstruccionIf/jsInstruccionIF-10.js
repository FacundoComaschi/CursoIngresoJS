function mostrar()
{
	var numeroRandom;
	var maximo;
	var minimo;
	
	maximo = 11;
	minimo = 1;
	numeroRandom = Math.floor(Math.random() * (maximo - minimo)) + minimo;
	alert (numeroRandom)

	if (numeroRandom >= 9) {
		alert ("excelente");
		
	}else {
		if (numeroRandom >=4) {
			alert ("aprobo");
			
		}else {
			alert("Vamos, la proxima se puede");
		}
	}
}