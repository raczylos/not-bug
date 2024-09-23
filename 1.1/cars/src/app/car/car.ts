import { CarDetails } from "./car-details";

export interface Car {
	id: string;
	brand: string;
	model: string;
	year: string;
	details: CarDetails;
}
