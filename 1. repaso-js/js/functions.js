// Function declaration: en este caso, da lo mismo en que parte del código estén declaradas
//las funciones

function saludar(nombre) {
  console.log('bienvenido' + nombre);

}

saludar('juan')

//function expression: el orden de la declaración de función si es relevante.

const cliente = function(nombreCliente){
  console.log('mostrando datos del cliente ' + nombreCliente);
}
cliente('juan')
