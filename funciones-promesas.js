//# Trabajando con Promesas
//> 1. Transformar todas las funciones declarativas en funciones flecha.
//> 2. Iplementar los métodos .then y .catch necesarios para manejar las respuestas exitosas y/o los errores al invocar las funciones.
//> 3. Simplificar el código de las funciones.
//> 4. Transformar la función **funcionCuatro()** en una función asíncrona con la palabra reservada __async__ e implementarla junto con **await**.


//Promesa almacenada en una constante
// const promesa = new Promise((resolve, reject)=>{

//     if( 10 === 11){
//             resolve('Los valores son iguales');
//     } else {
//             reject('Los valores son distintos')
//     }

// });

// promesa

const promesa = new Promise((resolve, reject) => ( 10 === 11)
    ? resolve('Los valores son iguales')
    : reject('Los valores son distintos'))

promesa
.then(respuesta => console.log(respuesta))
.catch(err => console.log(err))




//Promesa dentro en una función.
// function promesaDos(provincia){

//     const promesa = new Promise( (resolve, reject)=> {
        
//         if('Formosa' === provincia){
//             resolve('Usted está ubicado en Formosa');
//         } else {
//             reject('Error al realizar la consulta')
//         }

//     });

//     return promesa;
// }

// promesaDos()

const promesaDos = provincia => new Promise ((resolve, reject) => ('Formosa' === provincia)
    ? resolve('Usted está ubicado en Formosa')
    : reject('Error al realizar la consulta'))

promesaDos
.then(respuesta => console.log(respuesta))
.catch(err => console.log(err))




// function promesaTres(valorBooleano){

//     new Promise( ()=> {
//         ( true === valorBooleano )
//         ? resolve('Los valores son iguales')
//         : reject('Los valores son distintos')
//     })
    
// }

// promesaTres()
        

const promesaTres = valorBooleano => new Promise((resolve, reject) => (true === valorBooleano)
    ? resolve('Los valores son iguales')
    : reject('Los valores son distintos'))

promesaTres
.then(respuesta => console.log(respuesta))
.catch(err => console.log(err))




// function promesaCuatro(){

//     new Promise( ()=> {
//         ( true === arguments )
//         ? resolve('Los valores son iguales')
//         : reject('Los valores son distintos')
//     })
    
// }

// promesaCuatro()

const promesaCuatro = async(arguments) => (( true === arguments )
    ?('Los valores son iguales')
    :('Los valores son distintos'))

promesaCuatro()
.then(resp => console.log(resp))
.catch(err => console.log(err))
