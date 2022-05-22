import { UsuarioService } from '../../servicios/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class UsuarioComponent implements OnInit {
  public usuarios: Usuario[] = [];
  public usuario : Usuario | undefined;
  public editarUsuario : Usuario | undefined;

  constructor(private UsuarioService : UsuarioService) { }

  ngOnInit(): void {

  }



}
