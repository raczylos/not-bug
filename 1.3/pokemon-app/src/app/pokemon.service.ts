import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class PokemonService {
	constructor(private http: HttpClient) {}

	private apiUrl: string = 'https://pokeapi.co/api/v2/pokemon/';

	getPokemonList() {

		return this.http.get(this.apiUrl);
	}

	getPokemonByName(name: string) {
		return this.http.get(`${this.apiUrl}${name}`);
	}

	getPokemonByUrl(url: string) {
		return this.http.get(url)
	}
}
