import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {RouterModule} from '@angular/router';

library.add(fas);

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
  ],
  exports: [
    NavbarComponent,
    FontAwesomeModule
  ]
})
export class SharedModule { }
