import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { HomePage } from '../app/pages/home/home_page';

import { MatToolbarModule,
         MatButtonModule, 
        MatSidenavModule, 
        MatIconModule, 
        MatListModule, 
        MatGridListModule, 
        MatCardModule, 
        MatMenuModule, 
        MatTableModule, 
        MatPaginatorModule, 
        MatSortModule } from '@angular/material';
import { DrumsComponent } from './pages/drums/drums.component';
import { CymbalsComponent } from './pages/cymbals/cymbals.component';
import { DrumsticksComponent } from './pages/drumsticks/drumsticks.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    DrumsComponent,
    CymbalsComponent,
    DrumsticksComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
