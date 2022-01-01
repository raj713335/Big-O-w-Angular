import { Routes } from "@angular/router";

import { IntroductionComponent } from '../introduction/introduction.component';
import { BigonotationsComponent } from "../bigonotations/bigonotations.component";
import { DatastructuresComponent } from "../datastructures/datastructures.component";
import { AlgorithmsComponent } from "../algorithms/algorithms.component";
import { BigocheatsheetComponent } from "../bigocheatsheet/bigocheatsheet.component";
import { GithubComponent } from "../github/github.component";

export const routes: Routes = [
    { path: 'introduction', component: IntroductionComponent },
    { path: 'bigonotations', component: BigonotationsComponent },
    { path: 'cheatsheet', component: BigocheatsheetComponent },
    { path: 'ds', component: DatastructuresComponent },
    { path: 'algo', component: AlgorithmsComponent },
    { path: 'github', component: GithubComponent },
    { path: '', redirectTo: '/introduction', pathMatch: 'full' }
];