import { Usuario } from './usuario.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private apiServerUrl ='https://app-backend-adp.herokuapp.com';

  constructor(private http: HttpClient) {}

  public getUser(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiServerUrl}/api/usuario`);
  }
  public updateUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(
      `${this.apiServerUrl}/api/usuario/update`,
      usuario
    );
  }
}
