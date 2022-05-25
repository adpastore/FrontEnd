import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUsuario(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiServerUrl}/usuario/id/1`);
  }
  public editarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiServerUrl}/usuario/editar`, usuario);
  }
  public addUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiServerUrl}/usuario/add`, usuario);
  }
  public updateUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiServerUrl}/usuario/update`, usuario);
  }
  public deleteUsuario(usuarioId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/usuario/delete/${usuarioId}`);
  }
}

export interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  titulo: string;
  fotoPerfil: string;
  acerca: string;
  acercas: string;
  acercas2: string;
  telefono: string;
  mail: string;
  facebook: string;
  github: string;
  instagram: string;
  imagen: string;
}
