import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"residence", component:ResidenceComponent},
  //{path:"**", component:NotfoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
