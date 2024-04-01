// starting setup of controlled global variables
let pokemonRepository = (function () {
  let pokemonList = [];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    getAll: getAll,
    add: add
  }
})();

//different style of 'for' loop with conditionals inside to print different things based on pokemon weight. Originally had a shorthand 'for' loop version but preferred conditions be set this way for scaling; UPDATE 3/27 - turned loop into function for re-use
function printArrayDetails(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].weight > 100 && list[i].weight < 200) {
      console.log('medium');
      document.write('<div>' + list[i].name + ' (weight: ' + list[i].weight + ') It\'s a medium pokemon.</div>')
    } else if (list[i].weight < 100) {
      console.log('small');
      document.write('<div>' + list[i].name + ' (weight: ' + list[i].weight + ') That pokemon is so small! </div> ')
    } else {
      console.log('big');
      document.write('<div>' + list[i].name + ' (weight: ' + list[i].weight + ') Wow! That\'s a big pokemon!</div>')
    }
  }
}

printArrayDetails(pokemonList);

function dividing(dividend, divisor) {
  if (divisor === 0) {
    return 'You are trying to divide by 0.'
  } else {
    let result = dividend / divisor;
    return result
  }
}

console.log(dividing(4, 2));
console.log(dividing(7, 0));
console.log(dividing(1, 4));
console.log(dividing(12, -3));