//## Consignas
//1. Copiar las funciones en un archivo JavaScript.
//2. Simplificar la composición de los strings.
//3. Simplificar escritura de los objetos literales.
//4. Transformar las funciones básicas en funciones flecha.
//5. Crear un repositorio con el nombre ES6-miNombre (nombre de cada uno de ustedes) y subir las soluciones a Github a través de la consola o GitHub Desktop.

function saludar(nombre){
    //let nombre = nombre;
    return `Hola ${nombre}`;
}

// Mostrar el resultado por consola
console.log(saludar('Alejandro'));

//funcion saludar flecha
const saludar = nombre => `Hola ${nombre}`




function multiplicar(a, b){
    const resultado = a * b;
    return resultado;
}

// Mostrar el resultado por consola
console.log(multiplicar(3, 15))

//funcion multiplicar flecha
const multiplicar = (a, b) => a * b;




function crearAlumno(nombre, apellido, edad, materias){
    let alumno = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        materias: materias
    }

    return alumno;
}

//Mostrar el resultado por consola.
crearAlumno('Leo', 'Messi', '32', ['TLPA','Base de Datos','Inglés'])

//funcion crearAlumno flecha
const crearAlumno = (nombre, apellido, edad, materias) => (alumno = {nombre, apellido, edad, materias})




function devolverFecha(){
    return `Hoy es ${new Date().toDateString()}`;
}

//Mostrar el resultado por consola.
devolverFecha('10','09','2022');

//funcion devolverFecha flecha
const devolverFecha = () => `Hoy es ${new Date().toDateString()}`;
