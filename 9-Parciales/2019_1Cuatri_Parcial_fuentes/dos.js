function mostrar()
{
  var nombreH;
  var nombreM;
  var pesoH;
  var pesoM;
  var pesoTotal;
  var promedio;

  nombreH = prompt("ingrese el nombre del hombre");
 
  pesoH = prompt("ingrese peso del hombre")
    pesoH = parseInt(pesoH);

  nombreM = prompt("ingrese el nombre de la mujer");

  pesoM = prompt("ingrese peso de la mujer");
    pesoM= parseInt(pesoM);

  pesoTotal = pesoH + pesoM;

  promedio = pesoTotal / 2;

  alert (" Ustedes se llaman " + nombreH +" y " + nombreM + " pesan " + pesoH +

   " y " + pesoM + " kilos " + " que al sumar ambos son " + pesoTotal + 

   " y el promedio es " + promedio)
    

}
