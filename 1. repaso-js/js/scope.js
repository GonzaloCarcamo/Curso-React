// scope: en qué parte del programa una variable está disponible.

/*
var musica = 'rock';

if (musica) {

  var musica = 'grunge';
  console.log('dentro del if:', musica);
}

  console.log ('fuera del if', musica)

*/

//...con let. También funciona con const

let musica = 'rock';

if (musica) {

  let musica = 'grunge';
  console.log('dentro del if:', musica);
}

  console.log ('fuera del if', musica);
