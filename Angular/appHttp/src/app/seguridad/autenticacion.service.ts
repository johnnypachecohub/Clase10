import { AuthApiService } from './auth-api.service';
import { Injectable } from '@angular/core';
import { IUsuario } from 'app/nucleo/interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AutenticacionService {

  usuario: IUsuario

  constructor(private authApiService: AuthApiService) { }

  login(usuario: IUsuario) {

  }

  logout() {

  }

  registro(usuario: IUsuario): Observable<IUsuario> {
	return this.authApiService.registro(usuario)
  }

  obtenerToken() {

  }

}
