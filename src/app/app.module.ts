import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServerElementComponent } from './server-element/server-element.component';
import { OptionsFormComponent } from './options-form/options-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerElementComponent,
    OptionsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
