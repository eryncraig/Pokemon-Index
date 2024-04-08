// starting setup of controlled global variables/controlled state; uses IIFE
let pokemonRepository = (function () {
  //adding API data/connecting to it
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //function to add new pokemon to the list 
  function add(pokemon) {

    //conditional to check if pokemon being added is formatted correctly/doesn't include extraneous code
    // temporarily removed from conditional: '&& 'height' in pokemon && 'types' in pokemon'
    if (typeof pokemon === "object" && 'name' in pokemon) {
      pokemonList.push(pokemon);
      console.log(pokemon);
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
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

  //function to allow return of array outside of IIFE but so array is not directly accessible or editable
  function getAll() {
    return pokemonList;
  }

  function loadList() {
    showLoadingMessage();

    return fetch(apiUrl).then(function (response) {
      hideLoadingMessage();
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      hideLoadingMessage();
      console.error(e);
    });
  }

  // accesses api information for each pokemon once load list has completed and once a button is clicked; may edit loading message for buttons specifically
  function loadDetails(item) {
    showLoadingMessage();
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      hideLoadingMessage();
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      hideLoadingMessage();
      console.error(e);
    });
  }

  // function to show 'loading' while api is connecting (currently very fast, barely see this)
  function showLoadingMessage() {
    let message = document.createElement('li')
    let pokeUL = document.querySelector('.pokemon-list');

    message.classList.add('loading-message');
    message.innerText = 'Loading...';

    pokeUL.appendChild(message);
  }

  // hides 'loading' once API is connected
  function hideLoadingMessage() {
    let message = document.querySelector('.loading-message');

    if (message) {
      message.parentElement.removeChild(message);
    } else {
      console.log('loading message still showing')
    };
  };

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  }
})();
//end of IIFE for now


//Combination of intended functions to return application and interactivity
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});


