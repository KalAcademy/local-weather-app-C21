import { Component } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';

@Component({
  selector: 'app-current-weather',
  imports: [],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.css'
})
export class CurrentWeatherComponent {
  current: ICurrentWeather = {
    city: 'Redmond',
    country: 'US',
    date: new Date(),
    image: '',
    temperature: 41,
    description: 'Mostly cloudy'
  }
}
