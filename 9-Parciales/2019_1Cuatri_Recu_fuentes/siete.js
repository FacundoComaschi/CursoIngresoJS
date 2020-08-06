function mostrar()
{
    var bolsas;
    var kilos;
    var promedio;
    var contador=0;
    var cantidadKilos=0;
    var cantidadBolsas=0;
    var carne=0;
    var promedioCarne;


    while (contador < 10) {
        
        bolsas = prompt("ingrese sabor");
        
        while (bolsas != "carne" && bolsas != "vegetales" && bolsas != "pollo"){
            cantidadBolsas++;
            bolsas = prompt ("ingrese carne pollo o vegetales")
        
        }

        kilos= prompt("ingrese peso");

        while (isNaN(kilos) || kilos<1 || kilos>500){
            
            kilos = prompt("ingrese peso en numeros entre 0 y 500");
        }
    
        cantidadKilos = cantidadKilos + kilos;
        contador++;
        promedio = cantidadKilos / cantidadBolsas;

        if (bolsas == "carne"){
            carne++;
            kilos++;
        }
    
        promedioCarne = kilos / carne;
       
    }

    console.log ("promedio de kilos " + promedio);
    console.log ("promedio kilos sabor carne" + promedioCarne);
}
