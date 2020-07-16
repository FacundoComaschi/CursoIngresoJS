/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoTerreno;
    var anchoTerreno;
    var perimetroTerreno;
    var tresHilosDeAlambre;

    largoTerreno = txtIdLargo.value;
    anchoTerreno = txtIdAncho.value;

    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);

    perimetroTerreno = (largoTerreno *2) + (anchoTerreno*2);
    //txtIdRadio.value = perimetroTerreno;

    tresHilosDeAlambre = perimetroTerreno * 3;

    alert ("se necesitan comprar "+tresHilosDeAlambre+ " metros de alambre");
    

}
function Circulo () 
{
    var radio;
    var alambrado;
    var perimetro;

    radio = txtIdRadio.value;
    radio = parseFloat(radio);

    perimetro = 2 * radio * Math.PI;
    perimetro = Math.ceil(perimetro);
    //perimetro = parseFloat(perimetro);
    alambrado = perimetro * 3;


    alert ("se necesitan comprar "+alambrado+ " metros de alambre");

}
function Materiales () 
{
    var largoTerreno;
    var anchoTerreno;
    var bolsaCemento;
    var bolsaCal;
    var area;

    largoTerreno = txtIdLargo.value;
    anchoTerreno = txtIdAncho.value;

    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);

    area = largoTerreno * anchoTerreno;

    bolsaCemento = area * 2;
    bolsaCal = area * 3;
     alert (" se necesitan "+bolsaCemento+ " bolsas de cemento y "+bolsaCal+ " bolsas de cal");




}