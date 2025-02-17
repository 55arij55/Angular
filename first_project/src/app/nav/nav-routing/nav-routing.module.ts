import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from 'src/app/notfound/notfound.component';
import { AnnonceComponent } from 'src/app/annonce/annonce.component';
import { ListComponent } from 'src/app/annonce/list/list.component';

const ROUTES:Routes=[
 // {path:"**", component:NotfoundComponent},
  {path:"nav" , component:AnnonceComponent ,children:[
    {path:"menu",component:ListComponent},
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports:[RouterModule]
})
export class NavRoutingModule { }
