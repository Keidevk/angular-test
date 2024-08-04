import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector:'Nav-Component',
  standalone:true,
  imports:[RouterLink,RouterLinkActive],
  template:`
  <nav class="grid grid-cols-4 text-center text-base sm:text-4xl ">
    <a routerLink="/" routerLinkActive="active">Inicio</a>
    <a routerLink="/recycle" routerLinkActive="active">Beneficios</a>
    <a routerLink="/bins" routerLinkActive="active">Papeleras</a>
    <a routerLink="/galery" routerLinkActive="active">Galeria</a>
  </nav>
  `
})

export class NavComponent {

}
