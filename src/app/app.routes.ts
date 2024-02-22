import { WeatherHomeComponent } from './modules/wheater/page/weather-home/weather-home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
{
  path: '',
  redirectTo: 'weather',
  pathMatch: 'full'
},
{
  path: 'weather',
  component: WeatherHomeComponent
}

];
