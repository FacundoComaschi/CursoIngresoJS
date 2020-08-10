
function mostrar(){

	var contador=0;
	var tipoPoducto;
	var precioProducto;
	var cantidadProducto;
	var marcaYFabricante;
	var banderaAlcoholBarato = "primera vez";
	var cantidadAlcoholBarato;
	var marcaAlcoholBarato;
	var precioAlcoholBarato;
	var contadorAlcohol=0;
	var sumaPrecioAlcohol=0;
	var contadorBarbijo =0;
	var sumaPrecioBarbijo=0;
	var contadorJabon=0;
	var sumaPrecioJabon=0;
	var tipoConMasUnidades;
	var cantidadUnidadesAlcohol=0;
	var cantidadUnidadesBarbijo=0;
	var cantidadUnidadesJabon=0;

	while(contador < 5){

		tipoPoducto = prompt("ingrese su producto");

		while (tipoPoducto != "barbijo" && tipoPoducto != "jabon" && tipoPoducto != "alcohol"){

			tipoPoducto = prompt ("ingrese producto barbijo jabon o alcohol");
		}

		precioProducto = prompt ("ingrese precio producto");
		precioProducto = parseInt(precioProducto);

		while (precioProducto < 100 || precioProducto > 300 || isNaN(precioProducto)){

			precioProducto = prompt ("ingrese precio entre 100 y 300 $");
			precioProducto = parseInt(precioProducto);
		}


		cantidadProducto = prompt ("ingrese cantidad de productos");
		cantidadProducto = parseInt(cantidadProducto);

		while (isNaN(cantidadProducto) || cantidadProducto < 1 || cantidadProducto > 1000){

			cantidadProducto = prompt("ingrese cantidad entre 1 y 1000");
			cantidadProducto = parseInt(cantidadProducto);
		}

		marcaYFabricante = prompt ("ingrese marca y fabricante");

		while (!(isNaN(marcaYFabricante))){

			marcaYFabricante = prompt ("ingrese marca y fabricante sin numeros");
		}
		
		
		if (tipoPoducto == "alcohol"){

			if (banderaAlcoholBarato == "primera vez"){
				banderaAlcoholBarato = "segunda vez";

				cantidadAlcoholBarato = cantidadProducto;
				marcaAlcoholBarato = marcaYFabricante;
				precioAlcoholBarato = precioProducto;
			}else{
				if (precioAlcoholBarato < precioProducto){

					cantidadAlcoholBarato = cantidadProducto;
					marcaAlcoholBarato = marcaYFabricante;
					precioAlcoholBarato = precioProducto;
				}
			}
		}
		

		switch (tipoPoducto){
			case "alcohol":
			contadorAlcohol++;
			sumaPrecioAlcohol = sumaPrecioAlcohol + precioProducto;
			cantidadUnidadesAlcohol = cantidadUnidadesAlcohol + cantidadProducto;

			case "barbijo":
			contadorBarbijo++;
			sumaPrecioBarbijo = sumaPrecioBarbijo + precioProducto;
			cantidadUnidadesBarbijo = cantidadUnidadesBarbijo + cantidadProducto;

			case "jabon":
			contadorJabon++;
			sumaPrecioJabon = sumaPrecioJabon + precioProducto;	
			cantidadUnidadesJabon = cantidadUnidadesJabon + cantidadProducto;

			break;
		}


		

		contador++;
	} 

	if (cantidadUnidadesAlcohol > cantidadUnidadesBarbijo && cantidadUnidadesAlcohol > cantidadUnidadesJabon){

		tipoConMasUnidades = "alcohol";
		promedio = sumaPrecioAlcohol / contadorAlcohol;
	
	}else{
		if (cantidadUnidadesBarbijo > cantidadUnidadesJabon){

			tipoConMasUnidades = "barbijo";
			promedio = sumaPrecioBarbijo / contadorBarbijo;
		}else{
			
			if (cantidadUnidadesJabon > cantidadUnidadesBarbijo){

				tipoConMasUnidades = "jabon";
				promedio = sumaPrecioJabon / contadorJabon;
			}
		}
	}

	console.log ("el alcohol mas barato es " + marcaAlcoholBarato + " con una cantidad de " + cantidadAlcoholBarato);
	console.log ("el tipo con mas unidades es " + tipoConMasUnidades + " con un promedio de " + promedio);
	console.log ("hay " + cantidadUnidadesJabon + " de jabones");


}


