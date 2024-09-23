import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgOptimizedImage } from '@angular/common'

@NgModule({
	declarations: [AppComponent, PokemonListComponent, PokemonDetailComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		MatCardModule,
		MatProgressSpinnerModule,
		MatListModule,
		MatPaginatorModule,
		NgOptimizedImage
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
