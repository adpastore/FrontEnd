import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PorfolioService {
  url: string = 'https://app-backend-adp.herokuapp.com/api/portfolio';
  constructor(private http: HttpClient) {}

  obtenerDatos(): Observable<any> {
    return this.http.get<any>(this.url + 'usuario');
  }
}
