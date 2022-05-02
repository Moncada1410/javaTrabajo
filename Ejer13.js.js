var edad=prompt("Usuario por favor ingresa tu edad")
var edad_1=parseInt(edad)
console.log("Tu edad: "+edad_1)
var art=prompt("Usuario ingresa la cantidad de articulos que compraste")
var art_1=parseFloat(art)
console.log("tus articulos: "+art_1)
if (edad_1>=18 && art_1>1){
    console.log("True")
}else{
    console.log("False")
}