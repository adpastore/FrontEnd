import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Autenticacionservice } from 'src/app/servicios/autenticacion.service';

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
    private rutas: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['adpastore@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6)]],
      deviceInfo:this.formBuilder.group({
        deviceId: ['17867868768'],
        deviceType: ['DEVICE_TYPE_ANDROID'],
        notificationToken: ['67657575eececc34'],
    })
  })

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
    this.autenticacionService.IniciarSesion(this.form.value).subscribe((data: any)=>{
        console.log('DATA:' + JSON.stringify(data));
        this.rutas.navigate(['/portfolio']);
      })
  }
}
