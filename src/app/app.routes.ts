import { Routes } from '@angular/router';
import { CityComponent } from './city/city.component';
import { HomeComponent } from './home/home.component';
import { ResturantComponent } from './resturant/resturant.component';
import { AllResturantComponent } from './all-resturant/all-resturant.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    // {path:"admin", component:AdminComponent},
    {path:"city", component:CityComponent},
    {path:"all-resturants", component:AllResturantComponent},
    {path:"resturant", component:ResturantComponent},
];

