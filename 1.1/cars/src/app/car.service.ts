import { Injectable } from '@angular/core';
import { Car } from './car/car';

@Injectable({
  	providedIn: 'root'
})
export class CarService {

	constructor() { }

	getCars(): Car[] {
		const cars = localStorage.getItem('cars')
		return cars ? JSON.parse(cars) : [];
	}

	getCar(carId: string): Car | null {
		const cars = this.getCars();
		if(cars){
			const car = cars.find(car => car.id === carId)
			return car || null;
		}
		return null;
	}

	createCar(car: Car) {
		const existingCars = this.getCars();
		existingCars.push(car);
		localStorage.setItem('cars', JSON.stringify(existingCars));
	}

	updateCar(car: Car) {
		const existingCars = this.getCars();
		existingCars.push(car);
		localStorage.setItem('cars', JSON.stringify(existingCars));
	}

}
