// starting setup of controlled global variables/controlled state; uses IIFE
let pokemonRepository = (function () {
  //temporary placeholder array until app is connected to API and database
  let pokemonList = [
    { name: 'Beedrill', weight: 125, types: ['bug ', 'poison '] },
    { name: 'Bulbasaur', weight: 240, types: ['grass ', 'poison '] },
    { name: 'Zebstrika', weight: 350, types: ['normal ', 'electric '] },
  ];

  //function to add new pokemon to the list - currently only in testing
  function add(pokemon) {
    let expectedTraits = ['name', 'weight', 'types'];
    let actualTraits = Object.keys(pokemon);

    //making sure object.keys is getting the correct keys
    console.log(Object.keys(pokemon));

    //conidtional to check if pokemon being added is formatted correctly/doesn't include extraneous code
    if (typeof pokemon === "object" && actualTraits.every(key => expectedTraits.includes(key))) {
      pokemonList.push(pokemon);
    } else if (typeof pokemon !== "object") {
      console.log('You are trying to add a non-pokemon! Check your formatting.')
    }
  }
  //end of add function

  //created function that adds ul and li elements and allows styling for each iterated item
  function addListItem(pokemon) {
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    let pokeUL = document.querySelector('.pokemon-list');

    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');

    listItem.appendChild(button);
    pokeUL.appendChild(listItem);

    buttonListener(button, pokemon);
  }
  //end of addListItem function


  //created event handler function outside of IIFE for re-use or re-organization later if needed
  function buttonListener(button, pokemon) {
    button.addEventListener('click', function (event) {
      //double-checking event is listened to
      console.log(event);
      showDetails(pokemon);
    });
  }

  //start of function to return pokemon details, simply logging them to console for now
  function showDetails(pokemon) {
    console.log(pokemon)
  }

  //function to allow return of array outside of IIFE but so array is not directly accessible or editable
  function getAll() {
    return pokemonList;
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  }
})();
//end of IIFE for now


//testing add function
pokemonRepository.add(
  {
    name: 'Pidgeot',
    weight: 70,
    types: ['normal', 'flying']
  }
);


//updated loop to a forEach loop instead of an old 'for' loop - console logging is for debugging for now
function printArrayDetails() {
  let pokemonDex = pokemonRepository.getAll();

  pokemonDex.forEach(function (list) {
    pokemonRepository.addListItem(list);

    if (list.weight > 100 && list.weight < 200) {
      console.log('medium');
    } else if (list.weight < 100) {
      console.log('small');
    } else {
      console.log('big');
    }
  })
}

//only current output/display/html elements on ui, no interactive function yet
printArrayDetails();

