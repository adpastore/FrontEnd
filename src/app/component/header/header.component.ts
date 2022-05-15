import { HttpErrorResponse } from '@angular/common/http';
import { HeaderService } from './../../servicios/header.service';
import { Usuario } from './../../models/usuario';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public usuario : Usuario | undefined;
  public aditUsuario : Usuario | undefined;

  constructor(private headerService : HeaderService) { }

  ngOnInit(): void {
    this.getUser();
  }
  public getUser():void{
    this.headerService.getUser().subscribe({
    next: (response: Usuario) =>{
      this.usuario=response;
    },
    error:(error:HttpErrorResponse)=>{
    alert(error.message);
    }
  })
  }
}
