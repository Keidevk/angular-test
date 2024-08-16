import { Component } from "@angular/core";
import { HomeInfo } from "../components/homeinfo.component";
import { TopBgComponent } from "../components/topbg.component";
import { RecycleLogo } from "../components/logorecycle.component";

@Component({
  selector:'home-component',
  standalone:true,
  template:`
    <Topbg/>
    <div class="relative z-10">
      <h1 class="flex flex-col h-[70vh] md:h-[60vh] transition ease-in-out duration-300 transform items-center justify-center text-4xl lg:text-8xl md:text-center">
        ¿Qué es el reciclaje?
      <img src="/recicle.svg" class="relative h-36" />
      </h1>
      <div class="flex justify-center relative top-[20vh] z-10">
        <p class="w-52 lg:h-64 h-7 text-center border-t-2 border-t-black animat-pulse text-base md:text-3xl xl:text-5xl" [style.display]="showed ? 'none':'block'" (click)="showTheInfo()">Mostrar Informción</p>
      </div>
    </div>
    <div class="-z-50">
      <div [style.opacity]="isClicked ? 0 : 1" [style.display]="isClicked ? 'none':'block'"
      class="bg-green-custom h-52 w-full absolute top-3/4 left-0 rounded-t-full">.</div>
      <div [style.opacity]="isClicked ? 0 : 1" [style.display]="isClicked ? 'none':'block'"
      class="bg-green-custom h-64 w-full absolute top-2/3 left-0 rounded-t-full">.</div>
      <div [style.opacity]="isClicked ? 1 : 0" [style.display]="isClicked ? 'block':'none'" [style.top]="isClicked ? '60%':'100%'"
      class="bg-green-custom h-min w-full absolute top-full -left-1">
       <home-info [style.opacity]="isClicked ? 1 : 0" [style.display]="isClicked ? 'block':'none'"/>
      </div>
    </div>
  `,
  imports: [HomeInfo, TopBgComponent, RecycleLogo]
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
