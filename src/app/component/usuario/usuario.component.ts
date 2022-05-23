import { Usuario, UsuarioService } from 'src/app/servicios/usuario.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public usuarios: Usuario[] = [];
  public usuario : Usuario | undefined;
  public editUsuario : Usuario | undefined;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuario();
  }
  public getUsuario():void{
    this.usuarioService.getUsuario().subscribe({
    next: (response: Usuario) =>{
      this.usuario=response;
    },
    error:(error:HttpErrorResponse)=>{
    alert(error.message);
    }
  })
  }
}
