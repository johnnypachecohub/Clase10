import { AutenticacionService } from './../../seguridad/autenticacion.service';
import { Component, OnInit } from '@angular/core';
import { IUsuario } from 'app/nucleo/interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
	email: string
	password: string

	usuarioLogueado: IUsuario

  constructor(private autenticacionService: AutenticacionService) { }

  ngOnInit() {
  }

  registrar() {
	const datos: IUsuario = {email: this.email, password: this.password}

	this.autenticacionService.registro(datos)
		.subscribe(
			(registro: IUsuario) => this.usuarioLogueado = registro,
			(error: any) => console.log(error)
		)
  }
}
