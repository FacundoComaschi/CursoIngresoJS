function mostrar()
{
    var contador=0;
    var tipoBolsa;
    var pesoBolsa;
    var cantidadBolsas=0;
    var pesoTotal=0;
    var promedio;
    var banderaMasLiviano = "primera vez";
    var pesoMasLiviano;
    var tipoMasLiviano;
    var contadorCarne=0;
    var sumaPesoCarne=0;
    var promedioCarne;

    while (contador<3){

        tipoBolsa= prompt("ingrese el sabor del alimento");

        while (tipoBolsa != "carne" && tipoBolsa != "pollo" && tipoBolsa != "vegetales"){

            tipoBolsa = prompt ("ingrese carne pollo o vegetales");
        }

        pesoBolsa = prompt("ingrese peso de la bolsa");
        pesoBolsa = parseInt(pesoBolsa);
        
        while (pesoBolsa<=0 || pesoBolsa>500 || isNaN(pesoBolsa)){

            pesoBolsa= prompt("ingrese peso entre 1 y 500");
            pesoBolsa = parseInt(pesoBolsa);
        }

        pesoTotal= pesoBolsa +  pesoTotal;
        cantidadBolsas++;
        contador++;
        
        if (banderaMasLiviano == "primera vez"){
            banderaMasLiviano = "segunda vez";

            pesoMasLiviano = pesoBolsa;
            tipoMasLiviano = tipoBolsa;
        }else{
            if (pesoBolsa < pesoMasLiviano){

                pesoMasLiviano = pesoBolsa;
                tipoMasLiviano = tipoBolsa;
            }

        }
    
        switch (tipoBolsa){
            case "carne":

            contadorCarne++;
            sumaPesoCarne = pesoBolsa + sumaPesoCarne;
        }

    }

    promedio = pesoTotal / contador;
    promedioCarne = sumaPesoCarne / contadorCarne;

    console.log ("el promedio de kilos es de "+ promedio);
    console.log ("el mas liviano es " +tipoMasLiviano + " y su peso es " + pesoMasLiviano);
    console.log ("la cantidad de sabor carne es " + contadorCarne + " con un promedio de " + promedioCarne);
}
