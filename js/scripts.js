// starting setup of controlled global variables/controlled state; uses IIFE
let pokemonRepository = (function () {
  let pokemonList = [
    { name: 'Beedrill', weight: 125, types: ['bug ', 'poison '] },
    { name: 'Bulbasaur', weight: 240, types: ['grass ', 'poison '] },
    { name: 'Zebstrika', weight: 350, types: ['normal ', 'electric '] },
  ];

  function add(pokemon) {
    let expectedTraits = ['name', 'weight', 'types'];
    let actualTraits = Object.keys(pokemon);
    console.log(Object.keys(pokemon));

    if (typeof pokemon === "object" && actualTraits.every(key => expectedTraits.includes(key))) {
      pokemonList.push(pokemon);
    } else if (typeof pokemon !== "object") {
      console.log('You are trying to add a non-pokemon! Check your formatting.')
    }
  }

  function getAll() {
    return pokemonList;
  }

  return {
    getAll: getAll,
    add: add
  }
})();
//end of IIFE for now


//testing function
pokemonRepository.add(
  {
    name: 'Pidgeot',
    weight: 70,
    types: ['normal', 'flying']
  }
);


//updated loop to a forEach loop instead of an old 'for' loop
function printArrayDetails() {
  let pokemonDex = pokemonRepository.getAll();

  pokemonDex.forEach(function (list) {
    if (list.weight > 100 && list.weight < 200) {
      console.log('medium');
      document.write('<div>' + list.name + ' (weight: ' + list.weight + ') It\'s a medium pokemon.</div>')
    } else if (list.weight < 100) {
      console.log('small');
      document.write('<div>' + list.name + ' (weight: ' + list.weight + ') That pokemon is so small! </div> ')
    } else {
      console.log('big');
      document.write('<div>' + list.name + ' (weight: ' + list.weight + ') Wow! That\'s a big pokemon!</div>')
    }
  })
}

//only current output/display/html elements on ui, no interactive function yet
printArrayDetails();

