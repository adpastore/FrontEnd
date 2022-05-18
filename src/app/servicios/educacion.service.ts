import { Educacion } from './../component/educacion/educacion.component';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getEducacion():Observable<Educacion[]>{
  return this.http.get<Educacion[]>(`${this.apiServerUrl}/educacion/all`);
  }
  public editarEducacion(educacion: Educacion):Observable<Educacion>{
  return this.http.put<Educacion>(`${this.apiServerUrl}/educacion/editar`, educacion);
  }

  public deleteEducacion(educacionId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/educacion/deldete/${educacionId}`);
  }
}

