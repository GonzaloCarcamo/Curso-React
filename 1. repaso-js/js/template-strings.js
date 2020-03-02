//Template strings

const nombre = 'Gonzalo Cárcamo'
const trabajo = 'Desarrollador WEB'

const contenedorAPP = document.querySelector('#app');

/*
let html = '<ul>' +
                '<li> nombre:' + nombre + '</li>' +
                '<li> trabajo:' + trabajo + '</li>' +
          '</ul>';

contenedorAPP.innerHTML = html;

*/

// Sintaxis con template-strings

let html = `

<li> nombre: ${nombre} </li>
<li> trabajo: ${trabajo} </li>

`;

contenedorAPP.innerHTML = html;
