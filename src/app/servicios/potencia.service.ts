import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PotenciaService {
  private apiServerUrl = 'https://app-backend-adp.herokuapp.com/api/potencias';

  constructor(private http: HttpClient) {}

  public getPotencia(): Observable<Potencias[]> {
    return this.http.get<Potencias[]>(this.apiServerUrl);
  }
  public editarPotencia(potencias: Potencias): Observable<Potencias> {
    return this.http.put<Potencias>(this.apiServerUrl, potencias);
  }
  public addPotencia(potencias: Potencias): Observable<Potencias> {
    return this.http.post<Potencias>(this.apiServerUrl, potencias);
  }
  public deletePotencia(potenciaId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${potenciaId}`);
  }
}
export interface Potencias {
  idPot: number;
  potencias: string;
  valor: number;
}
