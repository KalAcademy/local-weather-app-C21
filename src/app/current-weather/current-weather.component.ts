import { Component, Input } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-current-weather',
  imports: [DatePipe, DecimalPipe, CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.css'
})
export class CurrentWeatherComponent {
  @Input() current: ICurrentWeather = {
    city: '',
    country: '',
    date: new Date(),
    image: '',
    temperature: 0,
    description: ''
  }
}
