import { Component } from "@angular/core";
import { HomeInfo } from "../components/homeinfo.component";

@Component({
  selector:'home-component',
  standalone:true,
  template:`
  @defer(){
    <h1 [style.height]="showed ? '80vh' :'90vh' " class="flex h-[90vh] sm:h-[90vh] transition ease-in-out duration-300 transform items-center justify-center text-4xl md:text-8xl md:text-center">¿Qué es el reciclaje?</h1>
    <div class="flex justify-center">
      <p class="w-52 h-7 text-center border-t-2 border-t-black animate-pulse" [style.display]="showed ? 'none':'block'" (click)="showTheInfo()">Mostrar Informción</p>
    </div>
    <home-info [style.opacity]="isClicked ? 1 : 0" [style.display]="isClicked ? 'block':'none'"/>
  }@placeholder{

   }
  `,
  imports: [HomeInfo]
})

export class HomeComponent{
  isClicked = false;
  showed = false;
  showTheInfo() {
    this.isClicked = !this.isClicked;
    if(this.showed==false){
      this.showed = true;
    }
  }

}
