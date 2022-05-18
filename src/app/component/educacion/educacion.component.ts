import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {

  public educaciones : Educacion[]=[];
  public editEducacion : Educacion | undefined;
  public deleteEducacion : Educacion | undefined;

  constructor(private educacionService : EducacionService) { }

  ngOnInit(): void {
    this.getEducacion();
  }

  public getEducacion():void{
    this.educacionService.getEducacion().subscribe({
      next:(Response: Educacion[])=>{
        this.educaciones=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }

    })
  }
  public onOpenModal(mode:string, educacion?: Educacion):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');
    if(mode==='add'){
      button.setAttribute('data-target','#addEducacionModal')
    }else if(mode==='delete'){
      button.setAttribute('data-target','#deleteEducacionModal')
      this.deleteEducacion=educacion;
    }else if(mode==='edit'){
      button.setAttribute('data-target','#editEducacionModal')
      this.editEducacion=educacion;
    }
    container?.appendChild(button);
    button.click();
  }
  public addEducacion(addForm: NgForm){
    document.getElementById('add-educacion-form')?.click();
    this.educacionService.addEducacion(addForm.value);
  }

}
export interface Educacion{
  idEdu:number;
  tituloEdu:string;
  descEdu:string;
  imagenEdu:string;
  fechaIniEdu:Date;
  fechaFinEdu:Date;
  sedeEdu:string;
}
