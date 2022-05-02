var nom_1=prompt("ingrese el primer nombre");
var nom_2=prompt("ingrese el segundo nombre");
console.log("Primero nombre: "+nom_1);
console.log("Segundo nombre: "+nom_2)
if (nom_1.charAt(0)===nom_2.charAt(0)){
    console.log("True");
}else if(nom_1.charAt(nom_1.length-1)===nom_2.charAt(nom_2.length-1)){
    console.log("True");

}else{
    console.log("false")
}