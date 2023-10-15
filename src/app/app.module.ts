import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersService } from './servers/servers.service';
import { UserService } from './users/users.service';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-rouding.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate.service';

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
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    ServersService, 
    UserService,
    AuthService,
    CanDeactivateGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
