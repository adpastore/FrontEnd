import { Usuario } from './../../models/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 // public usuario : Usuario | undefined;
 // public aditUsuario : Usuario | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
