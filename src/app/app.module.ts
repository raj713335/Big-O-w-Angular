import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { BigonotationsComponent } from './bigonotations/bigonotations.component';
import { DatastructuresComponent } from './datastructures/datastructures.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { BigocheatsheetComponent } from './bigocheatsheet/bigocheatsheet.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    IntroductionComponent,
    BigonotationsComponent,
    DatastructuresComponent,
    AlgorithmsComponent,
    BigocheatsheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
