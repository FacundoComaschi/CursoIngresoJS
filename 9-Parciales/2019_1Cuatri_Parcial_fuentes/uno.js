
function mostrar()
{
    var trianguloEquilatero;
    var perimetro;

    
    
    trianguloEquilatero = prompt ("ingrese un lado de su triangulo equilatero");
    trianguloEquilatero = parseInt(trianguloEquilatero);

    perimetro = trianguloEquilatero * 3;

    alert ("el perimetro de su triangulo es " + perimetro);
}
