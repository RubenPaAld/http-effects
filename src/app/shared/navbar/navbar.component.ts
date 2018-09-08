import { Component, OnInit } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  faSearch = faSearch;

  collarpse:boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  open() {
    this.collarpse = !this.collarpse;
  }

  buscar(termino: string) {

    if (!termino)
      return;

    this.router.navigate(['/usuario',termino]);
  }
}
