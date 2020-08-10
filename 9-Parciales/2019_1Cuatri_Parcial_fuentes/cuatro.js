function mostrar()
{
    var numero1;
    var numero2;

    numero1= prompt("ingrese 1° numero");
    numero1 = parseInt(numero1);

    numero2= prompt("ingrese 2° numero");
    numero2= parseInt(numero2);

    if (numero1 == numero2){

        alert ( "" + numero1 + numero2 )
    }

    if (numero1 > numero2){

        alert (numero1 + numero2);
    
    }else{
        if(numero1 < numero2){

            alert (numero1 - numero2);
        }
    }

    if ((numero1 - numero2) > 10){

        alert (" la resta es " + (numero1 - numero2) + " y supero el 10" );
    } 

}   

