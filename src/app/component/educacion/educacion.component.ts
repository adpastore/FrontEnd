import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
export interface Educacion{
  idEdu:number;
  tituloEdu:string;
  descEdu:string;
  imagenEdu:string;
  fechaIniEdu:Date;
  fechaFinEdu:Date;
}
