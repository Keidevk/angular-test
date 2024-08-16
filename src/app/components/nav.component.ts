import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector:'Nav-Component',
  standalone:true,
  imports:[RouterLink,RouterLinkActive],
  template:`
  <nav class="grid grid-cols-4 relative text-center text-base md:text-4xl lg:text-5xl z-10 w-full bg-white ">
    <a routerLink="/" routerLinkActive="active">Inicio</a>
    <a routerLink="/recycle" routerLinkActive="active">Beneficios</a>
    <a routerLink="/bins" routerLinkActive="active">Papeleras</a>
    <a routerLink="/galery" routerLinkActive="active">Galeria</a>
  </nav>
  `
})

export class NavComponent {

}
