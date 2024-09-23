import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { CarDetailsComponent } from './car-details/car-details.component';

const routes: Routes = [
	{ path: '', redirectTo: '/cars', pathMatch: 'full' },
	{ path: 'cars', component: CarComponent },
	{ path: 'car/:id', component: CarDetailsComponent },
	{ path: '**', redirectTo: '/cars' },
];



@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
