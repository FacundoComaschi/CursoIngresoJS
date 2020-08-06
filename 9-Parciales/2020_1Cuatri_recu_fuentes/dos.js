function mostrar()
{
  var arena;
  var cal;
  var cemento;
  var cantidadArena=0;
  var cantidadCal=0;
  var cantidadCemento=0;
  var respuesta=true;
  var compra;
  var precioTotal;
  var cantidadTotal;
  var precioPorBolsa;
  var descuento15;
  var descuento25;


  while (respuesta){

    compra = prompt ("que desea comprar?");

    while (compra != "arena" && compra != "cal" && compra != "cemento"){

      compra = prompt ("se vende unicamente cemento cal y arena");
    }

    while (isNaN(precioPorBolsa)|| precioPorBolsa < 0){

      precioPorBolsa = prompt("ingrese precio")
      precioPorBolsa = parseInt(precioPorBolsa);
    }

    while (isNaN(cantidadTotal)|| cantidadTotal < 0){
      
      cantidadTotal =prompt ("ingrese cantidad bolsas");
      cantidadTotal = parseInt(cantidadTotal);
    }

      precioTotal = cantidadTotal * precioPorBolsa;

      if (cantidadTotal >= 10 && cantidadTotal <30 ){

        descuento15 = precioTotal / 1.15;
      
      } else{
        if (cantidadTotal >=30){

          descuento25 = precioTotal / 1.25;
        }
      }


     

    respuesta= confirm("Desea seguir comprando?");


    alert ("compro " + cantidadTotal + " y gasto " + descuento15);

    alert ("compro " + cantidadTotal + " y gasto " + descuento25);
  }


}
