import { SobremiService } from './../../servicios/sobremi.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../models/usuario';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  public usuario : Usuario | undefined;
  public editUsuario : Usuario | undefined;

  constructor(private sobremiService : SobremiService) { }

  ngOnInit(): void {
    this.getUser();
  }
  public getUser():void{
    this.sobremiService.getUser().subscribe({
    next: (response: Usuario) =>{
      this.usuario=response;
    },
    error:(error:HttpErrorResponse)=>{
    alert(error.message);
    }
  })
  }

}
