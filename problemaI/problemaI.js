/* Problema I (25 puntos)
A continuación se muestra una manera desordenada y poco
eficiente de crear usuarios.
let nombre;
let apellido;
let email;
let direccion = {
    municipio: ,
    calle: ,
    numero: ,
};

Además de estos usuarios, crea al usuario2, al usuario3, al usuario4, al
usuario5, con las mismas características que se muestran en la figura
inmediatamente anterior. ¿Puedes mostrar estas características de los
usuarios de manera ordenada y coherente en consola? ¿Tienen los
usuarios alguna funcionalidad, pueden hacer algo? */

//Creacion de la funcion createUser con los diferentes atributos que anidara
function createUser (){
    const nombre = prompt("Ingrese el nombre");
    const apellido = prompt("Ingrese el apellido");
    const email = prompt("Ingrese el email");
    const municipio = prompt("Ingrese el municipio");
    const calle = prompt("Ingrese la calle");
    const numero = prompt("Ingrese el numero de calle");

    /*creacion de la constante user dentro de la funcion createUser
    la cual almacenara todos los datos recibidos en la funcion createUser*/
    const user = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        direccion: {
            municipio: municipio,
            calle: calle,
            numero: numero,
        }
    };

    //la funcion retornara el user con todos sus atributos
    return user;
}

//esta funcion mostrara la informacion recopilada de los usuarios
function mostrarUsuario(usuario) {
    console.log(`Nombre: ${usuario.nombre}`);
    console.log(`Apellido: ${usuario.apellido}`);
    console.log(`Email: ${usuario.email}`);
    console.log(`Direccion: ${usuario.direccion.municipio}, ${usuario.direccion.calle}, ${usuario.direccion.numero}`);
}

document.addEventListener('DOMContentLoaded', () => {
    const usuarios = [];
    const numeroDeUsuarios = 6;

    //for bucle para recopilar la cantidad de usuarios establecidos
    for (let i =0; i < numeroDeUsuarios; i++) {
        const nuevoUsuario = createUser();
        //instruccion para ir mostrando cada usuario que vaya siendo creado en el bucle
        usuarios.push(nuevoUsuario);
        console.log(`Usuario ${i+1}:`);
        mostrarUsuario(nuevoUsuario);
        console.log('---'); 

    }

    //titulo del resumen final de los 6 usuarios
    console.log("Este es el resumen final de todos los usuarios ingresados:");

    //instruccion para detallar el resumen de los 6 usuarios al finalizar el bucle
    usuarios.forEach((usuario, index) => {
        console.log(`Usuario ${index + 1}:`);
        mostrarUsuario(usuario);
        console.log('---');
    });
});
