import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { Routes, RouterModule } from '@angular/router';
import { ServersService } from './servers/servers.service';
import { UserService } from './users/users.service';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

const appRoutes:Routes = [
  {path:'', component:HomeComponent},
  {path:'users', component:UsersComponent, children:[
    {path:':id', component:UserComponent},
  ]},
  {path:'servers', component:ServersComponent, children:[
    {path:':id', component:ServerComponent},
    {path:':id/edit', component:EditServerComponent},
  ]},
  {path:'not-found', component:PageNotFoundComponent},
  {path:'**', redirectTo:'not-found'},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    UsersComponent,
    UserComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
