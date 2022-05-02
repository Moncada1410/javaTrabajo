var text=prompt("Usuario ingrese un texto :v")
console.log(text); 
console.log("El caracter en primer lugar es: "+text.charAt(0));
numeroCaracteres = text.length;
console.log("El numero de elementos que tiene el texto es: "+numeroCaracteres);
console.log(numeroCaracteres);
var indice= prompt("Ingrese un numero positivo menor a "+numeroCaracteres);
console.log(indice);
console.log("El caracter en esa posicion es: "+text.charAt(parseInt(indice)));

