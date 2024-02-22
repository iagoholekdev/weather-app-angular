import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessagerSwalService {

  constructor() { }

  showAlert(titulo: string, mensagem: string,  tipo: SweetAlertIcon | undefined) {
    Swal.fire(titulo, mensagem, tipo);
  }
}
