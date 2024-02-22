import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessagerSwalService {

  constructor() { }

  showAlert(titulo: string, mensagem: string, tipo: string) {
    Swal.fire('Hello!', 'This is a SweetAlert message.', 'success');
  }
}
