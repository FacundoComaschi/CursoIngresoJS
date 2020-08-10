//Enunciado c)”mixing bandera”
//de una cantidad de animales indeterminada del zoológico debemos tomar lo siguiente
//raza
//peso
//temperatura media del lugar donde habita
//edad
//si está en peligro de extinción( si o no)
//se debe informar:

//1-el promedio de edad total
//2-la raza del más pesado
//3-la temperatura máxima ingresada de los animales en extinción
//NOTA:pedir datos por "prompt()" y mostrar por console.log()

function mostrar()
{
    var animales;
var raza;
var peso;
var temperaturaMedia;
var edad;
var extincion;
var contador;
var promedioEdad;
var sumaEdad;
var banderaRaza = "primera vez";
var razaMasPesada;
var razaPrimeraVez;
var banderaTemperatura ="primera vez temperatura"
var temperaturaMaxima;
var razaTemperaturaMaxima;

contador = 0;
sumaEdad = 0;


animales = prompt ("ingrese cantidad de animales");
animales = parseInt(animales);

while (isNaN(animales)){

    animales= prompt ("ingrese cantidad en numeros");
    animales= parseInt(animales);
}

while (contador < animales){

    raza = prompt ("ingrese raza del animal");

    while (!(isNaN(raza))){

        raza= prompt ("Error ingrese raza nuevamente");
    }

    peso = prompt ("ingrese peso del animal ");
    peso = parseInt(peso);

    while (isNaN(peso)){

        peso = prompt("ingrese peso en numeros");
        peso = parseInt(peso);
    }

    temperaturaMedia = prompt ("ingrese temperatura media");
    temperaturaMedia = parseInt(temperaturaMedia);

    while (isNaN(temperaturaMedia)){

        temperaturaMedia = prompt("ingrese temperatura media en numero");
        temperaturaMedia = parseInt(temperaturaMedia);
    }

    edad = prompt ("ingrese edad del animal");
    edad = parseInt(edad);

    while (isNaN(edad)){

        edad = prompt ("ingrese edad en numeros");
        edad = parseInt(edad);
    }

    extincion = prompt ("esta en peligro de extincion?");

    while (extincion != "si" && extincion != "no"){

        extincion = prompt ("ingrese unicamente si o no");
    }

        sumaEdad = sumaEdad + edad;
    
    if (banderaRaza = "primera vez"){
         banderaRaza = "ya paso";

         razaPrimeraVez = raza;
         razaMasPesada = peso;

    }else{
        if (peso > razaMasPesada){
            razaMasPesada = peso;
            razaPrimeraVez = raza;
        }
    }
    
    if (extincion == "si"){

    if (banderaTemperatura = "primera vez temperatura"){
        banderaTemperatura = "no es la primera vez";

        temperaturaMaxima = temperaturaMedia;
        razaTemperaturaMaxima = raza;

     }else{
            if(temperatura > temperaturaMaxima){

            temperaturaMaxima = temperaturaMedia;
            razaTemperaturaMaxima = raza;
            }

        }

    }

    contador++;
}

promedioEdad = sumaEdad / animales;

console.log ("el promedio de edad total es " +promedioEdad );
console.log ("la raza del mas pesado es " + razaPrimeraVez + " pesando " + razaMasPesada);

if (extincion == "si"){
console.log ("la temperatura mayor ingresada de animales en ext es " + temperaturaMaxima + " de raza " + razaTemperaturaMaxima);
    }
}
