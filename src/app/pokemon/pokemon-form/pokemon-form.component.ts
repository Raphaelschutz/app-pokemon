import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.css'
})
export class PokemonFormComponent implements OnInit {


  // La propriété pokemon sera reçue en tant qu'entrée (input) depuis un composant parent
  @Input() pokemon: Pokemon | undefined;

  // La liste des types disponibles pour les Pokémon (eau, feu, etc.)
  types: string[] | undefined;

  // Injection du service PokemonService pour accéder aux méthodes liées aux Pokémon
  // Injection du service Router pour permettre la navigation dans l'application
  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) {}

  // Méthode d'initialisation appelée automatiquement lors de l'initialisation du composant
  ngOnInit(): void {
    // Récupère la liste des types de Pokémon via le service et l'affecte à la propriété types
    this.types = this.pokemonService.getPokemonTypeListe();
  }

  // Vérifie si le Pokémon actuel possède un certain type
  hasType(type: string): boolean | undefined {
    // Utilise l'opérateur `?.` pour s'assurer que l'accès à pokemon et à ses types est sécurisé
    // Retourne true si le type est trouvé dans la liste des types du Pokémon
    return this.pokemon?.types?.includes(type);
  }

  // Gère la sélection ou la désélection d'un type de Pokémon
  selectType($event: Event, type: string): void {
    // Vérifie si la case à cocher pour ce type est sélectionnée ou non
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if (isChecked) {
      // Si sélectionné, ajoute le type à la liste des types du Pokémon
      this.pokemon?.types?.push(type);
    } else {
      // Si désélectionné, trouve l'index du type à supprimer dans la liste
      const index = this.pokemon?.types?.indexOf(type);
      if (index !== undefined && index > -1) {
        // Supprime le type de la liste des types du Pokémon si l'index est valide
        this.pokemon?.types?.splice(index, 1);
      }
    }
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon?.types?.length === 1 && this.hasType(type) && this.pokemon?.types?.length >= 2 && !this.hasType(type)) {
      return false;
    }

    return true;
  }





  // Méthode appelée lors de la soumission du formulaire
  onSubmit(): void {
    console.log('submit form !'); // Affiche un message dans la console pour indiquer que le formulaire a été soumis

    // Vérifie si le Pokémon et son ID sont définis
    if (this.pokemon && this.pokemon.id) {
      // Si oui, navigue vers une autre route en passant l'ID du Pokémon dans l'URL
      this.router.navigate(['/path', this.pokemon.id]);
    } else {
      // Si non, affiche un message d'erreur dans la console
      console.error('Pokemon or Pokemon ID is undefined');
    }
  }
}
