/*
    Ejercicio de Sentencias.

    *Tienes dos Alumnos, Pablo y Maria.
    *Pablo tiene las siguientes notas en el curso de Javascript: 14,8,16.
    *Maria tiene las siguientes notas en el curso de Javascript: 12,18,10.
    *Calcular el promedio de cada alumno,ademas indicar quien tiene el promedio
    superio, e indicar si el alumno esta aprobado, para ello su promedio
    debe ser superior a 13.
*/

var notasPablo = [14, 8, 16];
var notasMaria = [12, 18, 10];
sumaPablo = 0;
sumaMaria = 0;
notasPablo.forEach(function (nota) {
    sumaPablo += nota;
});
console.log(sumaPablo);
notasMaria.forEach(function (nota) {
    sumaMaria += nota;
})
console.log(sumaMaria);
promedioPablo = sumaPablo / notasPablo.length;
promedioMaria = sumaMaria / notasMaria.length;
console.log(promedioPablo);
console.log(promedioMaria);
if (promedioPablo > 13) {
    console.log('Pablo esta aprobado');
} else {
    console.log('Pablo NO esta aprobado');
}
if (promedioMaria > 13) {
    console.log('Maria esta aprobado');
} else {
    console.log('Maria NO esta aprobado');
}
