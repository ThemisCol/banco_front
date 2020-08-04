import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitd-credito',
  templateUrl: './solicitd-credito.component.html',
  styleUrls: ['./solicitd-credito.component.scss']
})
export class SolicitdCreditoComponent implements OnInit {

  paso = 0;
  solicitud = {
    id: '',
    nombre: '',
    correo: '',
    cedula: '',
    valor: '',
    fecha_pago: '',
    estado: '',
    estado_credito: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
