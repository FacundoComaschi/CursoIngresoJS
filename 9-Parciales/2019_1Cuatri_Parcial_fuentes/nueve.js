function mostrar()
{
    var pais;
    var temperaturaMedia;
    var habitantes;
    var respuesta = true;
    var contadorTPar=0;
    var banderaPaisMenosHabitantes = "primeraa vez";
    var nombrePaisMenosHabitantes;
    var cantidadHabitantesBandera;
    var contadorTempMayor=0;
    var paisesIngresado=0;
    var cantidadHabitantes=0;
    var banderaTemMinima = "primera vez";
    var tempMinima;
    var paisTempMinima;
    var promedioHabitantes;

    while (respuesta){


        pais = prompt("ingrese el nombre del pais");

        while (!(isNaN(pais))){

            pais = prompt("ingrese el pais sin numeros");
        }

        habitantes = prompt("ingrese cantidad de habitantes");
        habitantes = parseInt(habitantes);

        while (habitantes < 1 || habitantes > 7000){

            habitantes = prompt("ingrese entre 1 y 7000 ");
            habitantes = parseInt(habitantes);
        }

        temperaturaMedia = prompt("ingrese temperatura media");
        temperaturaMedia = parseInt(temperaturaMedia);

        while (temperaturaMedia < -50 || temperaturaMedia > 50){

            temperaturaMedia = prompt("ingrese temperatura entre -50 y 50 °");
            temperaturaMedia= parseInt(temperaturaMedia);
        }

        if (temperaturaMedia % 2 == 0){

            contadorTPar++;
        }

        if (banderaPaisMenosHabitantes == "primeraa vez"){
            banderaPaisMenosHabitantes = "segundaa vez";

            nombrePaisMenosHabitantes = pais;
            cantidadHabitantesBandera = habitantes;
        }else{
            if (habitantes < cantidadHabitantesBandera){

                nombrePaisMenosHabitantes = pais;
                cantidadHabitantesBandera = habitantes;
            }
        }

        if (temperaturaMedia > 40){

            contadorTempMayor++;
        }

        cantidadHabitantes = cantidadHabitantes + habitantes;
        paisesIngresado++;
        


        if (banderaTemMinima == "primera vez"){
            banderaTemMinima = "segunda vez";

            tempMinima = temperaturaMedia;
            paisTempMinima = pais;
        }else{
            if (temperaturaMedia < tempMinima){

                tempMinima = temperaturaMedia;
                paisTempMinima = pais; 
            }
        }

        respuesta = confirm("desea continuar?");
    }

    cantidadHabitantes = parseInt(cantidadHabitantes);
    paisesIngresado = parseInt(paisesIngresado);
        
    promedioHabitantes = cantidadHabitantes / paisesIngresado;
    
    document.write ("<br> la cantidad de temperaturas pares es de " + contadorTPar);
    document.write ("<br> el nombre del pais con menos habitantes es " + nombrePaisMenosHabitantes);
    document.write ("<br> la cantidad de paises que superan los 40 son " + contadorTempMayor);
    document.write ("<br> el promedio de habitantes es " + promedioHabitantes);
    document.write ("<br> el pais con menor temperatura es "+ paisTempMinima + " con una temperatura de " + tempMinima);



}
