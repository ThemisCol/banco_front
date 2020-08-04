import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<SolicitudModel>;
  solicitudes: Observable<SolicitudModel[]>;

  constructor(private db: AngularFirestore, private _rest: RestService) { }

  ngOnInit(): void {
    this.itemsCollection = this.db.collection<SolicitudModel>('solicitudes');
    this.solicitudes = this.itemsCollection.valueChanges({idField: 'customIdName'});
  }

  cambio(solicitud){
    const solicitudTemp = {
      ...solicitud
    }
    solicitudTemp.id = solicitud.customIdName;
    delete solicitudTemp.customIdName;
    console.log(solicitudTemp)
    Swal.fire({
      title: 'Espere',
      icon: 'info',
      text: 'Guardando información',
      allowOutsideClick: false
    });
    Swal.showLoading();

    this._rest.postSolicitud(solicitudTemp).subscribe((res:any) =>{
      Swal.fire({
        title: 'Cambio de Estado Correcto',
        icon: 'success',
        text: res.message,
      });
      if(solicitudTemp.estado == 'APROBADO'){
        this._rest.postSystem(solicitudTemp.valor);
      }
    });

    
  }



}
