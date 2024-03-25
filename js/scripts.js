let pokemonList = [
  { name: 'Beedrill', weight: 125, types: ['bug ', 'poison '] },
  { name: 'Bulbasaur', weight: 240, types: ['grass ', 'poison '] },
  { name: 'Zebstrika', weight: 350, types: ['normal ', 'electric '] }
];
let text = '';
let i = 0;

for (; pokemonList[i];) {
  text = text + ' ' + pokemonList[i].name + ' ' + '(' + 'weight: ' + pokemonList[i].weight + ')';
  i++;
} console.log(text);
document.write(text);

