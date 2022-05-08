import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

/**
 * Un composant web = une classe + une vue
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS
  pokemonSelected: Pokemon|undefined; 

  ngOnInit() {
    console.table(this.pokemonList)
  }

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)

    if(pokemon){
      console.log(`Vous avez demandé le pokémon ${pokemon.name}`)
      this.pokemonSelected = pokemon
    } else {
      console.log(`Vous avez demandé un pokémon qui n'existe pas`)
      this.pokemonSelected = pokemon
    }
  }
}