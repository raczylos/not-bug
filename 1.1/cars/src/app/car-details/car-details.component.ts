import { Component, OnInit } from '@angular/core';
import { Car } from '../car/car';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';

@Component({
	selector: 'app-car-details',
	templateUrl: './car-details.component.html',
	styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

	constructor(
		private route: ActivatedRoute,
		private carService: CarService
	) { }

	car: Car | null = null;

	ngOnInit(): void {
		this.route.paramMap.subscribe(params => {
			const carId = params.get('id') || "";
			this.car = this.carService.getCar(carId);
		  });

	}

}
