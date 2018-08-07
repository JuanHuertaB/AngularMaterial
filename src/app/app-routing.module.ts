import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './pages/home/home_page';
import { DrumsComponent } from './pages/drums/drums.component';
import { DrumsticksComponent } from './pages/drumsticks/drumsticks.component';
import { CymbalsComponent } from './pages/cymbals/cymbals.component';


export const routes: Routes = [
  {
    path: 'drums',
    component: DrumsComponent
  },
  {
    path: 'cymbals',
    component: CymbalsComponent
  },
  {
    path: 'drumsticks',
    component: DrumsticksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
