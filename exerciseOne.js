//Data

var pesoLuis = 72;
var alturaLuis = 1.72;
var pesoCarlos = 89;
var alturaCarlos = 1.75;

/*  Utilizar la siguiente formulapara calcular el IMC(Indice de masa coorporal)de Luis y de Carlos,
IMC es igual al peso dividido entre la altura al cuadrado, luego comparar e indicar si el IMC de Carlos
es superior al de Luis.
 */

var imcLuis = pesoLuis / (alturaLuis ** 2);
var imcCarlos = pesoCarlos / (alturaCarlos ** 2);

if (imcLuis > imcCarlos) {
    console.log('El IMC de Luis es mayor que el de carlos')
} else {
    console.log('El IMC de Carlos es mayor que el de luis');
}