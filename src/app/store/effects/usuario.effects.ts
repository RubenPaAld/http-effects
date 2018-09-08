import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as usuarioActions from '../actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {UsuarioService} from '../../services/usuario.service';
import {of} from 'rxjs';

@Injectable()
export class UsuarioEffects {

    constructor(
        private actions$: Actions,
        private usuariosService: UsuarioService
    ) {}

    @Effect()
    cargarUsuario$ = this.actions$.pipe(
        ofType(usuarioActions.CARGAR_USUARIO),
        switchMap( (action: usuarioActions.CargarUsuario) => this.usuariosService.getUser(action.id)
            .pipe(
                map(
                    user => new usuarioActions.CargarUsuarioSuccess(user)
                ),
                catchError(
                    err => of(new usuarioActions.CargarUsuarioFail(err))
                )
            )
        )
    );


}
