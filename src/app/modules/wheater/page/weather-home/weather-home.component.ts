import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherServiceService } from '../../../../service/weather-service/weather-service.service';
import { Subject, takeUntil } from 'rxjs';
import { MessagerSwalService } from '../../../../shared/messager/messager-swal.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WeatherInterface } from '../../../../models/interfaces/weather.interface';

@Component({
  selector: 'app-weather-home',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './weather-home.component.html',
  styleUrl: './weather-home.component.scss',
  providers: [
    WeatherServiceService
  ]
})
export class WeatherHomeComponent implements OnDestroy, OnInit {

  private _unsubscribe$: Subject<void> = new Subject();
  private _cidadeInicial: string = 'São Paulo';
  public weatherInterface!: WeatherInterface;

  constructor(private _weatherService: WeatherServiceService,
              private _messagerSwal: MessagerSwalService) {

  }

  private _getWeatherCity(cidade: string) : void {
      this._weatherService.getWeatherData(cidade)
        .pipe(takeUntil(this._unsubscribe$))
        .subscribe({
          next: (response) => {
            if (response) this.weatherInterface = response;
            this._messagerSwal.showAlert('Olá', 'Requisição feita com sucesso!', 'success')
          },
          error: (err) =>  {
           this._messagerSwal.showAlert('Olá', 'Ocorreu um erro!', 'error')
          }

        }
      )
  }

  ngOnInit(): void {
    this._getWeatherCity(this._cidadeInicial);
  }

  ngOnDestroy(): void {
    this._unsubscribe$.complete();
  }

}
