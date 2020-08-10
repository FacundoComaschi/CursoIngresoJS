function mostrar()
{
    var numero1;
    var numero2;
    var resto;

    numero1 = prompt("ingrese primer numero");
    numero1 = parseInt(numero1);
    
    numero2 = prompt("ingrese el segundo numero");
    numero2 = parseInt(numero2);

    resto = numero1%numero2;

    if (numero1 == numero2){

        alert ("el cuadrado del numero = "+numero1 * numero2);

    }

   if (numero1 != numero2){
   
    if ((numero1 % numero2) == 0){

        alert (numero1 - numero2);

    }else alert("el resto es " + resto);

    }
   
   
    if (resto>3){

        alert (resto + " el resto de la division es mayor a 3 ")
    }
}
