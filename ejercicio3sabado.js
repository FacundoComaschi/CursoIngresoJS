//Enunciado b)”sin banderas”
//Se debe ingresar 10:
//nombres
//edad(0 y 115)
//altura(30 y 230)
//sexo
//Dinero(puede ser positivo o negativo, pero debe ser un número)
//CantidadDeHijos(0 y 10)
//despues de validar todos los datos,
//se debe informar:

//1- nombre de la persona con edad más vieja
//2- promedio de altura de las mujeres
//3- nombre de la mujer más joven
//NOTA:pedir datos por "prompt()" y mostrar por console.log(),
//verificar que los datos  exitan antes de mostrarlos

function mostrar (){

var nombre;
var contador=0;
var edad;
var altura;
var sexo;
var dinero;
var cantidadHijos;
var contadorMujeres=0;
var sumaAlturaMujeres=0;

    while(contador<10){

        nombre = prompt ("ingrese su nombre");

        while (!(isNaN(nombre))){

            nombre = prompt ("ingrese nombre en letras sin numeros");
        }

        edad = prompt ("ingrese edad");

        while (isNaN(edad) && edad<=0 && edad>115){

            edad = prompt ("ingrese una edad valida");
        }

        altura = prompt ("ingrese su altura");

        while (isNaN(altura) && altura < 30 && altura > 230){

            altura = prompt("ingrese altura valida en cm");
        }

        sexo = prompt("ingrese sexo");

        while (sexo != "f" && sexo != "m"){

            sexo = prompt("ingrese sexo f o m");
        }

        dinero = prompt("ingrese cantidad de dinero");

        while (isNaN(dinero)){

            dinero= prompt("ingrese dinero en numeros");
        }

        cantidadHijos = prompt("ingrese cantidad de hijos");

        while (isNaN(cantidadHijos) && cantidadHijos <= 0 && cantidadHijos > 10){

            cantidadHijos = prompt("ingrese cantidad de hijos entre 1 y 10");
        }

        switch (sexo == "f"){

            case edad:
                contadorMujeres++;
                sumaAlturaMujeres = sumaAlturaMujeres + altura;

        }

        contador++;
    }


}
