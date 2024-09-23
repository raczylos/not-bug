import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CarDetailsComponent } from './car-details/car-details.component';

@NgModule({
	declarations: [
		AppComponent,
		CarComponent,
  CarDetailsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
