function mostrar()
{
    var letra;
    var numero;
    var contador=true;
    var contadorPares=0;
    var contadorImpares=0
    var contador0=0;
    var contadorPositivos=0;
    var sumaPositivos=0;
    var sumaNegativos=0;
    var banderaMaximo= "primera vez";
    var banderaMinimo = "primera vez";
    var numeroMaximo;
    var letraNMaximo;
    var numeroMinimo;
    var letraNMinimo;

    while (contador == true){

    letra = prompt("ingrese una letra");

    while (!(isNaN(letra))){

        letra = prompt("ingrese solo letras");
    }

    numero = prompt("ingrese numero");

    while (isNaN(numero) || numero < -100 || numero >100){

        numero=prompt("ingrese numero entre -100 y 100");
        numero = parseInt(numero);
    }

    if (numero % 2 == 0){

        contadorPares++;
    }else(contadorImpares++);

    if (numero == 0){

        contador0++;
    }

    if (numero >= 1){
        sumaPositivos= sumaPositivos + numero;
        contadorPositivos++;
    
    }else (sumaNegativos = (sumaNegativos) + (numero));

    

    if (banderaMinimo == "primera vez"){
        banderaMinimo = "segunda vez";

        numeroMinimo = numero;
        letraNMinimo = letra;
    }else{
        
        if(numero < numeroMinimo){

            numeroMinimo = numero;
            letraNMinimo = letra;
        } 
    }

    if (banderaMaximo == "primera vez"){
        banderaMaximo = "segunda vez";

        numeroMaximo = numero;
        letraNMaximo = letra;
    }else{
        if (numero > numeroMaximo){

            numeroMaximo = numero;
            letraNMaximo = letra;
        }
    }


        contador = confirm ("Desea continuar?");
    }

    

    document.write ("<br> la cantidad de numeros pares es de " +contadorPares);
    document.write ("<br> la cantidad de impares es de "+contadorImpares);
    document.write ("<br> la cantidad de ceros es de "+ contador0);
    document.write ("<br> el promedio de numeros positivos es " + (sumaPositivos / contadorPositivos));
    document.write ("<br> la suma de los numeros negativos es "+ (sumaNegativos));
    document.write ("<br> el numero maximo y su letra es "+ numeroMaximo + letraNMaximo);
    document.write ("<br> el numero minimo y su letra es " + numeroMinimo + letraNMinimo);
}
