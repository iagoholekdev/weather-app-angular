import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  private _apiKey: string = '1a998820235dcfe94cafc1ff4610fe3d';

  constructor(private _httpClient: HttpClient) { }

  public getWeatherData(cidade: string): Observable<any> {
    return this._httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&mode=json&appid=${this._apiKey}`);
  }


}
