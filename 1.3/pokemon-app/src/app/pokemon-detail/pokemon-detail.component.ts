import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
	selector: 'app-pokemon-detail',
	templateUrl: './pokemon-detail.component.html',
	styleUrls: ['./pokemon-detail.component.css'],

})
export class PokemonDetailComponent implements OnInit {

	pokemon: any = null;
	isLoading = true;
	isImageLoading = true;
	imagesLoaded = 0;


	constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe(params => {
			const pokemonName = params.get('name') || "";
			console.log("pokemonName", pokemonName)
			this.pokemonService.getPokemonByName(pokemonName).subscribe((data: any) => {
				if(data){
					this.pokemon = data;
					this.isLoading = false;
				}
			});

		  });
	}

	onImageLoad(): void {
		this.imagesLoaded++;
		if(this.imagesLoaded === 2){
			this.isImageLoading = false;
		}
	}
}
