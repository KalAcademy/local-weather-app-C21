import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrentWeatherComponent } from "./current-weather/current-weather.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import { CitySearchComponent } from "./city-search/city-search.component";
import { WeatherService } from './weather.service';
import { ICurrentWeather } from './icurrent-weather';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CurrentWeatherComponent, MatToolbarModule, CitySearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'local-weather-app';
  currentWeather: ICurrentWeather = {
    city: '',
    country: '',
    date: new Date(),
    image: '',
    temperature: 0,
    description: ''
  }

  constructor(private weatherService: WeatherService){}
  doSearch(searchValue: string){
    const userInput = searchValue.split(',')
    .map(s => s.trim() )
    this.weatherService.getCurrentWeather(userInput[0], userInput[1]??undefined).subscribe(data => this.currentWeather = data)
  }
}
