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
import { MorecontactComponent } from './morecontact/morecontact.component';
import { AlgomodaldetailsComponent } from './algomodaldetails/algomodaldetails.component';
import { DsmodaldetailsComponent } from './dsmodaldetails/dsmodaldetails.component';

import { SortingalgolistService } from './services/sortingalgolist.service';
import { DatastructurelistService } from './services/datastructurelist.service';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    IntroductionComponent,
    BigonotationsComponent,
    DatastructuresComponent,
    AlgorithmsComponent,
    BigocheatsheetComponent,
    MorecontactComponent,
    AlgomodaldetailsComponent,
    DsmodaldetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SortingalgolistService, DatastructurelistService],
  bootstrap: [AppComponent]
})

export class AppModule { }
