import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { Router } from '@angular/router';

@Component({
	selector: 'app-pokemon-list',
	templateUrl: './pokemon-list.component.html',
	styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
	pokemonList: any[] = [];

	constructor(
		private pokemonService: PokemonService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.getPokemonList();
	}

	getPokemonList() {
		this.pokemonService.getPokemonList().subscribe((data: any) => {
			this.pokemonList = data.results;
		});
	}

	onPokemonSelect(pokemon: any) {
		this.router.navigate(['/pokemon', pokemon.name], {
			state: { pokemon },
		});
	}
}
