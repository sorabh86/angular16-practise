import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicDirective } from './directive/basic.directive';
import { BetterDirective } from './directive/better.directive';
import { ReactiveDirective } from './directive/reactive.directive';
import { ReactiveBindingDirective } from './directive/reactive-binding.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicDirective,
    BetterDirective,
    ReactiveDirective,
    ReactiveBindingDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
