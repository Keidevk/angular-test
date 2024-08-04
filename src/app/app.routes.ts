import { Routes } from '@angular/router';
import { RecyclerComponent } from './pages/recycle.component';
import { HomeComponent } from './pages/main.component';
import { BinsComponent } from './pages/bins.component';

export const routes: Routes = [
  {
    title:'Reciclaje',component:RecyclerComponent,path:'recycle'
  },
  {
    title:'¿Qué es el reciclaje?',component:HomeComponent,path:''
  },
  {
    title:'Papeleras',component:BinsComponent,path:'bins'
  }

];
