function mostrar()
{
    var continente;
    var dias;
    var precioPorDia = 100;
    var formaDePago;

    
     
    dias = prompt ("ingrese cantidad de dias");
    dias = parseInt(dias);
    formaDePago = prompt("ingrese forma de pago");
    continente = Marca.value;

    switch (continente){

        case "America":

        switch(formaDePago){

            case "efectivo":
            case "mercadoPago":
            case "cheque":
            precioPorDia= precioPorDia * 0.60;
            alert ("debe pagar " + precioPorDia * dias );
            
            case "debito":
            precioPorDia = precioPorDia * 0.50;
            alert ("debe pagar " + precioPorDia * dias);
           
            break;
        
        }   
        

    }

    switch (continente){

        case "África":

        switch (formaDePago){

            case "mercadoPago":
            case "efectivo":
            precioPorDia = precioPorDia * 0.25;
            alert ("debe pagar "+ precioPorDia * dias);

            case "cheque":
            case "debito":
            precioPorDia = precioPorDia * 0.40;
            alert ("debe pagar "+precioPorDia * dias); 
            
            break;
        }
        

    }

    switch (continente){

        case "Europa":

        switch (formaDePago){

            case "debito":
            precioPorDia = precioPorDia * 0.65;
            alert ("debe pagar "+precioPorDia * dias);

            case "mercadoPago":
            precioPorDia = precioPorDia * 0.70;
            alert ("debe pagar " +precioPorDia * dias);
            
            case "cheque":
            case "efectivo":
            precioPorDia = precioPorDia * 0.75;
            alert ("debe pagar "+precioPorDia * dias);
           
            break;

        }


    }

    switch (continente){

        case "Asia":
        case "Oceania":

        switch (formaDePago){

            case "cheque":
            case "efectivo":
            case "debito":
            case "mercadoPago":
            precioPorDia = precioPorDia * 1.80;
            alert ("debe pagar " + precioPorDia * dias);
        }
        
    
        break;
    }


}
