import { Usuario } from '../models/usuario';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SobremiService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUser():Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiServerUrl}/usuario/id/1`);
  }
  public editarEUsuario(usuario: Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(`${this.apiServerUrl}/usuario/editar`, usuario);
    }
  public updateUsuario(usuario: Usuario):Observable<Usuario>{
  return this.http.put<Usuario>(`${this.apiServerUrl}/usuario/update`, usuario);
  }
}
