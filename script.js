var nombre=prompt("Ingrese un nombre ");
var apellido=prompt("Ingrese su apellido");
var edad=prompt("Ingrese su edad");

function hola(n,a,e){
    return "Bienvenido a nuestro sitio web "+n+" "+a+" y tienes "+e+" años.";
}
alert(hola(nombre,apellido,edad));