import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsuarioModel} from '../../models/usuario.model';
import {AppState} from '../../store/app.reducer';
import {select, Store} from '@ngrx/store';
import {CargarUsuarios} from '../../store/actions';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit, OnDestroy {

  usuarios: UsuarioModel[];
  loading: boolean;
  err:any;
  usuariosSubscription: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new CargarUsuarios());
    this.usuariosSubscription = this.store.pipe(
      select('usuarios'))
      .subscribe(
      usuarios => {
        this.usuarios = usuarios.users;
        this.loading = usuarios.loading;
        this.err = usuarios.error;
      }

    )
  }

  ngOnDestroy(): void {
    this.usuariosSubscription.unsubscribe();
  }

}
