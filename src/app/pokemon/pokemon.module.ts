import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { Route, Router, RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';


const pokemonroutes: Routes = [
  {path: "pokemons", component:ListPokemonComponent},
  {path: "pokemon/:id", component:DetailPokemonComponent},

];



@NgModule({
  declarations: [
ListPokemonComponent,
DetailPokemonComponent,
BorderCardDirective,
PokemonTypeColorPipe,
PokemonFormComponent,
EditPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonroutes)
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
