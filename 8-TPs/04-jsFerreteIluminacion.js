/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var cantidadDeLamparas;
     var marca;
     var precioConDescuento;
     var IIBB;
    
     IIBB = 0.10;

     cantidadDeLamparas = txtIdCantidad.value;
     marca = Marca.value;
     
     
     if (cantidadDeLamparas >= 6){
         precioConDescuento = ((cantidadDeLamparas * 35) * 0.50);
     
        }else if (cantidadDeLamparas == 5 && marca == "ArgentinaLuz"){
            precioConDescuento = ((cantidadDeLamparas * 35) * 0.60);
     
        }else if (cantidadDeLamparas == 5 && marca != "ArgentinaLuz"){
            precioConDescuento = ((cantidadDeLamparas * 35 ) * 0.70);
     
        }else if (cantidadDeLamparas == 4 && marca == "ArgentinaLuz"){
            precioConDescuento = ((cantidadDeLamparas * 35) * 0.75);
     
        }else if (cantidadDeLamparas == 4 && marca == "FelipeLamparas"){
            precioConDescuento = ((cantidadDeLamparas * 35) * 0.75);
    
        }else if (cantidadDeLamparas == 4){
            precioConDescuento = ((cantidadDeLamparas * 35 ) * 0.80);
     
        }else if (cantidadDeLamparas == 3 && marca == "ArgentinaLuz"){
            precioConDescuento = ((cantidadDeLamparas * 35) * 0.85);
     
        }else if (cantidadDeLamparas == 3 && marca == "FelipeLamparas"){
            precioConDescuento = ((cantidadDeLamparas * 35) * 0.90);
     
        }else if (cantidadDeLamparas == 3){
            precioConDescuento = ((cantidadDeLamparas * 35) * 0.95);
     
        }else if (cantidadDeLamparas <=2){
            precioConDescuento = (cantidadDeLamparas * 35);

        }if (cantidadDeLamparas > 120){
            alert ("usted pago " + (cantidadDeLamparas * IIBB) + " de ingresos brutos");
        } txtIdprecioDescuento.value = precioConDescuento;

    } 

