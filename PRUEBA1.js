/* E1 Don José todos los martes y jueves realiza un 20% de descuento en el total de las
compras, crea una función la cual debe recibir un parámetro del día y el arreglo de
valores de los productos a comprar, esta debe retornar el total final de la compra según
corresponda o no descuento.*/

/*Se deben definir los días como strings, luego ingresar una función que al recibir el nombre de los días
Martes y jueves, multiplique el valor del total de la compra *0.80, cosa de obtener el valor ya con descuento.
En caso contrario, se le indica a la función que dicho día retorna el mismo valor o *1, para indicar que no
hay dcto en dichos días */

//Intento Pseudocódigo:
// 1.- define const matrizprecio
// 2.- define var nuevoprecio
// 3.- define var carrito
// 3.- ingresa funcion 
// 4.- si parámetro de matrizprecio resulta 'Lunes'
// 5.- return carrito*1
// 6.- si parámetro de matrizprecio resulta 'Martes'
// 7.- return carrito*0.80
// 8.- si parámetro de matrizprecio resulta 'Miercoles
// 9.- return carrito*1
// 10.- si parámetro de matrizprecio resulta 'Jueves'
// 11.- return carrito*0.80
// 12.- si parámetro de matrizprecio resulta 'viernes'
// 13.- return carrito*1
// 10.- si parámetro de matrizprecio resulta 'sabado'
// 11.- return carrito*1
// 10.- si parámetro de matrizprecio resulta 'domingo'
// 11.- return carrito*1
// 12.- break
// 13.- leer var nuevoprecio


var matrizprecios = ['Lunes','Martes','Miercoles','Jueves','Vierdes','Sabado','Domingo'];
var preciodcto = [];
matrizprecios.forEach(x=>preciodcto.push(x*0.85));
console.log(preciodcto);

function totalfinal ['Lunes', 'Martes', 'Miercoles', 'Jueves, 'Viernes', 'Sabado', 'Domingo']


/* E2 Don José hace un 5% de descuento a los clientes que compran más de 3 productos y al
menos uno de ellos tiene un valor mayor a 10.000, realiza una función que calcule el
total verificando si corresponde o no el descuento.*/

/* la función debe identificar, en primera instancia si la cantidad de productos del carrito es mayor a 3, si no se cumple se retorna
el mismo valor del carrito sin modificaciones, en caso contrario se itera ahora para identificar si alguno de los componentes de carrito
ejemplo: carrito = a+b+c, es mayor a 10000 ({a,b,c}>10000), si alguno de esos componentos cumple con dicha condición, se aplica entonces el
5% de descuento al valor del carrito multiplicandolo por 0.95, obteniendo el valor del nuevocarrito con el dcto aplicado. */ 

//Intento Pseudocodigo
/// 1.- define var productoscarrito1 []
// 2.- define var productoscarritodcto []
// 3.- 
// 3.- 
// 4.- 
// 5.- 
// 6.- 
// 7.- 
// 8.- 
// 9.- 
// 10.- 
// 11.- 
// 12.- 
// 13.- 
// 10.- 
// 11.- 
// 10.- 
// 11.- 
// 12.- 
// 13.- 

var carrito = [a, b, c];

function identificadcto(){
    for(var carrito  10000; ) 
}
for(var i = 1; i<=23; i++)

/* E3 Se desea tener una función verificadora encargada de revisar si dentro de el arreglo de
valores de los productos a comprar no existan valores negativos ingresados por error,
en caso de no existir debe retornar un mensaje de éxito, en caso contrario debe retornar
un mensaje de error junto con el número negativo y el índice en el que se encontraba. */

// Se define una variable de carrito y se debe iterar cada numero y revisando que el resultado sea mayor a 0, si es resultado es
// menor a 0 se asume entonces que hay un producto con valor negativo y se produce a retornar un string que contenga el error y
// donde y cual es.


/* E4 Dado el siguiente arreglo [200,5500,900,7000,500,300] con los valores de cada
producto
○ Crea una función que retorne el valor del producto más costoso.
○ Crea una función que retorne el valor del producto menos costoso. */

//1.- Crear funcion que toma como argumento un array en este caso el arreglo indicado arriba
//2.- Crear funcion que itire en cada elemento del arreglo identificando de si son menores a una constante ya sea numero mas grande
// o pequeño
//3.- Checkear la constante en cada iteración con cada elemento del arreglo indicado arriba
//4.- Desplegar el valor entregado según se haya definido si es mas grande o pequeño



