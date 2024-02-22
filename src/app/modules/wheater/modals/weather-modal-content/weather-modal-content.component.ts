import { Component, Input, OnInit } from '@angular/core';
import { WeatherInterface } from '../../../../models/interfaces/weather.interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-modal-content',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather-modal-content.component.html',
  styleUrls: ['./weather-modal-content.component.scss'],
})
export class WeatherModalContentComponent implements OnInit {
  @Input() weatherData!: WeatherInterface;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {

  }

  closeModal() {
    this.activeModal.dismiss();
  }

  formatTimestamp(timestamp: number): Date {
    return new Date(timestamp * 1000);
  }
}
