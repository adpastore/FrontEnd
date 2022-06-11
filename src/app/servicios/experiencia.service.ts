import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiServerUrl='http://localhost:8080api/experiencia';

  constructor(private http: HttpClient) { }

  public getExperiencia():Observable<Experiencia[]>{
  return this.http.get<Experiencia[]>(`${this.apiServerUrl}/api/experiencia/all`);
  }
  public editarExperiencia(experiencia: Experiencia):Observable<Experiencia>{
  return this.http.put<Experiencia>(`${this.apiServerUrl}/api/experiencia/editar`, experiencia);
  }
  public addExperiencia(experiencia: Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(`${this.apiServerUrl}/api/experiencia/add`, experiencia);
    }
  public deleteExperiencia(experienciaId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/api/experiencia/delete/${experienciaId}`);
  }
}
export interface Experiencia{
  idExp:number;
  imagenExp:string;
  asigExp:string;
  lugarExp:string;
  nombreExp:string;
  descExp:string;
  fechaIniExp:Date;
  fechaFinExp:Date;
}
