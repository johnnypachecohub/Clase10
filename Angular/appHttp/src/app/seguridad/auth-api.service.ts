import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IUsuario } from 'app/nucleo/interface';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class AuthApiService {

usuarios: IUsuario[] = [
	{id: 1, email: 'jpacheco@correo.com', password: '123456', createAt: '2017-11-04', updatedAt: '2017-11-04'},
	{id: 2, email: 'shidalgo@correo.com', password: '123456', createAt: '2017-11-04', updatedAt: '2017-11-04'},
	{id: 3, email: 'cvidalon@correo.com', password: '123456', createAt: '2017-11-04', updatedAt: '2017-11-04'}
]

  constructor() { }

  registro(usuario: IUsuario): Observable<IUsuario> {
	const observador: Observable<IUsuario> = Observable.create(
		(observer: Observer<IUsuario>) => {
			setTimeout(() => {
				const registro: IUsuario = this.usuarios.find(usuario => usuario.email.toUpperCase() === usuario.email.toUpperCase() && usuario.password === usuario.password)

				observer.next(registro)
			}, 1500)
		}
	)

	return observador
  }

}
