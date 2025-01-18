import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrentWeatherComponent } from "./current-weather/current-weather.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import { CitySearchComponent } from "./city-search/city-search.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CurrentWeatherComponent, MatToolbarModule, CitySearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'local-weather-app';
}
