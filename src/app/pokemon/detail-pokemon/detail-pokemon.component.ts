import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.css'
})
export class DetailPokemonComponent implements OnInit{

  pokemon:Pokemon | undefined;
  pokemonList: Pokemon[] | undefined;

  // activatedRoute methode pour aller chercher dans url

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService

  ){}

  ngOnInit(): void {

  //  pokemonid va chercher id qui a ete mis dand le path de routing
   const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
// si il a trouver l'id il recherche le quel correspond pour le mettre dans pokemon
   if(pokemonId){
    this.pokemon = this.pokemonService.getPokemonById(+pokemonId)

   }


  }

  goToPokemonList(): void{
this.router.navigate(['/pokemons'])
  }

}
