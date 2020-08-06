function mostrar()
{
	var contador = 0;
	var tipoDeProducto;
	var jabonCantidad=0;
	var barbijoCantidad=0;
	var alcoholCantidad=0;
	var cantidadDeUnidades;
	var fabricante;
	var precioMaximoJabon;
	var primeraVez;
	var cantidadJabon=0;
	var cantidadUnidadesJabonMaximo;
	var cantidadJabonesFabricanteMaximo;
	var cantidadesMaximas = 0; 
	var promedioCompra;
	var contadorCompraJabones = 0;
	var contadorCompraBarjijo = 0;
	var contadorCompraAlcohol = 0;
	
	while (contador <5){
		contador++;

		do{
			tipoDeProducto = prompt ("Ingrese tipo de producto");

		}while (tipoDeProducto != "jabon" && 
		tipoDeProducto != "acohol" && tipoDeProducto != "barbijo");

		do{
			precio= prompt ("ingrese precio");
			precio= parseInt(precio);
		
		}while(precio <100 || precio>300 || isNaN (precio));

		do{
			cantidadDeUnidades = prompt ("ingrese cantidad unidades");
			cantidadDeUnidades = parseInt(cantidadDeUnidades);
		
		}while (cantidadDeUnidades < 1 || cantidadDeUnidades > 100 || isNaN(cantidadDeUnidades));
	

		do{
			marca = prompt("Ingrese marca");

		}while (marca == false);

		do{
			fabricante = prompt ("ingrese fabricante");

		}while (fabricante == false);
	
		if(tipoDeProducto == "jabon"){
			cantidadJabon++;
			
			if (cantidadJabon == 1){
				precioMaximoJabon = precio;
				cantidadUnidadesJabonMaximo = cantidadJabon;
				cantidadJabonesFabricanteMaximo = fabricante;
			
			}else{
				if (precio > precioMaximoJabon){
					precioMaximoJabon = precio;
					cantidadUnidadesJabonMaximo = cantidadJabon;
					cantidadJabonesFabricanteMaximo = fabricante;
				}
			}
		}
		switch (tipoDeProducto){
			case "acohol":
				alcoholCantidad += cantidadDeUnidades;
				contadorCompraAlcohol++;
				break;

			case "barbijo":
				barbijoCantidad += cantidadDeUnidades;
				contadorCompraBarjijo++;
				break;

			case "jabon":
				jabonCantidad += cantidadDeUnidades;
				contadorCompraJabones++;
				break;
		
		}
		
		if(alcoholCantidad > barbijoCantidad && alcoholCantidad > jabonCantidad){
			alert (" Alcohol es mayor");
			
		
		} else if (barbijoCantidad > jabonCantidad){
			alert ("barbijo es mayor");
		
		
		}else{
			alert ("jabon es mayor");
		
		}

	
	
	}// fin del while principal
	
}