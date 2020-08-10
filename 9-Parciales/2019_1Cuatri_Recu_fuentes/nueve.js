function mostrar()
{
    var nombre;
    var sexo;
    var nota;
    var edad;
    var respuesta = true;
    var contadorVaronesAprobados=0;
    var contadorVaronesMenores=0;
    var sumaNotasMenores=0;
    var contadorVaronesAdolescentes=0;
    var sumaNotasAdolescentes=0;
    var contadorVaroesMayores=0;
    var sumaNotasMayores=0;
    var contadorMasculinos=0;
    var contadorFemeninos=0;
    var sumaNotasMasculinos=0;
    var sumaNotasFemeninos=0;
    var promedioMenoresEdad;
    var promedioAdolescentes;
    var promedioMayores;
    var promedioMasculinos;
    var promedioFemeninos;



    while (respuesta){

        nombre = prompt("ingrese nombre");

        while (!(isNaN(nombre))){

            nombre = prompt ("ingrese nombre correcto");
        }

        sexo = prompt ("ingrese sexo");

        while (sexo != "m" && sexo != "f"){

            sexo = prompt("ingrese sexo f o m");
        }

        edad = prompt ("ingrese edad");
        edad = parseInt(edad);

        while (isNaN(edad) || edad < 5){

            edad = prompt ("ingrese edad mayor a 5");
            edad = parseInt(edad);
        }
        
        
        nota = prompt("ingrese nota");
        nota = parseInt(edad);

        while (nota < 1 && nota > 10){

            nota = prompt ("ingrese nota entre 1 y 10");
            nota = parseInt(nota);
        }

        if (sexo == "m" && nota >= 7 ){

            contadorVaronesAprobados++;
        }

        if (edad< 15){

            contadorVaronesMenores++;
            sumaNotasMenores = sumaNotasMenores + nota;
        }

        if (edad > 15 && edad <= 17){

            contadorVaronesAdolescentes++;
            sumaNotasAdolescentes = sumaNotasAdolescentes + nota;
        }

        if (edad>= 18){

            contadorVaroesMayores++;
            sumaNotasMayores = sumaNotasMayores + nota;
        }

        if (sexo == "m"){

            contadorMasculinos++;
            sumaNotasMasculinos= sumaNotasMasculinos + nota;
        }

        if (sexo == "f"){

            contadorFemeninos++;
            sumaNotasFemeninos= sumaNotasFemeninos + nota;
        }

        respuesta = confirm ("desea continuar?");
    }

    promedioMenoresEdad = sumaNotasMenores / contadorVaronesMenores;
    promedioAdolescentes = sumaNotasAdolescentes / contadorVaronesAdolescentes;
    promedioMayores = sumaNotasMayores / contadorVaroesMayores;
    promedioMasculinos = sumaNotasMasculinos / contadorMasculinos;
    promedioFemeninos = sumaNotasFemeninos / contadorFemeninos;

    console.log (" la cantidad de varones aprobados es " + contadorVaronesAprobados);
    console.log ("promedio menores de edad " + promedioMenoresEdad);
    console.log ("promedio adolescentes " + promedioAdolescentes);
    console.log ("promedio mayores " + promedioMayores);
    console.log ("promedio masculins " + promedioMasculinos);
    console.log ("promedio femeninis " + promedioFemeninos);


}
