import { Educacion } from './../component/educacion/educacion.component';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getEducacion():Observable<Educacion[]>{
  return this.http.get<Educacion[]>(`${this.apiServerUrl}/educacion/all`);
  }
public updateEducacion(educacion: Educacion):Observable<Educacion>{
  return this.http.post<Educacion>(`${this.apiServerUrl}/educacion/add`, educacion);
}
}
