import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Injectable()
export class PokemonService {

 getPokemonList(): Pokemon[]{
  return POKEMONS
 }
 getPokemonById(PokemonId: number): Pokemon | undefined{

return POKEMONS.find(pokemon => pokemon.id == PokemonId)

 }

 getPokemonTypeListe(): string[]{
  return ['Plante',
     'Feu',
     'Eau',
     'Insecte',
      'Normal',
      'Electrik',
      'Poisson',
      'Fée',
      'Vol',
      'Combat',
      'Psy']
 }

}
