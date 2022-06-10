import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})

export class PorfolioService {
  url:string="http://npinti.ddns.net:9088/api/";
  constructor(private http:HttpClient) {}

obtenerDatos():Observable<any>
{
  return this.http.get<any>(this.url+"persona");
  }
}
