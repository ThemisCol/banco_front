import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SystemModel } from '../models/system.model';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SolicitudModel } from 'src/app/models/solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private system_id = "11HtpmlM9svYhZjWrE0a";

  private solicitudes: SolicitudModel[] = [];

  constructor(private _http: HttpClient) { }

  postSolicitud(solicitud){
    return this._http.post(`${environment.url}/api/solicitud/${solicitud.id}`,solicitud)
  }

  getSolicitudes(){
    if(this.solicitudes.length > 0){
      return of(this.solicitudes);
    }else{
      return this._http.get<SolicitudModel[]>(`${environment.url}/api/business/${this.system_id}/solicitud/`)
      .pipe(tap(solicitudes => this.solicitudes = solicitudes));
    }
  }

  postSystem(valor){
    console.log(valor)
    return this._http.post(`${environment.url}/api/systemUpdate/${this.system_id}`,valor)
  }
}
