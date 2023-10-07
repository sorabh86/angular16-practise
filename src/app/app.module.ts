import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicDirective } from './directive/basic.directive';
import { BetterDirective } from './directive/better.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicDirective,
    BetterDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
