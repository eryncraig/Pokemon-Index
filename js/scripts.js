//placeholder array until API is connected, using to test functionality
let pokemonList = [
  { name: 'Beedrill', weight: 125, types: ['bug ', 'poison '] },
  { name: 'Bulbasaur', weight: 240, types: ['grass ', 'poison '] },
  { name: 'Zebstrika', weight: 350, types: ['normal ', 'electric '] }
];

//different style of 'for' loop with conditionals inside to print different things based on pokemon weight. Originally had a shorthand 'for' loop version but preferred conditions be set this way for scaling
for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].weight > 100 && pokemonList[i].weight < 200) {
    console.log('medium');
    document.write('<div>' + pokemonList[i].name + ' (weight: ' + pokemonList[i].weight + ') It\'s a medium pokemon.</div>')
  } else if (pokemonList[i].weight < 100) {
    console.log('small');
    document.write('<div>' + pokemonList[i].name + ' (weight: ' + pokemonList[i].weight + ') That pokemon is so small! </div> ')
  } else {
    console.log('big');
    document.write('<div>' + pokemonList[i].name + ' (weight: ' + pokemonList[i].weight + ') Wow! That\'s a big pokemon!</div>')
  }
}
