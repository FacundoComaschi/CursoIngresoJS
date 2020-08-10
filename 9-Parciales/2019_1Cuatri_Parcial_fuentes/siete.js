function mostrar()
{
    var altura;
    var sexo;
    var contador=0;
    var sumaAltura=0;
    var banderaAltura = "primera vez";
    var alturaMasBaja;
    var sexoAlturaBaja;
    var contadorMujer180=0;

    while (contador<=2){

        altura = prompt("ingrese altura en cm");
        altura = parseInt(altura);
        
        while (isNaN(altura) && altura <=0 && altura > 250){

            altura = prompt("ingrese altura en cm no menor a 0 y no mayor a 250");
            altura = parseInt(altura);
        }

        sexo = prompt("ingrese sexo ");

        while (sexo != "f" && sexo != "m"){

            sexo = prompt("ingrese sexo f o m");
        }

            sumaAltura = altura + sumaAltura;
            sumaAltura = parseInt(sumaAltura);

        if (banderaAltura == "primera vez"){
            banderaAltura == "segunda vez";

            alturaMasBaja = altura;
            sexoAlturaBaja = sexo;

        }else{
            if (altura < alturaMasBaja){

                alturaMasBaja = altura;
                sexoAlturaBaja = sexo;

            }

        }

        if (sexo == "f" && altura >= 190){

            contadorMujer180++;
        }

        contador++;
    }

    console.log (" el promedio de altura es de " + (sumaAltura / 5));
    console.log (" la altura mas baja  es " + alturaMasBaja + " y su sexo es " + sexoAlturaBaja);
    console.log (" la cantidad de mujeres que superan los 190 son " + contadorMujer180);

}
