import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from "@angular/core";
import { HomeInfo } from "../components/homeinfo.component";

@Component({
  selector:'home-component',
  standalone:true,
  template:`
  <h1 class="title text-4xl md:text-8xl md:text-center">¿Qué es el reciclaje?</h1>
  <!-- @defer(on interaction){ -->
  <home-info/>
  <!-- }@placeholder{ -->
    <!-- <div class="view"></div> -->
  <!-- } -->
  `,
  styleUrl:'../assets/home.css',
  imports: [HomeInfo]
})

export class HomeComponent{

}
