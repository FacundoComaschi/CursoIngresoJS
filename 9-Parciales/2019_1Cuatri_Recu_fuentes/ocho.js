function mostrar()
{
    var colorVehiculo;
    var precioVehiculo;
    var respuesta = true;
    var contadorRojos=0;
    var contadorRojoMasDe5000=0;
    var contadorPrecioMenosA5000=0;
    var cantidadVueltas=0;
    var sumaTotalPrecio=0;
    var promedio;
    var banderaMasCaroYColor = "primera vez";
    var autoMasCaro;
    var colorAutoCaro;

    while (respuesta){

        colorVehiculo = prompt("ingrese color vehiculo");

        while (colorVehiculo != "rojo" && colorVehiculo != "verde" && colorVehiculo != "amarillo"){

            colorVehiculo = prompt("ingrese color verde rojo o amarillo");
        }

        precioVehiculo = prompt("ingrese precio vehiculo");
        precioVehiculo = parseInt(precioVehiculo);

        while (precioVehiculo < 0 || precioVehiculo > 10000 || isNaN(precioVehiculo)){

            precioVehiculo = prompt("ingrese precio entre 0 y 10000");
            precioVehiculo = parseInt(precioVehiculo);
        }

        switch (colorVehiculo){
            case "rojo":

            contadorRojos++;

        }

        if (colorVehiculo == "rojo" && precioVehiculo >5000){

            contadorRojoMasDe5000++;
        }

        if (precioVehiculo < 5000){

            contadorPrecioMenosA5000++;
        }
        
        cantidadVueltas++;

        sumaTotalPrecio = sumaTotalPrecio + precioVehiculo;
        
        

        if (banderaMasCaroYColor == "primera vez"){
            banderaMasCaroYColor = "segunda vez";

            autoMasCaro = precioVehiculo;
            colorAutoCaro = colorVehiculo;

        }else{
            if (precioVehiculo > autoMasCaro){

                autoMasCaro = precioVehiculo;
                colorAutoCaro = colorVehiculo;
            }
        }


        respuesta = confirm("desea continuar?");
    }

    promedio = sumaTotalPrecio / cantidadVueltas;

    document.write ("<br> la cantidad de rojos es de "+ contadorRojos);
    document.write ("<br> la cantidad de rojos mayor a 5000 es de " + contadorRojoMasDe5000);
    document.write ("<br> la cantidad de autos menor a 5000 es de " + contadorPrecioMenosA5000);
    document.write ("<br> el promedio de los vehiculos " + promedio);
    document.write ("<br> el mas caro es " + autoMasCaro + " color " + colorAutoCaro);



}
