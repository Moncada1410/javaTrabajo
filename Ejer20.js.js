var num_1=parseFloat(prompt("Ingrese el 1 numero"));
var num_2=parseFloat(prompt("Ingrese el 2 numero"));
var num_3=parseFloat(prompt("Ingrese el 3 numero"));
var arr=[num_1,num_2,num_3]
arr = arr.sort((a, b) => a - b)
console.log("El numero menos es: "+arr[0])

