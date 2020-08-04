import { Component, OnInit, Input } from '@angular/core';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { NgForm } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  @Input() solicitud : SolicitudModel;

  constructor(private _rest : RestService, private _router: Router) {
   }

  ngOnInit(): void {
  }

  guardar(form: NgForm){
    if(form.invalid){
      return
    }
    this.solicitud.id = 'new';
    this.solicitud.estado_credito = "PENDIENTE";
    this.solicitud.estado = 'PENDIENTE';

    Swal.fire({
      title: 'Espere',
      icon: 'info',
      text: 'Guardando información',
      allowOutsideClick: false
    });
    Swal.showLoading();

    this._rest.postSolicitud(this.solicitud).subscribe((res:any) =>{
      Swal.fire({
        title: res.nombre,
        icon: 'success',
        text: res.message,
      });
      this._router.navigateByUrl('/admin/query');
    })
  

  }
  
}
