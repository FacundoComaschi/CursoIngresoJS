function mostrar()
{
  var respuesta = true;
  var tipoBolsa;
  var cantidadBolsas;
  var precioPorBolsa;
  var precioConDescuento;
  var cantidadTotalBolsas=0;
  var importeBruto=0;
  var banderaMasCantidad = "primera vez";
  var banderaCantidadBolsas;
  var banderaTipoMasCantidad;
  var banderaMasCaro = "primera vez";
  var banderaPrecioMasCaro;
  var banderaTipoMasCaro;

  while (respuesta == true){

    tipoBolsa = prompt("ingrese tipo de material");

    while (tipoBolsa != "cal" && tipoBolsa != "cemento" && tipoBolsa != "arena"){

      tipoBolsa = prompt("ingrese cal cemento o arena");
    }

    cantidadBolsas = prompt ("ingrese cantidad de bolsas");
    cantidadBolsas = parseInt(cantidadBolsas);

    while (isNaN(cantidadBolsas) || cantidadBolsas <= 0){

      cantidadBolsas = prompt("ingrese cantidad de bolsas mayor a 0");
      cantidadBolsas = parseInt(cantidadBolsas);
    }

    precioPorBolsa = prompt("ingrese precio por bolsa");
    precioPorBolsa = parseInt(precioPorBolsa);

    while(isNaN(precioPorBolsa) || precioPorBolsa <= 0){

      precioPorBolsa = prompt("ingrese cantidad mayor a 0");
      precioPorBolsa = parseInt(precioPorBolsa);
    }

    cantidadTotalBolsas = cantidadTotalBolsas + cantidadBolsas;
    importeBruto = importeBruto + precioPorBolsa;

    if (banderaMasCantidad == "primera vez"){
      banderaMasCantidad = "segunda vez";

      banderaCantidadBolsas = cantidadBolsas;
      banderaTipoMasCantidad = tipoBolsa;
    }else{
      if (cantidadBolsas > banderaCantidadBolsas){

        banderaCantidadBolsas = cantidadBolsas;
        banderaTipoMasCantidad = tipoBolsa;
      }
    }
    
    if (banderaMasCaro == "primera vez"){
      banderaMasCaro = "segunda vez";

      banderaPrecioMasCaro = precioPorBolsa;
      banderaTipoMasCaro = tipoBolsa;
    }else{
      if (precioPorBolsa > banderaPrecioMasCaro){

        banderaPrecioMasCaro = precioPorBolsa;
        banderaTipoMasCaro = tipoBolsa;
      }
    }


    
    respuesta = confirm("desea continuar?");
  }

  

  if (cantidadTotalBolsas > 10 && cantidadTotalBolsas < 30){

    precioConDescuento = 0.85;
  }else{
    if (cantidadTotalBolsas > 30){

      precioConDescuento = 0.75;
    
    }else (precioConDescuento = 1);
  }

  console.log ("el importe bruto a pagar es de " + importeBruto);
  console.log ("el importe total a pagar es de " + importeBruto * precioConDescuento);
  console.log ("el tipo con mas cantidad de bolsas es " + banderaTipoMasCantidad);
  console.log ("el tipo mas caro es " + banderaTipoMasCaro);



}
