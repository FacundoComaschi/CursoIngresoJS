//Enunciado  a)”bandera a full”
//de una cantidad de espectadores  indeterminada debemos tomar lo 
//siguiente datos
//sexo
//altura
//edad
//nombre
//se debe informar:

//1-el nombre de la más alta de las mujeres
//2-el nombre del  más viejo de los hombres 
//3-el nombre del primer adolescente ingresado, (solo mostrar si y sólo 
//    si  hay  algún adolescente)
//NOTA:pedir datos por "prompt()" y mostrar por console.log()

function mostrar(){

var especatadores;
var sexo;
var altura;
var edad;
var nombre;
var respuesta=true;
var banderaAltaMujeres = "primera vez";
var mujerMasAlta;
var nombreMujerMasAlta;
var banderaHombreMasViejo = "primera vez";
var hombreMasViejo;
var nombreHMasViejo;
var banderaAdolescente ="primera vez";
var nombreAdolescente;

while (respuesta){

    nombre = prompt("ingrese nombre del espectador");
    
    while (!(isNaN(nombre))){

        nombre= prompt ("ingrese nombre en letras");
    }

    sexo = prompt("ingrese sexo");

    while (sexo != "m" && sexo != "f"){

        sexo = prompt ("ingrese sexo m o f");
    }

    altura = prompt("ingrese altura");

    while (isNaN(altura) && altura<1){

        altura = prompt ("ingrese altura en numeros y mayor a 0");
    }
    
    edad = prompt ("ingrese edad");

    while (isNaN(edad) && edad < 1 ){

        edad = prompt("ingrese edad en numeros y mayor a 1");
    }

    if (banderaAltaMujeres == "primera vez" && sexo== "f"){
        banderaAltaMujeres == "no es la primera vez";

        mujerMasAlta = altura;
        nombreMujerMasAlta = nombre
    
    }else{
        if (altura > mujerMasAlta){

            mujerMasAlta = altura;
            nombreMujerMasAlta = nombre;
        }
    }

    if (banderaHombreMasViejo == "primera vez" && sexo =="m"){
        banderaHombreMasViejo == "segunda vez";

        hombreMasViejo = edad;
        nombreHMasViejo = nombre;
    }else{
        if (edad > hombreMasViejo){

            hombreMasViejo = edad;
            nombreHMasViejo = nombre;
        }
    }

    if (edad > 14 && edad < 22){

        if (banderaAdolescente == "primera vez"){
            banderaAdolescente =="segunda vez";

            nombreAdolescente = nombre;

        }

    }

    respuesta = confirm("desea continuar?");
}


console.log ("el nombre de la mujer mas alta es " +nombreMujerMasAlta);

console.log ("el nombre del hombre mas viejo es " +nombreHMasViejo);

console.log ("el nombre del primer adolescente es "+nombreAdolescente);





}