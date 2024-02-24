import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherServiceService } from '../../../../service/weather-service/weather-service.service';
import { Subject, takeUntil } from 'rxjs';
import { MessagerSwalService } from '../../../../shared/messager/messager-swal.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WeatherInterface } from '../../../../models/interfaces/weather.interface';
import { DatePipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WeatherModalContentComponent } from '../../modals/weather-modal-content/weather-modal-content.component';

@Component({
  selector: 'app-weather-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './weather-home.component.html',
  styleUrl: './weather-home.component.scss',
  providers: [
    WeatherServiceService
  ]
})
export class WeatherHomeComponent implements OnDestroy, OnInit {

  private _unsubscribe$: Subject<void> = new Subject();
  public cidadeInicial: string = '';
  public weatherInterface!: WeatherInterface;

  constructor(private _weatherService: WeatherServiceService,
              private _messagerSwal: MessagerSwalService,
              private modalService: NgbModal ) {

  }

  public getWeatherCity() : void {
      this._weatherService.getWeatherData(this.cidadeInicial)
        .pipe(takeUntil(this._unsubscribe$))
        .subscribe({
          next: (response) => {
            this._messagerSwal.showAlert('Olá', 'Requisição feita com sucesso!', 'success')
            if (response) {
              this.weatherInterface = response
              this.openWeatherModal();
            };

          },
          error: (err) =>  {
           this._messagerSwal.showAlert('Olá', 'Ocorreu um erro!', 'error')
          }

        }
      )
  }


  openWeatherModal() {
    const modalRef = this.modalService.open(WeatherModalContentComponent, { size: 'lg' });
    modalRef.componentInstance.weatherData = this.weatherInterface;
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this._unsubscribe$.complete();
  }

}
