function mostrar()
{
    var continente;
    var dias;
    var precioPorDia = 100;
    var tipoDePago;

    continente = selecContinente.value;
    tipoDePago = selecPago.value;

    dias = prompt("cuantos dias se desea ospedar");

    switch (continente + tipoDePago ){ 

        case "America" + "Débito":
            precioPorDia = precioPorDia * 0.75;
            alert ("debe pagar " + precioPorDia * dias);
            break;

        case "África" + "MercadoPago":
            precioPorDia = precioPorDia * 0.75;
            alert("debe pagar " + precioPorDia * dias);
            break;

        case "África" + "Efectivo":
            precioPorDia = precioPorDia * 0.55;
            alert ("debe pagar " + precioPorDia * dias);
            break;

        case "Oceania" + "MercadoPago":
            precioPorDia = precioPorDia * 0.55;
            alert ("debe pagar " + precioPorDia * dias);
            break;

        case "Oceania" + "Efectivo":
            precioPorDia = precioPorDia * 0.55;
            alert ("debe pagar " + precioPorDia * dias);
            break;

        case "Europa" + "Débito":
            precioPorDia = precioPorDia * 0.65;
            alert ("debe pagar " + precioPorDia * dias);
            break;

        case "Europa" + "mercadoPago":
            precioPorDia = precioPorDia * 0.70;
            alert ("debe pagar " + precioPorDia * dias);
            break;

        case "Asia" + "Cheque":
            precioPorDia = precioPorDia * 1.85;
            alert ("debe pagar " + precioPorDia * dias);
            break;
        }

    switch (continente){

        case "America":

        switch (tipoDePago){

            case "Cheque":
            case "Crédito":
            case "Efectivo":
            case "Leliq":
            case "MercadoPago":

            precioPorDia = precioPorDia * 0.85;
            alert ("debe pagar " + precioPorDia * dias);
            break;

         }
    }

    switch (continente){

        case "África":
        case "Oceania":

        switch(tipoDePago){

            case "Leliq": 
            case "Cheque":
            case "Crédito":
            case "Débito":
        
            precioPorDia = precioPorDia * 0.70;
            alert ("debe pagar " + precioPorDia * dias);
            break;
        }

    }    
    
    switch (continente){

        case "Europa":

        switch(tipoDePago){

            case "Cheque":
            case "Crédito":
            case "Efectivo":
            case "Leliq":
        
            precioPorDia = precioPorDia * 0.75;
            alert ("debe pagar " + precioPorDia * dias);
            break; 
        }
    }
        switch(continente){

            case "Asia":
            
            switch(tipoDePago){
            
            case "Débito":
            case "Crédito":
            case "Efectivo":
            case "Leliq":
            
            precioPorDia = precioPorDia * 1.75;
            alert ("debe pagar " + precioPorDia * dias);
            break;
        }
            
       
        }


}
