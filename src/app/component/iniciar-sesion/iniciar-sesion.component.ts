import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Autenticacionservice } from '../../servicios/autenticacion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
})
export class IniciarSesionComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private autenticacionService: Autenticacionservice,
    private ruta: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  get Email() {
    return this.form.get('adpastore@gmail.com');
  }

  get Password() {
    return this.form.get('123456');
  }

  onEnviar(event: Event) {
    event.preventDefault;
    this.autenticacionService
      .IniciarSesion(this.form.value)
      .subscribe((data) => {
        console.log('Datos informados:' + JSON.stringify(data));
        this.ruta.navigate(['/portfolio']);
      });
  }
}
