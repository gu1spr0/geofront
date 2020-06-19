import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfiguracionService } from './configuracion.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  public url: string;
  constructor(public http: HttpClient, private configuracion: ConfiguracionService) {
    this.url = configuracion.ServerWithApiUrl;
  }
  getPersonasTodos(): Observable<any> {
    return this.http.get(this.url + 'persona');
  }
}
