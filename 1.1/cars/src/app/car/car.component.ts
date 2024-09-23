import { CarService } from './../car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-car',
	templateUrl: './car.component.html',
	styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  	constructor(private carService: CarService) { }



	carForm = new FormGroup({
		id: new FormControl(''),
		brand: new FormControl('', Validators.required),
		model: new FormControl('', Validators.required),
		year: new FormControl('', Validators.required),
		details: new FormGroup({
		part: new FormControl('', Validators.required),
		cost: new FormControl('', Validators.required),
		})
	})

  	cars: Car[] = [];


	ngOnInit(): void {
		this.cars = this.carService.getCars();
	}

	onCarSubmit(): void {
		if (this.carForm.valid) {
			const newCar =  {...this.carForm.value}
			newCar.id = crypto.randomUUID();

			this.carService.createCar(newCar as Car);
			this.cars = this.carService.getCars();
		} else {
			console.log('Form is invalid');
		}
	}

}
