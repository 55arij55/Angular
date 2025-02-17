import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from '../annonce.component';
import { ListComponent } from '../list/list.component';
import { NotfoundComponent } from 'src/app/notfound/notfound.component';

const ROUTES:Routes=[
  //{path:"**", component:NotfoundComponent},
  {path:"annonce" , component:AnnonceComponent ,children:[
    {path:"list",component:ListComponent},
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
export class AnnonceRoutingModule { }
