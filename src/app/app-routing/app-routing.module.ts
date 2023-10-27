import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { UserComponent } from '../user/user.component';

const appRoute:Routes = [
  {path:'', redirectTo:'/home', pathMatch:"full"},
  {path:'home', component:HomeComponent},
  {path:'users/:id', component:UserComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
